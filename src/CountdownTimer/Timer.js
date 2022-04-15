import React from 'react'
import { calculateTimeLeft } from "./timerUtils";

const Timer = () => {
  return (
    <div>{calculateTimeLeft()}</div>
  )
}
export default Timer 