import {expect} from 'chai';
import configureStore from './configureStore'
import {initAndShufflePuzzle, checkPuzzlePartPosition} from '../actions'

describe('Store', () => {
  let store = configureStore();
  beforeEach(() => {
    store = configureStore();
  });
  it('exists', () => {
    expect(store).to.exist
  });
  describe('Puzzle reducer', () => {
    it('exists', () => {
      expect(store.getState().puzzle).to.exist
    });
    it('should have keys: parts, emptyIndex, columns, rows, isPuzzleSolved', () => {
      expect(store.getState().puzzle).to.have.all.keys('parts','emptyIndex','columns','rows', 'isPuzzleSolved')
    });
  });
  describe('initAndShufflePuzzle', ()=> {
    const initAction = store.dispatch(initAndShufflePuzzle())
    it('should be initial state', () => {
      expect(store.getState().puzzle.parts).to.satisfy((parts)=> parts.every(({index},i)=>index===i))
    });
    it('should shuffle puzzle', () => {
      initAction.then(()=> {
        expect(store.getState().puzzle.parts).to.not.satisfy((parts)=> parts.every(({index},i)=>index===i))
      })
    });
  });
  describe('checkPuzzlePartPosition', ()=> {
    const initAction = store.dispatch(checkPuzzlePartPosition())
    it('should be true', () => {
      expect(true).to.be.true
    });
    it('should be true', () => {
      initAction.then(()=> {
        expect(true).to.be.true
      });
    });
  });
});
