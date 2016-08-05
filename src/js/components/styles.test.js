import {expect} from 'chai';
import {getStyles, getBgImageStyles, getBgStyles, getSizeStyles} from './styles'

const part = {x:10,y:10,w:100,h:100,bx:10,by:10}
const images = ['image1']

describe('style functions', () => {
  describe('getStyles', () => {
    it('should return all css values', ()=> {
      const actual = getStyles(part, images)
      const result = {
        left:`${part.x}px`,
        top:`${part.y}px`,
        backgroundPosition: `-${part.bx}px -${part.by}px`,
        backgroundImage: `url(${images[0]})`,
        width:`${part.w}px`,
        height:`${part.h}px`
      }
      expect(actual).to.be.eql(result)
    })
  });
  describe('getBgImageStyles', () => {
    it('should return css background image url if is solved', ()=> {
      const actual = getBgImageStyles(true, images)
      const result = {backgroundImage: `url(${images[0]})`}
      expect(actual).to.be.eql(result)
    })
    it('should return empty object if is not solved', ()=> {
      const actual = getBgImageStyles(false, images)
      const result = {}
      expect(actual).to.be.eql(result)
    })
    it('should throw error if images array is empty', ()=> {
      expect(()=>getBgImageStyles(false)).to.throw(Error)
    })
  });
  describe('getBgStyles', () => {
    it('should return css background image and position', ()=> {
      const actual = getBgStyles(part.bx, part.by, images)
      const result = {
        backgroundPosition: `-${part.bx}px -${part.by}px`,
        backgroundImage: `url(${images[0]})`
      }
      expect(actual).to.be.eql(result)
    })
  });
  describe('getSizeStyles', () => {
    it('should return css width and height', ()=> {
      const actual = getSizeStyles(part.w, part.h)
      const result = {
        width:`${part.w}px`,
        height:`${part.h}px`
      }
      expect(actual).to.be.eql(result)
    })
  });
});
