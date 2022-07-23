'use strict'

const Player = (entry) => {
    return {entry};
};

const gameBoard = (() => {
    let arr = Array(9);
    const playerO = Player([]);
    const playerX = Player([]);
    const bingo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let turn = true;
    let gameActive = true;
    const checkBingo = function () {
        for (let i=0; i<9; i++)
            if (playerO.entry.length >= 3) {
                playerO.sort();
                if (bingo.includes(playerO.entry)) {
                    gameActive = false;
                    return 'O';
                }
            }
            else if (playerX.entry.length >= 3) {
                playerX.sort();
                if (bingo.includes(playerX.entry)) {
                    gameActive = false;
                    return 'X';
                }
            }
            else if (i == 8) {
                return 'draw'
            }
    }
    
    /* for (let i=0; i<arr.length; i++) {
        if (arr[i] ==='one') {
            playerOne.entry.push(i);
            playerOne.entry.sort();
            if (bingo.includes(playerOne.entry)) {
                gameActive = false;
                return 'One is winner!';
            }
        }
        else if (arr[i] ==='two') {
            playerTwo.entry.push(i);
            playerTwo.entry.sort();
            if (bingo.includes(playerTwo.entry)) {
                gameActive = false;
                return "Two is winner!";
            }
        }
    } */
})();

const displayController = (() => {
    const table = document.querySelector('#table');
    const footer = document.querySelector('footer')
    for (let i=0; i<arr.length; i++) {
        const cell = document.createElement('div');
        cell['id'] = 'cell'+i;
        cell.addEventListener('click', () => {
            if (gameBoard.turn) {
                cell.textContent = 'O';
                gameBoard.arr[i] = 'O';
                playerO.push(i);
                if (gameBoard.checkBingo() == 'O') {
                    footer.textContent = 'O is winner';
                    return;
                };
                else if (gameBoard.checkBingo() == 'draw') {
                    footer.textContent = 'The result is draw';
                    return;
                };
            }
            else if (!gameBoard.turn) {
                cell.textContent = 'X';
                gameBoard.arr[i] = 'X';
                playerX.push(i);
                gameBoard.checkBingo();
                if (gameBoard.checkBingo() == 'O') {
                    footer.textContent = 'O is winner';
                    return;
                };
                else if (gameBoard.checkBingo() == 'draw') {
                    footer.textContent = 'The result is draw';
                    return;
                };
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
})();