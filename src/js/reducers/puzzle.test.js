import {expect} from 'chai';
import puzzle, {INITIAL_STATE} from './puzzle'
import {getPuzzlePartPosition, isPuzzleSolved, shufflePuzzle, PUZZLE_PART_POSITION, SHUFFLE_PUZZLE, IS_PUZZLE_SOLVED} from '../actions'
describe('puzzle reducer', () => {
  const emptyPart = {
    ...INITIAL_STATE.parts[11]
  }
  describe(`${IS_PUZZLE_SOLVED} action`, () => {
    it('should be equal to initial state', () => {
      const state = puzzle(INITIAL_STATE, isPuzzleSolved())
      expect(state.parts).to.be.equal(INITIAL_STATE.parts)
    });
  });
  describe(`${PUZZLE_PART_POSITION} action`, () => {
    it('should change a puzzle part index', () => {
      const state = puzzle(INITIAL_STATE, getPuzzlePartPosition(10))
      expect(state.parts[10].index).to.be.equal(11)
    });
    it('should change a puzzle part position to be empty part position', () => {
      const state = puzzle(INITIAL_STATE, getPuzzlePartPosition(10))
      expect(state.parts[10].x).to.be.equal(emptyPart.x)
      expect(state.parts[10].y).to.be.equal(emptyPart.y)
    });
  });
  describe(`${SHUFFLE_PUZZLE} action`, () => {
    it('should be equal to initial state', () => {
      const state = puzzle(INITIAL_STATE, shufflePuzzle(INITIAL_STATE.parts, 100))
      expect(state.parts).to.not.be.equal(INITIAL_STATE.parts)
    });
  });
});
