import React from 'react'
import Events from '../Posts/Events'
import EventShare from '../PostShare/EventShare'
import './PostSide.css'
const PostSide = () => {
  return (
    <div className="PostSide">
      <EventShare />

      <div className="PostSide">
        <Events />
      </div>
    </div>
  )
}

export default PostSide