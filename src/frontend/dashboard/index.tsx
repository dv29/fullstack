import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./styles.css";
import { name } from "./name";

ReactDOM.render(
  <h1 className={styles.h1}>Hello, {name()}</h1>,
  document.getElementById("root")
);
