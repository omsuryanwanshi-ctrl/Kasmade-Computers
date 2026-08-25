// Language Context for English / Marathi switching
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'mr';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k
});

export const useLanguage = () => useContext(LanguageContext);

// ── English translations ──────────────────────────────────────────────────────
const en: Record<string, string> = {
  // Nav
  'nav.home': 'Home',
  'nav.products': 'Products',
  'nav.services': 'Services',
  'nav.brands': 'Brands',
  'nav.software': 'Software',
  'nav.about': 'About Us',
  'nav.whyUs': 'Why Choose Us',
  'nav.contact': 'Contact',
  'nav.getQuote': 'Get Quote',
  'nav.admin': 'Admin',

  // Hero
  'hero.tagline': 'EST. 2012 • "SATISFACTION IS OUR MOTTO"',
  'hero.title1': 'KASMADE',
  'hero.title2': 'DATA',
  'hero.title3': 'CORPORATION',
  'hero.subtitle': 'Multi Brand Computer Sales, CCTV & Technical Services',
  'hero.exploreProducts': 'Explore Products',
  'hero.contactUs': 'Contact Us',
  'hero.storeTitle': 'Technology & Service Store',
  'hero.storeLocation': 'DEOLA, NASHIK',
  'hero.needPrice': 'Need Best Price?',
  'hero.quickQuote': 'Quick Quote on WhatsApp or Call',
  'hero.getQuote': 'Get Quote',

  // Stats
  'stats.since': 'Since 2012',
  'stats.sinceTitle': 'Trusted Technology Service',
  'stats.sinceDesc': '14+ Years of Continuous Service',
  'stats.brands': '16+ Brands',
  'stats.brandsTitle': 'Multi Brand Store',
  'stats.brandsDesc': 'Products from leading brands',
  'stats.satisfaction': '100%',
  'stats.satisfactionTitle': 'Customer Satisfaction',
  'stats.satisfactionDesc': 'Customer-focused service motto',
  'stats.expert': 'Expert',
  'stats.expertTitle': 'Expert Technicians',
  'stats.expertDesc': 'Professional technical support',

  // Trust Banner
  'trust.genuine': 'Genuine Products',
  'trust.warranty': 'Warranty Support',
  'trust.repair': 'Chip Level Repair',
  'trust.cctv': 'CCTV & Security',
  'trust.network': 'Networking Setup',
  'trust.amc': 'AMC & Service',

  // Section titles
  'section.products.tag': 'Multi Brand Product Catalog',
  'section.products.title': 'Explore Our Product Range',
  'section.products.desc': 'Genuine certified laptops, desktops, components, CCTV systems, and networking gear.',
  'section.products.viewAll': 'View Full Product Catalog',

  'section.services.tag': 'Professional Technical Services',
  'section.services.title': 'Repair & Technical Solutions',
  'section.services.desc': 'Expert chip-level diagnostics, upgrade services, and AMC support for computers, laptops, and CCTV.',
  'section.services.viewAll': 'View All Services',

  'section.brands.tag': 'Authorized Multi Brand Store',
  'section.brands.title': 'Leading Brands We Carry',
  'section.brands.desc': 'We stock genuine products from over 16 top technology brands.',
  'section.brands.viewAll': 'View All Brands & Warranty Coverage',

  'section.whyUs.tag': 'Proven Track Record',
  'section.whyUs.title': 'Why Choose Kasmade Data Corporation?',
  'section.whyUs.desc': 'Building lasting trust with high-quality genuine products, fast technical turnaround, and friendly customer support.',

  // Contact CTA section
  'cta.tag': 'Visit Our Store in Deola',
  'cta.title': 'Ready to Upgrade Your Technology?',
  'cta.desc': 'Visit our showroom at Shop No. 2, Near Munjoba Par, Subhash Road, Deola, Nashik or contact our team for immediate quotations and service scheduling.',
  'cta.call': 'Call',
  'cta.getQuotation': 'Get Quotation',
  'cta.storeInfo': 'Store Quick Information',
  'cta.address': 'Store Address:',
  'cta.owner': 'Owner / Contact:',
  'cta.phones': 'Contact Numbers:',
  'cta.email': 'Official Email:',

  // Products page
  'products.banner.tag': 'Complete Multi Brand Inventory',
  'products.banner.title': 'Computer Hardware, Systems & Accessories',
  'products.banner.desc': 'Explore certified laptops, custom gaming PCs, Intel & AMD processors, high-speed RAM, SSDs, printers, CCTV surveillance kits, and networking gear.',
  'products.search': 'Search products, brands, specs...',
  'products.allBrands': 'All Brands',
  'products.resetFilters': 'Reset Filters',
  'products.showing': 'Showing',
  'products.matchingProducts': 'matching products',
  'products.requestQuote': 'Request Custom Quotation',
  'products.noResults': 'No products found matching your search.',
  'products.noResultsDesc': 'We stock hundreds of additional components and computer models in our physical store in Deola. Contact us directly to enquire!',
  'products.viewAll': 'View All Products',
  'products.getBestPrice': 'Get Best Price',

  // About page
  'about.tag': 'Established 2012 • 14+ Years of Trust',
  'about.title': 'About Kasmade Data Corporation',
  'about.desc': 'Serving Deola, Nashik, and North Maharashtra with genuine computer systems, reliable CCTV surveillance, and dedicated technical support.',
  'about.founder': 'Founder & Director',
  'about.ownerTitle': 'Owner & Technical Head',
  'about.ownerDesc': 'Leading Kasmade Data Corporation since 2012 with a steadfast commitment to genuine computing products, transparent technical repair, and customer satisfaction across Deola and Nashik.',
  'about.callOwner': 'Call Owner',
  'about.established': 'Established',
  'about.topBrands': 'Top Brands',
  'about.genuineParts': 'Genuine Parts',
  'about.motto': '"Satisfaction Is Our Motto"',
  'about.story1': 'Kasmade Data Corporation is a premier multi-brand computer sales and service store established in 2012. We provide computers, laptops, printers, CCTV security systems, networking hardware, components, and professional chip-level technical services.',
  'about.story2': 'Over the past 14+ years, our reputation has been built on genuine product authenticity, certified warranty support, and quick turnaround diagnostics for individuals, offices, schools, and institutions.',
  'about.coreTag': 'Our Core Focus',
  'about.coreTitle': 'What Drives Our Work',
  'about.coreDesc': 'We focus on honest recommendations, authentic products, and dependable technical service.',

  // Services page
  'services.tag': 'Professional Technical Services',
  'services.title': 'Expert Computer & Technology Services',
  'services.desc': 'From chip-level laptop repair to complete CCTV installation and networking setup — our certified technicians cover it all.',
  'services.getQuote': 'Get Service Quote',
  'services.enquire': 'Enquire Service',
  'services.whatsapp': 'WhatsApp',

  // Contact page
  'contact.tag': 'Deola, Nashik, Maharashtra',
  'contact.title': 'Contact Kasmade Data Corporation',
  'contact.desc': 'Visit our computer showroom and service center or connect directly via phone, WhatsApp, or email for instant support.',
  'contact.storeInfo': 'Store Information',
  'contact.address': 'Store Address',
  'contact.phones': 'Phone Numbers',
  'contact.office': 'Office Line',
  'contact.email': 'Email',
  'contact.hours': 'Store Hours',
  'contact.hoursValue': 'Mon - Sat: 9:30 AM – 8:30 PM',
  'contact.sendMsg': 'Send Us a Message',
  'contact.yourName': 'Your Name',
  'contact.yourPhone': 'Your Phone Number',
  'contact.yourMsg': 'Your Message',
  'contact.send': 'Send via WhatsApp',

  // Footer
  'footer.about': 'Kasmade Data Corporation is a trusted multi-brand computer sales and service store established in 2012. We provide laptops, desktops, printers, CCTV systems, components, and certified technical solutions.',
  'footer.quickNav': 'Quick Navigation',
  'footer.productsServices': 'Products & Services',
  'footer.storeContact': 'Store Location & Contact',
  'footer.hours': 'Mon - Sat: 9:30 AM - 8:30 PM',
  'footer.rights': 'All Rights Reserved.',
  'footer.owner': 'Owner:',
  'footer.since': 'Since 2012',

  // Misc
  'misc.loading': 'Loading...',
  'misc.storeAddress': 'Store Address:',
  'misc.callUs': 'Call Us',
};

