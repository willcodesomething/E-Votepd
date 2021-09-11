import React, { Component } from "react";

import "../../utilities.css";
import Vote from "../modules/Vote";
import "./Home.css";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VoteCand1: 0,
      VoteCand2: 0,
      VoteCand3: 0,
    };
  }

  componentDidMount() {

  }
  incrementVoteCand1 = () => {
    this.setState({
      VoteCand1: this.state.VoteCand1 + 1,
      VoteCand2: this.state.VoteCand2,
      VoteCand3:this.state.VoteCand3,
      
    });
  };
  incrementVoteCand2 = () => {
    this.setState({
      VoteCand1: this.state.VoteCand1 ,
      VoteCand2: this.state.VoteCand2 + 1,
      VoteCand3:this.state.VoteCand3,
      
    });
  };
  incrementVoteCand3 = () => {
    this.setState({
      VoteCand1: this.state.VoteCand1 ,
      VoteCand2: this.state.VoteCand2,
      VoteCand3:this.state.VoteCand3 + 1,
      
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
                this.incrementVoteCand1();
              }}
            >
              <div className="Home-avatar img1" />
            </div>
            <h1 className="Home-name u-textCenter ">Lugia</h1>
            <hr className="Home-line" />

            <div className="u-flex">

              <div className="Home-subContainer u-textCenter">
                <h4 className="Home-subTitle ">Votes</h4>
                <Vote Vote={this.state.VoteCand1} />
              </div>

            </div>


          </div>




          <div className="Home-subContainer">
            <div
              className="Home-avatarContainer"
              onClick={() => {
                this.incrementVoteCand2();
              }}
            >
              <div className="Home-avatar img2" />
            </div>
            <h1 className="Home-name u-textCenter">Pikachu</h1>
            <hr className="Home-line" />

            <div className="u-flex">

              <div className="Home-subContainer u-textCenter">
                <h4 className="Home-subTitle">Votes</h4>
                <Vote Vote={this.state.VoteCand2} />
              </div>

            </div>


          </div>




          <div className="Home-subContainer">
            <div
              className="Home-avatarContainer"
              onClick={() => {
                this.incrementVoteCand3();
              }}
            >
              <div className="Home-avatar img3" />
            </div>
            <h1 className="Home-name u-textCenter">Charmander</h1>
            <hr className="Home-line" />

            <div className="u-flex">

              <div className="Home-subContainer u-textCenter">
                <h4 className="Home-subTitle">Votes</h4>
                <Vote Vote={this.state.VoteCand3} />
              </div>

            </div>


          </div>



        </div>

      </>


    );
  }
}
export default Home;
