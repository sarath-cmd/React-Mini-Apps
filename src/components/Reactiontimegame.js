import {useState} from 'react'

function Reactiontimegame() {

  const [Dispred, setDispred] = useState(false)
  const [Dispgreen, setDispgreen] = useState(false)
  const [Dispbtn, setDispbtn] = useState(true)
  const [scoregreen, setscoregreen] = useState(false)
  const [scorered, setscorered] = useState(false)
  const [result, setresult] = useState(0)
  const [time, settime] = useState(0)
  const [ftime, setftime] = useState(0)

  const handleStart = () => {
    setDispbtn(false)
    setDispred(true)
    settime(0)
    // setruntime(true)
    setTimeout(() => {
      setDispred(false)
      setDispgreen(true)
      settime(Date.now)
    }, Math.random() * 10000);
  }
  const handlered = () => {
    // setruntime(false)
    settime(0)
    setftime(0)
    setscorered(true)
    setDispred(false)
    setDispbtn(true)
    setscoregreen(false)
  }
  const handlegreen = () => {
    setftime(Date.now)
    setscoregreen(true)
    let reactionTime = (ftime - time) / 1000;
    setresult(Math.floor(reactionTime * 100) % 1000)
    setDispgreen(false)
    setDispbtn(true)
    setscorered(false)
  }
  
  return (
    <section>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>Reaction Time Game</h1>
      {Dispbtn && <button onClick={handleStart} className='mx-[45vw] p-[1%] rounded-2xl mt-[35vh] bg-black font-semibold text-lime-400'>Start Game</button>}
      {Dispred && !Dispbtn && <button className='h-[35vh] w-[20vw] bg-red-600 fixed top-[35vh] left-[40vw]' onClick={handlered}></button>}
      {scorered && Dispbtn && <h2 className='flex justify-center mt-[2%] text-2xl font-semibold'>You clicked too early!</h2>}
      {Dispgreen && !Dispbtn &&<button className='h-[35vh] w-[20vw] bg-lime-600 fixed top-[35vh] left-[40vw]' onClick={handlegreen} ></button>}
      {scoregreen && Dispbtn && <h2 className='flex justify-center mt-[2%] text-2xl font-semibold'>Your reaction time was {result}ms</h2>}
    </section>
  );
}

export default Reactiontimegame;
