$(document).ready(function(){
    //Numbers that appear will be selected bewteen 9 and 50 
    var Random=Math.floor(Math.random()*41+9)
    $('#randomNumber').text(Random);
    //random numbers per gem are between 1 and 10
    var num1= Math.floor(Math.random()*9+1)
    var num2= Math.floor(Math.random()*9+1)
    var num3= Math.floor(Math.random()*9+1)
    var num4= Math.floor(Math.random()*9+1)

    var wins= 0;
    var losses= 0;
    var playerTotal= 0;
    
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    //reset
    function reset(){
        Random=Math.floor(Math.random()*41+9);
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*9+1);
        num2= Math.floor(Math.random()*9+1);
        num3= Math.floor(Math.random()*9+1);
        num4= Math.floor(Math.random()*9+1);
        userTotal=0;
        $('#finalTotal').text(userTotal);
    }
    //wins
    function winner(){
        $('#numberWins').text(Wins);
        reset();
    }
    //losses
    function loser(){
        losses++;
        $('#numberLosses').text(Losses);
        reset();
    }
    //clicking
    $('#one').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
           loser();
        }   
      })  
      $('#two').on ('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
           winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
      })  
      $('#three').on ('click', function(){
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random){
            winner();
         }
         else if ( userTotal > Random){
           loser();
         }
      })
      $('#four').on ('click', function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random){
            winner();
         }
         else if ( userTotal > Random){
           loser();
         }



    });
    
  
});