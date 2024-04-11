import PictureFrame from '../../classes/projects/types/PictureFrame';
import { Unit } from '../../enums/Unit';
import Glass from '../../classes/materials/Glass';
import Board from '../../classes/materials/Board';
import Measurement from '../../classes/materials/Measurement';

const glassMeasurement = {
  length: new Measurement([
    {
      unit: Unit.Inch,
      value: 10
    },
    {
      unit: Unit.Foot,
      value: 3
    }
  ]),
  width: new Measurement([
    {
      unit: Unit.Foot,
      value: 1
    },
    {
      unit: Unit.Inch,
      value: 8
    }
  ])
};

const glass = new Glass(glassMeasurement.length, glassMeasurement.width);

const boardMeasurement = {
  length: new Measurement([
    {
      unit: Unit.Inch,
      value: 10.5
    }
  ]),
  width: new Measurement([
    {
      unit: Unit.Inch,
      value: 2.25
    }
  ])
};

const board = new Board(boardMeasurement.length, boardMeasurement.width);

const rabbet = {
  depth: new Measurement([
    {
      unit: Unit.Inch,
      value: 0.375
    }
  ])
};

export default new PictureFrame(board, glass, rabbet.depth);
