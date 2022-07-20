const gameBoard = (() => {
    const rc11 = document.querySelector('#rc11');
    const rc12 = document.querySelector('#rc12');
    const rc13 = document.querySelector('#rc13');
    const rc21 = document.querySelector('#rc21');
    const rc22 = document.querySelector('#rc22');
    const rc23 = document.querySelector('#rc23');
    const rc31 = document.querySelector('#rc31');
    const rc32 = document.querySelector('#rc32');
    const rc33 = document.querySelector('#rc33');
    let arr = [[rc11,rc12,rc13],[rc21,rc22,rc23],[rc31,rc32,rc33]];
    const player = (name,choice) => {
        const getName = () => name;
        const getChoice = () => choice;
        return {getName,getChoice};
    };
    const playerOne = Player('one',[]);
    const playerTwo = Player('two',[]);
    const bingo = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++) {
            if (arr[i][j] ==='one') {
                player.one.push(i*3+j+1);
                player.one.sort();
                if (bingo.includes(player.one)) {
                    return 'One is winner!';
                }
            }
            else if (arr[i][j] ==='two') {
                player.two.push(i*3+j+1);
                player.two.sort();
                if (bingo.includes(player.two)) {
                    return "Two is winner!";
                }
            }
        }
    }
})();
displayController