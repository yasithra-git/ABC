import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Instagram } from '@mui/icons-material';
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';
import { createRestaurant } from '../../component/State/Restaurant/Action';
import { useDispatch } from 'react-redux';

const initialValues = {
  name: '',
  description: '',
  cuisineType: '',
  streetAddress:'',
  city:'',
  postalcode:'',
  country:'',
  email:'',
  mobile:'',
  twitter:'',
  Instagram:'',
  openingHours:'Mon-Sun : 9:00 AM - 9:00 PM',
  images:[]
}


const CreateRestaurantForm = () => {
const [uploadImage,setUploadImage] = useState(false)
const dispatch = useDispatch()
const jwt=localStorage.getItem("jwt");

const formik = useFormik({
  initialValues,
  onSubmit:(values)=> {
    const data ={
      name:values.name,
      description:values.description,
      cuisineType:values.cuisineType,
      address:{streetAddress:values.streetAddress,
      city:values.city,
      postalcode:values.postalcode,
      country:values.country},

      contactInformation:{
        email:values.email,
        mobile:values.mobile},

      openingHours:values.openingHours,
      images: values.images
    };
    console.log("data ---",data)
    dispatch(createRestaurant({data, token:jwt}))
  },
});

const handleImageChange = async (e) => {
  const file = e.target.files[0]
  setUploadImage(true)
  const image = await uploadImageToCloudinary(file)
  console.log("image---", image)
  formik.setFieldValue('images', [...formik.values.images,image])
  setUploadImage(false)
}

const handleRemoveImage = (index) => {
  const updatedImages = [...formik.values.images]
  updatedImages.splice(index, 1);
  formik.setFieldValue('images', updatedImages);
};

  return (
    <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
     <div className='lg:max-w-4xl'>
     <h1 className='font-bold text-2xl text-center py-2'>
        Add New Restaurant
      </h1>
      <form onSubmit={formik.handleSubmit} className='space-y-4'>
        <Grid container spacing={2}>
          <Grid className='flex flex-wrap gap-5' item xs={12}>
            <input
            accept='image/*'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={handleImageChange}
            type='file'/>
            <label className='relative' htmlFor='fileInput'>
              <span className='w-24 h-24 cursor-pointer flex item-center justify
               p-3 border rounded-md border-gray-600'>
                <AddPhotoAlternateIcon className='text-white'/>

              </span>
              {
                uploadImage && <div className='absole left-0 right-0 top-0 
                bottom=0 w-24 h-24 flex justify-center items-center'>
                  <CircularProgress/></div>
                
              }
            </label>
            <div className='flex flex-wrap gap-5'>
              {formik.values.images.map((image,index)=>(
              <div className='relative'>
                <img
                className='w-24 h-24 object-cover'
                key={index}
                src={image}
                alt=""/>
                <IconButton size='small' sx={{position:'absolute', top:0,right:0,outline:'none' }}
                onClick={()=>handleRemoveImage(index)}>
                  <CancelPresentationIcon sx={{fontSize:'1.5rem'}}/>
                </IconButton>
            </div>))}

            </div>
        </Grid>

          <Grid item xs={12}>
            <TextField fullWidth 
              id='name' 
              name='name' 
              label='Name' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.name}>
              </TextField>

          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth 
              id='description' 
              name='description' 
              label='Descreption' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.description}>
            </TextField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField fullWidth 
              id='cuisineType' 
              name='cuisineType' 
              label='CuisineType' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.cuisineType}>
            </TextField>
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <TextField fullWidth 
              id='openingHours' 
              name='openingHours' 
              label='Opening Hours' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.openingHours}>
            </TextField>
          </Grid>

          
          <Grid item xs={12} lg={4}>
            <TextField fullWidth 
              id='streetAddress' 
              name='streetAddress' 
              label='Street Address' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.streetAddress}>
            </TextField>
          </Grid>

          
          <Grid item xs={12} lg={4}>
            <TextField fullWidth 
              id='city' 
              name='city' 
              label='City' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.city}>
            </TextField>
          </Grid>

          <Grid item xs={12} lg={4}>
            <TextField fullWidth 
              id='postalcode' 
              name='postalcode' 
              label='Postal Code' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.postalcode}>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth 
              id='country' 
              name='country' 
              label='Country' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.country}>
            </TextField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField fullWidth 
              id='email' 
              name='email' 
              label='Email' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.email}>
            </TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField fullWidth 
              id='mobile' 
              name='mobile' 
              label='Mobile' 
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.mobile}>
            </TextField>
          </Grid>
        </Grid>
        <Button variant='contained' color='primary' type='submit'> Create Restaurant </Button>
      </form>
     </div>
    </div>
  )
}

export default CreateRestaurantForm