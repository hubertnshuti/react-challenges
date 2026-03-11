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
      <div className="h-screen snap-start flex justify-center items-center">
        <AnimalsList2 animals={animals} />
      </div>
      <div className="h-screen snap-start flex justify-center items-center bg-gray-200">
        <Form/>
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

function Form(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(firstnameError && lastnameError){
      alert("Both First Name and Last Name must be at least 6 characters.");
      return;
    }

    if(!firstnameError && !lastnameError){
      alert(`Welcome ${firstName} ${lastName}`);
    }else{
      alert(firstnameError || lastnameError)
    }
  }

  const handleUsername = (e) => {
    const value = e.target.value;
    const fieldName = e.target.name; 

    if (fieldName === "fname") {
      setFirstName(value);

      if (value.length < 6) {
        setFirstnameError("First Name is less than required 6 characters");
      } else {
        setFirstnameError(null);
      }
    } else {
      setLastName(value);

      if (value.length < 6) {
        setLastnameError("Last Name is less than required 6 characters");
      } else {
        setLastnameError(null);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center  w-1/3 h-5/6 p-10 shadow-2xl rounded-4xl">
        <h2 className="text-3xl font-medium font-title mb-10 text-gray-600 tracking-tight">
          Welcome <span className="text-red-400">Back</span>
        </h2>
        <input name="fname" placeholder="First Name" value={firstName} onChange={handleUsername} className="w-4/5 text-[18px] outline outline-slate-400 rounded-sm p-3 focus:outline-2"></input> <br />
        <input name="lname" placeholder="Last Name" value={lastName} onChange={handleUsername} className="w-4/5 text-[18px] outline outline-slate-400 rounded-sm p-3 focus:outline-2 transition-all duration-100"></input><br />
        <button className="text-[18px] text-white font-black px-8 py-3 bg-red-400 rounded-2xl shadow-md w-4/5 hover:text-red-500 hover:bg-white hover:border hover:border-red-400 transition-colors duration-300 cursor-pointer ">Submit</button>
      </form>
    </>
  )
}

