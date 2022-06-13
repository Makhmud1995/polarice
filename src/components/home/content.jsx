import React from 'react'
import Back from '../../assets/bg2.svg'

const Content = () => {
  return (
    <div className='flex justify-around'>
        <div className=' flex flex-col justify-center'>
            <h6 className='font-bold'>Sweet fun, full of milk.</h6>
            <h1 className='font-bold text-[57px]'>Feel inside cold with<br/>
             our delicious <span  className='font-bold text-[57px] text-[#D23166]' >ice-cream.</span></h1>
            <p className='text-[18px]'>Some food has looked so awful that it's looked like something that<br/> the dog's brought home,
                 yet after one mouthful I've been left<br/> eating my thoughts, my words.</p>

        <div>
            <button className= 'w-[165px] mt-[63px] h-[49px] border rounded-md bg-[#D23166] text-white'>Buy Now</button>
        </div>
        </div>
        <div className='w-[597px] h-[597px] bg-[url("./assets/bg.svg")] '>
            <img className='mt-[100px]' src={Back} alt=''></img>
        </div>
    </div>
  )
}

export default Content