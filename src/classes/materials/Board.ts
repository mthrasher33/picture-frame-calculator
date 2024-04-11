import WoodSpecies from '../../enums/WoodSpecies';
import Rectangle from './Rectangle';
import Measurement from './Measurement';

class Board extends Rectangle {
  constructor(
    public length: Measurement,
    public width: Measurement,
    public species?: WoodSpecies
  ) {
    super(length, width);
  }
}

export default Board;
