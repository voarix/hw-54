interface GridProps {
  hasItem: boolean;
  clicked: boolean;
}

const createItems = () => {
  const arrGrid: GridProps[] = [];

  for(let i = 0; i < 6; i++) {
    for(let j = 0; j < 6; j++) {
      arrGrid.push({
        hasItem: false,
        clicked: false,
      });
    }
  }

  const random = Math.floor(Math.random() * arrGrid.length);
  arrGrid[random].hasItem = true;

  return arrGrid;
};

export default createItems;
