"use client";

export default function Error({ error, reset }) {
    return (
        <div style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
        }}>
            <h2 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>Something went wrong</h2>
            <button
                onClick={() => reset()}
                style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    background: "#f5f5f5",
                    cursor: "pointer",
                }}
            >
                Try again
            </button>
        </div>
    );
}
