import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [item, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: crypto.randomUUID(),
    };
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <>
      <Form />
    </>
  );
}

export default App;
