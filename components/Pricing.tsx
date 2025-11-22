
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { CheckCircle2, Zap, AlertCircle, TrendingUp } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  // On suppose qu'il n'y a qu'une seule offre maintenant
  const plan = PRICING_PLANS[0];

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-12 reveal">
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mb-4">
            Une Offre Unique. <br/> <span className="text-brand-blue">Tout Inclus.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            On arrête les "options" compliquées. Le prix est simple et rentabilisé dès le premier chantier.
          </p>
        </div>

        <div className="max-w-xl mx-auto reveal scale-up">
            <div className="relative flex flex-col p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-brand-dark text-white shadow-2xl shadow-brand-blue/30 border border-brand-blue/50">
              
              {/* Banner Promo Urgent */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-500 via-red-600 to-red-500 animate-pulse"></div>
              
              {/* Alert Box Mobile Optimized */}
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 mb-6 flex items-center gap-3 animate-pulse-slow">
                  <div className="bg-red-500 p-1.5 rounded-full shrink-0 animate-bounce">
                      <TrendingUp size={16} className="text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-red-300 uppercase tracking-wide">
                      Le prix augmente très bientôt
                  </p>
              </div>

              <div className="mb-8 text-center">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-brand-blue mb-2">{plan.title}</h3>
                
                <div className="flex flex-col items-center justify-center gap-0 mb-4">
                    {plan.oldPrice && (
                        <span className="text-xl sm:text-2xl text-slate-500 line-through decoration-red-500/70 decoration-2 font-bold mb-1">
                            {plan.oldPrice}
                        </span>
                    )}
                    <div className="text-6xl sm:text-7xl font-black tracking-tight text-white drop-shadow-lg">
                        {plan.price}
                    </div>
                    <div className="text-sm text-slate-400 font-medium mt-2 bg-white/10 px-3 py-1 rounded-full">
                        Paiement unique à vie
                    </div>
                </div>
                
                <p className="text-slate-300 font-medium leading-relaxed max-w-sm mx-auto text-sm sm:text-base">
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 sm:space-y-5 mb-8 sm:mb-10 bg-slate-800/50 p-5 sm:p-6 rounded-2xl border border-slate-700">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="bg-brand-blue/20 p-1 rounded-full shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-100">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="primary" 
                className="w-full justify-center py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl bg-white text-brand-dark hover:bg-slate-100 shadow-lg shadow-white/20 border-none group animate-pulse-slow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.buttonText}
                <Zap className="ml-2 w-5 h-5 group-hover:fill-white transition-colors" />
              </Button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] sm:text-xs text-slate-400 text-center">
                <AlertCircle size={12} />
                <span>Offre limitée à 1 artisan par ville pour éviter la concurrence.</span>
              </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
