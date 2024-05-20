function intToRoman(num) {
  const symbolsList = [
      ["I", 1],
      ["IV", 4],
      ["V", 5],
      ["IX", 9],
      ["X", 10],
      ["XL", 40],
      ["L", 50],
      ["XC", 90],
      ["C", 100],
      ["CD", 400],
      ["D", 500],
      ["CM", 900],
      ["M", 1000],
      ['V\u0305', 5000],
      ['X\u0305', 10000],
      ['L\u0305', 50000],
      ['C\u0305', 100000],
      ['D\u0305', 500000],
      ['M\u0305', 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
      const currentDivider = symbolsList[i][1];
      const currentSymbol = symbolsList[i][0];
      
      const result = Math.floor(num / currentDivider);
      if (result > 0) {
          let temp = "";
          for (let j = 0; j < result; j++) {
              temp += currentSymbol;
          }
          roman += temp;
          num %= currentDivider;
      }
      i -= 1;
  }
  return roman;
}

// https://www.calculateme.com/roman-numerals/to-roman/


const userInput = document.getElementById("number");
const errorBox = document.getElementById("error");
const outputvalue = document.getElementById("output");
const convertbtn =document.getElementById("convert-button");


convertbtn.addEventListener("click",function(ev){
    ev.preventDefault();
    let number = userInput.value;
    outputvalue.textContent=""
    if(number == ""){
        errorBox.textContent = "Please enter a number" ;  
    }
    else if (number<=0){
        errorBox.textContent = "Please enter a positive number" ;
    }
    else if (number>4000000){
        errorBox.textContent = "Please enter a number less than 4000000" ;
    }
    else if(!(number % 1==0)){
        errorBox.textContent="Please enter a whole number"
    }
    else{
    errorBox.textContent=""
    outputvalue.textContent =  number +'='+ intToRoman(number)}

})
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      convertbtn.click();
    }
  });