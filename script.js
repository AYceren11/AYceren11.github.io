const PORTFOLIO_DATA = {
    tr: {
        tag: "Bilgisayar Mühendisi",
        bio: "Ankara Üniversitesi Bilgisayar Mühendisliği öğrencisi olarak Python, C, Java ve SQL dillerinde güçlü bir yazılım geliştirme temeline sahibim. Eğitimim boyunca veri yapıları, algoritmalar ve makine öğrenimi konularında kapsamlı çalışmalar yürüttüm.",
        splashBio: "Ankara Üniversitesi Bilgisayar Mühendisliği öğrencisi. Yazılım geliştirme ve makine öğrenimine ilgi duyuyorum.",
        nav: { home: "ANASAYFA", projects: "Projeler", certs: "Sertifikalar", exp: "Deneyim" },
        titles: { homeProj: "Son Projeler", homeCert: "Sertifikalar", homeEdu: "Eğitim", homeExp: "Deneyim", fullProj: "Proje Portfolyosu", fullCerts: "Tüm Sertifikalar", fullExp: "Kariyer Yolculuğu" },
        btns: { unlock: "Beni Tanı", contact: "İletişime Geç", cv: "CV İndir", download: "PDF İNDİR" },
        cvFile: "cv türkçe 16.02.2026.pdf",
        projects: [{ title: "Yapay Zekâ Destekli Kan Tahlili Analizi", shortDesc: "TÜBİTAK 2209-A prototipi.", longDesc: "Doğal Dil İşleme ve makine öğrenmesi yöntemleri ile %85 üzeri doğruluk sağlanmıştır.", tech: ["Python", "NLP", "Machine Learning"] }],
        experience: [
            { role: "Yazman", company: "HSD Ankara", date: "Eylül 2025 - Devam", details: "Topluluk içi iletişim ve dökümantasyon süreçleri." },
            { role: "Organizasyon Sorumlusu", company: "HSD Ankara", date: "2025", details: "Topluluk etkinliklerinin koordinasyonu." }
        ],
        education: [
            { school: "Ankara Üniversitesi", degree: "Bilgisayar Mühendisliği", date: "2023 - Devam", grade: "GNO: 2.51" },
            { school: "Meram Anadolu Lisesi", degree: "Lise Mezuniyeti", date: "2018 - 2022", grade: "Not: 96.69" }
        ],
        certs: [
            { name: "Makine Öğrenmesi", issuer: "BTK Akademi", date: "2025", pdf: "BTK Makine Öğrenmesi.pdf" },
            { name: "Derin Öğrenmeye Giriş", issuer: "BTK Akademi", date: "2025", pdf: "BTK Derin Öğrenmeye Giriş.pdf" },
            { name: "Doğal Dil İşleme", issuer: "BTK Akademi", date: "2025", pdf: "BTK Doğa Dil İşleme.pdf" },
            { name: "Ağ Temelleri", issuer: "BTK Akademi", date: "2025", pdf: "BTK Ağ Temelleri.pdf" },
            { name: "Ethical Hacking Bootcamp", issuer: "Udemy", date: "2025", pdf: "Udemy Ethical Hacking.pdf" },
            { name: "Algoritma 101", issuer: "AUCS", date: "2023", pdf: "AUCS Algoritma 101.pdf" }
        ]
    },
    en: {
        tag: "Computer Engineer",
        bio: "As a Computer Engineering student at Ankara University, I have a strong foundation in Python, C, Java, and SQL. Experienced in data structures, algorithms, and AI.",
        splashBio: "Computer Engineering student at Ankara University. Interested in software development and AI.",
        nav: { home: "HOME", projects: "Projects", certs: "Certificates", exp: "Experience" },
        titles: { homeProj: "Recent Projects", homeCert: "Certificates", homeEdu: "Education", homeExp: "Experience", fullProj: "Project Portfolio", fullCerts: "Certifications", fullExp: "Career Journey" },
        btns: { unlock: "Know Me", contact: "Contact Me", cv: "Download CV", download: "DOWNLOAD PDF" },
        cvFile: "cv english 16.02.2026.pdf",
        projects: [{ title: "AI-Powered Blood Test Analysis", shortDesc: "TÜBİTAK 2209-A prototype.", longDesc: "Developed using NLP and machine learning with >85% accuracy.", tech: ["Python", "NLP", "Machine Learning"] }],
        experience: [
            { role: "Secretary", company: "HSD Ankara", date: "2025 - Present", details: "Communication and documentation lead." },
            { role: "Organization Lead", company: "HSD Ankara", date: "2025", details: "Managed events and team coordination." }
        ],
        education: [
            { school: "Ankara University", degree: "Computer Engineering", date: "2023 - Present", grade: "GPA: 2.51" },
            { school: "High School", degree: "Meram Anatolian High School", date: "2018 - 2022", grade: "GPA: 96.69" }
        ],
        certs: [
            { name: "Machine Learning", issuer: "BTK Academy", date: "2025", pdf: "BTK Makine Öğrenmesi.pdf" },
            { name: "Introduction to Deep Learning", issuer: "BTK Academy", date: "2025", pdf: "BTK Derin Öğrenmeye Giriş.pdf" },
            { name: "Natural Language Processing", issuer: "BTK Academy", date: "2025", pdf: "BTK Doğa Dil İşleme.pdf" },
            { name: "Network Fundamentals", issuer: "BTK Academy", date: "2025", pdf: "BTK Ağ Temelleri.pdf" },
            { name: "Ethical Hacking Bootcamp", issuer: "Udemy", date: "2025", pdf: "Udemy Ethical Hacking.pdf" },
            { name: "Algorithm 101 Training", issuer: "AUCS", date: "2023", pdf: "AUCS Algoritma 101.pdf" }
        ]
    }
};

