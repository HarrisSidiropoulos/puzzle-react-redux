import {expect} from 'chai'
import PuzzleParts from './PuzzleParts'

describe('PuzzleParts Class', ()=> {
  let p = new PuzzleParts()
  describe('Interface', ()=> {
    it('should have method initParts', ()=> {
      expect(p).to.respondTo('initParts')
    })
    it('should have method isPuzzleSolved', ()=> {
      expect(p).to.respondTo('isPuzzleSolved')
    })
    it('should have method getNewIndex', ()=> {
      expect(p).to.respondTo('getNewIndex')
    })
    it('should have method getNeigborParts', ()=> {
      expect(p).to.respondTo('getNeigborParts')
    })
    it('should have method getRandomIndex', ()=> {
      expect(p).to.respondTo('getRandomIndex')
    })
    it('should have method shuffle', ()=> {
      expect(p).to.respondTo('shuffle')
    })
    it('should have method changeParts', ()=> {
      expect(p).to.respondTo('changeParts')
    })
    describe('initParts method', ()=> {
      it('should have keys: parts, emptyIndex, columns, rows', () => {
        expect(p.initParts()).to.have.all.keys('parts','emptyIndex','columns','rows')
      });
    });
    describe('isPuzzleSolved method', ()=> {
      it('should return true if puzzle is solved', () => {
        expect(p.isPuzzleSolved()).to.be.true
      });
    });
    describe('getNewIndex method', ()=> {
      it('should return emptyIndex if is left right bottom top from empty part', () => {
        expect(p.getNewIndex(10)).to.be.equal(11)
      });
      it('should return same index if is not left right bottom top from empty part', () => {
        expect(p.getNewIndex(1)).to.be.equal(1)
      });
    });
    describe('getNeigborParts method', ()=> {
      it('should return array with left right bottom top indexes', () => {
        expect(p.getNeigborParts()).to.be.eql([7,10])
      });
    });
    describe('getRandomIndex method', ()=> {
      it(`should return one of 7, 10 when emptyIndex is ${p.emptyIndex}`, () => {
        expect(p.getRandomIndex()).to.be.oneOf([7,10])
      });
    });
    describe('changeParts method', ()=> {
      it(`should change index`, () => {
        const changedParts = p.changeParts(10)
        const result = changedParts.map(({index})=>index)
        expect(result).to.be.eql([0,1,2,3,4,5,6,7,8,9,11,10])
      });
      it(`should change index back to default`, () => {
        const changedParts = p.changeParts(11)
        const result = changedParts.map(({index})=>index)
        expect(result).to.be.eql([0,1,2,3,4,5,6,7,8,9,10,11])
      });
    });
    describe('shuffle method', ()=> {
      it(`should change index randomly`, () => {
        const changedParts = p.shuffle(1)
        const result = changedParts.map(({index})=>index)
        expect(result).to.not.be.eql([0,1,2,3,4,5,6,7,8,9,10,11])
        expect(result.toString()).to.be.oneOf(['0,1,2,3,4,5,6,7,8,9,11,10','0,1,2,3,4,5,6,11,8,9,10,7'])
      });
    });
  })
})
