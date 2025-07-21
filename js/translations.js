// Système de traductions multilingues
const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.services': 'Services',
        'nav.company': 'Entreprise',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Leader en Services Intégrés en Afrique Centrale',
        'hero.subtitle': 'V.G Service-Trading SARL propose une gamme complète de services dans le génie civil, transport, commerce, sécurité et immobilier.',
        'hero.btn.services': 'Découvrir nos Services',
        'hero.btn.contact': 'Nous Contacter',
        'hero.stats.countries': 'Pays d\'Opération',
        'hero.stats.sectors': 'Secteurs d\'Activité',
        'hero.stats.offices': 'Bureaux',
        
        // Services Section
        'services.title': 'Nos Services',
        'services.subtitle': 'Une expertise diversifiée pour répondre à tous vos besoins',
        'services.construction.title': 'Construction & Fabrication',
        'services.construction.item1': 'Génie civil et travaux d\'infrastructure',
        'services.construction.item2': 'Fabrication de briques',
        'services.construction.item3': 'Sous-traitance générale',
        'services.transport.title': 'Transport & Logistique',
        'services.transport.item1': 'Transport de marchandises et passagers',
        'services.transport.item2': 'Location de véhicules',
        'services.transport.item3': 'Camions et engins lourds',
        'services.commerce.title': 'Commerce & Approvisionnement',
        'services.commerce.item1': 'Commerce général (HDPE, portes, fenêtres)',
        'services.commerce.item2': 'Produits alimentaires en gros',
        'services.commerce.item3': 'Produits pétroliers et lubrifiants',
        'services.travel.title': 'Voyages & Douanes',
        'services.travel.item1': 'Réservation de vols internationaux',
        'services.travel.item2': 'Import / Export',
        'services.travel.item3': 'Services de dédouanement',
        'services.security.title': 'Sécurité & Services',
        'services.security.item1': 'Agents de sécurité et surveillance',
        'services.security.item2': 'Aménagement paysager',
        'services.security.item3': 'Services de jardinage',
        'services.realestate.title': 'Immobilier',
        'services.realestate.item1': 'Vente et location immobilière',
        'services.realestate.item2': 'Conseil en acquisition foncière',
        'services.realestate.item3': 'Aménagement et développement',
        
        // About Section
        'about.title': 'À Propos de V.G Service-Trading',
        'about.description': 'V.G Service-Trading SARL est une entreprise diversifiée proposant une large gamme de services dans les domaines du génie civil, fabrication de briques, transport, sécurité, commerce, immobilier, entre autres.',
        'about.vision.title': 'Notre Vision',
        'about.vision.text': 'Devenir un leader en Afrique centrale dans la prestation intégrée de services, reconnu pour l\'innovation et l\'excellence.',
        'about.mission.title': 'Notre Mission',
        'about.mission.text': 'Offrir des services diversifiés, de haute qualité, adaptés aux besoins des entreprises et particuliers, tout en respectant l\'intégrité et l\'environnement.',
        'about.values.title': 'Nos Valeurs',
        'about.values.expertise.title': 'Expertise Multisectorielle',
        'about.values.expertise.text': 'Une connaissance approfondie de multiples secteurs d\'activité',
        'about.values.reliability.title': 'Fiabilité & Professionnalisme',
        'about.values.reliability.text': 'Des services de qualité avec un engagement total',
        'about.values.pricing.title': 'Prix Compétitifs',
        'about.values.pricing.text': 'Des tarifs attractifs sans compromis sur la qualité',
        'about.values.client.title': 'Approche Centrée Client',
        'about.values.client.text': 'Une écoute attentive et des solutions personnalisées',
        
        // Contact Section
        'contact.title': 'Contactez-Nous',
        'contact.subtitle': 'Nous sommes présents en République Démocratique du Congo et en Tanzanie',
        'contact.info.title': 'Coordonnées',
        'contact.info.website': 'Site Web',
        'contact.info.emails': 'Emails',
        'contact.info.phones': 'Téléphones',
        'contact.offices.title': 'Nos Bureaux',
        'contact.legal.title': 'Informations Légales',
        
        // Footer
        'footer.description': 'Leader en services intégrés en Afrique Centrale, reconnu pour l\'innovation et l\'excellence.',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.copyright': '2024 V.G SERVICE-TRADING SARL. Tous droits réservés.'
    },
    
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.company': 'Company',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Leader in Integrated Services in Central Africa',
        'hero.subtitle': 'V.G Service-Trading SARL offers a complete range of services in civil engineering, transport, commerce, security and real estate.',
        'hero.btn.services': 'Discover our Services',
        'hero.btn.contact': 'Contact Us',
        'hero.stats.countries': 'Operating Countries',
        'hero.stats.sectors': 'Business Sectors',
        'hero.stats.offices': 'Offices',
        
        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Diversified expertise to meet all your needs',
        'services.construction.title': 'Construction & Manufacturing',
        'services.construction.item1': 'Civil engineering and infrastructure works',
        'services.construction.item2': 'Brick manufacturing',
        'services.construction.item3': 'General subcontracting',
        'services.transport.title': 'Transport & Logistics',
        'services.transport.item1': 'Freight and passenger transport',
        'services.transport.item2': 'Vehicle rental',
        'services.transport.item3': 'Trucks and heavy equipment',
        'services.commerce.title': 'Commerce & Supply',
        'services.commerce.item1': 'General trade (HDPE, doors, windows)',
        'services.commerce.item2': 'Wholesale food products',
        'services.commerce.item3': 'Petroleum products and lubricants',
        'services.travel.title': 'Travel & Customs',
        'services.travel.item1': 'International flight reservations',
        'services.travel.item2': 'Import / Export',
        'services.travel.item3': 'Customs clearance services',
        'services.security.title': 'Security & Services',
        'services.security.item1': 'Security guards and surveillance',
        'services.security.item2': 'Landscaping',
        'services.security.item3': 'Gardening services',
        'services.realestate.title': 'Real Estate',
        'services.realestate.item1': 'Real estate sales and rental',
        'services.realestate.item2': 'Land acquisition consulting',
        'services.realestate.item3': 'Development and planning',
        
        // About Section
        'about.title': 'About V.G Service-Trading',
        'about.description': 'V.G Service-Trading SARL is a diversified company offering a wide range of services in civil engineering, brick manufacturing, transport, security, commerce, real estate, among others.',
        'about.vision.title': 'Our Vision',
        'about.vision.text': 'To become a leader in Central Africa in integrated service delivery, recognized for innovation and excellence.',
        'about.mission.title': 'Our Mission',
        'about.mission.text': 'To provide diversified, high-quality services adapted to the needs of businesses and individuals, while respecting integrity and the environment.',
        'about.values.title': 'Our Values',
        'about.values.expertise.title': 'Multi-sector Expertise',
        'about.values.expertise.text': 'Deep knowledge of multiple business sectors',
        'about.values.reliability.title': 'Reliability & Professionalism',
        'about.values.reliability.text': 'Quality services with total commitment',
        'about.values.pricing.title': 'Competitive Pricing',
        'about.values.pricing.text': 'Attractive rates without compromising on quality',
        'about.values.client.title': 'Client-Centered Approach',
        'about.values.client.text': 'Attentive listening and personalized solutions',
        
        // Contact Section
        'contact.title': 'Contact Us',
        'contact.subtitle': 'We are present in the Democratic Republic of Congo and Tanzania',
        'contact.info.title': 'Contact Information',
        'contact.info.website': 'Website',
        'contact.info.emails': 'Emails',
        'contact.info.phones': 'Phones',
        'contact.offices.title': 'Our Offices',
        'contact.legal.title': 'Legal Information',
        
        // Footer
        'footer.description': 'Leader in integrated services in Central Africa, recognized for innovation and excellence.',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.copyright': '2024 V.G SERVICE-TRADING SARL. All rights reserved.'
    },
    
    sw: {
        // Navigation
        'nav.home': 'Nyumbani',
        'nav.services': 'Huduma',
        'nav.company': 'Kampuni',
        'nav.contact': 'Mawasiliano',
        
        // Hero Section
        'hero.title': 'Kiongozi katika Huduma za Kijumla Afrika ya Kati',
        'hero.subtitle': 'V.G Service-Trading SARL inatoa huduma kamili katika ujenzi wa kiraia, usafiri, biashara, usalama na mali isiyohamishika.',
        'hero.btn.services': 'Gundua Huduma Zetu',
        'hero.btn.contact': 'Wasiliana Nasi',
        'hero.stats.countries': 'Nchi za Uendeshaji',
        'hero.stats.sectors': 'Sekta za Biashara',
        'hero.stats.offices': 'Ofisi',
        
        // Services Section
        'services.title': 'Huduma Zetu',
        'services.subtitle': 'Utaalamu wa aina mbalimbali kukidhi mahitaji yako yote',
        'services.construction.title': 'Ujenzi na Utengenezaji',
        'services.construction.item1': 'Uhandisi wa kiraia na kazi za miundombinu',
        'services.construction.item2': 'Utengenezaji wa matofali',
        'services.construction.item3': 'Ukandarasi wa jumla',
        'services.transport.title': 'Usafiri na Usafirishaji',
        'services.transport.item1': 'Usafiri wa mizigo na abiria',
        'services.transport.item2': 'Ukodishaji wa magari',
        'services.transport.item3': 'Malori na vifaa vizito',
        'services.commerce.title': 'Biashara na Ugavi',
        'services.commerce.item1': 'Biashara ya jumla (HDPE, milango, madirisha)',
        'services.commerce.item2': 'Bidhaa za chakula kwa wingi',
        'services.commerce.item3': 'Bidhaa za petroli na mafuta',
        'services.travel.title': 'Safari na Forodha',
        'services.travel.item1': 'Uhifadhi wa ndege za kimataifa',
        'services.travel.item2': 'Uagizaji / Uuzaji',
        'services.travel.item3': 'Huduma za uhamishaji forodha',
        'services.security.title': 'Usalama na Huduma',
        'services.security.item1': 'Walinzi na uongozi',
        'services.security.item2': 'Upangaji wa mazingira',
        'services.security.item3': 'Huduma za bustani',
        'services.realestate.title': 'Mali Isiyohamishika',
        'services.realestate.item1': 'Mauzo na ukodishaji wa mali',
        'services.realestate.item2': 'Ushauri wa ununuzi wa ardhi',
        'services.realestate.item3': 'Maendeleo na mipango',
        
        // About Section
        'about.title': 'Kuhusu V.G Service-Trading',
        'about.description': 'V.G Service-Trading SARL ni kampuni ya aina mbalimbali inayotoa huduma mbalimbali katika uhandisi wa kiraia, utengenezaji wa matofali, usafiri, usalama, biashara, mali isiyohamishika, na mengine.',
        'about.vision.title': 'Maono Yetu',
        'about.vision.text': 'Kuwa kiongozi katika Afrika ya Kati katika utoaji wa huduma za kijumla, zinazotambuliwa kwa uvumbuzi na ubora.',
        'about.mission.title': 'Dhamira Yetu',
        'about.mission.text': 'Kutoa huduma mbalimbali za ubora wa juu, zinazofaa mahitaji ya biashara na watu binafsi, huku tukiheshimu uongozi na mazingira.',
        'about.values.title': 'Maadili Yetu',
        'about.values.expertise.title': 'Utaalamu wa Sekta Nyingi',
        'about.values.expertise.text': 'Maarifa ya kina ya sekta nyingi za biashara',
        'about.values.reliability.title': 'Utegemezi na Utaalamu',
        'about.values.reliability.text': 'Huduma za ubora na kujitolea kikamilifu',
        'about.values.pricing.title': 'Bei za Ushindani',
        'about.values.pricing.text': 'Bei za kuvutia bila kuhatarisha ubora',
        'about.values.client.title': 'Mbinu Inayolenga Mteja',
        'about.values.client.text': 'Kusikiliza kwa makini na suluhisho za kibinafsi',
        
        // Contact Section
        'contact.title': 'Wasiliana Nasi',
        'contact.subtitle': 'Tuko katika Jamhuri ya Kidemokrasia ya Kongo na Tanzania',
        'contact.info.title': 'Maelezo ya Mawasiliano',
        'contact.info.website': 'Tovuti',
        'contact.info.emails': 'Barua pepe',
        'contact.info.phones': 'Simu',
        'contact.offices.title': 'Ofisi Zetu',
        'contact.legal.title': 'Maelezo ya Kisheria',
        
        // Footer
        'footer.description': 'Kiongozi katika huduma za kijumla Afrika ya Kati, kinachotambuliwa kwa uvumbuzi na ubora.',
        'footer.services': 'Huduma',
        'footer.contact': 'Mawasiliano',
        'footer.copyright': '2024 V.G SERVICE-TRADING SARL. Haki zote zimehifadhiwa.'
    }
};

// Langue par défaut
let currentLanguage = 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updatePageContent();
    updateLanguageButtons();
}

// Fonction pour mettre à jour le contenu de la page
function updatePageContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Mettre à jour l'attribut lang du document
    document.documentElement.lang = currentLanguage;
}

// Fonction pour mettre à jour les boutons de langue
function updateLanguageButtons() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Initialiser la langue au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer la langue sauvegardée ou utiliser le français par défaut
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    changeLanguage(savedLanguage);
    
    // Ajouter les événements aux boutons de langue
    const languageButtons = document.querySelectorAll('.lang-btn');
    languageButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});

// Exporter les fonctions pour utilisation globale
window.changeLanguage = changeLanguage;
window.translations = translations;