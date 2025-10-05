import React from 'react';

function convertKilowattsToHorsepower(kilowatts) {
  const conversionFactor = 1.36;
  const horsepower = kilowatts * conversionFactor;
  return horsepower;
}

function CarDetails() {
  const kilowatts = 218;
  const horsepower = convertKilowattsToHorsepower(kilowatts);

  let performanceLabel = '';
  if (horsepower > 300) {
    performanceLabel = 'This car is extremely powerful!';
  } else if (horsepower > 200) {
    performanceLabel = 'This car is sporty and fun!';
  } else {
    performanceLabel = 'This car is smooth and reliable.';
  }

  return (
    <div>
      <h1>Car Details</h1>
      <p>{kilowatts} kW = {horsepower.toFixed(2)} hp</p>
      <p>{performanceLabel}</p>
    </div>
  );
}

export default CarDetails;