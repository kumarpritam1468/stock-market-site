import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Support from './components/Support'
import Footer from './components/Footer'

import HomePage from "./pages/HomePage"
import About from './pages/About'
import Products from './pages/Products'
import Pricing from './pages/Pricing'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
