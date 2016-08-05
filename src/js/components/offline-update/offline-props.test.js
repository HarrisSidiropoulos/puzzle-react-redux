import {expect} from 'chai'
import offlineProps from './offline-props'

describe('offlineProps', ()=> {
  describe('development', ()=> {
    it('should return an object with keys: install, applyUpdate, NODE_ENV', ()=> {
      expect(offlineProps()).to.have.all.keys('install', 'applyUpdate', 'NODE_ENV')
    })
    describe('install', ()=> {
      it('should be a function', ()=> {
        expect(offlineProps().install()).to.be.undefined
      })
    })
    describe('applyUpdate', ()=> {
      it('should be a function', ()=> {
        expect(offlineProps().applyUpdate()).to.be.undefined
      })
    })
  })
  describe('production', ()=> {
    it('should return an object with keys: install, applyUpdate, NODE_ENV', ()=> {
      expect(offlineProps('production')).to.have.all.keys('install', 'applyUpdate', 'NODE_ENV')
    })
  })
})
