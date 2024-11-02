
import { useEffect } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import Privacy from './components/NoteCraftr/Privacy/Privacy'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseEvent)
    window.addEventListener("mousedown", handleMouseEvent)
    window.addEventListener("mouseup", handleMouseEvent)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseEvent)
      window.removeEventListener("mousedown", handleMouseEvent)
      window.removeEventListener("mouseup", handleMouseEvent)
    }
  }, [])

  function handleMouseEvent(e: MouseEvent) {
    const mousePos = {x: e.clientX, y: e.clientY};
    const pressed = e.buttons !== 0;
    const backgroundStyle = `radial-gradient(${pressed ? 650 : 600}px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    document.body.style.background = backgroundStyle;
  }

  return (
    <Router>
      <Menu></Menu>
      <Home></Home>
      {/* <Privacy></Privacy> */}
      <Footer></Footer>
    </Router>
  )
}

export default App
