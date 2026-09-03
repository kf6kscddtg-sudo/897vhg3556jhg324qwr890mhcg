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
    if (t.includes('palantir') || t.includes('academy')) return 'university';
    if (t.includes('ai') || t.includes('datacenter')) return 'medical';
    return 'navy';
}

const certificateData = {
    cert1: {
        key: 'cert1',
        navName: 'Palantir Certified Developer',
        roleName: 'Palantir Certified Developer',
        institution: 'Palantir Technologies Academy',
        logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80',
        dates: '2026 - Present',
        desc: 'Official credential certifying advanced architecture design, data ontology modeling, and operational pipeline integration on Palantir Foundry.',
        details: [
            { label: "Credential ID", value: "PLT-8829-2026" },
            { label: "Issuer", value: "Palantir Technologies Academy" },
            { label: "Verification Status", value: "Active / Verified" }
        ],
        skills: ["Palantir Foundry", "AIP", "Python", "Ontology Engineering", "Security Clearances"],
        locations: [
            { type: "Authority", name: "Pentagon Cloud", address: "Arlington, VA" }
        ],
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    cert2: {
        key: 'cert2',
        navName: 'AIP Logic Specialist',
        roleName: 'AIP Logic Specialist',
        institution: 'Directviz Solutions AI Center',
        logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
        dates: '2025 - 2026',
        desc: 'Specialized certification validating expertise in prompt engineering, AIP Logic workflows, vector embeddings, and secure LLM deployments.',
        details: [
            { label: "Credential ID", value: "AIP-5091-2025" },
            { label: "Issuer", value: "Directviz Solutions AI Center" },
            { label: "Verification Status", value: "Active / Verified" }
        ],
        skills: ["AI FDE", "AIP Logic", "Chatbot Agents", "Custom Widgets", "Prompt Engineering"],
        locations: [
            { type: "Authority", name: "Redstone Arsenal", address: "Huntsville, AL" }
        ],
        images: [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    cert3: {
        key: 'cert3',
        navName: 'Databricks Lakehouse Pro',
        roleName: 'Databricks Lakehouse Pro',
        institution: 'Databricks Certification Board',
        logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80',
        dates: '2024 - 2025',
        desc: 'Professional accreditation recognizing advanced competency in Delta Lake medallion architectures, Spark tuning, and automated data pipelines.',
        details: [
            { label: "Credential ID", value: "DB-7734-2024" },
            { label: "Issuer", value: "Databricks Certification Board" },
            { label: "Verification Status", value: "Active / Verified" }
        ],
        skills: ["Databricks", "Spark", "PySpark", "Medallion Architecture", "AWS S3"],
        locations: [
            { type: "Authority", name: "Pentagon Hub", address: "Arlington, VA" }
        ],
        images: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    cert4: {
        key: 'cert4',
        navName: 'Advanced Spatial Analytics',
        roleName: 'Advanced Spatial Analytics',
        institution: 'Booz Allen Spatial Academy',
        logo: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=200&q=80',
        dates: '2023 - 2024',
        desc: 'Advanced credential confirming technical mastery in geospatial mapping, PostGIS indexing, interactive Plotly dashboards, and spatial layers.',
        details: [
            { label: "Credential ID", value: "GEO-3310-2023" },
            { label: "Issuer", value: "Booz Allen Spatial Academy" },
            { label: "Verification Status", value: "Active / Verified" }
        ],
        skills: ["Python", "Dash", "Plotly", "Leaflet.js", "Geospatial Analytics"],
        locations: [
            { type: "Authority", name: "CDAO Office", address: "Arlington, VA" }
        ],
        images: [
            "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
        ]
    }
};

function initCertUI() {
    const navScroll = document.getElementById('certNavScroll');
    const timelineScroll = document.getElementById('certTimelineScroll');

    if (!navScroll || !timelineScroll) return;

    navScroll.innerHTML = '';
    timelineScroll.innerHTML = '';

    Object.values(certificateData).forEach(item => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.innerText = item.navName;
        navItem.onclick = (e) => selectCertItem(item.key, e);
        navItem.setAttribute('data-nav-key', item.key);
        navScroll.appendChild(navItem);

        const timeCard = document.createElement('div');
        timeCard.className = 'timeline-card';
        timeCard.setAttribute('data-key', item.key);
        timeCard.onclick = () => selectCertItem(item.key, null);
        timeCard.innerHTML = `
            <div class="timeline-year">${item.dates}</div>
            <div class="timeline-role">${item.navName}</div>
        `;
        timelineScroll.appendChild(timeCard);
    });
}

function selectCertItem(key, event) {
    const currentItem = certificateData[key];
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

    const singleCertContainer = document.getElementById('singleCertContainer');
    if (singleCertContainer) {
        singleCertContainer.innerHTML = `
            <div style="width: 100%; height: 260px; background: #f4f4f4; border-bottom: 1px solid #e5e5e5; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <img src="${currentItem.images[0]}" alt="${currentItem.roleName}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 16px 20px; display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 8.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.2px; color: #888888;">Verified Credential</span>
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #111111;">${currentItem.roleName}</div>
                <div style="font-size: 10px; color: #555555; line-height: 1.5;">${currentItem.desc}</div>
            </div>
        `;
    }

    if (window.innerWidth <= 1024) {
        document.body.classList.remove('mobile-menu-open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initCertUI();
    selectCertItem('cert1', null);
});