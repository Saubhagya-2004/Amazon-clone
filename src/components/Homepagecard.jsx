import React from 'react'

const Homepagecard = ({title,img,link}) => {
  return (
    <div className='h-[420px] bg-white rounded-2xl m-2 z-0 '>
      <div className='text-lg font-semibold ml-4 mt-4 xl:text-xl'>
        {title}
      </div>
      <div className='h-[300px] m-4 '>
        <img className='h-[100%] w-[100%] object-cover ' src={img} />
      </div>
      <div className='text-xs lg:text-sm mt-4 ml-4 text-blue-500'>
        {link}
      </div>
    </div>
  )
}

export default Homepagecard
