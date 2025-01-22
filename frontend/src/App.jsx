import { Routes, Route } from'react-router-dom'
import Layout from './components/layouts/Layout'
import Homepage from './pages/Homepage'
import SignPage from './pages/auth/SignPage'
import LoginPage from './pages/auth/LoginPage'

function App() {

  return <Layout>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/signup' element={<SignPage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  </Layout>
}

export default App
