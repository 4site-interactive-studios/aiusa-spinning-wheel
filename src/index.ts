// import "./sass/style.scss";

import { SpinningWheel } from "./spinning-wheel";
import swPageStyles from "./sass/page.scss";
// Create some CSS to apply to the shadow dom
const style = document.createElement("style");
style.setAttribute("type", "text/css");
style.appendChild(document.createTextNode(swPageStyles));
document.head.appendChild(style);
customElements.define("spinnning-wheel", SpinningWheel);
