import { useState } from "react";
import "./App.jsx";
import "./App.css";

export default function App() {
let [count, setCount] = useState(0);
const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  const handleclick = () => {
    alert("You clicked!!");
  };
  const counter = () => {
    ++count
    setCount(count);    
  }
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-proximity">
      <div className="h-screen snap-start">
        <HelloWorld />
      </div>

      <div className="h-screen snap-start flex justify-center items-center">
        <MyButton onClick={handleclick}>Click Me</MyButton>
      </div>

      <div className="h-screen snap-start flex justify-center items-center gap-10">
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
          <MyButton key={n} onClick={() => alert(`User clicked Button ${n}`)}>
            Button {n}
          </MyButton>
        ))}
      </div>
      <div className="h-screen snap-start flex flex-col items-center justify-center gap-2">
        <p className="text-center">Button has been Clicked: {count} times.</p>
        <MyButton onClick={counter} >Click to Count... and I added text to test my Tailwind skills</MyButton>
      </div>
      <div className="h-screen snap-start flex items-center justify-center">
        <AnimalsList/>
      </div>
      <div className="flex justify-center items-center h-screen">
        <AnimalsList2 animals={animals} />
      </div>
    </div>
  );
}

function HelloWorld() {
  return (
    <>
      <h3 className="text-4xl text-blue-500 font-bold text-center">
        Welcome to my React Challenges!
      </h3>
      <div className="text-3xl flex justify-center items-center h-screen">
        <div className="text-blue-500 font-bold border rounded-2xl p-4 size-70 flex justify-center items-center cursor-pointer">
          Hello World!
        </div>
      </div>
    </>
  );
}

function MyButton(props) {
  return (
    <>
      <button
        onClick={props.onClick}
        className="text-2xl font-medium text-green-400 border px-6 py-2 rounded-2xl mt-52 mb-30 w-auto block mx-auto hover:text-white hover:bg-green-400 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
      >
        {props.children}
      </button>
    </>
  );
}

// function Button(props) {
//   return (
//     <>
//       <button
//         onClick={props.oneBtnClick}
//         className="text-2xl font-medium text-green-400 border px-6 py-2 rounded-2xl inline hover:text-white hover:bg-green-400 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 ease-in-out cursor-pointer">
//         {props.children}
//       </button>
//     </>
//   );
// }

function AnimalsList(){
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  const getPostfix = (index) => {
    if ([0, 4, 5].includes(index)) return 'th';
    if (index === 1) return 'st';
    if (index === 2) return 'nd';
    if (index === 3) return 'rd';
    return 'th'; 
  }
  
  return (
    <>
      <h4>Animals List</h4>
      <ul>
        {animals.map((animal, index) => {
          return <li>This is the {index}{getPostfix(index)} animal, <span className="text-blue-400 font-black font-[italic]">{animal}</span></li>
        }
        )}
      </ul>
    </>
  )
}

function AnimalsList2(props) {
  const emojis = {
    dog: "🐶",
    cat: "🐱",
    chicken: "🐔",
    cow: "🐮",
    sheep: "🐑",
    horse: "🐴"
  };

  return (
    <div className="border rounded-md w-60 overflow-hidden">
      {props.animals.map((animal) => (
        <div
          key={animal}
          className="flex items-center gap-3 p-3 border-b last:border-b-0"
        >
          <span className="text-xl">{emojis[animal]}</span>
          <span>{animal}</span>
        </div>
      ))}
    </div>
  );
}