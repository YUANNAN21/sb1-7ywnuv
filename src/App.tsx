import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import BlogPage from './components/BlogPage'
import BlogPostPage from './components/BlogPostPage'
import Products from './components/Products'
import ContactUs from './components/ContactUs'
import Downloads from './components/Downloads'
import OEMServices from './components/OEMServices'
import OrderTracking from './components/OrderTracking'
import ScrollToTop from './components/ScrollToTop'
import ProductDetail from './components/ProductDetail'
import BrandPage from './components/BrandPage'
import { LanguageProvider } from './contexts/LanguageContext'
import ECatalog from './components/ECatalog'
import ECatalogDetail from './components/ECatalogDetail'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-100">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/oem-services" element={<OEMServices />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/brand/:brand" element={<BrandPage />} />
              <Route path="/ecatalog" element={<ECatalog />} />
              <Route path="/ecatalog/:id" element={<ECatalogDetail />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App