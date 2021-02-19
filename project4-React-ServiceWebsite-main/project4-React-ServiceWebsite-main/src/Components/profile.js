import React from 'react'
import './styleProfile.css'
import auth from "./auth";

function Profile(props) {

  let profileNameFirst = window.sessionStorage.getItem('firstName');
  let profileNameLast = window.sessionStorage.getItem('lastName');
  let profileEmail = window.sessionStorage.getItem('email');



  return (
    <div className="container-profile-bg">
      <div className="container-profile-ch">
        <div className="profile-image">
          <img src="./images/profile2.png" alt="" width="100%" height/>
        </div>
        <div className="profile-name">
          <h3 className="">Profile name</h3>
           <h2 className="mm-1">{profileNameFirst} {profileNameLast}</h2>
        </div>
        <div className="profile-email">
          <h3 className="mm-1">Your email</h3>
          <h2 className="mm-1">{profileEmail}</h2>
        </div>
        <div className="profile-email">
          <p className="mm-1">Hello you are new user welcome in your profile we will add more feature soon</p>
        </div>
        <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/login");
          });
        }}
      >
        Logout
      </button>
      </div>
    </div>
  )
}


export default Profile
