
import React from 'react';
import { CheckCircle2, Zap, Gift, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-600 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
             <Sparkles size={14} className="text-brand-blue" /> Programme Ambassadeur 2026
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark mb-4 leading-tight">
            Devenez le partenaire exclusif <br/> <span className="text-brand-blue">de votre secteur.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Nous ne travaillons qu'avec <strong>un seul artisan par métier et par ville</strong>. <br/>
            Une opportunité rare de blinder votre visibilité avec un tarif préférentiel.
          </p>
        </div>

        {/* Single Pricing Card - Exclusive Design */}
        <div className="flex justify-center max-w-xl mx-auto reveal">
            <div className="w-full relative flex flex-col p-8 sm:p-12 rounded-[3rem] overflow-hidden shadow-2xl bg-white text-slate-900 border border-slate-100 z-10">
              
              {/* Premium Top Border */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-blue via-blue-400 to-brand-blue"></div>
              
              <div className="mb-10 text-center">
                <div className="inline-block px-3 py-1 bg-blue-50 text-brand-blue rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  Offre Limitée : -50% de réduction
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-2">
                    Pack Croissance Intégral
                </h3>
                <div className="h-1 w-12 bg-brand-blue mx-auto mb-6"></div>
                
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-2">
                    <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                        Pour lancer notre agence dans votre département, nous recherchons un artisan sérieux pour devenir notre vitrine. 
                        <strong> En échange, nous divisons nos honoraires par deux.</strong>
                    </p>
                </div>
              </div>

              {/* Main Features */}
              <div className="flex-grow space-y-5 mb-10">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <Zap size={20} />
                    </div>
                    <div>
                        <span className="text-base font-bold text-slate-800">Votre Site Web Professionnel</span>
                        <p className="text-xs text-slate-500">Design moderne, optimisé pour les appels mobiles.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <MapPin size={20} />
                    </div>
                    <div>
                        <span className="text-base font-bold text-slate-800">Référencement Local Google</span>
                        <p className="text-xs text-slate-500">Optimisation de votre fiche Maps pour être en Top 3.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                        <span className="text-base font-bold text-slate-800">Bouclier Anti-Mauvais Avis</span>
                        <p className="text-xs text-slate-500">Filtrage intelligent pour protéger votre note 5/5.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                       <Gift size={20} />
                    </div>
                    <div>
                        <span className="text-base font-bold text-slate-800">Propriété à 100%</span>
                        <p className="text-xs text-slate-500">Pas d'abonnement, pas de location. Le site est à vous.</p>
                    </div>
                  </div>
              </div>

              <div className="mt-auto space-y-4">
                  <Button 
                    className="w-full justify-center py-5 text-lg font-bold rounded-2xl group border-none bg-brand-dark hover:bg-slate-800 text-white shadow-xl shadow-slate-200"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Vérifier la disponibilité locale
                  </Button>
                  
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-red-600 animate-pulse">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        <span>1 seule place restante dans votre secteur</span>
                    </div>
                    <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest">
                        Satisfait ou remboursé
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
