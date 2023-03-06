import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const [caption, setcaption] = useState("");


  const location = useLocation();
  var email = location.state.email;

  // console.log("Email ->: ", email)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("caption : " + caption)

    const userObject = {
      caption: caption,
      email : email
    };
    console.log(userObject)
    axios.post('http://localhost:4000/postshare', userObject)
      .then(res => console.log(res.data));
    alert("Post shared successfully.");
    setcaption("");

  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input value={caption} onChange={(e) => setcaption(e.target.value)} type="text" placeholder="What's happening" />

        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button" onClick={(e) => handleSubmit(e)}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (

          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>

        )}


      </div>
    </div>
  );
};

export default PostShare;
