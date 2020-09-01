export default function Sudoku () {
  this.row1 = [8,2,7,1,5,4,3,9,6]
  this.row2 = [9,6,5,3,2,7,1,4,8]
  this.row3 = [3,4,1,6,8,9,7,5,2]
  this.row4 = [5,9,3,4,6,8,2,7,1]
  this.row5 = [4,7,2,5,1,3,6,8,9]
  this.row6 = [6,1,8,9,7,2,4,3,5]
  this.row7 = [7,8,6,2,3,5,9,1,4]
  this.row8 = [1,5,4,7,9,6,8,2,3]
  this.row9 = [2,3,9,8,4,1,5,6,7]
  
}

Sudoku.prototype.checkNum = function (array) {
  for(let i = 1; i <= array.length; i++){
    if (!array.includes(i)){
      return false;
    }
  }
  return true;
}


Sudoku.prototype.checkGrid = function (){
  let test = [];
  let test1 = [];
  let test2 = [];
  let test3 = [];
for(let i = 0; i < 9; i++){
  test = []
  test.push(this.row1[i])
  test.push(this.row2[i])
  test.push(this.row3[i])
  test.push(this.row4[i])
  test.push(this.row5[i])
  test.push(this.row6[i])
  test.push(this.row7[i])
  test.push(this.row8[i])
  test.push(this.row9[i])
  if(this.checkNum(test) === false){
    return false;
  }
  
}
if(this.checkNum(this.row1) === false){
  return false;
}
if(this.checkNum(this.row2) === false){
  return false;
}

if(this.checkNum(this.row3) === false){
  return false;
}

if(this.checkNum(this.row4) === false){
  return false;
}

if(this.checkNum(this.row5) === false){
  return false;
}

if(this.checkNum(this.row6) === false){
  return false;
}

if(this.checkNum(this.row7) === false){
  return false;
}
if(this.checkNum(this.row8) === false){
  return false;
}
if(this.checkNum(this.row9) === false){
  return false;
}
//grids

let i = 0;
let j = 3;
while(j <= 9){
  test1 =[]
  test2 =[]
  test3 =[]
  for(; i < j;i++) {
    
    test1.push(this.row1[i])
    test1.push(this.row2[i])
    test1.push(this.row3[i])
    test2.push(this.row4[i])
    test2.push(this.row5[i])
    test2.push(this.row6[i])
    test3.push(this.row7[i])
    test3.push(this.row8[i])
    test3.push(this.row9[i])
  }
  if(this.checkNum(test1) === false){
    return false;
  }
  if(this.checkNum(test2) === false){
    return false;
  }
  if(this.checkNum(test3) === false){
    return false;
  }
j += 3;
}
return true;
}