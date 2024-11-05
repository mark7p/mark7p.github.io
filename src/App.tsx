
import { useEffect } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import { Routes, Route  } from 'react-router-dom'
import Privacy from './components/NoteCraftr/Privacy/Privacy'

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
    const mousePos = {x: e.pageX, y: e.pageY};
    const pressed = e.buttons !== 0;
    const backgroundStyle = `radial-gradient(${pressed ? 650 : 600}px at ${mousePos.x}px ${mousePos.y}px, rgba(27, 66, 66, 0.15), transparent 80%)`;
    document.body.style.background = backgroundStyle;
  }

  return (
    <>
      <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/notecraftr-privacy" element={<Privacy></Privacy>}></Route>
          </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
