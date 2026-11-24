/**
 * i18n — IT / EN / AR
 * Every element with data-i18n="section.key" is translated.
 * Falls back to English if a key is missing in the chosen language.
 */
const translations = {
  "it": {
    "title": "Aimen Kamal Eddine Benzaoui | MerrySignal Studio & Automation Engineering",
    "nav": {
      "home": "Home",
      "about": "Chi Sono",
      "skills": "Competenze",
      "projects": "Progetti",
      "experience": "Esperienza",
      "contact": "Contatti",
      "services": "Servizi",
      "objective": "Obiettivo"
    },
    "hero": {
      "name": "AIMEN KAMAL EDDINE",
      "surname": "BENZAOUI",
      "role": "Studente Magistrale in Ingegneria dell'Automazione",
      "founder": "Fondatore di MerrySignal Studio",
      "intro": "Fondatore di MerrySignal Studio & Specialista in Cybersecurity ICS/OT.<br>Unendo le realtà hardware e la difesa digitale attraverso esperienze professionali.<br>Basato a Catania, Italia.<br><em>Italiano • English • العربية</em>",
      "download_cv": "Scarica CV",
      "contact": "Contattami",
      "explore_demo": "Esplora la Demo del Lab ICS"
    },
    "about": {
      "title": "Hardware Realities & Cyber Defense",
      "desc": "Cybersecurity industriale basata su ingegneria elettrica pratica, sicurezza operativa ed esperienza sul campo.",
      "p1": "Laureato in <strong>Ingegneria Elettrica ed Elettronica</strong> presso l'<strong>Istituto di Ingegneria Elettrica ed Elettronica (IGEE)</strong> dell'<strong>Università M'Hamed Bougara di Boumerdès (UMBB)</strong>, con un'esperienza pratica presso gli <strong>impianti di produzione di petrolio e gas di Sonatrach (Gassi Touil)</strong>. Attualmente studente di Laurea Magistrale in <strong>Automation Engineering and Control of Complex Systems</strong> presso l'<strong>Università di Catania</strong>.",
      "p2": "Certificato dalla <strong>U.S. Cybersecurity and Infrastructure Security Agency (CISA/INL)</strong> in cybersecurity ICS e diplomato al corso <strong>CS50 Cybersecurity dell'Università di Harvard</strong>. Applico principi pratici di ingegneria e architetture di rilevamento degli attacchi containerizzate (Docker, Conpot, Loki, Grafana) per proteggere le infrastrutture critiche e garantire la resilienza operativa industriale.",
      "p3": "A differenza della sicurezza IT aziendale tradizionale, l'Operational Technology (OT) richiede una profonda comprensione delle conseguenze fisiche: stress delle apparecchiature, costi di fermo impianto, dinamiche di distribuzione elettrica e affidabilità dei loop di controllo. La mia missione è costruire sistemi di difesa che rispettino la fisica del mondo reale.",
      "stat1": "Accreditamenti da U.S. CISA e Idaho National Lab",
      "stat2": "Esperienza sul campo nella manutenzione di impianti industriali Oil & Gas",
      "stat3": "Diplomato in Cybersecurity con il Prof. David J. Malan",
      "stat4": "Laurea in Ingegneria Elettrica ed Elettronica"
    },
    "contact": {
      "title": "Inizia una <span class='highlight'>Connessione</span>",
      "desc": "Disponibile per ruoli ingegneristici full-time, consulenze di ricerca sulla sicurezza e richieste tecniche.",
      "email": "Email Diretta",
      "phone": "Telefono / WhatsApp",
      "location": "Sede",
      "location_value": "Catania, Italia",
      "social": "Profili Professionali e Repository"
    },
    "skills": {
      "title": "Competenze <span class='highlight'>Multidisciplinari</span>",
      "desc": "Sinergia tra architettura di controllo industriale, telemetria dei protocolli, auditing di rete e scripting per l'automazione.",
      "c1": {
        "title": "ICS/OT e Automazione Industriale",
        "sub": "NUCLEO DELL'OPERATIONAL TECHNOLOGY"
      },
      "c2": {
        "title": "Difesa Cyber e Telemetria",
        "sub": "OPERAZIONI DI SICUREZZA E AUDITING"
      },
      "c3": {
        "title": "Sistemi, DevOps e Scripting",
        "sub": "INFRASTRUTTURA E PIATTAFORMA"
      },
      "c4": {
        "title": "Programmazione e Strumenti",
        "sub": "SOFTWARE E UTILITY DI AUTOMAZIONE"
      },
      "langs": "Lingue Parlate:",
      "l1": "Arabo",
      "l1lvl": "(Madrelingua)",
      "l2": "Inglese",
      "l2lvl": "(Livello tecnico / professionale)",
      "l3": "Francese",
      "l3lvl": "(Base)"
    },
    "projects": {
      "title": "Progetti <span class='highlight'>e Implementazioni in Evidenza</span>",
      "desc": "Laboratori pratici di difesa OT containerizzati, strumenti di rete personalizzati e prototipi multipiattaforma.",
      "flag": "LABORATORIO DI SICUREZZA OT PRINCIPALE",
      "p1": {
        "title": "Fake ICS Factory — Simulazione di Attacchi e Laboratorio di Rilevamento Minacce in Tempo Reale",
        "desc": "Ho realizzato un testbed di simulazione industriale containerizzato che utilizza un honeypot Conpot per emulare un PLC industriale Modbus TCP. Ho configurato una pipeline di telemetria completa (Promtail + Loki + Grafana) per catturare, indicizzare e visualizzare in tempo reale le attività ostili (ricognizione delle porte con Nmap, scritture non autorizzate sui registri Modbus e flood DoS) senza mettere a rischio apparecchiature fisiche.",
        "github": "Vedi il Repository GitHub",
        "yt": "Guarda la Playlist Demo su YouTube"
      },
      "matrix": "PROFILO DI SIMULAZIONE ATTACCHI DEL TESTBED",
      "th1": {
        "title": "01. Ricognizione delle Porte con Nmap",
        "desc": "L'attaccante usa nmap -sV --script modbus-discover per mappare i registri esposti. Conpot intercetta e registra i pattern di fingerprinting."
      },
      "th2": {
        "title": "02. Modifica Non Autorizzata dei Registri",
        "desc": "Comandi Modbus con Function Code 06 (Write Single Register) iniettati per alterare i setpoint; segnalati immediatamente in Loki."
      },
      "th3": {
        "title": "03. Difesa da DoS e Syn Flood",
        "desc": "La pipeline di telemetria monitora le soglie di saturazione dei pacchetti sulla porta 502, verificando la continuità della raccolta dati."
      },
      "p2": {
        "title": "Suite di Sicurezza di Rete e Automazione in Python",
        "desc": "Ho sviluppato strumenti Python personalizzati basati su socket e librerie di packet crafting per audit automatico delle porte, diagnostica di rete e analisi del traffico, abbinati a interfacce grafiche leggere (CustomTkinter)."
      },
      "p3": {
        "title": "Prototipazione di Applicazioni Mobile (Flutter)",
        "desc": "Ho sviluppato prototipi mobile multipiattaforma e flussi UI responsive durante il programma tecnico ISCODE presso l'INELectronics Student Club, con attenzione a pattern software puliti, stato asincrono e widget modulari."
      }
    },
    "exp": {
      "title": "Esperienza sul Campo e <span class='highlight'>Accreditamenti</span>",
      "desc": "Immersione industriale sul campo abbinata ad accreditamenti di cybersecurity verificati a livello internazionale.",
      "trackA": "Esperienza Tecnica e sul Campo",
      "trackB": "Accreditamenti Verificati",
      "t1": {
        "meta": "Settembre 2025",
        "title": "Tirocinante in Ingegneria Elettrica e Manutenzione",
        "b1": "Ho completato un periodo di immersione nella manutenzione industriale all'interno di impianti di produzione di petrolio e gas, osservando operazioni continue in cui sicurezza e disponibilità sono vitali.",
        "b2": "Ho analizzato l'impatto operativo fisico dei fermi impianto, studiando distribuzione di potenza elettrica, sistemi strumentati di sicurezza e installazioni di controllo motori.",
        "b3": "Ho esaminato i flussi di manutenzione sul campo e l'integrità dei circuiti di controllo che governano processi fisici critici."
      },
      "t2": {
        "meta": "2023 – Presente",
        "title": "Mentore e Co-Istruttore di Workshop Tecnici",
        "b1": "Ho co-organizzato e tenuto workshop pratici per studenti di ingegneria su uso avanzato della riga di comando Linux, workflow Git/GitHub e fondamenti di containerizzazione con Docker.",
        "b2": "Ho fatto da mentore a studenti junior sui principi del networking, sui fondamenti dello stack TCP/IP e sull'analisi del flusso dei pacchetti."
      },
      "c1": {
        "name": "Serie di Cybersecurity per Sistemi di Controllo Industriale (ICS)"
      },
      "c2": {
        "p": "Docente: Prof. David J. Malan. Fondamenti completi di autenticazione, crittografia, difesa informatica e valutazione delle vulnerabilità software."
      },
      "c3": {
        "name": "Specializzazioni in Reti e Cybersecurity"
      },
      "c4": {
        "issuer": "Certificazioni Tecniche Pratiche",
        "name": "Ricognizione Pratica e Container"
      }
    },
    "services": {
      "title": "Capacità <span class='highlight'>Specialistiche</span>",
      "desc": "Servizi tecnici su misura che spaziano da emulazione delle minacce, telemetria dei protocolli OT, ricognizione e mentoring.",
      "s1": {
        "title": "Simulazione di Minacce ICS/OT e Deploy di Honeypot",
        "desc": "Progettazione di honeypot containerizzati con Conpot per emulare Modbus e PLC industriali, catturando le tecniche degli attaccanti in tempo reale senza esporre l'infrastruttura di produzione.",
        "l1": "Emulazione PLC con Conpot",
        "l2": "Isolamento honeynet Modbus TCP",
        "l3": "Testbed di inganno degli attaccanti a rischio zero"
      },
      "ms": {
        "title": "MerrySignal Studio: Esperienze Digitali",
        "desc": "Soluzioni digitali di alto livello, esperienze web personalizzate e automazione creativa su misura per le aziende. Disponibile in inglese, italiano e arabo.",
        "l1": "Esperienze Digitali Professionali",
        "l2": "Web Design e Sviluppo Personalizzati",
        "l3": "Soluzioni Multilingua (EN, IT, AR)"
      },
      "s2": {
        "title": "Telemetria dei Protocolli Industriali e Dashboard",
        "desc": "Progettazione di pipeline di osservabilità con Promtail, Grafana e Loki per aggregare i log grezzi dei protocolli industriali in dashboard di sicurezza operativa in tempo reale.",
        "l1": "Parsing del traffico Modbus sulla porta 502",
        "l2": "Indicizzazione dei log con Grafana Loki",
        "l3": "Regole di allerta personalizzate per la manomissione dei registri"
      },
      "s3": {
        "title": "Ricognizione di Rete e Automazione della Sicurezza",
        "desc": "Sviluppo di script Python specializzati, routine Nmap NSE e filtri Wireshark per verificare sistematicamente i segmenti di rete, individuare porte di controllo aperte e segnalare nodi non autorizzati.",
        "l1": "Automazione con socket Python e GUI",
        "l2": "Ispezione approfondita dei pacchetti con Wireshark",
        "l3": "Scansioni automatiche dell'inventario IP/porte"
      },
      "s4": {
        "title": "Mentoring Tecnico e Formazione sugli Strumenti",
        "desc": "Workshop formativi pratici per gruppi di ingegneri, incentrati su amministrazione Linux, containerizzazione Docker, workflow Git e basi di cybersecurity.",
        "l1": "Workshop sulla riga di comando Linux",
        "l2": "Fondamenti di containerizzazione Docker",
        "l3": "Esercitazioni pratiche di laboratorio di networking"
      }
    },
    "career": {
      "tag": "// OBIETTIVO PROFESSIONALE & RUOLI TARGET",
      "statement": "\"Alla ricerca di una posizione ingegneristica come <span class=\"target-role\">Ingegnere di Cybersecurity ICS/OT</span>, <span class=\"target-role\">Analista SOC OT</span>, o <span class=\"target-role\">Specialista in Sicurezza delle Reti Industriali</span>, applicando un background multidisciplinare in ingegneria dell'automazione e difesa dalle minacce informatiche per proteggere le infrastrutture critiche e le reti di automazione industriale.\""
    },
    "form": {
      "name": "Nome Completo *",
      "email": "Indirizzo Email *",
      "subject": "Oggetto / Motivo",
      "message": "Messaggio *",
      "submit": "Invia Messaggio Sicuro",
      "ph_name": "es. Mario Rossi / Recruiter",
      "ph_email": "es. m.rossi@azienda.com",
      "ph_subject": "es. Posizione ICS Cybersecurity / Consulenza Tecnica",
      "ph_message": "Descrivi la tua richiesta operativa, i requisiti del progetto o il ruolo..."
    },
    "footer": {
      "copy": "&copy; 2025 Aimen Kamal Eddine Benzaoui. Tutti i diritti riservati.",
      "sub": "Portfolio di Cybersecurity ICS/OT e Ingegneria Elettrica",
      "top": "Torna Su"
    }
  },
  "en": {
    "title": "Aimen Kamal Eddine Benzaoui | MerrySignal Studio & Automation Engineering",
    "nav": {
      "home": "Home",
      "about": "About",
      "skills": "Skills",
      "projects": "Projects",
      "experience": "Experience",
      "contact": "Contact",
      "services": "Services",
      "objective": "Objective"
    },
    "hero": {
      "name": "AIMEN KAMAL EDDINE",
      "surname": "BENZAOUI",
      "role": "M.Sc. Automation Engineering Student",
      "founder": "MerrySignal Studio Founder",
      "intro": "MerrySignal Studio Founder & ICS/OT Cybersecurity Specialist.<br>Architecting Resilient Automation & Hardening Critical OT Infrastructure.<br>Based in Catania, Italy.<br><em>Italiano • English • العربية</em>",
      "download_cv": "Download CV",
      "contact": "Contact Me",
      "explore_demo": "Explore ICS Lab Demo"
    },
    "about": {
      "title": "Hardware Realities & Cyber Defense",
      "desc": "Grounding industrial cybersecurity in hands-on electrical engineering, operational safety, and field experience.",
      "p1": "Graduate in <strong>Electrical & Electronics Engineering</strong> from the <strong>Institute of Electrical and Electronics Engineering (IGEE)</strong> of <strong>M'Hamed Bougara University of Boumerdès (UMBB)</strong>, completed by practical immersion at <strong>Sonatrach's oil and gas production facilities (Gassi Touil)</strong>. Currently an M.Sc. student in <strong>Automation Engineering and Control of Complex Systems</strong> at the <strong>University of Catania</strong>.",
      "p2": "Certified by the <strong>U.S. Cybersecurity and Infrastructure Security Agency (CISA/INL)</strong> in ICS cybersecurity and a graduate of <strong>Harvard University's CS50 Cybersecurity</strong>. I leverage hands-on engineering principles and containerized attack-detection architectures (Docker, Conpot, Loki, Grafana) to safeguard critical infrastructure and guarantee continuous industrial operational resilience.",
      "p3": "Unlike traditional enterprise IT security, Operational Technology (OT) demands a deep understanding of physical consequences: equipment stress, downtime costs, electrical distribution dynamics, and control loop reliability. My mission is building defense systems that respect real-world physics.",
      "stat1": "Accreditations from U.S. CISA &amp; Idaho National Lab",
      "stat2": "Industrial O&amp;G facility field maintenance immersion",
      "stat3": "Cybersecurity graduate by Prof. David J. Malan",
      "stat4": "Electrical &amp; Electronics Engineering degree"
    },
    "contact": {
      "title": "Initiate <span class=\"highlight\">Connection</span>",
      "desc": "Available for full-time engineering roles, security research consultations, and technical inquiries.",
      "email": "Direct Email",
      "phone": "Phone / WhatsApp",
      "location": "Base Location",
      "location_value": "Catania, Italy",
      "social": "Professional Profiles &amp; Repositories"
    },
    "skills": {
      "title": "Multidisciplinary <span class=\"highlight\">Competencies</span>",
      "desc": "Synergizing industrial control architecture, deep protocol telemetry, network auditing, and automation scripting.",
      "c1": {
        "title": "ICS/OT &amp; Industrial Automation",
        "sub": "OPERATIONAL TECHNOLOGY CORE"
      },
      "c2": {
        "title": "Cyber Defense &amp; Telemetry",
        "sub": "SECURITY OPERATIONS &amp; AUDITING"
      },
      "c3": {
        "title": "Systems, DevOps &amp; Scripting",
        "sub": "INFRASTRUCTURE &amp; PLATFORM"
      },
      "c4": {
        "title": "Programming &amp; Tooling",
        "sub": "SOFTWARE &amp; AUTOMATION UTILITIES"
      },
      "langs": "Spoken Languages:",
      "l1": "Arabic",
      "l1lvl": "(Native)",
      "l2": "English",
      "l2lvl": "(Technical / Professional Working)",
      "l3": "French",
      "l3lvl": "(Basic)"
    },
    "projects": {
      "title": "Featured <span class=\"highlight\">Projects &amp; Deployments</span>",
      "desc": "Hands-on containerized OT defense labs, custom network tooling, and cross-platform prototypes.",
      "flag": "FLAGSHIP OT SECURITY LAB",
      "p1": {
        "title": "Fake ICS Factory — Attack Simulation &amp; Real-Time Threat Detection Lab",
        "desc": "Built a containerized industrial simulation testbed deploying a Conpot honeypot to emulate a Modbus TCP industrial PLC. Configured a complete telemetry pipeline (Promtail + Loki + Grafana) to capture, index, and visualize live adversarial activities (Nmap port reconnaissance, unauthorized Modbus register writes, and DoS floods) without endangering physical operational equipment.",
        "github": "View GitHub Repository",
        "yt": "Watch YouTube Demo Playlist"
      },
      "matrix": "TESTBED ATTACK SIMULATION PROFILE",
      "th1": {
        "title": "01. Nmap Port Reconnaissance",
        "desc": "Adversary uses nmap -sV --script modbus-discover to map exposed registers. Conpot intercepts and logs fingerprinting patterns."
      },
      "th2": {
        "title": "02. Unauthorized Register Mutation",
        "desc": "Injected Modbus Function Code 06 (Write Single Register) commands attempting setpoint alteration; flagged instantly in Loki."
      },
      "th3": {
        "title": "03. DoS &amp; Syn Flood Defense",
        "desc": "Telemetry pipeline monitors packet saturation thresholds on port 502, validating zero downtime of telemetry collection."
      },
      "p2": {
        "title": "Python Network Security &amp; Automation Suite",
        "desc": "Developed custom Python tools utilizing sockets and packet crafting libraries for automated port auditing, network diagnostics, and traffic analysis, paired with lightweight graphical user interfaces (CustomTkinter)."
      },
      "p3": {
        "title": "Mobile Application Prototyping (Flutter)",
        "desc": "Developed cross-platform mobile prototypes and responsive UI workflows during the ISCODE technical program at INELectronics Student Club, focusing on clean software patterns, asynchronous state, and modular widgets."
      }
    },
    "exp": {
      "title": "Field Experience &amp; <span class=\"highlight\">Accreditations</span>",
      "desc": "On-site industrial immersion coupled with globally verified cybersecurity accreditations.",
      "trackA": "Field &amp; Technical Experience",
      "trackB": "Verified Accreditations",
      "t1": {
        "meta": "September 2025",
        "title": "Electrical &amp; Maintenance Engineering Intern",
        "b1": "Completed an on-site industrial maintenance immersion within oil and gas production facilities, observing continuous operations where safety and availability are vital.",
        "b2": "Analyzed the physical operational impact of equipment downtime, studying electrical power distribution, safety instrumented systems, and motor control installations.",
        "b3": "Examined field maintenance workflows and control circuit integrity governing mission-critical physical processes."
      },
      "t2": {
        "meta": "2023 – Present",
        "title": "Technical Workshop Mentor &amp; Co-Instructor",
        "b1": "Co-organized and delivered hands-on technical workshops teaching fellow engineering students Linux command-line mastery, Git/GitHub version control workflows, and Docker containerization fundamentals.",
        "b2": "Mentored junior students on core computer networking principles, TCP/IP stack fundamentals, and packet flow analysis."
      },
      "c1": {
        "name": "Industrial Control Systems (ICS) Cybersecurity Series"
      },
      "c2": {
        "p": "Instructor: Prof. David J. Malan. Comprehensive foundations of authentication, cryptography, cyber defense, and software vulnerability assessment."
      },
      "c3": {
        "name": "Network &amp; Cyber Specializations"
      },
      "c4": {
        "issuer": "Technical Practical Certifications",
        "name": "Hands-On Reconnaissance &amp; Containers"
      }
    },
    "services": {
      "title": "Specialized <span class=\"highlight\">Capabilities</span>",
      "desc": "Tailored technical services spanning threat emulation, OT protocol telemetry, reconnaissance, and mentorship.",
      "s1": {
        "title": "ICS/OT Threat Simulation &amp; Honeypot Deployment",
        "desc": "Designing containerized honeypots using Conpot to emulate Modbus and industrial PLCs, capturing live attacker techniques without exposing live production infrastructure.",
        "l1": "Conpot PLC emulation",
        "l2": "Modbus TCP honeynet isolation",
        "l3": "Zero-risk adversary deception testbeds"
      },
      "ms": {
        "title": "MerrySignal Studio: Digital Experiences",
        "desc": "High-end digital solutions, custom web experiences, and creative automation tailored for businesses. Available in English, Italian, and Arabic.",
        "l1": "Professional Digital Experiences",
        "l2": "Custom Web Design &amp; Development",
        "l3": "Multilingual Solutions (EN, IT, AR)"
      },
      "s2": {
        "title": "Industrial Protocol Telemetry &amp; Dashboarding",
        "desc": "Architecting observability pipelines with Promtail, Grafana, and Loki to aggregate raw industrial protocol logs into real-time operational security dashboards.",
        "l1": "Modbus Port 502 traffic parsing",
        "l2": "Grafana Loki log indexing",
        "l3": "Custom alert rules for register tampering"
      },
      "s3": {
        "title": "Network Reconnaissance &amp; Security Automation",
        "desc": "Authoring specialized Python scripts, Nmap NSE routines, and Wireshark filters to systematically audit network segments, identify open control ports, and flag rogue nodes.",
        "l1": "Python socket automation &amp; GUIs",
        "l2": "Wireshark deep packet inspection",
        "l3": "Automated IP/port inventory sweeps"
      },
      "s4": {
        "title": "Technical Mentorship &amp; Tooling Training",
        "desc": "Conducting practical training workshops for engineering cohorts, focusing on Linux sysadmin essentials, Docker containerization, Git workflows, and cybersecurity basics.",
        "l1": "Linux command-line mastery workshops",
        "l2": "Docker containerization fundamentals",
        "l3": "Hands-on networking laboratory drills"
      }
    },
    "career": {
      "tag": "// CAREER OBJECTIVE &amp; TARGET ROLES",
      "statement": "\"Seeking an engineering position as <span class='target-role'>ICS/OT Cybersecurity Engineer</span>, <span class='target-role'>OT SOC Analyst</span>, or <span class='target-role'>Industrial Network Security Specialist</span>, applying a multidisciplinary background in automation engineering and cyber threat defense to protect critical infrastructure and industrial automation networks.\""
    },
    "form": {
      "name": "Full Name *",
      "email": "Email Address *",
      "subject": "Subject / Purpose",
      "message": "Message *",
      "submit": "Transmit Secure Message",
      "ph_name": "e.g. John Doe / Engineering Recruiter",
      "ph_email": "e.g. j.doe@organization.com",
      "ph_subject": "e.g. ICS Cybersecurity Position / Technical Consultation",
      "ph_message": "Detail your operational inquiry, project requirements, or role specification..."
    },
    "footer": {
      "copy": "&copy; 2025 Aimen Kamal Eddine Benzaoui. All rights reserved.",
      "sub": "ICS/OT Cybersecurity &amp; Electrical Engineering Portfolio",
      "top": "Back to Top"
    }
  },
  "ar": {
    "title": "أيمن كمال الدين بن زاوي | ميريسيجال ستوديو وهندسة الأتمتة",
    "nav": {
      "home": "الرئيسية",
      "about": "من أنا",
      "skills": "المهارات",
      "projects": "المشاريع",
      "experience": "الخبرة",
      "contact": "اتصل بي",
      "services": "الخدمات",
      "objective": "الهدف"
    },
    "hero": {
      "name": "أيمن كمال الدين",
      "surname": "بن زاوي",
      "role": "طالب ماجستير في هندسة الأتمتة",
      "founder": "مؤسس MerrySignal Studio",
      "intro": "مؤسس MerrySignal Studio و متخصص في الأمن السيبراني للأنظمة الصناعية (ICS/OT).<br>أقوم بهندسة الأتمتة المرنة وتأمين البنية التحتية التشغيلية (OT).<br>مقيم في كاتانيا، إيطاليا.<br><em>Italiano • English • العربية</em>",
      "download_cv": "تحميل السيرة الذاتية",
      "contact": "تواصل معي",
      "explore_demo": "استكشف عرض مختبر ICS"
    },
    "about": {
      "title": "واقع الأجهزة والدفاع السيبراني",
      "desc": "تأسيس الأمن السيبراني الصناعي في الهندسة الكهربائية العملية، والسلامة التشغيلية، والخبرة الميدانية.",
      "p1": "خريج <strong>الهندسة الكهربائية والإلكترونية</strong> من <strong>معهد الهندسة الكهربائية والإلكترونية (IGEE)</strong> في <strong>جامعة امحمد بوقرة بومرداس (UMBB)</strong>، مع تدريب ميداني في <strong>منشآت إنتاج النفط والغاز التابعة لسوناطراك (قاسي الطويل)</strong>. حالياً طالب ماجستير في <strong>هندسة الأتمتة والتحكم في الأنظمة المعقدة</strong> بـ<strong>جامعة كاتانيا</strong>.",
      "p2": "حاصل على شهادات من <strong>وكالة الأمن السيبراني وأمن البنية التحتية الأمريكية (CISA/INL)</strong> في الأمن السيبراني للأنظمة الصناعية، وخريج مقرر <strong>CS50 للأمن السيبراني من جامعة هارفارد</strong>. أوظّف مبادئ الهندسة العملية وهياكل اكتشاف الهجمات القائمة على الحاويات (Docker, Conpot, Loki, Grafana) لحماية البنية التحتية الحيوية وضمان استمرارية العمل الصناعي.",
      "p3": "على عكس أمن المعلومات التقليدي للمؤسسات، تتطلب التكنولوجيا التشغيلية (OT) فهماً عميقاً للنتائج الفيزيائية: إجهاد المعدات، وتكاليف التوقف، وديناميكيات التوزيع الكهربائي، وموثوقية حلقات التحكم. مهمتي بناء أنظمة دفاع تحترم قوانين الفيزياء في العالم الحقيقي.",
      "stat1": "اعتمادات من CISA الأمريكية ومختبر أيداهو الوطني",
      "stat2": "تدريب ميداني على صيانة منشآت النفط والغاز الصناعية",
      "stat3": "خريج الأمن السيبراني مع البروفيسور ديفيد ج. مالان",
      "stat4": "شهادة في الهندسة الكهربائية والإلكترونية"
    },
    "contact": {
      "title": "ابدأ <span class='highlight'>التواصل</span>",
      "desc": "متاح للأدوار الهندسية بدوام كامل، استشارات البحث الأمني، والاستفسارات التقنية.",
      "email": "البريد الإلكتروني المباشر",
      "phone": "الهاتف / واتساب",
      "location": "الموقع",
      "location_value": "كاتانيا، إيطاليا",
      "social": "الملفات المهنية والمستودعات"
    },
    "skills": {
      "title": "كفاءات <span class='highlight'>متعددة التخصصات</span>",
      "desc": "دمج هندسة التحكم الصناعي وتحليل بيانات البروتوكولات وتدقيق الشبكات وبرمجة الأتمتة.",
      "c1": {
        "title": "أنظمة ICS/OT والأتمتة الصناعية",
        "sub": "جوهر التكنولوجيا التشغيلية"
      },
      "c2": {
        "title": "الدفاع السيبراني والقياس عن بُعد",
        "sub": "العمليات الأمنية والتدقيق"
      },
      "c3": {
        "title": "الأنظمة وDevOps والبرمجة النصية",
        "sub": "البنية التحتية والمنصات"
      },
      "c4": {
        "title": "البرمجة والأدوات",
        "sub": "برمجيات وأدوات الأتمتة"
      },
      "langs": "اللغات:",
      "l1": "العربية",
      "l1lvl": "(اللغة الأم)",
      "l2": "الإنجليزية",
      "l2lvl": "(مستوى تقني / مهني)",
      "l3": "الفرنسية",
      "l3lvl": "(مستوى أساسي)"
    },
    "projects": {
      "title": "مشاريع <span class='highlight'>وتطبيقات مميزة</span>",
      "desc": "مختبرات دفاع OT عملية قائمة على الحاويات، وأدوات شبكات مخصصة، ونماذج أولية متعددة المنصات.",
      "flag": "مختبر أمن OT الرئيسي",
      "p1": {
        "title": "Fake ICS Factory — مختبر محاكاة الهجمات واكتشاف التهديدات في الوقت الفعلي",
        "desc": "بنيت بيئة اختبار صناعية قائمة على الحاويات تستخدم فخ Conpot لمحاكاة وحدة PLC صناعية بروتوكول Modbus TCP. وأعددت خط قياس متكاملاً (Promtail + Loki + Grafana) لالتقاط وفهرسة وعرض النشاط العدائي الحي (استطلاع المنافذ بـ Nmap، والكتابة غير المصرح بها في سجلات Modbus، وهجمات DoS) دون تعريض أي معدات فعلية للخطر.",
        "github": "عرض مستودع GitHub",
        "yt": "شاهد قائمة العروض على YouTube"
      },
      "matrix": "ملف محاكاة الهجمات في بيئة الاختبار",
      "th1": {
        "title": "01. استطلاع المنافذ باستخدام Nmap",
        "desc": "يستخدم المهاجم nmap -sV --script modbus-discover لرسم خريطة السجلات المكشوفة، ويقوم Conpot باعتراض أنماط البصمة وتسجيلها."
      },
      "th2": {
        "title": "02. التعديل غير المصرح به للسجلات",
        "desc": "حقن أوامر Modbus بكود الوظيفة 06 (Write Single Register) لمحاولة تغيير القيم المستهدفة، ويتم رصدها فوراً في Loki."
      },
      "th3": {
        "title": "03. الدفاع ضد DoS وSyn Flood",
        "desc": "يراقب خط القياس عتبات تشبع الحزم على المنفذ 502، مما يؤكد استمرار جمع البيانات دون انقطاع."
      },
      "p2": {
        "title": "حزمة أمن الشبكات والأتمتة بلغة Python",
        "desc": "طوّرت أدوات Python مخصصة تعتمد على المقابس (sockets) ومكتبات صياغة الحزم لتدقيق المنافذ آلياً وتشخيص الشبكات وتحليل حركة المرور، مع واجهات رسومية خفيفة (CustomTkinter)."
      },
      "p3": {
        "title": "تصميم نماذج أولية لتطبيقات الجوال (Flutter)",
        "desc": "طوّرت نماذج أولية لتطبيقات جوال متعددة المنصات وتدفقات واجهات متجاوبة خلال برنامج ISCODE التقني في نادي INELectronics الطلابي، مع التركيز على أنماط برمجية نظيفة والحالة غير المتزامنة والعناصر المعيارية."
      }
    },
    "exp": {
      "title": "الخبرة الميدانية و<span class='highlight'>الاعتمادات</span>",
      "desc": "انغماس صناعي ميداني إلى جانب اعتمادات أمن سيبراني موثّقة دولياً.",
      "trackA": "الخبرة الميدانية والتقنية",
      "trackB": "الاعتمادات الموثّقة",
      "t1": {
        "meta": "سبتمبر 2025",
        "title": "متدرب في الهندسة الكهربائية والصيانة",
        "b1": "أكملت فترة تدريب ميداني في صيانة منشآت إنتاج النفط والغاز، مع ملاحظة عمليات مستمرة تكون فيها السلامة والجاهزية أمراً حيوياً.",
        "b2": "حلّلت الأثر التشغيلي الفيزيائي لتوقف المعدات، ودرست توزيع القدرة الكهربائية وأنظمة السلامة المزودة بأجهزة القياس وتركيبات التحكم في المحركات.",
        "b3": "فحصت سير أعمال الصيانة الميدانية وسلامة دوائر التحكم التي تدير العمليات الفيزيائية الحرجة."
      },
      "t2": {
        "meta": "2023 – الحاضر",
        "title": "مرشد ومدرّب مشارك في الورش التقنية",
        "b1": "شاركت في تنظيم وتقديم ورش عملية لطلاب الهندسة حول إتقان سطر أوامر Linux وإدارة الإصدارات عبر Git/GitHub وأساسيات الحاويات باستخدام Docker.",
        "b2": "أرشدت طلاباً مبتدئين في مبادئ شبكات الحاسوب وأساسيات حزمة TCP/IP وتحليل تدفق الحزم."
      },
      "c1": {
        "name": "سلسلة الأمن السيبراني لأنظمة التحكم الصناعي (ICS)"
      },
      "c2": {
        "p": "المحاضر: البروفيسور ديفيد ج. مالان. أسس شاملة في المصادقة والتشفير والدفاع السيبراني وتقييم ثغرات البرمجيات."
      },
      "c3": {
        "name": "تخصصات في الشبكات والأمن السيبراني"
      },
      "c4": {
        "issuer": "شهادات تقنية تطبيقية",
        "name": "الاستطلاع العملي والحاويات"
      }
    },
    "services": {
      "title": "قدرات <span class='highlight'>متخصصة</span>",
      "desc": "خدمات تقنية مخصصة تشمل محاكاة التهديدات وقياس بيانات بروتوكولات OT والاستطلاع والإرشاد.",
      "s1": {
        "title": "محاكاة تهديدات ICS/OT ونشر الفخاخ (Honeypot)",
        "desc": "تصميم فخاخ قائمة على الحاويات باستخدام Conpot لمحاكاة Modbus ووحدات PLC الصناعية، والتقاط تقنيات المهاجمين مباشرة دون تعريض بنية الإنتاج الفعلية.",
        "l1": "محاكاة PLC باستخدام Conpot",
        "l2": "عزل شبكة الفخاخ Modbus TCP",
        "l3": "بيئات خداع المهاجمين دون أي مخاطر"
      },
      "ms": {
        "title": "MerrySignal Studio: تجارب رقمية",
        "desc": "حلول رقمية راقية وتجارب ويب مخصصة وأتمتة إبداعية مصممة للشركات. متاحة بالإنجليزية والإيطالية والعربية.",
        "l1": "تجارب رقمية احترافية",
        "l2": "تصميم وتطوير مواقع مخصصة",
        "l3": "حلول متعددة اللغات (EN, IT, AR)"
      },
      "s2": {
        "title": "قياس بروتوكولات الصناعة ولوحات المعلومات",
        "desc": "بناء خطوط مراقبة باستخدام Promtail وGrafana وLoki لتجميع سجلات البروتوكولات الصناعية الخام في لوحات أمنية تشغيلية فورية.",
        "l1": "تحليل حركة Modbus على المنفذ 502",
        "l2": "فهرسة السجلات باستخدام Grafana Loki",
        "l3": "قواعد تنبيه مخصصة للتلاعب بالسجلات"
      },
      "s3": {
        "title": "استطلاع الشبكات وأتمتة الأمن",
        "desc": "كتابة سكربتات Python متخصصة وروتينات Nmap NSE ومرشحات Wireshark لتدقيق مقاطع الشبكة بشكل منهجي وتحديد منافذ التحكم المفتوحة ورصد العقد غير المصرح بها.",
        "l1": "أتمتة Python بالمقابس وواجهات رسومية",
        "l2": "الفحص العميق للحزم باستخدام Wireshark",
        "l3": "مسح آلي لجرد عناوين IP والمنافذ"
      },
      "s4": {
        "title": "الإرشاد التقني والتدريب على الأدوات",
        "desc": "تنظيم ورش تدريبية عملية لمجموعات من المهندسين تركز على أساسيات إدارة Linux وحاويات Docker وإدارة الإصدارات عبر Git وأساسيات الأمن السيبراني.",
        "l1": "ورش إتقان سطر أوامر Linux",
        "l2": "أساسيات الحاويات باستخدام Docker",
        "l3": "تدريبات مخبرية عملية في الشبكات"
      }
    },
    "career": {
      "tag": "// الهدف المهني والأدوار المستهدفة",
      "statement": "\"أبحث عن منصب هندسي بصفة <span class='target-role'>مهندس أمن سيبراني ICS/OT</span> أو <span class='target-role'>محلل SOC لبيئات OT</span> أو <span class='target-role'>متخصص في أمن الشبكات الصناعية</span>، مستفيداً من خلفية متعددة التخصصات في هندسة الأتمتة والدفاع ضد التهديدات السيبرانية لحماية البنية التحتية الحيوية وشبكات الأتمتة الصناعية.\""
    },
    "form": {
      "name": "الاسم الكامل *",
      "email": "البريد الإلكتروني *",
      "subject": "الموضوع / الغرض",
      "message": "الرسالة *",
      "submit": "إرسال الرسالة بشكل آمن",
      "ph_name": "مثال: أحمد علي / مسؤول توظيف",
      "ph_email": "مثال: a.ali@company.com",
      "ph_subject": "مثال: وظيفة أمن سيبراني ICS / استشارة تقنية",
      "ph_message": "اشرح استفسارك التشغيلي أو متطلبات المشروع أو تفاصيل الوظيفة..."
    },
    "footer": {
      "copy": "&copy; 2025 أيمن كمال الدين بن زاوي. جميع الحقوق محفوظة.",
      "sub": "ملف أعمال الأمن السيبراني ICS/OT والهندسة الكهربائية",
      "top": "العودة للأعلى"
    }
  }
};

function lookup(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

function translatePage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.body.setAttribute('data-lang', lang);
  document.title = t.title;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    let value = lookup(t, key);
    if (value === null) {
      console.warn(`Missing translation [${lang}]: ${key}`);
      value = lookup(translations.en, key);
    }
    if (value === null) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = value;
    else el.innerHTML = value;
  });
}

function initLanguageSwitcher() {
  const langSwitch = document.getElementById('lang-switcher');
  if (!langSwitch) return;

  const saved = localStorage.getItem('lang');
  const savedLang = translations[saved] ? saved : 'it';
  langSwitch.value = savedLang;
  translatePage(savedLang);

  langSwitch.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    translatePage(lang);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
