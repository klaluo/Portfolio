"use client";

/**
 * ReflectionList
 * ──────────────
 * Renders takeaways as a clean stacked list separated by thin grey dividers.
 * No large subheadings — just a small bold label + body text per item.
 *
 * Data shape (from daybreak.js):
 *   block.items : {
 *     label : string   — bold short title
 *     body  : string   — supporting paragraph
 *   }[]
 */
export default function ReflectionList({ block }) {
    const { items = [] } = block;

    return (
        <div style={{
            marginTop: "1.25rem",
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
            background: "#ffffff",
            overflow: "hidden",
        }}>
            {items.map((item, i) => (
                <div key={i} style={{
                    display: "grid",
                    gridTemplateColumns: "1.5rem 1fr",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    borderBottom: i < items.length - 1 ? "1px solid #f0f0f0" : "none",
                    alignItems: "baseline",
                }}>
                    {/* Number */}
                    <span style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "#d0d0d0",
                        letterSpacing: "0.05em",
                        paddingTop: "0.15rem",
                    }}>
                        {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div>
                        <p style={{
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            color: "#1f1f1f",
                            margin: "0 0 0.35rem",
                            lineHeight: 1.4,
                        }}>
                            {item.label}
                        </p>
                        <p style={{
                            fontSize: "0.875rem",
                            color: "#666666",
                            lineHeight: 1.7,
                            margin: 0,
                        }}>
                            {item.body}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}