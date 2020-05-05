

var luckyNumber = 0;
var noOfGuess = 0; 

 function activate(){
   document.getElementById("score").innerHTML ="";

    for(var i = 1; i< 6; i++)
        {
            document.getElementById("btn"+i).disabled = false;
            document.getElementById("btn"+i).innerHTML = i;
            document.getElementById("btn"+i).style.background = "green";
            document.getElementById("btn"+i).style.color = "white";
        }

    document.getElementById("activateBtn").disabled = true;
    document.getElementById("activateBtn").style.background = "lightgray"
        
    document.getElementById("deactivateBtn").disabled = false;
    document.getElementById("deactivateBtn").style.background = "darkorange"
        
    luckyNumber = Math.floor((Math.random() * 5)+1)
    console.log("Lucky Number: "+luckyNumber);
}


function deactivate(){

    var i = 1;

    while(i<6){

        document.getElementById("btn"+i).disabled = true;
        document.getElementById("btn"+i).innerHTML = 0;
        document.getElementById("btn"+i).style.background = "lightgray";
        document.getElementById("btn"+i).style.color = "gray";
        i++;
    }

   document.getElementById("deactivateBtn").disabled = true;
   document.getElementById("deactivateBtn").style.background = "lightgray"

   document.getElementById("activateBtn").disabled = false;
   document.getElementById("activateBtn").style.background = "darkorange"
  
   noOfGuess = 0;
}
 

function show(currentButton){

    btnId = currentButton.id;
    btnId = btnId.slice(3);

    console.log("Button ID: "+btnId);

    if(btnId == luckyNumber){

        document.getElementById("score").innerHTML ="Correct Guess! <br> You have found it in  "+ (noOfGuess+1) + " Try!";
        document.getElementById("score").style.color ="Green"

        currentButton.style.backgroundImage ="url('http://s16.postimg.org/uoxvf647p/image.png')";
        currentButton.style.backgroundSize="95px 100px";
        currentButton.style.backgroundRepeat="no-repeat";
        currentButton.style.backgroundPosition="center center";

        for(var i =1; i< 6; i++){
            if(i != luckyNumber){
                document.getElementById("btn"+i).disabled = true;
                document.getElementById("btn"+i).style.background = "lightgreen"
            }
            
        }
        
    } else {
        noOfGuess++ ;

        if(noOfGuess>0 && noOfGuess<3){
    
            document.getElementById("score").style.color ="Red"
            document.getElementById("score").innerHTML = "Wrong guess! Try again..<br> Attempt left:  "+(3-noOfGuess)

        }else if(noOfGuess==3){
            
            document.getElementById("score").style.color ="maroon"
            document.getElementById("score").innerHTML = "Game over!"
            deactivate();
        } 
    }

}
