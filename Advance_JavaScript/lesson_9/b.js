const initApp = () => {
  const button = document.querySelector('.but');
  button.addEventListener('click', () => {
    clickLog();
    console.log("k"); 
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
    }, 2000);
  });
}

const clickLog = () => console.log('clicked');

document.addEventListener('DOMContentLoaded', initApp);
