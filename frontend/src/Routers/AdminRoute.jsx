import { Route, Routes } from "react-router-dom"
import CreateRestaurantForm from "../AdminComponent/CreateRestaurantForm/CreateRestaurantForm"
import Admin from "../AdminComponent/Admin/Admin"
import { useSelector } from "react-redux"
import { Navbar } from "../component/Navbar/Navbar"
import Footer from "../component/Home/Footer"

export const AdminRoute = () =>{
    const {restaurant}=useSelector((store)=>store)
    return (
<div>
    <Navbar/>
    <Routes>
        <Route path='/*'
         element={!restaurant.usersRestaurant ? <CreateRestaurantForm/>:<Admin/>}>

        </Route>
    </Routes>
    <Footer/>
</div>
    )
}