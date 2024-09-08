import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurantStatus } from '../../component/State/Restaurant/Action';


export const RestaurantDetails = () => {
  const {restaurant}=useSelector((store)=>store);
  const dispatch = useDispatch();
  

  const handleRestaurantStatus = () => {
dispatch(updateRestaurantStatus({
  restaurantId:restaurant.usersRestaurant.id,
  jwt:localStorage.getItem("jwt"),
}))
  };

  return (
    <div className='lg:px-20 px-5 pb-10'>
      <div className='py-5 flex justify-center items-center gap-5'>
        <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>
          {restaurant.usersRestaurant?.name}
        </h1>
        <div>
          <Button
            color={!restaurant.usersRestaurant?.open? "primary" : "error"}
            className='py-[1rem] px-[2rem]'
            variant='contained'
            onClick={handleRestaurantStatus}
            size='large'
          >
            {restaurant.usersRestaurant?.open? "Close" : "Open"}
          </Button>
        </div>
      </div>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Restaurant</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                {/* Restaurant details go here */}
                <div className='flex'>
                  <p className='w-48'>Owner</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>
                  {restaurant.usersRestaurant?.owner.fullName}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Restaurant Name</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>
                  {restaurant.usersRestaurant?.name}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Cuisine Type</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>
                  {restaurant.usersRestaurant?.cuisineType}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Opening Hours</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>
                  {restaurant.usersRestaurant?.openingHours}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Status</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant.usersRestaurant?.open?
                      <span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>Open 
                      </span>:<span className='px-5 py-2 rounded-full bg-red-400 text-gray-50'>
                        Closed
                      </span>
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Address and Contact side by side */}
        <Grid item xs={12} lg={6}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title={<span className='text-gray-300'>Address</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                {/* Address details go here */}
                <div className='flex'>
                  <p className='w-48'>Street</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>
                  No78, main street, matara
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>City</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>Matara</p>
                </div>
                
                <div className='flex'>
                  <p className='w-48'>Postal Code</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>9898</p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Country</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>Sri Lanka</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title={<span className='text-gray-300'>Contact</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                {/* Contact details go here */}
                <div className='flex'>
                  <p className='w-48'>Phone</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>
                  {restaurant.usersRestaurant?.contactInformation.mobile}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Email</p>
                  <p className='text-gray-400'><span className='pr-5'>-</span>
                  {restaurant.usersRestaurant?.contactInformation.email}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Social</p>
                  <div className="flex text-gray-400 items-center pb-3 ">
                  <span className='pr-5'>-</span>
                  <a href='/'>
                    <InstagramIcon sx={{fontSize:"3rem"}}/>
                    </a>
                    <a href='/'>
                    <XIcon sx={{fontSize:"3rem"}}/>
                    </a>
                    <a href='/'>
                    <FacebookIcon sx={{fontSize:"3rem"}}/>
                  </a>
                  </div>
                  
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default RestaurantDetails
