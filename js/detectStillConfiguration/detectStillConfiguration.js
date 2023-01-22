const detectStillConfiguration = (previousBoard, currentBoard) => {
  if (JSON.stringify(previousBoard) === JSON.stringify(currentBoard)) {
    return true;
  }

  return false;
};

export default detectStillConfiguration;
