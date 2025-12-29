
import React from 'react';
import { FEATURES } from '../constants';
import { Star } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 reveal text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Tout ce qu'il faut pour <br/>
            <span className="text-brand-blue">trouver des chantiers.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            Pas de fonctionnalités inutiles. Juste les outils essentiels pour rassurer vos futurs clients et les inciter à vous appeler.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-auto">
          
          {/* Feature 1 - Visibilité Google */}
          <div className="reveal md:col-span-2 lg:col-span-2 row-span-2 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-brand-blue/30 transition-colors group relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors"></div>
             <div className="relative z-10 flex-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-brand-blue">
                  {React.createElement(FEATURES[0].icon, { size: 28, strokeWidth: 2 })}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{FEATURES[0].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm sm:text-base">{FEATURES[0].description}</p>
                </div>
             </div>
             <div className="mt-8 w-full h-40 sm:h-48 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-10"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    width="800"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                    alt="Artisan en plein travail sur un chantier de rénovation" 
                 />
             </div>
          </div>

          {/* Feature 2 - Gestion Avis */}
          <div className="reveal md:col-span-1 lg:col-span-2 bg-brand-dark text-white rounded-3xl p-6 sm:p-8 border border-slate-800 group overflow-hidden relative flex flex-col min-h-[280px]">
            <div className="relative z-10 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md mb-4 text-brand-yellow">
                {React.createElement(FEATURES[1].icon, { size: 24 })}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{FEATURES[1].title}</h3>
              <p className="text-slate-400 text-sm sm:text-base">{FEATURES[1].description}</p>
            </div>
            
            <div className="mt-auto bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-brand-yellow"><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/></div>
                    <span className="text-xs text-slate-300">Avis 5 étoiles</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full w-[90%]"></div>
                </div>
            </div>
          </div>

          {/* Feature 3 - Site Web */}
          <div className="reveal md:col-span-1 bg-blue-50 rounded-3xl p-6 sm:p-8 border border-blue-100 group hover:shadow-lg hover:shadow-blue-100/50 transition-all min-h-[200px]">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 text-brand-blue">
               {React.createElement(FEATURES[2].icon, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{FEATURES[2].title}</h3>
            <p className="text-slate-600 text-sm">{FEATURES[2].description}</p>
          </div>

          {/* Feature 4 - Propriété */}
          <div className="reveal md:col-span-1 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all min-h-[200px]">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-brand-dark">
               {React.createElement(FEATURES[3].icon, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{FEATURES[3].title}</h3>
            <p className="text-slate-500 text-sm">{FEATURES[3].description}</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;