const up = 0;
const down = 1;
const none = 2;

export default class MoveState {
  static get UP() {
    return up;
  }
  static get DOWN() {
    return down;
  }
  static get NONE() {
    return none;
  }
}
