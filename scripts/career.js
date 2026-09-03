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
    // Government building with pillars (Courthouse / Federal)
    gov: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 22 7 12 2"/><rect x="2" y="19" width="20" height="2"/><line x1="6" y1="11" x2="6" y2="15"/><line x1="10" y1="11" x2="10" y2="15"/><line x1="14" y1="11" x2="14" y2="15"/><line x1="18" y1="11" x2="18" y2="15"/><line x1="2" y1="17" x2="22" y2="17"/></svg>`,
    
    // Corporate HQ (Conjoined 2-building skyscraper silhouette with no gap)
    corp: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="18" rx="1"/><rect x="11" y="8" width="10" height="13" rx="1"/><line x1="7" y1="7" x2="7" y2="7.01"/><line x1="7" y1="11" x2="7" y2="11.01"/><line x1="7" y1="15" x2="7" y2="15.01"/><line x1="16" y1="12" x2="16" y2="12.01"/><line x1="16" y1="16" x2="16" y2="16.01"/></svg>`,
    
    // Remote work (Laptop)
    remote: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
    
    // On-site office building
    onsite: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>`,
    
    // University (Graduate mortarboard cap)
    university: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    
    // Training / Military Combat Helmet (Distinct dome & brim profile)
    training: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13c0-4.5 4-7.5 10-7.5s10 3 10 7.5c0 2-1 3.5-3 3.5H5c-2 0-3-1.5-3-3.5z"/><path d="M2 16.5h20"/><path d="M12 5.5V3"/></svg>`,

    // Medical / Healthcare (Larger square with a thick cross)
    medical: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="1" width="22" height="22" rx="2" ry="2"/><path d="M12 6v12M6 12h12" stroke-width="4"/></svg>`,

    // Military Base / Installation (Watchtower & Compound Silhouette)
    center: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M6 21V7l6-4 6 4v14M10 12h4v9h-4z"/></svg>`,

    // Pentagon (Solid filled-in bold shape)
    pentagon: `<svg class="mini-icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"><polygon points="12 2 22 9.5 18 22 6 22 2 9.5"/></svg>`,

    // Army Base / Military Star Insignia
    army: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,

    // Navy / Maritime Anchor
    navy: `<svg class="mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2.5"/><path d="M12 6.5v14"/><path d="M6 10h12"/><path d="M4 15c0 4.5 3.5 7 8 7s8-2.5 8-7"/></svg>`
};

function getIconType(typeStr, nameStr) {
    const combined = (typeStr + " " + nameStr).toLowerCase();
    if (combined.includes('pentagon')) return 'pentagon';
    if (combined.includes('hq')) return 'corp';
    if (combined.includes('gov')) return 'gov';
    if (combined.includes('mark')) return 'center';
    if (combined.includes('army')) return 'army';
    if (combined.includes('navy')|| combined.includes('school')|| combined.includes('school')|| combined.includes('training')) return 'navy';
    if (combined.includes('lab')|| combined.includes('hospital')) return 'medical';
    if (combined.includes('remote') || combined.includes('home') || combined.includes('residence')) return 'remote';
   // if (combined.includes('base') || combined.includes('gov') || combined.includes('duty') || combined.includes('bumed') || combined.includes('jrtc') || combined.includes('noaa') || combined.includes('ndfd') || combined.includes('va') || combined.includes('redstone') || combined.includes('fhcc')) return 'gov';
    //if (combined.includes('hq') || combined.includes('company') || combined.includes('best buy') || combined.includes('retail') || combined.includes('travelcenters') || combined.includes('take2') || combined.includes('saic') || combined.includes('directviz') || combined.includes('qbe') || combined.includes('alku') || combined.includes('teledyne') || combined.includes('ace info')) return 'corp';
    
    //if (combined.includes('training') || combined.includes('bootcamp') || combined.includes('school') || combined.includes('rtc')) return 'navy';
    return 'onsite';
}

// Initialize MapLibre GL with default Colored Style (Liberty)
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

