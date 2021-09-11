import React, { Component } from "react";
import { Link } from "@reach/router";

import "./SideBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
     <div className="SideBar-container">
         this will be SideBar

     </div>
    );
  }
}

export default SideBar;