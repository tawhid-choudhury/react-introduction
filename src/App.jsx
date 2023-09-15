import './App.css'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
const [cart,setCart] = useState([]);
const [creditRemaining, setCreditRemaining ] = useState(20);
const [creditTaken,setCreditTaken] = useState(0);
const [price,setPrice] = useState(0);

const handleSelect = (item) => {
  if(creditTaken + item.credit_hours > 20){
    return alert("credit_hours exedeed")
  }

  const exists = cart.find((i)=> i===item);
  if(exists){
    return alert("taken")
  }
  setCart([...cart, item]);
  setCreditTaken(creditTaken + item.credit_hours);
  setCreditRemaining(creditRemaining - item.credit_hours);
  setPrice(price + item.price);
}

  return (
    <div className='max-w-[1320px] m-auto'>
      <h1 className='text-black text-[32px] font-bold text-center mt-[60px]'>Course Registration</h1>
      
      {/* container */}
      <div className='flex'>
          {/* cards container */}
          <div>
            <Courses handleSelect={handleSelect} ></Courses>
          </div>


          {/* cart */}
          <div>
        <Cart 
        cart={cart} 
        creditTaken={creditTaken} 
        creditRemaining={creditRemaining}
        price = {price}
        ></Cart>
          </div>
      </div>
    </div>
  )
}

export default App
