import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Shield, Truck, RotateCcw, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { productApi, cartApi, type Product } from '../lib/api';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const handleAddToCart = async () => {
    if (!product) return;
    try {
      await cartApi.addItem('test-user', product.id, quantity);
      alert(`${product.name} secured to your vault.`);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      setIsLoading(true);
      try {
        const response = await productApi.getById(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-8 bg-background">
        <div className="w-20 h-20 border-4 border-foreground/10 border-t-foreground rounded-full animate-spin" />
        <p className="caps-micro !text-foreground animate-pulse">Decrypting Product Data...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-8 bg-background">
        <h1 className="display-title !text-4xl uppercase">Product Not Found</h1>
        <Link to="/products" className="caps-micro border-b-2 border-foreground pb-2">Return to Curation</Link>
      </div>
    );
  }

  const images = product.imageUrls ? product.imageUrls.split(',') : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"];

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
          <Link to="/products" className="caps-micro !text-foreground/40 hover:!text-foreground transition-all">{product.category?.name || "Collection"}</Link>
          <div className="w-1 h-1 rounded-full bg-foreground/20" />
          <span className="caps-micro !text-foreground uppercase tracking-widest">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Image Gallery - Elite Presentation */}
          <div className="lg:col-span-7 space-y-8 animate-slide-in-left">
            <div className="premium-card aspect-[4/5] md:aspect-square overflow-hidden group border-foreground/5 bg-foreground/[0.02]">
              <img 
                src={images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 filter contrast-110"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-2 gap-8">
                {images.map((img, i) => (
                  <div key={i} className="premium-card aspect-square overflow-hidden cursor-pointer group border-foreground/5 hover:border-foreground/40 transition-all">
                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info - Editorial Layout */}
          <div className="lg:col-span-5 flex flex-col animate-slide-in-right">
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium mb-8">
                <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                <span className="caps-micro">{product.brand || "Digital Metro"} Curation</span>
              </div>
              
              <h1 className="display-title !text-5xl md:!text-6xl mb-8 tracking-tight font-outfit uppercase leading-none">{product.name}</h1>
              
              <div className="flex items-center justify-between mb-10">
                <span className="text-4xl font-black text-foreground tracking-tighter">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-3 glass-premium px-6 py-2 rounded-full">
                  <div className="flex text-foreground">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className={i <= (product.rating || 0) ? "fill-current" : "opacity-20"} />)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{product.reviewCount || 0} Verification</span>
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
                
                <button 
                  onClick={handleAddToCart}
                  className="group flex-1 bg-foreground text-background font-black text-lg uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-foreground/90 transition-all shadow-[0_20px_50px_rgba(var(--foreground),0.2)] active:scale-95"
                >
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
                  <div className="space-y-6">
                    <p className="body-pro !text-lg leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-4 mt-8">
                       <span className="px-4 py-1 border border-foreground/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-foreground/60">SKU: {product.sku}</span>
                       <span className="px-4 py-1 border border-foreground/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-foreground/60">Stock: {product.stockQuantity > 0 ? "Available" : "Sold Out"}</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { label: "Identification", value: product.sku },
                      { label: "Availability", value: `${product.stockQuantity} Units` },
                      { label: "Brand", value: product.brand || "Shopsy Elite" },
                      { label: "Composition", value: "Premium Grade" }
                    ].map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-foreground/[0.03]">
                        <span className="caps-micro !text-foreground/40">{spec.label}</span>
                        <span className="text-lg font-bold text-foreground uppercase tracking-tight">{spec.value}</span>
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
