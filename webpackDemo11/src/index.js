import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component () {
  let element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Clizzzc22aaa22333 me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

document.body.appendChild(component());

if(module.hot){
  module.hot.accept('./print.js',function () {
    console.log('Accepting the updated printMe module');
    printMe();
  })
}