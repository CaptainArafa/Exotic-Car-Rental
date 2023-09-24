import React, { useRef, useState } from 'react'
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";

export const FAQ = () => {
    const question1Ref = useRef()
    const [openQuestion,setOpenQuestion]= useState(0)

    const handleClick = (ID) => {
       
   
        setOpenQuestion(ID)
       
        if(openQuestion==ID){
            setOpenQuestion(0)
        }
   
    }

  return (
    <div className='FAQ-Container'>
        <div className='FAQ-Title'>
            <h4>FAQ</h4>
            <div>
            <h2>Frequently Asked Questions</h2>
            <div className='FAQ-Title-Box'></div>
            </div>
            <p>most repeated questions we've recieved from clients during the rental process</p>
        </div>
        <div className='FAQ-Questions'>
            <div className="FAQ-Question">
                <div className={openQuestion==1&&"Active-Question"}>
                    <h3>Do I need to dropoff the car at the same place I picked it up from?</h3>
                    {openQuestion==1?<BsCaretUpFill size={30}  onClick={()=>handleClick(1)} />:<BsCaretDownFill size={30} onClick={()=>handleClick(1)} />}          
                </div>
                <p className={openQuestion==1?"visible FAQ-Body":"FAQ-Body"} ref={question1Ref}>
                You don't need to! You can drop it off at any of our branches in the cities you specified when making your reservation because we have locations there.           
                </p>   
            </div>
            <div className="FAQ-Question">
                <div className={openQuestion==2&&"Active-Question"}>
                    <h3>How can I cancel my reservation on your website?</h3>
                    {openQuestion==2?<BsCaretUpFill size={30}  onClick={()=>handleClick(2)} />:<BsCaretDownFill size={30}  onClick={()=>handleClick(2)} />}  
                    </div>            
                <p className={openQuestion==2?"visible FAQ-Body":"FAQ-Body"}>
                By logging into your account and selecting the cancel button on the Reservations page, you can cancel your reservation.   
                </p>             
            </div>
            <div className="FAQ-Question">
                <div className={openQuestion==3&&"Active-Question"}>
                    <h3>If I return the car after the time I reserved it, will I be charged more?</h3>
                    {openQuestion==3?<BsCaretUpFill size={30}  onClick={()=>handleClick(3)} />:<BsCaretDownFill size={30}  onClick={()=>handleClick(3)} />}       
                    </div>        
                <p className={openQuestion==3?"visible FAQ-Body":"FAQ-Body"}>
                Our policy in this situation is to charge you for the additional time without any additional fees for the day after the drop-off date. If the return is delayed further, an additional 50% of the original price will be added.                 </p>
             
            </div>
        </div>
    </div>
  )
}
