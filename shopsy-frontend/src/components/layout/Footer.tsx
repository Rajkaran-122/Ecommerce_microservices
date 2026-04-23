import React from 'react';
import { Mail, Globe, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-background border-t border-foreground/5 pt-32 pb-16 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_120%,hsl(var(--foreground)/0.03),transparent_70%)] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          
          {/* Brand & Manifesto */}
          <div className="col-span-1 md:col-span-12 lg:col-span-6">
            <Link to="/" className="flex items-center gap-4 mb-10 group w-fit">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-foreground text-background font-black text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                S
              </div>
              <span className="text-3xl font-black text-foreground tracking-tighter uppercase font-outfit">
                Shopsy
              </span>
            </Link>
            <p className="body-pro !text-lg max-w-md mb-12">
              The premier destination for modern elite living. Curating the world's most exceptional hardware and lifestyle aesthetics with a zero-compromise philosophy.
            </p>
            <div className="flex items-center gap-6">
              {[Globe, MessageCircle, LinkIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="col-span-1 md:col-span-6 lg:col-span-3">
            <h3 className="caps-micro !text-foreground/40 mb-10">Navigation</h3>
            <ul className="flex flex-col gap-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Products', path: '/products' },
                { name: 'Electronics', path: '/products?category=Electronics' },
                { name: 'Accessories', path: '/products?category=Accessories' },
                { name: 'The Vault', path: '/cart' }
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item.path} 
                    className="group flex items-center gap-3 text-lg font-bold text-foreground/60 hover:text-foreground transition-all duration-300"
                  >
                    <span className="w-0 h-px bg-foreground group-hover:w-4 transition-all duration-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Intelligence & Updates */}
          <div className="col-span-1 md:col-span-6 lg:col-span-3">
            <h3 className="caps-micro !text-foreground/40 mb-10">Intelligence</h3>
            <p className="text-sm text-foreground/40 font-medium mb-8 leading-relaxed">
              Join our priority list for exclusive access to the Velocity Drop 01 and neural series updates.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Secure Email" 
                className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl py-5 px-6 pr-14 text-sm focus:outline-none focus:border-foreground/30 transition-all placeholder:text-foreground/20" 
              />
              <button className="absolute right-2 top-2 w-11 h-11 flex items-center justify-center rounded-xl bg-foreground text-background hover:scale-105 transition-all">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-t border-foreground/5">
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20">
            <span>&copy; {new Date().getFullYear()} Digital Metro</span>
            <div className="w-1 h-1 rounded-full bg-foreground/10" />
            <span>Project: Shopsy Core</span>
          </div>
          <div className="flex gap-10 mt-8 md:mt-0">
            {['Privacy', 'Protocol', 'Licensing'].map((item, i) => (
              <a key={i} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 hover:text-foreground/60 transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Extreme Bottom Decorative Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <span className="text-[15vw] font-black uppercase tracking-tighter leading-none">VELOCITY ENGINE</span>
      </div>
    </footer>
  );
};

export default Footer;
