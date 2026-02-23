"use client";

export default function GlobalError({ error, reset }) {
    return (
        <html lang="en">
            <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
                <div style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}>
                    <h2 style={{ marginBottom: "1rem" }}>Something went wrong</h2>
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
            </body>
        </html>
    );
}
