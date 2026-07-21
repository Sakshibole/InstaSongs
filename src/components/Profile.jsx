import React from 'react'
import './Profile.css'

const Profile = () => {
   const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className='Profile-card'>
      <h1>hello this is <span>{loggedInUser.name}</span></h1>
      <h4>Favorites : No favorites yet</h4>



    </div>
  )
}

export default Profile