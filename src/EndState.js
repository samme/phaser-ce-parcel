export default class EndScene extends Phaser.State {
  create () {
    const { centerX, centerY } = this.world;

    this.add.image(centerX, centerY, 'space');

    const title = this.add.text(centerX, centerY, 'Game Over :(\n\n< menu >', {
      align: 'center',
      fill: 'white',
      fontFamily: 'sans-serif',
      fontSize: 48
    });

    this.input.onDown.addOnce(() => { this.state.start('menu'); });
  }
}
