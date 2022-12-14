import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Students from './pages/Students'
import CreationPage from './pages/CreationPage'
import Nav from './components/Nav'
import './styling.css'

const App = () => {
  return (
    <main>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CreationPage />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </main>
  )
}

export default App
