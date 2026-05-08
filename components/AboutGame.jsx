'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import './AboutGame.css';

const FACTS = [
    { icon: '✈️', text: 'I love traveling and exploring new countries. ᯓ ✈︎ ⋆°•☁︎' },
    { icon: '🖐️', text: 'I’m ambidextrous. ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧' },
    { icon: '💅', text: 'I run my own nail studio.' },
    { icon: '🧳', text: 'I’ve lived out of a backpack for 2 months.' },
    { icon: '🎵', text: 'I’m currently helping design a gamified music learning app for kids. ‧₊˚♪ 𝄞₊˚⊹'  },
    { icon: '📷ྀིྀི', text: 'I have a soft spot for nostalgic tech and digital cameras. ༘⋆📼˚ ༘ ೀ⋆｡˚'},
    { icon: '🛍️', text: 'I can’t leave a stationery store empty-handed.' },
  ];

const W = 700;
const H = 280;
const GROUND = H - 44;
const S = 1.9;
const BLOCK_W = 36;
const BLOCK_H = 18;
const BLOCK_X = [60, 150, 240, 330, 420, 510, 610];
const BLOCK_Y = [140, 130, 145, 135, 140, 130, 138];
const PARTICLE_LIFE = 28;
const PARTICLE_COUNT = 8;
const PARTICLE_GRAVITY = 0.25;

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

  const drawGirl = useCallback((ctx, px, py, facing) => {
    ctx.save();
    ctx.translate(px + 14, py + 22);
    ctx.scale(S, S);
    if (facing < 0) ctx.scale(-1, 1);

    // long black hair behind body
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(-6, -22, 12, 30);
    ctx.fillRect(-8, -18, 3, 25);
    ctx.fillRect(5, -18, 3, 25);

    // head
    ctx.fillStyle = '#f5c9a0';
    ctx.fillRect(-5, -22, 10, 10);

    // black fringe
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(-5, -22, 10, 3);
    ctx.fillRect(-6, -20, 2, 6);
    ctx.fillRect(4, -20, 2, 6);

    // pink bow
    ctx.fillStyle = '#ff6ba8';
    ctx.fillRect(-5, -27, 4, 3);
    ctx.fillRect(1, -27, 4, 3);
    ctx.fillStyle = '#ff3d87';
    ctx.fillRect(-1, -27, 2, 4);

    // eyes
    ctx.fillStyle = '#2a1a0a';
    ctx.fillRect(-3, -17, 2, 2);
    ctx.fillRect(1, -17, 2, 2);
    ctx.fillStyle = '#fff';
    ctx.fillRect(-2, -17, 1, 1);
    ctx.fillRect(2, -17, 1, 1);

    // blush
    ctx.fillStyle = 'rgba(255,130,130,0.45)';
    ctx.fillRect(-5, -14, 2, 1);
    ctx.fillRect(3, -14, 2, 1);

    // smile
    ctx.fillStyle = '#d97b6c';
    ctx.fillRect(-1, -13, 2, 1);

    // pink top
    ctx.fillStyle = '#ff6ba8';
    ctx.fillRect(-5, -12, 10, 8);
    ctx.fillStyle = '#fff';
    ctx.fillRect(-2, -12, 4, 2);

    // arms
    ctx.fillStyle = '#f5c9a0';
    ctx.fillRect(-7, -12, 2, 6);
    ctx.fillRect(5, -12, 2, 6);

    // yellow skirt
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(-7, -4, 14, 6);
    ctx.fillStyle = '#ffe94d';
    ctx.fillRect(-6, -4, 12, 2);

    // legs
    ctx.fillStyle = '#f5c9a0';
    ctx.fillRect(-4, 2, 3, 6);
    ctx.fillRect(1, 2, 3, 6);

    // pink shoes
    ctx.fillStyle = '#d63384';
    ctx.fillRect(-5, 7, 4, 2);
    ctx.fillRect(1, 7, 4, 2);

    ctx.restore();
  }, []);

  const drawBg = useCallback((ctx) => {
    ctx.fillStyle = '#d0eeff';
    ctx.fillRect(0, 0, W, GROUND + 20);

    [[70, 38], [250, 55], [460, 30], [600, 50]].forEach(([cx, cy]) => {
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.beginPath(); ctx.arc(cx, cy, 20, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 18, cy + 5, 15, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx - 14, cy + 6, 13, 0, Math.PI * 2); ctx.fill();
    });

    ctx.fillStyle = '#ffe566';
    ctx.beginPath(); ctx.arc(650, 30, 18, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ffd700';
    ctx.beginPath(); ctx.arc(650, 30, 14, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#ffb3d1';
    [[40, 80], [350, 28], [170, 95], [480, 65]].forEach(([sx, sy]) => {
      ctx.font = '10px serif';
      ctx.textAlign = 'center';
      ctx.fillText('✦', sx, sy);
    });
  }, []);

  const drawBlock = useCallback((ctx, b) => {
    const by = b.y + b.bounce;

    // drop shadow
    ctx.fillStyle = 'rgba(0,0,0,0.07)';
    ctx.fillRect(b.x + 2, by + 2, BLOCK_W, BLOCK_H);

    // block body (pink when unlit, soft pink when hit)
    ctx.fillStyle = b.hit ? '#ffd6e8' : '#ff6ba8';
    ctx.beginPath();
    ctx.roundRect(b.x, by, BLOCK_W, BLOCK_H, 4);
    ctx.fill();

    // highlight strip along top
    ctx.fillStyle = b.hit ? '#ffe8f2' : '#ff9ec5';
    ctx.fillRect(b.x + 2, by + 2, BLOCK_W - 4, 3);

    // label
    ctx.fillStyle = b.hit ? '#d6a0b8' : '#fff';
    ctx.font = 'bold 13px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText(b.hit ? '✓' : '?', b.x + BLOCK_W / 2, by + 13);
  }, []);

  const drawGround = useCallback((ctx) => {
    ctx.fillStyle = '#5dbb3a';
    ctx.fillRect(0, GROUND + 20, W, 5);
    ctx.fillStyle = '#78d44e';
    for (let i = 0; i < W; i += 38) ctx.fillRect(i, GROUND + 18, 20, 7);
    ctx.fillStyle = '#a8e87a';
    ctx.fillRect(0, GROUND + 25, W, H - GROUND - 25);
    [60, 170, 300, 430, 560, 660].forEach(fx => {
      ctx.fillStyle = '#ffd6e8';
      ctx.fillRect(fx, GROUND + 15, 5, 5);
      ctx.fillStyle = '#ffec80';
      ctx.fillRect(fx + 1, GROUND + 16, 3, 3);
    });
  }, []);

  const drawIdle = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    drawBg(ctx);
    drawGround(ctx);
    FACTS.forEach((_, i) => drawBlock(ctx, { x: BLOCK_X[i], y: BLOCK_Y[i], hit: false, bounce: 0 }));
    drawGirl(ctx, 20, GROUND, 1);
    ctx.fillStyle = '#bbb';
    ctx.font = '11px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText('press play to start', W / 2, H - 8);
  }, [drawBg, drawGround, drawBlock, drawGirl]);

  const spawnParticles = (particles, x, y) => {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: x + BLOCK_W / 2,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 4 - 1,
        life: PARTICLE_LIFE,
        color: ['#ff6ba8', '#ffd700', '#ff3d87', '#c77dba', '#ffe94d', '#fff'][i % 6],
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
    drawBg(ctx);
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
            setTimeout(() => setFact({ icon: '🎉', text: "You found all my facts! Now you really know me. Thanks for playing ٩(◕‿◕｡)۶" }), 500);
          }
        }
      }
    });

    s.particles = s.particles.filter(p => p.life > 0);
    s.particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += PARTICLE_GRAVITY; p.life--;
      ctx.globalAlpha = p.life / PARTICLE_LIFE;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      ctx.globalAlpha = 1;
    });

    s.blocks.forEach(b => drawBlock(ctx, b));
    drawGirl(ctx, player.x, player.y, player.facing);

    s.animId = requestAnimationFrame(gameLoop);
  }, [drawBg, drawGround, drawBlock, drawGirl]);

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
    <div className="about-game">
      {/* Header */}
      <div className="about-game__header">
        <span className="about-game__title">
          About Me — Interactive ₊✩‧₊˚౨ৎ˚₊✩‧₊
        </span>
        <div className="about-game__controls">
          <span className="about-game__score">
            {score} / {FACTS.length}
          </span>
          <button
            onClick={handlePlay}
            className="about-game__btn"
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
        className="about-game__canvas"
        style={{ imageRendering: 'pixelated' }}
      />

      {/* Fact bar */}
      <div className="about-game__fact-bar">
        <span className="about-game__fact-icon">{fact.icon}</span>
        <span className="about-game__fact-text">{fact.text}</span>
      </div>
    </div>
  );
}