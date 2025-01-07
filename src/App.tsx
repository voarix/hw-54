import "./App.css";
import createItems from "./createItems.ts";
import { useState } from "react";
import Cell from "./components/Cell.tsx";

const App = () => {
  const [items, setItems] = useState(createItems());
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (cellId: number) => {
    if (gameOver) {
      return;
    }

    setItems((prevState) =>
      prevState.map((item, index) => {
        if (index === cellId) {
          if (!item.hasItem) {
            return { ...item, clicked: true };
          } else {
            setGameOver(true);
            alert("Вы нашли!");
            return { ...item, clicked: true };
          }
        }
        return item;
      }),
    );
  };

  const onReset = () => {
    setItems(createItems());
    setGameOver(false);
  };

  return (
    <>
      <div className="grid">
        {items.map((item, index) => (
          <Cell
            key={index}
            changeStyle={() => handleClick(index)}
            clicked={item.clicked}
            hasItem={item.hasItem}
          />
        ))}
      </div>

      <p>Количество попыток: {items.filter((item) => item.clicked).length}</p>
      <button onClick={onReset}>Reset</button>
    </>
  );
};

export default App;
