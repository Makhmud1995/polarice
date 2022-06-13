import React from 'react'
import Ice from '../../assets/ice.svg'

const Content3 = () => {
  return (
    <div className='flex justify-around h-[544px]items-center'>
        <div className=' flex flex-col justify-center'>
            <h1 className='font-bold text-[44px] text-start'>Brown Sugar<br/> Oatmea</h1>
            <p className='text-[16px] text-start'>Together with McDonald’s, Burger King has grown to become<br/> synonymous with burgers in the US.Together with McDonald’s,<br/>
             Burger King has grown to become synonymous.</p>

        <div>
            <button className= 'w-[165px] mt-[30px] h-[49px] border rounded-md bg-[#D23166] text-white'>Buy Now</button>
        </div>
        </div>
        <div className='w-[597px] h-[597px]  '>
            <img className='' src={Ice} alt=''></img>
        </div>
    </div>
  )
}

export default Content3