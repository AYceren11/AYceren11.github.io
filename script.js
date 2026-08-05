const PORTFOLIO_DATA = {
    tr: {
        tag: "Bilgisayar Mühendisi",
        bio: "Ankara Üniversitesi Bilgisayar Mühendisliği eğitimim boyunca Python, Java, C ve SQL üzerinde güçlü bir temel oluşturdum; veri yapıları, algoritmalar, makine öğrenmesi, yapay zekâ, veri analitiği ve yazılım mimarisi alanlarında hem teorik hem de uygulamalı çalışmalar gerçekleştirdim.\n" +
            "Hedefim, analitik düşünme ve problem çözme becerilerimi kullanarak savunma sanayii için katma değer üretmektir. ",

        splashBio: "Ankara Üniversitesi Bilgisayar Mühendisliği eğitimim ve projelerimle, savunma sanayiinde yerli ve milli teknolojiler geliştirmeye odaklanan bir mühendis adayıyım.",
        nav: { home: "ANASAYFA", projects: "Projeler", certs: "Sertifikalar", exp: "Deneyimler" },
        titles: { homeProj: "Son Projeler", homeCert: "Son Sertifikalar", homeEdu: "Eğitim", homeExp: "Son Deneyimler", fullProj: "Tüm Projeler", fullCerts: "Tüm Sertifikalar", fullExp: "Tüm Deneyimler" },
        btns: { unlock: "Beni Tanı", contact: "İletişime Geç", cv: "CV İndir", download: "PDF İNDİR" },
        messages: { popupWarning: "Lütfen tüm bağlantıların açılması için tarayıcınızda pop-uplara izin verin." },
        cvFile: "cv türkçe 05.08.2026.pdf",
        projects: [
            {
                title: "OTUSAT - Küp Uydu (CubeSat) Projesi",
                shortDesc: "Gönüllü Araştırmacı / Yazılım Geliştirici, Mayıs 2026 - Devam Ediyor",
                longDesc: "Küp uydu ile yer istasyonu arasındaki RF haberleşme protokolleri (TM/TC) ile uydu alt sistemleri arasındaki seri haberleşme (UART, SPI, I2C) mimarileri ve güvenilir veri iletim algoritmaları geliştirilmektedir.",
                tech: ["RF Telemetri", "Gömülü Sistemler", "UART/SPI/I2C"],
                links: ["https://otu1sat.github.io/"]
            },
            {
                title: "Havacılıkta Yapay Zekâ TEKNOFEST Yarışması",
                shortDesc: "Takım Kaptanı, Ocak 2026 - Devam Ediyor",
                longDesc: "Ekip koordinasyonu ve model geliştirme süreçlerine liderlik edilmektedir.",
                tech: ["Python", "Makine Öğrenmesi", "Takım Liderliği"],
                links: []
            },
            {
                title: "Madencilik Teknolojileri TEKNOFEST Yarışması",
                shortDesc: "Üye, Ocak 2026 - Devam Ediyor",
                longDesc: "Sensör tabanlı veri analizi ve erken uyarı sistemleri (gaz yoğunluğu risk tespiti) üzerinde çalışılmaktadır.",
                tech: ["Python", "Veri Analizi", "Sensörler"],
                links: []
            }
        ],
        experience: [
            {
                role: "Araştırma ve Yazılım Geliştirme Stajyeri",
                company: "Boğaziçi Üniversitesi - MIMLab (Multimodal Imaging & Mind Lab)",
                date: "Temmuz 2026 - Devam Ediyor",
                details: "MimPhy projesi kapsamında eşzamanlı EEG-fMRI ve çok katmanlı ağ analizleriyle bilişsel süreçlerin ve fizyolojik dinamiklerin incelenmesi üzerine çalışılmaktadır. Çok modlu nörofizyolojik verilerin ön işlenmesi, gürültü arındırma, öznitelik çıkarımı, ML modellerinin geliştirilmesi, veri boru hatlarının kurulması ve zaman-frekans analizi süreçleri yürütülmektedir. (Teknolojiler: Simultaneous EEG-fMRI, Signal Processing, Machine Learning, Feature Extraction, Preprocessing, Pipeline Development, Python, MATLAB)",
                links: ["https://mimlab.bogazici.edu.tr/interns-research-volunteers"]
            },
            {
                role: "Yazılım Geliştirme Stajyeri (Uzaktan)",
                company: "Microsoft",
                date: "Temmuz 2026 - Devam Ediyor",
                details: "Quantum Kickstart Programı kapsamında Azure Quantum ve Q# dili kullanılarak kübit manipülasyonu, süperpozisyon ve dolaşıklık (entanglement) ilkelerine dayalı kuantum algoritmaları geliştirilmekte ve simüle edilmektedir. Klasik ve kuantum hesaplama arasındaki hibrit sistem mimarileri analiz edilerek modern kuantum SDK'ları ile problem çözme süreçleri yürütülmektedir. (Teknolojiler: Q#, Azure Quantum, QDK, Python, Jupyter Notebooks)",
                links: []
            },
            {
                role: "Yapay Zeka Birimi Stajyeri",
                company: "T.C. Cumhurbaşkanlığı İletişim Başkanlığı",
                date: "Nisan 2026 - Haziran 2026",
                details: "Kamu evrak sistemlerinin NIST standartlarındaki PQC algoritmalarına taşınması, benchmark analizleri ve kurumsal Sıfır Güven (Zero Trust) strateji raporunun hazırlanması gerçekleştirilmiştir. Mevzuat verileriyle ChromaDB tabanlı RAG mimarisi kurgulanmış, UYAP SOAP servisleri entegre edilmiştir. Telegram üzerinden Telethon ile veri toplanarak BERT ve NetworkX ile trend/etkileşim analizi yapılmış; TurkishBERT/Zemberek kullanılarak siber-psiko duygu durumu analizi algoritmaları geliştirilmiştir. (Teknolojiler: Python, TypeScript, Next.js, React, FastAPI, Node.js, MSSQL, ChromaDB, PQC, liboqs, BERT, Docker, Git)",
                links: [
                    "https://github.com/AYceren11/Cyber-Psycho-Analysis-System",
                    "https://github.com/AYceren11/tg-intel-platform",
                    "https://www.iletisim.gov.tr/turkce"
                ]
            },
            {
                role: "Yazılım Geliştirme Stajyeri",
                company: "Uçak Yazılım",
                date: "Ocak 2026 - Şubat 2026",
                details: "Finans ve İK veri setleri için makine öğrenmesi tabanlı karar destek sistemi geliştirilmiştir. Flask tabanlı web uygulaması ile otomatik özellik çıkarımı ve PDF rapor üretimi sağlanmıştır. Doğrusal ve Lojistik Regresyon ile %91 doğruluk elde edilmiştir. Ollama3 (LLM) entegrasyonu ile model çıktıları yorumlanmıştır.",
                links: [
                    "https://github.com/AYceren11/ai-ml-based-financial-reporting-system",
                    "https://github.com/AYceren11/ai-ml-hr-analytics-system",
                    "https://www.ucakyazilim.com.tr/"
                ]
            },
            {
                role: "Sosyal Medya Elçisi",
                company: "HSD Ankara",
                date: "Şubat 2026 - Devam Ediyor",
                details: "Topluluk hesaplarının yönetimi ve içerik stratejisi yürütülmektedir.",
                links: ["https://developer.huawei.com/consumer/en/programs/hsd/"]
            },
            {
                role: "Yazman",
                company: "HSD Ankara",
                date: "Eylül 2025 - Şubat 2026",
                details: "Dokümantasyon ve topluluk içi iletişim süreçlerinden sorumludur.",
                links: ["https://developer.huawei.com/consumer/en/programs/hsd/"]
            },
            {
                role: "Organizasyon ve Prime Ekip Sorumlusu",
                company: "HSD Ankara",
                date: "Mart 2025 - Kasım 2025",
                details: "Etkinlik planlama ve ekip koordinasyonu sağlanmıştır.",
                links: ["https://developer.huawei.com/consumer/en/programs/hsd/"]
            }
        ],
        education: [
            { school: "Ankara Üniversitesi", degree: "Bilgisayar Mühendisliği", date: "2023 - Devam", grade: "GNO: 3.30" },
            { school: "Meram Anadolu Lisesi", degree: "Lise Mezuniyeti", date: "2018 - 2022", grade: "Not: 96.69" }
        ],
        certs: [
            { name: "Savunma Sanayii 401 Programı Başarı Sertifikası", issuer: "Savunma Sanayii Akademi / SSB & YÖK", date: "17 Haziran 2026", pdf: "savunma-sanayii-akademi-sertifika-sorgulama.pdf", desc: "Savunma Sanayii Başkanlığı ve Yükseköğretim Kurulu iş birliğiyle düzenlenen Savunma Sanayii 401 eğitimini başarıyla ve AA derecesiyle tamamlama belgesi." },
            { name: "DİKKAT Akademi — Dijital İstihbarata Karşı Koyma Atölyesi", issuer: "T.C. Cumhurbaşkanlığı İletişim Başkanlığı", date: "13 Mayıs 2026", pdf: "dikkat-sertifika-DKKT-7FKRVL-N0PJ.pdf", desc: "Dijital istihbarat, bilgi güvenliği ve tehdit analizi konularını kapsayan eğitim programı." },
            { name: "Profesyonel Hayata Giriş Sertifikası (GNÇYTNK)", issuer: "Turkcell Akademi", date: "2026", pdf: "Turkcell GNÇYTNK’26 Gelişim Rotası Sertifikası Ayşe Ceren Şenel.pdf", desc: "Turkcell Akademi tarafından GNÇYTNK Programı kapsamında gerçekleştirilen canlı yayın ve asenkron eğitimleri başarıyla tamamlama belgesi." },
            { name: "Güdüm Sistemleri Speed Bootcamp", issuer: "Aselsan", date: "11 Nisan 2026", pdf: "güdümlü-sist-sertifika.pdf", desc: "Güdüm sistemleri üzerine yoğunlaştırılmış teknik eğitim programı." },
            { name: "HCIA-AI V4.0 Course: Yapay Zeka Temelleri ve Uygulamaları", issuer: "Huawei ICT Academy", date: "2026", pdf: "HCIA-AI V4.0 Course.pdf", desc: "Yapay zeka temelleri ve Huawei ekosistemindeki AI uygulamaları üzerine kapsamlı eğitim." },
            { name: "HCIA-Cloud Computing V5.5 Course: Bulut Bilişim Teknolojileri ve Sanallaştırma", issuer: "Huawei ICT Academy", date: "2026", pdf: "HCIA-Cloud Computing V5.5 Course.pdf", desc: "Bulut bilişim mimarisi ve sanallaştırma teknolojileri üzerine yetkinlik sertifikası." },
            { name: "HCCDA-Tech Essentials Course: Bulut Geliştirici ve Temel Teknoloji Esasları", issuer: "Huawei ICT Academy", date: "2026", pdf: "HCCDA-Tech Essentials Course.pdf", desc: "Bulut servisleri ve Huawei Cloud üzerinde uygulama geliştirme temelleri eğitimi." },
            { name: "KAPSÜL+ 3. Bölüm Programı Katılım Belgesi", issuer: "T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı Savunma Sanayii Akademi", date: "2026", pdf: "kapsül-3-sertifika.pdf", desc: "Savunma Sanayii Başkanlığı tarafından düzenlenen ileri teknoloji eğitim programı." },
            { name: "Makine Öğrenmesi", issuer: "BTK Akademi", date: "2025", pdf: "BTK Makine Öğrenmesi.pdf", desc: "Makine öğrenmesi algoritmaları ve veri modelleme teknikleri üzerine teorik ve pratik eğitim." },
            { name: "Derin Öğrenmeye Giriş", issuer: "BTK Akademi", date: "2025", pdf: "BTK Derin Öğrenmeye Giriş.pdf", desc: "Yapay sinir ağları ve derin öğrenme mimarilerinin temellerini kapsayan teknik eğitim." },
            { name: "Doğal Dil İşleme", issuer: "BTK Akademi", date: "2025", pdf: "BTK Doğa Dil İşleme.pdf", desc: "Metin analizi ve dil modelleri geliştirme üzerine uygulama odaklı NLP eğitimi." },
            { name: "Ağ Temelleri", issuer: "BTK Akademi", date: "2025", pdf: "BTK Ağ Temelleri.pdf", desc: "Bilgisayar ağları katmanları, protokoller ve temel ağ güvenliği prensipleri eğitimi." },
            { name: "Ethical Hacking Bootcamp", issuer: "Udemy", date: "2025", pdf: "Udemy Ethical Hacking.pdf", desc: "Siber güvenlik temelleri ve etik hackleme yöntemleri üzerine kapsamlı eğitim." },
            { name: "Algoritma 101", issuer: "AUCS", date: "2023", pdf: "AUCS Algoritma 101.pdf", desc: "Veri yapıları ve algoritma tasarım prensipleri üzerine temel yetkinlik eğitimi." },
            { name: "Almanca Eğitimi (A1-A2) Başarı Sertifikası", issuer: "IIENSTITU", date: "20 Ekim 2019", pdf: "AlmancaA1-A2.pdf", desc: "IIENSTITU tarafından düzenlenen 30 saatlik Almanca Eğitimi (A1-A2) programını ve başarı sınavını tamamlayarak alınan başarı belgesi." }
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
        messages: { popupWarning: "Please allow pop-ups in your browser to open all links." },
        cvFile: "cv english 05.08.2026.pdf",
        projects: [
            {
                title: "OTUSAT - CubeSat Project",
                shortDesc: "Volunteer Researcher / Software Developer, May 2026 - Present",
                longDesc: "Designing RF communication protocols, telemetry (TM), and telecommand (TC) packet structures between the CubeSat and the ground station, as well as serial communication (UART, SPI, I2C) architectures and reliable data transmission algorithms among satellite subsystems.",
                tech: ["RF Comm", "Embedded Systems", "UART/SPI/I2C"],
                links: ["https://otu1sat.github.io/"]
            },
            {
                title: "AI in Aviation TEKNOFEST Competition",
                shortDesc: "Team Leader, January 2026 - Present",
                longDesc: "Leading team coordination and model development processes.",
                tech: ["Python", "Machine Learning", "Team Leadership"],
                links: []
            },
            {
                title: "Mining Technologies TEKNOFESTCompetition",
                shortDesc: "Member, January 2026 - Present",
                longDesc: "Working on sensor-based data analysis and early warning systems (gas density risk detection).",
                tech: ["Python", "Data Analysis", "Sensors"],
                links: []
            }
        ],
        experience: [
            {
                role: "Research and Software Development Intern",
                company: "Boğaziçi University - MIMLab (Multimodal Imaging & Mind Lab)",
                date: "July 2026 - Present",
                details: "Working on the MimPhy project investigating cognitive processes and physiological dynamics via simultaneous EEG-fMRI and multilayer network analysis. Undertaking preprocessing of multimodal neurophysiological data, denoising, feature extraction, developing ML models, building automated data pipelines, and time-frequency network analysis. (Technologies: Simultaneous EEG-fMRI, Signal Processing, Machine Learning, Feature Extraction, Preprocessing, Pipeline Development, Python, MATLAB)",
                links: ["https://mimlab.bogazici.edu.tr/interns-research-volunteers"]
            },
            {
                role: "Software Development Intern (Remote)",
                company: "Microsoft",
                date: "July 2026 - Present",
                details: "Coded and simulated quantum algorithms based on qubit manipulation, superposition, and entanglement principles using Azure Quantum and Q# within the Quantum Kickstart Program. Analyzed hybrid classical-quantum computing architectures and worked with modern quantum SDKs. (Technologies: Q#, Azure Quantum, QDK, Python, Jupyter Notebooks)",
                links: []
            },
            {
                role: "Artificial Intelligence Unit Intern",
                company: "Presidency of the Republic of Türkiye Directorate of Communications",
                date: "Apr 2026 - June 2026",
                details: "Migrated public document systems to NIST PQC algorithms (ML-KEM, ML-DSA), performed benchmark analyses, and authored corporate Zero Trust strategy reports. Designed ChromaDB-based RAG architecture and integrated UYAP SOAP services for decision support. Collected Telegram data using Telethon and conducted trend/network analysis using BERT and NetworkX. Developed siber-psycho analysis text algorithms using TurkishBERT and Zemberek. (Technologies: Python, TypeScript, Next.js, React, FastAPI, Node.js, MSSQL, ChromaDB, PQC, liboqs, BERT, Docker, Git)",
                links: [
                    "https://github.com/AYceren11/Cyber-Psycho-Analysis-System",
                    "https://github.com/AYceren11/tg-intel-platform",
                    "https://www.iletisim.gov.tr/turkce"
                ]
            },
            {
                role: "Software Development Intern",
                company: "Uçak Software",
                date: "January 2026 - February 2026",
                details: "Developed an ML-based decision support system for finance and HR datasets. Built Flask web app with automatic feature extraction and PDF reports. Achieved 91% accuracy with Linear & Logistic Regression. Integrated Ollama3 (LLM) for model output interpretation.",
                links: [
                    "https://github.com/AYceren11/ai-ml-based-financial-reporting-system",
                    "https://github.com/AYceren11/ai-ml-hr-analytics-system",
                    "https://www.ucakyazilim.com.tr/"
                ]
            },
            {
                role: "Social Media Ambassador",
                company: "HSD Ankara",
                date: "February 2026 - Present",
                details: "Managing community accounts and content strategy.",
                links: ["https://developer.huawei.com/consumer/en/programs/hsd/"]
            },
            {
                role: "Secretary",
                company: "HSD Ankara",
                date: "September 2025 - February 2026",
                details: "Responsible for documentation and internal communications.",
                links: ["https://developer.huawei.com/consumer/en/programs/hsd/"]
            },
            {
                role: "Organization & Prime Team Lead",
                company: "HSD Ankara",
                date: "March 2025 - November 2025",
                details: "Event planning and team coordination.",
                links: ["https://developer.huawei.com/consumer/en/programs/hsd/"]
            }
        ],
        education: [
            { school: "Ankara University", degree: "Computer Engineering", date: "2023 - Present", grade: "GPA: 3.30" },
            { school: "High School", degree: "Meram Anatolian High School", date: "2018 - 2022", grade: "GPA: 96.69" }
        ],
        certs: [
            { name: "Defense Industry 401 Program Certificate of Achievement", issuer: "SSB & YÖK", date: "June 17, 2026", pdf: "savunma-sanayii-akademi-sertifika-sorgulama.pdf", desc: "Certificate of successfully completing the Defense Industry 401 course with an AA grade, organized in cooperation with SSB and YÖK." },
            { name: "DIKKAT Academy — Digital Counter-Intelligence Workshop", issuer: "Presidency of the Republic of Türkiye Directorate of Communications", date: "May 13, 2026", pdf: "dikkat-sertifika-DKKT-7FKRVL-N0PJ.pdf", desc: "Workshop training program covering digital intelligence, information security, and threat analysis." },
            { name: "Introduction to Professional Life Certificate (GNÇYTNK)", issuer: "Turkcell Academy", date: "2026", pdf: "Turkcell GNÇYTNK’26 Gelişim Rotası Sertifikası Ayşe Ceren Şenel.pdf", desc: "Certificate of successfully completing live broadcast and asynchronous training within the scope of the GNÇYTNK Program by Turkcell Academy." },
            { name: "Guidance Systems Speed Bootcamp", issuer: "Aselsan", date: "April 11, 2026", pdf: "güdümlü-sist-sertifika.pdf", desc: "Intensive technical training program on guidance systems." },
            { name: "HCIA-AI V4.0 Course: Fundamentals and Applications of Artificial Intelligence", issuer: "Huawei ICT Academy", date: "2026", pdf: "HCIA-AI V4.0 Course.pdf", desc: "Comprehensive training on AI fundamentals and applications within the Huawei ecosystem." },
            { name: "HCIA-Cloud Computing V5.5 Course: Cloud Computing Technologies and Virtualization", issuer: "Huawei ICT Academy", date: "Nisan 2026", pdf: "HCIA-Cloud Computing V5.5 Course.pdf", desc: "Certification on cloud computing architecture and virtualization technologies." },
            { name: "HCCDA-Tech Essentials Course: Cloud Developer and Fundamental Technology Essentials", issuer: "Huawei ICT Academy", date: "Nisan 2026", pdf: "HCCDA-Tech Essentials Course.pdf", desc: "Training on cloud services and fundamental application development on Huawei Cloud." },
            { name: "KAPSÜL+ 3rd Phase Program Participation Certificate", issuer: "T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı Savunma Sanayii Akademi", date: "02.04.2026", pdf: "kapsül-3-sertifika.pdf", desc: "Advanced technology training program coordinated by the Presidency of Defense Industries." },
            { name: "Machine Learning", issuer: "BTK Academy", date: "2025", pdf: "BTK Makine Öğrenmesi.pdf", desc: "Theoretical and practical training on ML algorithms and data modeling techniques." },
            { name: "Introduction to Deep Learning", issuer: "BTK Academy", date: "2025", pdf: "BTK Derin Öğrenmeye Giriş.pdf", desc: "Technical training covering fundamentals of neural networks and deep learning." },
            { name: "Natural Language Processing", issuer: "BTK Academy", date: "2025", pdf: "BTK Doğa Dil İşleme.pdf", desc: "Applied NLP training on text analysis and language model development." },
            { name: "Network Fundamentals", issuer: "BTK Academy", date: "2025", pdf: "BTK Ağ Temelleri.pdf", desc: "Training on computer network layers, protocols, and network security basics." },
            { name: "Ethical Hacking Bootcamp", issuer: "Udemy", date: "2025", pdf: "Udemy Ethical Hacking.pdf", desc: "Comprehensive training on cybersecurity fundamentals and ethical hacking." },
            { name: "Algorithm 101 Training", issuer: "AUCS", date: "2023", pdf: "AUCS Algoritma 101.pdf", desc: "Fundamental competency training on data structures and algorithm design principles." },
            { name: "German Language Training (A1-A2) Certificate of Achievement", issuer: "IIENSTITU", date: "October 20, 2019", pdf: "AlmancaA1-A2.pdf", desc: "Certificate of achievement for successfully completing the 30-hour German Language Training (A1-A2) program and passing the examination, organized by IIENSTITU." }
        ]
    }
};

let currentLang = 'tr';
const GITHUB_URL = "https://github.com/AYceren11";
const LINKEDIN_URL = "https://www.linkedin.com/in/ayşecerenşenel";

function openLinks(links) {
    if (!links || links.length === 0) return;
    if (links.length > 1) {
        alert(PORTFOLIO_DATA[currentLang].messages.popupWarning);
    }
    links.forEach(link => window.open(link, '_blank'));
}

function downloadFile(filePath) {
    if (!filePath) return;
    window.open(filePath, '_blank');
}

function openCertModal(pdfUrl) {
    const modal = document.getElementById('cert-modal');
    const iframe = document.getElementById('cert-iframe');
    iframe.src = pdfUrl;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modal.querySelector('div').classList.add('scale-100');
        modal.querySelector('div').classList.remove('scale-95');
    }, 10);
    document.body.style.overflow = "hidden";
}

