import './App.css'
import { Route, Routes } from 'react-router'
import './pages/Home'
import './pages/Students'
import './pages/CreationPage'

function App() {
  ;<main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="" element={<Students />} />
      <Route path="" element={<CreationPage />} />
    </Routes>
  </main>
}

export default App
