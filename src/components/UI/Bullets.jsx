import React from 'react'

const Bullets = ({name}) => {
  return (
      <div className='flex gap-3'>
          <div className=' w-3 h-6 bg-current rounded-sm'></div>
          <div className=' flex items-center text-current text-sm font-bold  '>{ name }</div>
    </div>
  )
}

export default Bullets