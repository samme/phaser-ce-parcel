
import BootState from './BootState';
import LoadState from './LoadState';
import PlayState from './PlayState';
import MenuState from './MenuState';
import EndState from './EndState';

function onStateChange (current, prev) {
  console.info('State changed from %s to %s', prev || '[none]', current);
}

function newGame () {
  if (game) return;

  game = new Phaser.Game(gameConfig);

  game.state.onStateChange.add(onStateChange);

  game.state.add('boot', BootState);
  game.state.add('load', LoadState);
  game.state.add('menu', MenuState);
  game.state.add('play', PlayState);
  game.state.add('end', EndState);
  game.state.start('boot');
}

function destroyGame () {
  if (!game) return;

  game.destroy();
  game = null;
}

const gameConfig = {
  renderer: Phaser.CANVAS,
  width: 800,
  height: 600
};

let game;

Phaser.Point.set(PIXI.Sprite.defaultAnchor, 0.5, 0.5);
console.info('PIXI.Sprite.defaultAnchor', PIXI.Sprite.defaultAnchor);

if (module.hot) {
  module.hot.dispose(destroyGame);
  module.hot.accept(newGame);
}

if (!game) newGame();
