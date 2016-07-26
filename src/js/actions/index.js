export const PUZZLE_PART_POSITION = 'puzzle-part-position';

export const getPuzzlePartPosition = (part)=> ({
  type: PUZZLE_PART_POSITION,
  part: part
});
