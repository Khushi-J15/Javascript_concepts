const ext = '/';

const extensionObj = {
  '.css' : 'text/css',
  '.js' : 'text/javascript',
  '.json' : 'application/json',
  '.jpg' : 'image/jpeg',
  '.png' : 'image/png',
  '.txt' : 'text/plain'
}

console.log(extensionObj[ext] || 'text/html');