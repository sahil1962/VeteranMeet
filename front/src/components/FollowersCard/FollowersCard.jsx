import React, { useState, useEffect } from 'react';
import './FollowersCard.css'
// import { Followers } from '../../Data/FollowersData'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
// const Followers = [];
const temp_followers = [];


const FollowersCard = () => {
    const navigate = useNavigate()

    const ProfilePage = true;
    const location = useLocation();
    const [Prev_Followers, setPrev_Followers] = useState([]);
    const [Followers, setFollowers] = useState([]);

    const [email_follower, setemail_follower] = useState([]);

    var emailUser = location.state.email;
    // console.log("email user : " , emailUser)

    const GetProfile = () => {
        axios.get('http://localhost:4000/get')
            .then(res => {
                for (var i = 0; i < res.data.length; i++) {
                    temp_followers.push(res.data[i])
                }
                setFollowers([
                    temp_followers
                ]);
            })
    }

    const GetFollowersList = () => {
        axios.get('http://localhost:4000/login-vetern/' + emailUser)
            .then(res => {
                setPrev_Followers(res.data[0].following)

            })

    }

    useEffect(() => {
        GetProfile();
        GetFollowersList();
    }, [])
    console.log("Followers")

    function profilepage () {
        navigate("/profile", { state: { email: emailUser } })
    }

    const userObject = {
        email: emailUser,
        following: [email_follower,]
    }
    console.log("userObject : ", userObject.following)

    const FollowSomeone = () => {
        axios.put('http://localhost:4000/update-follower', userObject)
            .then((res) => {
                console.log(res.data)
                console.log('Student successfully updated')
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="FollowersCard">
            <h3>Who is following you</h3>

            {temp_followers.map((follower) => {
                return (
                    <div className="follower">
                        <div>
                            {/* <img src={follower.img} alt="" className='followerImage' /> */}
                            <div className="name">
                                <span onClick={(e) => {
                                    setemail_follower(follower.email);
                                    // handleSubmit(follower.email); 
                                    profilepage()
                                }}> <a href='/profile'>{follower.fname}</a></span>
                                <span>@{follower.email}</span>
                            </div>
                        </div>
                        <button
                            value={email_follower}
                            onClick={(e) => {
                                setemail_follower(follower.email);
                                // handleSubmit(follower.email); 
                                FollowSomeone()
                            }}
                            // onClick={(e) => handleSubmit(e)}0
                            className='button fc-button'>
                            Follow
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard