import { PLAYER_SPEED, SHIP_HEIGHT, SHIP_WIDTH } from './constants';
import { mapBounds } from './mapBounds';

const isWithinMovementBoundaries = (x, y) => {
  return !mapBounds[y] ? true : !mapBounds[y].includes(x);
};

export const movePlayer = (keys, player) => {
  let playerMoved = false;
  const absPlayerX = player.x + SHIP_WIDTH / 2;
  const absPlayerY = player.y + SHIP_HEIGHT / 2 + 20;
  if (
    keys.includes('ArrowUp') &&
    isWithinMovementBoundaries(absPlayerX, absPlayerY - PLAYER_SPEED)
  ) {
    playerMoved = true;
    player.y = player.y - PLAYER_SPEED;
  }
  if (
    keys.includes('ArrowDown') &&
    isWithinMovementBoundaries(absPlayerX, absPlayerY + PLAYER_SPEED)
  ) {
    playerMoved = true;
    player.y = player.y + PLAYER_SPEED;
  }
  if (
    keys.includes('ArrowLeft') &&
    isWithinMovementBoundaries(absPlayerX - PLAYER_SPEED, absPlayerY)
  ) {
    playerMoved = true;
    player.x = player.x - PLAYER_SPEED;
    player.flipX = true;
  }
  if (
    keys.includes('ArrowRight') &&
    isWithinMovementBoundaries(absPlayerX + PLAYER_SPEED, absPlayerY)
  ) {
    playerMoved = true;
    player.x = player.x + PLAYER_SPEED;
    player.flipX = false;
  }
  return playerMoved;
};
