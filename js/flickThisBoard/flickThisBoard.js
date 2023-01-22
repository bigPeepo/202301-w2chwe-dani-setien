import { stopCalculating } from "../index.js";

export let flickThisBoard = false;

export const objectToFlickScreen = {
  flicking: false,
};

export function activateScreenFlick() {
  flickThisBoard = setInterval(() => {
    if (objectToFlickScreen.flicking) {
      document.getElementById("fadeout").style.opacity = 1;
      objectToFlickScreen.flicking = false;

      stopCalculating();
    }

    if (document.getElementById("fadeout").style.opacity > 0) {
      document.getElementById("fadeout").style.opacity -= 0.2;
    }

    if (
      document.getElementById("fadeout").style.opacity &&
      document.getElementById("fadeout").style.opacity < 0.3
    ) {
      document.getElementById("fadeout").style.opacity = 0;
      clearInterval(flickThisBoard);
      flickThisBoard = false;
    }
  }, 300);
}
