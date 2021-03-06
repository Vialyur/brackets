module.exports = function check(str, bracketsConfig) {
  // your solution
  let openingBracket = [];
  let closingBracket = [];
  let sameBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    let box = bracketsConfig[i];
    if (box[0] != box[1]) {
      openingBracket.push(box[0]);
      closingBracket.push(box[1]);
    } else {
      sameBrackets.push(box[0]);
    }
  }

  if (!str.length) {
    return false;
  }

  let stash = [];
  for (let i = 0; i < str.length; i++) {
    if (openingBracket.indexOf(str[i]) >= 0) {
      stash.push(str[i]);
    } else if (sameBrackets.indexOf(str[i]) >= 0) {
      let last = stash[stash.length - 1];
      if (sameBrackets.indexOf(last) >= 0) {
        if (sameBrackets.indexOf(last) == sameBrackets.indexOf(str[i])) {
          stash.pop();
        } else {
          stash.push(str[i]);
        }  
      } else {
        stash.push(str[i]);
      }
    } else if (closingBracket.indexOf(str[i]) >= 0) {
      let last = stash[stash.length - 1];
      if (openingBracket.indexOf(last) == closingBracket.indexOf(str[i])) {
        stash.pop();
      } else {
        return false;        
      }
    }
  }

  if (stash.length) {
    return false;
    } else {
  return true;
  }
}
