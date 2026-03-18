import { useState } from 'react'



function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className={`w-full h-screen duration-100 `}
        style={{ backgroundColor: color }}>
          <p className='h-16 text-amber-400 flex flex-wrap justify-center '>Background Changer</p>
        <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-5'>
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-2xl'>
          <button
          onClick={()=> setColor("red")}
          className='outline-none px-4 rounded-2xl text-white'
          style={{backgroundColor: 'red'}}>Red</button>
          <button
          onClick={()=> setColor("green")}
          className='outline-none px-4 rounded-2xl text-white'
          style={{backgroundColor: 'green'}}>Green</button>
          <button
          onClick={()=> setColor("blue")}
          className='outline-none px-4 rounded-2xl text-white'
          style={{backgroundColor: 'blue'}}>Blue</button>
          <button
          onClick={()=> setColor("yellow")}
          className='outline-none px-4 rounded-2xl text-black'
          style={{backgroundColor: 'yellow'}}>Yellow</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
