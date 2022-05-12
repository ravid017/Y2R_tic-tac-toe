const MIN_BOARD_SIZE = 3;
const MAX_BOARD_SIZE = 9;
function createBoard(size) {
    if (size < MIN_BOARD_SIZE || size > MAX_BOARD_SIZE) {
        size = 3
    }
    let board = new Array(size).fill(Array(size));
    return board;
}


function checkVerticals(board) {
    board.forEach(element => {
        for (i of board) {
            i == ++i ? true : false
        }
    });
}
