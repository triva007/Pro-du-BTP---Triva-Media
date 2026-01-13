
import React, { useState } from 'react';
import { ArrowRight, Phone, Search, HardHat, CheckCircle2, Star, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [showBadge] = useState(true);

  return (
    <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      
      {/* Background Effects - Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-yellow/5 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left reveal">
            
            {showBadge && (
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full pl-4 pr-4 py-1.5 mb-8 lg:mb-10 animate-fade-in-up mx-auto lg:mx-0 group transition-all cursor-default">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-blue">Spécial Artisans du Bâtiment</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8 lg:mb-10 tracking-tight">
              Vous êtes le{' '}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 sm:bottom-3 h-3 sm:h-5 bg-brand-yellow -rotate-1 transform -z-10 rounded-sm"></span>
                <span className="relative z-10">meilleur</span>
              </span>
              {' '}sur le chantier ? <br/>
              <span className="text-brand-blue">Soyez le premier sur Google.</span>
            </h1>
            
            <div className="text-base sm:text-lg text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium space-y-6">
              <p>
                Arrêtez de payer des <strong className="text-slate-900">abonnements</strong> pour des sites <strong className="text-slate-900">invisibles</strong>. Nous créons votre <strong className="text-slate-900">machine à chantiers</strong> : <strong className="text-slate-900">100% à vous</strong>, <strong className="text-slate-900">1ère page Google</strong>, et <strong className="text-slate-900">sans frais cachés</strong>.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} 
                className="w-full sm:w-auto bg-brand-blue text-white hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-blue/30 hover:-translate-y-1 active:scale-95"
                aria-label="Voir les tarifs et offres"
              >
                Je veux ma 1ère place <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Visual Content - Phone Mockup */}
          <div className="lg:w-1/2 relative reveal stagger-2 mt-8 lg:mt-0 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px]">
              
              {/* Phone Container */}
              <div className="relative z-20 bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl shadow-slate-900/40 border-[4px] border-slate-800 ring-1 ring-white/10">
                 
                 {/* Screen Area - Reduced Height from 560px to 480px */}
                 <div className="bg-white rounded-[2rem] overflow-hidden h-[480px] relative flex flex-col w-full">
                    
                    {/* Notch / Minimalist Header */}
                    <div className="h-6 w-full bg-white flex justify-center items-start pt-1.5 absolute top-0 inset-x-0 z-30">
                        <div className="w-14 h-3 bg-slate-100 rounded-full"></div>
                    </div>

                    {/* App Search Header */}
                    <div className="bg-white px-3 pt-8 pb-2 z-20 relative shrink-0">
                       <div className="h-10 bg-white rounded-xl w-full flex items-center px-3 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.08)] border border-slate-100 gap-3 mb-2">
                          <Search className="text-brand-blue w-4 h-4" />
                          <span className="text-slate-500 font-medium text-xs truncate">
                            Meilleur Artisan [Votre Ville]
                          </span>
                       </div>
                       
                       {/* Filter Tags */}
                       <div className="flex gap-2 pb-1 overflow-x-hidden">
                          <div className="px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] font-bold shadow-sm tracking-tight whitespace-nowrap">Meilleurs résultats</div>
                          <div className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold border border-slate-100 whitespace-nowrap">Ouvert maintenant</div>
                       </div>
                    </div>
                    
                    {/* Map Area - Top 35% */}
                    <div className="h-[35%] bg-slate-100 w-full relative overflow-hidden shrink-0">
                       {/* Map Pattern */}
                       <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/map-pattern.png')] bg-cover"></div>
                       
                       {/* The Pin (You) */}
                       <div className="absolute top-[40%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                          <div className="bg-brand-blue text-white px-2 py-0.5 rounded shadow-lg shadow-brand-blue/30 text-[8px] font-bold mb-1 animate-bounce">
                             Vous
                          </div>
                          <div className="w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center animate-pulse">
                              <div className="w-4 h-4 bg-brand-blue rounded-full border-2 border-white shadow-lg"></div>
                          </div>
                       </div>
                       
                       {/* Competitor pins */}
                       <div className="absolute top-[30%] right-8 w-2 h-2 bg-slate-300 rounded-full border border-white shadow-sm"></div>
                       <div className="absolute top-[60%] left-6 w-2 h-2 bg-slate-300 rounded-full border border-white shadow-sm"></div>
                    </div>

                    {/* List Area - Bottom 65% - Pull Up Drawer Effect */}
                    <div className="flex-1 bg-white relative -mt-4 rounded-t-3xl shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-20 px-3 pt-3 pb-4 overflow-hidden flex flex-col">
                        
                        {/* Drag Handle */}
                        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4"></div>

                        {/* Card 1: Your Company (Highlighted) */}
                        <div className="bg-white rounded-xl p-3 shadow-[0_2px_15px_-3px_rgba(0,85,255,0.15)] border border-brand-blue/10 relative mb-3 group cursor-pointer">
                            <div className="absolute -left-1 -top-2 w-6 h-6 bg-brand-yellow text-slate-900 font-black flex items-center justify-center rounded-lg shadow-sm border-2 border-white transform -rotate-6 z-20 text-xs">
                                1
                            </div>
                            
                            <div className="flex justify-between items-start mb-2 pl-3">
                                <div>
                                    <h3 className="font-black text-slate-900 text-xs uppercase leading-tight mb-0.5">VOTRE ENTREPRISE</h3>
                                    <p className="text-[10px] text-brand-blue font-bold">Expert Rénovation & BTP</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="bg-green-100 text-green-700 text-[8px] font-bold px-1.5 py-0.5 rounded-full mb-1">OUVERT</span>
                                    <div className="flex items-center gap-0.5 text-brand-yellow">
                                        <Star size={10} fill="currentColor" />
                                        <span className="text-slate-900 text-[10px] font-bold ml-0.5">5.0</span>
                                        <span className="text-slate-400 text-[9px] font-normal">(84)</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex gap-2 mt-2">
                                <div className="flex-1 bg-brand-blue text-white py-2 rounded-lg text-center font-bold text-[10px] shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-1.5 group-hover:bg-blue-700 transition-colors">
                                    <Phone size={11} fill="currentColor" /> Appeler
                                </div>
                                <div className="flex-1 bg-slate-50 text-slate-600 py-2 rounded-lg text-center font-bold text-[10px] border border-slate-100 flex items-center justify-center gap-1.5 group-hover:bg-white transition-colors">
                                    <ArrowRight size={11} /> Site Web
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Competitors (Generic) */}
                        <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100 relative grayscale opacity-70 mb-2">
                             <div className="absolute -left-1 -top-2 w-5 h-5 bg-slate-200 text-slate-500 font-bold flex items-center justify-center rounded-lg shadow-sm border border-white z-20 text-[10px]">
                                2
                            </div>
                            <div className="flex justify-between items-start pl-3 mb-1">
                                <div>
                                    <h3 className="font-bold text-slate-500 text-xs uppercase leading-tight">VOS CONCURRENTS</h3>
                                    <div className="flex items-center gap-1 mt-1">
                                        <div className="flex text-slate-300">
                                            <Star size={9} fill="currentColor" />
                                            <Star size={9} fill="currentColor" />
                                            <Star size={9} fill="currentColor" />
                                            <Star size={9} fill="currentColor" />
                                            <Star size={9} />
                                        </div>
                                        <span className="text-slate-400 text-[9px]">(12 avis)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 text-[9px] text-slate-400 font-medium pl-3 italic">
                                Pas de site web • Difficile à trouver
                            </div>
                        </div>

                    </div>
                 </div>
              </div>

              {/* Floating Notification - Hidden on Mobile */}
              <div className="hidden lg:flex absolute bottom-40 left-1/2 -translate-x-1/2 lg:-left-12 lg:bottom-48 bg-white p-3 pr-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 z-30 animate-float-slow items-center gap-3 w-max">
                <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                     <Phone size={18} fill="currentColor" />
                </div>
                <div>
                      <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">NOUVEL APPEL</div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1">Chantier Confirmé <CheckCircle2 size={12} className="text-green-500" /></div>
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
