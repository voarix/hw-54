import "./App.css";
import createItems from "./createItems.ts";
import { useState } from "react";
import Board from "./components/Board.tsx";
import AttemptsCounter from "./components/AttemptsCounter.tsx";
import ResetButton from "./components/ResetButton.tsx";

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
      <Board items={items} handleClick={handleClick} />
      <AttemptsCounter items={items}/>
      <ResetButton onReset={onReset} />
    </>
  );
};

export default App;
