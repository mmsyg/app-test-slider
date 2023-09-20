function updateQuizzTileAnswer(clickedQuizzTile, answer) {
    const newQuizzTile = { ...clickedQuizzTile };
    if (clickedQuizzTile.answer === answer) {
      newQuizzTile.answer = "correct";
    } else {
      newQuizzTile.answer = "wrong";
    }
    return newQuizzTile;
  }