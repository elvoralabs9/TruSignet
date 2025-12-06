import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, Moon, Sun, Menu, X, 
  Palette, Sliders, Type, ChevronDown, 
  PenTool, Mail, Shield, FileText, Info,
  Check, MoveRight, Layers, Copy, Smartphone, 
  Globe, ArrowRight, Star, Zap, Layout, ChevronRight,
  Briefcase, User, Feather, MousePointer, Lock,
  MessageSquare, Server
} from 'lucide-react';

// --- ASSETS ---
// Updated Logo URL as requested
const LOGO_URL = "https://i.ibb.co/RkC7hyby/20251206-155504.png"; 

// --- EMAILJS CONFIG ---
const SERVICE_ID = "service_wge5127";
const TEMPLATE_ID = "template_elj0lbv";
const PUBLIC_KEY = "ETswALMSZAPYiPmX2";

// --- CONSTANTS ---
const PRESET_COLORS = [
  '#000000', '#1e293b', '#334155', // Grayscale
  '#dc2626', '#ea580c', '#d97706', // Warm
  '#65a30d', '#16a34a', '#059669', // Green
  '#0d9488', '#0891b2', '#0284c7', // Teal/Blue
  '#2563eb', '#4f46e5', '#7c3aed', // Indigo/Violet
  '#9333ea', '#c026d3', '#db2777', // Purple/Pink
  '#e11d48', '#be123c', '#881337'  // Rose
];

const FONT_LIBRARY = [
  'Great Vibes', 'Dancing Script', 'Sacramento', 'Parisienne', 'Allura', 
  'Tangerine', 'Pinyon Script', 'Herr Von Muellerhoff', 'Mr De Haviland', 
  'Aguafina Script', 'Mrs Saint Delafield', 'Meie Script', 'Alex Brush', 
  'Bilbo Swash Caps', 'Cedarville Cursive', 'Clicker Script', 'Dawning of a New Day', 
  'Euphoria Script', 'Felipa', 'Give You Glory', 'Glory', 'Homemade Apple', 
  'Italianno', 'Jim Nightshade', 'Kaushan Script', 'Kristi', 'La Belle Aurore', 
  'League Script', 'Loved by the King', 'Meddon', 'Montez', 'Mr Bedfort', 
  'Nanum Pen Script', 'Nothing You Could Do', 'Over the Rainbow', 'Petit Formal Script', 
  'Quintessential', 'Reenie Beanie', 'Rochester', 'Rock Salt', 'Rouge Script', 
  'Ruthie', 'Seaweed Script', 'Shadows Into Light', 'Stalemate', 'The Girl Next Door', 
  'Waiting for the Sunrise', 'Yellowtail', 'Zeyada', 'Bad Script', 'Marck Script',
  'Arizonia', 'Berkshire Swash', 'Cookie', 'Courgette', 'Damion', 'Dr Sugiyama',
  'Engagement', 'Fondamento', 'Gloria Hallelujah', 'Grand Hotel', 'Handlee', 
  'Hi Melody', 'Indie Flower', 'Julee', 'Kalam', 'Leckerli One',
  'Merienda', 'Molle', 'Monsieur La Doulaise', 'Niconne', 'Norican', 'Oleo Script',
  'Pacifico', 'Patrick Hand', 'Permanent Marker', 'Playball', 'Rancho', 'Satisfy',
  'Sedgwick Ave', 'Sofia', 'Sriracha', 'Sue Ellen Francisco', 'Vibur', 'Yesteryear'
];

