const fadeOutThisBoard = () => {
  const fadeEffect = setInterval(() => {
    if (!document.getElementById("fadeout").style.opacity) {
      document.getElementById("fadeout").style.opacity = 1;
    }

    if (document.getElementById("fadeout").style.opacity > 0) {
      document.getElementById("fadeout").style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 300);
};

export default fadeOutThisBoard;