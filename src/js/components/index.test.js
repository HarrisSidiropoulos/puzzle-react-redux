import React from 'react'
import TestUtils from 'react-addons-test-utils'
import chai, {expect} from 'chai'
import jsxChai from 'jsx-chai'
chai.use(jsxChai)

import { Main } from './index'
import {INITIAL_STATE} from 'reducers/puzzle'


function getMainJSX(isPuzzleSolved=true, parts=INITIAL_STATE.parts) {
  let props = {
    isPuzzleSolved: isPuzzleSolved,
    parts: parts,
    shufflePuzzle: ()=>{},
    partClick: ()=>{}
  }
  const renderer = TestUtils.createRenderer()
  renderer.render(<Main {...props} />)
  return renderer.getRenderOutput()
}

describe('Main', ()=> {
  describe('isPuzzleSolved', ()=> {
    it('should have class solved if true', ()=> {
      expect(getMainJSX(true)).to.include("solved")
    })
    it('should not have class solved if true', ()=> {
      expect(getMainJSX(false)).to.not.include("solved")
    })
  })
})
