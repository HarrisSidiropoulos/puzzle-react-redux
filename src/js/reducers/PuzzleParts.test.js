import {expect} from 'chai'
import PuzzleParts from './PuzzleParts'

describe('PuzzleParts Class', ()=> {
  const p = new PuzzleParts()
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
  })
})
