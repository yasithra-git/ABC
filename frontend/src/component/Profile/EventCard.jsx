import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card>
            <CardMedia sx={{height:345}}
            image='https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <CardContent>
                <Typography variant='h5'>
                    ABC Indian Fast Food
                </Typography>
                <Typography variant='body2'>
                    50% off on your first order
                </Typography>
                <p>{"Kadana"}</p>
                <p className='text-sm text-blue-500'>Auguset 31, 2024 12:00AM</p>
                <p className='text-sm text-red-500'>September 5, 2024 12:00AM</p>
            </CardContent>

            {false && <CardActions>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </CardActions>}
        </Card>
    </div>
  );
};

export default EventCard