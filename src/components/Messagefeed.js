import {useState, useEffect} from 'react'
// import './Messagefeed.css'

function Messagefeed() {

  const Defaultmsg =[
    "The message typed and send are displayed", 
    "The typed messages are also stored at the Local Storage of this Browser",
  ]
  const [Inputmsg, setInputmsg] = useState([])
  const [Display, setDisplay] = useState(false)

  useEffect(() => {
    // Retrieve stored messages from local storage
    const storedMessages = JSON.parse(localStorage.getItem('userMessages')) || [];
    setInputmsg(storedMessages);
    setDisplay(true);
  }, []); 
  const handleEnter = (e) => {
    if (e.key === 'Enter')
    { 
      setDisplay(true)
      localStorage.setItem('userMessages', JSON.stringify([...Inputmsg, e.target.value]));
      setInputmsg((prevInputmsg) => [...prevInputmsg, e.target.value]);
    }
  }

  return (
    <section className="" >
      <h1 className='flex justify-center p-[1%] text-3xl font-bold'>Messagefeed</h1>
      <div className="w-[52vw] inline-block mx-[23vw] mt-[2%]">
        {(Defaultmsg.map((Defaultmsg, index) => (
            <p key={index} className='w-[50vw] overflow-auto p-[2%] bg-slate-300 rounded-full mb-[2%] font-semibold'>{Defaultmsg}</p>
        )))} 
        {Display && Inputmsg.map((Inputmsg) => (
            <p className='w-[50vw] overflow-auto p-[2%] bg-slate-300 rounded-full mb-[2%] font-semibold'>{Inputmsg}</p>
        ))}
      </div>
      <h3 className='flex justify-center w-[100vw] fixed bottom-[15%] left-[0vw] font-bold text-xl'>Press Enter in the keyboard to send the message</h3>
      <input type="text" onKeyDown={handleEnter} onChange={handleEnter} placeholder="Enter your message" className='w-[50vw] p-[1%] inline-block rounded-full fixed left-[23vw] bottom-[20%] border border-solid border-black' />
    </section>
  );
}

export default Messagefeed;
