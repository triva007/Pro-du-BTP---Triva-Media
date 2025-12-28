
import { 
  MapPin, 
  Smartphone, 
  Zap,
  Layout,
  Clock,
  ShieldCheck,
  Trophy,
  Gift,
  Search,
  Users,
  AlertTriangle,
  Lock,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { Feature, ProcessStep, Project, Testimonial, FaqItem, NavigationItem, PricingPlan, TeamMember } from './types';

// Navigation simple
export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Problème', href: '#problem' },
  { label: 'Solution', href: '#benefits' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: "L'Offre", href: '#pricing' },
];

// Stats démarqueurs - Avantages concurrentiels forts
export const STATS = [
  { value: "7 Jours", label: "Livraison Clé en Main" },
  { value: "0€", label: "D'abonnement mensuel" },
  { value: "100%", label: "Propriétaire du Site" },
  { value: "France", label: "Une petite équipe française" },
];

// Problèmes du quotidien de l'artisan
export const PROBLEM_CARDS = [
  {
    icon: Users,
    title: "La concurrence invisible",
    description: "Vos concurrents sont sur Google. Quand un client cherche un pro dans votre ville, il les trouve eux, pas vous. Même si vous travaillez mieux.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: AlertTriangle,
    title: "Le bouche-à-oreille ne suffit plus",
    description: "Compter uniquement sur les anciens clients, c'est risqué. Il suffit d'un mois creux pour se mettre en danger. Il faut un flux régulier de nouveaux contacts.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Search,
    title: "Des sites qui ne servent à rien",
    description: "Avoir un site que personne ne visite, c'est comme payer une belle enseigne dans une impasse. Votre site doit être vu pour être utile.",
    color: "bg-slate-100 text-slate-600"
  }
];

// Fonctionnalités en langage clair
export const FEATURES: Feature[] = [
  {
    icon: MapPin,
    title: "1. Être trouvé sur Google",
    description: "Quand on tape 'Plombier + Votre Ville', vous devez apparaître. On configure votre fiche Google et votre site pour que les clients locaux vous trouvent en premier."
  },
  {
    icon: ShieldCheck,
    title: "2. Gérer votre réputation",
    description: "On met en place un système simple pour inciter vos clients satisfaits à laisser 5 étoiles, et pour intercepter les mécontents avant qu'ils ne publient un avis négatif."
  },
  {
    icon: Smartphone,
    title: "3. Un site qui inspire confiance",
    description: "Un design propre, moderne, qui s'affiche bien sur téléphone. On met en avant vos photos de chantiers pour prouver votre savoir-faire immédiatement."
  },
  {
    icon: Lock,
    title: "4. Vous êtes propriétaire",
    description: "Pas d'abonnement caché, pas de location. Une fois le site payé, il est à vous. Vous avez les clés, le code, et tout le contenu. Liberté totale."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "On discute de votre métier",
    description: "Un appel simple. Vous nous expliquez ce que vous faites, votre zone d'intervention, et le type de chantiers que vous voulez (plus de dépannage ? plus de rénovation ?)."
  },
  {
    number: "2",
    title: "On construit votre vitrine",
    description: "On rédige les textes, on choisit les photos, on crée le site et on optimise votre fiche Google. Vous n'avez rien à faire, on gère la technique."
  },
  {
    number: "3",
    title: "Vous recevez les appels",
    description: "Une fois en ligne, votre entreprise gagne en visibilité. Les clients qui cherchent un pro dans votre secteur tombent sur vous et vous appellent."
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: "Toiture & Zinc 33",
    category: "Couvreur Zingueur",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Avant : Invisible sur internet. Après : 1ère page Google sur sa ville. Résultat : +3 chantiers complets par mois."
  },
  {
    id: 2,
    title: "Elec' Confort",
    category: "Électricien",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Avant : Trop dépendant des pages jaunes. Après : Un site moderne qui lui appartient. Il ne paie plus d'abonnement mensuel."
  },
  {
    id: 3,
    title: "Rénov' Habitat",
    category: "Maçonnerie",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Avant : Quelques mauvais avis injustifiés. Après : Mise en place de notre système de gestion d'avis. Note remontée à 4.8/5."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Cédric M.",
    role: "Menuisier",
    company: "Menuiserie du Sud",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "J'y connais rien en informatique. Ils se sont occupés de tout. Aujourd'hui quand on tape menuisier dans ma ville, je sors en premier. C'est tout ce que je voulais."
  },
  {
    id: 2,
    name: "Pascal B.",
    role: "Plombier",
    company: "PB Services",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    quote: "J'en avais marre de payer des abonnements tous les mois pour un site qui ne m'appartenait pas. Là, j'ai payé une fois, le site est à moi, et il est bien plus beau."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Pack Visibilité Artisan",
    price: "Sur Devis",
    period: "Paiement en 1 fois",
    description: "Tout ce qu'il faut pour être visible et crédible dans votre ville. Sans frais cachés, sans abonnement mensuel.",
    features: [
      "Création du Site Internet complet",
      "Optimisation fiche Google (pour la carte)",
      "Rédaction des textes professionnels",
      "Sécurisation du site (Cadenas HTTPS)",
      "Le site vous appartient à 100%",
      "Formation pour modifier vos photos"
    ],
    isPopular: true,
    buttonText: "Demander mon devis gratuit",
    buttonVariant: "primary"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien ça coûte ?",
    answer: "Contrairement aux agences qui vous facturent 200€ par mois pendant 4 ans (soit 10 000€ !), nous fonctionnons au forfait unique. Vous payez la création une seule fois. Contactez-nous pour un devis adapté à votre métier."
  },
  {
    question: "Est-ce que je suis propriétaire du site ?",
    answer: "OUI. C'est le point le plus important. Une fois le site livré, il est à vous. Vous ne nous devez plus rien."
  },
  {
    question: "Je n'ai pas le temps de m'en occuper...",
    answer: "Ça tombe bien, c'est notre travail. On s'occupe de la technique, des textes, de la mise en ligne. Vous avez juste à répondre au téléphone quand les clients appellent."
  },
  {
    question: "Combien de temps ça prend ?",
    answer: "En général, une fois qu'on a discuté de vos besoins, votre site est en ligne sous 7 à 10 jours."
  },
  {
    question: "J'ai déjà un site mais il est vieux...",
    answer: "On peut le refaire complètement. On garde votre nom de domaine (l'adresse .fr ou .com) mais on modernise tout le design pour qu'il inspire confiance aux clients d'aujourd'hui."
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Alexandre",
    role: "Conseiller Pro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Sarah",
    role: "Création Web",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "David",
    role: "Expert Google",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  }
];
