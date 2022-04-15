import React, { useState, useEffect } from 'react'
import { calculateTimeLeft } from "./timerUtils";

const Timer = () => {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
  
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <h1>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h1>
    </div>
  )
}
export default Timer 