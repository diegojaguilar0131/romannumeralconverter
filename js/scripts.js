function romanize(num) {

  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  for(var i = 0;i<=decimal.length;i++){
  //looping over every element of our arrays

    //console.log(i);
    while(num % decimal[i] < num) {
      //console.log(num % decimal[i]);
      //keep trying the same number until we need to move to a smaller one
      result += roman[i];
      //console.log(result);
      // add the matching roman number to our result string
      num -= decimal[i];
      //console.log(num);
      // subtract the decimal value of the roman number from our number

    }
  }
  //return result;
  console.log(result);
}





$(document).on("submit", "form#number-input", function() {
  event.preventDefault();
   var inputNum = $("#input-num").val();
   romanize(inputNum);

});
