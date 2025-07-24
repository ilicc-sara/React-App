import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Items from "./Items";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: crypto.randomUUID(),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (itemId) => {};

  return (
    <>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </>
  );
}

export default App;
