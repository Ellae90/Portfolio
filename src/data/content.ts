import type { Bi } from '../lib/lang';

export type Project = {
  id: string;
  title: Bi;
  summary: Bi;
  role: Bi;
  tech: string[];
  overview: Bi;
  problem?: Bi;
  solution?: Bi;
  highlights?: Bi[];
  confidentiality?: Bi;
  images?: { src: string; alt: Bi }[];
  placeholder?: Bi; // shown instead of an image
  links: { live: string | null; repo: string | null };
};

export const ui = {
  nav: {
    about: { en: 'About', ar: 'نبذة' }, skills: { en: 'Skills', ar: 'المهارات' },
    projects: { en: 'Projects', ar: 'المشاريع' }, experience: { en: 'Experience', ar: 'الخبرة' },
    education: { en: 'Education', ar: 'التعليم والإنجازات' }, contact: { en: 'Contact', ar: 'التواصل' },
  },
  menu: { en: 'Menu', ar: 'القائمة' },
  viewProjects: { en: 'View projects', ar: 'عرض المشاريع' },
  downloadCv: { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
  contactMe: { en: 'Contact me', ar: 'تواصل معي' },
  github: { en: 'GitHub', ar: 'GitHub' },
  details: { en: 'Details', ar: 'التفاصيل' },
  close: { en: 'Close', ar: 'إغلاق' },
  role: { en: 'Role', ar: 'الدور' },
  tech: { en: 'Technologies', ar: 'التقنيات' },
  problem: { en: 'Problem', ar: 'المشكلة' },
  solution: { en: 'Solution', ar: 'الحل' },
  highlights: { en: 'What it includes', ar: 'ما يتضمنه' },
  liveDemo: { en: 'Live demo', ar: 'النسخة التجريبية' },
  repo: { en: 'Source code', ar: 'الشيفرة المصدرية' },
  confidential: { en: 'Confidentiality', ar: 'السرية' },
  screenshot: { en: 'Screenshot', ar: 'لقطة شاشة' },
  email: { en: 'Email', ar: 'البريد الإلكتروني' },
  phone: { en: 'Mobile phone', ar: 'رقم الجوال' },
  linkedin: { en: 'LinkedIn', ar: 'لينكد إن' },
  contactIntro: { en: 'Open to software engineering, full-stack and web development roles in Saudi Arabia. Calling or messaging me is the quickest way to reach me.', ar: 'متاحة لفرص هندسة البرمجيات وتطوير الويب المتكامل (Full-Stack) داخل المملكة العربية السعودية. الاتصال أو مراسلتي على الجوال هو أسرع وسيلة للتواصل.' },
  rights: { en: 'Software Engineer | Full-Stack Developer', ar: 'مهندسة برمجيات | مطوّرة Full-Stack' },
  langLabel: { en: 'Language', ar: 'اللغة' },
};

export const hero = {
  title: { en: 'Software Engineer | Full-Stack Developer', ar: 'مهندسة برمجيات | مطوّرة Full-Stack' },
  intro: {
    en: "I'm a Software Engineering graduate from Umm Al-Qura University with First Class Honors. I enjoy building practical software solutions that improve user experiences and solve real-world problems through technology.",
    ar: 'خريجة هندسة برمجيات من جامعة أم القرى بمرتبة الشرف الأولى. أستمتع ببناء حلول برمجية عملية تُحسّن تجربة المستخدم وتعالج مشكلات واقعية من خلال التقنية.',
  },
  facts: [
    { k: { en: 'Degree', ar: 'الدرجة' }, v: { en: 'BSc Software Engineering, 2022–2026', ar: 'بكالوريوس هندسة البرمجيات، من 2022 إلى 2026' } },
    { k: { en: 'University', ar: 'الجامعة' }, v: { en: 'Umm Al-Qura University', ar: 'جامعة أم القرى' } },
    { k: { en: 'GPA', ar: 'المعدل' }, v: { en: '3.94 / 4.00, First Class Honors', ar: '3.94 من 4.00، مرتبة الشرف الأولى' } },
    { k: { en: 'Based in', ar: 'الموقع' }, v: { en: 'Makkah, Saudi Arabia', ar: 'مكة المكرمة، السعودية' } },
  ],
};

export const about = {
  heading: { en: 'About', ar: 'نبذة عني' },
  paras: [
    {
      en: 'I build full-stack web applications with React.js, Node.js, Express.js and MySQL. During my cooperative training at King Abdulaziz Hospital I developed and deployed internal web systems that hospital staff use in their daily operations, including role-based access, database-driven features and bilingual Arabic/English interfaces.',
      ar: 'أطوّر تطبيقات ويب متكاملة باستخدام React.js وNode.js وExpress.js وMySQL. خلال تدريبي التعاوني في مستشفى الملك عبدالعزيز طوّرتُ ونشرتُ أنظمة ويب داخلية يستخدمها منسوبو المستشفى في أعمالهم اليومية، تشمل صلاحيات حسب الأدوار وخصائص مبنية على قواعد البيانات وواجهات ثنائية اللغة بالعربية والإنجليزية.',
    },
    {
      en: 'My graduation project, MALFAK, is a tourism platform built with a team of five, where each member owned a set of features and tested them before integration. I also served as a team leader in the Student Activities Club, organizing technology events including TechPro AI.',
      ar: 'مشروع تخرجي «ملفاك» منصة سياحية بُنيت ضمن فريق من خمس طالبات، تولّت فيه كل عضوة مجموعة من الميزات واختبرتها قبل الدمج. كما عملتُ قائدة فريق في نادي الأنشطة الطلابية، ونظّمتُ فعاليات تقنية منها «TechPro AI».',
    },
  ] as Bi[],
};

export const skills = {
  heading: { en: 'Technical skills', ar: 'المهارات التقنية' },
  groups: [
    { name: { en: 'Programming languages', ar: 'لغات البرمجة' }, items: ['JavaScript', 'Python', 'Java', 'Dart'] },
    { name: { en: 'Frontend development', ar: 'تطوير الواجهات' }, items: ['React.js', 'HTML', 'CSS', 'Flutter'] },
    { name: { en: 'Backend development', ar: 'تطوير الخوادم' }, items: ['Node.js', 'Express.js', 'MVC architecture'] },
    { name: { en: 'Databases', ar: 'قواعد البيانات' }, items: ['MySQL', 'Database design'] },
    { name: { en: 'APIs and integrations', ar: 'الواجهات البرمجية والتكامل' }, items: ['REST APIs', 'Google Maps API', 'OpenAI API (chatbot)'] },
    { name: { en: 'Development tools', ar: 'أدوات التطوير' }, items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'Render'] },
  ],
  extra: {
    label: { en: 'Also familiar with', ar: 'ولدي معرفة أيضًا بـ' },
    items: { en: 'Machine learning, cloud computing, networking basics, IT support', ar: 'تعلّم الآلة، الحوسبة السحابية، أساسيات الشبكات، الدعم التقني' },
  },
};

