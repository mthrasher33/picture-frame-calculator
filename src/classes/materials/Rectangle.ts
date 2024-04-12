import Measurement from './Measurement';
import ErrorMessage from '../../enums/ErrorMessage';

abstract class Rectangle {
  public length?: Measurement;
  public width?: Measurement;
  constructor(length: Measurement, width: Measurement) {
    this.validate(length, width);
    this.length = length;
    this.width = width;
  }

  validate(length: Measurement, width: Measurement) {
    if (
      (length.isMetric() && !width.isMetric()) ||
      (!length.isMetric() && width.isMetric())
    ) {
      throw new Error(ErrorMessage.InvalidMeasurementSystemsPairing);
    }

    if (width.isLongerThan(length)) {
      throw new Error(ErrorMessage.LengthMustBeLongerThanWidth);
    }
    this.length = length;
    this.width = width;
  }
}

export default Rectangle;
