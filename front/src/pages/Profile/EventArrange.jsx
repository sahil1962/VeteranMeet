import React from 'react'
import EventSide from '../../components/PostSide/EventSide'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
const EventArrange = () => {


  return (
    <div>
      <div>
        <h1>Arrange Event</h1>

      </div>
      < div className="Profile" >
        {/* <ProfileLeft /> */}
        {/* <div className="Profile-center"> */}
          <ProfileCard />
          <EventSide />
        </div>
        {/* <RightSide /> */}
      {/* </div > */}
    </div >
  )
}

export default EventArrange