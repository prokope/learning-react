import Counter from "./Counter";

export default function App() {
  return (
    <div style={{ padding: 24, margin: "0 auto", maxWidth: 680 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Exemplo React: Contador
      </h1>
      <Counter />
    </div>
  );
}
