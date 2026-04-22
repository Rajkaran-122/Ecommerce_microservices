import React, { useState } from 'react';
import { Filter, Star, ChevronDown, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_PRODUCTS = [
  { id: 1, name: "Aura Noise-Canceling Headphones", price: 299.99, category: "Electronics", rating: 4.9, reviews: 124, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" },
  { id: 2, name: "Minimalist Chronograph Watch", price: 149.00, category: "Accessories", rating: 4.7, reviews: 89, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" },
  { id: 3, name: "Smart Fitness Ring", price: 199.50, category: "Wearables", rating: 4.8, reviews: 210, image: "https://images.unsplash.com/photo-1572569438065-8092289E753d?w=800&q=80" },
  { id: 4, name: "Ceramic Pour-Over Kettle", price: 85.00, category: "Home", rating: 4.6, reviews: 45, image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=800&q=80" },
  { id: 5, name: "Mechanical Keyboard Pro", price: 175.00, category: "Electronics", rating: 4.9, reviews: 320, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80" },
  { id: 6, name: "Organic Cotton Backpack", price: 110.00, category: "Accessories", rating: 4.5, reviews: 67, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80" },
];

const CATEGORIES = ["All", "Electronics", "Accessories", "Wearables", "Home"];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = activeCategory === "All" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full pb-32 pt-40 overflow-hidden relative bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-foreground/[0.02] bg-[size:60px_60px] -z-10" />
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-foreground/5 blur-[150px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-foreground/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Elite Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 animate-slide-up-fade">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium mb-8">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              <span className="caps-micro">Premium Curation</span>
            </div>
            <h1 className="section-title mb-8">
              Elevated <span className="text-foreground/40 font-light italic">Essentials.</span>
            </h1>
            <p className="body-pro">
              Our collection is a testament to the pursuit of perfection. Every piece is curated for the modern minimalist who demands uncompromising performance and aesthetic integrity.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-3 px-8 py-4 glass-premium rounded-2xl hover:bg-foreground/10 transition-all font-semibold">
              <SlidersHorizontal size={18} />
              <span>Sort: Featured</span>
              <ChevronDown size={18} className="ml-2 opacity-50" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar / Filters - Glassmorphism Pro */}
          <aside className="w-full lg:w-72 flex-shrink-0 animate-slide-in-left">
            <div className="sticky top-32 glass-premium p-10 rounded-[2.5rem] border-foreground/5">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-foreground/5">
                <Filter size={20} className="text-foreground" />
                <h2 className="font-bold text-xl tracking-tight font-outfit uppercase">Refine</h2>
              </div>
              
              <div className="mb-12">
                <h3 className="caps-micro mb-8 !text-foreground/40">Categories</h3>
                <ul className="space-y-4">
                  {CATEGORIES.map(category => (
                    <li key={category}>
                      <button 
                        onClick={() => setActiveCategory(category)}
                        className={`group flex items-center gap-3 w-full text-left transition-all duration-300 ${
                          activeCategory === category 
                            ? "text-foreground font-black translate-x-2" 
                            : "text-foreground/40 hover:text-foreground hover:translate-x-1"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-foreground transition-all duration-500 ${activeCategory === category ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-40'}`} />
                        <span className="text-lg font-medium tracking-tight">{category}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="caps-micro mb-8 !text-foreground/40">Price Threshold</h3>
                <div className="px-2">
                  <div className="h-1.5 w-full bg-foreground/10 rounded-full relative overflow-hidden mb-6">
                    <div className="absolute inset-y-0 left-0 bg-foreground w-[60%]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-foreground">$0</span>
                    <span className="text-sm font-bold text-foreground">$500+</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="premium-card group bg-background animate-slide-up-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/product/${product.id}`} className="block relative overflow-hidden h-[350px] bg-foreground/[0.03]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter contrast-110"
                    />
                    <div className="absolute top-6 left-6 px-4 py-1.5 glass-premium rounded-full text-[10px] font-black uppercase tracking-widest text-foreground shadow-xl">
                      {product.category}
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-8 py-3 bg-white text-black font-black rounded-full scale-90 group-hover:scale-100 transition-transform duration-500">View Detail</span>
                    </div>
                  </Link>
                  
                  <div className="p-8 relative z-10">
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-bold text-xl text-foreground hover:opacity-60 transition-all font-outfit leading-tight line-clamp-1 uppercase tracking-tight">{product.name}</h3>
                      </Link>
                    </div>
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-1.5">
                        <Star size={16} className="fill-foreground text-foreground" />
                        <span className="text-foreground font-black text-sm">{product.rating}</span>
                        <span className="text-foreground/30 text-xs font-bold uppercase tracking-tighter">({product.reviews} Verification)</span>
                      </div>
                      <span className="font-black text-2xl text-foreground tracking-tighter">${product.price.toFixed(0)}</span>
                    </div>

                    <button className="w-full py-5 rounded-2xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 font-black text-sm uppercase tracking-widest flex justify-center items-center gap-3 group/btn shadow-[0_10px_30px_rgba(var(--foreground),0.2)]">
                      <span>Add to Vault</span> 
                      <ArrowRight size={18} className="transition-transform duration-500 group-hover/btn:translate-x-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-20 flex justify-center">
              <button className="px-12 py-5 glass-premium rounded-full font-black text-sm uppercase tracking-widest hover:bg-foreground/5 transition-all">
                Load More Curation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
