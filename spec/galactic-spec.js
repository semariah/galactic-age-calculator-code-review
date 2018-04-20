import {Calculator} from './../src/scripts.js';

describe('Calculator', function(){
  it('should calculate the age of someone into seconds', function() {
    let calculator = new Calculator();
    expect(calculator.ageInSeconds(20)).toEqual(630720000);
  });
});
