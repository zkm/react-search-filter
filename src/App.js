import { useRef, useState, useCallback } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const value = inputRef.current.value;
      if (value === "") return;
      setItems((prev) => [...prev, value]);
      inputRef.current.value = "";
    },
    [inputRef]
  );

  return (
    <>
      Search:{" "}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button>Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
}

export default App;
