import { Routes ,Route } from 'react-router-dom'
// import './App.css'
import Home from './Page/Home'
import Room from './Page/Room'

function App() {
   
  return (
    <>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/room/:roomId' element={<Room/>}/>
       </Routes>
    </>
  )
}

export default App
