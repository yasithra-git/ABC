import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import OrderTable from '../Orders/OrderTable'
import MenuTable from './MenuTable'

const Menu = () => {
  return (
    <div className='px-2'>
    <MenuTable/>
  </div>
  )
}

export default Menu