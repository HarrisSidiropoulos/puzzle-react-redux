import React, {Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {getPuzzlePartPosition} from 'actions'
require('./styles.scss')

class Main extends Component {
  render() {
    const {parts, partClick, emptyIndex} = this.props
    return (
      <div className="container">
        <ul className="puzzle">
          {
            parts.map(({x,y,label,empty,index},i)=> (
              <li key={i} style={{top:`${y}px`,left:`${x}px`}} className={empty?'empty':''}>
                <a href="javascript:" onClick={()=>partClick(index)}>
                  <span className="number">{label}</span>
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
  partClick: PropTypes.func
}

const mapStateToProps = ({ puzzle } ) => puzzle;
const mapDispatchToProps = (dispatch) => ({
  partClick: index => dispatch(getPuzzlePartPosition(index))
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)
