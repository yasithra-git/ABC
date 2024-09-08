import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantsOrder, UpdateOrderStats } from '../../component/State/RestaurantOrder/Action';


const orderStatus = [
  {label:"Pending",value:"PANDING"},
  {label:"Completed",value:"COMPLETED"},
  {label:"Out For Delivery",value:"OUT_FOR_DELIVERY"},
  {label:"Delivered",value:"DELIVERED"},
];

export const OrderTable = () => {

  const dispatch=useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {restaurant,restaurantOrder,ingredients,menu}=useSelector((store)=>store);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) =>{
    setAnchorEl(event.currentTarget)
  };


  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(()=>{
    dispatch(fetchRestaurantsOrder({
      jwt,
      restaurantId:restaurant.usersRestaurant?.id,
    }))
  },[]);

  const handleUpdateOrder=(orderId,orderStatus)=>{
    dispatch(UpdateOrderStats({orderId,orderStatus,jwt}))
    handleClose();
  }

  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader 
        title={"All Orders"}
        sx={{pt:2,alignItems:"center"}}
        />
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">image</TableCell>
            <TableCell align="right">customer</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">ingredients</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantOrder.orders.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">
                <AvatarGroup>
                  {item.items.map((orderItem) => (
                    <Avatar src={orderItem.food?.images[0]}/>
                  ))}
                </AvatarGroup>
              </TableCell>
              <TableCell align="right">${item.customer?.fullName}</TableCell>
              <TableCell align="right">
                {item.items.map((orderItem) => <p>{item.totalAmount}</p>)}
              </TableCell>
              <TableCell align="right">
                {item.items.map((orderItem) =>
             <div>
              {orderItem.ingredients.map((ingredient) => <Chip label={ingredient}/>)}
             </div>
                )}
              </TableCell>
              <TableCell align="right">{item.orderStatus}</TableCell>
              <TableCell align='right'>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  update
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {orderStatus.map((status) => (
                    <MenuItem onClick={()=>handleUpdateOrder(item.id,status.value)}>{status.label}</MenuItem>
                    ))}
                </Menu>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
    </Box>
  )
}

export default OrderTable