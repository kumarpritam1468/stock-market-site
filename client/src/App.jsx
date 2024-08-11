import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './layouts/Layout'
import DashboardLayout from './layouts/DashboardLayout';

import Support from './components/Support'

import HomePage from "./pages/HomePage"
import About from './pages/About'
import Products from './pages/Products'
import Pricing from './pages/Pricing'

import Dashboard from './pages/Dashboard';

import Signup from './pages/Signup'
import Login from './pages/Login'
import { useAuthUser } from './hooks/useAuthUser';

function App() {

  const authUser = useAuthUser();

  return (
    <main>
      <Routes>
        <Route element={<Layout />}> {/* Layout component contains Navbar and Footer */}
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/support' element={<Support />} />
        </Route>
        <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to='/dashboard' />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='' element={authUser ? <Dashboard /> : <Navigate to='/' />} />
        </Route>
      </Routes>

    </main>
  )
}

export default App
