import React from "react";

interface CellProps {
  changeStyle: React.MouseEventHandler<HTMLDivElement>;
  hasItem: boolean;
  clicked: boolean;
}

const Cell: React.FC<CellProps> = ({ hasItem, clicked, changeStyle }) => {
  const cellStyles: React.CSSProperties = {
    width: "70px",
    height: "70px",
    border: "1px solid red",
    backgroundColor: clicked ? "white" : "green",
  };

  if (hasItem && clicked) {
    cellStyles.backgroundColor = "yellow";
  }

  return (
    <div style={cellStyles} onClick={changeStyle}>
      {hasItem && clicked ? "ʕ•ᴥ•ʔ" : ""}
    </div>
  );
};

export default Cell;
