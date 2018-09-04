import _ from 'lodash';
import './assets/style.css';
import './assets/load.gif';
import './assets/cart-empty-new.png';
function component () {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.style.cssText += 'height:500px';
  return element;
}

document.body.appendChild(component());
