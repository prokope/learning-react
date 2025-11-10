import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12, marginBottom: 16 }}>
      <h2 style={{ fontSize: 20, margin: 0, marginBottom: 8 }}>Contador</h2>
      <p style={{ margin: "8px 0" }}>Valor atual: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{ padding: "8px 12px", borderRadius: 10, border: "1px solid #ccc", cursor: "pointer" }}
      >
        Incrementar
      </button>
    </div>
  );
}
