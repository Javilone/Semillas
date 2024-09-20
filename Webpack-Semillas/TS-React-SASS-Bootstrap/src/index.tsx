import React from "react";
import { createRoot, Root } from "react-dom/client";
import * as classes from "./mystyles.scss";
import logo from "./assets/logo_1.png";

const root: Root = createRoot(document.getElementById("root"));
if (root) {
  root.render(
    <div className={classes.container}>
      <div>
        <img
          src={logo}
          className={`${classes.logo} ${classes.slideinfwdcenter}`}
          alt="Logotipo de la última expansión de Final Fantasy XIV"
        />
      </div>
      <div>
        <h1 className={classes.slideinelliptictopfwd}>
          Hello from Tuliyollal!
        </h1>
      </div>
    </div>
  );
}