// --- CONTENT GENERATORS ---
const generateLongText = (type) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";
  
  let content = [];
  const repetitions = 20;

  if (type === 'about') {
    content.push(<p key="intro" className="mb-6 font-bold text-xl">Welcome to TruSignet: The Future of Digital Identity.</p>);
    content.push(<p key="p1" className="mb-4">At TruSignet, we believe that a signature is more than just a formality; it is a profound expression of identity, a seal of trust, and a digital handshake that traverses the globe in milliseconds. Founded with a vision to revolutionize how the world signs, TruSignet has evolved from a simple tool into a comprehensive ecosystem for digital authentication and aesthetic branding.</p>);
    for (let i = 0; i < repetitions; i++) {
        content.push(
            <div key={`ab-${i}`} className="mb-6">
                <h3 className="font-bold text-lg mb-2">Chapter {i + 1}: The Evolution of Digital Trust</h3>
                <p className="mb-2">In an era where digital transactions define our economy, the need for a verifiable, aesthetically pleasing, and technically robust signature solution has never been greater. We have dedicated thousands of engineering hours to perfecting the stroke simulation, ensuring that every curve, dot, and cross mimics the natural flow of human handwriting. {lorem}</p>
                <p>Our commitment to excellence drives us to continuously update our font libraries, refine our rendering engines, and enhance user privacy. We understand that your signature is personal. That is why we have architected our system to be entirely client-side, ensuring that your data never leaves your device. {lorem}</p>
            </div>
        );
    }
  } else if (type === 'privacy') {
    content.push(<p key="intro" className="mb-6 font-bold text-xl text-red-500">Privacy Policy - Comprehensive Protocol (2025 Edition)</p>);
    content.push(<p key="p1" className="mb-4">Your privacy is not just a priority; it is the fundamental pillar upon which TruSignet is built. This document serves as an exhaustive declaration of our data handling practices, security measures, and your rights as a user. By accessing our platform, you acknowledge the meticulous care we take in ensuring your digital sovereignty.</p>);
    for (let i = 0; i < repetitions; i++) {
        content.push(
            <div key={`pr-${i}`} className="mb-6">
                <h3 className="font-bold text-lg mb-2">Section {i + 1}.0: Data Sovereignty and Client-Side Execution</h3>
                <p className="mb-2"><strong>{i + 1}.1 Zero-Knowledge Architecture:</strong> We operate on a strict zero-knowledge basis. This means that the computational logic required to generate your signature is transmitted to your browser and executed locally. At no point does the text you input, the style you select, or the final image generated transit through our servers. {lorem}</p>
                <p className="mb-2"><strong>{i + 1}.2 Volatile Memory Usage:</strong> Any data temporarily stored in your device's Random Access Memory (RAM) during the session is immediately discarded upon the termination of the session (closing the tab or browser). We do not employ persistent cookies for tracking user behavior across the web. {lorem}</p>
                <p><strong>{i + 1}.3 Third-Party Integrations:</strong> While we strive for independence, certain assets such as web fonts are retrieved from trusted CDNs (Content Delivery Networks) like Google Fonts. These requests are standard HTTP requests and do not contain your personal data, though they may log IP addresses for caching purposes. {lorem}</p>
            </div>
        );
    }
  } else if (type === 'terms') {
    content.push(<p key="intro" className="mb-6 font-bold text-xl">Terms of Service & User Agreement</p>);
    content.push(<p key="p1" className="mb-4">Please read these Terms of Service ("Agreement") carefully before using the TruSignet platform. This Agreement sets forth the legally binding terms and conditions for your use of the website at TruSignet.com. By accessing or using the Site in any manner, including, but not limited to, visiting or browsing the Site or contributing content or other materials to the Site, you agree to be bound by these Terms of Service.</p>);
    for (let i = 0; i < repetitions; i++) {
        content.push(
            <div key={`tm-${i}`} className="mb-6">
                <h3 className="font-bold text-lg mb-2">Article {i + 1}: Usage and Intellectual Property</h3>
                <p className="mb-2"><strong>Clause {i + 1}.A License Grant:</strong> TruSignet grants you a non-exclusive, non-transferable, revocable license to access and use our Service strictly in accordance with these Terms. The generated signatures are your property to use for personal or commercial identification purposes. {lorem}</p>
                <p className="mb-2"><strong>Clause {i + 1}.B Restrictions:</strong> You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, impairs, or renders the Service less efficient. You may not reverse engineer, decompile, or disassemble any aspect of the software. {lorem}</p>
                <p><strong>Clause {i + 1}.C Indemnification:</strong> You agree to indemnify and hold TruSignet harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third party. {lorem}</p>
            </div>
        );
    }
  }
  return content;
};

