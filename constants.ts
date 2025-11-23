
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
  Trophy,
  Gift,
  CheckCircle2,
  RefreshCw,
  Infinity
} from 'lucide-react';
import { Feature, ProcessStep, Project, Testimonial, FaqItem, NavigationItem, PricingPlan, ComparisonPoint, TeamMember } from './types';

// Navigation directe
export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Le Constat', href: '#problem' },
  { label: 'La Méthode', href: '#process' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Tarifs', href: '#pricing' },
];

// Stats orientées Business Réel
export const STATS = [
  { value: "100%", label: "Spécialisé BTP" },
  { value: "7 Jours", label: "Délai de livraison" },
  { value: "Illimité", label: "Modifications incluses" },
  { value: "N°1", label: "Votre place visée" },
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
    title: "Optimisation Google Maps (GMB)",
    description: "On travaille votre fiche en profondeur (mots-clés, catégories). On envoie tous les bons signaux à Google pour maximiser vos chances d'apparaître comme la référence locale de votre secteur."
  },
  {
    icon: ShieldCheck,
    title: "Bouclier de Réputation (Filtre)",
    description: "Notre système intercepte les avis. Les clients contents sont dirigés vers Google (5 étoiles). Les mécontents sont redirigés vers un formulaire privé. Votre e-réputation reste immaculée."
  },
  {
    icon: Layout,
    title: "Site Web conçu pour Convertir",
    description: "On ne fait pas du 'joli', on fait du 'rassurant'. Design pro, photos de vos réalisations, boutons d'appel visibles. Le visiteur voit que vous êtes sérieux, il a confiance, il appelle."
  },
  {
    icon: RefreshCw,
    title: "Tout Inclus & Illimité",
    description: "Maintenance, sécurité, hébergement, modifications de photos ou textes... Tout est géré par nous. Vous avez un département web complet pour le prix d'un resto par mois."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "Construction & Rassurance",
    description: "On crée votre Site Web Pro et on optimise votre fiche GMB. L'objectif : que tout soit carré pour rassurer immédiatement le client qui tombe sur vous."
  },
  {
    number: "2",
    title: "Activation du Bouclier",
    description: "On met en place le système de filtrage d'avis. On commence à solliciter vos anciens clients pour faire grimper votre note Google sans risque."
  },
  {
    number: "3",
    title: "Domination Locale",
    description: "Votre site convertit, votre visibilité locale augmente progressivement, et votre note frôle les 5/5. Vous devenez le choix évident sur votre secteur."
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
    quote: "J'étais invisible sur Google, relégué en page 2. Ils ont repris ma fiche GMB en main et en 2 mois, je suis remonté dans le Top 3 local. Le téléphone a recommencé à sonner."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Abonnement Intégral (VIP)",
    price: "197 €",
    period: "/ mois",
    oldPrice: "247 €",
    description: "L'offre PREMIUM tout-inclus. Ce tarif mensuel avantageux vous donne accès à notre service le plus complet : maintenance, modifications illimitées et support prioritaire.",
    features: [
      "🚀 Site Internet Pro (Livré en 7j)",
      "✅ 0€ de Frais de mise en service",
      "Positionnement Google & Fiche Maps",
      "🛡️ Filtre Anti-Mauvais Avis inclus",
      "Hébergement & Sécurité inclus",
      "Modifications illimitées",
      "Support prioritaire WhatsApp"
    ],
    bonuses: [
      {
        title: "Frais de Mise en Service OFFERTS",
        description: "Valeur réelle du setup technique et design.",
        value: "990 €"
      },
      {
        title: "Formation : Maîtriser Google",
        description: "Tuto vidéo simple.",
        value: "290 €"
      }
    ],
    isPopular: true,
    buttonText: "Je profite de l'offre VIP",
    buttonVariant: "primary"
  },
  {
    title: "Pack Propriétaire",
    price: "2 490 €",
    period: "Paiement unique",
    description: "Site livré clé en main. Idéal si vous avez déjà un prestataire technique ou si vous voulez gérer seul.",
    features: [
      "🚀 Site Internet Pro (Livré en 7j)",
      "✅ Propriétaire à 100% (Code source)",
      "Positionnement Google & Fiche Maps",
      "🛡️ Filtre Anti-Mauvais Avis inclus",
      "⚠️ Hébergement & Maintenance NON inclus",
      "⚠️ Option Maintenance VIP (+97€/mois)",
      "Formation prise en main incluse"
    ],
    bonuses: [
      {
        title: "Formation : Gérer son site",
        description: "1h de vidéo pour apprendre à modifier vos textes.",
        value: "290 €"
      },
      {
        title: "Optimisation Fiche GMB",
        description: "Paramétrage complet pour le référencement local.",
        value: "490 €"
      }
    ],
    isPopular: false,
    buttonText: "Choisir le Paiement Unique",
    buttonVariant: "outline"
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  // Données conservées pour compatibilité type, mais non utilisées dans la nouvelle version visuelle
  { label: "", bad: "", good: "" } 
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien de chantiers pour rentabiliser le site ?",
    answer: "Faites le calcul : à 197€/mois, souvent une seule petite intervention ou une demi-journée de chantier suffit à payer votre visibilité pour tout le mois. Tout le reste, c'est du bénéfice net pour votre entreprise."
  },
  {
    question: "Je veux du 'boulot sérieux', pas des bricoles. C'est possible ?",
    answer: "Oui. Un site pro et des avis 5 étoiles rassurent les clients qui ont du budget. On filtre les 'chasseurs de prix' par l'image haut de gamme que l'on donne de votre entreprise. Vous attirez des clients qui cherchent la qualité avant tout."
  },
  {
    question: "Combien de temps avant que mon téléphone sonne ?",
    answer: "Votre site est livré en 7 jours. Dès qu'il est en ligne et que votre fiche Google est optimisée, vous commencez à remonter. Généralement, nos artisans voient les premiers appels qualifiés arriver dès les premières semaines."
  },
  {
    question: "Est-ce un contrat bloquant sur 4 ans (Crédit-Bail) ?",
    answer: "SURTOUT PAS ! C'est le piège classique. Chez nous, l'engagement n'est que de 3 mois. Si ça ne vous rapporte rien, vous arrêtez. Nous sommes obligés de vous apporter des résultats pour vous garder."
  },
  {
    question: "J'ai déjà un site mais il ne rapporte rien...",
    answer: "Avoir un site ne suffit pas, il faut qu'il soit visible. C'est la différence entre une boutique dans une impasse et une boutique sur les Champs-Élysées. Nous transformons votre site 'vitrine vide' en apporteur d'affaires actif grâce au référencement local."
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
