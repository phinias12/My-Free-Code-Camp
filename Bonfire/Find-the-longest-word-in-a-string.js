function findLongestWord(str) {
  var arr = str.split(' ');

  var result = 0;

  for (var i = 0; i < arr.length; i++){
    if (arr[i].length >= result){
      result = arr[i].length;
    }
  }

  return result;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