const App = () => {
  // --- STATE ---
  const [activePage, setActivePage] = useState('landing'); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  
  // Generator State
  const [name, setName] = useState('Krishna');
  const [visibleCount, setVisibleCount] = useState(15);
  const [customization, setCustomization] = useState({
    color: '#4f46e5',
    bgColor: '#ffffff',
    isTransparent: true,
    size: 48,
    slope: -5,
    weight: 400,
    spacing: 0,
    textCase: 'title', // title, upper, lower
    underline: false,
    skewX: 0
  });
  const [loading, setLoading] = useState(false);

  // Email Signature Generator State
  const [emailSigData, setEmailSigData] = useState({
    fullName: 'Krishna',
    jobTitle: 'Creative Director',
    company: 'TruSignet Inc.',
    email: 'krishna@trusignet.com',
    phone: '+91 98765 43210',
    website: 'www.trusignet.com',
    address: 'Mumbai, India',
    color: '#4f46e5'
  });
  const [copied, setCopied] = useState(false);

  // Contact Form State
  const formRef = useRef();
  const [contactStatus, setContactStatus] = useState('idle'); // idle, sending, success, error

  // --- EFFECTS ---
  useEffect(() => {
    if (activePage === 'home') {
        setLoading(true);
        setTimeout(() => setLoading(false), 800);
    }
  }, [activePage]);

  // Construct URL for CSS
  const uniqueFonts = [...new Set(FONT_LIBRARY)];
  const fontUrl = `https://fonts.googleapis.com/css2?family=${uniqueFonts.map(f => f.replace(/\s+/g, '+')).join('&family=')}&display=swap`;

  // --- HANDLERS ---
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 15);
      setLoading(false);
    }, 500);
  };

  const getProcessedName = () => {
    if (customization.textCase === 'upper') return name.toUpperCase();
    if (customization.textCase === 'lower') return name.toLowerCase();
    return name;
  };

  const downloadSignature = (fontName) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scale = 3;
    canvas.width = 1200;
    canvas.height = 600;

    if (!customization.isTransparent) {
      ctx.fillStyle = customization.bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    ctx.scale(scale, scale);
    ctx.font = `${customization.weight} ${customization.size * 1.5}px "${fontName}"`;
    ctx.fillStyle = customization.color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.save();
    ctx.translate(200, 100);
    ctx.transform(1, 0, customization.skewX / 10, 1, 0, 0); 
    ctx.rotate((customization.slope * Math.PI) / 180);
    
    const textToDraw = getProcessedName();
    ctx.fillText(textToDraw, 0, 0);
    
    if (customization.underline) {
        const textWidth = ctx.measureText(textToDraw).width;
        ctx.fillRect(-textWidth/2, (customization.size * 1.5) / 2, textWidth, customization.weight > 500 ? 3 : 1.5);
    }

    ctx.restore();

    const link = document.createElement('a');
    link.download = `TruSignet_${name}_${fontName.replace(/\s/g, '')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const copyEmailSignature = () => {
    const range = document.createRange();
    const selection = window.getSelection();
    const element = document.getElementById('signature-preview');
    
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navigateTo = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo(0,0);
  };

  // --- FIXED EMAILJS HANDLER (NO IMPORT REQUIRED) ---
  const sendEmail = async (e) => {
    e.preventDefault();
    setContactStatus('sending');

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    
    // Construct payload for EmailJS API
    const data = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: formProps
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('SUCCESS!');
        setContactStatus('success');
        e.target.reset();
        setTimeout(() => setContactStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('FAILED...', error);
      setContactStatus('error');
      setTimeout(() => setContactStatus('idle'), 5000);
    }
  };

  // --- SUB-COMPONENTS ---

  const Logo = ({ size = "normal" }) => (
    <div className="flex items-center gap-3 select-none">
       <img 
         src={LOGO_URL} 
         alt="TruSignet Logo" 
         className={`${size === 'large' ? 'w-20 h-20' : 'w-10 h-10'} object-contain drop-shadow-md`}
         onError={(e) => {
             e.target.style.display = 'none';
             e.target.nextSibling.style.display = 'flex';
         }}
       />
       <div className="hidden w-10 h-10 bg-indigo-600 rounded-lg items-center justify-center text-white font-bold text-xl">T</div>
       
       <div className="flex flex-col">
          <span className={`font-bold tracking-tight leading-none ${size === 'large' ? 'text-4xl' : 'text-2xl'} ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Tru<span className="text-indigo-500">Signet</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest opacity-60 font-semibold mt-1">Authentic Digital IDs</span>
       </div>
    </div>
  );

  // HEADER
  const Header = () => (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/90 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div onClick={() => navigateTo('landing')} className="cursor-pointer hover:scale-105 transition-transform">
           <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: 'landing', label: 'Home' },
            { id: 'home', label: 'Signatures' },
            { id: 'emailsig', label: 'Gmail Tool' },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activePage === item.id ? 'text-indigo-500 scale-110' : 'opacity-70 hover:opacity-100 hover:text-indigo-400'} ${darkMode ? 'text-white' : 'text-slate-800'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => navigateTo('home')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-bold text-xs shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1">
             Get Started
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
           <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'text-yellow-400' : 'text-slate-600'}`}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMenuOpen(true)} className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="absolute top-0 right-0 w-full h-screen bg-black/80 z-50 flex justify-end backdrop-blur-md animate-in slide-in-from-right duration-300">
           <div className={`w-4/5 h-full p-8 shadow-2xl overflow-y-auto ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
              <div className="flex justify-between items-center mb-12">
                 <Logo />
                 <button onClick={() => setMenuOpen(false)} className={darkMode ? 'text-white' : 'text-slate-900'}><X size={32} /></button>
              </div>
              <div className="flex flex-col gap-8">
                 {[
                   {id: 'landing', label: 'Home Page', icon: Layout},
                   {id: 'home', label: 'Signature Generator', icon: PenTool},
                   {id: 'emailsig', label: 'Gmail Signature Tool', icon: Mail},
                   {id: 'api', label: 'API Access', icon: Server, comingSoon: true}, // ADDED API OPTION
                   {id: 'contact', label: 'Contact Us', icon: MessageSquare}, // ADDED CONTACT OPTION
                   {id: 'about', label: 'About Company', icon: Info},
                   {id: 'privacy', label: 'Privacy Policy', icon: Shield},
                   {id: 'terms', label: 'Terms of Service', icon: FileText},
                  ].map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => {
                          if (!item.comingSoon) {
                              if (item.id === 'contact') {
                                  // Navigate to landing and scroll to contact
                                  navigateTo('landing');
                                  setTimeout(() => {
                                      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
                                  }, 100);
                              } else {
                                  navigateTo(item.id);
                              }
                          }
                      }}
                      className={`flex items-center gap-6 text-left text-xl font-bold border-b pb-4 border-slate-100/10 opacity-70 hover:opacity-100 hover:text-indigo-500 hover:pl-2 transition-all ${darkMode ? 'text-slate-200' : 'text-slate-800'} ${item.comingSoon ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                      <item.icon size={24} className="text-indigo-500" />
                      {item.label}
                      {item.comingSoon && (
                          <span className="text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded-full ml-auto uppercase tracking-wider font-bold">Coming Soon</span>
                      )}
                    </button>
                 ))}
              </div>
              <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
                 <h4 className="font-bold mb-2">Try Pro Features</h4>
                 <p className="text-sm opacity-70 mb-4">Create unlimited signatures for free.</p>
                 <button onClick={() => navigateTo('home')} className="w-full bg-white text-indigo-900 py-3 rounded-lg font-bold">Launch App</button>
              </div>
           </div>
        </div>
      )}
    </header>
  );

  // LANDING PAGE
  const LandingPage = () => (
    <div className="animate-in fade-in duration-700">
        {/* HERO SECTION */}
        <div className={`relative min-h-[90vh] flex items-center pt-20 overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="text-left space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 font-bold text-sm">
                        <Zap size={16} fill="currentColor"/> New Features Unlocked
                    </div>
                    <h1 className={`text-5xl md:text-7xl font-extrabold leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Make Your Mark <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">Unforgettable.</span>
                    </h1>
                    <p className={`text-xl leading-relaxed max-w-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        The world's most premium handwritten signature generator. Professional tools for personal branding, email identity, and legal docs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                        <button 
                            onClick={() => navigateTo('home')}
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-indigo-500/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Get Started Now <ArrowRight size={20}/>
                        </button>
                        <button 
                            onClick={() => document.getElementById('how-it-works').scrollIntoView({behavior: 'smooth'})}
                            className={`px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all flex items-center justify-center gap-2 ${darkMode ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-slate-200 text-slate-800 hover:bg-slate-100'}`}
                        >
                            Learn More <Globe size={20}/>
                        </button>
                    </div>
                    <div className="flex items-center gap-4 pt-4 opacity-70">
                         <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-700"></div>)}
                         </div>
                         <div className="text-sm">Trusted by 10,000+ Professionals</div>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                     <div className={`relative z-10 p-6 rounded-3xl border backdrop-blur-xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 ${darkMode ? 'bg-slate-900/60 border-slate-700' : 'bg-white/60 border-white'}`}>
                        <div className="flex items-center gap-4 mb-6 border-b pb-4 border-slate-500/20">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="text-xs opacity-50 ml-auto font-mono">LIVE PREVIEW</div>
                        </div>
                        <img src={LOGO_URL} className="w-16 h-16 mx-auto mb-4 object-contain opacity-50" alt="watermark"/>
                        <div className="text-center">
                            <h2 className="text-6xl font-script text-indigo-500 p-10" style={{fontFamily: 'Great Vibes'}}>Krishna</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                             <div className="h-2 rounded bg-slate-500/20 w-3/4"></div>
                             <div className="h-2 rounded bg-slate-500/20 w-1/2"></div>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        {/* LOGO STRIP */}
        <div className={`py-10 border-y ${darkMode ? 'bg-black border-slate-900' : 'bg-slate-100 border-slate-200'}`}>
             <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-40 grayscale">
                 <span className="font-bold text-xl">NETFLIX</span>
                 <span className="font-bold text-xl">Google</span>
                 <span className="font-bold text-xl">Microsoft</span>
                 <span className="font-bold text-xl hidden md:block">Spotify</span>
                 <span className="font-bold text-xl hidden md:block">Airbnb</span>
             </div>
        </div>

        {/* WHY TRUSIGNET (New Section) */}
        <div className={`py-24 px-6 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Why Your Signature Matters
                </h2>
                <p className="text-xl opacity-60 leading-relaxed mb-12">
                    In a world dominated by Times New Roman and Arial, your signature is the last bastion of personal identity. TruSignet isn't just a generator; it's a branding engine designed to give you a digital mark that commands respect and ensures authenticity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                        <Feather className="text-indigo-500 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Personal Aesthetics</h3>
                        <p className="opacity-70">Move beyond boring system fonts. Choose from 80+ handcrafted styles that match your vibe.</p>
                    </div>
                    <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                        <MousePointer className="text-purple-500 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Email Professionalism</h3>
                        <p className="opacity-70">Stop sending plain emails. Attach a professional signature to every Gmail message you send.</p>
                    </div>
                    <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                        <Lock className="text-pink-500 mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Zero Data Storage</h3>
                        <p className="opacity-70">We value privacy. Everything happens in your browser. No databases, no tracking.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* WHO IS IT FOR? (New Section) */}
        <div className={`py-24 px-6 border-t ${darkMode ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-indigo-500 font-bold tracking-widest uppercase text-sm">Target Audience</span>
                        <h2 className={`text-4xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Who is TruSignet For?</h2>
                    </div>
                    <p className="max-w-md opacity-60">We've built tools tailored for professionals across every industry.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {title: "Freelancers", icon: Briefcase, desc: "Sign contracts with flair."},
                        {title: "Executives", icon: User, desc: "Official seals for memos."},
                        {title: "Artists", icon: PenTool, desc: "Watermark your artwork."},
                        {title: "Doctors", icon: Check, desc: "Digital Rx signing."}
                     ].map((item, i) => (
                        <div key={i} className={`p-8 rounded-2xl transition-all hover:-translate-y-2 hover:shadow-xl border ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/50' : 'bg-white border-slate-200 hover:border-indigo-500'}`}>
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-500 mb-4">
                                <item.icon size={24} />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                            <p className="opacity-60 text-sm">{item.desc}</p>
                        </div>
                     ))}
                </div>
            </div>
        </div>

        {/* TOOLS POSTERS/BANNERS (New Section) */}
        <div className={`py-24 px-6 ${darkMode ? 'bg-black' : 'bg-white'}`}>
             <div className="max-w-7xl mx-auto space-y-24">
                 
                 {/* Banner 1: Signature Generator */}
                 <div className="relative rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-800">
                     <div className={`p-12 md:p-20 flex flex-col justify-center ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                         <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white mb-6">
                             <PenTool size={24} />
                         </div>
                         <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                             The Signature Generator
                         </h2>
                         <p className="text-xl opacity-70 mb-8 leading-relaxed">
                             Our flagship tool. Type your name and instantly see it rendered in 80+ distinct handwritten styles. Adjust slope, weight, color, and background transparency.
                         </p>
                         <button onClick={() => navigateTo('home')} className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all">
                             Create Signature <ArrowRight size={20} />
                         </button>
                     </div>
                     <div className="bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-10">
                          {/* Abstract representation of the tool */}
                          <div className="relative w-full max-w-md aspect-video bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6 flex flex-col justify-center items-center">
                              <h3 className="font-script text-5xl md:text-7xl text-white" style={{fontFamily: 'Great Vibes'}}>John Doe</h3>
                              <div className="absolute bottom-4 right-4 flex gap-2">
                                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                              </div>
                          </div>
                     </div>
                 </div>

                 {/* Banner 2: Email Signature */}
                 <div className="relative rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-800">
                     <div className="bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center p-10 order-2 lg:order-1">
                          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 text-slate-900">
                              <div className="flex gap-4 items-center border-b pb-4 border-slate-100 mb-4">
                                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">JD</div>
                                  <div>
                                      <div className="font-bold">John Doe</div>
                                      <div className="text-xs opacity-50">john@trusignet.com</div>
                                  </div>
                              </div>
                              <div className="space-y-2 opacity-70 text-sm">
                                  <div className="h-2 w-full bg-slate-100 rounded"></div>
                                  <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                                  <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                              </div>
                              <div className="mt-6 border-t pt-4 flex gap-4 items-center">
                                  <div className="w-1 h-12 bg-purple-600 rounded"></div>
                                  <div className="text-xs">
                                      <div className="font-bold text-lg text-slate-800">John Doe</div>
                                      <div className="text-purple-600 font-bold uppercase">CEO & Founder</div>
                                  </div>
                              </div>
                          </div>
                     </div>
                     <div className={`p-12 md:p-20 flex flex-col justify-center order-1 lg:order-2 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                         <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white mb-6">
                             <Mail size={24} />
                         </div>
                         <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                             Gmail Integration
                         </h2>
                         <p className="text-xl opacity-70 mb-8 leading-relaxed">
                             Look professional in every inbox. Create a structured HTML signature with your photo, contact details, and social links. Copy and paste directly into Gmail settings.
                         </p>
                         <button onClick={() => navigateTo('emailsig')} className="w-fit bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all">
                             Build Email Sig <ArrowRight size={20} />
                         </button>
                     </div>
                 </div>

             </div>
        </div>

        {/* HOW IT WORKS (New Section) */}
        <div id="how-it-works" className={`py-24 px-6 border-t ${darkMode ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'}`}>
            <div className="max-w-7xl mx-auto text-center">
                 <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${darkMode ? 'text-white' : 'text-slate-900'}`}>How It Works</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                     {/* Connecting Line (Desktop) */}
                     <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>

                     {[
                         {step: "01", title: "Type Your Name", desc: "Enter your name or business text into our secure input field."},
                         {step: "02", title: "Select & Style", desc: "Browse 80+ fonts. Adjust color, slant, and thickness to match your brand."},
                         {step: "03", title: "Download", desc: "Get a high-res PNG or copy the HTML code for your email client."}
                     ].map((s, i) => (
                         <div key={i} className="relative z-10 flex flex-col items-center">
                             <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold border-4 mb-6 shadow-xl ${darkMode ? 'bg-slate-900 border-indigo-500 text-white' : 'bg-white border-indigo-500 text-slate-900'}`}>
                                 {s.step}
                             </div>
                             <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
                             <p className="opacity-60 max-w-xs">{s.desc}</p>
                         </div>
                     ))}
                 </div>
            </div>
        </div>

        {/* FINAL CTA */}
        <div className="py-24 px-6 relative overflow-hidden bg-indigo-600">
             <div className="absolute inset-0 bg-grid-white opacity-10"></div>
             <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                 <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to Sign Off?</h2>
                 <p className="text-xl opacity-90 mb-10">Join thousands of professionals who trust TruSignet for their digital identity.</p>
                 <button onClick={() => navigateTo('home')} className="bg-white text-indigo-700 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform">
                     Create My Signature Free
                 </button>
             </div>
        </div>

        {/* --- ADDED CONTACT FORM SECTION AT BOTTOM OF LANDING PAGE --- */}
        <div id="contact-section" className={`py-24 px-6 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                   <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Get In Touch</h2>
                   <p className="opacity-60">Have questions about our API or enterprise solutions?</p>
                </div>
                
                <div className={`p-8 md:p-12 rounded-3xl border shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                   <form onSubmit={sendEmail} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                             <label className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Name</label>
                             <input type="text" name="user_name" required className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`} placeholder="John Doe" />
                         </div>
                         <div className="space-y-2">
                             <label className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email</label>
                             <input type="email" name="user_email" required className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`} placeholder="john@example.com" />
                         </div>
                      </div>
                      <div className="space-y-2">
                           <label className={`text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
                           <textarea name="message" required rows="4" className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none ${darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-700' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`} placeholder="How can we help you?"></textarea>
                      </div>
                      <button type="submit" disabled={contactStatus === 'sending'} className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all flex items-center justify-center gap-2 ${contactStatus === 'sending' ? 'bg-slate-600 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30'}`}>
                          {contactStatus === 'sending' ? 'Sending...' : contactStatus === 'success' ? 'Message Sent!' : contactStatus === 'error' ? 'Error Sending' : <>Send Message <MessageSquare size={20}/></>}
                      </button>
                      {contactStatus === 'success' && <p className="text-green-500 text-center font-bold mt-2">Thanks! We'll get back to you shortly.</p>}
                      {contactStatus === 'error' && <p className="text-red-500 text-center font-bold mt-2">Something went wrong. Please try again.</p>}
                   </form>
                </div>
            </div>
        </div>
    </div>
  );

  // --- GENERATOR PAGE ---
  const GeneratorPage = () => (
    <div className="animate-in fade-in duration-700">
      <div className={`relative pt-32 pb-12 px-6`}>
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Signature</span>
              </h1>
            </div>

            {/* Control Panel */}
            <div className={`rounded-3xl shadow-2xl backdrop-blur-md border overflow-hidden transition-all ${darkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white border-slate-200'}`}>
               <div className="grid grid-cols-1 lg:grid-cols-4">
                  
                  {/* Name Input */}
                  <div className={`p-8 col-span-1 lg:col-span-4 border-b ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                     <input
                       type="text"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       placeholder="Enter Name"
                       className={`w-full text-center text-5xl bg-transparent outline-none font-medium placeholder-opacity-30 ${darkMode ? 'text-white placeholder-slate-700' : 'text-slate-900 placeholder-slate-300'}`}
                     />
                  </div>

                  {/* Colors */}
                  <div className={`p-6 border-r ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                     <label className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 block flex items-center gap-2"><Palette size={14}/> 15+ Colors</label>
                     <div className="grid grid-cols-5 gap-2">
                        {PRESET_COLORS.map(c => (
                            <button 
                            key={c} 
                            onClick={() => setCustomization({...customization, color: c})}
                            className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${customization.color === c ? 'ring-2 ring-white scale-110' : ''}`}
                            style={{backgroundColor: c}}
                            />
                        ))}
                     </div>
                     <div className="mt-4 pt-4 border-t border-slate-700">
                        <label className="text-xs opacity-50 mb-2 block">Background</label>
                         <div className="flex items-center gap-2">
                           <button 
                             onClick={() => setCustomization({...customization, isTransparent: !customization.isTransparent})}
                             className={`px-3 py-1 rounded text-xs font-bold border ${customization.isTransparent ? 'bg-indigo-600 text-white border-indigo-600' : 'text-slate-500 border-slate-600'}`}
                           >
                             Transparent
                           </button>
                        </div>
                     </div>
                  </div>

                  {/* Geometry */}
                  <div className={`p-6 border-r ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                      <label className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 block flex items-center gap-2"><Sliders size={14}/> Geometry</label>
                      <div className="space-y-4">
                         <div>
                            <div className="flex justify-between text-xs mb-1 opacity-70"><span>Rotate</span><span>{customization.slope}°</span></div>
                            <input type="range" min="-30" max="10" value={customization.slope} onChange={(e) => setCustomization({...customization, slope: parseInt(e.target.value)})} className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"/>
                         </div>
                         <div>
                            <div className="flex justify-between text-xs mb-1 opacity-70"><span>Slant (Skew)</span><span>{customization.skewX}</span></div>
                            <input type="range" min="-20" max="20" value={customization.skewX} onChange={(e) => setCustomization({...customization, skewX: parseInt(e.target.value)})} className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"/>
                         </div>
                         <div>
                            <div className="flex justify-between text-xs mb-1 opacity-70"><span>Spacing</span><span>{customization.spacing}px</span></div>
                            <input type="range" min="-2" max="10" value={customization.spacing} onChange={(e) => setCustomization({...customization, spacing: parseInt(e.target.value)})} className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"/>
                         </div>
                      </div>
                  </div>

                  {/* Style */}
                   <div className={`p-6 border-r ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                      <label className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 block flex items-center gap-2"><Layers size={14}/> Style</label>
                      <div className="space-y-4">
                         <div>
                            <div className="flex justify-between text-xs mb-1 opacity-70"><span>Thickness</span><span>{customization.weight}</span></div>
                            <input type="range" min="100" max="900" step="100" value={customization.weight} onChange={(e) => setCustomization({...customization, weight: parseInt(e.target.value)})} className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"/>
                         </div>
                         <div>
                            <div className="flex justify-between text-xs mb-1 opacity-70"><span>Size</span><span>{customization.size}px</span></div>
                            <input type="range" min="20" max="100" value={customization.size} onChange={(e) => setCustomization({...customization, size: parseInt(e.target.value)})} className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"/>
                         </div>
                      </div>
                  </div>

                  {/* Decoration */}
                  <div className="p-6">
                      <label className="text-xs font-bold uppercase tracking-wider opacity-50 mb-4 block flex items-center gap-2"><Star size={14}/> Decoration</label>
                      <div className="flex flex-col gap-3">
                          <button onClick={() => setCustomization({...customization, underline: !customization.underline})} className={`px-3 py-2 rounded text-sm font-medium border transition-colors ${customization.underline ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-600 text-slate-400'}`}>
                             Underline
                          </button>
                          <div className="flex gap-2">
                             {['title', 'upper', 'lower'].map(c => (
                                 <button key={c} onClick={() => setCustomization({...customization, textCase: c})} className={`flex-1 px-2 py-2 rounded text-xs font-bold border uppercase ${customization.textCase === c ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-600 text-slate-400'}`}>
                                     {c.slice(0,1)}
                                 </button>
                             ))}
                          </div>
                      </div>
                  </div>

               </div>
            </div>
         </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
         <div className="flex items-center justify-between mb-8">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>Premium Styles</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FONT_LIBRARY.slice(0, visibleCount).map((font, idx) => (
               <div key={`${font}-${idx}`} className={`group relative h-56 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 shadow-black/40' : 'bg-white border-slate-100 shadow-lg shadow-indigo-100/50'}`}>
                  <div className={`absolute inset-0 opacity-5 rounded-3xl ${darkMode ? 'bg-grid-white' : 'bg-grid-black'}`}></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-indigo-500 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Pro</div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden">
                     <p style={{
                           fontFamily: `"${font}"`,
                           color: customization.color,
                           fontSize: `${customization.size}px`,
                           fontWeight: customization.weight,
                           letterSpacing: `${customization.spacing}px`,
                           transform: `rotate(${customization.slope}deg) skewX(${customization.skewX}deg)`,
                           textDecoration: customization.underline ? 'underline' : 'none',
                           textTransform: customization.textCase === 'upper' ? 'uppercase' : customization.textCase === 'lower' ? 'lowercase' : 'none'
                        }}
                        className="select-none transition-all duration-300"
                     >
                        {getProcessedName()}
                     </p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end bg-gradient-to-t from-slate-950/80 to-transparent rounded-b-3xl">
                     <span className="text-white text-xs font-bold ml-2">{font}</span>
                     <button onClick={() => downloadSignature(font)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-indigo-500">
                        <Download size={14} /> DOWNLOAD
                     </button>
                  </div>
               </div>
            ))}
         </div>
         <div className="text-center mt-12">
            <button onClick={handleLoadMore} disabled={loading} className="px-8 py-3 rounded-full border border-slate-600 text-slate-400 hover:text-white hover:border-white transition-colors">
               {loading ? 'Loading...' : 'Load More Styles'}
            </button>
         </div>
      </div>
    </div>
  );

  // --- EMAIL SIGNATURE PAGE ---
  const EmailSignaturePage = () => (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12">
        <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Gmail Signature <span className="text-indigo-500">Generator</span></h1>
        <p className="opacity-60 max-w-2xl mx-auto">Professional signatures for your emails. Fully functional and customizable.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="space-y-6">
             <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="text-xs uppercase font-bold opacity-50 mb-1 block">Full Name</label>
                   <input value={emailSigData.fullName} onChange={(e) => setEmailSigData({...emailSigData, fullName: e.target.value})} className="input-field w-full p-3 rounded-xl bg-slate-950/20 border border-slate-700 outline-none focus:border-indigo-500 text-inherit"/>
                </div>
                 <div>
                   <label className="text-xs uppercase font-bold opacity-50 mb-1 block">Theme Color</label>
                   <div className="flex flex-wrap gap-2 mt-2">
                       {PRESET_COLORS.slice(0,10).map(c => (
                           <div key={c} onClick={() => setEmailSigData({...emailSigData, color: c})} className={`w-6 h-6 rounded-full cursor-pointer border ${emailSigData.color === c ? 'border-white ring-2 ring-indigo-500' : 'border-transparent'}`} style={{backgroundColor: c}}></div>
                       ))}
                       <input type="color" value={emailSigData.color} onChange={(e) => setEmailSigData({...emailSigData, color: e.target.value})} className="w-6 h-6 rounded-full overflow-hidden cursor-pointer border-0"/>
                   </div>
                </div>
             </div>
             
             {['Job Title', 'Company', 'Phone', 'Email', 'Website', 'Address'].map(field => (
                 <div key={field}>
                    <label className="text-xs uppercase font-bold opacity-50 mb-1 block">{field}</label>
                    <input 
                        value={emailSigData[field.toLowerCase().replace(' ', '')]} 
                        onChange={(e) => setEmailSigData({...emailSigData, [field.toLowerCase().replace(' ', '')]: e.target.value})}
                        className="w-full p-3 rounded-xl bg-slate-950/20 border border-slate-700 outline-none focus:border-indigo-500 text-inherit"
                    />
                 </div>
             ))}
          </div>
        </div>

        {/* Live Preview & Copy */}
        <div className="flex flex-col gap-6 sticky top-24 h-fit">
           <div className={`flex-1 p-10 rounded-3xl border flex items-center justify-center min-h-[400px] shadow-2xl ${darkMode ? 'bg-white border-slate-700' : 'bg-white border-slate-200'}`}>
              <div id="signature-preview" className="p-4" style={{fontFamily: 'Arial, sans-serif', color: '#000'}}>
                 <table cellPadding="0" cellSpacing="0" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                    <tbody>
                       <tr>
                          <td style={{verticalAlign: 'top'}}>
                             <div style={{marginRight: '20px', width: '6px', height: '120px', backgroundColor: emailSigData.color, borderRadius: '4px'}}></div>
                          </td>
                          <td style={{verticalAlign: 'middle'}}>
                             <h3 style={{margin: '0px', fontSize: '24px', color: '#1e293b', fontWeight: 'bold', letterSpacing: '-0.5px'}}>{emailSigData.fullName}</h3>
                             <p style={{margin: '0px', fontSize: '14px', color: emailSigData.color, fontWeight: '600', textTransform: 'uppercase'}}>{emailSigData.jobTitle}</p>
                             <p style={{margin: '4px 0px 8px 0px', fontSize: '14px', color: '#64748b', fontWeight: '500'}}>{emailSigData.company}</p>
                             
                             <table cellPadding="0" cellSpacing="0" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', marginTop: '15px'}}>
                                <tbody>
                                   {[
                                       {icon: '📞', val: emailSigData.phone, link: `tel:${emailSigData.phone}`},
                                       {icon: '✉️', val: emailSigData.email, link: `mailto:${emailSigData.email}`},
                                       {icon: '🌐', val: emailSigData.website, link: `https://${emailSigData.website}`},
                                       {icon: '📍', val: emailSigData.address, link: '#'}
                                   ].map((row, i) => (
                                       <tr key={i} height="22" style={{verticalAlign: 'middle'}}>
                                          <td width="25" style={{verticalAlign: 'middle'}}><span style={{color: emailSigData.color, fontSize: '16px'}}>{row.icon}</span></td>
                                          <td style={{verticalAlign: 'middle'}}><a href={row.link} style={{textDecoration: 'none', color: '#475569', fontSize: '12px', fontWeight: '500'}}>{row.val}</a></td>
                                       </tr>
                                   ))}
                                </tbody>
                             </table>
                          </td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>
           
           <button 
              onClick={copyEmailSignature}
              className={`w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all transform active:scale-95 ${copied ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-indigo-500/30'}`}
           >
              {copied ? <><Check size={24}/> Signature Copied!</> : <><Copy size={24}/> Copy HTML Signature</>}
           </button>
           <p className="text-center text-xs opacity-50">Works with Gmail, Outlook, Apple Mail & Yahoo.</p>
        </div>
      </div>
    </div>
  );

  const LongContentPage = ({ type, icon: Icon, title }) => (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen animate-in slide-in-from-bottom-8 duration-700">
       <div className={`p-12 rounded-[2.5rem] shadow-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-100 text-slate-600'}`}>
          <div className="flex items-center gap-6 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
             <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Icon size={32} />
             </div>
             <div>
                <h1 className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{title}</h1>
                <p className="opacity-60 mt-1">Last Updated: October 2025</p>
             </div>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-indigo-500 prose-p:leading-8 prose-p:opacity-80">
             {generateLongText(type)}
          </div>
       </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 selection:bg-indigo-500 selection:text-white ${darkMode ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <style>{`@import url('${fontUrl}'); .bg-grid-black {background-size: 30px 30px; background-image: radial-gradient(circle, #000000 1px, transparent 1px);} .bg-grid-white {background-size: 30px 30px; background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);}`}</style>

      <Header />

      <main>
        {activePage === 'landing' && <LandingPage />}
        {activePage === 'home' && <GeneratorPage />}
        {activePage === 'emailsig' && <EmailSignaturePage />}
        {activePage === 'about' && <LongContentPage type="about" icon={Info} title="About TruSignet" />}
        {activePage === 'privacy' && <LongContentPage type="privacy" icon={Shield} title="Privacy Protocol" />}
        {activePage === 'terms' && <LongContentPage type="terms" icon={FileText} title="Terms of Service" />}
      </main>

      {/* FOOTER - Modified */}
      <footer className={`mt-20 pt-20 pb-10 border-t ${darkMode ? 'bg-black border-slate-900 text-slate-400' : 'bg-slate-900 border-slate-200 text-slate-300'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
             <Logo size="normal"/>
             <p className="mt-6 text-sm leading-relaxed opacity-60">
                The global standard for digital signature aesthetics. Secure, private, and beautifully crafted for the modern professional.
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Platform</h4>
            <ul className="space-y-4 text-sm font-medium opacity-80">
              <li><button onClick={() => navigateTo('home')} className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={12}/> Signature Maker</button></li>
              <li><button onClick={() => navigateTo('emailsig')} className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={12}/> Gmail Signatures</button></li>
              <li><button className="hover:text-indigo-400 transition-colors flex items-center gap-2"><ArrowRight size={12}/> API Access <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 rounded-full border border-indigo-500/30">SOON</span></button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm font-medium opacity-80">
              <li><button onClick={() => navigateTo('about')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo('privacy')} className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigateTo('terms')} className="hover:text-indigo-400 transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          {/* ADDED FOOTER CONTACT FORM */}
          <div>
             <h4 className="text-white font-bold mb-6 text-lg">Quick Contact</h4>
             <form onSubmit={sendEmail} className="flex flex-col gap-3">
               <input type="email" name="user_email" required placeholder="Your email" className="bg-slate-800/50 border border-slate-800 rounded-lg px-3 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500" />
               <textarea name="message" required rows="2" placeholder="Message..." className="bg-slate-800/50 border border-slate-800 rounded-lg px-3 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 resize-none"></textarea>
               <button type="submit" disabled={contactStatus === 'sending'} className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg text-sm font-bold transition-colors">
                  {contactStatus === 'sending' ? '...' : 'Send'}
               </button>
             </form>
          </div>
        </div>
        
        {/* Footer Bottom Strip - Removed specific links */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 text-center text-xs opacity-40 flex flex-col md:flex-row justify-between items-center">
          <span>&copy; 2025 TruSignet. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;

