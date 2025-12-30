const initApp = () => {
  const tbutton = document.querySelector('#throttle');

  tbutton.addEventListener('click', throttle(clickLog, 2000));
}

const clickLog = () => console.log("clicked");

document.addEventListener('DOMContentLoaded', initApp);

const throttle = (fn, delay) => {
  let lastTime = 0;
  console.log('called throttle immediately ');
  return (...args) => {
    const now = new Date().getTime();
    if(now - lastTime < delay) return;
    lastTime = now;
    fn(...args);
  }
}