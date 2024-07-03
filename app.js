let zspacing = -1000,
  lastpos = zspacing / 5,
  $frames = document.getElementsByClassName("frame"),
  frames = Array.from($frames),
  zval = [];
window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastpos - top;

  lastpos = top;

  frames.forEach(function (n, i) {
    zval.push(i * zspacing + zspacing);
    zval[i] += delta * -5;
    let frame = frames[i];
    transform = `translateZ(${zval[i]}px)`;
    opacity = zval[i] < Math.abs(zspacing) / 1.8 ? 1 : 0;
    frame.setAttribute("style", `transform:${transform}; opacity:${opacity}`);
  });
};
window.scrollTo(0, 1);
