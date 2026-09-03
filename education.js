function toggleMobileMenu() {
    document.body.classList.toggle('mobile-menu-open');
}

document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMobileMenu);
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            document.body.classList.remove('mobile-menu-open');
        }
    });
});

const icons = {
    university: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    medical: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="1" width="22" height="22" rx="2" ry="2"/><path d="M12 6v12M6 12h12" stroke-width="4"/></svg>`,
    navy: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2.5"/><path d="M12 6.5v14"/><path d="M6 10h12"/><path d="M4 15c0 4.5 3.5 7 8 7s8-2.5 8-7"/></svg>`,
    training: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13c0-4.5 4-7.5 10-7.5s10 3 10 7.5c0 2-1 3.5-3 3.5H5c-2 0-3-1.5-3-3.5z"/><path d="M2 16.5h20"/><path d="M12 5.5V3"/></svg>`
};

function getIconType(typeStr) {
    const t = typeStr.toLowerCase();
    if (t.includes('gwu') || t.includes('university')) return 'university';
    if (t.includes('medical') || t.includes('lab')) return 'medical';
    if (t.includes('training') || t.includes('bootcamp')) return 'navy';
    return 'navy';
}

// Initialize Map
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/liberty',
    center: [-77.0364, 38.8951],
    zoom: 4,
    attributionControl: false
});

map.addControl(new maplibregl.NavigationControl(), 'top-right');

let activeMarkers = [];
let activePopups = [];
let currentActiveImages = [];
let currentLightboxIndex = 0;

function toggleSatelliteMode(checkbox) {
    if (checkbox.checked) {
        map.setStyle({
            version: 8,
            sources: {
                'satellite-tiles': {
                    type: 'raster',
                    tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
                    tileSize: 256
                }
            },
            layers: [{ id: 'satellite-layer', type: 'raster', source: 'satellite-tiles', minzoom: 0, maxzoom: 22 }]
        });
    } else {
        map.setStyle('https://tiles.openfreemap.org/styles/liberty');
    }
    map.once('style.load', () => {
        const activeCard = document.querySelector('.timeline-card.active-timeline-card');
        if (activeCard) {
            updateMap(activeCard.getAttribute('data-key'));
        }
    });
}

