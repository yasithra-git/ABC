import React from 'react'

const Footer=()=> {
  return (
    <footer className='bg-custom-gradient-left-to-right text-white py-1'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>© 2024 ABC Restaurant. All rights reserved.</p>
        <div className='mt-1'>
          <a href='#' className='text-blue-400 hover:underline mx-1'>Privacy Policy</a>
          <a href='#' className='text-blue-400 hover:underline mx-1'>Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer