import React from "react";

interface CounterProps{
  items: { clicked: boolean; hasItem: boolean }[];
}

const AttemptsCounter : React.FC<CounterProps> = ({items}) => {
  return (
    <p>Количество попыток: {items.filter((item) => item.clicked).length}</p>
  );
};

export default AttemptsCounter;