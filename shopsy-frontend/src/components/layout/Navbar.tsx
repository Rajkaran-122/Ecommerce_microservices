import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-700 ${
      isScrolled ? 'bg-background/80 backdrop-blur-2xl border-b border-foreground/10 shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container h-full mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-foreground text-background font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-500 translate-y-[1px]">
            S
          </div>
          <span className="text-2xl font-black text-foreground tracking-tighter uppercase font-outfit">
            Shopsy
          </span>
        </Link>

        {/* Search - Desktop */}
        <div className="hidden md:flex relative flex-1 max-w-md mx-12 group">
          <input 
            type="text" 
            placeholder="Search premium curation..." 
            className="w-full bg-foreground/5 border border-foreground/10 rounded-full py-2.5 pl-12 pr-4 text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-all duration-500 placeholder:text-muted-foreground/50"
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors duration-500" />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="caps-micro !text-foreground hover:opacity-60 transition-all duration-300 relative group/link">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-500 group-hover/link:w-full" />
          </Link>
          <Link to="/products" className="caps-micro !text-foreground hover:opacity-60 transition-all duration-300 relative group/link">
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-500 group-hover/link:w-full" />
          </Link>
          <Link to="/products?category=Electronics" className="caps-micro !text-foreground hover:opacity-60 transition-all duration-300 relative group/link">
            Categories
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-500 group-hover/link:w-full" />
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-foreground/10 text-foreground transition-all duration-500"
            title={theme === 'dark' ? "Light Mode" : "Dark Mode"}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/products" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-foreground/10 text-foreground transition-all duration-500">
            <User size={20} />
          </Link>
          
          <Link to="/cart" className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-foreground/10 text-foreground transition-all duration-500 group/cart">
            <ShoppingBag size={20} className="group-hover/cart:scale-110 transition-transform duration-500" />
            <span className="absolute -top-1 -right-1 bg-foreground text-background text-[10px] font-bold h-5 min-w-[20px] px-1.5 rounded-full flex items-center justify-center border-2 border-background shadow-lg">
              3
            </span>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-foreground/10 text-foreground transition-all duration-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-foreground/10 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-8 py-8 gap-6">
          <Link to="/" className="text-2xl font-black text-foreground hover:pl-4 transition-all duration-500" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" className="text-2xl font-black text-foreground hover:pl-4 transition-all duration-500" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/products?category=Electronics" className="text-2xl font-black text-foreground hover:pl-4 transition-all duration-500" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
          <Link to="/cart" className="text-2xl font-black text-foreground hover:pl-4 transition-all duration-500" onClick={() => setIsMobileMenuOpen(false)}>The Vault</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
