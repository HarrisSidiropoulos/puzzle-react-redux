import React, {Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {checkPuzzlePartPosition, initAndShufflePuzzle} from 'actions'
import OfflineUpdate from './offline-update'
import {getStyles, getBgImageStyles, getSizeStyles} from './styles'

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
  render() {
    const {parts, partClick, isPuzzleSolved, shufflePuzzle} = this.props
    return (
      <div>
        <OfflineUpdate />
        <div className={isPuzzleSolved?'container solved':'container'}>
          <ul className="puzzle" style={getBgImageStyles(isPuzzleSolved, images)}>
            {
              parts.map((part,index)=> (
                <li key={index} style={getStyles(part, images)} className={part.empty?'empty':''}>
                  <a style={getSizeStyles(part.w,part.h)} href="javascript:" onClick={()=>partClick(part.index)}>
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
