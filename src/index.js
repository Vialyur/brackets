module.exports = function check(str, bracketsConfig) {
  // your solution
  let openingBracket = ['(', '{', '[', '|', '1', '5', '7', '8'];
  let closingBracket = [')', '}', ']', '|', '2', '6', '7', '8'];

    if (check.lenght > 0){

      for (let i = 0; i < check.length; i += 1) {
  
        if (openingBracket.indexOf(check[i]) == closingBracket.IndexOf(check[(i + 1)])) {
          check.splice(i, 2);
        }
      }

    } else {      
      return true;
    }
}
