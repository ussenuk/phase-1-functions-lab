// Code your solution in this file!

let scuberHeadquarters = 42;

function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - scuberHeadquarters);
}
distanceFromHqInBlocks(40);

function distanceFromHqInFeet(someValue) {

  let distanceInBlocks = distanceFromHqInBlocks(someValue);
  return Math.abs(distanceInBlocks * 264);

}
// distanceFromHqInFeet(40);

function distanceTravelledInFeet(start, destination) {
  return Math.abs((destination - start) * 264);
}
distanceTravelledInFeet(34, 38);

function calculatesFarePrice(start, destination) {
  //let charges = (distanceTravelledInFeet(start, destination)-400)*2;
  let ride = Math.abs((destination - start) * 264);
  let charges2 = 25;
  let thisOnIsOnMe = 0;
  let not = "cannot travel that far";
  if (ride > 2500) {
    //let thisOnIsOnMe = "This one is on me!";
    return not;
  } else if (ride > 2000) {
    return charges2;

  } else if (ride > 400) {
    //let charges ="I will gladly take your thirty bucks.";
    ride = ride - 400;
    return ride * 0.02;

  } else if (ride < 400) {
    return thisOnIsOnMe;
  }
}

calculatesFarePrice(36, 38);