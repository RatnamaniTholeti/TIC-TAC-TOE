const statusdisplay=document.querySelector(".gamestatus");
const win=document.querySelector(".g");

let gameactive = true;
let currentplayer="😎";
let gamestate=["","","","","","","","",""];
const winmessage=()=>`Player ${currentplayer} has won!`;
const drawmessage=()=> "Game Ended in draw";
const currentplayerturn=()=>`Its ${currentplayer} turn`;
statusdisplay.innerHTML=currentplayerturn();
function handleCellPlayed()
{

}
function handlePlayerChange()
{
    
}
function handleResultValidation()
{
    
}
function handleCellClick()
{
    
}
function handleRestartGame()
{
    
}
document.querySelectorAll('.cell').forEach(cell=>cell.addEventListener('click',handleCellClick));
document.querySelector('.gamerestart').addEventListener('click',handleRestartGame);
function handleCellClick(clickedcellEvent)
{
       const clickedcell=clickedcellEvent.target;
       const clickedcellIndex=parseInt(clickedcell.getAttribute('data-cell-index'));
       if(gamestate[clickedcellIndex]!=="" || !gameactive)
       {
        return;
       }
       handleCellPlayed(clickedcell,clickedcellIndex);
       handleResultValidation();
}
function handleCellPlayed(clickedcell,clickedcellIndex)
{
    gamestate[clickedcellIndex]=currentplayer;
    clickedcell.innerHTML=currentplayer;
}
const winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];
function handleResultValidation() {
    let roundWon=false;
    for(let i=0;i<=7;i++)
    {
        const winCondition=winningConditions[i];
        let a=gamestate[winCondition[0]];
        let b=gamestate[winCondition[1]];
        let c=gamestate[winCondition[2]];
        if(a===""|| b==="" || c==="")
        {
            continue;
        }
        if(a===b&& b===c )
        {
            roundWon=true;
            break;
        }
    }
    if(roundWon)
    {
        statusdisplay.innerHTML=winmessage();
        // win.innerHTML=winmessage();
        gameactive=false;
        return;
    }
    let rounddraw=!gamestate.includes("");
    if(rounddraw)
    {
        statusdisplay.innerHTML=drawmessage();
        gameactive=false;
        return;
    }
    handlePlayerChange();
}
function handlePlayerChange()
{
    currentplayer=currentplayer==="😎"?"😉":"😎";
    statusdisplay.innerHTML=currentplayerturn();
}
function handleRestartGame()
{
    gameactive=true;
    currentplayer="😎";
    gamestate=["","","","","","","","",""];
    statusdisplay.innerHTML=currentplayerturn();
    document.querySelectorAll('.cell').forEach(cell=>cell.innerHTML="");
}
document.querySelectorAll('.cell').forEach(cell=>cell.addEventListener('click',handleCellClick));
document.querySelector('.gamerestart').addEventListener('click',handleRestartGame);
