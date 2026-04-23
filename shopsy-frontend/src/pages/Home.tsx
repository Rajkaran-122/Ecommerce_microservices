import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Zap, Shield, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import GridScan from '../components/ui/GridScan';
import Hyperspeed from '../components/ui/Hyperspeed';

// Import assets
import heroImg from '../assets/images/hero.png';
import cheetahImg from '../assets/images/lean-section-1-cheetah.webp';
import service1Img from '../assets/images/service-1.png';
import service2Img from '../assets/images/service-2.png';
import service3Img from '../assets/images/service-3.png';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const Home: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Detect theme from document class
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains('light');
      setTheme(isLight ? 'light' : 'dark');
    };

    checkTheme();
    
    // Simple observer for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  // Theme-aware colors for GridScan
  const linesColor = theme === 'dark' ? '#1a1a1a' : '#f0f0f0';
  const scanColor = theme === 'dark' ? '#ffffff' : '#000000';

  // Hyperspeed Effect Options - Pure Monochrome Professional Curation
  const hyperspeedOptions = useMemo(() => ({
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 3,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.1, 0.4],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.05, 400 * 0.15],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: theme === 'dark' ? 0x080808 : 0xf8f8f8,
      islandColor: theme === 'dark' ? 0x0a0a0a : 0xeeeeee,
      background: theme === 'dark' ? 0x000000 : 0xffffff,
      shoulderLines: theme === 'dark' ? 0xffffff : 0x000000,
      brokenLines: theme === 'dark' ? 0xffffff : 0x000000,
      leftCars: theme === 'dark' ? [0xffffff, 0xcccccc, 0x999999] : [0x000000, 0x333333, 0x666666],
      rightCars: theme === 'dark' ? [0x333333, 0x666666, 0x111111] : [0x999999, 0xcccccc, 0xffffff],
      sticks: theme === 'dark' ? 0xffffff : 0x000000
    }
  }), [theme]);

  return (
    <div className="w-full bg-background text-foreground overflow-hidden">

      {/* 
        ====================================================
        1. HERO SECTION (THE CHEETAH CONCEPT)
        ====================================================
      */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={revealVariants}
        className="relative h-[95vh] min-h-[750px] w-full flex items-center overflow-hidden bg-background"
      >
        
        {/* GridScan Cybernetic Background - The Perfect Combo */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <GridScan
            sensitivity={0.4}
            lineThickness={1.5}
            linesColor={linesColor}
            gridScale={0.08}
            scanColor={scanColor}
            scanOpacity={0.15}
            enablePost
            bloomIntensity={0.4}
            chromaticAberration={0.001}
            noiseIntensity={0.02}
            scanDuration={3.0}
            scanDelay={1.5}
            scanOnClick={true}
          />
        </div>

        {/* Cinematic Background Light Effects */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          {/* Main Spotlight - Adaptive to theme */}
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-foreground/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-foreground/5 rounded-full blur-[100px]" />
          
          {/* Dynamic Light Beam */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--foreground)/0.03),transparent_70%)]" />
        </div>

        <div className="container relative z-30 px-6 mx-auto h-full flex flex-col lg:flex-row items-center justify-between gap-20 pt-10 lg:pt-0">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5">
            {/* Minimalist Micro-Header */}
            <motion.div 
              variants={revealVariants}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-premium mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse-dot" />
              <span className="caps-micro">Next-Gen Commerce</span>
            </motion.div>

            {/* Monumental Typography */}
            <motion.h1 
              variants={revealVariants}
              className="display-title mb-10 text-foreground drop-shadow-2xl"
            >
              UNLEASH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/40 to-foreground animate-shimmer bg-[length:200%_auto]">
                VELOCITY
              </span>
            </motion.h1>

            <motion.p 
              variants={revealVariants}
              className="body-pro mb-12 max-w-xl"
            >
              Precision engineered for the modern elite. Experience frictionless shopping, AI curation, and sub-24 hour global delivery.
            </motion.p>

            {/* High-Conversion Actions */}
            <motion.div 
              variants={revealVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link to="/products" className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-foreground text-background font-bold text-xl rounded-full overflow-hidden hover:scale-[1.05] transition-all duration-500 shadow-[0_20px_50px_rgba(var(--foreground),0.2)]">
                <span className="relative z-10">Shop Collection</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <Link to="/products?category=Accessories" className="inline-flex items-center justify-center gap-4 px-12 py-6 glass-premium text-foreground font-semibold text-xl rounded-full hover:bg-foreground/10 transition-all duration-500">
                View Lookbook
              </Link>
            </motion.div>
          </div>

          {/* Parallel Image Content - Aligned specifically with UNLEASH */}
          <motion.div 
            variants={revealVariants}
            className="w-full lg:w-2/5 relative flex justify-center lg:justify-end items-center lg:-mt-20"
          >
            <div className="relative group">
              {/* Permanent Light Effect behind the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-foreground/10 rounded-full blur-[120px] z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-foreground/5 rounded-full blur-[80px] z-0" />
              
              {/* Hover Scan Mask Effect */}
              <div className="absolute inset-0 z-20 pointer-events-none group-hover:bg-[linear-gradient(transparent_45%,hsl(var(--foreground)/0.2)_50%,transparent_55%)] bg-[length:100%_200%] animate-scan-slow opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <img
                src={cheetahImg}
                alt="Velocity and Power"
                className="w-full h-auto lg:scale-[1.4] max-h-[85vh] object-contain filter contrast-110 drop-shadow-[0_0_80px_rgba(var(--foreground),0.25)] relative z-10 hover:scale-[1.45] transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 animate-bounce-slow z-10">
          <span className="caps-micro !text-foreground">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-foreground to-transparent" />
        </div>
      </motion.section>

      {/* 
        ====================================================
        2. BENTO GRID SECTION (LIFESTYLE HIGHLIGHT)
        ====================================================
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-40 relative bg-background"
      >
        <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Centered Ecosystem Header */}
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="section-title mb-8">The Ecosystem.</h2>
            <p className="body-pro max-w-2xl mx-auto mb-10">
              Seamlessly integrated hardware and lifestyle aesthetics designed for zero compromise.
            </p>
            <Link to="/products" className="group flex items-center gap-3 text-foreground font-bold text-lg hover:text-muted-foreground transition-all duration-500">
              <span className="border-b-2 border-foreground group-hover:border-transparent transition-all py-1">Explore Full Collection</span>
              <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px]">

            {/* Large Highlight Card (Using heroImg) */}
            <div className="md:col-span-8 premium-card group row-span-2 overflow-hidden flex flex-col justify-end p-12 relative">
              <div className="absolute inset-0 bg-grid-foreground/[0.03] bg-[size:40px_40px] z-0" />
              <img src={heroImg} alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-1000 group-hover:scale-105 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10" />
              <div className="relative z-20 max-w-lg text-left">
                <span className="px-4 py-1.5 bg-foreground/10 backdrop-blur-md rounded-full caps-micro mb-6 inline-block border border-foreground/20 !text-foreground">Featured</span>
                <h3 className="text-4xl font-bold text-foreground mb-4 leading-tight">Minimalist Workspace Essentials</h3>
                <p className="text-foreground/70 mb-8 text-lg">Upgrade your productivity with our latest curation of ultra-premium desktop accessories.</p>
                <Link to="/products?category=Electronics" className="px-8 py-3 bg-foreground text-background font-bold rounded-full hover:bg-zinc-200 transition-all duration-300 inline-block">Shop Workspace</Link>
              </div>
            </div>

            {/* Small Stat Card 1 */}
            <div className="md:col-span-4 premium-card flex flex-col items-center justify-center p-10 text-center bg-foreground/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-foreground/5 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-foreground/10 transition-all duration-700" />
              <div className="w-20 h-20 rounded-full bg-foreground/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                <Zap size={36} className="text-foreground" />
              </div>
              <h4 className="text-5xl font-black text-foreground mb-3 relative z-10 tracking-tighter"> faster </h4>
              <p className="body-pro text-base relative z-10">fast checkout speed with Shopsy One-Click.</p>
            </div>

            {/* Small Stat Card 2 */}
            <div className="md:col-span-4 premium-card flex flex-col justify-center p-10 bg-foreground/5 border-foreground/5 relative overflow-hidden group text-center">
              <div className="absolute inset-0 bg-dot-foreground/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
              <h4 className="text-2xl font-bold text-foreground mb-4 relative z-10">Shopsy Black</h4>
              <p className="body-pro text-base mb-8 relative z-10">Join the elite tier for exclusive drops, 24/7 concierge, and lifetime warranty.</p>
              <div className="mt-auto relative z-10 w-full px-4">
                <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full bg-foreground w-[75%] shadow-[0_0_20px_rgba(var(--foreground),0.3)]" />
                </div>
                <div className="flex justify-between mt-3">
                  <p className="caps-micro !text-[9px]">Limited Slots</p>
                  <p className="caps-micro !text-[9px]">Invite Only</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 
        ====================================================
        3. PREMIUM SERVICES (THE TRIFECTA)
        ====================================================
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-40 relative bg-background border-t border-foreground/5"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-center caps-micro mb-24 opacity-40">The Shopsy Promise</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Service 1 */}
            <motion.div variants={revealVariants} className="group cursor-pointer">
              <div className="w-full h-96 rounded-[3rem] overflow-hidden relative mb-10 premium-card border-foreground/10">
                <img src={service1Img} alt="Authentic" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <Shield className="text-foreground mb-6" size={40} />
              <h3 className="text-3xl font-bold text-foreground mb-4">100% Authentic</h3>
              <p className="body-pro text-base leading-relaxed">Cryptographically verified supply chain. Every item arrives with a digital certificate of authenticity on the blockchain.</p>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={revealVariants} className="group cursor-pointer mt-0 md:mt-16">
              <div className="w-full h-96 rounded-[3rem] overflow-hidden relative mb-10 premium-card border-foreground/10">
                <img src={service2Img} alt="AI Curation" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="w-10 h-10 rounded-full bg-foreground/20 animate-pulse mb-6 flex items-center justify-center">
                <div className="w-4 h-4 bg-foreground rounded-full" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Neural Curation</h3>
              <p className="body-pro text-base leading-relaxed">Our proprietary AI agent learns your aesthetic and anticipates your needs before you do.</p>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={revealVariants} className="group cursor-pointer mt-0 md:mt-32">
              <div className="w-full h-96 rounded-[3rem] overflow-hidden relative mb-10 premium-card border-foreground/10">
                <img src={service3Img} alt="Logistics" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <Truck className="text-foreground mb-6" size={40} />
              <h3 className="text-3xl font-bold text-foreground mb-4">White Glove Freight</h3>
              <p className="body-pro text-base leading-relaxed">Temperature-controlled, secure transport. Scheduled delivery windows down to the exact 15-minute mark.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 
        ====================================================
        4. VELOCITY DRIVE (HYPERSPEED CTA)
        ====================================================
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden group cursor-pointer"
      >
        {/* Hyperspeed Background - The "Effect Behind" */}
        <div className="absolute inset-0 z-0">
          <Hyperspeed effectOptions={hyperspeedOptions} />
        </div>

        {/* Contrast Overlay - Layered for depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-transparent to-background opacity-60 pointer-events-none" />
        
        {/* Content Overlay */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div 
            variants={revealVariants}
            className="inline-block px-8 py-3 glass-premium rounded-full mb-12 backdrop-blur-md border-foreground/10"
          >
            <span className="caps-micro text-foreground tracking-[0.5em]">Phase: Acceleration</span>
          </motion.div>

          <motion.h2 
            variants={revealVariants}
            className="display-title text-foreground mb-12 drop-shadow-[0_0_30px_rgba(var(--foreground),0.2)] animate-velocity bg-[linear-gradient(110deg,hsl(var(--foreground)),45%,hsl(var(--foreground)/0.4),55%,hsl(var(--foreground)))] bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-1000 group-hover:scale-110 tracking-tight"
          >
            THE PURSUIT OF <br />
            <span className="italic font-light opacity-80 group-hover:opacity-100 transition-opacity">SPEED.</span>
          </motion.h2>

          <motion.p 
            variants={revealVariants}
            className="body-pro text-foreground/80 max-w-2xl mx-auto mb-16 text-xl leading-relaxed"
          >
            Hold anywhere to accelerate. Join the Shopsy Elite for early access to the Velocity Drop 01.
          </motion.p>

          <Link 
            to="/products"
            className="group relative z-30 px-16 py-8 bg-foreground text-background font-black text-2xl rounded-full overflow-hidden hover:scale-[1.1] transition-all duration-500 shadow-[0_0_60px_rgba(var(--foreground),0.3)] hover:shadow-[0_0_80px_rgba(var(--foreground),0.5)] inline-block"
          >
            <span className="relative z-10 uppercase tracking-widest">ENTER THE DRIVE</span>
            <div className="absolute inset-0 bg-background/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>

        {/* Interaction Prompt */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 opacity-40 group-hover:opacity-100 transition-opacity">
          <p className="caps-micro text-foreground animate-pulse">Hold to Speed Up</p>
        </div>
      </motion.section>

    </div>
  );
};

export default Home;
