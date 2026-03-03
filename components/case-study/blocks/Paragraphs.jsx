"use client";

export default function Paragraphs({ items, styles }) {
    if (!items?.length) return null;
    return (
        <>
            {items.map((text, i) => (
                <p key={i} className={styles.projectBody}>
                    {text}
                </p>
            ))}
        </>
    );
}
