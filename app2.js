// let pScore=0;
// let cScore = 0;


// const game= ()=>{

//     //DISPLAY GAME
//     const displayGame = ()=>{

//         const intro = document.querySelector(".intro");
//         const introBtn = document.querySelector(".intro button");
//         const match = document.querySelector(".match");

//         introBtn.addEventListener("click", ()=>{
//             intro.classList.add("fadeOut")
//              match.classList.remove("fadeOut")
//         })

        

//     }
//     //START GAME

//     const match = ()=>{
//         const playerHand = document.querySelector(".player-hand");
//         const computerHand = document.querySelector(".computer-hand")
//         const options = document.querySelectorAll(".options button")

//         options.forEach((option)=>{
//             option.addEventListener("click",function(){
//                 //computer Options
//                 computerOptions = ["rock","paper", "scissors"];

//                 const computerNumber = Math.floor(Math.random()*computerOptions.length);
//                 const computerChoice = computerOptions[computerNumber]
//                 // console.log(computerChoice);

//                 //compareChoices Here
//                 compareHands(this.textContent , computerChoice);
//                 //update images
//                 playerHand.src = `/img/${this.textContent}.png`
//                 computerHand.src = `/img/${computerChoice}.png`


//             })
//         })
//     };
//     //update score
//     const updateScore = ()=>{
//         const playerScore = document.querySelector(".player-score p")
//         const computerScore = document.querySelector(".computer-score p")

//         playerScore.textContent = pScore;
//         computerScore.textContent = cScore;
//     }

//     //compare choices
//     const compareHands = (playerChoice, computerChoice)=>{
//         //update text
//         const winner = document.querySelector(".winner");

//         //check for a tie
//         if(playerChoice === computerChoice) {
//             winner.textContent = "It's a tie";
//             return;
//         }
//         //check for rock
//         if (playerChoice === "rock"){
//             if (computerChoice==="scissors"){
//                 winner.textContent = "Player Wins"
//                 pScore++;
//                 updateScore();
//                 return;
//             }else{
//                 winner.textContent = "Computer wins"
//                 cScore++;
//                 updateScore();
//                 return;
//             }

//         }
//           //check for paper
//           if (playerChoice === "paper"){
//             if (computerChoice==="scissors"){
//                 winner.textContent = "Computer Wins"
//             }else{
//                 winner.textContent = "Player wins"
                
//             }

//         }
//           //check for scissors
//           if (playerChoice === "rock"){
//             if (computerChoice==="paper"){
//                 winner.textContent = "Player Wins"
//             }else{
//                 winner.textContent = "Computer wins"
                
//             }
//         }
//     }
//     //call inner functions
//     displayGame();
//     match();
    
// }
// //start game
// game();

let pScore = 0;
let cScore = 0;

const game = ()=>{

    //intro screen to game
    const intro= ()=>{
    const introScreen = document.querySelector(".intro");
    const btn = document.querySelector(".intro button");
    const match = document.querySelector(".match")

    btn.addEventListener("click",()=>{
        introScreen.classList.add("fadeOut")
        match.classList.remove("fadeOut")
    })
}
    //start game
    const playMatch = ()=>{
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")
        const options = document.querySelectorAll(".options button");

        options.forEach(function(option){
            option.addEventListener("click",function(){
                //computer options
                const computerOptions = ["rock", "paper", "scissors"];
                const computerNumber = Math.floor(Math.random()*computerOptions.length);
                const computerChoice = computerOptions[computerNumber];
                // console.log(computerChoice);

                //compare hands here
                compareHands(this.textContent,computerChoice)
                //update pictures
                playerHand.src = `/img/${this.textContent}.png`
                computerHand.src = `/img/${computerChoice}.png`
            })
        });
    }
    //update score
    const updateScore = ()=>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }


        //compare hands
        const compareHands = (playerChoice,computerChoice)=>{
            //winner text
            const winner = document.querySelector(".winner");
        //check for tie
        if (playerChoice===computerChoice){
            winner.textContent  = 'Its a tie'
            return;
        }
        //check for rock
        if (playerChoice === "rock"){
            if(computerChoice==="scissors"){
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();
                return
            }else{
                winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
            }
            
        }

        if (playerChoice === "paper"){
            if(computerChoice==="scissors"){
                winner.textContent = "Computer Wins"
                cScore++;
                updateScore();
                return; 
            }else{
                winner.textContent = "Player Wins"
                            pScore++;
                                updateScore();
                                return;
            }
            
        }
        if (playerChoice === "scissors"){
            if(computerChoice==="rock"){
                winner.textContent = "Computer Wins"
                cScore++;
                updateScore();
                return; 
            }else{
                  winner.textContent = "Player Wins"
            pScore++;
                updateScore();
                return;
            }
          
        }

         }
      

    //inner functions
    intro()
    playMatch()
}
game()