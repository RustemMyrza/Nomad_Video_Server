import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header/Header.jsx'
import Content from './Content/Content.jsx'
import Marquee from './Footer/MarqueeLine.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <header>
        <Header/>
      </header>
      <main className='flex-grow h-[calc(100vh-14rem)] flex'>
        <Routes>
          <Route path="/branch/:branchId" element={<Content/>}/>
        </Routes>
      </main>
      <footer className="w-full overflow-hidden h-16">
        <Marquee text="Привет! Это бегущая строка 🚀" speed={50}/>
      </footer>
    </Router>
  )
}

export default App
