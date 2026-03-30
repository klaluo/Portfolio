'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

const FACTS = [
    { icon: '✈️', text: 'I love traveling and exploring new countries.' },
    { icon: '🖐️', text: 'I’m ambidextrous.' },
    { icon: '💅', text: 'I run my own nail studio.' },
    { icon: '🧳', text: 'I’ve lived out of a backpack for 2 months.' },
    { icon: '🍣', text: 'I’ll try almost any food at least once.' },
    { icon: '📱', text: 'I notice bad app design instantly.' },
    { icon: '🛍️', text: 'I can’t leave a stationery store empty-handed.' },
  ];

const W = 700;
const H = 280;
const GROUND = H - 44;
const BLOCK_W = 36;
const BLOCK_H = 18;
const BLOCK_X = [60, 150, 240, 330, 420, 510, 610];
const BLOCK_Y = [150, 140, 155, 145, 150, 140, 148];

function makeBlocks() {
  return FACTS.map((f, i) => ({
    x: BLOCK_X[i],
    y: BLOCK_Y[i],
    hit: false,
    bounce: 0,
    fact: f,
  }));
}

function makePlayer() {
  return { x: 20, y: GROUND, vy: 0, vx: 0, facing: 1, onGround: true };
}

export default function AboutGame() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    playing: false,
    player: makePlayer(),
    blocks: makeBlocks(),
    keys: {},
    particles: [],
    score: 0,
    animId: null,
  });

  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [fact, setFact] = useState({ icon: '🕹️', text: 'Press play, then use arrow keys or WASD to move. Jump with ↑ / W / Space to hit the blocks!' });

  const drawPixelPerson = useCallback((ctx, x, y, facing) => {
    ctx.save();
    ctx.translate(x + 9, y + 20);
    if (facing < 0) ctx.scale(-1, 1);
    ctx.fillStyle = '#2c2c2a';
    ctx.fillRect(-5, -20, 10, 6);
    ctx.fillStyle = '#f5c48a';
    ctx.fillRect(-4, -14, 8, 7);
    ctx.fillStyle = '#2c2c2a';
    ctx.fillRect(-2, -16, 2, 3);
    ctx.fillRect(2, -16, 2, 3);
    ctx.fillStyle = '#3a6fd8';
    ctx.fillRect(-5, -7, 10, 8);
    ctx.fillStyle = '#2c2c2a';
    ctx.fillRect(-7, -7, 2, 6);
    ctx.fillRect(5, -7, 2, 6);
    ctx.fillStyle = '#444';
    ctx.fillRect(-4, 1, 4, 6);
    ctx.fillRect(0, 1, 4, 6);
    ctx.restore();
  }, []);

  const drawBlock = useCallback((ctx, b) => {
    const by = b.y + b.bounce;
    ctx.fillStyle = b.hit ? '#c8c2b0' : '#2c2c2a';
    ctx.fillRect(b.x, by, BLOCK_W, BLOCK_H);
    ctx.fillStyle = b.hit ? '#a8a298' : '#f9f7f2';
    ctx.font = 'bold 13px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText(b.hit ? '✓' : '?', b.x + BLOCK_W / 2, by + 13);
  }, []);

  const drawGround = useCallback((ctx) => {
    ctx.fillStyle = '#e0ddd5';
    ctx.fillRect(0, GROUND + 20, W, 2);
    ctx.fillStyle = '#d0ccbf';
    for (let i = 0; i < W; i += 36) ctx.fillRect(i, GROUND + 20, 18, 2);
  }, []);

  const drawIdle = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    drawGround(ctx);
    FACTS.forEach((_, i) => drawBlock(ctx, { x: BLOCK_X[i], y: BLOCK_Y[i], hit: false, bounce: 0 }));
    drawPixelPerson(ctx, 20, GROUND, 1);
    ctx.fillStyle = '#bbb';
    ctx.font = '11px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText('press play to start', W / 2, H - 8);
  }, [drawGround, drawBlock, drawPixelPerson]);

  const spawnParticles = (particles, x, y) => {
    for (let i = 0; i < 8; i++) {
      particles.push({
        x: x + BLOCK_W / 2,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 4 - 1,
        life: 28,
        color: ['#2c2c2a', '#3a6fd8', '#888'][i % 3],
      });
    }
  };

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const s = stateRef.current;
    if (!s.playing) return;

    ctx.clearRect(0, 0, W, H);
    drawGround(ctx);

    const { keys, player } = s;

    if (keys['ArrowLeft'] || keys['a'] || keys['A']) { player.vx = -3; player.facing = -1; }
    else if (keys['ArrowRight'] || keys['d'] || keys['D']) { player.vx = 3; player.facing = 1; }
    else player.vx *= 0.65;

    const wantJump = keys['ArrowUp'] || keys['w'] || keys['W'] || keys[' '];
    if (wantJump && player.onGround) {
      player.vy = -12;
      player.onGround = false;
    }

    player.vy += 0.5;
    player.x += player.vx;
    player.y += player.vy;

    if (player.y >= GROUND) {
      player.y = GROUND;
      player.vy = 0;
      player.onGround = true;
    }
    player.x = Math.max(0, Math.min(W - 18, player.x));

    s.blocks.forEach(b => {
      if (b.bounce < 0) b.bounce = Math.min(0, b.bounce + 2);
      if (!b.hit) {
        const headX = player.x + 9;
        if (
          player.vy < 0 &&
          headX > b.x + 2 && headX < b.x + BLOCK_W - 2 &&
          player.y > b.y && player.y < b.y + BLOCK_H + 16
        ) {
          b.hit = true;
          b.bounce = -10;
          player.vy = 4;
          s.score++;
          setScore(s.score);
          setFact(b.fact);
          spawnParticles(s.particles, b.x, b.y);
          if (s.score === FACTS.length) {
            setTimeout(() => setFact({ icon: '🎉', text: "You found all my facts! Now you really know me. Thanks for playing 🙌" }), 500);
          }
        }
      }
    });

    s.particles = s.particles.filter(p => p.life > 0);
    s.particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.25; p.life--;
      ctx.globalAlpha = p.life / 28;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      ctx.globalAlpha = 1;
    });

    s.blocks.forEach(b => drawBlock(ctx, b));
    drawPixelPerson(ctx, player.x, player.y, player.facing);

    s.animId = requestAnimationFrame(gameLoop);
  }, [drawGround, drawBlock, drawPixelPerson]);

  const handlePlay = useCallback(() => {
    const s = stateRef.current;
    if (s.animId) cancelAnimationFrame(s.animId);
    s.player = makePlayer();
    s.blocks = makeBlocks();
    s.particles = [];
    s.score = 0;
    s.playing = true;
    setPlaying(true);
    setScore(0);
    setFact({ icon: '👾', text: 'Move with arrow keys or WASD. Jump with ↑ / W / Space to hit the ? blocks!' });
    gameLoop();
  }, [gameLoop]);

  useEffect(() => {
    drawIdle();
  }, [drawIdle]);

  useEffect(() => {
    const onKeyDown = (e) => {
      stateRef.current.keys[e.key] = true;
      if ([' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
    };
    const onKeyUp = (e) => { stateRef.current.keys[e.key] = false; };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      if (stateRef.current.animId) cancelAnimationFrame(stateRef.current.animId);
    };
  }, []);

  return (
    <div style={{
      fontFamily: "'Courier New', monospace",
      background: '#f9f7f2',
      border: '1.5px solid #e0ddd5',
      borderRadius: '12px',
      overflow: 'hidden',
      userSelect: 'none',
      maxWidth: '700px',
      margin: '1rem auto',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px 12px',
        borderBottom: '1px solid #e0ddd5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', color: '#555', textTransform: 'uppercase' }}>
          About Me — Interactive
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontSize: '12px', color: '#888', fontWeight: 600, letterSpacing: '0.05em' }}>
            {score} / {FACTS.length}
          </span>
          <button
            onClick={handlePlay}
            style={{
              background: '#2c2c2a',
              color: '#f9f7f2',
              border: 'none',
              borderRadius: '6px',
              padding: '7px 18px',
              fontSize: '12px',
              fontFamily: "'Courier New', monospace",
              fontWeight: 600,
              letterSpacing: '0.06em',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
          >
            {playing ? 'Restart' : 'Play'}
          </button>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        style={{ display: 'block', width: '100%', imageRendering: 'pixelated' }}
      />

      {/* Fact bar */}
      <div style={{
        minHeight: '52px',
        padding: '12px 20px',
        borderTop: '1px solid #e0ddd5',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <span style={{ fontSize: '18px', flexShrink: 0 }}>{fact.icon}</span>
        <span style={{ fontSize: '13px', color: '#444', lineHeight: 1.5 }}>{fact.text}</span>
      </div>
    </div>
  );
}