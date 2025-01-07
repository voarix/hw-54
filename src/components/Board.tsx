import React from "react";
import Cell from "./Cell.tsx";

interface BoardProps {
  items: { clicked: boolean; hasItem: boolean }[];
  handleClick: (cellId: number) => void;
}

const Board: React.FC<BoardProps> = ({items, handleClick}) => {
  return (
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
  );
};

export default Board;