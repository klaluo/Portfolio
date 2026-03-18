"use client";

import { parseBold } from "./Bullets";

/**
 * TwoColumnContributions
 * ─────────────────────
 * Renders a two-column layout:
 *   left  → paragraphs (project description)
 *   right → labelled bullet list (contributions)
 *
 * Data shape (from daybreak.js):
 *   block.left.paragraphs  : string[]
 *   block.right.label      : string
 *   block.right.bullets    : string[]
 */
export default function TwoColumnContributions({ block, styles }) {
    const { left, right } = block;

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
            marginTop: "1rem",
        }}>
            {/* Left — project paragraphs */}
            <div>
                {left?.paragraphs?.map((text, i) => (
                    <p key={i} className={styles.projectBody}>{text}</p>
                ))}
            </div>

            {/* Right — contributions list */}
            <div style={{
                background: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: "10px",
                padding: "1.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}>
                {right?.label && (
                    <p style={{
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#8a8a8a",
                        fontWeight: 700,
                        marginBottom: "1rem",
                        paddingBottom: "0.75rem",
                        borderBottom: "1px solid #ebebeb",
                    }}>
                        {right.label}
                    </p>
                )}
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {right?.bullets?.map((item, i) => (
                        <li key={i} style={{
                            display: "flex",
                            gap: "0.75rem",
                            alignItems: "baseline",
                            padding: "0.55rem 0",
                            borderBottom: "1px solid #f4f4f4",
                            fontSize: "0.9rem",
                            color: "#3a3a3a",
                            lineHeight: 1.6,
                        }}>
                            <span style={{ color: "#FFC358", flexShrink: 0, fontSize: "0.7rem" }}>↗</span>
                            {parseBold(item)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}