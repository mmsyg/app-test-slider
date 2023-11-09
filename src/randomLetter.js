function randomeLetter() {
    const dostepneLitery = ['a', 'b', 'c'];
    const wynikowaTablica = [];
  
    while (wynikowaTablica.length < 3) {
      const losowyIndex = Math.floor(Math.random() * dostepneLitery.length);
      const wybranaLitera = dostepneLitery.splice(losowyIndex, 1)[0];
      wynikowaTablica.push(wybranaLitera);
    }
  
    return wynikowaTablica;
  }
  
