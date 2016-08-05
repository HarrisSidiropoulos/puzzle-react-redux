import {expect} from 'chai'
import offlineProps from './offline-props'

describe('offlineProps', ()=> {
  it('should return an object when enviroment is development', ()=> {
    expect(offlineProps()).to.have.all.keys('install', 'applyUpdate', 'NODE_ENV')
  })
  it('should return an object when enviroment is production', ()=> {
    expect(offlineProps('production')).to.have.all.keys('install', 'applyUpdate', 'NODE_ENV')
  })
})
