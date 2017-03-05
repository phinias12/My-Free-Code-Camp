function palindrome(str) {
  // Good luck!
  str = str.replace(/[^a-zA-Z0-9]/g,'');
  str = str.toLowerCase();

  var temp = str;

  str = str.split('');
  str = str.reverse();
  str = str.join('');


  if (temp === str){
    result = true;
  }else{
    result = false;
  }

  return result;
}



palindrome("not a palindrome");
