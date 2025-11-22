
import React, { useState } from 'react';
import { ArrowRight, Phone, Star, HardHat, CheckCircle2, Search } from 'lucide-react';

const Hero: React.FC = () => {
  const [showBadge, setShowBadge] = useState(true);

  return (
    <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50 to-white pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left reveal">
            
            {showBadge && (
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full pl-4 pr-4 py-1.5 mb-6 lg:mb-8 animate-fade-in-up mx-auto lg:mx-0 group transition-all cursor-default">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-blue">Spécial Artisans du Bâtiment</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-4 lg:mb-6 tracking-tight">
              Vous êtes <span className="relative inline-block mx-1">
                <span className="absolute inset-x-0 bottom-2 h-3 bg-brand-yellow -rotate-2 rounded-sm opacity-80"></span>
                <span className="relative z-10">le meilleur</span>
              </span> sur le chantier ?<br/>
              Soyez le premier sur <span className="text-brand-blue">Google</span>.
            </h1>
            
            <div className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium space-y-6">
              <p>
                Arrêtez de laisser les <span className="font-bold text-slate-800">"bricoleurs"</span> prendre vos chantiers.
                Plus de visibilité = plus de clients = <strong>plus de bouche-à-oreille</strong>.
              </p>
              
              {/* NEW BADGE DESIGN */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-100 text-emerald-800 px-5 py-2.5 rounded-full shadow-sm transition-transform hover:scale-105 cursor-default">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                  <span className="font-bold text-sm sm:text-base tracking-tight">Rentabilisé en 1 chantier</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-3 w-full sm:w-auto">
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto bg-brand-blue text-white hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-blue/30 hover:-translate-y-1 active:scale-95">
                Je veux ma place de N°1 <ArrowRight size={20} />
              </button>
              
              <div className="flex items-center gap-3 text-sm font-bold text-slate-500 mt-4">
                 <div className="flex -space-x-3">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" alt=""/>
                    <img src="https://randomuser.me/api/portraits/men/44.jpg" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" alt=""/>
                    <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" alt=""/>
                 </div>
                 <p>+50 Artisans accompagnés</p>
              </div>
            </div>
          </div>

          {/* Visual Content - CLEANER PHONE DESIGN */}
          <div className="lg:w-1/2 relative reveal stagger-2 mt-8 lg:mt-0 w-full max-w-[400px] lg:max-w-none mx-auto flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              
              {/* Phone Mockup */}
              <div className="relative z-20 bg-gray-950 rounded-[3rem] p-3 shadow-2xl border-[4px] border-gray-800 ring-1 ring-white/20">
                 {/* Screen */}
                 <div className="bg-white rounded-[2.25rem] overflow-hidden h-[540px] relative flex flex-col w-full">
                    
                    {/* Status Bar area (fake) */}
                    <div className="h-6 w-full bg-white flex justify-between items-center px-6 pt-2">
                        <span className="text-[10px] font-bold text-slate-800">9:41</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-slate-800 rounded-full opacity-20"></div>
                            <div className="w-3 h-3 bg-slate-800 rounded-full opacity-20"></div>
                            <div className="w-4 h-2.5 bg-slate-800 rounded-[2px]"></div>
                        </div>
                    </div>

                    {/* Clean Search Bar */}
                    <div className="bg-white px-4 pt-2 pb-4 z-10 relative shrink-0">
                       <div className="h-12 bg-white rounded-full w-full flex items-center px-4 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] border border-slate-100 gap-3">
                          <Search className="text-brand-blue w-5 h-5" />
                          <span className="text-slate-800 font-medium text-sm truncate">
                            Meilleur Artisan [Votre Ville]
                          </span>
                          <div className="ml-auto w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] font-bold">A</div>
                       </div>
                       
                       {/* Filter Chips */}
                       <div className="flex gap-2 mt-3 overflow-hidden">
                          <div className="px-3 py-1.5 bg-brand-dark text-white rounded-lg text-[10px] font-bold shadow-sm">Meilleurs résultats</div>
                          <div className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold border border-slate-100">Ouvert mtn</div>
                       </div>
                    </div>
                    
                    {/* Map Placeholder - Cleaner */}
                    <div className="h-36 bg-slate-100 w-full relative shrink-0 border-y border-slate-100 overflow-hidden">
                       <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/map-pattern.png')]"></div>
                       
                       {/* Pins on Map */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                          <div className="bg-brand-blue text-white px-2 py-0.5 rounded shadow-md text-[9px] font-bold mb-1 whitespace-nowrap animate-bounce">C'est vous !</div>
                          <div className="w-8 h-8 bg-brand-blue rounded-full border-[3px] border-white shadow-lg flex items-center justify-center relative">
                             <HardHat size={14} className="text-white" />
                          </div>
                       </div>
                       
                       {/* Competitor Pin */}
                       <div className="absolute top-1/4 right-8 opacity-50 grayscale">
                          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
                       </div>
                    </div>

                    {/* Result List - High Contrast */}
                    <div className="flex-1 bg-slate-50 p-3 space-y-3 overflow-hidden">
                       
                       {/* RESULT 1: THE WINNER (High End Card) */}
                       <div className="bg-white rounded-xl p-4 shadow-lg shadow-brand-blue/5 border border-brand-blue/10 relative z-10">
                          <div className="absolute -left-1 -top-1 w-6 h-6 bg-brand-yellow text-brand-dark font-black flex items-center justify-center rounded-full border-2 border-white shadow-sm z-20 text-xs">1</div>
                          
                          <div className="flex justify-between items-start mb-2 pl-2">
                             <div>
                                <h3 className="font-black text-slate-900 text-sm leading-tight mb-0.5">VOTRE ENTREPRISE</h3>
                                <p className="text-[10px] text-slate-500 font-medium">Bâtiment & Rénovation</p>
                             </div>
                             <span className="bg-green-100 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded">OUVERT</span>
                          </div>
                          
                          <div className="flex items-center gap-1 text-brand-yellow mb-3 pl-2">
                             <div className="flex gap-0.5">
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                             </div>
                             <span className="text-slate-400 text-[10px] font-medium ml-1">(64 avis)</span>
                          </div>
                          
                          <div className="flex gap-2">
                             <div className="flex-1 bg-brand-blue text-white py-2 rounded-lg text-center font-bold text-xs shadow-md shadow-brand-blue/20 flex items-center justify-center gap-1">
                                <Phone size={12} /> Appeler
                             </div>
                             <div className="flex-1 bg-white text-slate-600 py-2 rounded-lg text-center font-bold text-xs border border-slate-200">Site Web</div>
                          </div>
                       </div>
                       
                       {/* RESULT 2: THE LOSER (Clean Ghost) */}
                       <div className="bg-white/50 border border-slate-100 rounded-xl p-3 opacity-50 grayscale scale-[0.98]">
                          <div className="flex justify-between items-start mb-1">
                             <h4 className="font-bold text-slate-400 text-xs">Concurrent Invisible</h4>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                             <div className="flex text-slate-300 gap-0.5">
                                <Star size={8} fill="currentColor" />
                                <Star size={8} fill="currentColor" />
                                <Star size={8} fill="currentColor" />
                             </div>
                             <span className="text-slate-300 text-[9px]">(3 avis)</span>
                          </div>
                          <div className="h-6 bg-slate-100 rounded w-full"></div>
                       </div>

                    </div>
                 </div>
              </div>

              {/* Floating Notification - Pushed to the side for cleaner look */}
              <div className="absolute bottom-24 -right-6 sm:-right-12 bg-white p-3 pr-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 z-30 animate-float-slow hidden sm:block">
                <div className="flex items-center gap-3">
                   <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                     <Phone size={18} />
                   </div>
                   <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Nouvel Appel</div>
                      <div className="text-xs font-bold text-slate-900">Chantier Confirmé ✅</div>
                   </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
