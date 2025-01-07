import "./App.css";
import createItems from "./createItems.ts";
import { useState } from "react";
import Cell from "./components/Cell.tsx";

const App = () => {
  const [items, setItems] = useState(createItems());
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

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
            setMessage("Вы нашли элемент!");
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
    setMessage("");
  };

  return (
    <>
      {message ? <p>{message}</p> : null}
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
