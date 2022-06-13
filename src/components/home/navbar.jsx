import React from 'react'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around h-[100px]'>
        <div>
            <img src={Logo} alt="" />
        </div>
        <div className='flex items-center '>
            <h3 className=' mr-4 cursor-pointer hover:text-[#D23166]'>Home</h3>
            <h3 className=' mr-4 cursor-pointer hover:text-[#D23166]'>Product</h3>
            <h3 className=' mr-4 cursor-pointer hover:text-[#D23166]'>Pricing</h3>
            <h3 className=' mr-4 cursor-pointer hover:text-[#D23166]'>Home</h3>
            <h3 className=' mr-4 cursor-pointer hover:text-[#D23166]'>Home</h3>
            <h3 className=' mr-4 cursor-pointer hover:text-[#D23166]'>Home</h3>
        </div>
        <div>
            <button className= 'w-[165px] h-[49px] border rounded-md bg-[#D23166] text-white'>Buy Now</button>
        </div>

    </div>
  )
}

export default Navbar