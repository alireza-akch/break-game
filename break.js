const mydocumentbody = document.getElementById('body')
const grid = document.querySelector('.grid')
const block = document.createElement('div')
let move = "250";




//drow my block
function addBlock(){

block.classList.add('block')
// block.style.left = '100px'
// block.style.bottom = '50px'
grid.appendChild(block)

}

addBlock()




//block movement

mydocumentbody.addEventListener("keypress", blockMove);

function blockMove(event){
    let x = event.key;
    if (x === "a" || x === "A") { 
   block.style.left = move +"px" ; 
   move--;
  }
    if (x === "d" || x === "D") { 
    block.style.left = move + "px"; 
    move++;
  }
}

