import Project from '../Project';
import Glass from '../../materials/Glass';
import Tool from '../../materials/Tool';
import Step from '../Step';
import Board from '../../materials/Board';
import Measurement from '../../materials/Measurement';

class PictureFrame extends Project {
  public static tools: Tool[] = ['dog', 'saw', 'beer'];
  public static steps: Step[];

  constructor(
    public board: Board,
    public glass: Glass,
    public rabbetDepth: Measurement
  ) {
    // Determine the steps
    const steps = PictureFrame.generateSteps(board, glass);
    PictureFrame.steps = steps;

    super(board, PictureFrame.tools, PictureFrame.steps);
  }

  private static generateSteps(board: Board, glass: Glass): Step[] {
    return [
      'pet the dog',
      `use the saw on the ${board.species}`,
      'drink the beer',
      `cut the glass that is ${glass.length.toString()} long.`,
      `cut the glass that is ${glass.width.toString()} wide.`
    ];
  }
}

export default PictureFrame;
