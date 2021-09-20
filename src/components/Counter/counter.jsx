export function Counter() {
  function increment() {
    console.log("Incrementing...");
  }

  return (
    <div>
      <h2>0</h2>
      <button type="button" onclick={increment}>
        Increment
      </button>
    </div>
  );
}
