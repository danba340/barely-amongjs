export const animateMovement = (keys, player) => {
  const runningKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  if (
    keys.some((key) => runningKeys.includes(key)) &&
    !player.anims.isPlaying
  ) {
    player.play('running');
  } else if (
    !keys.some((key) => runningKeys.includes(key)) &&
    player.anims.isPlaying
  ) {
    player.stop('running');
  }
};
