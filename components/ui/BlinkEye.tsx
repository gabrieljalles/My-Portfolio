"use client"
import React, {useState, useEffect} from 'react'
import { FaEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";

const BlinkEye : React.FC = () => {

  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    
    const blink = () => {

      const randomNumber  = Math.random();

      if(randomNumber < 0.18) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 500);
      }
    };

    const intervalId = setInterval(blink, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return(
    <div>
      {isBlinking? <RiEyeCloseLine/>: <FaEye/>}
    </div>
  )

}

export default BlinkEye;