/* 
  Humanity/Path Rating 
        Bearing Modifier
  10    -2 difficulty
  9-8   -1 difficulty
  7-4   no modifier
  3-2   +1 difficulty
  1     +2 difficulty

  Very high or low morality ratings impose a bonus or penalty to specific rolls
  associated with the character’s bearing — for Humanity, the bearing modifier
  affects Social rolls for appearing normal and winning sympathy.
 */
export const bearingModifier = {
  10: '-2',
  9: '-1',
  8: '-1',
  7: '+0',
  6: '+0',
  5: '+0',
  4: '+0',
  3: '+1',
  2: '+1',
  1: '+2',
  0: '+99'
};
