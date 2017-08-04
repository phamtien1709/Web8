class BulletType2Controller extends BulletController {
  constructor(x, y, spriteSuffix, configs){
    super(x, y, "BulletType2.png", configs);

    this.TURN_RATE = 5;
    this.BULLET_SPEED = 200;

    this.sprite.update = this.update.bind(this);
  }
  update(){
    var targetAngle = Nakama.game.math.angleBetween(
      this.sprite.position.x, this.sprite.position.y,
      Nakama.enemies[0].sprite.x, Nakama.enemies[0].sprite.y
    );
    if (this.sprite.rotation !== targetAngle){
      var delta = targetAngle - this.sprite.rotation;
      if(delta > Math.PI) delta -= Math.PI * 2;
      if(delta < -Math.PI) delta += Math.PI * 2;

      if(delta > 0){
        this.sprite.angle += this.TURN_RATE;
      }
      else {
        this.sprite.angle -= this.TURN_RATE;
      };

      if (Math.abs(delta) < Nakama.game.math.degToRad(this.TURN_RATE)) {
            this.sprite.rotation = targetAngle;
        }
      this.sprite.body.velocity.x = Math.cos(this.sprite.rotation) * this.BULLET_SPEED;
      this.sprite.body.velocity.y = Math.sin(this.sprite.rotation) * this.BULLET_SPEED;
    };
  }
}
