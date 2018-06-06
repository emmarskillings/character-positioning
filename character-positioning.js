function characterPosition(string) {
  var positions = {};
  var string = string.split(" ").join("");

  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (letter in positions) {
      positions[letter].push(i);
    }
    else {
      positions[letter] = [i];
    }
  }
  return positions;
}

console.log(characterPosition("lighthouse in the house"));