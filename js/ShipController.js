class ShipController{
  constructor(x, y, spriteName, configs, cooldown){
    this.sprite = Nakama.playerGroup.create(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.configs = configs;
    this.configs.SHIP_SPEED = 400;
    this.configs.BULLET_DELAY = 60;
    this.configs.POSITION_BULLET = 22;
    this.coolDown = 0;

    this.sprite.update = this.update.bind(this);
  }

  update(){
    if (Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -this.configs.SHIP_SPEED;
    }
    else if (Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = this.configs.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.x = 0;
    }
    if (Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -this.configs.SHIP_SPEED;
    }
    else if (Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = this.configs.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.y = 0;
    }
    this.coolDown += Nakama.game.time.physicsElapsed;
    if (Nakama.keyboard.isDown(this.configs.fire)
        && this.coolDown > this.configs.cooldown){
      this.fire();
      this.coolDown = 0;
    }
  }
  fire(){
    new BulletController(
      this.sprite.x,
      this.sprite.y,
      "BulletType1.png"
    )
  }
}
