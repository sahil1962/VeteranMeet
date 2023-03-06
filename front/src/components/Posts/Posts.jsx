// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Posts.css'
// import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'

import { useLocation } from 'react-router-dom';

const temp_posts = [];

const Posts = () => {
  const [Posts, setPost] = useState([]);


  const location = useLocation();
  var email_from_profile = location.state.email;
  const GetPosts = () => {
    axios.get('http://localhost:4000/getpost/' + email_from_profile)
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
  useEffect(() => {
    GetPosts();

  }, [])

  return (
    <div className="Posts">
      {temp_posts.map((post, id) => {
        return <Post data={post} id={id} />
      })}
    </div>
  )
}

export default Posts