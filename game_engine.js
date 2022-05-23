const MIN_BOARD_SIZE = 3;
const MAX_BOARD_SIZE = 9;
const size = 3;


function createBoard(size) {
    if (size < MIN_BOARD_SIZE || size > MAX_BOARD_SIZE) {
        size = 3
    }
    let board = new Array(size).fill(Array(size));
    return board;
}

let board = createBoard(size);


// function checkVerticals(board) {
//     board.forEach(element => {
//         for (i of element) {
//             if (i == ++i ? true : false) { win() }// counter ++, if counter = size ()=>win

//             else { break }

//         }
//     });
// }
let table = [[1, 2, 3]
[2, 2, 2]
[1, 2, 3]]


// function chek_horizontal(board) {
//     debugger;
//     for (x of table) {
//         for (y of table[x]) {
//             if (y == y + 1) {console.log(`${y}=${y+1}`); }
//             else { break }

//         }

//     }
//     console.log("nada");
// }




// from Console Debugger
function checkVerticals(board) {
    debugger;
    result = false;
    for (h = 0; h < board.length; h++) {
        for (v = 0; v < board[h].length; v++) {
            if (board[h][0] != board[h][v]) {
                console.log("inner false");
            } else { console.log("inner ok") };
        }
    }
}

//From Console Debugger
function checkHorizontals(board) {
    debugger;
    result = false;
    for (h = 0; h < board.length; h++) {
        for (v = 0; v < board[h].length; v++) {
            if (board[0][h] != board[v][h]) {
                console.log("inner false");
            } else { console.log("inner ok") };
        }
    }
}

function check_diagonals_left_to_right(board) {//works 23/5

    for (i = 0; i < board.length-1;i++) {
        
        if (board[i][i] == board[i+1][i+1]) {
            console.log(`${board[i][i] == board[i+1][i+1]}`);
        }
        else {
            console.log(false);
            // board[i][i] +"y^2r"+ board[i+1][i+1]
        }
    }
}

// function check_diagonals_right_left(board) {
//     for (i of board) {
//         if ([i][i] == [i + 1][i + 1]) {
//             console.log("win");
//         }
//         else {
//             console.log("no win");
//         }
//     }
// }

// function check_diagonals_right_to_left(board) {
//     let horizontal = 0;
//     for (let vertical = board.length - 1; vertical > 0;) {
//         debugger
//         if ([vertical][horizontal] == --[vertical][++horizontal]) {
//             console.log("array num: " + horizontal + "index : " + vertical + " match");
//         }
//         else {
//             console.log(vertical + "no match");
//         }

//     }
// }



function win() { console.log("win!") }

// board2= [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]
        //  ]