function closeCertModal() {
    const modal = document.getElementById('cert-modal');
    modal.classList.remove('opacity-100');
    modal.querySelector('div').classList.remove('scale-100');
    modal.querySelector('div').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('cert-iframe').src = "";
    }, 300);
    document.body.style.overflow = "auto";
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
            <div class="summary-card shadow-sm">
                <p class="font-bold text-sm text-peach-600">${p.title}</p>
                <p class="text-[10px] opacity-60">${p.shortDesc}</p>
            </div>
        `).join('');

    // Sertifikalar (en üstteki 4)
    document.getElementById('home-cert-feed').innerHTML = data.certs
        .slice(0, 4)
        .map(c => `
            <div class="summary-card interactive-card shadow-sm" onclick="openCertModal('${c.pdf}')">
                <p class="font-bold text-sm text-peach-600">${c.name}</p>
                <p class="text-[10px] font-bold uppercase opacity-60">${c.issuer}</p>
                <p class="text-[9px] opacity-50 mt-1 italic">${c.desc}</p>
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
            <div class="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-peach-100 dark:border-zinc-800 shadow-xl">
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
            <div class="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-peach-100 dark:border-zinc-800 shadow-sm flex flex-col justify-between interactive-card" onclick="openCertModal('${c.pdf}')">
                <div>
                    <p class="font-bold text-sm leading-tight dark:text-white">${c.name}</p>
                    <p class="text-[10px] text-peach-500 font-bold mt-2 uppercase">${c.issuer}</p>
                    <p class="text-[11px] opacity-70 mt-3 leading-relaxed">${c.desc}</p>
                </div>
                <button onclick="event.stopPropagation(); downloadFile('${c.pdf}')" class="mt-4 inline-block text-[9px] font-black bg-peach-50 dark:bg-peach-900/30 text-peach-600 px-4 py-2 rounded-lg text-center hover:bg-peach-500 transition">
                    ${data.btns.download}
                </button>
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
    const cvFile = PORTFOLIO_DATA[currentLang].cvFile;
    window.open(cvFile, '_blank');
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