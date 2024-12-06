//定数の定義
const PATHWAY = 0;
const WALL = 1;
const PLAYER = -1;
const GOAL = 100;
const MAX_STEPS = 2000;

const top_btn = document.getElementById("top");
const buttom_btn = document.getElementById("buttom");
const left_btn = document.getElementById("left");
const right_btn = document.getElementById("right");

let maze;

switch(getRandom(0,4)){
    case 0:
        maze = [
            [1,1,1,1,1,1,1,1,1],
            [1,0,1,0,0,1,0,0,1],
            [1,0,100,0,1,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,1,1],
            [1,0,0,1,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,1,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,1,0,1],
            [1,0,1,0,0,0,0,-1,1],
            [1,1,1,1,1,1,1,1,1]
        ];
        break;
    case 1:
        maze=[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,100,1,1],
            [1,0,0,1,0,0,0,0,0,0,0,0,1,0,1],
            [1,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,1,0,1,0,1],
            [1,-1,0,0,0,1,0,1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];
        break;
    case 2:
        maze=[
            [1,1,1,1,1,1,1,1,1,1,1,1],
            [1,100,0,0,1,0,0,0,0,0,0,1],
            [1,1,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,1,0,0,1],
            [1,0,0,0,0,1,0,0,0,0,0,1],
            [1,0,0,0,0,1,1,1,1,0,0,1],
            [1,1,0,1,0,0,0,0,0,0,-1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1]
        ];
    case 3:
        maze=[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1,1,1,1,1,1,100,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];
        break;
    case 4:
        maze=[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
            [1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];
        break;
}

let playerPosition = { x: 1, y: 1 };
let steps = 0;

//プレイヤーの初期位置を検索する
let value = -1;
let cnt = 0
let index = -1
for(let mazeArr of maze) {
    index = mazeArr.indexOf(value)
    if(index == -1) {
        cnt = cnt + 1
        continue;
    }
    else {
        playerPosition.x=cnt;
        playerPosition.y=index;
        break;
    }
}
if(index == -1) {
    console.log(index)
}
maze[playerPosition.x][playerPosition.y] = PLAYER;
renderMaze();




function renderMaze() {
    const container = document.getElementById("maze-container");
    container.innerHTML = "";
    maze.forEach((row, i) => {
        const rowDiv = document.createElement("div");
        row.forEach((cell, j) => {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            if (cell === PATHWAY) {
                cellDiv.classList.add("pathway");
            } else if (cell === WALL) {
                cellDiv.classList.add("wall");
            } else if (cell === PLAYER) {
                cellDiv.classList.add("player");
            } else if (cell === GOAL) {
                cellDiv.classList.add("goal");
            }
            rowDiv.appendChild(cellDiv);
        });
        container.appendChild(rowDiv);
    });
}


function movePlayer(action) {
    //ボタンを押せなくする
    top_btn.disabled=true;
    buttom_btn.disabled=true;
    left_btn.disabled=true;
    right_btn.disabled=true;

    const directions = [
        { dx: -1, dy: 0 }, // Up
        { dx: 1, dy: 0 },  // Down
        { dx: 0, dy: -1 }, // Left
        { dx: 0, dy: 1 },  // Right
    ];
    const { dx, dy } = directions[action];
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    if (maze[newX][newY] === WALL) {
        document.getElementById("status").textContent = "壁にぶつかった！";
        if(maze[playerPosition.x][playerPosition.y]==GOAL){
            maze[playerPosition.x][playerPosition.y] = PLAYER;
            document.getElementById("status").textContent = "ゴール！";
            renderMaze(maze);
            return;
        }
        top_btn.disabled=false;
        buttom_btn.disabled=false;
        left_btn.disabled=false;
        right_btn.disabled=false;
        return;
    }

    steps++;

    if(maze[playerPosition.x][playerPosition.y]!=GOAL){
        maze[playerPosition.x][playerPosition.y] = PATHWAY;
    }
    
    playerPosition = { x: newX, y: newY };
    if(maze[newX][newY]!=GOAL){
        maze[newX][newY] = PLAYER;
    }


    document.getElementById("status").textContent = "移動中...";
    renderMaze(maze);
    setTimeout(movePlayer, 100, action);    //100ミリ秒後にmovePlayer関数を再帰する
}

//最大値・最小値を引数に持つ関数
function getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}

function reset(){
    maze[playerPosition.x][playerPosition.y] = PATHWAY;
    playerPosition.x=cnt;
    playerPosition.y=index;
    maze[playerPosition.x][playerPosition.y] = PLAYER;
    renderMaze();
}