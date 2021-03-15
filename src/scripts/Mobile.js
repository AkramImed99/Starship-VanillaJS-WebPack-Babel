export default class Mobile {
  static image;

  constructor(x, y, deltaX = 0, deltaY = 0, src) {
    this._x = x;
    this._y = y;
    this._deltaX = deltaX;
    this._deltaY = deltaY;
    this.image = new Image();
    this.image.src = src;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this._x, this._y);
  }

  get img() {
    return this.image;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get deltaX() {
    return this._deltaX;
  }

  get deltaY() {
    return this._deltaY;
  }
}
