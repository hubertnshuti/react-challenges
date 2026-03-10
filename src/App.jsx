import { useState } from "react";
import "./App.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-proximity">
      <div className="h-screen snap-start">
        <HelloWorld />
      </div>

      <div className="h-screen snap-start">
        <HandleUserClick />
      </div>

      <div className="h-screen snap-start flex justify-center items-center gap-20">
        {/* <Button oneBtnClick={() => alert('User clicked Button 1')}>
          Button 1
        </Button>
        <Button oneBtnClick={() => alert('User clicked Button 2')}>
          Button 2
        </Button>
        <Button oneBtnClick={() => alert('User clicked Button 3')}>
          Button 3
        </Button> */}
        {[1, 2, 3].map((n) => (
          <Button key={n} oneBtnClick={() => alert(`User clicked Button ${n}`)}>
            Button {n}
          </Button>
        ))}
      </div>
    </div>
  );
}

function HelloWorld() {
  return (
    <>
      <h3 className="text-4xl text-blue-500 font-bold text-center">
        First component Hello World!
      </h3>
      <div className="text-3xl flex justify-center items-center h-screen">
        <div className="text-blue-500 font-bold border rounded-2xl p-4 size-70 flex justify-center items-center cursor-pointer">
          Hello World!
        </div>
      </div>
    </>
  );
}

function HandleUserClick() {
  const handleclick = () => {
    alert("You clicked!!");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={handleclick}
        className="text-2xl font-medium text-green-400 border px-6 py-2 rounded-2xl mt-52 mb-30 w-50 block mx-auto hover:text-white hover:bg-green-400 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 ease-in-out cursor-pointer"
      >
        Click Me
      </button>
    </div>
  );
}

function Button(props) {
  return (
    <>
      <button
        onClick={props.oneBtnClick}
        className="text-2xl font-medium text-green-400 border px-6 py-2 rounded-2xl inline hover:text-white hover:bg-green-400 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 ease-in-out cursor-pointer"
      >
        {props.children}
      </button>
    </>
  );
}
