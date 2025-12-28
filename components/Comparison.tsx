
import React from 'react';
import { FileX, BarChart3, Clock } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            3 Raisons de nous faire confiance
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Pas de blabla. On connaît le bâtiment. Voici ce qu'on vous garantit.
          </p>
        </div>

        {/* 3 Pillars Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Pillar 1: No Bad Contracts */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 reveal flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-500 rotate-3 group-hover:rotate-0 transition-transform">
                    <FileX size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Stop aux Contrats 48 Mois</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Les agences qui vous bloquent sur 4 ans avec un crédit-bail déguisé, c'est fini. Ici, vous êtes libre. Pas de banque, pas de menottes.
                </p>
            </div>

            {/* Pillar 2: Speed */}
            <div className="bg-brand-dark rounded-3xl p-8 shadow-xl shadow-brand-dark/20 border border-slate-800 reveal stagger-1 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                
                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-6 text-white rotate-3 group-hover:rotate-0 transition-transform relative z-10">
                    <Clock size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-white mb-3 relative z-10">Livré en 7 Jours Chrono</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed relative z-10">
                    Votre temps est précieux. On ne traîne pas. Une fois les infos reçues, on lance le chantier digital et on livre la semaine suivante.
                </p>
            </div>

            {/* Pillar 3: Results */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 reveal stagger-2 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 rotate-3 group-hover:rotate-0 transition-transform">
                    <BarChart3 size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">100% Spécialisé BTP</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    On ne fait pas de sites pour coiffeurs. On connaît vos clients. On sait ce qui les rassure et ce qui les fait signer un devis.
                </p>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Comparison;
