function reverseString(str) {
  var str1 = str.split('');
  var str2 = str1.reverse();
  str = str2.join('');

  return str;
}

reverseString("hello");
