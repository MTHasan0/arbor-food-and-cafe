import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>



    </>
  )
}

export default App
