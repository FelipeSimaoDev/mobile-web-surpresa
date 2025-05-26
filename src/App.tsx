import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeSlide from './pages/HomeSlide';
import Slide1 from './pages/Slide1';
import Slide2 from './pages/Slide2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSlide />} />
        <Route path="/slide1" element={<Slide1 />} />
        <Route path="/slide2" element={<Slide2 />} />
      </Routes>
    </Router>
  )
}

export default App
