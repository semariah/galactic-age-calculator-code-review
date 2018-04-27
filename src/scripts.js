export class Calculator {
  constructor (age) {
    this.age = age;
    this.lifeExpectancy = 60
  }

  ageInSeconds(age){
    let secondsInYear = (age * 31536000);
    return secondsInYear;
  }

  diffrenceInSeconds(day1, day2){
    let clock = new Date(day1).getTime();
    let day =  new Date(day2).getTime();
    let secondDiffrence = (clock - day)/1000;
    let diffrenceInSeconds = Math.abs(secondDiffrence);
    return diffrenceInSeconds;
  }

  ageInMercuryYear(age){
    let mercuryAge = (Math.floor(age/0.24));
    return mercuryAge;
  }

  ageInVenusYear(age){
    let venusAge = (Math.floor(age/0.62));
    return venusAge;
  }

  ageInMarsYear(age){
    let marsAge = (Math.floor(age/1.88));
    return marsAge;
  }

  ageInJupiterYear(age){
    let jupiterAge = (Math.floor(age/11.86));
    return jupiterAge;
  }

  lifeExpectancyPlanet(age) {
      if(age <= 60) {
        let earthLeft = (this.lifeExpectancy - age);
        let mercuryLeft = Math.floor(earthLeft/0.24);
        return mercuryLeft;
      } else if (age > 60){
        return "you are past the estimated, stay healthy!";
      }

}
}
