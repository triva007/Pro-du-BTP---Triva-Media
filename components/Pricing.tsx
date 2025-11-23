
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { CheckCircle2, Zap, AlertCircle, TrendingUp, Gift, Infinity, Coins } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mb-4 leading-tight">
            Une Offre Claire. <br/> <span className="text-brand-blue">Deux façons de démarrer.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            Évitez les contrats pièges sur 48 mois. Ici, vous choisissez : Abonnement flexible ou Achat comptant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto reveal scale-up items-start lg:items-stretch">
            {PRICING_PLANS.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col p-6 sm:p-10 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-300 ${
                    plan.isPopular 
                      ? 'bg-brand-dark text-white shadow-brand-blue/30 border border-brand-blue/50 z-10 lg:scale-105' 
                      : 'bg-white text-slate-900 shadow-slate-200/50 border border-slate-200 z-0'
                  }`}
                >
                  
                  {/* Banner Promo for Popular Plan */}
                  {plan.isPopular && (
                    <>
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-blue via-blue-400 to-brand-blue animate-pulse"></div>
                        <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-20">Le + Choisi</div>
                    </>
                  )}
                  
                  <div className={`mb-6 sm:mb-8 text-center ${plan.isPopular ? 'mt-8' : ''}`}>
                    <h3 className={`text-lg sm:text-xl font-bold uppercase tracking-wide mb-2 ${plan.isPopular ? 'text-brand-blue' : 'text-slate-400'}`}>
                        {plan.title}
                    </h3>
                    
                    <div className="flex flex-col items-center justify-center gap-0 mb-4">
                        {plan.oldPrice && (
                            <span className="text-base sm:text-lg text-slate-500 line-through font-bold mb-1">
                                {plan.oldPrice}
                            </span>
                        )}
                        <div className="flex items-end gap-2 flex-wrap justify-center">
                            <div className={`text-5xl sm:text-6xl font-black tracking-tight drop-shadow-lg ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                                {plan.price}
                            </div>
                            <div className={`text-lg sm:text-xl font-bold mb-2 whitespace-nowrap ${plan.isPopular ? 'text-slate-400' : 'text-slate-400'}`}>
                                {plan.period}
                            </div>
                        </div>
                        
                        {/* Specific badges per plan */}
                        {plan.isPopular ? (
                            <div className="text-xs text-brand-yellow font-bold mt-3 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                                Engagement 3 mois seulement
                            </div>
                        ) : (
                            <div className="text-xs text-brand-blue font-bold mt-3 bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/10">
                                Pas d'abonnement mensuel
                            </div>
                        )}
                    </div>
                    
                    <p className={`font-medium leading-relaxed max-w-sm mx-auto text-sm sm:text-base ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Main Features */}
                  <div className={`flex-grow space-y-4 mb-8 p-5 rounded-2xl border ${plan.isPopular ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <div className={`p-1 rounded-full shrink-0 mt-0.5 ${plan.isPopular ? 'bg-brand-blue/20' : 'bg-green-100'}`}>
                           {feature.includes('⚠️') || feature.includes('Option') ? (
                             <AlertCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${plan.isPopular ? 'text-brand-yellow' : 'text-orange-500'}`} />
                           ) : (
                             <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 ${plan.isPopular ? 'text-brand-blue' : 'text-green-600'}`} />
                           )}
                        </div>
                        <span className={`text-sm sm:text-base font-bold text-left ${plan.isPopular ? 'text-slate-100' : 'text-slate-700'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* BONUS SECTION */}
                  {plan.bonuses && plan.bonuses.length > 0 && (
                    <div className={`mb-8 p-5 rounded-2xl border relative overflow-hidden ${plan.isPopular ? 'bg-gradient-to-br from-brand-yellow/10 to-transparent border-brand-yellow/30' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className="flex items-center gap-2 mb-4 relative z-10">
                         <Gift className={`w-5 h-5 ${plan.isPopular ? 'text-brand-yellow' : 'text-brand-blue'}`} />
                         <h4 className={`font-black uppercase tracking-wide text-xs ${plan.isPopular ? 'text-brand-yellow' : 'text-brand-blue'}`}>Bonus Offerts</h4>
                      </div>
                      
                      <div className="space-y-4 relative z-10">
                        {plan.bonuses.map((bonus, bIndex) => (
                          <div key={bIndex} className={`flex justify-between items-start gap-3 pb-3 border-b last:border-0 last:pb-0 ${plan.isPopular ? 'border-white/10' : 'border-slate-100'}`}>
                            <div className="text-left">
                              <div className={`font-bold text-sm ${plan.isPopular ? 'text-white' : 'text-slate-800'}`}>{bonus.title}</div>
                              <div className={`text-xs leading-tight mt-0.5 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>{bonus.description}</div>
                            </div>
                            <div className="text-right shrink-0">
                              <div className="text-slate-500 line-through text-xs decoration-red-500/70 decoration-1">Valeur {bonus.value}</div>
                              <div className={`font-bold text-xs uppercase ${plan.isPopular ? 'text-brand-yellow' : 'text-green-600'}`}>Inclus</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button 
                    variant={plan.isPopular ? 'primary' : 'outline'} 
                    className={`w-full justify-center py-4 text-lg font-bold rounded-xl group mt-auto ${
                        plan.isPopular 
                        ? 'bg-white text-brand-dark hover:bg-slate-100 shadow-lg shadow-white/20 border-none' 
                        : 'border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
                    }`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {plan.buttonText}
                    {plan.isPopular ? <Zap className="ml-2 w-5 h-5 group-hover:fill-brand-dark transition-colors" /> : <Coins className="ml-2 w-5 h-5" />}
                  </Button>

                  {plan.isPopular && (
                    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] sm:text-xs text-slate-400 text-center">
                        <Infinity size={12} />
                        <span>Modifications illimitées incluses dans le forfait.</span>
                    </div>
                  )}

                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
