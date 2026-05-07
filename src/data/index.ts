import type { Member, Activity, Event } from '@/lib/index';

export const members: Member[] = [
  {
    role: 'Présidente de l\'association',
    name: 'Dr. Lamia ELJADIRI',
    title: 'Dr.',
  },
  {
    role: 'Vice-présidente',
    name: 'Pr. Amal EL ALAMA',
    title: 'Pr.',
  },
  {
    role: 'Trésorière',
    name: 'Pr. Assia FADIL',
    title: 'Pr.',
  },
  {
    role: 'Trésorier adjoint',
    name: 'Dr. Mohamed HOUSNI',
    title: 'Dr.',
  },
  {
    role: 'Secrétaire générale',
    name: 'Pr. Rachida ZATTI',
    title: 'Pr.',
  },
];

export const activities: Activity[] = [
  {
    id: 1,
    icon: '🤖',
    title: 'Compétitions Scientifiques',
    description: 'Participation à l\'IAIO (Olympiade Internationale en Intelligence Artificielle) et autres compétitions nationales et internationales.',
  },
  {
    id: 2,
    icon: '🎤',
    title: 'Conférences & Sommets',
    description: 'Participation à des tables rondes comme le sommet GAIN sur la gouvernance de l\'IA et son impact éthique sur les jeunes générations.',
  },
  {
    id: 3,
    icon: '💡',
    title: 'Ateliers & Hackathons',
    description: 'Organisation de conférences, d\'ateliers de formation, de Hackathons et de rencontres avec des professionnels du secteur.',
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Engagement Citoyen',
    description: 'Visites d\'orphelinats, maisons de retraite et associations de protection des animaux pour renforcer les valeurs civiques.',
  },
  {
    id: 5,
    icon: '❤️',
    title: 'Actions Solidaires',
    description: 'Actions sociales solidaires, notamment durant le mois de Ramadan au profit des personnes démunies.',
  },
  {
    id: 6,
    icon: '🎓',
    title: 'Encadrement Académique',
    description: 'Supervision d\'événements académiques, scientifiques et pédagogiques pour accompagner les étudiants dans leur parcours.',
  },
];

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Synergie des Talents',
    description: 'Conférence "IA, Digital et Management au service de l\'innovation" réunissant experts, développeurs et entrepreneurs.',
    type: 'Conférence',
  },
  {
    id: 2,
    title: 'Al Kendi Innovation Challenge',
    description: 'Compétition et concours de projets multidisciplinaires évalués par des experts du secteur.',
    type: 'Compétition',
  },
  {
    id: 3,
    title: 'Atelier Data & Décision',
    description: 'Apprendre à exploiter la donnée dans un contexte réel, de la conception à la prise de décision.',
    type: 'Atelier',
  },
  {
    id: 4,
    title: 'Journée Pitch & Invest',
    description: 'Développer les compétences techniques et Soft Skills à travers des présentations devant des investisseurs.',
    type: 'Forum',
  },
  {
    id: 5,
    title: 'Forum d\'Orientation',
    description: 'Accompagner les élèves et étudiants dans leur choix d\'orientation académique et professionnelle.',
    type: 'Forum',
  },
];

// Chatbot responses
export const chatbotResponses: Record<string, string> = {
  bonjour: 'Bonjour ! Bienvenue sur le site de l\'Association des Jeunes Al Kendi (AJK) 🎓 Comment puis-je vous aider ?',
  hello: 'Hello! Welcome to AJK - Association des Jeunes Al Kendi 🎓 How can I help you?',
  مرحبا: 'أهلاً وسهلاً! مرحباً بكم في موقع جمعية شباب الكندي (AJK) 🎓 كيف يمكنني مساعدتك؟',
  membres: 'Notre bureau exécutif comprend:\n• Dr. Lamia ELJADIRI - Présidente\n• Pr. Amal EL ALAMA - Vice-présidente\n• Pr. Assia FADIL - Trésorière\n• Dr. Mohamed HOUSNI - Trésorier adjoint\n• Pr. Rachida ZATTI - Secrétaire générale',
  activités: 'Nos principales activités incluent:\n• Compétitions scientifiques (IAIO)\n• Conférences et sommets\n• Ateliers et Hackathons\n• Actions citoyennes et solidaires\n• Encadrement académique',
  activites: 'Nos principales activités incluent:\n• Compétitions scientifiques (IAIO)\n• Conférences et sommets\n• Ateliers et Hackathons\n• Actions citoyennes et solidaires\n• Encadrement académique',
  mission: 'Notre mission est de soutenir et d\'accompagner les étudiants du centre BTS Al Kendi en favorisant leur développement académique, professionnel et personnel 🚀',
  contact: 'Pour nous contacter, veuillez remplir le formulaire de contact sur notre site ou nous joindre via les réseaux sociaux. La présidente Dr. Lamia ELJADIRI est disponible pour toute demande.',
  événements: 'Nos prochains événements:\n• Synergie des Talents (Conférence IA)\n• Al Kendi Innovation Challenge\n• Atelier Data & Décision\n• Journée Pitch & Invest\n• Forum d\'Orientation',
  evenements: 'Nos prochains événements:\n• Synergie des Talents (Conférence IA)\n• Al Kendi Innovation Challenge\n• Atelier Data & Décision\n• Journée Pitch & Invest\n• Forum d\'Orientation',
  ajk: 'AJK signifie "Association des Jeunes Al Kendi". C\'est une association dédiée à la jeunesse du centre BTS Al Kendi, fondée pour accompagner les étudiants dans leur développement académique et professionnel 🌟',
  default: 'Merci pour votre message ! Je suis le chatbot AJK. Vous pouvez me demander des informations sur :\n• Nos **membres**\n• Nos **activités**\n• Notre **mission**\n• Nos **événements** à venir\n• Nous **contacter**',
};
