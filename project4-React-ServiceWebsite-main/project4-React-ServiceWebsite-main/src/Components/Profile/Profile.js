import React from 'react'
import '../../Styles/styleProfile.css'
import auth from "../Register/auth";
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import Weather from "./Weather"
import ProfileServices from './ProfileServices';

function Profile(props) {

  let profileNameFirst = window.sessionStorage.getItem('firstName');
  let profileNameLast = window.sessionStorage.getItem('lastName');
  let profileEmail = window.sessionStorage.getItem('email');


  return (
    <div >
    <Header />
    <div className="container-profile-big">
    
      <div className="container-profile-ch">
        <div className="profile-image">
          <img src="./img/profile2.png" alt="" width="100%" height/>
        </div> 
        <div className="information">

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
         </div>
        <div >
            <button className="button"
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

      <div className="wetharContainer">
      <Weather/> 
      </div>
    </div>
        <ProfileServices />
        <Footer />
    </div>
  )
}


export default Profile
