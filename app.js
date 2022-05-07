console.log('Welcome to tic tac toe');
let turn = "X";
let gameover = false;
// Function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};
// Function to check the win 
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
    wins.forEach(e => {
        // console.log(boxTexts[e[0]].innerText, boxTexts[e[1]].innerText, boxTexts[e[2]].innerText)
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText !== '')) {
            if (boxTexts[e[0]].innerText === 'X') { document.querySelector('.info').innerText = 'Khangura Won' } else {
                document.querySelector('.info').innerText = 'Pulkit Won'
            }
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '700px';

        }
    })
};
// Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameover) { document.getElementsByClassName('info')[0].innerText = "Turn for" + " " + turn }
        };
    });
});

// Add event listener on reset button_-
let reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    let boxTexts = document.getElementsByClassName('boxtext')
    Array.from(boxTexts).forEach(element => { element.innerText = '' })
    turn = "X";
    gameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for X"
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
});
