"use client";

/**
 * CardGrid — updated
 * ──────────────────
 * Original: renders cards with title + items[]
 * Updated:  also supports accent (top border color), label, and description
 *
 * New card shape (daybreak.js cardGrid block):
 *   card.label       : string  — small caps category label (e.g. "Offensive")
 *   card.title       : string  — card heading
 *   card.accent      : string  — CSS color for the top border (e.g. "#c75f3e")
 *   card.description : string  — short body paragraph
 *   card.items       : string[] — bullet list of card names/effects
 */
export default function CardGrid({ cards, styles, cardClassName }) {
    if (!cards?.length) return null;

    return (
        <div className={styles.insightCards}>
            {cards.map((card, i) => {
                const hasAccent = !!card.accent;

                return (
                    <article
                        key={i}
                        className={cardClassName ?? styles.insightCard}
                        style={hasAccent ? {
                            borderTop: `3px solid ${card.accent}`,
                            paddingTop: "1.25rem",
                        } : undefined}
                    >
                        {/* Category label */}
                        {card.label && (
                            <p style={{
                                fontSize: "0.6rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.18em",
                                fontWeight: 700,
                                color: card.accent ?? "#8a8a8a",
                                margin: "0 0 0.4rem",
                            }}>
                                {card.label}
                            </p>
                        )}

                        {/* Title */}
                        <h4 style={{ marginBottom: card.description ? "0.5rem" : undefined }}>
                            {card.title}
                        </h4>

                        {/* Description paragraph */}
                        {card.description && (
                            <p style={{
                                fontSize: "0.875rem",
                                color: "#555555",
                                lineHeight: 1.6,
                                margin: "0 0 0.75rem",
                            }}>
                                {card.description}
                            </p>
                        )}

                        {/* Items list */}
                        {card.items?.length > 0 && (
                            <ul>
                                {card.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </article>
                );
            })}
        </div>
    );
}