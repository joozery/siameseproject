import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Festival from './pages/Festival'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen flex flex-col">
            <MainNavbar />
            <main className="flex-1">
              <Home />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/login" element={
          <div className="min-h-screen">
            <Login />
          </div>
        } />
        <Route path="/signup" element={
          <div className="min-h-screen">
            <SignUp />
          </div>
        } />
        <Route path="/festival" element={
          <div className="min-h-screen flex flex-col">
            <MainNavbar />
            <main className="flex-1">
              <Festival />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
