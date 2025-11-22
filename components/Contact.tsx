
import React from 'react';
import Button from './Button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Setup */}
      <div className="absolute inset-0 bg-brand-blue"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contact Info */}
          <div className="text-white reveal">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-6">
              Contact Direct
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Ne laissez pas un autre chantier vous échapper.
            </h2>
            <p className="text-brand-lightBlue text-lg mb-12 leading-relaxed">
              Pendant que vous lisez ceci, un particulier cherche un pro dans votre ville. 
              Si vous n'êtes pas le premier visible, c'est votre concurrent qui prendra le chèque. Changeons ça.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group p-4 rounded-2xl transition-colors hover:bg-white/5">
                <div className="bg-brand-yellow p-3 rounded-xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Appelez-nous</h3>
                  <p className="text-brand-lightBlue">+33 7 67 05 60 66</p>
                  <p className="text-sm text-white/50 mt-1">On parle le langage du chantier.</p>
                </div>
              </div>

              <div className="flex items-start group p-4 rounded-2xl transition-colors hover:bg-white/5">
                <div className="bg-brand-yellow p-3 rounded-xl mr-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Par email</h3>
                  <p className="text-brand-lightBlue">aaron@triva-media.com</p>
                  <p className="text-sm text-white/50 mt-1">Réponse rapide.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal delay-200 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Étude de Potentiel Gratuite</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 ml-1">Nom / Entreprise</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all focus:bg-white"
                    placeholder="Ex: SARL Martin"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 ml-1">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all focus:bg-white"
                    placeholder="06 ..."
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="activity" className="block text-sm font-semibold text-slate-700 ml-1">Votre Métier</label>
                <input 
                  type="text" 
                  id="activity" 
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all focus:bg-white"
                  placeholder="Couvreur, Plombier, Piscine..."
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 ml-1">Votre situation actuelle</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all focus:bg-white resize-none"
                  placeholder="Je n'ai pas de site, ou je veux moderniser mon site actuel..."
                ></textarea>
              </div>

              <Button 
                variant="primary" 
                className="w-full text-lg py-4 mt-2 group"
              >
                Recevoir mon audit gratuit
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-center text-slate-400 mt-4">
                Zéro engagement. Juste une discussion entre pros.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
