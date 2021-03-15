import Mobile from "./Mobile";
import MoveState from "./MoveState";
import vaisseau from "../assets/images/vaisseau-ballon-petit.png";
export default class StarShip extends Mobile {
  constructor(x, y, deltaX = 0, deltaY = 8, src = vaisseau) {
    super(x, y, deltaX, deltaY, src);
    this.moving = null;
    //this.image.src = "assets/images/vaisseau-ballon-petit.png";
  }
  up() {
    return (this.moving = MoveState.UP);
  }

  down() {
    return (this.moving = MoveState.DOWN);
  }

  moveUp() {
    this.shiftY = -10;
    this.moving = MoveState.UP;
  }
  moveDown() {
    this.shiftY = +10;
    this.moving = MoveState.DOWN;
  }
  move(box) {
    // déplace sans sortir des limites de *box*
    if (this.moving === MoveState.UP) {
      this._y = Math.max(0, this._y + this.shiftY);
    }
    if (this.moving === MoveState.DOWN) {
      this._y = Math.min(box.height - this.image.height, this._y + this.shiftY);
    }
  }

  stopMoving() {
    this.moving = MoveState.NONE;
  }
}
