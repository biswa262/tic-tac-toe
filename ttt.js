let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let turnO=true;
let winningPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let messageCont=document.querySelector(".messageCont");
let msg = document.getElementById("msg");

const resetGame =()=>{
    turnO=true;
    enableBoxes();
    messageCont.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            box.style.color="yellow"
            turnO=false;
            box.disabled=true;
        }else{
            box.innerText="X";
            turnO=true;
            box.disabled=true;
        }
        //call checkWinner to check if any pattern has matched
        checkWinner();
    })
})
//call inside the showWinner function 
//to disable once a winner is declared
const disableBtn =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner =(winner)=>{
    msg.innerHTML=`winner is ${winner}`;
    messageCont.classList.remove("hide");
    disableBtn();
}
const checkWinner=()=>{
    for(let patterns of winningPatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(
        //     boxes[patterns[0]].innerText,
        //     boxes[patterns[1]].innerText,
        //     boxes[patterns[2]].innerText
        // );  
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
}
resetBtn.addEventListener("click",resetGame);