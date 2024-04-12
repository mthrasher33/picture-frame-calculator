import {
  centimeterToMeter,
  centimeterToInch,
  footToMeter,
  footToInch,
  inchToFoot,
  inchToCentimeter,
  meterToFoot,
  meterToCentimeter
} from '../unit-conversions';

describe('Unit Conversion Utils', () => {
  it('should convert centimeters to meters', () => {
    const centimeters = 100;
    const meters = 1;
    expect(centimeterToMeter(centimeters)).toEqual(meters);
  });

  it('should convert centimeters to inches', () => {
    const centimeters = 254;
    const inches = 100;
    expect(centimeterToInch(centimeters)).toEqual(inches);
  });

  it('should convert feet to meters', () => {
    const feet = 32.804;
    const meters = 10;
    expect(footToMeter(feet)).toEqual(meters);
  });

  it('should convert feet to inches', () => {
    const feet = 2;
    const inches = 24;
    expect(footToInch(feet)).toEqual(inches);
  });

  it('should convert inches to feet', () => {
    const inches = 24;
    const feet = 2;
    expect(inchToFoot(inches)).toEqual(feet);
  });

  it('should convert inches to centimeters', () => {
    const inches = 100;
    const centimeters = 254;
    expect(inchToCentimeter(inches)).toEqual(centimeters);
  });

  it('should convert meters to feet', () => {
    const feet = 32.804;
    const meters = 10;
    expect(meterToFoot(meters)).toEqual(feet);
  });

  it('should convert meters to centimeters', () => {
    const centimeters = 100;
    const meters = 1;
    expect(meterToCentimeter(meters)).toEqual(centimeters);
  });
});
