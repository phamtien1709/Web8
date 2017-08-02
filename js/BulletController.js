class BulletController {
  constructor (x, y, spriteName) {
    this.sprite = Nakama.bulletGroup.create(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);

    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.sprite.body.velocity.y = -Nakama.configs.BULLET_SPEED;

  }
}
