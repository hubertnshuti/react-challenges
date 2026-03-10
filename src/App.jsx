import {useState} from 'react';
import './App.jsx';
import './App.css'

export default function App(){
  return (
    <>
      <HelloWorld/>
      <HandleUserClick/>
    </>
  )
}

function HelloWorld(){
  return (
    <>
      <h3 className='text-4xl text-blue-500 font-bold text-center'>First component Hello World!</h3>
      <div className='text-3xl flex justify-center items-center h-screen'>
        <div className='text-blue-500 font-bold border rounded-2xl p-4 size-70 flex justify-center items-center cursor-pointer'>Hello World!</div>
      </div>
    </>
  )
}

function HandleUserClick(){
  const handleclick = () => {
    alert("You clicked!!")
  }
  return (
    <button onClick={handleclick} className='text-2xl font-medium text-green-400 border px-6 py-2 rounded-2xl mt-52 w-50 block mx-auto hover:text-white hover:bg-green-400 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 ease-in-out cursor-pointer'>Click Me</button>
  )
}