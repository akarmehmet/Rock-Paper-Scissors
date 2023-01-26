
function randomInt(){
    return Math.floor(Math.random()*(4))
  } 

function getComputerChoice(){
    let index= randomInt();
    if(index === 0)
        return "rock";
    else if(index === 1)
        return "paper";
    else 
        return "scissors";
}

function game(){
    let userPoint = 0;
    let computerPoint = 0;

    for (let index = 0; index < 5; index++) {
       let userChoice = prompt("Please enter rock || paper || scissors").toLowerCase();
       let computerChoice = getComputerChoice();
       let message;
       if(userChoice === computerChoice){
        message = `user : ${userChoice} computer : ${computerChoice} draw`;
        console.log(message);
        alert(message)
        continue;
       }

       
       if(userChoice === "rock"){
            if(computerChoice === "paper")
                computerPoint++;
            else
                userPoint++;
       }
       else if(userChoice === "paper"){
            if(computerChoice == "rock")
                userPoint++;
            else
                computerPoint++;
       }
       else{
            if(computerChoice == "rock")
                computerPoint++;
            else
                userPoint++;
       }
       message = `user : ${userChoice} - ${userPoint}  computer : ${computerChoice} - ${computerPoint}`;
       console.log(message);
       alert(message);
    }

    if(userPoint>computerPoint)
        alert("You Win");
    else if(computerPoint>userPoint)
        alert("You Lose");
    else
        alert("You Draw");
}