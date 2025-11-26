
import React from 'react';
import { CheckCircle2, Zap, Gift, Coins, Sparkles } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
             <Sparkles size={14} className="fill-amber-500 text-amber-500" /> Offre Partenaire
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mb-4 leading-tight">
            Propriétaire de votre site <br/> <span className="text-brand-blue">pour moins de 1000€.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Nous cherchons nos premiers artisans <strong>ambassadeurs</strong> sur votre secteur. <br/>
            Profitez de cette opportunité unique pour vous équiper au tarif de lancement.
          </p>
        </div>

        {/* Single Pricing Card - Hardcoded Premium Design */}
        <div className="flex justify-center max-w-lg mx-auto reveal scale-up">
            <div className="w-full relative flex flex-col p-6 sm:p-10 rounded-[2rem] overflow-hidden shadow-2xl bg-white text-slate-900 shadow-amber-500/10 border border-amber-100 z-10 transition-transform duration-300 hover:scale-[1.01]">
              
              {/* Premium Ribbon */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300"></div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-20">
                 -50% Lancement
              </div>
              
              <div className="mb-6 sm:mb-8 text-center mt-4">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-2 text-amber-600">
                    Pack Intégral : Propriétaire
                </h3>
                
                <div className="flex flex-col items-center justify-center gap-0 mb-4">
                    <div className="relative">
                       <span className="text-lg sm:text-xl text-slate-400 line-through font-bold mb-1 block decoration-slate-300 decoration-2">
                           1 990 €
                       </span>
                    </div>
                    
                    <div className="flex items-end gap-2 flex-wrap justify-center mt-1">
                        <div className="text-6xl sm:text-7xl font-black tracking-tight text-brand-dark drop-shadow-sm">
                            990 €
                        </div>
                    </div>
                    <div className="text-sm sm:text-base font-bold mb-2 whitespace-nowrap uppercase tracking-wider mt-2 text-slate-400">
                        Paiement unique
                    </div>
                    
                    <div className="text-xs text-amber-700 font-bold mt-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 flex items-center gap-2">
                        <CheckCircle2 size={12} /> Site 100% à vous - Zéro Loyer
                    </div>
                </div>
                
                <p className="font-medium leading-relaxed max-w-sm mx-auto text-sm sm:text-base text-slate-500">
                  La solution clé en main pour dominer votre marché local.
                </p>
              </div>

              {/* Main Features */}
              <div className="flex-grow space-y-4 mb-8 p-6 rounded-2xl border bg-slate-50 border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full shrink-0 mt-0.5 bg-blue-100 text-brand-blue">
                       <Zap className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-left text-slate-700">🚀 Site Pro Livré en 7 jours</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full shrink-0 mt-0.5 bg-green-100 text-green-600">
                       <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-left text-slate-700">✅ Propriétaire à 100% (Pas de location)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full shrink-0 mt-0.5 bg-green-100 text-green-600">
                       <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-left text-slate-700">Positionnement Google & Maps</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full shrink-0 mt-0.5 bg-green-100 text-green-600">
                       <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-left text-slate-700">🛡️ Filtre Anti-Mauvais Avis inclus</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full shrink-0 mt-0.5 bg-green-100 text-green-600">
                       <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-left text-slate-700">Formation prise en main simple</span>
                  </div>
              </div>

              {/* BONUS SECTION */}
              <div className="mb-8 p-5 rounded-2xl border relative overflow-hidden bg-white border-amber-200 shadow-sm">
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-400"></div>
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                     <Gift className="w-5 h-5 text-amber-500" />
                     <h4 className="font-black uppercase tracking-wide text-xs text-amber-600">Bonus Ambassadeur</h4>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                      <div className="flex justify-between items-start gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                        <div className="text-left">
                          <div className="font-bold text-sm text-slate-800">Optimisation Fiche GMB</div>
                          <div className="text-xs leading-tight mt-0.5 text-slate-500">Pour sortir premier sur la carte.</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-slate-400 line-through text-xs">490 €</div>
                          <div className="font-bold text-xs uppercase text-green-600">Offert</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-start gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                        <div className="text-left">
                          <div className="font-bold text-sm text-slate-800">Pack Juridique</div>
                          <div className="text-xs leading-tight mt-0.5 text-slate-500">Mentions légales & confidentialité.</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-slate-400 line-through text-xs">290 €</div>
                          <div className="font-bold text-xs uppercase text-green-600">Offert</div>
                        </div>
                      </div>
                  </div>
              </div>

              <Button 
                className="w-full justify-center py-4 text-lg font-bold rounded-xl group mt-auto border-none bg-brand-yellow hover:bg-yellow-300 text-brand-dark shadow-lg shadow-yellow-500/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Profiter de l'offre (-50%)
                <Coins className="ml-2 w-5 h-5" />
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] sm:text-xs text-slate-400 text-center">
                  <CheckCircle2 size={12} />
                  <span>Satisfaction garantie ou retouches illimitées.</span>
              </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
