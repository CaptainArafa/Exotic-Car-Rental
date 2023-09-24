import React from 'react'
import { Oval } from 'react-loader-spinner'

export const Loading = () => {
  return <Oval
  height={40}
  width={40}
  color="#0B3D2E"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#0B3D2E"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
  
}
