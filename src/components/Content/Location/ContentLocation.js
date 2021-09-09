import React from 'react'
import Maps from './Maps'
import SelectLocation from './SelectLocation'

const ContentLocation = () => {
  return (
    <div className='content__location'>
      <SelectLocation />
      <Maps />
    </div>
  )
}

export default ContentLocation
