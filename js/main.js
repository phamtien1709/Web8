var Nakama = {};
Nakama.configs = {
  GAME_WIDTH: 640,
  GAME_HEIGHT: 960
};

window.onload = function(){
  Nakama.game = new Phaser.Game(
    Nakama.configs.GAME_WIDTH,
    Nakama.configs.GAME_HEIGHT,
    Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = Nakama.configs.GAME_WIDTH/2;
  Nakama.game.scale.minHeight = Nakama.configs.GAME_HEIGHT/2;
  Nakama.game.scale.maxWidth = Nakama.configs.GAME_WIDTH;
  Nakama.game.scale.maxHeight = Nakama.configs.GAME_HEIGHT;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.sprite(0, -960, 'background');
  Nakama.player1 = Nakama.game.add.sprite(400, 600, 'assets', 'Spaceship1-Player.png');
  Nakama.player2 = Nakama.game.add.sprite(100, 600, 'assets', 'Spaceship2-Partner.png');
}

// update game state each frame
var update = function(){
  if (Nakama.keyboard.isDown(Phaser.Keyboard.LEFT)){
    Nakama.player1.position.x = Math.max(0, Nakama.player1.position.x-10);
  }
  else if (Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    Nakama.player1.position.x = Math.min(Nakama.configs.GAME_WIDTH - Nakama.player1.width, Nakama.player1.position.x + 10);
  }
  if (Nakama.keyboard.isDown(Phaser.Keyboard.UP)){
    Nakama.player1.position.y = Math.max(0, Nakama.player1.position.y-10);
  }
  else if (Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)){
    Nakama.player1.position.y = Math.min(Nakama.configs.GAME_HEIGHT - Nakama.player1.height, Nakama.player1.position.y + 10);
  }
  Nakama.background.y += 4;
  if (Nakama.background.y > 0) Nakama.background.y -= 960;

  if (Nakama.keyboard.isDown(Phaser.Keyboard.A)){
    Nakama.player2.position.x = Math.max(0, Nakama.player2.position.x-10);
  }
  else if (Nakama.keyboard.isDown(Phaser.Keyboard.D)){
    Nakama.player2.position.x = Math.min(Nakama.configs.GAME_WIDTH - Nakama.player2.width, Nakama.player2.position.x + 10);
  }
  if (Nakama.keyboard.isDown(Phaser.Keyboard.W)){
    Nakama.player2.position.y = Math.max(0, Nakama.player2.position.y-10);
  }
  else if (Nakama.keyboard.isDown(Phaser.Keyboard.S)){
    Nakama.player2.position.y = Math.min(Nakama.configs.GAME_HEIGHT - Nakama.player2.height, Nakama.player2.position.y + 10);
  }
}

// before camera render (mostly for debug)
var render = function(){}
