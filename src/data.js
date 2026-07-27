export const data = {
  tr: {
    profile: {
      name: "Eren Yeşildağ",
      title: "Product Engineer",
      tagline:
        "Agent'lar ve otomasyonlar tasarlıyor, geliştiriyorum. Yeni tekolojileri araştırmayı ve öğrenmeyi ve ürün hedefli çalışmayı seviyorum.",
      bio: `Ben Sabri Eren Yeşildağ. Yeni teknolojilere meraklı ve öğrenmeyi seven bir yazılım geliştiriciyim.
        Otomasyon ve AI odaklı çözümler üretmeye odaklanıyorum. Yeni araçları hızlıca
        öğrenip prototipe dönüştürmeyi seviyorum.`,
      location: "Türkiye",
      email: "sabrierenyesildag@gmail.com",
      github: "https://github.com/erenyesildev",
      linkedin: "https://linkedin.com/in/erenyesildag",
      resumeFile: "/cv.pdf",
      avatarInitials: "EY",
    },
    skills: [
      "ASP.Net core",
      "Entity Framework",
      "LLM Agent Mimarisi",
      "Python",
      "Java",
      "React",
      "REST API Tasarımı",
      "Docker",
      "Git / GitHub",
    ],
    projects: [
      {
        title: "FortiGate Alert IP Enricher",
        description:
          "FortiGate güvenlik duvarından gelen alert e-postalarını IMAP üzerinden otomatik okuyan, e-posta içeriğinden saldırgan IP adreslerini ayrıştırıp VirusTotal ve AbuseIPDB tehdit istihbaratı servisleri üzerinden sorgulayan bir Python güvenlik otomasyon aracı. Riskli IP'ler tanımlı eşiklere göre otomatik blocklist'e eklendi; API çağrılarında üstel geri çekilmeli (exponential backoff) yeniden deneme mekanizmasıyla hata toleransı sağlandı. pytest ile birim/uçtan uca testler ve GitHub Actions ile lint+test CI pipeline'ı kuruldu.",
        tags: ["Python", "IMAP", "VirusTotal API", "AbuseIPDB API", "pytest", "GitHub Actions"],
        link: "https://github.com/erenyesildev/fortigate-alert-ip-enricher",
      },
      {
        title: "Dago CRM — Enterprise B2B SaaS CRM Platformu",
        description:
          "Clean Architecture prensipleri ile CQRS ve Mediator desenleri üzerine kurulu, ölçeklenebilir ve çok kiracılı (multi-tenant) bir SaaS CRM platformu. Backend'de .NET 8 ve EF Core Global Query Filters ile güvenli veri izolasyonu sağlanırken, frontend'de React, TypeScript, TanStack Query ve Zustand ile performans odaklı modern bir arayüz kuruldu. SignalR ile gerçek zamanlı iletişim, Identity/JWT/RBAC ile kurumsal düzeyde güvenlik uygulandı.",
        tags: [".NET 8", "React", "TypeScript", "PostgreSQL", "SignalR", "CQRS"],
        link: "https://github.com/erenyesildev/dago-crm",
      },
      {
        title: "Multiplayer Kelime Oyunu",
        description:
          "İki oyunculu, 15x15 tahtada oynanan, Türkçe kelimelere dayalı gerçek zamanlı bir mobil kelime oyunu. Oyuncular sırayla harf yerleştirerek anlamlı kelimeler oluşturur, ödül toplar ve mayınlardan kaçınır; her hamle SignalR ile anlık olarak diğer oyuncuya iletilir. Backend servisi ve veritabanı bulut sunucusunda production ortamına taşınarak Flutter uygulamasıyla entegre edildi.",
        tags: ["Flutter", "Dart", "ASP.NET Core", "SignalR", "PostgreSQL", "JWT"],
        link: "https://github.com/erenyesildev/multiplayer-kelime-oyunu",
      },
      {
        title: "Akademik Makale Anonimleştirme ve Değerlendirme Sistemi",
        description:
          "Akademik dergi makalelerinin kör hakemlik sürecine uygun şekilde otomatik olarak anonimleştirilmesini ve ardından güvenli biçimde geri yüklenmesini sağlayan istemci-sunucu mimarili bir sistem. .NET Core tabanlı bir yönetim arayüzünü Python FastAPI tabanlı bir mikroservis mimarisiyle bir araya getiriyor.",
        tags: ["ASP.NET Core MVC", "Python FastAPI", "spaCy", "PyMuPDF", "PostgreSQL", "AES"],
        link: "https://github.com/erenyesildev/akademik-makale-anonimlestirme",
      },
    ],
    experience: [
      {
        role: "BT Stajyeri",
        company: "Yıldız Entegre",
        period: "Temmuz 2026 — Günümüz",
        description:
          "Siber Güvenlik alanındaki mevcut süreçler için otomasyon ve izleme sistemleri üzerine projeler yapıyorum.",
      },
      {
        role: "Yazılım Mühendisi Stajyeri",
        company: "Genetek",
        period: "Temmuz 2025 — Ağustos 2025",
        description:
          "GenWise ürününe yönelik backend ve frontend geliştirmelerinde aktif görev aldım.",
      },
    ],
    education: [
      {
        school: "Kocaeli Üniversitesi",
        degree: "Bilgisayar Mühendisliği (Lisans)",
        period: "2022 — 2026",
      },
    ],
  },
  en: {
    profile: {
      name: "Eren Yeşildağ",
      title: "Product Engineer",
      tagline:
        "Designing and developing agents and automations. I love exploring new technologies and working towards product-oriented goals.",
      bio: `I'm Sabri Eren Yeşildağ, a software developer passionate about learning and exploring new technologies.
        I focus on creating automation and AI-driven solutions. I enjoy rapidly learning new tools
        and transforming them into practical prototypes.`,
      location: "Turkey",
      email: "sabrierenyesildag@gmail.com",
      github: "https://github.com/erenyesildev",
      linkedin: "https://linkedin.com/in/erenyesildag",
      resumeFile: "/cv.pdf",
      avatarInitials: "EY",
    },
    skills: [
      "ASP.Net core",
      "Entity Framework",
      "LLM Agent Architecture",
      "Python",
      "Java",
      "React",
      "REST API Design",
      "Docker",
      "Git / GitHub",
    ],
    projects: [
      {
        title: "FortiGate Alert IP Enricher",
        description:
          "A Python security automation tool that automatically reads FortiGate firewall alert emails via IMAP, extracts attacker IP addresses, and queries them through VirusTotal and AbuseIPDB threat intelligence services. Risky IPs are automatically added to blocklists based on predefined thresholds; fault tolerance is ensured using an exponential backoff retry mechanism for API calls. Unit/E2E tests were written with pytest, and a lint+test CI pipeline was established via GitHub Actions.",
        tags: ["Python", "IMAP", "VirusTotal API", "AbuseIPDB API", "pytest", "GitHub Actions"],
        link: "https://github.com/erenyesildev/fortigate-alert-ip-enricher",
      },
      {
        title: "Dago CRM — Enterprise B2B SaaS CRM Platform",
        description:
          "A scalable and multi-tenant SaaS CRM platform built on Clean Architecture principles, utilizing CQRS and Mediator patterns. The backend uses .NET 8 and EF Core Global Query Filters for secure data isolation, while the frontend provides a performance-oriented modern interface with React, TypeScript, TanStack Query, and Zustand. Real-time communication is handled by SignalR, and enterprise-level security is enforced via Identity/JWT/RBAC.",
        tags: [".NET 8", "React", "TypeScript", "PostgreSQL", "SignalR", "CQRS"],
        link: "https://github.com/erenyesildev/dago-crm",
      },
      {
        title: "Multiplayer Word Game",
        description:
          "A two-player, real-time mobile word game played on a 15x15 board based on Turkish words. Players take turns placing letters to form meaningful words, collect rewards, and avoid mines; every move is instantly transmitted to the other player via SignalR. The backend service and database were deployed to a cloud production environment and integrated with a Flutter app.",
        tags: ["Flutter", "Dart", "ASP.NET Core", "SignalR", "PostgreSQL", "JWT"],
        link: "https://github.com/erenyesildev/multiplayer-kelime-oyunu",
      },
      {
        title: "Academic Article Anonymization & Evaluation System",
        description:
          "A client-server architecture system that automatically anonymizes academic journal articles in accordance with blind peer-review processes, and securely restores them afterward. It combines an ASP.NET Core MVC management interface with a Python FastAPI microservice architecture.",
        tags: ["ASP.NET Core MVC", "Python FastAPI", "spaCy", "PyMuPDF", "PostgreSQL", "AES"],
        link: "https://github.com/erenyesildev/akademik-makale-anonimlestirme",
      },
    ],
    experience: [
      {
        role: "IT Intern",
        company: "Yıldız Entegre",
        period: "July 2026 — Present",
        description:
          "Working on projects related to automation and monitoring systems for current processes in the Cybersecurity domain.",
      },
      {
        role: "Software Engineer Intern",
        company: "Genetek",
        period: "July 2025 — August 2025",
        description:
          "Took an active role in backend and frontend development for the GenWise product.",
      },
    ],
    education: [
      {
        school: "Kocaeli University",
        degree: "Computer Engineering (Bachelor's)",
        period: "2022 — 2026",
      },
    ],
  },
};