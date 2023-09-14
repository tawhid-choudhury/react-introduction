import './App.css'
import Courses from './components/Courses/Courses'

function App() {

  return (
    <div className='max-w-[1320px] m-auto'>
      <h1 className='text-black text-[32px] font-bold text-center mt-[60px]'>Course Registration</h1>
      
      {/* container */}
      <div className='flex flex-wrap'>
          {/* cards container */}
          <div>
            <Courses></Courses>
          </div>


          {/* cart */}
          <div>

          </div>
      </div>
    </div>
  )
}

export default App
