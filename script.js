

const createPlayer = function (player, alphabet) {

    let playername = player;

    let alpha = alphabet;

  

    let points = 0;

    const givepoints = () => points++;

    const resetpoints = () => points = 0;

    const getpoints = () => points;

    return {playername, points,  alpha, givepoints, getpoints, resetpoints}
    
}


const createGameboard = function () {

    let board = [1,2,3,4,5,6,7,8,9];

    let turn = 0;

    const fill = (number, X) => {
        board[number - 1] = X;
        
    }

    const displayFromArray = (caseNum) => {

        const boardInnerDiv = document.querySelector(`.case${caseNum}`);
        console.log(board.length);
        
        
            boardInnerDiv.innerText = board[caseNum-1];
        
    }



    const restartGame = () => {
        playGame();
        player1.resetpoints();
        player2.resetpoints();
        update();
        console.log("restarted");
    }

    const playGame = () => {
        let boardAll = document.querySelector(".board");
        for (let i = 0 ; i< boardAll.children.length; i++){
            boardAll.children[i].innerText = "";
        }
        
        
    }

    const check = (board) => {
    
        if ( (board[0] === board[1] && board[1] === board[2]) || (board[3] === board[4] && board[4] === board[5]) || (board[6] === board[7] && board[7] === board[8]) || (board[0] === board[3] && board[3] === board[6]) || (board[1] === board[4] && board[4] === board[7]) || (board[2] === board[5] && board[5] === board[8]) || (board[0] === board[4] && board[4] === board[8]) || (board[6] === board[4] && board[4] === board[2])) {
            console.log("game ended");
            return true;
    
        } else {
            return false;
        }
    }

    const update = () => {
        const result1 = document.querySelector(".result1");
        const result2 = document.querySelector(".result2");

        result1.innerText = player1.getpoints();
        result2.innerText = player2.getpoints();
    }

    const reset = () => board = [1,2,3,4,5,6,7,8,9];

    return {board, playGame, restartGame, fill, reset, displayFromArray, turn, check, update};
}

const pickplayer = (x) => {
    if (x = 1) {
        return true;
}   else {
    return false;
}

}


const chosenCase = () => {
    let choice = prompt("Case number: ");

    return choice;
}




const chooseCase = function (caseNum) {

    const caseDiv = document.querySelector(`.case${caseNum}`);
    console.log(1);

    if (caseDiv.innerText !== "X" && caseDiv.innerText !== "O"){
        if (gameboard.turn === 1) {
            gameboard.fill(caseNum, "X");
            caseDiv.innerText = "X";
            gameboard.turn = 0;
            if (gameboard.check(gameboard.board)){
                player1.givepoints();
            }
        } else {
            gameboard.fill(caseNum, "O");
            caseDiv.innerText = "O";
            gameboard.turn = 1;
            if (gameboard.check(gameboard.board)){
                player2.givepoints();
            }
        }
        gameboard.update();
        
    } else {
        console.log("Pick another Square");
    }
    
}





 

player1 = createPlayer("player1",  "X");

player2 = createPlayer("player2",  "O");

gameboard = createGameboard();




// remove the for loop. Add a button onclick function on each of the divs. better than for i < 10 or somthing, and the divs will display live not until loop is finished

//make the styling for divs first,, then work on the functions