import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Students from './pages/Students'
import CreationPage from './pages/CreationPage'
import Nav from './components/Nav'

const App = () => {
  return (
    <main>
      <header className="header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<Students />} />
        <Route path="" element={<CreationPage />} />
      </Routes>
    </main>
  )
}

export default App
