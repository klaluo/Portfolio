"use client";

/**
 * CompTable
 * ─────────
 * Renders a competitive analysis table.
 * Strength tags are pill-styled, gap is plain text.
 * The highlighted row (Daybreak) gets a distinct background.
 *
 * Data shape (from daybreak.js):
 *   block.columns : string[]
 *   block.rows    : {
 *     game       : string
 *     strengths  : string[]
 *     gap        : string
 *     highlight? : boolean
 *   }[]
 */
export default function CompTable({ block, styles }) {
    const { columns = [], rows = [] } = block;

    return (
        <div style={{
            marginTop: "1rem",
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
            overflow: "hidden",
            background: "#ffffff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}>
            <table style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
            }}>
                <thead>
                    <tr style={{ background: "#f9f9f9", borderBottom: "1px solid #e5e5e5" }}>
                        {columns.map((col, i) => (
                            <th key={i} style={{
                                textAlign: "left",
                                padding: "0.85rem 1.25rem",
                                fontSize: "0.65rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.16em",
                                color: "#8a8a8a",
                                fontWeight: 700,
                            }}>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} style={{
                            borderBottom: i < rows.length - 1 ? "1px solid #f0f0f0" : "none",
                            background: row.highlight ? "#fffbf0" : "transparent",
                        }}>
                            {/* Game name */}
                            <td style={{
                                padding: "1rem 1.25rem",
                                fontWeight: row.highlight ? 700 : 500,
                                color: row.highlight ? "#b8922a" : "#1f1f1f",
                                verticalAlign: "top",
                                whiteSpace: "nowrap",
                            }}>
                                {row.game}
                            </td>

                            {/* Strength tags */}
                            <td style={{ padding: "1rem 1.25rem", verticalAlign: "top" }}>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                    {row.strengths?.map((s, j) => (
                                        <span key={j} style={{
                                            display: "inline-block",
                                            fontSize: "0.65rem",
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            padding: "0.2rem 0.6rem",
                                            borderRadius: "999px",
                                            background: row.highlight ? "#fff5e0" : "#f0f0f0",
                                            color: row.highlight ? "#b8922a" : "#555555",
                                            fontWeight: 600,
                                            border: row.highlight ? "1px solid #f0a500" : "1px solid transparent",
                                        }}>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </td>

                            {/* Gap / outcome */}
                            <td style={{
                                padding: "1rem 1.25rem",
                                color: row.highlight ? "#3a3a3a" : "#666666",
                                verticalAlign: "top",
                                lineHeight: 1.65,
                            }}>
                                {row.gap}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}