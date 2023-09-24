import React from 'react'

export const StaffCard = ({attr}) => {
  return (
    <div className='Staff-Card'>
        <img className='Staff-Card-Img' src={attr.img} />
        <h4 className='Staff-Card-Name'>{attr.Name}</h4>
        <h5 className='Staff-Card-Role'>{attr.Role}</h5>
        <p className='Staff-Card-Quote'>{attr.quote}</p>
    </div>
  )
}