// Complete Education & Military Dataset with 8 Photos Each & Professional Logo Badges
const educationData = {
    edu1: {
        key: 'edu1',
        navName: 'M.S. Information Systems',
        roleName: 'M.S. in Information Systems & Technology',
        institution: 'GWU School of Business',
        logo: 'https://ui-avatars.com/api/?name=GWU+SB&background=0d3b66&color=fff&size=150&bold=true&font-size=0.35',
        dates: 'Masters Degree',
        desc: 'Master of Science in Information Systems & Technology from the George Washington University School of Business.',
        details: [
            { label: "Institution", value: "GWU School of Business" },
            { label: "Degree", value: "Master of Science (MSIST)" },
            { label: "Location", value: "Washington, DC" }
        ],
        skills: ["Enterprise Systems", "IT Management", "Information Systems", "Business Analytics", "Systems Architecture"],
        locations: [
            { type: "University", name: "GWU School of Business", address: "2201 G St NW, Washington, DC 20052", coords: [-77.0475, 38.8997] }
        ],
        images: [
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1498243691501-b58efc21f40d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    edu2: {
        key: 'edu2',
        navName: 'Data Science Certification',
        roleName: 'Graduate Certificate in Data Science',
        institution: 'GWU Columbian College of Arts & Sciences',
        logo: 'https://ui-avatars.com/api/?name=GWU+DS&background=4a154b&color=fff&size=150&bold=true&font-size=0.35',
        dates: 'Graduate Certification',
        desc: 'Advanced graduate certification focusing on data science, analytics algorithms, and computational modeling.',
        details: [
            { label: "Institution", value: "GWU Columbian College of Arts & Sciences" },
            { label: "Certification", value: "Graduate Certificate in Data Science" },
            { label: "Location", value: "Washington, DC" }
        ],
        skills: ["Data Science", "Python", "Statistical Modeling", "Machine Learning", "Analytics"],
        locations: [
            { type: "University", name: "GWU Columbian College", address: "801 22nd St NW, Washington, DC 20052", coords: [-77.0482, 38.8991] }
        ],
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    edu3: {
        key: 'edu3',
        navName: 'B.B.A. ISTM',
        roleName: 'B.B.A. in Information Systems & Tech Mgmt',
        institution: 'GWU School of Business',
        logo: 'https://ui-avatars.com/api/?name=GWU+BBA&background=1d3557&color=fff&size=150&bold=true&font-size=0.35',
        dates: 'Bachelors Degree',
        desc: 'Bachelor of Business Administration with a major focus on Information Systems & Technology Management.',
        details: [
            { label: "Institution", value: "GWU School of Business" },
            { label: "Degree", value: "B.B.A. in ISTM" },
            { label: "Location", value: "Washington, DC" }
        ],
        skills: ["IT Management", "Business Operations", "Database Management", "Systems Analysis"],
        locations: [
            { type: "University", name: "GWU School of Business", address: "2201 G St NW, Washington, DC 20052", coords: [-77.0475, 38.8997] }
        ],
        images: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    edu4: {
        key: 'edu4',
        navName: 'Computer Science Minor',
        roleName: 'Minor in Computer Science',
        institution: 'GWU School of Engineering & Applied Sciences',
        logo: 'https://ui-avatars.com/api/?name=GWU+SEAS&background=2a9d8f&color=fff&size=150&bold=true&font-size=0.33',
        dates: 'Undergraduate Minor',
        desc: 'Rigorous academic minor in Computer Science covering software development, data structures, and algorithms.',
        details: [
            { label: "Institution", value: "GWU School of Engineering & Applied Sciences (SEAS)" },
            { label: "Credential", value: "Minor in Computer Science" },
            { label: "Location", value: "Washington, DC" }
        ],
        skills: ["Software Engineering", "Algorithms", "Data Structures", "Programming"],
        locations: [
            { type: "University", name: "GWU SEAS", address: "800 22nd St NW, Washington, DC 20052", coords: [-77.0480, 38.9005] }
        ],
        images: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1534972195531-d756b9cfa9f2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    edu5: {
        key: 'edu5',
        navName: 'A.S. Health Science',
        roleName: 'A.S. in Health Sciences (MLT & ASCP)',
        institution: 'GWU School of Medicine & Health Sciences',
        logo: 'https://ui-avatars.com/api/?name=GWU+SMHS&background=e63946&color=fff&size=150&bold=true&font-size=0.33',
        dates: 'Associates Degree',
        desc: 'Associate of Science in Health Sciences - Medical Laboratory Technician (ASHS MLT) with formal ASCP Certification.',
        details: [
            { label: "Institution", value: "GWU School of Medicine & Health Sciences" },
            { label: "Credential", value: "A.S. Health Sciences & ASCP Certification" },
            { label: "Location", value: "Washington, DC" }
        ],
        skills: ["Medical Laboratory", "ASCP Certification", "Clinical Diagnostics", "Hematology", "Microbiology"],
        locations: [
            { type: "University", name: "GWU SMHS", address: "2300 I St NW, Washington, DC 20037", coords: [-77.0501, 38.9009] }
        ],
        images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    edu6: {
        key: 'edu6',
        navName: 'USN San Diego Station',
        roleName: 'Naval Medical Training Command San Diego',
        institution: 'United States Navy',
        logo: 'https://ui-avatars.com/api/?name=USN+SD&background=111d4a&color=f1faee&size=150&bold=true&font-size=0.35',
        dates: 'Active Duty Station',
        desc: 'Military duty station and medical training command assignment in San Diego, California.',
        details: [
            { label: "Branch", value: "U.S. Navy" },
            { label: "Command", value: "NMTC / NHCS San Diego" },
            { label: "Location", value: "San Diego, CA" }
        ],
        skills: ["Military Medicine", "Clinical Operations", "Naval Service"],
        locations: [
            { type: "Duty Station", name: "NMTC / NHCS San Diego", address: "San Diego, CA", coords: [-117.148, 32.729] }
        ],
        images: [
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    edu7: {
        key: 'edu7',
        navName: 'USN Fort Sam Houston',
        roleName: 'Medical Education & Training Campus (METC)',
        institution: 'United States Navy / METC',
        logo: 'https://ui-avatars.com/api/?name=METC+TX&background=457b9d&color=fff&size=150&bold=true&font-size=0.35',
        dates: 'Clinical Training',
        desc: 'Specialized clinical training and medical education at Fort Sam Houston, Texas via METC.',
        details: [
            { label: "Branch", value: "U.S. Navy / METC" },
            { label: "Training", value: "Clinical Training Facility" },
            { label: "Location", value: "Fort Sam Houston, TX" }
        ],
        skills: ["Clinical Training", "Medical Corpsman", "Emergency Medicine"],
        locations: [
            { type: "Training Station", name: "METC Fort Sam Houston", address: "Fort Sam Houston, TX", coords: [-98.441, 29.452] }
        ],
        images: [
            "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    edu8: {
        key: 'edu8',
        navName: 'USN Hospital Corps School',
        roleName: 'Naval Hospital Corps School (NHCS)',
        institution: 'United States Navy',
        logo: 'https://ui-avatars.com/api/?name=NHCS&background=1d3557&color=f1faee&size=150&bold=true&font-size=0.35',
        dates: 'Technical Training',
        desc: 'Initial technical school training for Hospital Corpsmen at NHCS.',
        details: [
            { label: "Branch", value: "U.S. Navy" },
            { label: "School", value: "Naval Hospital Corps School (NHCS)" },
            { label: "Location", value: "Great Lakes, IL" }
        ],
        skills: ["Hospital Corpsman", "Anatomy", "Patient Care", "TCCC"],
        locations: [
            { type: "School", name: "Naval Hospital Corps School", address: "Great Lakes, IL", coords: [-87.842, 42.315] }
        ],
        images: [
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    edu9: {
        key: 'edu9',
        navName: 'USN Recruit Training',
        roleName: 'Recruit Training Command (RTC Great Lakes)',
        institution: 'United States Navy',
        logo: 'https://ui-avatars.com/api/?name=USN+RTC&background=111d4a&color=f1faee&size=150&bold=true&font-size=0.35',
        dates: 'Basic Training',
        desc: 'U.S. Navy Recruit Training Command (Basic Training) at Red Rover, Great Lakes, Illinois.',
        details: [
            { label: "Branch", value: "U.S. Navy" },
            { label: "Command", value: "Recruit Training Command (RTC Red Rover)" },
            { label: "Location", value: "Great Lakes, IL" }
        ],
        skills: ["Basic Military Training", "Discipline", "Naval Orientation", "Physical Readiness"],
        locations: [
            { type: "Basic Training", name: "RTC Red Rover Great Lakes", address: "Great Lakes, IL", coords: [-87.836, 42.311] }
        ],
        images: [
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        ]
    }
};

function initEducationUI() {
    const navScroll = document.getElementById('eduNavScroll');
    const timelineScroll = document.getElementById('eduTimelineScroll');

    navScroll.innerHTML = '';
    timelineScroll.innerHTML = '';

    Object.values(educationData).forEach(item => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.innerText = item.navName;
        navItem.onclick = (e) => selectEduItem(item.key, e);
        navItem.setAttribute('data-nav-key', item.key);
        navScroll.appendChild(navItem);

        const timeCard = document.createElement('div');
        timeCard.className = 'timeline-card';
        timeCard.setAttribute('data-key', item.key);
        timeCard.onclick = () => selectEduItem(item.key, null);
        timeCard.innerHTML = `
            <div class="timeline-year">${item.dates}</div>
            <div class="timeline-role">${item.navName}</div>
        `;
        timelineScroll.appendChild(timeCard);
    });
}

function renderGallery(currentItem) {
    const galleryGrid = document.getElementById('eduGalleryGrid');
    galleryGrid.innerHTML = '';
    currentActiveImages = currentItem.images || [];

    currentActiveImages.forEach((imgUrl, index) => {
        const galleryCard = document.createElement('div');
        galleryCard.className = 'edu-gallery-card';
        galleryCard.onclick = () => openLightbox(index);
        galleryCard.innerHTML = `
            <div class="edu-gallery-img-wrapper">
                <img src="${imgUrl}" alt="${currentItem.roleName} Photo ${index + 1}" class="edu-gallery-img" onerror="this.src='assets/logo/logo.png'">
            </div>
            <div class="edu-gallery-body">
                <span class="edu-gallery-category">${currentItem.institution}</span>
                <div class="edu-gallery-title">${currentItem.roleName}</div>
                <div class="edu-gallery-loc">Photo ${index + 1} of ${currentActiveImages.length}</div>
            </div>
        `;
        galleryGrid.appendChild(galleryCard);
    });
}

// Lightbox Functions
function openLightbox(index) {
    const modal = document.getElementById('eduLightboxModal');
    currentLightboxIndex = index;
    updateLightboxContent();
    modal.classList.add('active');
}

function closeLightbox() {
    const modal = document.getElementById('eduLightboxModal');
    modal.classList.remove('active');
}

function lightboxPrev() {
    if (currentActiveImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentActiveImages.length) % currentActiveImages.length;
    updateLightboxContent();
}

function lightboxNext() {
    if (currentActiveImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentActiveImages.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const imgUrl = currentActiveImages[currentLightboxIndex];
    const activeCard = document.querySelector('.timeline-card.active-timeline-card');
    const key = activeCard ? activeCard.getAttribute('data-key') : 'edu1';
    const item = educationData[key];

    if (!item) return;

    document.getElementById('lightboxImg').src = imgUrl;
    document.getElementById('lightboxTitle').innerText = `${item.roleName} (Photo ${currentLightboxIndex + 1}/${currentActiveImages.length})`;
    document.getElementById('lightboxSubtitle').innerText = `${item.institution} • ${item.dates}`;
}

function selectEduItem(key, event) {
    const currentItem = educationData[key];
    if (!currentItem) return;

    document.querySelectorAll('.nav-item').forEach(el => {
        if (el.getAttribute('data-nav-key') === key) el.classList.add('active');
        else el.classList.remove('active');
    });

    document.querySelectorAll('.timeline-card').forEach(card => {
        if (card.getAttribute('data-key') === key) {
            card.classList.add('active-timeline-card');
            card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            card.classList.remove('active-timeline-card');
        }
    });

    renderGallery(currentItem);

    document.getElementById('sidebar-logo').src = currentItem.logo;
    document.getElementById('sidebar-employer').innerText = currentItem.institution;
    document.getElementById('sidebar-role-title').innerText = currentItem.roleName;
    document.getElementById('sidebar-year').innerText = currentItem.dates;
    document.getElementById('sidebar-role-info').innerText = currentItem.desc;

    const contractContainer = document.getElementById('sidebar-contract');
    contractContainer.innerHTML = '';
    currentItem.details.forEach(row => {
        contractContainer.innerHTML += `
            <div class="contract-row">
                <span class="contract-label">${row.label}</span>
                <span class="contract-value">${row.value}</span>
            </div>
        `;
    });

    const locationsContainer = document.getElementById('sidebar-locations');
    locationsContainer.innerHTML = '';
    currentItem.locations.forEach(loc => {
        const iconKey = getIconType(loc.type);
        const badge = document.createElement('span');
        badge.className = 'location-badge';
        badge.innerHTML = `${icons[iconKey]}<span>${loc.type}: ${loc.name}</span>`;
        locationsContainer.appendChild(badge);
    });

    const skillsContainer = document.getElementById('sidebar-skills');
    skillsContainer.innerHTML = '';
    currentItem.skills.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'skill-badge';
        badge.innerText = skill;
        skillsContainer.appendChild(badge);
    });

    activeMarkers.forEach(m => m.remove());
    activeMarkers = [];
    activePopups.forEach(p => p.remove());
    activePopups = [];

    const coordinates = [];
    currentItem.locations.forEach(loc => {
        const iconKey = getIconType(loc.type);
        const el = document.createElement('div');
        el.className = 'custom-map-marker';
        el.innerHTML = icons[iconKey];

        const popupHtml = `
            <div class="map-popup-subtitle">${loc.type}</div>
            <div class="map-popup-title">${loc.name}</div>
            <div class="map-popup-address">${loc.address}</div>
        `;

        const popup = new maplibregl.Popup({ offset: 15, closeButton: false }).setHTML(popupHtml);
        activePopups.push(popup);

        const marker = new maplibregl.Marker({ element: el })
            .setLngLat(loc.coords)
            .setPopup(popup)
            .addTo(map);

        marker.togglePopup();
        activeMarkers.push(marker);
        coordinates.push(loc.coords);
    });

    setTimeout(() => {
        map.resize();
        if (coordinates.length === 1) {
            map.flyTo({ center: coordinates[0], zoom: 12 });
        } else if (coordinates.length > 1) {
            const bounds = coordinates.reduce((b, coord) => b.extend(coord), new maplibregl.LngLatBounds(coordinates[0], coordinates[0]));
            map.fitBounds(bounds, { padding: 50, maxZoom: 14 });
        }
    }, 50);

    if (window.innerWidth <= 1024) {
        document.body.classList.remove('mobile-menu-open');
    }
}

map.on('load', () => {
    initEducationUI();
    selectEduItem('edu1', null);
});