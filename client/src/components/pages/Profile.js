import React, { Component } from "react";
import "../../utilities.css";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    document.title = "Profile Page";
  }



  render() {
    return (
      <>
        <div className="Profile-avatarContainer" >
          <div className="Profile-avatar" />
        </div>
        <h1 className="Profile-name u-textCenter">Prince Dwivedi</h1>
        <hr className="Profile-line" />
        <div className="u-flex">


          <div className="Profile-subContainer">
               <h4 className="Profile-subTitle u-textCenter">Elector's Info</h4>
                   <div className="u-flex">
                   <div className="Profile-subContainer">
            
                       <h6 className="left-of-info">Father's Name</h6>
                       <h6 className="left-of-info">Sex</h6>
                       <h6 className="left-of-info" >Date Of Birth</h6>
            
                   </div>

                    <div className="Profile-subContainer">
                         <h6 className="right-of-info">Nand Kumar Dwivedi</h6>
                         <h6 className="right-of-info">Male</h6>
                         <h6 className="right-of-info">28-12-2000</h6>
                    </div>
                    </div>
          </div>

          <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle u-textCenter">Other Info</h4>
          <div className="u-flex">
                <div className="Profile-subContainer">
                   <h6 className="u-textCenter left-of-info">Region</h6>
                   <h6 className="u-textCenter left-of-info">Unique Id</h6>
                   <h6 className="u-textCenter left-of-info">Mobile No</h6>
               </div>

           <div className="Profile-subContainer">
                <h6 className="u-textCenter right-of-info">Bhopal</h6>
                <h6 className="u-textCenter right-of-info">XXXXXXXXXXX</h6>
                <h6 className="u-textCenter right-of-info">7367647489</h6>
           </div>
           </div>
          </div>
          
        </div>
      </>
    );
  }
}

export default Profile;
