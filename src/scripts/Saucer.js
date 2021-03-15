import Mobile from "./Mobile";
import MoveState from "./MoveState";
import flySaucer from "../assets/images/flyingSaucer-petit.png";

export default class Saucer extends Mobile {
  constructor(x, y, deltaX = -3, deltaY = 0, src = flySaucer) {
    super(x, y, deltaX, deltaY, src);
    this.moving = MoveState.None;
    //this.image.src = "assets/images/vaisseau-ballon-petit.png";
  }
  /*
    up(){
        return this.moving = MoveState.Up;
    }

    down(){
        return this.moving = MoveState.Down;
    }*/

  move(myCanvas) {
    this._x += this._deltaX;
    this._y += this._deltaY;
  }

  set deltaX(val) {
    this._deltaX = val;
  }

  set deltaY(val) {
    this._deltaY = val;
  }
}
