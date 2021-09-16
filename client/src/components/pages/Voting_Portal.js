import React, { Component } from "react";

import "../../utilities.css";
import Vote from "../modules/Vote";
import "./Voting_Portal.css";



class Voting_Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VoteCand1: 0,
      VoteCand2: 0,
      VoteCand3: 0,
    };
  }

  componentDidMount() {}


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


          <div className="Voting_Portal-subContainer">
            <div
              className="Voting_Portal-avatarContainer"
              onClick={() => {
                this.incrementVoteCand1();
              }}
            >
              <div className="Voting_Portal-avatar img1" />
            </div>
            <h1 className="Voting_Portal-name u-textCenter ">Tony Stark</h1>
            <hr className="Voting_Portal-line" />

            <div className="u-flex">

              <div className="Voting_Portal-subContainer u-textCenter">
                <h4 className="Voting_Portal-subTitle ">Votes</h4>
                <Vote Vote={this.state.VoteCand1} />
              </div>

            </div>


          </div>




          <div className="Voting_Portal-subContainer">
            <div
              className="Voting_Portal-avatarContainer"
              onClick={() => {
                this.incrementVoteCand2();
              }}
            >
              <div className="Voting_Portal-avatar img2" />
            </div>
            <h1 className="Voting_Portal-name u-textCenter">Pikachu</h1>
            <hr className="Voting_Portal-line" />

            <div className="u-flex">

              <div className="Voting_Portal-subContainer u-textCenter">
                <h4 className="Voting_Portal-subTitle">Votes</h4>
                <Vote Vote={this.state.VoteCand2} />
              </div>

            </div>


          </div>




          <div className="Voting_Portal-subContainer">
            <div
              className="Voting_Portal-avatarContainer"
              onClick={() => {
                this.incrementVoteCand3();
              }}
            >
              <div className="Voting_Portal-avatar img3" />
            </div>
            <h1 className="Voting_Portal-name u-textCenter">Charmander</h1>
            <hr className="Voting_Portal-line" />

            <div className="u-flex">

              <div className="Voting_Portal-subContainer u-textCenter">
                <h4 className="Voting_Portal-subTitle">Votes</h4>
                <Vote Vote={this.state.VoteCand3} />
              </div>

            </div>


          </div>



        </div>

      </>


    );
  }
}
export default Voting_Portal ;
