import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Feature from './pages/Feature.tsx'
import Cta from './pages/Cta.tsx'
import Testimonials from './pages/Testimonials.tsx'
import Blog from './pages/Blog.tsx'
import Contact from './pages/Contact.tsx'
import Footer from './pages/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Feature />
    <Blog />
    <Testimonials />
    <Cta />
    <Contact />
    <Footer />
  </StrictMode>,
)