let currentLang = 'tr';
const GITHUB_URL = "https://github.com/AYceren11";
const LINKEDIN_URL = "https://www.linkedin.com/in/ayşecerenşenel";

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

function setLanguage(lang) {
    currentLang = lang;
    const data = PORTFOLIO_DATA[lang];
    document.getElementById('btn-tr').classList.toggle('active', lang === 'tr');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('splash-tag').textContent = data.tag;
    document.getElementById('splash-bio').textContent = data.splashBio;
    document.getElementById('btn-unlock-text').textContent = data.btns.unlock;
    document.getElementById('nav-home').textContent = data.nav.home;
    document.getElementById('nav-projects').textContent = data.nav.projects;
    document.getElementById('nav-certs').textContent = data.nav.certs;
    document.getElementById('nav-experience').textContent = data.nav.exp;
    document.getElementById('user-tag').textContent = data.tag;
    document.getElementById('user-bio').textContent = data.bio;
    document.getElementById('label-contact').textContent = data.btns.contact;
    document.getElementById('cv-btn').textContent = data.btns.cv;
    document.getElementById('home-title-proj').textContent = data.titles.homeProj;
    document.getElementById('home-title-cert').textContent = data.titles.homeCert;
    document.getElementById('home-title-edu').textContent = data.titles.homeEdu;
    document.getElementById('home-title-exp').textContent = data.titles.homeExp;
    document.getElementById('title-projects-full').textContent = data.titles.fullProj;
    document.getElementById('title-certs-full').textContent = data.titles.fullCerts;
    document.getElementById('title-experience-full').textContent = data.titles.fullExp;
    renderDynamicContent();
}

