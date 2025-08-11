import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Home } from './pages/Seguro'
import { Planes } from './pages/Planes'
import { Resumen } from './pages/Resumen'
import { Terminos } from './pages/Terminos'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

function App() {

  return (
    <>

    <Navbar/>
    <Footer/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
    </>
  )
}

export default App
