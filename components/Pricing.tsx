
import React from 'react';
import { MapPin, ShieldCheck, Zap, Lock } from 'lucide-react';
import Button from './Button';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  const plan = PRICING_PLANS[0];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-20 reveal">
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mb-4 leading-tight">
            Une offre claire. <br/> <span className="text-brand-blue">Sans mauvaise surprise.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Vous savez exactement ce que vous payez et ce que vous obtenez. <br/>
            C'est comme un devis bien fait : tout est écrit, tout est carré.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="flex justify-center max-w-xl mx-auto reveal">
            <div className="w-full relative flex flex-col p-8 sm:p-12 rounded-[3rem] overflow-hidden shadow-2xl bg-white text-slate-900 border border-slate-100 z-10">
              
              {/* Premium Top Border */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-blue via-blue-400 to-brand-blue"></div>
              
              <div className="mb-10 text-center">
                <div className="inline-block px-3 py-1 bg-blue-50 text-brand-blue rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  Tout Inclus
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-2">
                    {plan.title}
                </h3>
                <div className="h-1 w-12 bg-brand-blue mx-auto mb-6"></div>
                
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-2">
                    <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                        {plan.description}
                    </p>
                </div>
              </div>

              {/* Main Features */}
              <div className="flex-grow space-y-5 mb-10">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <MapPin size={20} />
                    </div>
                    <div>
                        <span className="text-base font-bold text-slate-800">Visibilité Locale</span>
                        <p className="text-xs text-slate-500">On vous place sur la carte Google de votre ville.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <Zap size={20} />
                    </div>
                    <div>
                        <span className="text-base font-bold text-slate-800">Site Web Professionnel</span>
                        <p className="text-xs text-slate-500">Design moderne, textes inclus, adapté aux mobiles.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                        <span className="text-base font-bold text-slate-800">Gestion des Avis</span>
                        <p className="text-xs text-slate-500">Système pour récolter des 5 étoiles facilement.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <Lock size={20} />
                    </div>
                    <div>
                        <span className="text-base font-bold text-slate-800">Propriété Totale</span>
                        <p className="text-xs text-slate-500">Vous êtes propriétaire de votre site à 100%.</p>
                    </div>
                  </div>
              </div>

              <div className="mt-auto space-y-4">
                  <Button 
                    className="w-full justify-center py-5 text-lg font-bold rounded-2xl group border-none bg-brand-dark hover:bg-slate-800 text-white shadow-xl shadow-slate-200"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest">
                        Devis gratuit & sans engagement
                    </p>
                  </div>
              </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
