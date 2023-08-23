import './App.css'
import Home from './Home.jsx'
import Problem from './Problem'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problem />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
