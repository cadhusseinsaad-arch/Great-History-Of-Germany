const langButtons = document.querySelectorAll('.lang-btn');
const i18nElements = document.querySelectorAll('[data-i18n]');

const translations = {
    en: {
        lang: 'en',
        dir: 'ltr',
        eyebrow: 'Historical Portfolio',
        heading: 'Great Austria: A Great History, Culture, and Identity',
        subheading: 'Discover Austria\'s remarkable past, its elegant cities, alpine beauty, and modern spirit in a design tailored for Austrian audiences.',
        introTitle: 'Why Austria?',

        introText: 'Austria is a crossroads of music, architecture, science and alpine tradition. This portfolio presents the land\'s proud heritage with a refined, local-friendly design.',
        gallery1Title: 'Vienna\'s Elegance',
        gallery1Text: 'A city of music, cafés, and imperial palaces that still shapes Austrian identity.',
        gallery2Title: 'Alpine Majesty',
        gallery2Text: 'The mountains are the heart of Austria: nature, tradition, and modern alpine lifestyle.',
        gallery3Title: 'Cultural Heritage',
        gallery3Text: 'From classical music to world-class museums, Austria carries a European cultural legacy.',
        timelineTitle: 'Key Moments in Austrian History',
        milestone1: 'The Austrian Empire is established, uniting the Habsburg heritage under a modern imperial state.',
        milestone2: 'The Congress of Vienna shapes Europe and confirms Austria as a central power of diplomacy and culture.',
        milestone3: 'The First Republic is founded after the empire\'s end, marking a new national chapter.',
        todayTitle: 'Today',
        milestone4: 'Austria is a modern European country celebrated for quality of life, innovation, and cultural heritage.',
        valuesTitle: 'Austrian Values',
        valuesText: 'Respect for traditions, creativity, and social balance are part of the Austrian spirit that guides modern life.',
        value1Title: 'Hospitality',
        value1Text: 'Warm welcome and local pride are the heart of Austria\'s communities.',
        value2Title: 'Excellence',
        value2Text: 'From classical music to engineering, Austria values quality and elegant craftsmanship.',
        value3Title: 'Nature',
        value3Text: 'Sustainable mountain culture and green cities are essential for Austria\'s future.',
        calloutTitle: 'Designed for an Austrian Audience',
        calloutText: 'This site combines striking imagery, respectful storytelling, and simple navigation to create a premium portfolio experience.',
        footerText: '© 2026 | Austria Great Heritage Portfolio'
    },
    ar: {
        lang: 'ar',
        dir: 'rtl',
        eyebrow: 'بورتفوليو تاريخي',
        heading: 'النمسا العظيمة: تاريخ، ثقافة وهوية',
        subheading: 'اكتشف الماضي المميز للنمسا، مدنها الأنيقة، جمال جبالها، وروحها الحديثة بتصميم يلائم المجتمع النمساوي.',
        introTitle: 'لماذا النمسا؟',
        introText: 'النمسا تقف عند ملتقى الموسيقى والعمارة والعلوم والتقاليد الجبلية. يعرض هذا البورتفوليو تراث البلاد بفخامة وأساليب عصرية.',
        gallery1Title: 'أناقة فيينا',
        gallery1Text: 'مدينة الموسيقى والمقاهي والقصور الإمبراطورية التي تشكّل هوية النمسا.',
        gallery2Title: 'عظمة الألب',
        gallery2Text: 'الجبال هي قلب النمسا: طبيعة، تقاليد، وأسلوب حياة جبلي معاصر.',
        gallery3Title: 'التراث الثقافي',
        gallery3Text: 'من الموسيقى الكلاسيكية إلى المتاحف العالمية، تحمل النمسا إرثًا ثقافيًا أوروبياً.',
        timelineTitle: 'أهم محطات تاريخ النمسا',
        milestone1: 'تأسيس الإمبراطورية النمساوية، موحِّدًا تراث الهابسبورغ في دولة إمبراطورية حديثة.',
        milestone2: 'مؤتمر فيينا يشكل أوروبا ويؤكد مكانة النمسا كمركز للديبلوماسية والثقافة.',
        milestone3: 'تأسيس الجمهورية الأولى بعد نهاية الإمبراطورية، معلنًا فصلًا وطنيًا جديدًا.',
        todayTitle: 'اليوم',
        milestone4: 'النمسا دولة أوروبية حديثة تحتفل بجودة الحياة والابتكار والتراث الثقافي.',
        valuesTitle: 'القيم النمساوية',
        valuesText: 'الاحترام للتقاليد، الإبداع، والتوازن الاجتماعي هي روح النمسا التي تواكب الحياة المعاصرة.',
        value1Title: 'الضيافة',
        value1Text: 'الترحيب الدافئ والفخر المحلي هما قلب المجتمعات النمساوية.',
        value2Title: 'التفوّق',
        value2Text: 'من الموسيقى الكلاسيكية إلى الهندسة، تقدر النمسا الجودة والحرفية الأنيقة.',
        value3Title: 'الطبيعة',
        value3Text: 'الثقافة الجبلية المستدامة والمدن الخضراء جزء من مستقبل النمسا.',
        calloutTitle: 'مصمم للمجتمع النمساوي',
        calloutText: 'يجمع هذا الموقع بين الصور المؤثرة والسرد المحترم والتنقل البسيط ليقدم تجربة بورتفوليو راقية.',
        footerText: '© 2026 | بورتفوليو عن العراقة النمساوية'
    },
    de: {
        lang: 'de-AT',
        dir: 'ltr',
        eyebrow: 'Historisches Portfolio',
        heading: 'Großes Österreich: Geschichte, Kultur und Identität',
        subheading: 'Entdecke die besondere Geschichte Österreichs mit einem modernen Stil, der zum österreichischen Lebensgefühl passt.',
        introTitle: 'Warum Österreich?',
        introText: 'Österreich ist der Treffpunkt von Musik, Architektur, Wissenschaft und alpiner Tradition. Dieses Portfolio zeigt das stolze Erbe des Landes in einem edlen, regional passenden Design.',
        gallery1Title: 'Wiens Eleganz',
        gallery1Text: 'Eine Stadt der Musik, der Kaffeehäuser und der kaiserlichen Schlösser, die die österreichische Identität prägt.',
        gallery2Title: 'Alpine Pracht',
        gallery2Text: 'Die Berge sind das Herz Österreichs: Natur, Tradition und moderner Alpin-Lifestyle.',
        gallery3Title: 'Kulturelles Erbe',
        gallery3Text: 'Von klassischer Musik bis zu Museen von Weltrang – Österreich trägt ein europäisches Kulturerbe.',
        timelineTitle: 'Wichtige Stationen der österreichischen Geschichte',
        milestone1: 'Die österreichische Monarchie wird gegründet und vereint das Habsburger Erbe in einem modernen Reich.',
        milestone2: 'Der Wiener Kongress formt Europa und bestätigt Österreich als diplomatische und kulturelle Mitte.',
        milestone3: 'Die Erste Republik entsteht nach dem Ende der Monarchie und beginnt ein neues Kapitel.',
        todayTitle: 'Heute',
        milestone4: 'Österreich ist ein modernes europäisches Land, bekannt für Lebensqualität, Innovation und kulturelle Vielfalt.',
        valuesTitle: 'Österreichische Werte',
        valuesText: 'Traditionsbewusstsein, Kreativität und gesellschaftliche Balance sind Teil des österreichischen Geistes.',
        value1Title: 'Gastfreundschaft',
        value1Text: 'Herzliche Begrüßung und lokale Verbundenheit sind zentral in österreichischen Gemeinschaften.',
        value2Title: 'Exzellenz',
        value2Text: 'Von klassischer Musik bis Technik schätzt Österreich Qualität und elegante Handwerkskunst.',
        value3Title: 'Natur',
        value3Text: 'Nachhaltige Bergkultur und grüne Städte prägen Österreichs Zukunft.',
        calloutTitle: 'Für ein österreichisches Publikum gestaltet',
        calloutText: 'Diese Website verbindet eindrucksvolle Bilder, respektvolle Erzählung und klare Navigation zu einer hochwertigen Portfolio-Erfahrung.',
        footerText: '© 2026 | Portfolio zur großen Geschichte Österreichs'
    }
};

function setLanguage(lang) {
    const translation = translations[lang] || translations.en;
    document.documentElement.lang = translation.lang;
    document.body.dir = translation.dir;

    i18nElements.forEach(el => {
        const key = el.dataset.i18n;
        if (translation[key]) {
            el.textContent = translation[key];
        }
    });

    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        setLanguage(button.dataset.lang);
    });
});

setLanguage('en');
