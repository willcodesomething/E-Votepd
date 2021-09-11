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
         <div className="SideBar-sub-container">
         <div className="SideBar-sub-sub-container"><p>SideBar</p></div>
         <div className="SideBar-sub-sub-container"><p>SideBar</p></div>
         <div className="SideBar-sub-sub-container"><p>SideBar</p></div>
         </div>
        
     </div>
    );
  }
}

export default SideBar;