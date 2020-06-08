import images from './assets/*.png';

export default class LoadState extends Phaser.State {
  preload () {
    const { centerX, centerY } = this.world;
    const ghost = this.add.image(centerX, centerY, 'logo');
    const logo = this.add.image(centerX, centerY, 'logo');

    ghost.alpha = 0.2;
    ghost.blendMode = Phaser.blendModes.LUMINOSITY;

    this.load.setPreloadSprite(logo);

    this.load.image('space', images.space);
    this.load.image('planet', images.phaser1);
    this.load.image('red', images.red);
    this.load.image('yellow', images.yellow);
    this.load.image('blue', images.blue);
  }

  loadUpdate () {
    console.debug('progress', this.load.progress);
  }

  loadRender () {
    this.game.debug.loader(this.load, 20, 20);
  }

  create () {
    this.state.start('menu');
    // this.state.start('play');
  }
}
