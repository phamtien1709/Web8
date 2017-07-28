class BulletController {
  constructor (x, y, spriteName) {
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);

    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;

    this.sprite.body.velocity.y = -Nakama.configs.BULLET_SPEED;

  }
}
