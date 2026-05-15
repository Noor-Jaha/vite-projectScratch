<<<<<<< HEAD
import { useState } from 'react';
import './App.css'
import Home from './pages/Home';
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
>>>>>>> 19d13630ec1299036c6a8985bb7620c78e0568fa

const Greeting = ({ name, age }) => {
  return (
    <h1>
      hello, I am {name} , and I am {age} years old,
    </h1>
  )
}



function App() {
<<<<<<< HEAD
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

=======
const [count, setCount] = useState("");


const hadleChange =(e) => {
  const val = e.target.value;
console.log(val)

}
  return (
    <>
      <div >
     <input type="text" placeholder='name...' onChange={hadleChange} />
      {count}
      </div>
    </>
  )
}
>>>>>>> 19d13630ec1299036c6a8985bb7620c78e0568fa
export default App;

