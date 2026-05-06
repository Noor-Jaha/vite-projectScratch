import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Greeting = ({ name, age }) => {
  return (
    <h1>
      hello, I am {name} , and I am {age} years old,
    </h1>
  )
}



function App() {
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
export default App;