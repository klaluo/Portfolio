"use client";

/**
 * ReflectionList
 * ──────────────
 * 2×2 grid. Each takeaway has:
 *   - numbered accent label (TAKEAWAY 01, 02...)
 *   - bold title (label field)
 *   - short body paragraph (body field)
 *
 * Separated by a thin horizontal rule above the grid.
 */
export default function ReflectionList({ block }) {
    const { items = [] } = block;

    return (
        <div style={{ marginTop: "2rem" }}>
            {/* Thin rule */}
            <div style={{
                height: "1px",
                background: "#e0e0e0",
                marginBottom: "2.5rem",
            }} />

            {/* 2×2 grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "2.5rem 4rem",
            }}>
                {items.map((item, i) => (
                    <div key={i}>
                        {/* Numbered label */}
                        <p style={{
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "#FFC358",
                            margin: "0 0 0.75rem",
                        }}>
                            Takeaway {String(i + 1).padStart(2, "0")}
                        </p>

                        {/* Bold title */}
                        <p style={{
                            fontSize: "0.975rem",
                            fontWeight: 700,
                            color: "#1f1f1f",
                            margin: "0 0 0.6rem",
                            lineHeight: 1.35,
                        }}>
                            {item.label}
                        </p>

                        {/* Body */}
                        <p style={{
                            fontSize: "0.9rem",
                            color: "#666666",
                            lineHeight: 1.7,
                            margin: 0,
                        }}>
                            {item.body}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}