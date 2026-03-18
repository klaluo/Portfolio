"use client";

export default function QuoteBlock({ block }) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/e140b44b-a96c-4f51-a6aa-9039142edae9', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            runId: 'initial',
            hypothesisId: 'H1',
            location: 'components/case-study/blocks/Quoteblock.jsx:12',
            message: 'Rendering QuoteBlock',
            data: { hasText: !!block?.text },
            timestamp: Date.now(),
        }),
    }).catch(() => { });
    // #endregion
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