import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomeSlide from './pages/HomeSlide';
import Primeiro from './pages/Primeiro';
import Segundo from './pages/Segundo';
import Terceiro from './pages/Terceiro';
import Quarto from './pages/Quarto';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSlide />} />
        <Route path="/primeiro" element={<Primeiro />} />
        <Route path="/segundo" element={<Segundo />} />
        <Route path="/terceiro" element={<Terceiro />} />
        <Route path="/quarto" element={<Quarto />} />
      </Routes>
    </Router>
  )
}

export default App
