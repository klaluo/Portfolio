"use client";

/**
 * IterationCards
 * ──────────────
 * Renders a 2×2 grid of playtesting problem → fix cards.
 * Each card shows:
 *   - problem     : card header (the issue found during testing)
 *   - description : what happened / why it mattered
 *   - fix         : what we changed (rendered as a highlighted tag at the bottom)
 *
 * Data shape (from daybreak.js):
 *   block.cards : {
 *     problem     : string
 *     description : string
 *     fix         : string
 *   }[]
 */
export default function IterationCards({ block }) {
    const { cards = [] } = block;

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            marginTop: "1rem",
        }}>
            {cards.map((card, i) => (
                <article key={i} style={{
                    background: "#ffffff",
                    border: "1px solid #e5e5e5",
                    borderRadius: "10px",
                    padding: "1.25rem 1.5rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                }}>
                    {/* Problem label */}
                    <p style={{
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "#b53d3d",
                        fontWeight: 700,
                        margin: 0,
                    }}>
                        Problem
                    </p>

                    {/* Problem title */}
                    <h4 style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#1f1f1f",
                        margin: 0,
                        lineHeight: 1.35,
                    }}>
                        {card.problem}
                    </h4>

                    {/* Description */}
                    <p style={{
                        fontSize: "0.875rem",
                        color: "#555555",
                        lineHeight: 1.65,
                        margin: 0,
                        flex: 1,
                    }}>
                        {card.description}
                    </p>

                    {/* Fix tag */}
                    <div style={{
                        marginTop: "0.5rem",
                        paddingTop: "0.75rem",
                        borderTop: "1px solid #f0f0f0",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                    }}>
                        <span style={{
                            fontSize: "0.6rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            color: "#2d7a4a",
                            fontWeight: 700,
                            paddingTop: "0.05rem",
                            flexShrink: 0,
                        }}>
                            Fix
                        </span>
                        <span style={{
                            fontSize: "0.85rem",
                            color: "#2d7a4a",
                            lineHeight: 1.5,
                        }}>
                            {card.fix}
                        </span>
                    </div>
                </article>
            ))}
        </div>
    );
}