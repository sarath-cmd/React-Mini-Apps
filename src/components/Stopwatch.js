import { useState } from 'react';

function Stopwatch() {

  const [Sec, setSec] = useState(0)
  const [Min, setMin] = useState(0)
  const [Hour, setHour] = useState(0)
  const [StartControl, setStartControl] = useState(true)

  const handleStart = () => {
    window.timesec = setInterval (() => {
      setSec((Sec) => Sec + 1)}, 1000);
    window.timemin = setInterval (() => {
      setMin((Min) => Min + 1)}, 60000);
    window.timehrs = setInterval (() => {
      setHour((Hour) => Hour + 1)}, 3600000);
    setStartControl(false)
  }

  const handleStop = () => {
    clearInterval(window.timesec)
    clearInterval(window.timemin)
    clearInterval(window.timehrs)
    setStartControl(true)
  }

  const handleReset = () => {
    clearInterval(window.timesec)
    setSec(0)
    clearInterval(window.timemin)
    setMin(0)
    clearInterval(window.timehrs)
    setHour(0)
    setStartControl(true)
  }
  
  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>STOP WATCH</h1>
      <br />
      <div className="flex justify-center mt-[20vh]">
        <span className='mr-5 text-5xl font-medium'>{Hour} Hrs</span>
        <span className='mr-5 text-5xl font-medium'>{Min % 60} Mins</span>
        <span className='mr-5 text-5xl font-medium'>{Sec % 60} Secs</span>
      </div>
      <br />
      <div className="flex justify-center mt-5">
        {StartControl && <button onClick={handleStart} className='mr-10 bg-black text-3xl font-bold p-[1%] text-lime-400 rounded-3xl'>START</button>}
        <button onClick={handleStop} className='mr-10 bg-black text-3xl font-bold p-[1%] text-lime-400 rounded-3xl'>STOP</button>
        <button onClick={handleReset} className='mr-10 bg-black text-3xl font-bold p-[1%] text-lime-400 rounded-3xl'>RESET</button>
      </div>
    </div>
  );
}

export default Stopwatch;
