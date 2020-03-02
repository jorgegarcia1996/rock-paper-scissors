import React, { Component } from "react";
import "./Hand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

class Hand extends Component {
  render() {
    return (
      <div className="Hand">
        <FontAwesomeIcon className="fas" icon={["fas", this.props.handType]} />
      </div>
    );
  }
}
export default Hand;
