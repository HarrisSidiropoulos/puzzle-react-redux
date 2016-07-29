import {expect} from 'chai';
import configureStore from './configureStore'

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
});
