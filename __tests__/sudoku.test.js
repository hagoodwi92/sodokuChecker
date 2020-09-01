import Sudoku from './../src/sudoku.js';
import { TestScheduler } from 'jest';

describe('Sudoku', () => {

  test('should check for numbers 1-9 and return true', () => {
    let sudoku = new Sudoku();
    const numArray = [1,2,3,4,5,6,7,8,8];
    expect(sudoku.checkNum(numArray)).toEqual(false);  
 
  });

  test('should return true for solved sudoku', () => {
    let sudoku = new Sudoku();     
    expect(sudoku.checkGrid()).toEqual(true);    




});

});