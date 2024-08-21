import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './layouts/Layout'
import DashboardLayout from './layouts/DashboardLayout';

import Support from './components/Support'

import HomePage from "./pages/Landing-Page/HomePage"
import About from './pages/Landing-Page/About'
import Products from './pages/Landing-Page/Products'
import Pricing from './pages/Landing-Page/Pricing'

import Dashboard from './pages/Dashboard/Dashboard';
import Holdings from './pages/Dashboard/Holdings';

import Signup from './pages/Signup'
import Login from './pages/Login'

import { useAuthUser } from './hooks/useAuthUser';
import Positions from './pages/Dashboard/Positions';
import Funds from './pages/Dashboard/Funds';

function App() {

  const authUser = useAuthUser();

  return (
    <main>
      <Routes>
        <Route element={<Layout />}> {/* Layout component contains Navbar and Footer */}
          <Route path='/' element={!authUser ? <HomePage /> : <Navigate to='/login' />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/support' element={<Support />} />
        </Route>
        <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to='/dashboard' />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='' element={authUser ? <Dashboard /> : <Navigate to='/' />} />
          <Route path='/dashboard/holdings' element={authUser ? <Holdings /> : <Navigate to='/' />} />
          <Route path='/dashboard/positions' element={authUser ? <Positions /> : <Navigate to='/' />} />
          <Route path='/dashboard/funds' element={authUser ? <Funds /> : <Navigate to='/' />} />
        </Route>
      </Routes>

    </main>
  )
}

export default App