function renderDynamicContent() {
    const data = PORTFOLIO_DATA[currentLang];
    document.getElementById('home-proj-feed').innerHTML = data.projects.map(p => `<div class="summary-card shadow-sm"><p class="font-bold text-sm text-peach-600">${p.title}</p><p class="text-[10px] opacity-60">${p.shortDesc}</p></div>`).join('');
    document.getElementById('home-cert-feed').innerHTML = data.certs.slice(0, 3).map(c => `<div class="summary-card shadow-sm"><p class="font-bold text-sm text-peach-600">${c.name}</p><p class="text-[10px] font-bold uppercase opacity-60">${c.issuer}</p></div>`).join('');
    document.getElementById('home-edu-feed').innerHTML = data.education.map(e => `<div class="summary-card shadow-sm"><p class="font-bold text-sm text-peach-600">${e.school}</p><p class="text-[10px] opacity-60">${e.degree}</p></div>`).join('');
    document.getElementById('home-exp-feed').innerHTML = data.experience.map(exp => `<div class="summary-card shadow-sm"><p class="font-bold text-sm text-peach-600">${exp.company}</p><p class="text-[10px] opacity-60">${exp.role}</p></div>`).join('');
    document.getElementById('full-projects-list').innerHTML = data.projects.map(p => `<div class="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-peach-100 dark:border-zinc-800 shadow-xl card-hover"><h3 class="text-2xl font-black mb-4 dark:text-white">${p.title}</h3><p class="opacity-70 text-sm mb-6">${p.longDesc}</p><div class="flex gap-2">${p.tech.map(t => `<span class="bg-peach-50 dark:bg-peach-900/20 text-peach-600 rounded-lg text-[10px] font-bold px-3 py-1">${t}</span>`).join('')}</div></div>`).join('');
    document.getElementById('full-certs-list').innerHTML = data.certs.map(c => `<div class="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-peach-100 dark:border-zinc-800 shadow-sm flex flex-col justify-between"><div><p class="font-bold text-sm leading-tight dark:text-white">${c.name}</p><p class="text-[10px] text-peach-500 font-bold mt-2 uppercase">${c.issuer}</p></div><a href="${c.pdf}" download class="mt-4 inline-block text-[9px] font-black bg-peach-50 dark:bg-peach-900/30 text-peach-600 px-4 py-2 rounded-lg text-center hover:bg-peach-500 transition">${data.btns.download}</a></div>`).join('');
    document.getElementById('full-experience-list').innerHTML = data.experience.map(e => `<div class="relative pl-10 border-l-2 border-peach-200 dark:border-zinc-800 mb-10"><h3 class="text-xl font-black dark:text-white">${e.role}</h3><p class="text-peach-500 font-bold text-xs uppercase mb-2">${e.company} | ${e.date}</p><p class="opacity-70 text-sm">${e.details}</p></div>`).join('');
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = PORTFOLIO_DATA[currentLang].cvFile;
    link.download = PORTFOLIO_DATA[currentLang].cvFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function startExcitement() { document.getElementById('character-container').classList.add('excited'); }
function stopExcitement() { document.getElementById('character-container').classList.remove('excited'); }
function unlockPortfolio() { document.body.classList.add('portfolio-unlocked'); document.body.style.overflow = "auto"; renderDynamicContent(); }

function showView(viewId) {
    document.querySelectorAll('.view-content').forEach(v => v.classList.add('hidden'));
    document.getElementById(`view-${viewId}`).classList.remove('hidden');
    document.querySelector('main').scrollTop = 0;
}

document.addEventListener('mousemove', (e) => {
    const pupils = document.querySelectorAll('.pupil');
    const container = document.getElementById('character-container');
    if (!container || pupils.length === 0) return;
    pupils.forEach(pupil => {
        const pRect = pupil.getBoundingClientRect();
        const px = pRect.left + pupil.clientWidth / 2;
        const py = pRect.top + pupil.clientHeight / 2;
        const angle = Math.atan2(e.pageX - px, e.pageY - py);
        const move = container.classList.contains('excited') ? 8 : 4;
        pupil.style.transform = `translate(${Math.sin(angle) * move}px, ${Math.cos(angle) * move}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
    document.getElementById('linkedin-btn').href = LINKEDIN_URL;
    document.getElementById('github-link').href = GITHUB_URL;
    setLanguage('tr');
});