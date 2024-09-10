import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById, getMenuItemsByRestaurantId, getRestaurantsCategory } from '../../component/State/Restaurant/Action'
import { fetchRestaurantsOrder } from '../../component/State/RestaurantOrder/Action'
import Footer from '../../component/Home/Footer'

export const Admin = () => {
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {restaurant} = useSelector(store=>store)
    const handleClose = () => {        
    }
    useEffect(() => {
      dispatch(getRestaurantsCategory({jwt,restaurantId:restaurant.usersRestaurant?.id}));
      dispatch(fetchRestaurantsOrder({jwt,restaurantId:restaurant.usersRestaurant?.id}))
      
    },[]);
  return (
    <div className='flex flex-col min-h-screen bg-custom-gradient-left-to-right bg-blend-custom-blend'>
        <div className= 'flex flex-grow lg:flex justify-between'>
            <div className='flex flex-grow'>
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