class Game {
  constructor() {
    let canvas = document.querySelector("#canvas");
    canvas.width = 500;
    canvas.height = 500;
    let screen = canvas.getContext("2d");
    let gameSize = { x: canvas.width, y: canvas.height };
    this.ocean = new Ocean(gameSize);
    this.island = new Island(gameSize);
    this.pirate = new Pirate(gameSize);
    this.doubloon = new Doubloon(gameSize);
    let animate = () => {
      this.drawOcean(screen, gameSize);
      this.drawIsland(screen, gameSize);
      this.drawPirate(screen, gameSize);
      this.drawDoubloon(screen, gameSize);
      requestAnimationFrame(animate);
    };
    animate();
  }

  drawOcean(screen, gameSize) {
    screen.fillStyle = "#5290f2";
    screen.fillRect(0, 0, gameSize.x, gameSize.y);
  }
  drawIsland(screen, gameSize) {
    screen.fillStyle = "#e3cbbc";
    screen.fillRect(
      gameSize.x / 4,
      gameSize.y / 4,
      gameSize.x / 2,
      gameSize.y / 2
    );
  }
  drawPirate(screen) {
    screen.fillStyle = "black";
    let startingXPosition = this.pirate.center.x - this.pirate.size.x / 2;
    let startingYPosition = this.pirate.center.y - this.pirate.size.y / 2;
    let pirateWidth = this.pirate.size.x;
    let pirateHeight = this.pirate.size.y;
    screen.fillRect(
      startingXPosition,
      startingYPosition,
      pirateWidth,
      pirateHeight
    );
  }
  drawDoubloon(screen) {
    screen.fillStyle = "gold";
    let startingXPosition = this.doubloon.center.x;
    let startingYPosition = this.doubloon.center.y;
    let doubloonWidth = this.doubloon.size.x;
    let doubloonHeight = this.doubloon.size.x;
    screen.fillRect(
      startingXPosition,
      startingYPosition,
      doubloonWidth,
      doubloonHeight
    );
  }
}

class Ocean {
  constructor(gameSize) {
    this.size = { x: gameSize.x, y: gameSize.y };
    this.center = { x: gameSize.x / 2, y: gameSize.y / 2 };
  }
}
class Island {
  constructor(gameSize) {
    this.size = { x: 250, y: 250 };
    this.center = { x: gameSize.x / 2, y: gameSize.y / 2 };
  }
}

class Pirate {
  constructor(gameSize) {
    this.size = { x: gameSize.x / 10, y: gameSize.y / 10 };
    this.center = {
      x: gameSize.x * 0.25 + this.size.x,
      y: gameSize.y * 0.75 - this.size.y,
    };

  }
}

class Doubloon {
  constructor(gameSize) {
    this.size = { x: gameSize.x / 20, y: gameSize.y / 20 };
    this.center = {
      x: gameSize.x * 0.75 - this.size.x * 2.5,
      y: gameSize.y * 0.25 + this.size.y * 1.5,
    };
  }
}

class CannonBall {
  constructor(gameSize) {
    this.size = { x: gameSize.x / 20, y: gameSize / 20 };
    this.axis = Math.round(Math.random());
    thisdir;
  }
}

// draw: function(){
//     screen.fillStyle = "black",
//     screen.fillRect(this.x, this.y, canvas.width / 10, canvas.height/10) }
// }
// setInterval(loop, 80)

// function loop(){
//     screen.clearRect(0, 0, canvas.width, canvas.height);
//     if(Keyboarder.isDown(37))
//         player.x-=90;
//     if(Keyboarder.isDown(39))
//         player.x+=90;
//     if(Keyboarder.isDown(38))
//         player.y-=90;
//     if(Keyboarder.isDown(40))
//         player.y+=90;
//     if(player.x > 315)
//         player.x = 315;
//     if(player.x < 135)
//         player.x = 135;
//     if(player.y < 135)
//         player.y = 135;
//     if(player.y > 315)
//         player.y = 315
//     gameboard.draw()
//     player.draw();
let game = new Game();
this.keyboarder = Keyboarder;

Keyboarder.on(Keyboarder.KEYS.RIGHT, function () {
  game.pirate.center.x += 75;
});
Keyboarder.on(Keyboarder.KEYS.LEFT, function () {
  game.pirate.center.x -= 75;
});
Keyboarder.on(Keyboarder.KEYS.UP, function () {
  game.pirate.center.y -= 75;
});
Keyboarder.on(Keyboarder.KEYS.DOWN, function () {
  game.pirate.center.y += 75;
});