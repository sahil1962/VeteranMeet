import React,{useState,useEffect} from 'react';
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

import { Link, useNavigate,useLocation } from "react-router-dom"
import axios from "axios";
const ProfileCard = () => {
  const navigate = useNavigate()
  const ProfilePage = true;
  const location = useLocation();
  const [fname,setfname]=useState([])
  const [lname,setlname]=useState([])
  const [profession,setprofession]=useState([])
  var hi = location.state.email;

  
  const GetProfile = () => {
    axios.get('http://localhost:4000/login-vetern/'+hi)
    .then(res => {
      setfname( res.data[0].fname) 
      setlname( res.data[0].lname) 
      setprofession( res.data[0].profession) 
    })
  }

  GetProfile()


  const [no_of_posts,setno_of_posts]=useState(0)
  var count = 0;
  // const location = useLocation();
  var email_from_profile = location.state.email;
  const GetPosts = () => {
    axios.get('http://localhost:4000/getpost/'+email_from_profile)
    .then(res => {
      setno_of_posts(res.data.length)
    })
  }
  // GetPosts()
  useEffect(() => {
    GetPosts();

}, [])


const profilepage = () => {
          navigate("/profile", {state:{email:hi}})
}
// console.log("no of posts->", no_of_posts)

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      {/* <div>Hello{location.state.name}</div> */}
      <div className="ProfileName">
      <span  onClick={profilepage}><a href='/profile'>{fname+" "+lname}</a></span>
        
        <span>{profession}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{no_of_posts}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
