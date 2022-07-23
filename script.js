'use strict'

const Player = (array) => {
    return {array};
};

const gameBoard = (() => {
    let arr = Array(9);
    const playerO = Player([]);
    const playerX = Player([]);
    const bingo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const checkBingo = function () {
        let count = playerO.array.length+playerX.array.length;
        let turn = !(count%2);
        let result;
        if (turn) {
            displayController.playerTurn.textContent = "Player 'O' Turn";
        }
        else if (!turn) {
            displayController.playerTurn.textContent = "Player 'X' Turn";
        }
        if (playerO.array.length >= 3) {
            for (let i of bingo) {
                if (i.every(element => playerO.array.includes(element))) {
                    result = 'O';
                }
            }            
        }
        if (playerX.array.length >= 3) {
            for (let i of bingo) {
                if (i.every(element => playerX.array.includes(element))) {    
                    result = 'X';
                }
            }
        }
        if (count == 9) {
            result = 'draw'
        }
        return {count, turn, result};
    }
    return {arr, playerO, playerX, bingo, checkBingo};
    /* for (let i=0; i<arr.length; i++) {
        if (arr[i] ==='one') {
            playerOne.array.push(i);
            playerOne.array.sort();
            if (bingo.includes(playerOne.array)) {
                gameActive = false;
                return 'One is winner!';
            }
        }
        else if (arr[i] ==='two') {
            playerTwo.array.push(i);
            playerTwo.array.sort();
            if (bingo.includes(playerTwo.array)) {
                gameActive = false;
                return "Two is winner!";
            }
        }
    } */
})();

const displayController = (() => {
    const table = document.querySelector('#table');
    const playerTurn = document.querySelector('#playerTurn');
    const playerWin = document.querySelector('#playerWin');
    let gameActive = true;
    for (let i=0; i<gameBoard.arr.length; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell')
        cell['id'] = 'cell'+i;
        cell.addEventListener('click', () => {
            if (gameBoard.checkBingo().turn && cell.textContent == '' && gameActive) {
                cell.textContent = 'O';
                gameBoard.arr[i] = 'O';
                gameBoard.playerO.array.push(i);
                if (gameBoard.checkBingo().result == 'O') {
                    playerWin.textContent = 'O is winner';
                    gameActive = false;
                    return;
                }
                else if (gameBoard.checkBingo().result == 'draw') {
                    playerWin.textContent = 'The result is draw';
                    gameActive = false;
                    return;
                }
            }
            else if (!gameBoard.checkBingo().turn && cell.textContent == '' && gameActive) {
                cell.textContent = 'X';
                gameBoard.arr[i] = 'X';
                gameBoard.playerX.array.push(i);
                if (gameBoard.checkBingo().result == 'X') {
                    playerWin.textContent = 'X is winner';
                    gameActive = false;
                    return;
                }
                else if (gameBoard.checkBingo().result == 'draw') {
                    playerWin.textContent = 'The result is draw';
                    gameActive = false;
                    return;
                }
            }
        });
        table.appendChild(cell);
/*         `const c${i} = document.querySelector('#c${i}')`;
        `c${i}.addEventListner('click', () => {
            if (turn) {
                c${i}.textContent = 'one';
                gameBoard.playerOne.append(${i});
            }
            else if (!turn) {
                c${i}.textContent = 'two';
                gameBoard.playerTwo.append(${i});
            }
        })`; */
    }
    const resetButton = document.querySelector('button')
    resetButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.textContent = '');
        gameBoard.arr = Array(9);
        gameBoard.playerO = Player([]);
        gameBoard.playerX = Player([]);
        gameBoard.result = ''
        playerWin.textContent = 'Winner is ???'
        gameBoard;
        displayController;
    });
    return {playerTurn, gameActive}
})();