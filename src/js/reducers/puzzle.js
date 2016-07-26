import {PUZZLE_PART_POSITION} from 'actions'

const INITIAL_STATE = {}

export default function puzzle(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PUZZLE_PART_POSITION:
      return state
    default:
      return state
  }
}
