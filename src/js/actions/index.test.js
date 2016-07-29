import {expect} from 'chai';
import {getPuzzlePartPosition, isPuzzleSolved, shufflePuzzle} from './index'

describe('Actions', () => {
  describe('getPuzzlePartPosition', () => {
    it('should have keys: type, part', () => {
      expect(getPuzzlePartPosition(10)).to.have.all.keys('type','part')
    });
    describe('part value', () => {
      it('should be number', () => {
        expect(getPuzzlePartPosition(10).part).to.be.a('number')
      });
    });
    describe('type value', () => {
      it('should be string', () => {
        expect(getPuzzlePartPosition().type).to.be.a('string')
      });
    });
  });
  describe('isPuzzleSolved', () => {
    it('should have keys: type', () => {
      expect(isPuzzleSolved()).to.have.all.keys('type')
    });
    describe('type value', () => {
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
      it('should be string', () => {
        expect(shufflePuzzle().type).to.be.a('string')
      });
    });
  });
});
