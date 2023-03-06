// import React from 'react'
import React,{useState,useEffect} from 'react';
import axios from "axios";

import './Posts.css'
// import { PostsData } from '../../Data/PostsData'
import Event from '../Post/Event'

import { useLocation } from 'react-router-dom';

const temp_posts = [];

const Events = () => {
  const [Posts, setPost] = useState([]);


  const location = useLocation();
  var email_from_profile = location.state.email;
  const GetPosts = () => {
    axios.get('http://localhost:4000/getEvents/'+email_from_profile)
    .then(res => {
        for (var i = 0; i < res.data.length; i++) {
            // console.log("Posts" + res.data[i].fname)
            temp_posts.push(res.data[i])
        }
        // console.log("Posts Array ->", temp_posts)
        setPost([
          temp_posts
        ]);
    })
  }
  // GetPosts()
  useEffect(() => {
    GetPosts();

}, [])

  return (
    <div className="Posts">
        {temp_posts.map((post, id)=>{
            return <Event data={post} id={id}/>
        })}
    </div>
  )
}

export default Events