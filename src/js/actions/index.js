export const PUZZLE_PART_POSITION = 'puzzle-part-position';
export const IS_PUZZLE_SOLVED = 'is-puzzle-solved';
export const SHUFFLE_PUZZLE = 'shuffle-puzzle';

function delay(time) {
  return new Promise(function (fulfill) {
    setTimeout(fulfill, time);
  });
}

export const getPuzzlePartPosition = (part=10)=> {
  if (typeof part!=="number") {
    throw(new TypeError("Value should be string"))
  }
  return ({
    type: PUZZLE_PART_POSITION,
    part: part
  });
}

export const isPuzzleSolved = ()=> ({
  type: IS_PUZZLE_SOLVED
});

export const shufflePuzzle = ()=> ({
  type: SHUFFLE_PUZZLE
});

export function checkPuzzlePartPosition(part) {
  return dispatch => {
    dispatch(getPuzzlePartPosition(part));
    return delay(500).then(() => dispatch(isPuzzleSolved()))
  }
}