function toggleSatelliteMode(checkbox) {
    if (checkbox.checked) {
        map.setStyle({
            version: 8,
            sources: {
                'satellite-tiles': {
                    type: 'raster',
                    tiles: [
                        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                    ],
                    tileSize: 256
                }
            },
            layers: [
                {
                    id: 'satellite-layer',
                    type: 'raster',
                    source: 'satellite-tiles',
                    minzoom: 0,
                    maxzoom: 22
                }
            ]
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

const timelineData = {
    job1: {
        key: 'job1',
        roleName: 'Lead Enterprise Architect',
        employerName: "Take2 IT Consulting",
        employerLogo: "logo_take2.jpg",
        roleTitle: "Lead Enterprise Architect",
        dates: "Aug 2026 - Present",
        roleDesc: "Lead Enterprise Architect, Senior Palantir Engineer, and SME supporting SAIC PRISM, Marine Corps PLO-04, and TDL004/USMC.",
        contractRows: [
            { label: "Contract / Program", value: "SAIC PRISM, Marine Corps PLO-04, TDL004/USMC" },
            { label: "Prime Contractor", value: "SAIC" },
            { label: "Employer / Agency", value: "Take2 IT Consulting LLC" }
        ],
        clearance: [
            { label: "Clearance", value: "Top Secret" },
            { label: "Eligibility Date", value: "01/13/2026" }
        ],
        employerContact: [
            { label: "Phone", value: "888-825-3203" },
            { label: "Email", value: "info@take2it.com" },
            { label: "Address", value: "1595 Spring Hill Road, Suite 710, Vienna, VA 22182" }
        ],
        skills: ["Enterprise Architecture", "Systems Engineering", "Data Engineering", "Artificial Intelligence", "Palantir Foundry and AIP", "Palantir Maven", "DRRS", "SORTS", "Azure DevOps", "DIODE", "CORE", "USMC", "Military Readiness"],
        locations: [
            { type: "Company HQ", name: "Take2 IT", address: "1595 Spring Hill Road, Suite 300, Vienna, VA 22182", coords: [-77.2252, 38.9221] },
            { type: "Partner HQ", name: "SAIC", address: "Reston, VA", coords: [-77.349, 38.953] },
            { type: "On-Site Work", name: "Pentagon", address: "Arlington, VA", coords: [-77.0563, 38.8719] },
            { type: "On-Site Work", name: "Mark Center", address: "Alexandria, VA", coords: [-77.124, 38.829] }
        ]
    },
    job2: {
        key: 'job2',
        roleName: 'AI Engineer',
        employerName: "Directviz Solutions",
        employerLogo: "logo_dvs.jpg",
        roleTitle: "AI Engineer",
        dates: "Dec 2025 - Aug 2026",
        roleDesc: "AI Engineer / AI Generalist supporting AMCOM CIO/G6 and AMCOM TI 110.",
        contractRows: [
            { label: "Contract / Program", value: "AMCOM CIO/G6, AMCOM TI 110" },
            { label: "Prime Contractor", value: "Direct Hire" },
            { label: "Employer / Agency", value: "Directviz Solutions" }
        ],
        clearance: [
            { label: "Clearance", value: "Top Secret" },
            { label: "Eligibility Date", value: "01/13/2026" }
        ],
        employerContact: [
            { label: "Phone", value: "703-662-0099" },
            { label: "Email", value: "info@directviz.com" },
            { label: "Address", value: "1595 Spring Hill Road, Suite 300, Vienna, VA 22182" }
        ],
        skills: ["Army Vantage", "Palantir Foundry and AIP", "Code Repositories", "Fusion", "Dataset", "Mediaset", "Pipeline Builder", "Ontology", "Workshop", "Automate", "Custom Widgets", "AIP Logic", "AI FDE", "AIP Analyst", "AIP Agent Chatbot", "Notepad", "Data Lineage", "Contour", "Projects and Files", "Account Setting Groups", "Platform Support"],
        locations: [
            { type: "Company HQ", name: "Directviz", address: "Vienna, VA", coords: [-77.2252, 38.9221] },
            { type: "Army Base", name: "Redstone Arsenal", address: "Huntsville, AL", coords: [-86.643, 34.631] }
        ]
    },
    job3: {
        key: 'job3',
        roleName: 'Senior Data Engineer',
        employerName: "Quality Business Engineering",
        employerLogo: "logo_qbe.jpg",
        roleTitle: "Senior Data Engineer",
        dates: "May 2024 - Aug 2025",
        roleDesc: "Senior Data Pipeline Engineer supporting HQDA G-3/5/7, DAMO-SO, CPCOE, and CHMR-AP.",
        contractRows: [
            { label: "Contract / Program", value: "HQDA G-3/5/7, DAMO-SO, CPCOE, CHMR-AP" },
            { label: "Prime Contractor", value: "Direct Hire" },
            { label: "Employer / Agency", value: "QBE" }
        ],
        clearance: [
            { label: "Clearance", value: "Secret" }
        ],
        employerContact: [
            { label: "Phone", value: "703-468-1409" },
            { label: "Email", value: "sales@qbe.net" },
            { label: "Address", value: "14604 Washington St, Haymarket, VA 20169" }
        ],
        skills: ["Army Vantage", "Palantir Foundry and AIP", "ADVANA", "EDL", "Databricks", "Spark", "SQL", "Tableau", "AWS S3", "ERD", "Python", "Dash", "Plotly", "Leaflet", "Redis", "Docker", "Qlik", "Servicenow", "Gabriel Nimbus BDP", "Unity", "Ionic", "Superset", "Valiant Shield", "Avenger Triad", "C2 Fix", "WFF", "TDP", "L2A2", "BCT", "WFX", "CANDOR", "CHIONE", "APOLLO", "CHASE", "LTAC", "CDSO", "OMNI", "LOKI", "JRTC"],
        locations: [
            { type: "Company HQ", name: "QBE", address: "14604 Washington St, Haymarket, VA 20169", coords: [-77.6366, 38.8115] },
            { type: "Gov Site", name: "Pentagon", address: "Arlington, VA", coords: [-77.0563, 38.8719] },
            { type: "Gov Site", name: "Mark Center", address: "Alexandria, VA", coords: [-77.124, 38.829] },
            { type: "Army Base", name: "Army Honolulu HI", address: "Honolulu, HI", coords: [-157.889, 21.344] },
            { type: "Army Base", name: "JRTC Louisiana", address: "Louisiana", coords: [-93.186, 31.042] }
        ]
    },
    job4: {
        key: 'job4',
        roleName: 'Data Engineer',
        employerName: "ALKU Government Solutions",
        employerLogo: "logo_alku.jpg",
        roleTitle: "Data Engineer",
        dates: "Jun 2023 - Apr 2024",
        roleDesc: "Data Engineer and Data Scientist supporting CDAO, ADVANA, FEDIM, OCMO, TSyBO, OUSD(C), and Business Integration Office.",
        contractRows: [
            { label: "Contract / Program", value: "CDAO, ADVANA, FEDIM, OCMO, TSyBO, OUSD(C), Business Integration Office" },
            { label: "Prime Contractor", value: "Booz Allen Hamilton" },
            { label: "Employer / Agency", value: "ALKU Government Solutions" }
        ],
        clearance: [
            { label: "Clearance", value: "Secret" }
        ],
        employerContact: [
            { label: "Phone", value: "703-579-1162" },
            { label: "Email", value: "info@alku.com" },
            { label: "Address", value: "13665 Dulles Technology Drive, Suite 200, Herndon, VA 20171" }
        ],
        skills: ["ADVANA", "EDL", "Databricks", "Tableau", "AWS S3", "Qlik", "iQuery", "ERD", "Python", "Data Pipeline", "Data Engineering", "Lakehouse", "Medallion Architecture", "PySpark", "SQL", "Jira"],
        locations: [
            { type: "Company HQ", name: "ALKU", address: "13665 Dulles Technology Drive, Suite 200, Herndon, VA 20171", coords: [-77.4110, 38.9692] },
            { type: "Partner HQ", name: "Booz Allen Hamilton", address: "McLean, VA", coords: [-77.218, 38.924] },
            { type: "Gov Site", name: "CDAO", address: "Arlington, VA", coords: [-77.056, 38.871] },
            { type: "Remote Home", name: "Remote", address: "Silver Spring, MD", coords: [-77.015, 39.005] }
        ]
    },
    job5: {
        key: 'job5',
        roleName: 'Data Scientist',
        employerName: "Teledyne Brown Engineering",
        employerLogo: "logo_tbe.jpg",
        roleTitle: "Data Scientist",
        dates: "May 2021 - Jun 2023",
        roleDesc: "Data Scientist / Research Scientist III supporting USN BUMED analytics and research operations.",
        contractRows: [
            { label: "Contract / Program", value: "USN BUMED" },
            { label: "Prime Contractor", value: "Direct Hire" },
            { label: "Employer / Agency", value: "Teledyne Brown Engineering" }
        ],
        clearance: [
            { label: "Clearance", value: "Secret" }
        ],
        employerContact: [
            { label: "Phone", value: "256-726-1000" },
            { label: "Email", value: "tbebusiness@teledyne.com" },
            { label: "Address", value: "300 Sparkman Drive, Huntsville, AL 35805" }
        ],
        skills: ["Data Science", "Data Engineering", "Data Analytics", "Data Pipeline", "Python", "Pycharm", "Anaconda", "Pandas", "PyQt5", "Plotly.py", "Dash", "R", "R Studio IDE", "R Shiny", "Plotly R", "VS Code", "Microsoft Azure Repo"],
        locations: [
            { type: "Company HQ", name: "Teledyne", address: "300 Sparkman Drive, Huntsville, AL 35805", coords: [-86.6455, 34.7304] },
            { type: "Gov Site", name: "BUMED Office", address: "Falls Church, VA", coords: [-77.195, 38.868] },
            { type: "Remote Home", name: "Remote", address: "Silver Spring, MD", coords: [-77.015, 39.005] }
        ]
    },
    job6: {
        key: 'job6',
        roleName: 'Scientific Programmer',
        employerName: "Ace Info Solutions",
        employerLogo: "logo_aceinfo.jpg",
        roleTitle: "Scientific Programmer",
        dates: "Aug 2020 - May 2021",
        roleDesc: "Data Visualization Web Developer and Scientific Programmer II supporting NOAA NWS MDL DSFD NDFD.",
        contractRows: [
            { label: "Contract / Program", value: "NOAA NWS MDL DSFD NDFD" },
            { label: "Prime Contractor", value: "Direct Hire" },
            { label: "Employer / Agency", value: "Ace Info Solutions" }
        ],
        clearance: [
            { label: "Clearance", value: "Inactive" }
        ],
        employerContact: [
            { label: "Phone", value: "703-391-2800" },
            { label: "Email", value: "hrhq@aceinfosolutions.com" },
            { label: "Address", value: "11490 Commerce Park Drive, Suite 340, Reston, VA 20191" }
        ],
        skills: ["Web Development", "Data Analytics", "HTML", "CSS", "Javascript", "D3.js", "PHP", "SQL", "Python", "Pycharm", "Anaconda", "Pandas", "Bash Scripting (Vim and Nano)", "Git (VLab)", "AWS"],
        locations: [
            { type: "Company HQ", name: "Ace Info", address: "Silver Spring, MD", coords: [-77.0301, 38.9916] },
            { type: "Gov Site", name: "NOAA Office", address: "Silver Spring, MD", coords: [-77.0301, 38.9916] },
            { type: "Remote Home", name: "Remote", address: "Silver Spring, MD", coords: [-77.015, 39.005] }
        ]
    },
    job7: {
        key: 'job7',
        roleName: 'Data Analyst',
        employerName: "Women’s Worth Summit",
        employerLogo: "logo_wws.jpg",
        roleTitle: "Data Analyst",
        dates: "Nov 2019 - May 2020",
        roleDesc: "Data Analyst and Research Intern focusing on internal research and analytics for a non-profit organization.",
        contractRows: [
            { label: "Contract / Program", value: "Non-Profit Organization" },
            { label: "Prime Contractor", value: "Direct Hire" },
            { label: "Employer / Agency", value: "Women’s Worth Summit" }
        ],
        clearance: [
            { label: "Clearance", value: "Inactive" }
        ],
        employerContact: [
            { label: "Location", value: "Washington, DC" }
        ],
        skills: ["Web Scraping", "Data Analytics", "Flodesk", "Data Cleanup", "ETL", "R", "Python", "Pycharm", "Anaconda", "Pandas"],
        locations: [
            { type: "Remote Site", name: "Washington DC", address: "Washington, DC", coords: [-77.0364, 38.8951] }
        ]
    },
    job8: {
        key: 'job8',
        roleName: 'Inventory Specialist',
        employerName: "Best Buy",
        employerLogo: "logo_bestbuy.jpg",
        roleTitle: "Inventory Specialist",
        dates: "Jul 2015 - Sep 2015",
        roleDesc: "Inventory Specialist managing commercial retail asset and inventory tracking.",
        contractRows: [
            { label: "Contract / Program", value: "Commercial Retail Asset and Inventory Tracking" },
            { label: "Prime Contractor", value: "Direct Hire" },
            { label: "Employer / Agency", value: "Best Buy" }
        ],
        clearance: [
            { label: "Clearance", value: "Inactive" }
        ],
        employerContact: [
            { label: "Phone", value: "202-387-6150" },
            { label: "Email", value: "onlinesupport@bestbuy.com" },
            { label: "Address", value: "3100 14th St NW Ste 203, Washington, DC 20010" }
        ],
        skills: ["INVENTORY MANAGEMENT", "LOGISTICS", "ASSET TRACKING", "RETAIL OPERATIONS"],
        locations: [
            { type: "On-Site Work", name: "Best Buy Store", address: "3100 14th St NW Ste 203, Washington, DC 20010", coords: [-77.332, 38.930] }
        ]
    },
    job9: {
        key: 'job9',
        roleName: 'Medical Laboratory Technician',
        employerName: "United States Navy",
        employerLogo: "logo_fhcc.jpg",
        roleTitle: "Medical Laboratory Technician",
        dates: "Feb 2012 - May 2015",
        roleDesc: "Medical Laboratory Technician and Cytology Technician supporting military treatment facilities, FHCC, CJAL, DOD, and the VA.",
        contractRows: [
            { label: "Contract / Program", value: "FHCC, CJAL, DOD, Department of Veterans Affairs" },
            { label: "Prime Contractor", value: "Active Duty" },
            { label: "Employer / Agency", value: "United States Navy" }
        ],
        clearance: [
            { label: "Clearance", value: "Secret" }
        ],
        employerContact: [
            { label: "Phone", value: "224-610-3132" },
            { label: "Email", value: "fhcc.feedback@va.gov" },
            { label: "Address", value: "3001 Green Bay Road North Chicago, IL 60064" }
        ],
        skills: ["Microbiology", "Cytology", "Chemistry", "Urinalysis", "Hematology", "Coagulation", "CHCS", "CPRS", "VistA", "OPS"],
        locations: [
            { type: "Duty Station", name: "FHCC Main Lab", address: "3001 Green Bay Road North Chicago, IL 60064", coords: [-87.8423, 42.3156] },
            { type: "Training Lab", name: "RTC Red Rover 1523", address: "Great Lakes, IL", coords: [-87.836, 42.311] },
            { type: "Training Lab", name: "RTC 1007 Tranquility", address: "Great Lakes, IL", coords: [-87.842, 42.315] },
            { type: "Training Lab", name: "Fisher 237", address: "Great Lakes, IL", coords: [-87.840, 42.313] }
        ]
    },
    job10: {
        key: 'job10',
        roleName: 'US Navy Corpsman',
        employerName: "Department of the Navy",
        employerLogo: "logo_usn.jpg",
        roleTitle: "Hospital Corpsman",
        dates: "May 2010 - May 2015",
        roleDesc: "Hospital Corpsman performing active duty medical service, field medical readiness, and clinical training.",
        contractRows: [
            { label: "Contract / Program", value: "Military Service" },
            { label: "Prime Contractor", value: "Active Duty" },
            { label: "Employer / Agency", value: "Department of the Navy" }
        ],
        clearance: [
            { label: "Clearance", value: "Secret" }
        ],
        employerContact: [
            { label: "Phone", value: "(800) 284-6289" },
            { label: "Email", value: "askmncc@us.navy.mil" },
            { label: "Address", value: "Pentagon Department of the Navy" }
        ],
        skills: ["Fire Drill", "Ship Training", "Boot Camp", "Tactical Combat Casualty Care", "Emergency", "Leadership"],
        locations: [
            { type: "Basic Training", name: "Red Rover Great Lakes", address: "Great Lakes, IL", coords: [-87.836, 42.311] },
            { type: "A-School", name: "Class 210B NHCS", address: "Great Lakes, IL", coords: [-87.842, 42.315] },
            { type: "C-School I", name: "METC", address: "Fort Sam Houston, TX", coords: [-98.441, 29.452] },
            { type: "C-School II", name: "NMTC/NSHS", address: "San Diego, CA", coords: [-117.148, 32.729] },
            { type: "Duty Station", name: "FHCC Hospital", address: "Great Lakes, IL", coords: [-87.8423, 42.3156] }
        ]
    },
    job11: {
        key: 'job11',
        roleName: 'Restaurant Staff',
        employerName: "TravelCenters of America",
        employerLogo: "logo_ta.jpg",
        roleTitle: "Restaurant Staff",
        dates: "Apr 2009 - Apr 2010",
        roleDesc: "Restaurant Staff operations at Country Pride Restaurant handling commercial food service operations.",
        contractRows: [
            { label: "Contract / Program", value: "Commercial Food Service Operations" },
            { label: "Prime Contractor", value: "Direct Hire" },
            { label: "Employer / Agency", value: "Travel Centers of America" }
        ],
        clearance: [
            { label: "Clearance", value: "None" }
        ],
        employerContact: [
            { label: "Phone", value: "850-526-3303" },
            { label: "Email", value: "customerservice@ta-petro.com" },
            { label: "Address", value: "2112 Highway 71 South, Marianna, FL 32448" }
        ],
        skills: ["FOOD SERVICE", "CUSTOMER RELATIONS", "TIME MANAGEMENT", "LINE COOKING"],
        locations: [
            { type: "On-Site Work", name: "Country Pride Restaurant", address: "2112 Highway 71 South, Marianna, FL 32448", coords: [-85.2254, 30.7744] }
        ]
    }
};

function updateMap(jobKey) {
    activeMarkers.forEach(marker => marker.remove());
    activeMarkers = [];
    activePopups.forEach(popup => popup.remove());
    activePopups = [];

    const currentJob = timelineData[jobKey];

    document.querySelectorAll('.timeline-card').forEach(card => {
        if (card.getAttribute('data-key') === jobKey) {
            card.classList.add('active-timeline-card');
            card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            card.classList.remove('active-timeline-card');
        }
    });

    document.querySelectorAll('.nav-item').forEach(el => {
        if (el.innerText.trim() === currentJob.roleName.trim()) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    document.getElementById('sidebar-logo').src = `assets/career/logo/${currentJob.employerLogo}`;
    document.getElementById('sidebar-employer').innerText = currentJob.employerName;
    document.getElementById('sidebar-role-title').innerText = currentJob.roleTitle;
    document.getElementById('sidebar-year').innerText = currentJob.dates;
    document.getElementById('sidebar-role-info').innerText = currentJob.roleDesc;

    const contractContainer = document.getElementById('sidebar-contract');
    contractContainer.innerHTML = '';
    currentJob.contractRows.forEach(row => {
        contractContainer.innerHTML += `
            <div class="contract-row">
                <span class="contract-label">${row.label}</span>
                <span class="contract-value">${row.value}</span>
            </div>
        `;
    });

    const clearanceContainer = document.getElementById('sidebar-clearance');
    const clearanceSection = document.getElementById('clearance-section');
    if (currentJob.clearance && currentJob.clearance.length > 0) {
        clearanceSection.style.display = 'block';
        clearanceContainer.innerHTML = '';
        currentJob.clearance.forEach(item => {
            clearanceContainer.innerHTML += `
                <div class="contract-row">
                    <span class="contract-label">${item.label}</span>
                    <span class="contract-value">${item.value}</span>
                </div>
            `;
        });
    } else {
        clearanceSection.style.display = 'none';
    }

    const contactContainer = document.getElementById('sidebar-contact');
    contactContainer.innerHTML = '';
    if (currentJob.employerContact && currentJob.employerContact.length > 0) {
        currentJob.employerContact.forEach(item => {
            contactContainer.innerHTML += `
                <div class="contract-row">
                    <span class="contract-label">${item.label}</span>
                    <span class="contract-value">${item.value}</span>
                </div>
            `;
        });
    }

    const locationsContainer = document.getElementById('sidebar-locations');
    locationsContainer.innerHTML = '';
    currentJob.locations.forEach(loc => {
        const iconKey = getIconType(loc.type, loc.name);
        const badge = document.createElement('span');
        badge.className = 'location-badge';
        badge.innerHTML = `${icons[iconKey]}<span>${loc.type}: ${loc.name}</span>`;
        locationsContainer.appendChild(badge);
    });

    const skillsContainer = document.getElementById('sidebar-skills');
    skillsContainer.innerHTML = '';
    currentJob.skills.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'skill-badge';
        badge.innerText = skill;
        skillsContainer.appendChild(badge);
    });

    const coordinates = [];
    currentJob.locations.forEach(loc => {
        const iconKey = getIconType(loc.type, loc.name);

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
}

function selectCardByRole(roleName, event) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if(event && event.target) event.target.classList.add('active');

    const foundKey = Object.keys(timelineData).find(k => timelineData[k].roleName === roleName);
    if (foundKey) {
        updateMap(foundKey);
    }
    if (window.innerWidth <= 1024) {
        document.body.classList.remove('mobile-menu-open');
    }
}

map.on('load', () => {
    updateMap('job1');
});

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');

    if (role) {
        selectCardByRole(role, null);
    }
});