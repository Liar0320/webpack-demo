import { cube } from "./math.js";
import "./index.css";
import { awaitWrap } from "@cnpm-lich/utils";
console.log(awaitWrap);
function component() {
  var element = document.createElement("pre");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );
  return element;
}
document.body.appendChild(component());
