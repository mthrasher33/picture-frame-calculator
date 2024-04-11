import Board from '../materials/Board';
import Tool from '../materials/Tool';
import Step from './Step';

class Project {
  constructor(
    public board: Board,
    public tools: Tool[],
    public steps: Step[]
  ) {}
}

export default Project;
