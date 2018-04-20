class Calculator {
  constructor () {

  }

  ageInSeconds(age){
    let secondsInYear = (age * 31536000);
    return secondsInYear;
  }

  // diffrenceInSeconds(day1, day2){
  //   let diff = day1.getTime() - day2.getTime();
  //   let secondDiffrence = diff/1000;
  //   let diffrenceInSeconds = Math.abs(secondDiffrence);
  //   return diffrenceInSeconds;
  // }
  ageInMercuryYear(age){
    let mercuryAge = (Math.floor(age/0.24));
    return mercuryAge;
  }

}
export {Calculator};
