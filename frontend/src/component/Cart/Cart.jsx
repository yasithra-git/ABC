import { Box, Button, Card, Divider, Grid2, Modal, TextField } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCart from './AddressCart';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { store } from '../State/store';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../State/Order/Action';


export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};

const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:""
}
const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.number().required("Pincode is required"),
    city: Yup.string().required("City is required")
});



const Cart = () => {
    const createOrderUsingSelectedAddress = () => {};
    const handleOpenAddressModal = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const {cart,auth}=useSelector(store=>store);
    const dispatch=useDispatch();

    const handleClose = () => setOpen(false);
    const handleSubmit=(values)=>{
    const data = {
        jwt:localStorage.getItem("jwt"),
        order:{
            restaurantId:cart.cartItems[0].food?.restaurant.id,
            deliveryAddress:{
                fullName:auth.user?.fullName,
                streatAddress:values.streetAddress,
                city:values.city,
                state:values.state,
                postalCode:values.pincode
            }
        }
    }
    dispatch(createOrder(data))
        console.log("form value",values)
    };

    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {cart.cartItems.map((item) => <CartItem item={item} />)}
                
                <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className="font-extralight py-5">Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>Rs:{cart.cart?.total}</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Delivery Fee</p>
                                <p>Rs:30</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Restaurants Charges</p>
                                <p>Rs:20</p>
                            </div>
                            <Divider />
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Total pay</p>
                            <p>Rs:{cart.cart?.total+20+30}</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl pay-10 mt-10 mb-10'>
                            Confirm Your Reservation
                        </h1>
                        <div className='flex gap-5 flex-wrap justify-center mb-10'>
                            {[1, 1, 1].map((item, index) => (
                                <AddressCart 
                                    key={index}
                                    handleSelectAddress={createOrderUsingSelectedAddress}
                                    item={item}
                                    showButton={true} 
                                />
                            ))}
                        </div>

                        <Card className="flex gap-5 w-64 p-5 mx-auto">
                            <AddLocationAltIcon />
                            <div className='space-y-3 text-gray-500'>
                                <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                <Button 
                                    variant='outlined' 
                                    fullWidth 
                                    onClick={handleOpenAddressModal}
                                    sx={{ borderColor: '#ff7c00', color: '#ff7c00' }}
                                >
                                    Add
                                </Button>
                            </div>
                        </Card>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                         {({ errors, touched }) => (
                        <Form>
                            <Grid2 container spacing={2}>
                                <Grid2 item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="streetAddress"
                                        label="Street Address"
                                        fullWidth
                                        variant="outlined"
                                        error={touched.streetAddress && !!errors.streetAddress}
                                        helperText={
                                            <ErrorMessage name="streetAddress" component="span" className='text-red-600' />
                                        }
                                    />
                                </Grid2>
                                <Grid2 item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="state"
                                        label="State"
                                        fullWidth
                                        variant="outlined"
                                        error={touched.state && !!errors.state}
                                        helperText={
                                            <ErrorMessage name="state" component="span" className='text-red-600' />
                                        }
                                    />
                                </Grid2>
                                <Grid2 item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="pincode"
                                        label="Pincode"
                                        fullWidth
                                        variant="outlined"
                                        error={touched.pincode && !!errors.pincode}
                                        helperText={
                                            <ErrorMessage name="pincode" component="span" className='text-red-600' />
                                        }
                                    />
                                </Grid2>
                                <Grid2 item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="city"
                                        label="City"
                                        fullWidth
                                        variant="outlined"
                                        error={touched.city && !!errors.city}
                                        helperText={
                                            <ErrorMessage name="city" component="span" className='text-red-600' />
                                        }
                                    />
                                </Grid2>
                                {/* Repeat similar structure for other fields */}
                                <Grid2 item xs={12}>
                                    <Button type="submit" variant="contained" color="primary">
                                        Submit
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </Form>
                    )}

                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart;
