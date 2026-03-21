import { useCallback, useState, useRef } from 'react'

import './App.css'

function App() {
  let [length, setLength] = useState(8)
  let [number, setNumberAllowed] = useState(true)
  let [character, setCharacterAllowed] = useState(true)
  let [pasword, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(character) str +="!@#$%^&*()_+~`|}{[]:;?><,./-="
    for(let i=0; i<length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  },[length,number,character,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    if(pasword){
      passwordRef.current?.select()
      navigator.clipboard.writeText(pasword)
      alert("Password copied to clipboard!")
      }
    },[pasword])
    return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg py- 4 px-4 mt-8 mb-12 text-white bg-gray-400'>
      <h1 className='flex flex-wrap bg-kblac py-2 px-4 text-gray-700 text-3xl font-bold justify-center items-center my-4'>
      Password Generator
    </h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={pasword}
      className="outline-none w-full px-1 py-3 text-black" 
      placeholder="Password" 
      ref={passwordRef}
      readOnly />
      <button
      className='bg-blue-400  text-white hover:bg-blue-600 py-0.5 px-3 shrink-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      onClick={copyPasswordToClipboard} >
        Copy
      </button>
    </div>
    <div className='flex text-sm gap-4 gap-x-4 my-4'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}} />
        <label> Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        checked={number}
        onChange={(e)=>{setNumberAllowed(e.target.checked)}}
         />
        <label htmlFor="number"> Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        checked={character}
        onChange={()=>{setCharacterAllowed((prev)=>!prev)}}
         />
        <label htmlFor="character"> Character</label>
      </div>
    </div>
    <div className='flex justify-center gap-y-4'>
      <button 
      onClick={passwordGenerator}
      className='bg-green-700  text-white hover:bg-green-900 mb-4 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500' >
        Generate Password
      </button>
    </div>
    </div>
  )
}

export default App
