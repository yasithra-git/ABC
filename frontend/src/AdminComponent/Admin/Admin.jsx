import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'

import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
import Dashboard from '../Dashboard/Dashboard'
import FoodCategory from '../FoodCategory/FoodCategory'
import Events from '../Events/Events'
import RestaurantDetails from './RestaurantDetails'
import Ingredient from '../Ingredients/Ingredient'
import CreateMenuForm from '../Menu/CreateMenuForm'

const Admin = () => {
    const handleClose = () => {
        
    }
  return (
    <div>
        <div className= 'lg:flex justify-between'>
            <div>
                <AdminSideBar handleClose={handleClose}/>
            </div> 

            <div className='lg:w-[80%]'>
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/category' element={<FoodCategory/>}/>
                <Route path='/ingredients' element={<Ingredient/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/details' element={<RestaurantDetails/>}/>
                <Route path='/add-menu' element={<CreateMenuForm/>}/>
              </Routes>

            </div>
        </div>
    </div>
  )
}

export default Admin