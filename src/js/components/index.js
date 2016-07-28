import React, {Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {checkPuzzlePartPosition, isPuzzleSolved, shufflePuzzle} from 'actions'
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
  getBgStyles(x,y) {
    return {
      backgroundImage: `url(${images[0]})`,
      backgroundPosition: `-${x}px -${y}px`
    }
  }
  getSizeStyles(w,h) {
    return {
      width:`${w}px`,
      height:`${h}px`,
    }
  }
  render() {
    const {parts, partClick, emptyIndex} = this.props
    return (
      <div className="container">
        <ul className="puzzle">
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
      </div>
    )
  }
}

Main.propTypes = {
  parts: PropTypes.array.isRequired,
  shufflePuzzle: PropTypes.func,
  partClick: PropTypes.func
}

const mapStateToProps = ({ puzzle } ) => puzzle;
const mapDispatchToProps = (dispatch) => ({
  partClick: index => dispatch(checkPuzzlePartPosition(index)),
  shufflePuzzle: ()=> dispatch(shufflePuzzle())
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)
