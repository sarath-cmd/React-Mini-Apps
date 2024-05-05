import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    // const updateClock = () => {... };
    // This line defines a function updateClock that will be called every second to update the clock display.
    const updateClock = () => {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const period = hour >= 12? 'PM' : 'AM';

      // Convert to 12-hour format
      // This line converts the hour value to a 12-hour format. If the hour is 0, it sets displayHour to 12.
      // Otherwise, it sets displayHour to the hour value modulo 12.
      let displayHour = hour % 12 || 12;

      // Add leading zeros
      // This line creates a string displayTime that represents the current time in the format HH:MM:SS AM/PM.
      // It uses template literals to concatenate the hour, minutes, seconds, and period values.
      // The padStart(2, '0') method is used to add leading zeros to the hour, minutes, and seconds values if they are less than 10.
      const displayTime = `${displayHour.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} ${period}`;

      setTime(displayTime);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    // This line returns a cleanup function that will be called when the component is unmounted. 
    // The cleanup function clears the interval using the clearInterval function, 
    // which prevents the clock from continuing to update when the component is no longer rendered.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]">
        Digital Clock
      </h1>
      <div id="Clock" className="bg-gray-400 h-[30vh] mt-[20vh] w-[55vw] mx-auto rounded-3xl font-extrabold text-8xl text-black">
        <h1 className='p-[6.5%]'>{time}</h1>
      </div>
    </div>
  );
}

export default Clock;