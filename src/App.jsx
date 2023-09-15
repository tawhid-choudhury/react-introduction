import './App.css'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
const [cart,setCart] = useState([]);

const handleSelect = (item) => {
  const exists = cart.find((i)=> i===item)
  if(exists){
    return alert("taken")
  }
  setCart([...cart, item]);
}

  return (
    <div className='max-w-[1320px] m-auto'>
      <h1 className='text-black text-[32px] font-bold text-center mt-[60px]'>Course Registration</h1>
      
      {/* container */}
      <div className='flex flex-wrap'>
          {/* cards container */}
          <div>
            <Courses handleSelect={handleSelect}></Courses>
          </div>


          {/* cart */}
          <div>
        <Cart cart={cart}></Cart>
          </div>
      </div>
    </div>
  )
}

export default App
