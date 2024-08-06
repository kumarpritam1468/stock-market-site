import { Route, Routes } from 'react-router-dom'

import HomePage from "./pages/HomePage"
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
