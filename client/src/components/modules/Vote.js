import React, { Component } from "react";
import "./Vote.css";

/**
 * Component that renders no of votes
 *
 * Proptypes
 * @param {int} Vote is no. of votes a particular candidate got
 */
class Vote extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Vote-container">
        <div className="Vote-story">
          <p className="Vote-storyContent">{this.props.Vote}</p>
        </div>
      </div>
    );
  }
}

export default Vote;
