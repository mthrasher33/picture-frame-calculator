function centimeterToMeter(centimeters: number): number {
  return centimeters / 100;
}

function centimeterToInch(centimeters: number): number {
  return centimeters / 2.54;
}

function footToMeter(feet: number): number {
  return feet / 3.2804;
}

function footToInch(feet: number): number {
  return feet * 12;
}

function inchToFoot(inches: number): number {
  return inches / 12;
}

function inchToCentimeter(inches: number): number {
  return inches * 2.54;
}

function meterToFoot(meters: number): number {
  return meters * 3.2804;
}

function meterToCentimeter(meters: number): number {
  return meters * 100;
}

export {
  centimeterToMeter,
  centimeterToInch,
  footToMeter,
  footToInch,
  inchToFoot,
  inchToCentimeter,
  meterToFoot,
  meterToCentimeter
};
