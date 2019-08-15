$(document).ready(function startGame(){

  //global variables

  var randomNumber = 0;
  var currentNumber = 0;
  var btnOne = 0;
  var btnTwo = 0;
  var btnThree = 0;
  var btnFour = 0;
  var wins= 0;
  var losses= 0;

  // random number at beginning 
  resetNumber()

  //assign random number
  function resetNumber() {

  
    // //Numbers that appear will be selected between 1 and 30 
    var randomNumber = Math.floor(Math.random() * 29 + 1)
    $("#randomNumber").text(randomNumber);

    // //random numbers per gem are between 1 and 9
    btnOne = Math.floor(Math.random() * 8) + 1;
    btnTwo = Math.floor(Math.random() * 8) + 1;
    btnThree = Math.floor(Math.random() * 8) + 1;
    btnFour = Math.floor(Math.random() * 8) + 1;

  }

    // //clicking
  $('#one').on ('click', function(){
        currentNumber += btnOne;
        console.log("New userTotal= " + currentNumber);
        $('#currentNumber').text(currentNumber); 
        winsLosses();
        }); 

  $('#two').on ('click', function(){
          currentNumber += btnTwo;
          console.log("New userTotal= " + currentNumber);
          $('#currentNumber').text(currentNumber); 
          winsLosses();
          });  
    
  $('#three').on ('click', function(){
            currentNumber += btnThree;
            console.log("New userTotal= " + currentNumber);
            $('#currentNumber').text(currentNumber); 
            winsLosses();
            });  

  $('#four').on ('click', function(){
              currentNumber += btnFour;
              console.log("New userTotal= " + currentNumber);
              $('#currentNumber').text(currentNumber); 
              winsLosses();
              });  

// wins and losses
function winsLosses() {
  if (currentNumber === randomNumber) {
    alert("Great job! You got the" + randomNumber + "!");
    wins++;
    $("#theWins").text("Wins: " + wins);
    currentNumber = 0;
    $("#theWins").text(currentNumber);
    resetNumber();
  }
// when currentNumber > randomNumber is places correctly (like so), the you went over always shows...
  else if (currentNumber < randomNumber) {
    alert("You went above the number!");
    losses++;
    $("#theLosses").text("Losses: " + losses);
    alert("Try again!");
    currentNumber = 0;
    $("#theLosses").text(currentNumber);
    resetNumber();

  }
}
});

