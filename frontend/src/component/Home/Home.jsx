import React, { useEffect } from 'react'
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { findCart } from '../State/Cart/Action'
import { getAllRestaurantsAction } from '../State/Restaurant/Action'
import Footer from './Footer'

const restaurants=[1,1,1,1,1,1]

export const Home = () => {
    const dispatch=useDispatch()
    const jwt=localStorage.getItem("jwt")
    const{restaurant}=useSelector(store=>store)
    console.log("restaurant",restaurant)

    useEffect(()=> {
        dispatch(getAllRestaurantsAction(jwt)); 
    },[])
    
  return (
    <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center text-shadow'>
                <p className='text-2xl lg:text-7xl font-bold z-10 py-5'>
                    ABC Restaurant
                </p>
                <p className='z-10 text-gray-200 text-xl lg:text-4xl'>
                    Where Every Meal Tells a Delicious Story.
                </p>
            </div>
            <div className='cover absolute top-0 left-0 right-0'>

            </div>
            <div className='fadout'>

            </div>
        </section>
        <section className='p-10 lg:py-10 lg:px-20  bg-custom-gradient-top-to-bottom bg-blend-custom-blend'>
            <p className='text-2xl font-semibold text-gray-400 py-3 pb-10 text-shadow'>Top Meels</p>
            <MultiItemCarousel/>
        </section>
        <section className='px-5 lg:px-20 pt-10 bg-custom-gradient-bottom-to-top bg-blend-custom-blend'>
            <h1 className='text-2xl font-semibold text-gray-400 pb-8 text-shadow'>
                Pick-up from your nearest outlet.
            </h1>
            <div className='flex flex-wrap items-center justify-around gap-5'>
                {
                    restaurant.restaurants.map((item)=><RestaurantCard item={item}/>)
                }
            </div>
        </section>
        <Footer/>   
    </div>
  )
}
