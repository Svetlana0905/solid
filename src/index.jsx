import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "tailwindcss/tailwind.css";

import "./style/index.css";
import App from "./App";
render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
);
