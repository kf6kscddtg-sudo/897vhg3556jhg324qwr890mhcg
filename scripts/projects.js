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

const projectData = {
    proj1: {
        key: 'proj1',
        projectName: 'Enterprise Palantir Pipeline',
        clientName: "USMC & SAIC PRISM",
        projectLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80",
        projectTitle: "Enterprise Palantir Pipeline",
        dates: "2026 - Present",
        projectDesc: "Enterprise-grade data ingestion and operational intelligence pipeline built using Palantir Foundry, AIP, and Maven for military readiness tracking.",
        contractRows: [
            { label: "Architecture", value: "Palantir Foundry / AIP / Maven" },
            { label: "Environment", value: "Cloud / GovCloud" },
            { label: "Sponsor", value: "SAIC / USMC" }
        ],
        contactRows: [
            { label: "Repository", value: "Internal Git / Azure DevOps" },
            { label: "Documentation", value: "Confluence Space" }
        ],
        locations: [
            { type: "Deployment", name: "Pentagon Cloud", address: "Arlington, VA" },
            { type: "Hub", name: "Mark Center", address: "Alexandria, VA" }
        ],
        skills: ["Palantir Foundry", "AIP", "Python", "Ontology", "Data Engineering", "Enterprise Architecture"],
        galleryItems: [
            { subtitle: "Dashboard", title: "Readiness Metrics Overview", desc: "Real-time visualization of unit deployment readiness levels.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Pipeline", title: "Ontology Data Lineage", desc: "Automated ingestion pipeline mapping source feeds to operational objects.", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Telemetry", title: "Stream Feed Alpha", desc: "Low-latency streaming layer capturing live asset telemetry.", img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Security", title: "Access Control Matrix", desc: "Role-based clearance mapping inside the secure enclave.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Analytics", title: "Core KPI Tracker", desc: "Executive snapshot for multi-domain operations.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Infrastructure", title: "GovCloud Node Topology", desc: "Virtualized server clustering mapping across AWS regions.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Ingestion", title: "Batch Processor v4", desc: "Nightly ETL sync handling structured relational extracts.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Validation", title: "Schema Compliance Check", desc: "Automated data hygiene assertions running prior to commit.", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Reporting", title: "Tactical Summary Export", desc: "Automated PDF brief generation for general staff review.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Optimization", title: "Query Latency Profiler", desc: "Index tuning results showing sub-second lookup spikes.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Integration", title: "Legacy DB Bridge", desc: "JDBC connection tunnel parsing mainframe system records.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Archival", title: "Cold Storage Policy", desc: "Automated tiering rules shifting logs to deep S3 buckets.", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Monitoring", title: "Node Health Radar", desc: "Prometheus heartbeat telemetry across active workers.", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Deployment", title: "CI/CD Pipeline Status", desc: "Container registry rollout verification for staging nodes.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" }
        ]
    },
    proj2: {
        key: 'proj2',
        projectName: 'AI Decision Support Agent',
        clientName: "AMCOM CIO/G6",
        projectLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80",
        projectTitle: "AI Decision Support Agent",
        dates: "2025 - 2026",
        projectDesc: "Generative AI conversational assistant and automated decision support framework leveraging AIP Logic and LLMs for logistics command nodes.",
        contractRows: [
            { label: "Architecture", value: "AIP Logic & Custom Widgets" },
            { label: "Environment", value: "Secure Enclave" },
            { label: "Sponsor", value: "Directviz Solutions" }
        ],
        contactRows: [
            { label: "Repository", value: "Code Repository" },
            { label: "Artifacts", value: "Model Registry" }
        ],
        locations: [
            { type: "Deployment", name: "Redstone Arsenal", address: "Huntsville, AL" }
        ],
        skills: ["AI FDE", "AIP Logic", "Chatbot Agents", "Custom Widgets", "Prompt Engineering"],
        galleryItems: [
            { subtitle: "Agent Interface", title: "AIP Chat Assistant", desc: "Interactive query engine for rapid inventory and supply tracking.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Workflow", title: "Automated Ticket Dispatch", desc: "Logic workspace triggering automated asset re-routing workflows.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Model Config", title: "LLM Prompt Tuning", desc: "System instruction sets for strict doctrine adherence.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Evaluations", title: "Hallucination Benchmark", desc: "Regression testing suite measuring token accuracy.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Embedding", title: "Vector Store Cluster", desc: "Pinecone index matching semantic field documents.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Widget", title: "Command Control Panel", desc: "Custom React UI element rendering model outputs.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Logging", title: "Inference Trace Inspector", desc: "Step-by-step chain of thought visualization tool.", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Security", title: "PII Scrubbing Filter", desc: "Pre-processing regex and token blocklists for safe inference.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Feedback", title: "Operator Rating Matrix", desc: "Human-in-the-loop thumbs up/down weight tuner.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Deployment", title: "Air-Gapped Node Check", desc: "Local container weight verification routine.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "API Layer", title: "FastAPI Gateway Metrics", desc: "Throughput and latency breakdown for client calls.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Memory", title: "Context Window Allocator", desc: "Token budgeting graph for deep conversation retention.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Analytics", title: "Daily Query Volume", desc: "Active user adoption charts across division offices.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Automation", title: "RAG Trigger Router", desc: "Conditional logic switching between local DB and web search.", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Optimization", title: "Quantization Benchmark", desc: "INT4 vs FP16 speed and accuracy evaluation report.", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Testing", title: "Adversarial Stress Test", desc: "Prompt injection resistance validation dashboard.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Integration", title: "ERP Connector Status", desc: "Enterprise resource planning tool sync tracker.", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Overview", title: "Executive Brief Slide", desc: "High-level impact metrics for commanding officers.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Maintenance", title: "Model Drift Detector", desc: "Statistical distribution shift alerts over time.", img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Archive", title: "Version History Tree", desc: "Git tags and semantic version release logs.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Finalization", title: "Sign-Off Document Hub", desc: "Accreditation and authorization packages.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" }
        ]
    },
    proj3: {
        key: 'proj3',
        projectName: 'Automated Lakehouse ETL',
        clientName: "HQDA G-3/5/7",
        projectLogo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80",
        projectTitle: "Automated Lakehouse ETL",
        dates: "2024 - 2025",
        projectDesc: "Medallion architecture data lakehouse processing multi-terabyte defense streams via Databricks and Spark for strategic operations.",
        contractRows: [
            { label: "Architecture", value: "Databricks / PySpark / AWS S3" },
            { label: "Environment", value: "ADVANA Platform" },
            { label: "Sponsor", value: "QBE" }
        ],
        contactRows: [
            { label: "Repository", value: "GitHub Enterprise" },
            { label: "Pipeline", value: "Automated Airflow DAGs" }
        ],
        locations: [
            { type: "Deployment", name: "Pentagon Hub", address: "Arlington, VA" }
        ],
        skills: ["Databricks", "Spark", "PySpark", "Medallion Architecture", "AWS S3", "SQL"],
        galleryItems: [
            { subtitle: "Pipeline", title: "Silver-to-Gold Transformation", desc: "Optimized distributed computing script executing nightly data cleansing.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Monitoring", title: "Job Execution Monitor", desc: "Grafana operational dashboard tracking cluster health and throughput.", img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Storage", title: "Delta Lake Parquet Partition", desc: "Optimized folder layout for high-speed table scans.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Workflow", title: "Airflow DAG Dependency Graph", desc: "Orchestration layout for parallel execution steps.", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Cluster", title: "Spark Worker Scaling", desc: "Auto-scaling worker node allocation during peak loads.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Profiling", title: "Memory Spill Analyzer", desc: "Executor memory footprint breakdown and garbage collection metrics.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Security", title: "IAM Role Policy Config", desc: "Least-privilege S3 bucket access restrictions.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Quality", title: "Great Expectations Suite", desc: "Data validation test results running on Bronze inputs.", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Catalog", title: "Unity Catalog Governance", desc: "Column-level lineage and permission auditing dashboard.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" }
        ]
    },
    proj4: {
        key: 'proj4',
        projectName: 'Geospatial Analytics Dashboard',
        clientName: "CDAO & ADVANA",
        projectLogo: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=200&q=80",
        projectTitle: "Geospatial Analytics Dashboard",
        dates: "2023 - 2024",
        projectDesc: "Interactive web-based mapping and spatial analysis dashboard integrating Leaflet, Plotly, and Python backends for tactical command views.",
        contractRows: [
            { label: "Architecture", value: "Dash / Plotly / Leaflet" },
            { label: "Environment", value: "FedRAMP Cloud" },
            { label: "Sponsor", value: "ALKU / Booz Allen" }
        ],
        contactRows: [
            { label: "Repository", value: "Internal GitLab" },
            { label: "Docs", value: "API Specification" }
        ],
        locations: [
            { type: "Deployment", name: "CDAO Office", address: "Arlington, VA" }
        ],
        skills: ["Python", "Dash", "Plotly", "Leaflet.js", "Geospatial Analytics", "Tableau"],
        galleryItems: [
            { subtitle: "Visualization", title: "Global Asset Dispersion", desc: "Interactive geospatial scatter plots overlaying live telemetry feeds.", img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Analytics", title: "Regional Heatmap Analysis", desc: "Dynamic filtering panel breaking down metric density by sector.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Mapping", title: "Vector Tile Layer Render", desc: "Custom Mapbox GL styling for high-density polygon layers.", img: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Interface", title: "Filter Control Sidebar", desc: "Multi-select faceted search component for spatial boundaries.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Telemetry", title: "Route Tracking Overlay", desc: "Historical path playback with time-slider controls.", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Performance", title: "Client-Side Clustering", desc: "Supercluster algorithm implementation preventing browser lag.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Export", title: "GeoJSON Spatial Query Tool", desc: "Bounding box selection tool exporting geometry subsets.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Integration", title: "PostGIS Spatial Indexing", desc: "R-tree index tuning for rapid polygon intersection lookups.", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Dashboard", title: "Multi-Pane Summary View", desc: "Synchronized cross-filtering between map and bar charts.", img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Layering", title: "Elevation Contours", desc: "Terrain relief overlay rendering tactical topography.", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Telemetry", title: "AIS Vessel Feed Stream", desc: "Real-time maritime tracking markers update loop.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Analysis", title: "Buffer Zone Calculator", desc: "Radius-based asset impact estimation tool.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Reporting", title: "Spatial PDF Export", desc: "Map canvas snapshots bundled into automated reports.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Architecture", title: "Flask Backend Service", desc: "REST endpoint management for spatial query requests.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
            { subtitle: "Testing", title: "Cross-Browser Map Sync", desc: "Viewport state management across concurrent sessions.", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" }
        ]
    }
};

function updateGallery(projKey) {
    const currentProj = projectData[projKey];

    document.querySelectorAll('.timeline-card').forEach(card => {
        if (card.getAttribute('data-key') === projKey) {
            card.classList.add('active-timeline-card');
            card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            card.classList.remove('active-timeline-card');
        }
    });

    document.querySelectorAll('.nav-item').forEach(el => {
        if (el.innerText.trim() === currentProj.projectName.trim()) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    document.getElementById('sidebar-logo').src = currentProj.projectLogo;
    document.getElementById('sidebar-employer').innerText = currentProj.clientName;
    document.getElementById('sidebar-role-title').innerText = currentProj.projectTitle;
    document.getElementById('sidebar-year').innerText = currentProj.dates;
    document.getElementById('sidebar-role-info').innerText = currentProj.projectDesc;

    const contractContainer = document.getElementById('sidebar-contract');
    contractContainer.innerHTML = '';
    currentProj.contractRows.forEach(row => {
        contractContainer.innerHTML += `
            <div class="contract-row">
                <span class="contract-label">${row.label}</span>
                <span class="contract-value">${row.value}</span>
            </div>
        `;
    });

    const contactContainer = document.getElementById('sidebar-contact');
    contactContainer.innerHTML = '';
    if (currentProj.contactRows && currentProj.contactRows.length > 0) {
        currentProj.contactRows.forEach(item => {
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
    currentProj.locations.forEach(loc => {
        const badge = document.createElement('span');
        badge.className = 'location-badge';
        badge.innerText = `${loc.type}: ${loc.name}`;
        locationsContainer.appendChild(badge);
    });

    const skillsContainer = document.getElementById('sidebar-skills');
    skillsContainer.innerHTML = '';
    currentProj.skills.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'skill-badge';
        badge.innerText = skill;
        skillsContainer.appendChild(badge);
    });

    const galleryContainer = document.getElementById('projectGalleryContainer');
    galleryContainer.innerHTML = '';
    currentProj.galleryItems.forEach(item => {
        galleryContainer.innerHTML += `
            <div class="gallery-card">
                <div class="gallery-img-container">
                    <img src="${item.img}" alt="${item.title}" class="gallery-img">
                </div>
                <div class="gallery-info">
                    <span class="gallery-card-subtitle">${item.subtitle}</span>
                    <div class="gallery-card-title">${item.title}</div>
                    <div class="gallery-card-desc">${item.desc}</div>
                </div>
            </div>
        `;
    });
}

function selectCardByProject(projectName, event) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');

    const foundKey = Object.keys(projectData).find(k => projectData[k].projectName === projectName);
    if (foundKey) {
        updateGallery(foundKey);
    }
    if (window.innerWidth <= 1024) {
        document.body.classList.remove('mobile-menu-open');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get('project');

    if (project) {
        selectCardByProject(project, null);
    } else {
        updateGallery('proj1');
    }
});