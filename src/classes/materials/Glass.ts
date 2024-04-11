import Rectangle from './Rectangle';
import Measurement from './Measurement';

class Glass extends Rectangle {
  constructor(public length: Measurement, public width: Measurement) {
    super(length, width);
  }
}

export default Glass;
