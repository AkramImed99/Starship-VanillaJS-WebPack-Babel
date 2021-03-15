// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
import Game from "./Game";

/*
const init = () => {};

window.addEventListener("load", init);

//
console.log("le bundle a été généré");
*/

const init = () => {
  const myCanvas = document.getElementById("stars");
  const context = myCanvas.getContext("2d");
  const theGame = new Game(myCanvas);
  theGame.start1();

  const drawInCanvas = () => {
    const saucers = theGame.saucers;
    const coord1 = saucers.map((el) => el.x);
    const coord2 = saucers.map((el) => el.y);
    const images = saucers.map((el) => el.img);
    const tirs = theGame.tirs;
    const coord1_tir = tirs.map((el) => el.x);
    const coord2_tir = tirs.map((el) => el.y);
    const im_tir = tirs.map((el) => el.img);
    images.forEach((el, index) =>
      el.addEventListener("load", () =>
        makeDrawings(el, coord1[index], coord2[index])
      )
    );
    im_tir.forEach((el, index) =>
      el.addEventListener("load", () =>
        makeDrawings(el, coord1_tir[index], coord2_tir[index])
      )
    );
  };

  const makeDrawings = (image, i1, i2) => {
    context.drawImage(image, i1, i2);
  };

  drawInCanvas();

  const ctl = document.getElementById("control");
  const elem2 = document.getElementById("nouvelleSoucoupe");
  /*const f = function(){
        const x = setInterval(function(){
            elem1.innerText = theGame.score;
        }, 100);
    }*/
  //f();
  const elem1 = document.getElementById("flotteSoucoupes");
  const elem = elem1.cloneNode(true);
  elem.id = "stop";
  elem1.addEventListener("click", function () {
    ctl.replaceChild(elem, elem1);
    theGame.start();
    console.log(elem);
    document.activeElement.blur();
  });
  elem.addEventListener("click", function () {
    ctl.replaceChild(elem1, elem);
    theGame.stop();
  });

  elem2.addEventListener("click", function () {
    theGame.addSaucer();
    document.activeElement.blur();
    //console.log(theGame.saucers);
  });

  document.addEventListener(
    "keydown",
    (event) => {
      const nomTouche = event.keyCode;
      if (nomTouche === 32) {
        theGame.addTir();
      }
      //console.log(theGame.tirs);
    },
    false
  );

  document.addEventListener(
    "keyup",
    (event) => {
      const nomTouche = event.keyCode;
      if (nomTouche === 32) {
        return;
      }
    },
    false
  );

  window.addEventListener("keydown", theGame.keyDown.bind(theGame));
  window.addEventListener("keyup", theGame.keyUp.bind(theGame));
};

window.addEventListener("load", init);
