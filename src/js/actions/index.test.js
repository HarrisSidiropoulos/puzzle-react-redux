import {expect} from 'chai';
import {getPuzzlePartPosition, isPuzzleSolved, shufflePuzzle, PUZZLE_PART_POSITION, SHUFFLE_PUZZLE, IS_PUZZLE_SOLVED} from './index'

describe('Actions', () => {
  describe('getPuzzlePartPosition', () => {
    it('should have keys: type, part', () => {
      expect(getPuzzlePartPosition(10)).to.have.all.keys('type','part')
    });
    describe('part value', () => {
      it('should be number', () => {
        expect(getPuzzlePartPosition(10).part).to.be.a('number')
      });
      it('should throw error if is not number', () => {
        expect(() => getPuzzlePartPosition('test')).to.throw(Error);
      });
    });
    describe('type value', () => {
      it('should be string', () => {
        expect(getPuzzlePartPosition(10).type).to.be.equal(PUZZLE_PART_POSITION)
      });
      it('should be string', () => {
        expect(getPuzzlePartPosition(10).type).to.be.a('string')
      });
    });
  });
  describe('isPuzzleSolved', () => {
    it('should have keys: type', () => {
      expect(isPuzzleSolved()).to.have.all.keys('type')
    });
    describe('type value', () => {
      it('should be', () => {
        expect(isPuzzleSolved().type).to.be.equal(IS_PUZZLE_SOLVED)
      });
      it('should be string', () => {
        expect(isPuzzleSolved().type).to.be.a('string')
      });
    });
  });
  describe('shufflePuzzle', () => {
    it('should have keys: type', () => {
      expect(shufflePuzzle()).to.have.all.keys('type')
    });
    describe('type value', () => {
      it('should be', () => {
        expect(shufflePuzzle().type).to.be.equal(SHUFFLE_PUZZLE)
      });
      it('should be string', () => {
        expect(shufflePuzzle().type).to.be.a('string')
      });
    });
  });
});
