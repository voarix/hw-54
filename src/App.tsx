import "./App.css";
import createItems from "./createItems.ts";
import { useState } from "react";
import Cell from "./components/Cell.tsx";

const App = () => {
  const [items, setItems] = useState(createItems());

  const handleClick = (index: number) => {
    const newItems = [...items];
    newItems[index].clicked = true;
    setItems(newItems);
  };

  return (
    <>
      <Cell
        hasItem={items[0].hasItem}
        clicked={items[0].clicked}
        changeStyle={() => handleClick(0)}
      />
    </>
  );
};

export default App;
