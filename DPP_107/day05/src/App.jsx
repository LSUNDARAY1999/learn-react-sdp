import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <Routes>
      {/* Login page – NO navbar */}
      <Route path="/" element={<Login />} />

      {/* Home page – WITH navbar */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      {/* About page – WITH navbar */}
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
          </>
        }
      />

      {/* Contact page – WITH navbar */}
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
          </>
        }
      />
    </Routes>
  )
}

export default App

