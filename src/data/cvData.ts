import { CVData } from '../types/cv';

export const cvData: CVData = {
  personalInfo: {
    name: "YAMOKO ALI MOHAMED MOUSTAPHA",
    title: "Assembleur de Meubles Modernes Importés – Expert Chine",
    email: "aliyamoko401@gmail.com",
    phone: "+237 671 746 854",
    location: "Douala, Cameroun",
    birthDate: "5 mars 2006",
    status: "Célibataire",
    website: "ali-business-shop.vercel.app"
  },

  objective: "Professionnel qualifié avec plus de 3 ans d'expérience dans l'assemblage et la pose de mobilier moderne importé de Chine. Spécialisé dans le montage sur site (entreprise et domicile), avec un sens aigu du détail, du respect des normes de sécurité, et de la satisfaction client. Je souhaite continuer à évoluer dans le domaine du mobilier haut de gamme en mettant à profit mon expertise technique et ma polyvalence.",

  skills: [
    { name: "Assemblage de meubles", level: 95, category: 'technical' },
    { name: "Lecture de plans techniques", level: 90, category: 'technical' },
    { name: "Installation sur site", level: 92, category: 'technical' },
    { name: "Service client", level: 88, category: 'soft' },
    { name: "Coordination logistique", level: 85, category: 'soft' },
    { name: "Respect des délais", level: 95, category: 'soft' },
    { name: "Français", level: 100, category: 'language' },
    { name: "Anglais", level: 75, category: 'language' }
  ],

  experiences: [
    {
      title: "Assembleur de Meubles Modernes Importés",
      company: "China Tesco",
      location: "Douala, Cameroun",
      period: "Août 2024 – Présent",
      responsibilities: [
        "Montage et installation de mobilier importé depuis la Chine : bureaux, armoires, chaises, tables, canapés",
        "Pose sur site (clients entreprises et particuliers) avec conseils personnalisés",
        "Réduction des erreurs de montage, respect des délais et qualité de service",
        "Suivi des commandes, gestion des retours et coordination avec la logistique"
      ],
      achievements: [
        "Réduction de 30% des erreurs de montage",
        "Satisfaction client de 98%",
        "Installation de plus de 500 meubles"
      ]
    },
    {
      title: "Technicien en Meublement",
      company: "China Tesco",
      location: "Douala, Cameroun",
      period: "Août 2024 – Présent",
      responsibilities: [
        "Diagnostic technique : solidité, défauts de structure, réparation ou remplacement",
        "Lecture de plans techniques, rédaction de rapports d'intervention",
        "Tests de conformité et ajustements sur site",
        "Collaboration étroite avec le service client pour assurer un service de qualité"
      ]
    },
    {
      title: "Assembleur de Meubles",
      company: "Boutiques Chinoises Chizen",
      location: "Douala, Cameroun",
      period: "Janvier 2022 – Juillet 2024",
      responsibilities: [
        "Montage de meubles neufs avec outils manuels et électriques",
        "Installation rapide et soignée chez les clients",
        "Respect strict des consignes de sécurité et des normes de qualité",
        "Conseil d'utilisation, de nettoyage et de préservation du mobilier"
      ],
      achievements: [
        "Formation de 5 nouveaux assembleurs",
        "Amélioration des processus de montage"
      ]
    },
    {
      title: "Responsable Marketing Commercial",
      company: "Boutiques Chinoises",
      location: "Douala, Cameroun",
      period: "Juillet 2021 – Juillet 2024",
      responsibilities: [
        "Élaboration de stratégies de vente de mobilier adapté au marché local",
        "Gestion des promotions et publicité pour booster les ventes",
        "Collaboration avec les fournisseurs et partenaires chinois",
        "Analyse des ventes et ajustement des offres commerciales"
      ],
      achievements: [
        "Augmentation des ventes de 40%",
        "Développement de 3 nouveaux partenariats"
      ]
    }
  ],

  education: [
    {
      degree: "CAP Électricité",
      institution: "Collège Intech",
      period: "2020 – 2021",
      description: "Formation technique en électricité industrielle et domestique"
    },
    {
      degree: "Formation Développement Web",
      institution: "GetSmarter",
      period: "2024 – En cours",
      description: "HTML, CSS, JavaScript - Développement d'applications web modernes"
    }
  ],

  languages: [
    "Français – Langue maternelle",
    "Anglais – Niveau intermédiaire (technique et conversation)"
  ],

  interests: [
    "Technologies & Innovation",
    "Sport & Fitness",
    "Lecture technique",
    "Menuiserie créative"
  ],

  strengths: [
    "Plus de 3 ans d'expérience spécialisée dans l'assemblage de mobilier chinois haut de gamme",
    "Excellente résistance physique et capacité d'adaptation aux environnements variés",
    "Sens aigu du détail et perfectionnisme dans l'exécution des tâches",
    "Expertise reconnue du marché chinois du mobilier et des processus logistiques",
    "Capacité à former et encadrer de nouveaux collaborateurs",
    "Polyvalence technique : électricité, assemblage, service client, marketing"
  ]
};