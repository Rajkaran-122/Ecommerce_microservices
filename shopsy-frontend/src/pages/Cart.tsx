import React, { useState } from 'react';
import { Trash2, ArrowRight, Lock, CreditCard, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_CART = [
  { id: 1, name: "Aura Noise-Canceling Headphones", price: 299.99, quantity: 1, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80", color: "Matte Black" },
  { id: 4, name: "Ceramic Pour-Over Kettle", price: 85.00, quantity: 2, image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=800&q=80", color: "Matte White" }
];

const Cart: React.FC = () => {
  const [cart, setCart] = useState(MOCK_CART);

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 150 ? 0 : 15.00;
  const total = subtotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-28 bg-background">
        <div className="w-32 h-32 bg-foreground/5 rounded-full flex items-center justify-center mb-10 animate-bounce-slow">
          <ShoppingBag size={48} className="text-foreground/20" />
        </div>
        <h2 className="display-title !text-4xl mb-4">Your Vault is Empty</h2>
        <p className="body-pro text-center max-w-sm mb-12">
          The pursuit of excellence begins with a single selection. Explore our latest curations.
        </p>
        <Link to="/products" className="group px-12 py-5 bg-foreground text-background font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_20px_50px_rgba(var(--foreground),0.2)]">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full pb-32 pt-40 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-foreground/5 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col mb-16 animate-slide-up-fade">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium mb-8 w-fit">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <span className="caps-micro">Checkout Phase 01</span>
          </div>
          <h1 className="section-title">The <span className="text-foreground/40 italic font-light">Vault.</span></h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Cart Items - Premium Minimalist */}
          <div className="flex-1 animate-slide-in-left">
            <div className="space-y-8">
              {cart.map((item, index) => (
                <div key={item.id} className="premium-card p-8 flex flex-col md:flex-row gap-8 items-center group animate-slide-up-fade" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Product Image */}
                  <div className="w-full md:w-40 h-40 bg-foreground/[0.03] rounded-3xl overflow-hidden border border-foreground/5 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                      <div>
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-bold text-2xl text-foreground hover:opacity-60 transition-all font-outfit uppercase tracking-tight line-clamp-1">{item.name}</h3>
                        </Link>
                        <p className="caps-micro !text-foreground/40 mt-2">{item.color} // ID: {item.id}00X</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-3 text-foreground/20 hover:text-red-500 hover:bg-red-500/5 rounded-full transition-all"
                        title="Remove from Vault"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-auto pt-6 border-t border-foreground/5 gap-6">
                      <div className="flex items-center glass-premium rounded-2xl p-1.5 border-foreground/5">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-10 h-10 flex items-center justify-center hover:bg-foreground hover:text-background rounded-xl transition-all font-bold text-lg">-</button>
                        <span className="w-14 text-center font-black text-foreground text-lg">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-10 h-10 flex items-center justify-center hover:bg-foreground hover:text-background rounded-xl transition-all font-bold text-lg">+</button>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <span className="text-foreground/30 text-xs font-bold uppercase tracking-widest mb-1">Unit: ${item.price.toFixed(2)}</span>
                        <span className="text-2xl font-black text-foreground tracking-tighter">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Loyalty / Promo */}
            <div className="mt-12 p-8 glass-premium rounded-[2.5rem] border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4 text-foreground/60">
                <ShieldCheck size={24} />
                <p className="text-sm font-medium tracking-tight">Authenticated and secure checkout managed by Shopsy Global Core.</p>
              </div>
              <div className="relative w-full md:w-auto">
                <input type="text" placeholder="Access Code" className="bg-foreground/5 border border-foreground/10 rounded-full py-3 px-6 pr-24 text-sm focus:outline-none focus:border-foreground/30 w-full" />
                <button className="absolute right-1.5 top-1.5 px-4 py-1.5 bg-foreground text-background text-[10px] font-black uppercase tracking-widest rounded-full hover:opacity-80 transition-all">Apply</button>
              </div>
            </div>
          </div>

          {/* Right: Order Summary - Pro Glassmorphism */}
          <div className="w-full lg:w-[400px] flex-shrink-0 animate-slide-in-right">
            <div className="glass-premium rounded-[3rem] p-10 sticky top-32 border-foreground/10 shadow-2xl">
              <h2 className="font-bold text-2xl text-foreground mb-10 tracking-tight font-outfit uppercase">Manifest</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center">
                  <span className="caps-micro !text-foreground/40">Base Valuation</span>
                  <span className="text-xl font-bold text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="caps-micro !text-foreground/40">Logistics</span>
                  <span className="text-xl font-bold text-foreground">{shipping === 0 ? 'COMPLIMENTARY' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="caps-micro !text-foreground/40">Fiscal Assessment</span>
                  <span className="text-xl font-bold text-foreground">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="h-px w-full bg-foreground/10 mb-10" />

              <div className="flex justify-between items-center mb-12">
                <span className="text-lg font-black text-foreground uppercase tracking-widest">Total</span>
                <div className="text-right">
                  <span className="text-4xl font-black text-foreground tracking-tighter">
                    ${total.toFixed(2)}
                  </span>
                  <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest mt-1">Net Valuation</p>
                </div>
              </div>

              <button className="group w-full py-6 rounded-[2rem] bg-foreground text-background hover:bg-foreground/90 font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 mb-8 shadow-[0_20px_50px_rgba(var(--foreground),0.3)] transition-all active:scale-95">
                Proceed to Secure Link <ArrowRight size={22} className="transition-transform group-hover:translate-x-2" />
              </button>

              <div className="flex flex-col gap-4 text-center">
                <div className="flex items-center justify-center gap-3 text-foreground/40 font-bold text-[10px] uppercase tracking-widest">
                  <Lock size={14} className="text-foreground" />
                  <span>Encrypted 256-bit Transaction</span>
                </div>
                <div className="flex justify-center gap-6 mt-2 opacity-20 filter grayscale">
                  <CreditCard size={32} />
                  <div className="w-10 h-6 bg-foreground rounded-sm" />
                  <div className="w-10 h-6 bg-foreground rounded-sm" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
