class ShipType2Controller extends ShipController{
  constructor(x, y, spriteSuffix, configs){
    super(
      x,
      y,
      `Spaceship1${spriteSuffix}.png`,
      configs
    );
    this.configs.DIRECT_BULLET = 22;
    this.configs.SHIP_SPEED = 300;
    this.configs.COOLDOWN   = 500;
  }

  fire(){
    new BulletType2Controller(
      this.sprite.position.x + this.configs.DIRECT_BULLET,
      this.sprite.position.y
    );
    new BulletType2Controller(
      this.sprite.position.x - this.configs.DIRECT_BULLET,
      this.sprite.position.y
    )
  }
}
