import { Unit, UnitsPlural } from '../../enums/Unit';
import ErrorMessage from '../../enums/ErrorMessage';
import MeasurementInterface from '../../interfaces/Measurement';
import {
  footToMeter,
  meterToCentimeter,
  inchToCentimeter,
  centimeterToInch
} from '../../utils/unit-conversions';

class Measurement {
  public measurement: MeasurementInterface[] = [];
  public centimeters: number = 0;
  public inches: number = 0;

  constructor(measurement: MeasurementInterface[]) {
    this.validate(measurement);
    this.setMathematicalLengths();

    if (this.measurement.length > 1) {
      this.sortByUnitSize();
    }
  }

  public isLongerThan(otherMeasurement: Measurement): Boolean {
    return this.centimeters > otherMeasurement.centimeters;
  }

  public isMetric(): Boolean {
    const [{ unit }] = this.measurement;
    return unit === Unit.Meter || unit === Unit.Centimeter;
  }

  public toString(): String {
    const { measurement } = this;
    let outputString: String = '';

    measurement.forEach(({ unit, value }, index) => {
      outputString += `${value.toString()} `;

      if (value > 1) {
        switch (unit) {
          case 'foot':
            outputString += UnitsPlural.Foot;
            break;
          case 'inch':
            outputString += UnitsPlural.Inch;
            break;
          case 'meter':
            outputString += UnitsPlural.Meter;
            break;
          case 'centimeter':
            outputString += UnitsPlural.Centimeter;
            break;
        }
      } else {
        outputString += unit;
      }

      if (index < measurement.length - 1) {
        outputString += ' ';
      }
    });

    return outputString;
  }

  private sortByUnitSize(): void {
    const { measurement } = this;
    const imperialOrder = { [Unit.Foot]: 1, [Unit.Inch]: 2 };
    const metricOrder = { [Unit.Meter]: 1, [Unit.Centimeter]: 2 };
    const measurementUnit = measurement[0].unit;
    const activeOrder: any =
      measurementUnit === Unit.Meter || measurementUnit === Unit.Centimeter
        ? metricOrder
        : imperialOrder;

    measurement.sort(() => {
      const orderA = activeOrder[measurement[0].unit];
      const orderB = activeOrder[measurement[1].unit];
      return orderB - orderA;
    });
  }

  private setMathematicalLengths() {
    const { measurement } = this;
    let length: number = 0;
    measurement.forEach(({ unit, value }) => {
      switch (unit) {
        case Unit.Foot:
          length += meterToCentimeter(footToMeter(value));
          break;
        case Unit.Inch:
          length += inchToCentimeter(value);
          break;
        case Unit.Meter:
          length += meterToCentimeter(value);
          break;
        default:
          length += value;
          break;
      }
    });
    this.centimeters = length;
    this.inches = centimeterToInch(length);
  }

  private validate(measurement: MeasurementInterface[]): void {
    if (measurement.length === 2) {
      const [{ unit: unit1 }, { unit: unit2 }] = measurement;
      const { validateUnitPairing } = this;
      validateUnitPairing(unit1, unit2);
    }
    this.measurement = measurement;
  }

  private validateUnitPairing(unit1: Unit, unit2: Unit): void {
    if (
      (unit1 === Unit.Foot && unit2 !== Unit.Inch) ||
      (unit1 === Unit.Inch && unit2 !== Unit.Foot)
    ) {
      throw new Error(
        ErrorMessage.InvalidUnitPairing.replace('{unit1}', Unit.Foot).replace(
          '{unit2}',
          Unit.Inch
        )
      );
    }
    if (
      (unit1 === Unit.Meter && unit2 !== Unit.Centimeter) ||
      (unit1 === Unit.Centimeter && unit2 !== Unit.Meter)
    ) {
      throw new Error(
        ErrorMessage.InvalidUnitPairing.replace('{unit1}', Unit.Meter).replace(
          '{unit2}',
          Unit.Centimeter
        )
      );
    }
  }
}

export default Measurement;
