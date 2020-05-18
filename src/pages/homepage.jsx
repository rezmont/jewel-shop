import React from "react";

import { Directory } from "../components/directory.jsx";
import "./homepage.styles.scss";

export class HomePage extends React.Component {
  render(params) {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}
