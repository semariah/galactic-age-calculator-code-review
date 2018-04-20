import {Calculator} from './../src/scripts.js';

describe('Calculator', function(){
  it('should calculate the age of someone into seconds', function() {
    let calculator = new Calculator();
    expect(calculator.ageInSeconds(20)).toEqual(630720000);
  });

  it('should calculate the seconds between two days', function(){
    let calculator = new Calculator();
    let day1 = date(20, 4, 2017);
    let day2 = date(21, 4, 2017);
    // let diff = day1.getTime() - day2.getTime();
    // let secondDiffrence = diff/1000;
    // let diffrenceInSeconds = Math.abs(secondDiffrence);
    expect(calculator.diffrenceInSeconds(day1, day2)).toEqual(86400);
  });

  it('should calculate the age of a person in mercury years', function(){
    let calculator = new Calculator();
    expect(calculator.ageInMercuryYear(20)).toEqual(83);
  });

  // it('should calculate the age of a person in venus years', function(){
  //   let Calculator = new Calcuator();
  //   expect(calculator.ageInVenusYear(20)).toEqual(32);
  // })
});
