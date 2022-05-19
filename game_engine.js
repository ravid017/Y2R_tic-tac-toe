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


function checkVerticals(board) {
    board.forEach(element => {
        for (i of element) {
            if (i == ++i ? true : false) { win() }// counter ++, if counter = size ()=>win

            else { break }

        }
    });
}
table= [[1,2,3]
        [2,2,2]   
        [1,2,3] ] 


function chek_horizontal(board) {
    debugger;
    for (x of table) {
        for (y of table[x]) {
            if (y == y + 1) {console.log(`${y}=${y+1}`); }
            else { break }
        
        }

    }
    console.log("nada");
}




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

// function check_diagonals_left_to_right(board) {//always true
//    debugger;
//     for (let board_index = 0; board_index < board.length; board_index++) {
//         if (board_index[board_index] == ++board_index[board_index]) {
//             win();
//             break;
//         }
//         else {
//             check_diagonals_left_to_right;
//         }
//     }
// }

// function check_diagonals_right_to_left(board){
//    let banana=0;
//     for (let board_index = board.length-1; board_index > 0; board_index--) {
//         // debugger
//         if (board_index[banana] == --board_index[++banana]) {
//             console.log("array num: "+banana +"index : " +board_index+" match");
//         }
//         else {
//             console.log(board_index + "no match");
//         }

//     }
// }



function win() { console.log("win!") }

