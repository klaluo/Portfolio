"use client";

export default function QuoteBlock({ block }) {
    return (
        <blockquote style={{
            margin: "1.5rem 0",
            padding: "1.25rem 1.75rem",
            borderLeft: "3px solid #FFC358",
            background: "#fffdf8",
            borderRadius: "0 8px 8px 0",
            fontStyle: "italic",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "#3a3a3a",
        }}>
            {block.text}
        </blockquote>
    );
}