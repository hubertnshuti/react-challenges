import {useState} from 'react';
import './App.jsx';
import './App.css'

export default function App(){
  return (
    <HelloWorld/>
  )
}

function HelloWorld(){
  return (
    <>
      <div className='text-3xl flex justify-center items-center h-screen border-2'>
        <div className='text-blue-500 font-bold border rounded-2xl p-4 size-70 flex justify-center items-center'>Hello World!</div>
      </div>
    </>
  )
}