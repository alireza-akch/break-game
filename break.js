const mydocumentbody = document.getElementById('body')
const grid = document.querySelector('.grid')
const block = document.createElement('div')
let number_of_blocks = 5;
let move = "250";
let blocks_dynamic_position_left = ['20px', '130px', '240px', '350px', '460px'];
let left = "";
let x = 0;
var toAdd = document.createDocumentFragment();
// let blocks_dynamic_position_top = ["50px"];
// let position_left = "";
// let position_top = "";
//draw blocks



//   for (let i = 0; i <= 2; i++) {
    
    
//     blocks_dynamic_position.forEach(myFunction);

//     function myFunction(value, index, array) {
//       blocks_dynamic_position = index++;
//     }
//     myFunction();
// }    
        

    //loop for left position
//     function test(){
//       for (let i = 0; i < 5; i++) {
//         addblocks();
//         position_left += blocks_dynamic_position_left[i++];
//         position_top += blocks_dynamic_position_top[i++];
//         // blocks_dynamic_position + "100px";
//       }
//     }

// test();
    //loop for making blocks
    // for (let i = 0; i < blocks_dynamic_position.length; i++) {
    //   grid.appendChild(blocks);
    //   position_left += blocks_dynamic_position[i];
    // }
    


    






    for(let i=0; i < number_of_blocks; i++){
      const blocks = document.createElement('div');
      blocks.style.left = blocks_dynamic_position_left[x++];
      blocks.style.top = '10px';
      blocks.style.backgroundColor = 'blue';
      blocks.style.position = 'absolute';
      blocks.style.width = '100px';
      blocks.style.height = '20px';
      blocks.style.margin = '10px';
      blocks.id = 'b' + i;
      blocks.className = 'ansbox';
      toAdd.appendChild(blocks);
       console.log(i);
   }
   
   grid.appendChild(toAdd);









     //add block funtion fully js
    
    //  function addblocks(){
    // blocks;
    // grid.appendChild(blocks);
    // blocks.style.left = position_left();
    // blocks.style.top = '10px';
    // blocks.style.backgroundColor = 'blue';
    // blocks.style.position = 'absolute';
    // blocks.style.width = '100px';
    // blocks.style.height = '20px';

    //  }


//  for (let i = 0; i < 3; i++) {
//       addblocks();
//       blocks_dynamic_position_left;
//       blocks.id = 'b'+1;
//       console.log(left);
//      }




// block.classList.add('block')
  // block.style.left = '100px'
  // block.style.bottom = '50px'
  // grid.appendChild(block)









//drow my main-block
function addBlock(){

  // block.classList.add('block')
  block.id = 'main_block';
  grid.appendChild(block)
  
}

addBlock()




//main-block movement

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















// let names = ['alireza', 'mahdi', 'reza', 'hasan']


// console.log(names);


// let namesN = ['ali12', 'reza34', 'mahdi44']

// console.log(namesN);

// let r = []

// console.log(r);






























