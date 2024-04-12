import Measurement from '../Measurement';
import { Unit, UnitsPlural } from '../../../enums/Unit';
import ErrorMessage from '../../../enums/ErrorMessage';

describe('Measurement Class', () => {
  it('should create a valid measurement with just one unit provided', () => {
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

  it('should create a valid measurement with foot and inch', () => {
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

  it('should create a valid measurement with meter and centimeter', () => {
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

  it('should throw an error for invalid pairing (meter and inch)', () => {
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

  it('should throw an error for invalid pairing (inch and meter)', () => {
    expect(
      () =>
        new Measurement([
          {
            unit: Unit.Inch,
            value: 2
          },
          {
            unit: Unit.Meter,
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

  it('should throw an error for invalid pairing (foot and centimeter)', () => {
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

  it('should throw an error for invalid pairing (centimeter and foot)', () => {
    expect(
      () =>
        new Measurement([
          {
            unit: Unit.Centimeter,
            value: 2
          },
          {
            unit: Unit.Foot,
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

  it('should determine correctly which measurement is larger', () => {
    const shorter = new Measurement([{ unit: Unit.Foot, value: 1 }]);
    const longer = new Measurement([{ unit: Unit.Centimeter, value: 1000 }]);
    expect(longer.isLongerThan(shorter)).toBe(true);
  });

  it('should use the correct singular when printing to string', () => {
    const foot = new Measurement([{ unit: Unit.Foot, value: 1 }]);
    expect(foot.toString().indexOf(Unit.Foot) > -1).toBe(true);
  });

  it('should use the correct plurals when printing to string', () => {
    const feet = new Measurement([{ unit: Unit.Foot, value: 2 }]);
    const inches = new Measurement([{ unit: Unit.Inch, value: 2 }]);
    const meters = new Measurement([{ unit: Unit.Meter, value: 2 }]);
    const centimeters = new Measurement([{ unit: Unit.Centimeter, value: 2 }]);

    expect(feet.toString().indexOf(UnitsPlural.Foot) > -1).toBe(true);

    expect(inches.toString().indexOf(UnitsPlural.Inch) > -1).toBe(true);

    expect(meters.toString().indexOf(UnitsPlural.Meter) > -1).toBe(true);

    expect(centimeters.toString().indexOf(UnitsPlural.Centimeter) > -1).toBe(
      true
    );
  });

  it('should format correctly when printing a measurement with two components', () => {
    const multi_measurement = new Measurement([
      { unit: Unit.Meter, value: 3 },
      { unit: Unit.Centimeter, value: 10 }
    ]);
    expect(multi_measurement.toString().indexOf(' ') > -1).toBe(true);
  });
});
