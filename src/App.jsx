import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TransitionProvider } from './context/TransitionContext'
import TransitionOverlay from './components/TransitionOverlay'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

function Layout() {
  return (
    <>
      <TransitionOverlay />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <BrowserRouter>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <TransitionProvider>
          <Layout />
        </TransitionProvider>
      )}
    </BrowserRouter>
  )
}
