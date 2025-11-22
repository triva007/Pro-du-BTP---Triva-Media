
import { 
  MapPin, 
  Smartphone, 
  TrendingUp, 
  Zap,
  Search,
  Layout,
  PhoneCall,
  Clock,
  ArrowUpRight,
  XCircle,
  CheckCircle,
  ShieldCheck,
  Hammer,
  HardHat,
  Ruler,
  Award,
  UserX,
  Filter,
  Star,
  Users,
  Ban,
  Euro,
  FileWarning,
  Monitor,
  Lock,
  Megaphone,
  Trophy
} from 'lucide-react';
import { Feature, ProcessStep, Project, Testimonial, FaqItem, NavigationItem, PricingPlan, ComparisonPoint, TeamMember } from './types';

// Navigation directe
export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Le Constat', href: '#problem' },
  { label: 'La Méthode', href: '#process' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Offre Unique', href: '#pricing' },
];

// Stats orientées Business Réel
export const STATS = [
  { value: "100%", label: "Propriétaire du site" },
  { value: "N°1", label: "Votre place visée" },
  { value: "X3", label: "Demandes sérieuses" },
  { value: "24h/7", label: "Votre vitrine bosse" },
];

// Problèmes basés sur la FIERTÉ et L'INJUSTICE
export const PROBLEM_CARDS = [
  {
    icon: Trophy,
    title: "Les 'Bricoleurs' vous passent devant",
    description: "Vous connaissez votre métier sur le bout des doigts. Pourtant, sur Google, c'est souvent un concurrent moins qualifié (ou qui casse les prix) qui sort en premier. C'est injuste, mais ça se corrige.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: ShieldCheck,
    title: "La peur du 'Client Roi' tyrannique",
    description: "Une seule étoile injustifiée d'un client de mauvaise foi peut salir 10 ans de réputation. Vous hésitez à demander des avis par peur des représailles. On a la solution pour blinder ça.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Lock,
    title: "Le Bouche-à-oreille a ses limites",
    description: "Le bouche-à-oreille est excellent, mais il s'essouffle si on ne remet pas de charbon dans la machine. Notre système injecte de nouveaux clients pour relancer les recommandations.",
    color: "bg-slate-100 text-slate-600"
  }
];

