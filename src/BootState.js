import logo from './assets/logo.png';

export default class BootState extends Phaser.State {
  preload () {
    this.load.image('logo', logo);
  }

  create () {
    this.state.start('load');
  }
}