export const projects: Project[] = [
  {
    id: 'malfak',
    title: { en: 'MALFAK', ar: 'ملفاك' },
    summary: { en: 'A tourism platform that brings tickets, packages, tour guides, transportation, a digital wallet and an AI chatbot into one place for visitors to Saudi Arabia.', ar: 'منصة سياحية تجمع التذاكر والباقات والمرشدين السياحيين والنقل والمحفظة الرقمية ومساعدًا ذكيًا في مكان واحد لزوار المملكة.' },
    role: { en: 'Full-stack developer in a team of five (graduation project)', ar: 'مطوّرة Full-Stack ضمن فريق من خمس طالبات (مشروع التخرج)' },
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Google Maps API', 'OpenAI API', 'Vercel', 'Render', 'Aiven'],
    overview: { en: 'MALFAK was built for visitors to the 2034 World Cup in Saudi Arabia. It follows an MVC architecture: a React client, an Express server and a MySQL database, deployed on Vercel, Render and Aiven.', ar: 'بُنيت «ملفاك» لزوار كأس العالم 2034 في المملكة. تعتمد معمارية MVC: واجهة React وخادم Express وقاعدة بيانات MySQL، منشورة على Vercel وRender وAiven.' },
    problem: { en: 'Tourists often need several apps and websites to find tickets, transport and local services, which makes planning a visit harder than it should be.', ar: 'يحتاج السياح غالبًا إلى عدة تطبيقات ومواقع للعثور على التذاكر والنقل والخدمات المحلية، مما يجعل تخطيط الزيارة أصعب مما ينبغي.' },
    solution: { en: 'One platform that lets visitors book and manage services together, with accounts, notifications and an assistant that answers questions.', ar: 'منصة واحدة تتيح للزوار حجز الخدمات وإدارتها معًا، مع حسابات وإشعارات ومساعد يجيب عن الأسئلة.' },
    highlights: [
      { en: 'Match tickets with seat selection and a resale marketplace', ar: 'تذاكر المباريات مع اختيار المقعد وسوق لإعادة البيع' },
      { en: 'All-in-one event packages and tour guide booking', ar: 'باقات متكاملة للفعاليات وحجز المرشدين السياحيين' },
      { en: 'Digital wallet with saved cards, notifications and a health profile', ar: 'محفظة رقمية لحفظ البطاقات، وإشعارات، وملف صحي' },
      { en: 'Transportation map, embassy contacts and an AI chat assistant', ar: 'خريطة للنقل، وبيانات التواصل مع السفارات، ومساعد دردشة ذكي' },
    ],
    images: [
      { src: `${import.meta.env.BASE_URL}images/malfak-services.jpg`, alt: { en: 'MALFAK services page showing service cards for tickets, hotels, packages and transport', ar: 'صفحة خدمات ملفاك تعرض بطاقات التذاكر والفنادق والباقات والنقل' } },
      { src: `${import.meta.env.BASE_URL}images/malfak-tickets.jpg`, alt: { en: 'MALFAK tickets page listing matches with prices and a search field', ar: 'صفحة التذاكر في ملفاك تعرض المباريات والأسعار وحقل البحث' } },
      { src: `${import.meta.env.BASE_URL}images/malfak-packages.jpg`, alt: { en: 'MALFAK all-in-one packages page with three package options', ar: 'صفحة الباقات المتكاملة في ملفاك بثلاثة خيارات' } },
      { src: `${import.meta.env.BASE_URL}images/malfak-tour-guides.jpg`, alt: { en: 'MALFAK tour guide page with filters and guide profiles', ar: 'صفحة المرشد السياحي في ملفاك مع المرشحات وملفات المرشدين' } },
      { src: `${import.meta.env.BASE_URL}images/malfak-chatbot.jpg`, alt: { en: 'MALFAK AI assistant chat page', ar: 'صفحة المساعد الذكي في ملفاك' } },
    ],
    links: { live: 'https://malfak-project.vercel.app/', repo: null },
  },
  {
    id: 'rafiq',
    title: { en: 'Rafiq', ar: 'رفيق' },
    summary: { en: 'A digital airport companion concept that supports elderly passengers and passengers with mobility disabilities with accessible navigation and assistance.', ar: 'فكرة رفيق رقمي في المطار يدعم كبار السن والمسافرين ذوي الإعاقة الحركية بالتنقل الميسّر والمساندة.' },
    role: { en: 'Team member, multidisciplinary hackathon team', ar: 'عضوة في فريق متعدد التخصصات في الهاكاثون' },
    tech: [],
    overview: { en: 'Developed and presented a digital solution to a real passenger-experience challenge, working with a multidisciplinary team to deliver a scalable and technically feasible prototype.', ar: 'طوّر الفريق وقدّم حلًا رقميًا لتحدٍّ حقيقي في تجربة المسافر، بالتعاون مع فريق متعدد التخصصات لتقديم نموذج أولي قابل للتوسع وممكن تقنيًا.' },
    highlights: [{ en: '2nd place, Government E-Services Hackathon 2026, Passenger Experience Track, General Directorate of Passports', ar: 'المركز الثاني في هاكاثون الخدمات الحكومية الإلكترونية 2026، مسار تجربة المسافر، المديرية العامة للجوازات' }],
    confidentiality: { en: 'This is a high-level summary. Implementation details and project materials are not published.', ar: 'هذا ملخص عام. لا تُنشر تفاصيل التنفيذ ولا مواد المشروع.' },
    placeholder: { en: 'Illustration to be added. No project screenshots are published.', ar: 'ستُضاف صورة توضيحية. لا تُنشر لقطات من المشروع.' },
    links: { live: null, repo: null },
  },
  {
    id: 'hospital',
    title: { en: 'Hospital internal web systems', ar: 'أنظمة الويب الداخلية للمستشفى' },
    summary: { en: 'Three role-based internal systems built during cooperative training at King Abdulaziz Hospital and deployed on the hospital’s internal server.', ar: 'ثلاثة أنظمة داخلية قائمة على الأدوار، بُنيت خلال التدريب التعاوني في مستشفى الملك عبدالعزيز ونُشرت على الخادم الداخلي للمستشفى.' },
    role: { en: 'Cooperative trainee, full-stack development', ar: 'متدرّبة تعاونية، تطوير Full-Stack' },
    tech: ['Node.js', 'Express.js', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    overview: { en: 'The systems are internal to the hospital and are not publicly available. Interfaces are bilingual (Arabic/English) and role-based.', ar: 'الأنظمة داخلية للمستشفى وغير متاحة للعموم. الواجهات ثنائية اللغة (عربي/إنجليزي) وتعتمد على الأدوار.' },
    highlights: [
      { en: 'Shift management: role-based shift and attendance system with swap and edit request management', ar: 'إدارة المناوبات: نظام للمناوبات والحضور حسب الأدوار مع إدارة طلبات التبديل والتعديل' },
      { en: 'Hospital links portal: centralizes hospital links and improves access to digital services', ar: 'بوابة روابط المستشفى: تجمع الروابط وتسهّل الوصول إلى الخدمات الرقمية' },
      { en: 'Quality & Standards platform: committees and policy management with multi-level approvals, document control and AI-powered drafting and summarizing', ar: 'منصة الجودة والمعايير: إدارة اللجان والسياسات بموافقات متعددة المستويات وضبط للوثائق، مع مساعدة ذكية في الصياغة والتلخيص' },
    ],
    confidentiality: { en: 'No internal URLs, data or screenshots are shown.', ar: 'لا تُعرض روابط داخلية ولا بيانات ولا لقطات شاشة.' },
    placeholder: { en: 'Sanitized mockup to be added. No internal screenshots are published.', ar: 'ستُضاف نماذج معقّمة. لا تُنشر لقطات داخلية.' },
    links: { live: null, repo: null },
  },
  {
    id: 'thokur',
    title: { en: 'Thokur', ar: 'ذُخْر' },
    summary: { en: 'A Flutter personal saving tracker for expenses and savings goals.', ar: 'تطبيق Flutter شخصي لتتبّع المصروفات وأهداف الادخار.' },
    role: { en: 'Mobile developer', ar: 'مطوّرة تطبيقات جوال' },
    tech: ['Flutter', 'Dart', 'REST APIs'],
    overview: { en: 'A mobile application for tracking expenses and savings goals.', ar: 'تطبيق جوال لتتبّع المصروفات وأهداف الادخار.' },
    placeholder: { en: 'Screenshot to be added.', ar: 'ستُضاف لقطة شاشة.' },
    links: { live: null, repo: 'https://github.com/Ellae90/thokur_flutter_app' },
  },
  {
    id: 'ml',
    title: { en: 'ML Classifier', ar: 'نموذج تصنيف بتعلّم الآلة' },
    summary: { en: 'A supervised classification model with data preprocessing, training and performance evaluation.', ar: 'نموذج تصنيف خاضع للإشراف يشمل معالجة البيانات والتدريب وتقييم الأداء.' },
    role: { en: 'Developer', ar: 'مطوّرة' },
    tech: ['Python', 'Machine Learning'],
    overview: { en: 'Implemented a supervised classification model covering data preprocessing, model training and performance evaluation.', ar: 'نُفّذ نموذج تصنيف خاضع للإشراف يغطي معالجة البيانات وتدريب النموذج وتقييم الأداء.' },
    placeholder: { en: 'Visual to be added.', ar: 'ستُضاف صورة.' },
    links: { live: null, repo: null },
  },
];

export const experience = {
  heading: { en: 'Professional experience', ar: 'الخبرة المهنية' },
  items: [
    {
      org: { en: 'King Abdulaziz Hospital', ar: 'مستشفى الملك عبدالعزيز' },
      role: { en: 'Cooperative Training', ar: 'تدريب تعاوني' },
      dates: { en: 'Aug 2025 – Nov 2025', ar: 'أغسطس 2025 – نوفمبر 2025' },
      points: [
        { en: 'Developed and deployed internal web systems using Node.js, Express.js, MySQL, HTML, CSS and JavaScript.', ar: 'طوّرتُ ونشرتُ أنظمة ويب داخلية باستخدام Node.js وExpress.js وMySQL وHTML وCSS وJavaScript.' },
        { en: 'Designed role-based features, database-driven functionality and bilingual Arabic/English interfaces.', ar: 'صمّمتُ ميزات قائمة على الأدوار ووظائف مبنية على قواعد البيانات وواجهات ثنائية اللغة بالعربية والإنجليزية.' },
        { en: 'Supported deployment on the hospital’s internal server so staff could use the systems in daily operations.', ar: 'دعمتُ النشر على الخادم الداخلي للمستشفى ليستخدم المنسوبون الأنظمة في أعمالهم اليومية.' },
        { en: 'Contributed to IT support, troubleshooting, maintenance and networking tasks.', ar: 'ساهمتُ في الدعم التقني ومعالجة الأعطال والصيانة ومهام الشبكات.' },
        { en: 'Recognized by the hospital administration as one of the top trainees for practical software solutions adopted for internal use.', ar: 'نالت تقدير إدارة المستشفى كإحدى أفضل المتدرّبات لتقديم حلول برمجية عملية اعتُمدت للاستخدام الداخلي.' },
      ] as Bi[],
    },
    {
      org: { en: 'Banque Saudi Fransi (BSF)', ar: 'البنك السعودي الفرنسي' },
      role: { en: 'Virtual Internship Program', ar: 'برنامج التدريب الافتراضي' },
      dates: { en: 'Jan 2024 – Dec 2025', ar: 'يناير 2024 – ديسمبر 2025' },
      points: [
        { en: 'Completed a remote internship on banking operations, professional skills and financial technology, with certified courses.', ar: 'أكملتُ تدريبًا عن بُعد في العمليات المصرفية والمهارات المهنية والتقنية المالية، مع دورات معتمدة.' },
      ] as Bi[],
    },
  ],
};

export const education = {
  heading: { en: 'Education and achievements', ar: 'التعليم والإنجازات' },
  degree: {
    title: { en: 'Bachelor of Science in Software Engineering', ar: 'بكالوريوس العلوم في هندسة البرمجيات' },
    school: { en: 'Umm Al-Qura University, Makkah', ar: 'جامعة أم القرى، مكة المكرمة' },
    detail: { en: '2022–2026 · GPA 3.94 / 4.00 · First Class Honors', ar: 'من 2022 إلى 2026 · المعدل 3.94 من 4.00 · مرتبة الشرف الأولى' },
  },
  awards: [
    { title: { en: '2nd place, Government E-Services Hackathon 2026', ar: 'المركز الثاني في هاكاثون الخدمات الحكومية الإلكترونية 2026' }, detail: { en: 'Passenger Experience Track, General Directorate of Passports. Project: Rafiq.', ar: 'مسار تجربة المسافر، المديرية العامة للجوازات. المشروع: رفيق.' } },
    { title: { en: '2nd place, Softiner Competition', ar: 'المركز الثاني في مسابقة سوفتينر' }, detail: { en: 'Recognized for web page design, requirements analysis and user research.', ar: 'تقديرًا لتصميم صفحات الويب وتحليل المتطلبات وبحوث المستخدمين.' } },
    { title: { en: 'Top trainee, King Abdulaziz Hospital', ar: 'من أفضل المتدرّبات، مستشفى الملك عبدالعزيز' }, detail: { en: 'Recognized by hospital administration for software solutions adopted for internal use.', ar: 'تقدير من إدارة المستشفى لحلول برمجية اعتُمدت للاستخدام الداخلي.' } },
    { title: { en: 'Team leader, Student Activities Club', ar: 'قائدة فريق، نادي الأنشطة الطلابية' }, detail: { en: 'Organized tech events and led one of the organizing teams for TechPro AI.', ar: 'نظّمتُ فعاليات تقنية وقدتُ أحد فرق تنظيم «TechPro AI».' } },
  ],
};
