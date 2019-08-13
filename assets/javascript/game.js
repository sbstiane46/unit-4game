$(document).ready(function startGame(){

  //global variables

  var randomNumber = 0;
  var currentNumber = 0;
  var btnOne = 0;
  var btnTwo = 0;
  var btnThree = 0;
  var btnFour = 0;
  var theWins= 0;
  var theLosses= 0;

  // random number at beginning 
  resetNumber()

  //assign random number
  function resetNumber() {

  
    // //Numbers that appear will be selected between 19 and 80 
    var randomNumber = Math.floor(Math.random() * 79 + 19)
    $("#randomNumber").text(randomNumber);

    // //random numbers per gem are between 1 and 10
    btnOne = Math.floor(Math.random() * 9) + 1;
     btnTwo = Math.floor(Math.random() * 9) + 1;
     btnThree = Math.floor(Math.random() * 9) + 1;
     btnFour = Math.floor(Math.random() * 9) + 1;

  }



    
    // var totalScore= 0;
    
    // $('#theWins').text(wins);
    // $('#theLosses').text(losses);
    // //reset
    // function reset(){
    //     Random=Math.floor(Math.random()*41+9);
    //     $('#randomNumber').text(Random);
    //     num1= Math.floor(Math.random()*9+1);
    //     num2= Math.floor(Math.random()*9+1);
    //     num3= Math.floor(Math.random()*9+1);
    //     num4= Math.floor(Math.random()*9+1);
    //     theScore=0;
    //     $('#theScore').text(totalScore);
    // }
    // //wins
    // function winner(){
    //     $('#theWins').text(Wins);
    //     reset();
    // }
    // //losses
    // function loser(){
    //     losses++;
    //     $('#theLosses').text(Losses);
    //     reset();
    // }

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
    theWins++;
    $("#theWins").text(currentNumber);
    resetNumber();
  }

  else if (currentNumber > randomNumber) {
    alert("You went above the number!");
    theLosses++;
    alert("Try again!");
    $("theLosses").text(currentNumber);
    resetNumber();

  }
}
});

