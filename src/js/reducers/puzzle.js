import {PUZZLE_PART_POSITION, SHUFFLE_PUZZLE, IS_PUZZLE_SOLVED} from '../actions'
import PuzzleParts from './PuzzleParts'

const p = new PuzzleParts()
export const INITIAL_STATE = {
  ...p.initParts(),
  isPuzzleSolved: false
}

export default function puzzle(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PUZZLE_PART_POSITION:
      return {
        ...state,
        parts: p.changeParts(action.part),
        emptyIndex: p.emptyIndex
      }
    case IS_PUZZLE_SOLVED:
      return {
        ...state,
        isPuzzleSolved: p.isPuzzleSolved()
      }
    case SHUFFLE_PUZZLE:
      return {
        ...state,
        parts: p.shuffle(),
        isPuzzleSolved: false
      }
    default:
      return {
        ...state
      }
  }
}
