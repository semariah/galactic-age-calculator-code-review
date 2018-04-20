import {Calculator} from './../src/scripts.js';

describe('Calculator', function(){
  it('should calculate the age of someone into seconds', function() {
    let calculator = new Calculator();
    expect(calculator.ageInSeconds(20)).toEqual(630720000);
  });

  // it('should calculate the seconds between two days', function(){
  //   let calculator = new Calculator();
  //   let day1 = date(20, 4, 2017);
  //   let day2 = date(21, 4, 2017);
  //   // let diff = day1.getTime() - day2.getTime();
  //   // let secondDiffrence = diff/1000;
  //   // let diffrenceInSeconds = Math.abs(secondDiffrence);
  //   expect(calculator.diffrenceInSeconds(day1, day2)).toEqual(86400);
  // });

  it('should calculate the age of a person in mercury years', function(){
    let calculator = new Calculator();
    expect(calculator.ageInMercuryYear(20)).toEqual(83);
  });

  it('should calculate the age of a person in venus years', function(){
    let calculator = new Calculator();
    expect(calculator.ageInVenusYear(20)).toEqual(32);
  });

  it('should calculate the age of a person in mars years', function(){
    let calculator = new Calculator();
    expect(calculator.ageInMarsYear(20)).toEqual(10);
  });

  it('should calculate the age of a person in Jupiter years', function(){
    let calculator = new Calculator();
    expect(calculator.ageInJupiterYear(20)).toEqual(1);
  });

  it('should calculate how long a person has left to live in each planet based on smoking and stress levels', function(){
    let Calculator = new Calculator();
    let age = 20;
    let stress = "high";
    let smoke = "yes";
    expect(calculator.lifeExpectancyPlant(age, stress, smoke, planet)).toEqual(166 + " years more on " + planet);
  });

});