export const FEATURES: Feature[] = [
  {
    icon: MapPin,
    title: "On vous place sur la Carte",
    description: "Quand on cherche votre métier dans votre ville, c'est VOUS qui devez sortir en gros. Pas le voisin. On optimise tout pour que Google vous identifie comme le patron du secteur."
  },
  {
    icon: ShieldCheck,
    title: "Le Filtre Anti-Mauvaise Foi",
    description: "Le client est content ? Son avis va sur Google. Le client râle ? Son avis est bloqué et arrive direct dans votre boîte mail pour régler ça en privé. Votre note reste impeccable."
  },
  {
    icon: PhoneCall,
    title: "Une Vitrine qui inspire le Respect",
    description: "Fini le site qui fait 'bricolage'. On vous fait une présentation carrée, propre, qui montre vos plus beaux chantiers. Le client doit se dire : 'Lui, c'est un sérieux'."
  },
  {
    icon: Monitor,
    title: "C'est à VOUS (Pas de location)",
    description: "Beaucoup d'agences vous 'louent' votre site. Si vous arrêtez de payer, ils coupent tout. Chez nous, vous payez la construction, et on vous donne les clés. C'est votre patrimoine."
  },
  {
    icon: Zap,
    title: "La Méthode 'Avis Faciles'",
    description: "Plus vous avez d'avis, plus vous signez cher. On vous donne le système simple (un lien magique par SMS) pour que vos clients satisfaits vous notent en 10 secondes à la fin du chantier."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "Mise au Propre",
    description: "On récupère vos infos, vos photos de chantiers, et on construit une image digitale qui reflète la qualité de votre travail réel. On fait le ménage."
  },
  {
    number: "2",
    title: "Prise de Terrain",
    description: "On lance la machine. On force Google à comprendre que c'est vous la référence locale. Votre nom commence à remonter sur les recherches des clients."
  },
  {
    number: "3",
    title: "Verrouillage",
    description: "On installe le système de filtrage d'avis. Vous commencez à récolter des 5 étoiles. Votre réputation devient intouchable. Les concurrents ne peuvent plus suivre."
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: "Toiture & Zinc 33",
    category: "Couvreur Zingueur",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Problème : Un as de la toiture, mais invisible. Résultat : Aujourd'hui, il sort 1er sur sa ville. Il choisit ses chantiers et a arrêté de courir après les clients."
  },
  {
    id: 2,
    title: "Elec' Confort",
    category: "Électricien Général",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Problème : Se faisait avoir par des apporteurs d'affaires. Résultat : Son propre site lui ramène 15 appels par mois. Il a rentabilisé son investissement en 2 chantiers."
  },
  {
    id: 3,
    title: "Rénov' Habitat Global",
    category: "Rénovation Générale",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Problème : Peur panique des faux avis. Résultat : Avec notre filtre, il est monté à 4.9/5. Les clients signent les devis plus vite car ils ont confiance."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marc D.",
    role: "Artisan Menuisier",
    company: "MD Menuiserie",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Je n'y connais rien en informatique et je m'en fous. Moi je veux juste que le téléphone sonne pour du boulot sérieux. C'est ce qu'ils ont fait. C'est carré."
  },
  {
    id: 2,
    name: "Karim B.",
    role: "Façadier",
    company: "KB Ravalement",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    quote: "Le truc du filtre d'avis, c'est du génie. J'avais un client qui voulait me descendre pour une histoire de délai, le système l'a bloqué. Ma note Google est restée à 5/5."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Pack Intégral : Domination Locale",
    price: "990 €",
    oldPrice: "2'200 €",
    description: "Tout le système (Site + Google + Réputation). Attention, vu la demande, ce tarif de lancement va bientôt augmenter.",
    features: [
      "Site Web Pro (Création ou Refonte complète)",
      "Positionnement Google (Pour être vu)",
      "🛡️ Filtre Anti-Mauvais Avis (Protection)",
      "Optimisation Fiche Google Maps",
      "Rédaction Commerciale (On vend votre expertise)",
      "✅ 100% À VOUS (Propriétaire à vie)"
    ],
    bonuses: [
      {
        title: "Formation : Maîtriser Google",
        description: "Tuto vidéo simple pour gérer votre fiche et poster vos photos comme un pro.",
        value: "290 €"
      },
      {
        title: "Hébergement & Maintenance",
        description: "Tout est inclus la 1ère année : Serveur sécurisé + Mises à jour.",
        value: "300 €"
      },
      {
        title: "Pack 'Réponses aux Avis'",
        description: "Des modèles de textes professionnels à copier-coller pour vos clients.",
        value: "150 €"
      }
    ],
    isPopular: true,
    buttonText: "Bloquer ce tarif maintenant",
    buttonVariant: "primary"
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    label: "Les Clients",
    bad: "Partagés avec 3 autres pros",
    good: "100% pour vous (Directs)"
  },
  {
    label: "Image perçue",
    bad: "Bricoleur du coin",
    good: "Entreprise de Référence"
  },
  {
    label: "En cas de litige",
    bad: "Votre note Google chute",
    good: "Le filtre vous protège"
  },
  {
    label: "Ce que vous payez",
    bad: "Un loyer à vie (Perte sèche)",
    good: "Un investissement (Actif)"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Pourquoi seulement 990€ ?",
    answer: "Parce qu'on élimine les frais inutiles d'agence traditionnelle. Mais attention, pour maintenir cette qualité de service, le prix va augmenter prochainement pour les nouveaux clients. Profitez-en maintenant."
  },
  {
    question: "J'ai déjà un site web, vous pouvez le refaire ?",
    answer: "Oui, absolument. On garde votre nom de domaine (votre adresse sur le web) mais on reconstruit tout l'intérieur. On remplace votre vieux site par notre machine de guerre optimisée pour Google et la conversion."
  },
  {
    question: "J'ai pas le temps de gérer un site...",
    answer: "Ça tombe bien, on ne vous demande pas de le gérer. Une fois en place, ça tourne tout seul. C'est comme une bonne installation : une fois posée, on n'y touche plus, ça fonctionne."
  },
  {
    question: "C'est quoi cette histoire de filtrage d'avis ?",
    answer: "C'est votre sécurité. Avant de publier sur Google, on demande au client s'il est satisfait. Si OUI -> Google. Si NON -> Formulaire privé pour vous. Ça évite que les clients règlent leurs comptes en public."
  },
  {
    question: "Pourquoi le prix va augmenter ?",
    answer: "Nous limitons le nombre d'artisans que nous accompagnons par secteur pour garantir des résultats. La demande explose, donc nos tarifs vont s'ajuster à la valeur réelle du marché (env. 2000€)."
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Alexandre",
    role: "Stratège BTP",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Sarah",
    role: "Design & Conversion",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "David",
    role: "Expert Google Maps",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  }
];
