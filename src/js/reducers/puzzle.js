import {PUZZLE_PART_POSITION} from 'actions'
import PuzzleParts from './helpers'
const p = new PuzzleParts()
const INITIAL_STATE = {
  ...p.initParts()
}

export default function puzzle(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PUZZLE_PART_POSITION:
      return {
        ...state,
        ...p.changeParts(action.part, state.parts)
      }
    default:
      return state
  }
}
