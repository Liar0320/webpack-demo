import { join } from "lodash";
import react from "react";
import reactDom from "react-dom";
console.log(reactDom);
console.log(react);
function component() {
  let element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
