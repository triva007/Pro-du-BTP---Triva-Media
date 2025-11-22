import React from 'react';
import { PROBLEM_CARDS } from '../constants';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-5xl font-black mb-6">
            L'Expertise, vous l'avez.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Mais est-ce que ça se voit ?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            C'est le problème n°1 des bons artisans : vous bossez dur, vous faites du travail "carré", mais sur Google, vous êtes invisible.
            Résultat ? C'est le gars qui travaille mal (mais qui parle fort) qui rafle les beaux chantiers. On va remettre l'église au milieu du village.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEM_CARDS.map((card, index) => (
            <div key={index} className="reveal stagger-1 bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.color} shadow-lg`}>
                {React.createElement(card.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Problem;