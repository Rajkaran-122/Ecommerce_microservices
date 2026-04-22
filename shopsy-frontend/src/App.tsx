import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AIAssistant from './components/ui/AIAssistant';
import SmoothScroll from './components/layout/SmoothScroll';

import { useState, useEffect } from 'react';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/products" 
          element={
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
              <Products />
            </motion.div>
          } 
        />
        <Route 
          path="/product/:id" 
          element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <ProductDetail />
            </motion.div>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.4 }}>
              <Cart />
            </motion.div>
          } 
        />
        <Route path="/categories" element={<Products />} />
        <Route path="/deals" element={<Products />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-500">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="flex-1 overflow-hidden">
            <AnimatedRoutes />
          </main>
          <AIAssistant />
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
