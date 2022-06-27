import Homepage from './pages/Homepage'
import Projectspage from './pages/ProjectsPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div>
      <Navbar />        
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='projects' element={<Projectspage/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;