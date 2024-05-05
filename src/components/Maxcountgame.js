import {useState, useEffect} from 'react'

function Maxcountgame() {

  const [Score, setScore] = useState(0)
  const [Timeleft, setTimeleft] = useState(10)
  const [StartDisp, setStartDisp] = useState(true)
  const [ScorebtnDisp, setScorebtnDisp] = useState(false)
  

  const handleStart =() => {
    setStartDisp(false)
    setScorebtnDisp(true)
    setScore(0)
    alert("Start Game!")
  }
  useEffect(() => {
    if(ScorebtnDisp && Timeleft > 0)
    {
      const timer = setInterval(() => {
        setTimeleft((prevTimeleft) => prevTimeleft - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
    setScorebtnDisp(false)
    setTimeleft(10)
    setStartDisp(true)
  }, [Timeleft, ScorebtnDisp])

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1)
  }

  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>Max Count</h1>
      <div className='mx-[35vw] bg-slate-400 mt-[20vh] h-[38vh] rounded-3xl'>
        <span className='text-4xl font-semibold flex justify-center p-[5%]'>{Score}</span>
        <h2 className='text-3xl flex justify-center p-[2%]'>Time Remaining: {Timeleft} Seconds</h2>
        <div className='flex justify-center my-[5vh]'>
          {StartDisp && <button onClick={handleStart} className='bg-black text-3xl font-bold text-lime-400 p-[2%] rounded-xl'>Start</button>}
          {ScorebtnDisp && (<button onClick={handleScore} className='bg-black text-3xl font-bold text-lime-400 p-[2%] rounded-xl'>+</button>)}
        </div>
      </div>
    </div>
  );
}

export default Maxcountgame;
