const initApp = () => {
  const tbutton = document.querySelector('#throttle');

  tbutton.addEventListener('click', throttle(clickLog, 2000));
}

const clickLog = () => console.log("clicked");

document.addEventListener('DOMContentLoaded', initApp);

const throttle = (fn, delay) => {
  let lastTime = 0;
  console.log('called throttle immediately ');
  let id = 0;
  return (...args) => {
    const now = new Date().getTime();
    id++;
    if(now - lastTime < delay) return;
    lastTime = now;
    console.log(`event id : ${id}`);
    fn(...args);
  }
}

// Debounce Vs Throttle
// Debounce is used = at end of wait time , interested in the final state . eg : when you don't want to fire an api call until a user has stoped typing 
// Throttle is used = at intermediate state, at intervals .