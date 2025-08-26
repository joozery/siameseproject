import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Festival from './pages/Festival'
import Market from './pages/Market'
import AdminLayout from './components/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminAgenda from './pages/admin/AdminAgenda'
import AdminSpeakers from './pages/admin/AdminSpeakers'
import AdminParticipants from './pages/admin/AdminParticipants'
import AdminAnalytics from './pages/admin/AdminAnalytics'
import AdminMultimedia from './pages/admin/AdminMultimedia'
import AdminETicket from './pages/admin/AdminETicket'

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
        <Route path="/market" element={
          <div className="min-h-screen flex flex-col">
            <MainNavbar />
            <main className="flex-1">
              <Market />
            </main>
            <Footer />
          </div>
        } />

        {/* Admin Routes */}
        <Route path="/admin" element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        } />
        <Route path="/admin/agenda" element={
          <AdminLayout>
            <AdminAgenda />
          </AdminLayout>
        } />
        <Route path="/admin/speakers" element={
          <AdminLayout>
            <AdminSpeakers />
          </AdminLayout>
        } />
        <Route path="/admin/participants" element={
          <AdminLayout>
            <AdminParticipants />
          </AdminLayout>
        } />
        <Route path="/admin/analytics" element={
          <AdminLayout>
            <AdminAnalytics />
          </AdminLayout>
        } />
        <Route path="/admin/multimedia" element={
          <AdminLayout>
            <AdminMultimedia />
          </AdminLayout>
        } />
        <Route path="/admin/eticket" element={
          <AdminLayout>
            <AdminETicket />
          </AdminLayout>
        } />
        <Route path="/admin/*" element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App
