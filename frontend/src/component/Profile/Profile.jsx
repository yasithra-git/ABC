import React from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Routes, Route } from 'react-router-dom' // Import Route here
import UserProfile from './UserProfile'
import Orders from './Orders'
import Address from './Address'
import Favorites from './Favorites'
import Events from './Events'

const Profile = () => {
  return (
    <div className='lg:flex justify-between bg-custom-gradient-left-to-right bg-blend-custom-blend'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation/>
        </div>
        <div className='lg:w-[80%]'>
            <Routes>
                <Route path='/' element={<UserProfile/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/address' element={<Address/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
                <Route path='/events' element={<Events/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Profile
