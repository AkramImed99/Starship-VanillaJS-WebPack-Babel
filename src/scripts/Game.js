import Saucer from "./Saucer";
import Shoot from "./Shoot";
import StarShip from "./StarShip";

export default class Game {
  constructor(canva) {
    this.canva = canva;
    this.context = this.canva.getContext("2d");
    this._starship = new StarShip(40, this.canva.height / 2);
    this._saucers = new Array();
    this._tirs = new Array();
    this._score = 0;
    this.x = null;
    this.y = null;
  }

  addSaucer = () => {
    this._saucers.push(
      new Saucer(this.canva.width - 48, this.alea(this.canva.height - 36))
    );
  };
  addTir() {
    this._tirs.push(
      new Shoot(
        this._starship.x + this._starship.img.width,
        this._starship.y + this._starship.img.height / 2
      )
    );
  }

  suppSaucer() {
    let sco = this._score;
    const can = this.canva;
    const array = this._saucers;
    array.forEach(function (el, index) {
      if (el.x - el.img.width <= can.width - can.width) {
        array.splice(index, 1);
        sco -= 1000;
        //elem1.innerText = sco;
        //console.log(sco);
      } else if (el.y + el.img.height >= can.height) {
        array.splice(index, 1);
      }
    });
  }

  suppTir() {
    const can = this.canva;
    const array1 = this._tirs;
    array1.forEach(function (el, index) {
      if (el.x + el.img.width > can.width) {
        array1.splice(index, 1);
      }
    });
  }

  moveAndDraw = () => {
    const array = this._saucers;
    const array1 = this._tirs;
    const can = this.canva;
    const ctx = this.context;
    let sco = this._score;
    this.context.clearRect(0, 0, can.width, can.height);
    array.forEach(function (el) {
      el.move(can);
      el.draw(ctx);
    });
    array1.forEach(function (el) {
      el.move(can);
      el.draw(ctx);
    });
    this._starship.move(can);
    this._starship.draw(ctx);

    /*for (let i = 0; i<this._tirs.length;i++){
            for (let j = 0; j<this._saucers.length;j++){
                if (this._tirs[i].collisionWith(this._saucers[j])){
                    this._tirs.splice(i, 1);
                    this._saucers[j].deltaX = 0;
                    this._saucers[j].deltaY = 3;
                    this.score += 200;
                }
            }
        }*/

    array1.forEach(function (el, index) {
      if (el.detectorCollision(array)) {
        array1.splice(index, 1);
        sco += 200;
      }
    });
    this.suppSaucer();
    this.suppTir();
    //this._tir.move(can);
    //this._tir.draw(ctx);
    //this.req = window.requestAnimationFrame(this.moveAndDraw);
  };

  stop() {
    //window.cancelAnimationFrame(this.req);
    clearInterval(this.x);
  }

  start() {
    this.x = setInterval(this.addSaucer, 750);
    //this.req = window.requestAnimationFrame(this.moveAndDraw);
  }

  start1() {
    this.y = setInterval(this.moveAndDraw, 100);
    //this.req = window.requestAnimationFrame(this.moveAndDraw);
  }

  alea(n) {
    return Math.floor(Math.random() * Math.floor(n));
  }

  get saucers() {
    return this._saucers;
  }

  get starship() {
    return this._starship;
  }

  get tirs() {
    return this._tirs;
  }

  get score() {
    return this._score;
  }

  keyDown(event) {
    switch (event.key) {
      case "ArrowDown":
      case "Down":
        this._starship.moveDown();
        break;
      case "ArrowUp":
      case "Up":
        this._starship.moveUp();
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  // méthode dans la classe AnimationWithObstacle
  keyUp(event) {
    switch (event.key) {
      case "ArrowDown":
      case "Down":
      case "ArrowUp":
      case "Up":
        this._starship.stopMoving();
        break;
      default:
        return;
    }
    event.preventDefault();
  }
}

console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
