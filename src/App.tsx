import { Outlet, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Seguro } from './pages/Seguro'
import { Planes } from './pages/Planes'
import { Resumen } from './pages/Resumen'
import { Terminos } from './pages/Terminos'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

function App() {

  return (
    <>

    <Navbar/>

     <Routes>
        <Route path="/" element={<Seguro />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>

    <Footer/>
    </>
  )
}

export default App
