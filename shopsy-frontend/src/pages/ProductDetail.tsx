import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Truck, RotateCcw, ShoppingBag, Heart, ArrowRight } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const product = {
    name: "Aura Noise-Canceling Headphones",
    price: 299.99,
    description: "Experience pure audio bliss with our next-generation active noise cancellation. Crafted with premium materials for all-day comfort and featuring a 40-hour battery life. The Aura headphones seamlessly adapt to your environment with neural frequency detection.",
    rating: 4.9,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    ],
    features: ["Adaptive Neural ANC", "40-hour Battery Reserve", "Spatial Audio Architecture", "Multipoint Quantum Bluetooth"],
  };

  return (
    <div className="w-full pb-32 pt-40 bg-background overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-foreground/[0.03] to-transparent -z-10" />
      <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-foreground/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Breadcrumbs - Minimalist */}
        <div className="flex items-center gap-3 mb-16 animate-fade-in">
          <Link to="/" className="caps-micro !text-foreground/40 hover:!text-foreground transition-all">Home</Link>
          <div className="w-1 h-1 rounded-full bg-foreground/20" />
          <Link to="/products" className="caps-micro !text-foreground/40 hover:!text-foreground transition-all">Electronics</Link>
          <div className="w-1 h-1 rounded-full bg-foreground/20" />
          <span className="caps-micro !text-foreground">Aura ANC</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Image Gallery - Elite Presentation */}
          <div className="lg:col-span-7 space-y-8 animate-slide-in-left">
            <div className="premium-card aspect-[4/5] md:aspect-square overflow-hidden group border-foreground/5 bg-foreground/[0.02]">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 filter contrast-110"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="premium-card aspect-square overflow-hidden cursor-pointer group border-foreground/5 hover:border-foreground/40 transition-all">
                <img src={product.images[0]} alt="Thumbnail 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="premium-card aspect-square overflow-hidden cursor-pointer group border-foreground/5 hover:border-foreground/40 transition-all bg-foreground/[0.03]">
                <img src={product.images[1]} alt="Thumbnail 2" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Right: Product Info - Editorial Layout */}
          <div className="lg:col-span-5 flex flex-col animate-slide-in-right">
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium mb-8">
                <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                <span className="caps-micro">Neural Series</span>
              </div>
              
              <h1 className="display-title !text-5xl md:!text-6xl mb-8 tracking-tight font-outfit uppercase">{product.name}</h1>
              
              <div className="flex items-center justify-between mb-10">
                <span className="text-4xl font-black text-foreground tracking-tighter">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-3 glass-premium px-6 py-2 rounded-full">
                  <div className="flex text-foreground">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Verified</span>
                </div>
              </div>

              <p className="body-pro text-xl leading-relaxed mb-12">
                {product.description}
              </p>
            </div>

            <div className="h-px w-full bg-foreground/5 mb-12" />

            {/* Actions - High Energy */}
            <div className="mb-16">
              <div className="flex flex-col sm:flex-row items-stretch gap-6 mb-10">
                <div className="flex items-center glass-premium rounded-2xl p-2 border-foreground/5">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 flex items-center justify-center hover:bg-foreground hover:text-background rounded-xl transition-all font-black text-xl">-</button>
                  <span className="w-14 text-center font-black text-foreground text-xl">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 flex items-center justify-center hover:bg-foreground hover:text-background rounded-xl transition-all font-black text-xl">+</button>
                </div>
                
                <button className="group flex-1 bg-foreground text-background font-black text-lg uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-foreground/90 transition-all shadow-[0_20px_50px_rgba(var(--foreground),0.2)] active:scale-95">
                  <ShoppingBag size={22} />
                  <span>Secure to Vault</span>
                  <ArrowRight size={22} className="transition-transform group-hover:translate-x-2" />
                </button>
                
                <button className="w-20 h-20 border border-foreground/5 glass-premium rounded-2xl flex items-center justify-center hover:bg-foreground/5 hover:text-foreground transition-all group/heart">
                  <Heart size={24} className="text-foreground transition-transform group-hover/heart:scale-110" />
                </button>
              </div>

              {/* Shopsy Promise Banner */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-foreground/5 py-10">
                <div className="flex flex-col items-center gap-4 text-center">
                  <Shield size={24} className="text-foreground/40" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 leading-tight">Lifetime <br /> Guarantee</span>
                </div>
                <div className="flex flex-col items-center gap-4 text-center border-l border-r border-foreground/5">
                  <Truck size={24} className="text-foreground/40" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 leading-tight">Velocity <br /> Freight</span>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                  <RotateCcw size={24} className="text-foreground/40" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 leading-tight">Frictionless <br /> Exchange</span>
                </div>
              </div>
            </div>

            {/* Content Tabs - Elite Minimalist */}
            <div className="flex-1">
              <div className="flex gap-12 border-b border-foreground/5 mb-10">
                {['details', 'specs'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-6 text-sm font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? 'text-foreground' : 'text-foreground/20 hover:text-foreground/40'}`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-foreground animate-shimmer bg-[length:200%_auto]" />}
                  </button>
                ))}
              </div>
              <div className="animate-fade-in">
                {activeTab === 'details' ? (
                  <ul className="space-y-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        <span className="body-pro !text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { label: "Architecture", value: "Neural Link 4.0" },
                      { label: "Reserve", value: "40 Hours Active" },
                      { label: "Interface", value: "Quantum Bluetooth" },
                      { label: "Composition", value: "Aerospace Magnesium" }
                    ].map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-foreground/[0.03]">
                        <span className="caps-micro !text-foreground/40">{spec.label}</span>
                        <span className="text-lg font-bold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
