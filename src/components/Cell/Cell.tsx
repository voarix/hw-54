import React from "react";
import './Cell.css';

interface CellProps {
  changeStyle: React.MouseEventHandler<HTMLDivElement>;
  hasItem: boolean;
  clicked: boolean;
}

const Cell: React.FC<CellProps> = ({ hasItem, clicked, changeStyle }) => {
  const cellClassName = `
    cell
    ${clicked ? "clicked" : ""}
    ${hasItem && clicked ? "hasItem" : ""}
    `;

  return (
    <div className={cellClassName} onClick={changeStyle}>
      {hasItem && clicked ? "ʕ•ᴥ•ʔ" : ""}
    </div>
  );
};

export default Cell;