// ── Marathi translations ──────────────────────────────────────────────────────
const mr: Record<string, string> = {
  // Nav
  'nav.home': 'मुखपृष्ठ',
  'nav.products': 'उत्पादने',
  'nav.services': 'सेवा',
  'nav.brands': 'ब्रँड्स',
  'nav.software': 'सॉफ्टवेअर',
  'nav.about': 'आमच्याबद्दल',
  'nav.whyUs': 'आम्हालाच का निवडा',
  'nav.contact': 'संपर्क',
  'nav.getQuote': 'कोटेशन मिळवा',
  'nav.admin': 'अॅडमिन',

  // Hero
  'hero.tagline': 'स्था. २०१२ • "समाधान हे आमचे ध्येय"',
  'hero.title1': 'काष्मदे',
  'hero.title2': 'डेटा',
  'hero.title3': 'कॉर्पोरेशन',
  'hero.subtitle': 'मल्टी ब्रँड संगणक विक्री, CCTV आणि तांत्रिक सेवा',
  'hero.exploreProducts': 'उत्पादने पाहा',
  'hero.contactUs': 'संपर्क करा',
  'hero.storeTitle': 'तंत्रज्ञान आणि सेवा केंद्र',
  'hero.storeLocation': 'देओला, नाशिक',
  'hero.needPrice': 'सर्वोत्तम किंमत हवी आहे?',
  'hero.quickQuote': 'WhatsApp किंवा Call वर त्वरित कोटेशन',
  'hero.getQuote': 'कोटेशन मिळवा',

  // Stats
  'stats.since': '२०१२ पासून',
  'stats.sinceTitle': 'विश्वासार्ह तंत्रज्ञान सेवा',
  'stats.sinceDesc': '१४+ वर्षांची सातत्यपूर्ण सेवा',
  'stats.brands': '१६+ ब्रँड्स',
  'stats.brandsTitle': 'मल्टी ब्रँड स्टोअर',
  'stats.brandsDesc': 'प्रमुख ब्रँड्सची उत्पादने',
  'stats.satisfaction': '१००%',
  'stats.satisfactionTitle': 'ग्राहक समाधान',
  'stats.satisfactionDesc': 'ग्राहक-केंद्रित सेवा ध्येय',
  'stats.expert': 'तज्ञ',
  'stats.expertTitle': 'तज्ञ तंत्रज्ञ',
  'stats.expertDesc': 'व्यावसायिक तांत्रिक सहाय्य',

  // Trust Banner
  'trust.genuine': 'मूळ उत्पादने',
  'trust.warranty': 'वॉरंटी सहाय्य',
  'trust.repair': 'चिप लेव्हल दुरुस्ती',
  'trust.cctv': 'CCTV आणि सुरक्षा',
  'trust.network': 'नेटवर्किंग सेटअप',
  'trust.amc': 'AMC आणि सेवा',

  // Section titles
  'section.products.tag': 'मल्टी ब्रँड उत्पादन सूची',
  'section.products.title': 'आमच्या उत्पादनांची श्रेणी पाहा',
  'section.products.desc': 'प्रमाणित लॅपटॉप, डेस्कटॉप, घटक, CCTV प्रणाली आणि नेटवर्किंग उपकरणे.',
  'section.products.viewAll': 'संपूर्ण उत्पादन सूची पाहा',

  'section.services.tag': 'व्यावसायिक तांत्रिक सेवा',
  'section.services.title': 'दुरुस्ती आणि तांत्रिक उपाय',
  'section.services.desc': 'संगणक, लॅपटॉप आणि CCTV साठी तज्ञ चिप-लेव्हल निदान, अपग्रेड सेवा आणि AMC सहाय्य.',
  'section.services.viewAll': 'सर्व सेवा पाहा',

  'section.brands.tag': 'अधिकृत मल्टी ब्रँड स्टोअर',
  'section.brands.title': 'आमच्याकडील प्रमुख ब्रँड्स',
  'section.brands.desc': 'आम्ही १६+ शीर्ष तंत्रज्ञान ब्रँड्सची मूळ उत्पादने साठवतो.',
  'section.brands.viewAll': 'सर्व ब्रँड्स पाहा',

  'section.whyUs.tag': 'सिद्ध ट्रॅक रेकॉर्ड',
  'section.whyUs.title': 'काष्मदे डेटा कॉर्पोरेशन का निवडा?',
  'section.whyUs.desc': 'उच्च दर्जाची मूळ उत्पादने, जलद तांत्रिक सेवा आणि मैत्रीपूर्ण ग्राहक सहाय्य यांसह दीर्घकालीन विश्वास निर्माण करणे.',

  // Contact CTA section
  'cta.tag': 'देओला मधील आमचे स्टोअर भेट द्या',
  'cta.title': 'तुमचे तंत्रज्ञान अपग्रेड करायचे आहे?',
  'cta.desc': 'शॉप नं. २, मुंजोबा पार जवळ, सुभाष रोड, देओला, नाशिक येथे आमच्या शोरूमला भेट द्या किंवा त्वरित कोटेशन आणि सेवा वेळापत्रकासाठी आमच्या टीमशी संपर्क साधा.',
  'cta.call': 'कॉल करा',
  'cta.getQuotation': 'कोटेशन मिळवा',
  'cta.storeInfo': 'स्टोअर माहिती',
  'cta.address': 'स्टोअर पत्ता:',
  'cta.owner': 'मालक / संपर्क:',
  'cta.phones': 'संपर्क क्रमांक:',
  'cta.email': 'अधिकृत ई-मेल:',

  // Products page
  'products.banner.tag': 'संपूर्ण मल्टी ब्रँड इन्व्हेंटरी',
  'products.banner.title': 'संगणक हार्डवेअर, सिस्टम्स आणि अॅक्सेसरीज',
  'products.banner.desc': 'प्रमाणित लॅपटॉप, कस्टम गेमिंग PC, Intel & AMD प्रोसेसर, हाय-स्पीड RAM, SSD, प्रिंटर, CCTV किट आणि नेटवर्किंग गियर पाहा.',
  'products.search': 'उत्पादने, ब्रँड्स, स्पेसिफिकेशन शोधा...',
  'products.allBrands': 'सर्व ब्रँड्स',
  'products.resetFilters': 'फिल्टर्स रीसेट करा',
  'products.showing': 'दाखवत आहे',
  'products.matchingProducts': 'जुळणारी उत्पादने',
  'products.requestQuote': 'कस्टम कोटेशन मागवा',
  'products.noResults': 'तुमच्या शोधाशी जुळणारी उत्पादने आढळली नाहीत.',
  'products.noResultsDesc': 'आमच्या देओलातील भौतिक स्टोअरमध्ये शेकडो अतिरिक्त घटक आणि संगणक मॉडेल्स आहेत. थेट चौकशी करा!',
  'products.viewAll': 'सर्व उत्पादने पाहा',
  'products.getBestPrice': 'सर्वोत्तम किंमत मिळवा',

  // About page
  'about.tag': 'स्था. २०१२ • १४+ वर्षांचा विश्वास',
  'about.title': 'काष्मदे डेटा कॉर्पोरेशन बद्दल',
  'about.desc': 'देओला, नाशिक आणि उत्तर महाराष्ट्रात मूळ संगणक प्रणाली, विश्वासार्ह CCTV सुरक्षा आणि समर्पित तांत्रिक सहाय्य पुरवत आहोत.',
  'about.founder': 'संस्थापक आणि संचालक',
  'about.ownerTitle': 'मालक आणि तांत्रिक प्रमुख',
  'about.ownerDesc': '२०१२ पासून काष्मदे डेटा कॉर्पोरेशनचे नेतृत्व करताना मूळ संगणक उत्पादने, पारदर्शक तांत्रिक दुरुस्ती आणि देओला व नाशिकमध्ये ग्राहक समाधानासाठी अखंड वचनबद्धता.',
  'about.callOwner': 'मालकाला कॉल करा',
  'about.established': 'स्थापना',
  'about.topBrands': 'शीर्ष ब्रँड्स',
  'about.genuineParts': 'मूळ सुटे भाग',
  'about.motto': '"समाधान हे आमचे ध्येय"',
  'about.story1': 'काष्मदे डेटा कॉर्पोरेशन हे २०१२ मध्ये स्थापन झालेले एक प्रमुख मल्टी-ब्रँड संगणक विक्री आणि सेवा केंद्र आहे. आम्ही संगणक, लॅपटॉप, प्रिंटर, CCTV सुरक्षा प्रणाली, नेटवर्किंग हार्डवेअर, घटक आणि व्यावसायिक चिप-लेव्हल तांत्रिक सेवा प्रदान करतो.',
  'about.story2': 'गेल्या १४+ वर्षांत, व्यक्ती, कार्यालये, शाळा आणि संस्थांसाठी मूळ उत्पादन सत्यता, प्रमाणित वॉरंटी सहाय्य आणि जलद निदान यावर आमची प्रतिष्ठा निर्माण झाली आहे.',
  'about.coreTag': 'आमचे मुख्य लक्ष',
  'about.coreTitle': 'आमच्या कामाची प्रेरणा',
  'about.coreDesc': 'आम्ही प्रामाणिक शिफारशी, मूळ उत्पादने आणि विश्वासार्ह तांत्रिक सेवेवर लक्ष केंद्रित करतो.',

  // Services page
  'services.tag': 'व्यावसायिक तांत्रिक सेवा',
  'services.title': 'तज्ञ संगणक आणि तंत्रज्ञान सेवा',
  'services.desc': 'चिप-लेव्हल लॅपटॉप दुरुस्तीपासून ते संपूर्ण CCTV स्थापना आणि नेटवर्किंग सेटअपपर्यंत — आमचे प्रमाणित तंत्रज्ञ सर्व काही हाताळतात.',
  'services.getQuote': 'सेवा कोटेशन मिळवा',
  'services.enquire': 'सेवा चौकशी',
  'services.whatsapp': 'WhatsApp',

  // Contact page
  'contact.tag': 'देओला, नाशिक, महाराष्ट्र',
  'contact.title': 'काष्मदे डेटा कॉर्पोरेशन - संपर्क',
  'contact.desc': 'त्वरित सहाय्यासाठी आमच्या संगणक शोरूम आणि सेवा केंद्राला भेट द्या किंवा फोन, WhatsApp किंवा ई-मेलद्वारे थेट संपर्क साधा.',
  'contact.storeInfo': 'स्टोअर माहिती',
  'contact.address': 'स्टोअर पत्ता',
  'contact.phones': 'फोन क्रमांक',
  'contact.office': 'ऑफिस लाइन',
  'contact.email': 'ई-मेल',
  'contact.hours': 'स्टोअर वेळ',
  'contact.hoursValue': 'सोम - शनि: सकाळी ९:३० – संध्या. ८:३०',
  'contact.sendMsg': 'आम्हाला संदेश पाठवा',
  'contact.yourName': 'तुमचे नाव',
  'contact.yourPhone': 'तुमचा फोन नंबर',
  'contact.yourMsg': 'तुमचा संदेश',
  'contact.send': 'WhatsApp वर पाठवा',

  // Footer
  'footer.about': 'काष्मदे डेटा कॉर्पोरेशन हे २०१२ पासून स्थापित एक विश्वासार्ह मल्टी-ब्रँड संगणक विक्री आणि सेवा केंद्र आहे. आम्ही लॅपटॉप, डेस्कटॉप, प्रिंटर, CCTV प्रणाली, घटक आणि प्रमाणित तांत्रिक उपाय प्रदान करतो.',
  'footer.quickNav': 'जलद नेव्हिगेशन',
  'footer.productsServices': 'उत्पादने आणि सेवा',
  'footer.storeContact': 'स्टोअर स्थान आणि संपर्क',
  'footer.hours': 'सोम - शनि: सकाळी ९:३० - संध्या. ८:३०',
  'footer.rights': 'सर्व हक्क राखीव.',
  'footer.owner': 'मालक:',
  'footer.since': '२०१२ पासून',

  // Misc
  'misc.loading': 'लोड होत आहे...',
  'misc.storeAddress': 'स्टोअर पत्ता:',
  'misc.callUs': 'आम्हाला कॉल करा',
};

const translations: Record<Language, Record<string, string>> = { en, mr };

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem('kdc_lang') as Language) || 'en';
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('kdc_lang', l);
  };

  const t = (key: string): string => {
    return translations[lang][key] ?? translations['en'][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
