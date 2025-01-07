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
    border: '1px solid #2980b9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: clicked ? "#f0f0f0" : "#2c3e50",
    borderRadius: '8px',
    transition: 'background-color 0.2s ease',
    cursor: 'pointer',
  };

  if (hasItem && clicked) {
    cellStyles.backgroundColor = "#2ecc71";
  }

  return (
    <div style={cellStyles} onClick={changeStyle}>
      {hasItem && clicked ? "ʕ•ᴥ•ʔ" : ""}
    </div>
  );
};

export default Cell;
