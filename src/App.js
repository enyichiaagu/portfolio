import Homepage from './pages/Homepage'
import Projectspage from './pages/ProjectsPage'
import SingleProjectPage from './pages/SingleProjectPage'
import ContactPage from './pages/ContactPage'
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
        <Route path='projects' element={<Projectspage />} />
        <Route path="projects/:project" element={<SingleProjectPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;