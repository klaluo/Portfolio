"use client";

export default function CardGrid({ cards, styles, cardClassName }) {
    if (!cards?.length) return null;
    return (
        <div className={styles.insightCards}>
            {cards.map((card, i) => (
                <article key={i} className={cardClassName ?? styles.insightCard}>
                    <h4>{card.title}</h4>
                    <ul>
                        {card.items?.map((item, j) => (
                            <li key={j}>{item}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    );
}
