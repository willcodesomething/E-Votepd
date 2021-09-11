import React, { Component } from "react";

import "../../utilities.css";
import Vote from "../modules/Vote";
import "./Home.css";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Vote: 0,
    };
  }

  componentDidMount() {

  }
  incrementVote = () => {
    this.setState({
      Vote: this.state.Vote + 1,
    });
  };

  render() {
    return (

      <>
        <div className="u-flex ">


          <div className="Home-subContainer">
            <div
              className="Home-avatarContainer"
              onClick={() => {
                this.incrementVote();
              }}
            >
              <div className="Home-avatar img1" />
            </div>
            <h1 className="Home-name u-textCenter ">Lugia</h1>
            <hr className="Home-line" />

            <div className="u-flex">

              <div className="Home-subContainer u-textCenter">
                <h4 className="Home-subTitle ">Votes</h4>
                <Vote Vote={this.state.Vote} />
              </div>

            </div>


          </div>




          <div className="Home-subContainer">
            <div
              className="Home-avatarContainer"
              onClick={() => {
                this.incrementVote();
              }}
            >
              <div className="Home-avatar img2" />
            </div>
            <h1 className="Home-name u-textCenter">Pikachu</h1>
            <hr className="Home-line" />

            <div className="u-flex">

              <div className="Home-subContainer u-textCenter">
                <h4 className="Home-subTitle">Votes</h4>
                <Vote Vote={this.state.Vote} />
              </div>

            </div>


          </div>




          <div className="Home-subContainer">
            <div
              className="Home-avatarContainer"
              onClick={() => {
                this.incrementVote();
              }}
            >
              <div className="Home-avatar img3" />
            </div>
            <h1 className="Home-name u-textCenter">Charmander</h1>
            <hr className="Home-line" />

            <div className="u-flex">

              <div className="Home-subContainer u-textCenter">
                <h4 className="Home-subTitle">Votes</h4>
                <Vote Vote={this.state.Vote} />
              </div>

            </div>


          </div>



        </div>

      </>


    );
  }
}
export default Home;
