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
    public rabbet: Measurement
  ) {
    const steps = PictureFrame.generateSteps(board, glass, rabbet);
    PictureFrame.steps = steps;

    super(board, PictureFrame.tools, PictureFrame.steps);
  }

  private static generateSteps(
    board: Board,
    glass: Glass,
    rabbet: Measurement
  ): Step[] {
    return [
      `Use a table saw to rip the board in half to ${(
        board.width.inches / 2
      ).toFixed(2)} inches`,
      `Cut a 45 degree miter from the end of one board`,
      `Measure the top rail to ${(
        glass.length.inches -
        2 * rabbet.inches
      ).toFixed(2)} inches.`,
      `Trace and cut a 45 degree miter beginning at this top rail measurement.`,
      `Repeat with the next board in sequence. These are your length-wise rails.`,
      `Measure the top rail to ${(
        glass.width.inches -
        2 * rabbet.inches
      ).toFixed(2)} inches.`,
      `Trace and cut a 45 degree miter beginning at this top rail measurement.`,
      `Repeat with the next board in sequence. These are your width-wise rails.`,
      `Route the rabbet on the top-rail side of each rail.`,
      `Fit your glass in and clamp. Check for leeway. If it's good, glue it up!`
    ];
  }
}

export default PictureFrame;
