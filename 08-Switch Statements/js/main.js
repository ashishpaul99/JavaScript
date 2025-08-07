// conditional:switch statements
// syntax 

// switch(expression or value){
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         console.log("No Match");
// }

// eg-1:
// switch(2){
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         console.log("No Match");
// }

// eg-2:
// switch(Math.floor(Math.random()*5+1)){
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         console.log("No Match");
// }

// eg-3:
let playerOne="paper";
let computer="sissors";

switch(playerOne){
    case computer:
        console.log("Tie gone!");
        break;
    case "rock":
        if(computer==="paper"){
            console.log("computer wins!")
        }else{
            console.log("playerOne wins!")
        }
        break
    case "paper":
         if(computer==="sissors"){
            console.log("computer wins!")
         }else{
            console.log("payerone wins!")
         }
         break;

    default:
        if(computer==="rock"){
            console.log("computer wins!");
        }else{
            console.log("palyerone wins")
        }
}
