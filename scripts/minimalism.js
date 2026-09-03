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
    hardware: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    apparel: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H5v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10h1.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
    tool: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    everyday: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
};

function getIconType(typeStr) {
    const t = typeStr.toLowerCase();
    if (t.includes('tech') || t.includes('hardware')) return 'hardware';
    if (t.includes('wear') || t.includes('clothing')) return 'apparel';
    if (t.includes('carry') || t.includes('utility')) return 'tool';
    return 'everyday';
}

const certificateData = {
    item1: {
        key: 'item1',
        navName: 'MacBook Air M2',
        roleName: 'MacBook Air M2 (13-inch)',
        institution: 'Technology & Work',
        logo: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80',
        dates: 'Acquired 2023',
        desc: 'The sole computing device used for all professional development, remote work, writing, and creative projects. Zero redundancy.',
        details: [
            { label: "Weight", value: "1.24 kg" },
            { label: "Category", value: "Digital Productivity" },
            { label: "Status", value: "In Daily Use" }
        ],
        skills: ["Apple Silicon", "Silent Operation", "All-Day Battery", "Minimal Setup"],
        locations: [
            { type: "Storage", name: "Work Backpack", address: "Primary Mobile Carry" }
        ],
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    item2: {
        key: 'item2',
        navName: 'Capsule Wardrobe (33 items)',
        roleName: 'Seasonal Capsule Wardrobe',
        institution: 'Apparel & Comfort',
        logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=200&q=80',
        dates: 'Maintained Ongoing',
        desc: 'A strict 33-item seasonal wardrobe containing neutral tones, high durability fabrics, eliminating choice fatigue completely.',
        details: [
            { label: "Total Count", value: "33 Pieces" },
            { label: "Category", value: "Wearables" },
            { label: "Status", value: "Optimized" }
        ],
        skills: ["Merino Wool", "Organic Cotton", "Neutral Palette", "High Durability"],
        locations: [
            { type: "Storage", name: "Minimal Closet", address: "Home Wardrobe" }
        ],
        images: [
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    item3: {
        key: 'item3',
        navName: 'Kindle Paperwhite',
        roleName: 'Kindle Paperwhite Reader',
        institution: 'Knowledge & Growth',
        logo: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=200&q=80',
        dates: 'Acquired 2022',
        desc: 'Replaces all physical books to maintain zero physical clutter while holding an entire personal library of reference and philosophy texts.',
        details: [
            { label: "Weight", value: "205 g" },
            { label: "Category", value: "Media & Education" },
            { label: "Status", value: "Active Reader" }
        ],
        skills: ["E-Ink Display", "Weeks Battery", "Zero Paper Waste", "Offline Library"],
        locations: [
            { type: "Storage", name: "Bedside Table", address: "Home Surface" }
        ],
        images: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    item4: {
        key: 'item4',
        navName: 'Pilot Metropolitan Pen',
        roleName: 'Pilot Metropolitan Fountain Pen',
        institution: 'Analog Creation',
        logo: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=200&q=80',
        dates: 'Acquired 2021',
        desc: 'The single writing instrument owned for journaling, sketching ideas, and structural planning before executing digitally.',
        details: [
            { label: "Material", value: "Brass Barrel" },
            { label: "Category", value: "Analog Tools" },
            { label: "Status", value: "Permanent Item" }
        ],
        skills: ["Refillable Ink", "Metal Build", "Fine Nib", "Zero Disposables"],
        locations: [
            { type: "Storage", name: "Desk Mat", address: "Work Surface" }
        ],
        images: [
            "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80"
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
                <span style="font-size: 8.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.2px; color: #888888;">Registered Possession</span>
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
    selectCertItem('item1', null);
});