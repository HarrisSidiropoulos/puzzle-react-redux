import React from 'react'
import TestUtils from 'react-addons-test-utils'
import chai, {expect} from 'chai'
import jsxChai from 'jsx-chai'
chai.use(jsxChai)

import OfflineUpdate from './index'
function applyUpdate() {

}
function install() {

}
function getMainJSX(env='development') {
  const renderer = TestUtils.createRenderer()
  renderer.render(<OfflineUpdate NODE_ENV={env} install={install} applyUpdate={applyUpdate}/>)
  return renderer.getRenderOutput()
}

describe('OfflineUpdate', ()=> {
  it('should have class hidden in development', ()=> {
    expect(getMainJSX()).to.include("hidden")
  })
  it('should have class hidden in production', ()=> {
    expect(getMainJSX('production')).to.include("hidden")
  })
});
