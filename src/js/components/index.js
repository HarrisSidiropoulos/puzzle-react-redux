import React, {Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {checkPuzzlePartPosition, isPuzzleSolved, shufflePuzzle, initAndShufflePuzzle} from 'actions'
import OfflineUpdate from './offline-update'

require('./styles.scss')
const images = [
  require('./images/image001.jpg'),
  require('./images/image002.jpg')
]

class Main extends Component {
  constructor(props) {
    super(props);
    props.shufflePuzzle()
  }
  getStyles({x,y,w,h,bx,by}) {
    return {
      left:`${x}px`,
      top:`${y}px`,
      ...this.getBgStyles(bx,by),
      ...this.getSizeStyles(w,h)
    }
  }
  getBgImageStyles(solved=true) {
    return solved ? {
      backgroundImage: `url(${images[0]})`
    } : {}
  }
  getBgStyles(x,y) {
    return {
      backgroundPosition: `-${x}px -${y}px`,
      ...this.getBgImageStyles()
    }
  }
  getSizeStyles(w,h) {
    return {
      width:`${w}px`,
      height:`${h}px`,
    }
  }
  render() {
    const {parts, partClick, emptyIndex, isPuzzleSolved, shufflePuzzle} = this.props
    return (
      <div>
        <OfflineUpdate />
        <div className={isPuzzleSolved?'container solved':'container'}>
          <ul className="puzzle" style={this.getBgImageStyles(isPuzzleSolved)}>
            {
              parts.map((part,index)=> (
                <li key={index} style={this.getStyles(part)} className={part.empty?'empty':''}>
                  <a style={this.getSizeStyles(part.w,part.h)} href="javascript:" onClick={()=>partClick(part.index)}>
                    <span className="number">{part.label}</span>
                  </a>
                </li>
              ))
            }
          </ul>
          <a href="javascript:" onClick={()=> shufflePuzzle()} className="restart-puzzle">Play again</a>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  isPuzzleSolved: PropTypes.bool.isRequired,
  parts: PropTypes.array.isRequired,
  shufflePuzzle: PropTypes.func,
  partClick: PropTypes.func
}

const mapStateToProps = ({ puzzle } ) => puzzle;
const mapDispatchToProps = (dispatch) => ({
  partClick: index => dispatch(checkPuzzlePartPosition(index)),
  shufflePuzzle: ()=> dispatch(initAndShufflePuzzle())
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)
