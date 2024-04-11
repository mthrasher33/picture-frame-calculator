import Measurement from '../Measurement';
import { Unit } from '../../../enums/Unit';
import ErrorMessage from '../../../enums/ErrorMessage';

describe('Measurement Class', () => {
  it('should create valid measurement just one unit provided', () => {
    expect(
      () =>
        new Measurement([
          {
            unit: Unit.Inch,
            value: 252.5
          }
        ])
    ).not.toThrow();
  });

  it('should create valid measurement with foot and inch', () => {
    expect(
      () =>
        new Measurement([
          {
            unit: Unit.Foot,
            value: 5
          },
          {
            unit: Unit.Inch,
            value: 6
          }
        ])
    ).not.toThrow();
  });

  it('should create valid measurement with meter and centimeter', () => {
    expect(
      () =>
        new Measurement([
          {
            unit: Unit.Meter,
            value: 2
          },
          {
            unit: Unit.Centimeter,
            value: 3
          }
        ])
    ).not.toThrow();
  });

  it('should throw error for invalid pairing (meter and inch)', () => {
    expect(
      () =>
        new Measurement([
          {
            unit: Unit.Meter,
            value: 2
          },
          {
            unit: Unit.Inch,
            value: 3
          }
        ])
    ).toThrow(
      ErrorMessage.InvalidUnitPairing.replace('{unit1}', Unit.Meter).replace(
        '{unit2}',
        Unit.Centimeter
      )
    );
  });
  it('should throw error for invalid pairing (foot and centimeter)', () => {
    expect(
      () =>
        new Measurement([
          {
            unit: Unit.Foot,
            value: 2
          },
          {
            unit: Unit.Centimeter,
            value: 3
          }
        ])
    ).toThrow(
      ErrorMessage.InvalidUnitPairing.replace('{unit1}', Unit.Foot).replace(
        '{unit2}',
        Unit.Inch
      )
    );
  });
});
