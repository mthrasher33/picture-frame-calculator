import Measurement from '../Measurement';
import Glass from '../Glass';
import { Unit } from '../../../enums/Unit';
import ErrorMessage from '../../../enums/ErrorMessage';

describe('Rectangle Class', () => {
  const measurement_a: Measurement = new Measurement([
    { unit: Unit.Centimeter, value: 100 }
  ]);
  const measurement_b: Measurement = new Measurement([
    { unit: Unit.Centimeter, value: 80 }
  ]);
  const measurement_c: Measurement = new Measurement([
    { unit: Unit.Inch, value: 50 }
  ]);

  it('should create a valid rectangle', () => {
    expect(() => {
      new Glass(measurement_a, measurement_b);
    }).not.toThrow();
  });

  it('should throw an error if the length and width do not use the same measurement system', () => {
    expect(() => {
      new Glass(measurement_a, measurement_c);
    }).toThrow(ErrorMessage.InvalidMeasurementSystemsPairing);

    expect(() => {
      new Glass(measurement_c, measurement_a);
    }).toThrow(ErrorMessage.InvalidMeasurementSystemsPairing);
  });

  it('should throw an error if the width is longer than the length', () => {
    expect(() => {
      new Glass(measurement_b, measurement_a);
    }).toThrow(ErrorMessage.LengthMustBeLongerThanWidth);
  });
});
