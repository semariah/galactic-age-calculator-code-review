import {Calculator} from './../src/scripts.js';

describe('Calculator', function(){
  it('should calculate the age of someone into seconds', function() {
    let calculator = new Calculator();
    expect(calculator.ageInSeconds(20)).toEqual(630720000);
  });

  it('should calculate the seconds between two days', function(){
    let calculator = new Calculator();
    //let day1 = date(20, 4, 2017);
    //let day2 = date(21, 4, 2017);
     expect(calculator.diffrenceInSeconds("May 20, 2017 04:27:17", "May 21, 2017 04:27:17")).toEqual(86400);
   });

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
    let calculator = new Calculator();
    let age = 20;
    //let stress = "high";
    //let smoke = "yes";
    expect(calculator.lifeExpectancyPlanet(age)).toEqual(166);
  });

  it('should inform user if age is over the estimated life expectancy', function(){
    let calculator = new Calculator();
    let age = 100;
    //let stress = "low";
    //let smoke = "no";
    //let planet = "jupiter";
    expect(calculator.lifeExpectancyPlanet(age)).toEqual("you are past the eastimated, stay healthy!");
  });

});
