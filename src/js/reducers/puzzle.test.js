import {expect} from 'chai';
import puzzle, {INITIAL_STATE} from './puzzle'
import {getPuzzlePartPosition, isPuzzleSolved, shufflePuzzle, PUZZLE_PART_POSITION, SHUFFLE_PUZZLE, IS_PUZZLE_SOLVED} from '../actions'

const emptyIndex = 11;
const emptyPart = INITIAL_STATE.parts[emptyIndex];
const emptyPartX = emptyPart.x;
const emptyPartY = emptyPart.y;

describe('puzzle reducer', () => {
  describe(`${IS_PUZZLE_SOLVED} action`, () => {
    const state = puzzle(INITIAL_STATE, isPuzzleSolved())
    it('should be equal to initial state', () => {
      expect(state.parts).to.be.equal(INITIAL_STATE.parts)
    });
    it('should be ordered by index', () => {
      expect(state.parts).to.satisfy((parts)=> parts.every(({index},i)=>index===i))
    });
  });
  describe(`${PUZZLE_PART_POSITION} action`, () => {
    it('should change a puzzle part position to empty part', () => {
      const partIndex = 10;
      const state = puzzle(INITIAL_STATE, getPuzzlePartPosition(partIndex))
      expect(state.parts[partIndex].index).to.be.equal(emptyIndex)
      expect(state.parts[partIndex].x).to.be.equal(emptyPartX)
      expect(state.parts[partIndex].y).to.be.equal(emptyPartY)
    });
  });
  describe(`${SHUFFLE_PUZZLE} action`, () => {
    let state = {}
    beforeEach(()=> {
      state = puzzle(INITIAL_STATE, shufflePuzzle(INITIAL_STATE.parts, 100))
    })
    it('should not be equal to initial state', () => {
      expect(state.parts).to.not.be.equal(INITIAL_STATE.parts)
    });
    it('should not be ordered by index', () => {
      expect(state.parts).to.not.satisfy((parts)=> parts.every(({index},i)=>index===i))
    });
  });
});
