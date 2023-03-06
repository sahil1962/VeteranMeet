import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
import { useNavigate } from "react-router-dom"
import {useLocation} from 'react-router-dom';
import axios from "axios";

const InfoCard = () => {
  const navigate = useNavigate()
  const [modalOpened, setModalOpened] = useState(false);
  const location = useLocation();
  const [fname,setfname]=useState([])
  const [lname,setlname]=useState([])
  const [profession,setprofession]=useState([])
  const [relationshipstatus,setrelationshipstatus]=useState([])
  const [Gender,setGender]=useState([])
  
  var hi = location.state.email;

  
  const GetProfile = () => {
    axios.get('http://localhost:4000/login-vetern/'+hi)
    .then(res => {
      setfname( res.data[0].fname) 
      setlname( res.data[0].lname) 
      setprofession( res.data[0].profession) 
      setrelationshipstatus( res.data[0].relationshipstatus) 
      setGender( res.data[0].gender) 
    })
  }

  GetProfile()

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Bio</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Fname </b>
        </span>
        <span>{fname}</span>
      </div>
      <div className="info">
        <span>
          <b>Lname </b>
        </span>
        <span>{lname}</span>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{relationshipstatus}</span>
      </div>
      <div className="info">
        <span>
          <b>Profession </b>
        </span>
        <span>{profession}</span>
      </div>

      <div className="info">
        <span>
          <b>Gender </b>
        </span>
        <span>{Gender}</span>
      </div>

      <div className="info">
        <span>
          <b>Hobbies </b>
        </span>
        <span>Cricket, Football, Fishing</span>
      </div>
      <div>
      <button className="button logout-button" onClick={() => navigate("/login")}>Logout</button>
      {/* <button className="button logout-button" onClick={() => navigate("/login")}>Arrange an Event</button> */}
      </div>

    </div>
  );
};

export default InfoCard;
