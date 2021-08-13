import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import { main } from "./game";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

main();
