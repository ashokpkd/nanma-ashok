import React from 'react'

const Bullets = ({name}) => {
  return (
      <div className='flex gap-5'>
          <div className=' w-3 h-6 md:w-5 md:h-10 bg-current rounded-sm'></div>
          <div className=' flex items-center text-current text-sm md:text-lg font-bold '>{ name }</div>
    </div>
  )
}

export default Bullets