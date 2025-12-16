import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Festival from './pages/Festival'
import Market from './pages/Market'
import Conference from './pages/Conference'
import News from './pages/News'
import About from './pages/About'
import AdminLayout from './components/admin/AdminLayout'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminAgenda from './pages/admin/AdminAgenda'
import AdminSpeakers from './pages/admin/AdminSpeakers'
import AdminParticipants from './pages/admin/AdminParticipants'
import AdminAnalytics from './pages/admin/AdminAnalytics'
import AdminMultimedia from './pages/admin/AdminMultimedia'
import AdminETicket from './pages/admin/AdminETicket'
import AdminManagement from './pages/admin/AdminManagement'
import AdminGallery from './pages/admin/AdminGallery'
import AdminSponsors from './pages/admin/AdminSponsors'
import AdminHeroSlides from './pages/admin/AdminHeroSlides'
import AdminUpdates from './pages/admin/AdminUpdates'
import AdminInquiries from './pages/admin/AdminInquiries'
import UpdateDetail from './pages/UpdateDetail'



function App() {
  return (
    <Router>
      <Toaster position="top-right" richColors closeButton />
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
        <Route path="/conference" element={
          <div className="min-h-screen flex flex-col">
            <MainNavbar />
            <main className="flex-1">
              <Conference />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/news" element={
          <div className="min-h-screen flex flex-col">
            <MainNavbar />
            <main className="flex-1">
              <News />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/about" element={
          <div className="min-h-screen flex flex-col">
            <MainNavbar />
            <main className="flex-1">
              <About />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/updates/:id" element={
          <div className="min-h-screen flex flex-col">
            <MainNavbar />
            <main className="flex-1">
              <UpdateDetail />
            </main>
            <Footer />
          </div>
        } />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />

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
        <Route path="/admin/multimedia" element={
          <AdminLayout>
            <AdminMultimedia />
          </AdminLayout>
        } />
        <Route path="/admin/management" element={
          <AdminLayout>
            <AdminManagement />
          </AdminLayout>
        } />
        <Route path="/admin/gallery" element={
          <AdminLayout>
            <AdminGallery />
          </AdminLayout>
        } />
        <Route path="/admin/sponsors" element={
          <AdminLayout>
            <AdminSponsors />
          </AdminLayout>
        } />
        <Route path="/admin/hero-slides" element={
          <AdminLayout>
            <AdminHeroSlides />
          </AdminLayout>
        } />
        <Route path="/admin/updates" element={
          <AdminLayout>
            <AdminUpdates />
          </AdminLayout>
        } />
        <Route path="/admin/inquiries" element={
          <AdminLayout>
            <AdminInquiries />
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
