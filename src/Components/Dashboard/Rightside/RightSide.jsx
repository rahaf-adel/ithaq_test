import React from 'react'
import Requests from '../Requests/Requests'
import './rightside.css'
import Response from '../Respons/Response'

const RightSide = () => {
  return (
    <div className='rightside'>
      {/* <h3 style={{fontSize: "25px"}}>Requests</h3> */}
      {/* <h3 style={{fontSize: "25px"}}>Response</h3> */}
      <Response/>
      <Requests />
    </div>
  )
}

export default RightSide;