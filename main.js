class Game {
  constructor() {
    let canvas = document.querySelector("#canvas");
    canvas.width = 500;
    canvas.height = 500;
    let screen = canvas.getContext("2d");
    let gameSize = { x: canvas.width, y: canvas.height };
    this.ocean = new Ocean(gameSize);
    this.island = new Island(gameSize);
    let bodies = []
    // this.bodies = this.bodies.concat(new Pirate(gameSize))
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

let game = new Game()

Keyboarder.on(Keyboarder.KEYS.RIGHT, function () {
  if (game.pirate.center.x < 325) game.pirate.center.x += 75;
});
Keyboarder.on(Keyboarder.KEYS.LEFT, function () {
  if (game.pirate.center.x > 175) game.pirate.center.x -= 75;
});
Keyboarder.on(Keyboarder.KEYS.UP, function () {
  if (game.pirate.center.y > 175) game.pirate.center.y -= 75;
});
Keyboarder.on(Keyboarder.KEYS.DOWN, function () {
  if (game.pirate.center.y < 325) game.pirate.center.y += 75;
});
