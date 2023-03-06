import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
// import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import bootstrap from "../node_modules/.bootstrap-GEpQfPqv/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';




const Auth = () => {
  const navigate = useNavigate();


  const navigateTologin = () => {
    // 👇️ navigate to /login
    navigate('/login');
  };
  const navigateTosignup = () => {
    // 👇️ navigate to /signup
    navigate('/signup');
  };
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>VeteranMeet</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div className="Webname">

      <div className="a-center">
            <button className="button infoButton" type="submit" onClick={navigateTologin}>Login</button>
            <br></br>
            <button className="button infoButton" type="submit" onClick={navigateTosignup}>Signup</button>
            </div>
      </div>

    </div>
  );
};


export default Auth;
