import {PUZZLE_PART_POSITION, SHUFFLE_PUZZLE, IS_PUZZLE_SOLVED} from 'actions'
import PuzzleParts from './helpers'

const p = new PuzzleParts()
const INITIAL_STATE = p.initParts()

export default function puzzle(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PUZZLE_PART_POSITION:
      return {
        ...state,
        ...p.changeParts(action.part, state.parts),
        isPuzzleSolved: false
      }
    case IS_PUZZLE_SOLVED:
      return {
        ...state,
        isPuzzleSolved: p.isPuzzleSolved(state.parts)
      }
    case SHUFFLE_PUZZLE:
      p.shuffle(state.parts)
      return {
        ...state,
        parts: state.parts.slice(),
        isPuzzleSolved: false
      }
    default:
      return {
        ...state,
        isPuzzleSolved: false
      }
  }
}
