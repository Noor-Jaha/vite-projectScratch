import { useState } from 'react';
import './App.css'
import Home from './pages/Home';

const Greeting = ({ name, age }) => {
  return (
    <h1>
      hello, I am {name} , and I am {age} years old,
    </h1>
  )
}



function App() {
     const [show, setShow] = useState(true);


    const toggleClick = () => {
        setShow(!show)
       
    }

  return (
    <>
       <div>
                <button onClick={toggleClick
                }>{show ? "hide details" : " show details"}</button>
                <br/>
                {show && 
                <Home/>
                }
      </div>
    </>
  )   

  }

export default App;

