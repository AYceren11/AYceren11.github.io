const PORTFOLIO_DATA = {
    tr: {
        tag: "Bilgisayar Mühendisi",
        bio: "Ankara Üniversitesi Bilgisayar Mühendisliği eğitimim boyunca Python, Java, C ve SQL üzerinde güçlü bir temel oluşturdum; veri yapıları, algoritmalar, makine öğrenmesi, yapay zekâ, veri analitiği ve yazılım mimarisi alanlarında hem teorik hem de uygulamalı çalışmalar gerçekleştirdim.\n" +
            "Hedefim, analitik düşünme ve problem çözme becerilerimi kullanarak savunma sanayii için katma değer üretmektir. ",

        splashBio: "Ankara Üniversitesi Bilgisayar Mühendisliği eğitimim ve projelerimle, savunma sanayiinde yerli ve milli teknolojiler geliştirmeye odaklanan bir mühendis adayıyım.",
        nav: { home: "ANASAYFA", projects: "Projeler", certs: "Sertifikalar", exp: "Deneyimler" },
        titles: { homeProj: "Son Projeler", homeCert: "Son Sertifikalar", homeEdu: "Eğitim", homeExp: "Son Deneyimler", fullProj: "Tüm Projeler", fullCerts: "Tüm Sertifikalar", fullExp: "Tüm Deneyimler" },
        btns: { unlock: "Beni Tanı", contact: "İletişime Geç", cv: "CV İndir", download: "PDF İNDİR" },
        cvFile: "cv Türkçe 06.05.2026.pdf",
        projects: [
            {
                title: "Havacılıkta Yapay Zekâ TEKNOFEST Yarışması",
                shortDesc: "Takım Kaptanı, Ocak 2026 - Devam Ediyor",
                longDesc: "Ekip koordinasyonu ve model geliştirme süreçlerine liderlik edilmektedir.",
                tech: ["Python", "Makine Öğrenmesi", "Takım Liderliği"],
                links: ["https://github.com/AYceren11"]
            },
            {
                title: "Madencilik Teknolojileri TEKNOFEST Yarışması",
                shortDesc: "Üye, Ocak 2026 - Devam Ediyor",
                longDesc: "Sensör tabanlı veri analizi ve erken uyarı sistemleri (gaz yoğunluğu risk tespiti) üzerinde çalışılmaktadır.",
                tech: ["Python", "Veri Analizi", "Sensörler"],
                links: ["https://github.com/AYceren11"]
            },
            {
                title: "Yapay Zekâ Destekli Kan Tahlili Analizi TÜBİTAK 2209-A prototipi",
                shortDesc: "Proje Sahibi ve Yürütücü, Eylül 2025 - Devam Ediyor",
                longDesc: "Doğal Dil İşleme ve makine öğrenmesi yöntemleri ile %85 üzeri doğruluk sağlanmıştır.",
                tech: ["Python", "NLP", "Makine Öğrenmesi"],
                links: ["https://github.com/AYceren11"]
            }
        ],
        experience: [
            {
                role: "Yapay Zeka Birimi Stajyeri",
                company: "T.C. Cumhurbaşkanlığı İletişim Başkanlığı",
                date: "Nisan 2026 - Devam Ediyor",
                details: "Yapay zekanın mevcut sistemlere ve iş akışlarına entegrasyonu üzerine çalışılmaktadır. Yapay zeka odaklı çözümlerin geliştirilmesi ve uygulanmasına destek olunmaktadır.",
                links: ["https://www.iletisim.gov.tr/"]
            },
            {
                role: "Yazılım Geliştirme Stajyeri",
                company: "Uçak Yazılım",
                date: "Ocak 2026 - Şubat 2026",
                details: "Finans ve İK veri setleri için makine öğrenmesi tabanlı karar destek sistemi geliştirilmiştir. Flask tabanlı web uygulaması ile otomatik özellik çıkarımı ve PDF rapor üretimi sağlanmıştır. Doğrusal ve Lojistik Regresyon ile %91 doğruluk elde edilmiştir. Ollama3 (LLM) entegrasyonu ile model çıktıları yorumlanmıştır.",
                links: ["https://github.com/AYceren11"]
            },
            {
                role: "Sosyal Medya Elçisi",
                company: "HSD Ankara",
                date: "Şubat 2026 - Devam Ediyor",
                details: "Topluluk hesaplarının yönetimi ve içerik stratejisi yürütülmektedir.",
                links: ["https://github.com/AYceren11"]
            },
            {
                role: "Yazman",
                company: "HSD Ankara",
                date: "Eylül 2025 - Şubat 2026",
                details: "Dokümantasyon ve topluluk içi iletişim süreçlerinden sorumludur.",
                links: ["https://github.com/AYceren11"]
            },
            {
                role: "Organizasyon ve Prime Ekip Sorumlusu",
                company: "HSD Ankara",
                date: "Mart 2025 - Kasım 2025",
                details: "Etkinlik planlama ve ekip koordinasyonu sağlanmıştır.",
                links: ["https://github.com/AYceren11"]
            }
        ],
        education: [
            { school: "Ankara Üniversitesi", degree: "Bilgisayar Mühendisliği", date: "2023 - Devam", grade: "GNO: 2.91" },
            { school: "Meram Anadolu Lisesi", degree: "Lise Mezuniyeti", date: "2018 - 2022", grade: "Not: 96.69" }
        ],
        certs: [
            { name: "Güdüm Sistemleri Speed Bootcamp", issuer: "Aselsan", date: "11 Nisan 2026", pdf: "güdümlü-sist-sertifika.pdf" },
            { name: "HCIA-AI V4.0 Course: Yapay Zeka Temelleri ve Uygulamaları", issuer: "Huawei ICT Academy", date: "2026", pdf: "HCIA-AI V4.0 Course.pdf" },
            { name: "HCIA-Cloud Computing V5.5 Course: Bulut Bilişim Teknolojileri ve Sanallaştırma", issuer: "Huawei ICT Academy", date: "2026", pdf: "HCIA-Cloud Computing V5.5 Course.pdf" },
            { name: "HCCDA-Tech Essentials Course: Bulut Geliştirici ve Temel Teknoloji Esasları", issuer: "Huawei ICT Academy", date: "2026", pdf: "HCCDA-Tech Essentials Course.pdf" },
            { name: "KAPSÜL+ 3. Bölüm Programı Katılım Belgesi", issuer: "T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı Savunma Sanayii Akademi", date: "2026", pdf: "kapsül-3-sertifika.pdf" },
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
        bio: "During my Computer Engineering studies at Ankara University, I have built a strong foundation in Python, Java, C, and SQL. I have gained both theoretical and practical experience in data structures, algorithms, machine learning, AI, data analytics, and software architecture.\n" +
            "My goal is to apply my analytical thinking and problem-solving skills to contribute value in the defense industry.",
        splashBio: "As a Computer Engineering student at Ankara University, I am a prospective engineer focused on developing domestic and national technologies for the defense industry.",
        nav: { home: "HOME", projects: "Projects", certs: "Certificates", exp: "Experiences" },
        titles: { homeProj: "Recent Projects", homeCert: "Recent Certificates", homeEdu: "Education", homeExp: "Recent Experiences", fullProj: "All Projects", fullCerts: "All Certificates", fullExp: "All Experiences" },
        btns: { unlock: "Know Me", contact: "Contact Me", cv: "Download CV", download: "DOWNLOAD PDF" },
        cvFile: "cv English 06.05.2026.pdf",
        projects: [
            {
                title: "AI in Aviation TEKNOFEST Competition",
                shortDesc: "Team Leader, January 2026 - Present",
                longDesc: "Leading team coordination and model development processes.",
                tech: ["Python", "Machine Learning", "Team Leadership"],
                links: ["https://github.com/AYceren11"]
            },
            {
                title: "Mining Technologies TEKNOFESTCompetition",
                shortDesc: "Member, January 2026 - Present",
                longDesc: "Working on sensor-based data analysis and early warning systems (gas density risk detection).",
                tech: ["Python", "Data Analysis", "Sensors"],
                links: ["https://github.com/AYceren11"]
            },
            {
                title: "AI-Powered Blood Test Analysis TÜBİTAK 2209-A prototype",
                shortDesc: "Project Owner and Lead, September 2025 - Present",
                longDesc: "Developed using NLP and machine learning with >85% accuracy.",
                tech: ["Python", "NLP", "Machine Learning"],
                links: ["https://github.com/AYceren11"]
            }
        ],
        experience: [
            {
                role: "Artificial Intelligence Unit Intern",
                company: "Presidency of the Republic of Türkiye Directorate of Communications",
                date: "Apr 2026 - Present",
                details: "Working on the integration of artificial intelligence into existing systems and workflows. Assisting in the development and implementation of AI-driven solutions.",
                links: ["https://www.iletisim.gov.tr/"]
            },
            {
                role: "Software Development Intern",
                company: "Uçak Software",
                date: "January 2026 - February 2026",
                details: "Developed an ML-based decision support system for finance and HR datasets. Built Flask web app with automatic feature extraction and PDF reports. Achieved 91% accuracy with Linear & Logistic Regression. Integrated Ollama3 (LLM) for model output interpretation.",
                links: ["https://github.com/AYceren11"]
            },
            {
                role: "Social Media Ambassador",
                company: "HSD Ankara",
                date: "February 2026 - Present",
                details: "Managing community accounts and content strategy.",
                links: ["https://github.com/AYceren11"]
            },
            {
                role: "Secretary",
                company: "HSD Ankara",
                date: "September 2025 - February 2026",
                details: "Responsible for documentation and internal communications.",
                links: ["https://github.com/AYceren11"]
            },
            {
                role: "Organization & Prime Team Lead",
                company: "HSD Ankara",
                date: "March 2025 - November 2025",
                details: "Event planning and team coordination.",
                links: ["https://github.com/AYceren11"]
            }
        ],
        education: [
            { school: "Ankara University", degree: "Computer Engineering", date: "2023 - Present", grade: "GPA: 2.91" },
            { school: "High School", degree: "Meram Anatolian High School", date: "2018 - 2022", grade: "GPA: 96.69" }
        ],
        certs: [
            { name: "Guidance Systems Speed Bootcamp", issuer: "Aselsan", date: "April 11, 2026", pdf: "güdümlü-sist-sertifika.pdf" },
            { name: "HCIA-AI V4.0 Course: Fundamentals and Applications of Artificial Intelligence", issuer: "Huawei ICT Academy", date: "2026", pdf: "HCIA-AI V4.0 Course.pdf" },
            { name: "HCIA-Cloud Computing V5.5 Course: Cloud Computing Technologies and Virtualization", issuer: "Huawei ICT Academy", date: "Nisan 2026", pdf: "HCIA-Cloud Computing V5.5 Course.pdf" },
            { name: "HCCDA-Tech Essentials Course: Cloud Developer and Fundamental Technology Essentials", issuer: "Huawei ICT Academy", date: "Nisan 2026", pdf: "HCCDA-Tech Essentials Course.pdf" },
            { name: "KAPSÜL+ 3rd Phase Program Participation Certificate", issuer: "T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı Savunma Sanayii Akademi", date: "02.04.2026", pdf: "kapsül-3-sertifika.pdf" },
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

function openLinks(links) {
    if (!links || links.length === 0) return;
    links.forEach(link => window.open(link, '_blank'));
}

function downloadFile(filePath) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

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

    // Son Projeler (en üstteki 4)
    document.getElementById('home-proj-feed').innerHTML = data.projects
        .slice(0, 4)
        .map(p => `
            <div class="summary-card interactive-card shadow-sm" onclick="openLinks(${JSON.stringify(p.links).replace(/"/g, "'")})">
                <p class="font-bold text-sm text-peach-600">${p.title}</p>
                <p class="text-[10px] opacity-60">${p.shortDesc}</p>
            </div>
        `).join('');

    // Sertifikalar (en üstteki 4)
    document.getElementById('home-cert-feed').innerHTML = data.certs
        .slice(0, 4)
        .map(c => `
            <div class="summary-card interactive-card shadow-sm" onclick="downloadFile('${c.pdf}')">
                <p class="font-bold text-sm text-peach-600">${c.name}</p>
                <p class="text-[10px] font-bold uppercase opacity-60">${c.issuer}</p>
            </div>
        `).join('');

    // Eğitim (tümünü göster)
    document.getElementById('home-edu-feed').innerHTML = data.education
        .map(e => `<div class="summary-card shadow-sm">
            <p class="font-bold text-sm text-peach-600">${e.school}</p>
            <p class="text-[10px] opacity-60">${e.degree} | ${e.grade}</p>
        </div>
        `).join('');

    // Deneyim (en üstteki 4)
    document.getElementById('home-exp-feed').innerHTML = data.experience
        .slice(0, 4)
        .map(exp => `<div class="summary-card interactive-card shadow-sm" onclick="openLinks(${JSON.stringify(exp.links).replace(/"/g, "'")})">
            <p class="font-bold text-sm text-peach-600">${exp.company}</p>
            <p class="text-[10px] opacity-60">${exp.role} | ${exp.date}</p>
        </div>
        `).join('');

    // Tüm Projeler
    document.getElementById('full-projects-list').innerHTML = data.projects
        .map(p => `
            <div class="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-peach-100 dark:border-zinc-800 shadow-xl interactive-card" onclick="openLinks(${JSON.stringify(p.links).replace(/"/g, "'")})">
                <h3 class="text-2xl font-black mb-4 dark:text-white">${p.title}</h3>
                <p class="opacity-70 text-sm mb-6">${p.longDesc}</p>
                <div class="flex gap-2">
                    ${p.tech.map(t => `<span class="bg-peach-50 dark:bg-peach-900/20 text-peach-600 rounded-lg text-[10px] font-bold px-3 py-1">${t}</span>`).join('')}
                </div>
            </div>
        `).join('');

    // Tüm Sertifikalar
    document.getElementById('full-certs-list').innerHTML = data.certs
        .map(c => `
            <div class="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-peach-100 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
                <div>
                    <p class="font-bold text-sm leading-tight dark:text-white">${c.name}</p>
                    <p class="text-[10px] text-peach-500 font-bold mt-2 uppercase">${c.issuer}</p>
                </div>
                <a href="${c.pdf}" download class="mt-4 inline-block text-[9px] font-black bg-peach-50 dark:bg-peach-900/30 text-peach-600 px-4 py-2 rounded-lg text-center hover:bg-peach-500 transition">
                    ${data.btns.download}
                </a>
            </div>
        `).join('');

    // Tüm Deneyimler
    document.getElementById('full-experience-list').innerHTML = data.experience
        .map(e => `
            <div class="relative pl-10 border-l-2 border-peach-200 dark:border-zinc-800 mb-10 interactive-card" onclick="openLinks(${JSON.stringify(e.links).replace(/"/g, "'")})">
                <h3 class="text-xl font-black dark:text-white">${e.role}</h3>
                <p class="text-peach-500 font-bold text-xs uppercase mb-2">${e.company} | ${e.date}</p>
                <p class="opacity-70 text-sm">${e.details}</p>
            </div>
        `).join('');
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