const { Q, R } = Phaser.KeyCode;

let emitter;
let logo;

export default class PlayState extends Phaser.State {
  create () {
    const { add, input } = this;
    const { keyboard } = input;
    const { arcade } = this.physics;

    arcade.gravity.y = 300;

    add.image(400, 300, 'space');

    logo = add.sprite(0, 0, 'planet');

    arcade.enable(logo);

    logo.body.angularVelocity = 30;
    logo.body.bounce.set(1, 1);
    logo.body.velocity.set(120, 120);
    logo.body.collideWorldBounds = true;

    emitter = add.emitter(logo.centerX, logo.centerY);
    emitter.makeParticles('yellow', 0, 120);
    emitter.blendMode = Phaser.blendModes.ADD;
    emitter.setAngle(0, 0, 0, 120);
    emitter.setRotation(0, 0);
    emitter.setScale(0.1, 0.2, 0.1, 0.2);
    emitter.flow(2000, this.time.physicsElapsedMS);

    add.text(120, 20, '(R) Restart | (Q) Quit', { fill: 'white', font: '24px sans-serif' });

    logo.bringToTop();

    keyboard.addKey(Q).onDown.addOnce(() => { this.state.start('menu'); });
    keyboard.addKey(R).onDown.addOnce(() => { this.state.restart(); });
  }

  update () {
    emitter.emitX = logo.centerX;
    emitter.emitY = logo.centerY;
  }
}
