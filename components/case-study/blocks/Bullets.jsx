"use client";

export function parseBold(text) {
    const parts = [];
    let remaining = text;
    while (remaining.length > 0) {
        const start = remaining.indexOf("**");
        if (start === -1) {
            parts.push(remaining);
            break;
        }
        const end = remaining.indexOf("**", start + 2);
        if (end === -1) {
            parts.push(remaining);
            break;
        }
        if (start > 0) parts.push(remaining.slice(0, start));
        parts.push(<strong key={parts.length}>{remaining.slice(start + 2, end)}</strong>);
        remaining = remaining.slice(end + 2);
    }
    return parts;
}

export default function Bullets({ items, styles, listClassName }) {
    if (!items?.length) return null;
    const className = listClassName ?? styles.projectList;
    return (
        <ul className={className}>
            {items.map((item, i) => (
                <li key={i}>{typeof item === "string" ? parseBold(item) : item}</li>
            ))}
        </ul>
    );
}
