/* ========================================
   PAINTBALL BATU MALANG - DATA & LOGIC
   ======================================== */

// ============ HELPER: DETECT CURRENT PATH ============
function getProgramLink(filename) {
    const currentPath = window.location.pathname;
    if (currentPath.includes('/program/') && !currentPath.endsWith('/program.html')) {
        return filename;
    }
    return 'program/' + filename;
}

// ============ DATA ============

const keunggulanData = [
    { number: '01', icon: 'bi-tree', title: 'Outdoor Experience', desc: 'Aktivitas outdoor yang dirancang agar peserta mendapatkan pengalaman yang seru dan berkesan.' },
    { number: '02', icon: 'bi-people', title: 'Team Building', desc: 'Aktivitas yang mendorong komunikasi, kolaborasi, strategi, dan kekompakan tim.' },
    { number: '03', icon: 'bi-sliders', title: 'Program Fleksibel', desc: 'Program dapat disesuaikan dengan jumlah peserta, tujuan kegiatan, waktu, dan kebutuhan acara.' },
    { number: '04', icon: 'bi-gear', title: 'Event Support', desc: 'Dukungan dalam persiapan hingga pelaksanaan kegiatan agar event berjalan lebih terarah.' }
];

const programData = [
    { title: 'Paintball', desc: 'Aktivitas strategi dan teamwork dengan pengalaman outdoor yang seru.', image: 'assets/img/program/paintsball.webp', link: getProgramLink('paintball.html') },
    { title: 'Team Building', desc: 'Aktivitas yang dirancang untuk membangun komunikasi dan kolaborasi.', image: 'assets/img/program/team-building-paintsball.webp', link: getProgramLink('team-building.html') },
    { title: 'Corporate Gathering', desc: 'Konsep kegiatan outdoor untuk perusahaan dan instansi.', image: 'assets/img/program/corporates-paintsball.webp', link: getProgramLink('corporate-gathering.html') },
    { title: 'Outbound', desc: 'Berbagai aktivitas outdoor yang dapat disesuaikan dengan kebutuhan peserta.', image: 'assets/img/program/ourbounds-paintball.webp', link: getProgramLink('outbound.html') },
    { title: 'Family Gathering', desc: 'Aktivitas santai dan menyenangkan untuk keluarga atau kelompok.', image: 'assets/img/program/family-gatherings-paintsball.webp', link: getProgramLink('family-gathering.html') },
    { title: 'Outdoor Adventure', desc: 'Berbagai pengalaman adventure di alam terbuka.', image: 'assets/img/program/outbounds-adventure-paintsball.webp', link: getProgramLink('outdoor-adventure.html') }
];

const corporateBenefits = [
    { icon: 'bi-people-fill', title: 'Teamwork', desc: 'Membangun kekompakan dan sinergi antar anggota tim.' },
    { icon: 'bi-chat-dots-fill', title: 'Communication', desc: 'Meningkatkan efektivitas komunikasi dalam tim.' },
    { icon: 'bi-diagram-3-fill', title: 'Collaboration', desc: 'Mendorong kolaborasi lintas divisi dan departemen.' },
    { icon: 'bi-lightbulb-fill', title: 'Strategy', desc: 'Melatih kemampuan berpikir strategis dan taktis.' }
];

const prosesData = [
    { number: '01', title: 'Konsultasi', desc: 'Ceritakan kebutuhan, jumlah peserta, lokasi, dan tujuan acara.' },
    { number: '02', title: 'Pilih Program', desc: 'Tentukan aktivitas yang sesuai atau buat konsep custom.' },
    { number: '03', title: 'Persiapan', desc: 'Tim menyiapkan kebutuhan program dan teknis kegiatan.' },
    { number: '04', title: 'Experience', desc: 'Saatnya menikmati aktivitas outdoor bersama tim.' }
];

const destinasiData = [
    { name: 'Batu Malang', image: 'assets/img/lokasi/batu-malangs.webp' },
    { name: 'Coban Rondo', image: 'assets/img/lokasi/coban-rondo.webp' },
    { name: 'Trawas', image: 'assets/img/lokasi/trawas-mojokerto.webp' },
    { name: 'Tretes', image: 'assets/img/lokasi/tretes-prigen.webp' },
    { name: 'Pacet Mojokerto', image: 'assets/img/lokasi/pacet-mojokerto.webp' },
    { name: 'Lembah Tumpang', image: 'assets/img/lokasi/lembah-tumpang-malang.webp' },
    { name: 'Bromo', image: 'assets/img/lokasi/bromo.webp' },
    { name: 'Pantai Malang Selatan', image: 'assets/img/lokasi/pantai-malang-selatan.webp' }
];

const galleryData = [
    { category: 'paintball', image: 'assets/img/galeri/tempat-paintball-terbaik.webp', alt: 'Paintball activity' },
    { category: 'team-building', image: 'assets/img/galeri/team-building-paintballs.webp', alt: 'Team building' },
    { category: 'gathering', image: 'assets/img/galeri/gathering-paintball.webp', alt: 'Gathering' },
    { category: 'outbound', image: 'assets/img/galeri/vendor-outbounds-paintball.webp', alt: 'Outbound' },
    { category: 'paintball', image: 'assets/img/galeri/manfaatnya-paintball.webp', alt: 'Paintball action' },
    { category: 'adventure', image: 'assets/img/galeri/advantures-paintball.webp', alt: 'Adventure' },
    { category: 'team-building', image: 'assets/img/galeri/teams-corporate-paintball.webp', alt: 'Team collaboration' },
    { category: 'gathering', image: 'assets/img/hero-paintball.webp', alt: 'Gathering event' },
    { category: 'outbound', image: 'assets/img/galeri/paket-outbounds-paintball.webp', alt: 'Outdoor activity' },
    { category: 'adventure', image: 'assets/img/paintball-action.webp', alt: 'Adventure activity' },
    { category: 'paintball', image: 'assets/img/team-paintball.webp', alt: 'Paintball team' },
    { category: 'team-building', image: 'assets/img/galeri/teams-building-paintball.webp', alt: 'Team workshop' }
];

const testimonialData = [
    { text: '"Kegiatan Paintball bersama Paintball Batu Malang sangat seru! Peralatan sangat aman dan instruktur memberikan panduan dengan jelas. Tim kami jadi semakin kompak berkat simulasi pertempuran ini."', name: 'Budi Santoso', role: 'HRD Manager PT Maju Mundur', initial: 'B' },
    { text: '"Pengalaman luar biasa bermain paintball di hutan pinus Batu. Suasananya sejuk dan permainannya menantang adrenalin. Sangat recommended untuk gathering perusahaan!"', name: 'Siti Aminah', role: 'Staff Operasional', initial: 'S' },
    { text: '"Fasilitas lengkap, pelayanan profesional, dan skenario permainannya sangat mendukung untuk team building. Semua peserta pulang dengan perasaan gembira dan lebih solid."', name: 'Andi Pratama', role: 'Ketua Komunitas Malang', initial: 'A' }
];

const blogData = [
    { category: 'Paintball', title: 'Mengapa Paintball Cocok untuk Team Building Perusahaan', excerpt: 'Paintball bukan sekadar permainan, tetapi aktivitas yang melatih strategi, komunikasi, dan kekompakan tim dalam suasana outdoor yang seru.', image: 'assets/img/paket-corporate-gathering.webp', date: '20 Sep 2026', readTime: '5 min', link: 'mengapa-paintball-cocok-untuk-team-building-perusahaan.html' },
    { category: 'Outbound', title: 'Manfaat Outbound untuk Pengembangan Tim', excerpt: 'Outbound menjadi salah satu metode efektif untuk meningkatkan komunikasi, kepercayaan, dan kolaborasi antar anggota tim.', image: 'assets/img/team-paintball.webp', date: '18 Sep 2026', readTime: '4 min', link: 'manfaat-outbound-untuk-pengembangan-tim.html' },
    { category: 'Team Building', title: '7 Tips Merancang Kegiatan Team Building yang Efektif', excerpt: 'Team building yang baik harus dirancang berdasarkan tujuan acara, karakter peserta, dan kebutuhan perusahaan.', image: 'assets/img/team-building-paintsball.webp', date: '15 Sep 2026', readTime: '6 min', link: 'tips-merancang-kegiatan-team-building-yang-efektif.html' }
];

const faqData = [
    { q: 'Apa saja program yang tersedia?', a: 'Paintball Batu Malang menyediakan berbagai program outdoor seperti paintball, team building, corporate gathering, outbound, family gathering, outdoor adventure, camping, hingga custom outdoor event. Setiap program dapat disesuaikan dengan kebutuhan acara Anda.' },
    { q: 'Apakah program bisa disesuaikan dengan kebutuhan perusahaan?', a: 'Ya, seluruh program kami bersifat fleksibel dan dapat disesuaikan dengan jumlah peserta, tujuan kegiatan, durasi, lokasi, serta kebutuhan spesifik perusahaan atau kelompok Anda.' },
    { q: 'Apakah Paintball Batu Malang melayani corporate gathering?', a: 'Ya, kami melayani corporate gathering untuk perusahaan dan instansi dengan konsep outdoor yang dapat disesuaikan dengan tujuan kegiatan perusahaan.' },
    { q: 'Apakah tersedia program team building?', a: 'Tersedia. Program team building kami dirancang untuk membangun komunikasi, kolaborasi, strategi, dan kekompakan tim melalui berbagai aktivitas outdoor.' },
    { q: 'Apakah lokasi kegiatan bisa disesuaikan?', a: 'Ya, lokasi kegiatan dapat disesuaikan dengan karakter program dan kebutuhan acara. Kami dapat berdiskusi mengenai lokasi yang paling sesuai.' },
    { q: 'Apakah bisa membuat program custom?', a: 'Bisa. Kami menerima permintaan program custom yang dirancang khusus sesuai kebutuhan acara, jumlah peserta, dan tujuan kegiatan Anda.' },
    { q: 'Berapa jumlah peserta yang dapat mengikuti kegiatan?', a: 'Jumlah peserta dapat disesuaikan dengan jenis program dan konsep acara. Silakan konsultasikan kebutuhan Anda untuk mendapatkan rekomendasi yang paling sesuai.' }
];

const faqProgramData = [
    { q: 'Apakah peralatan disediakan?', a: 'Ya, seluruh peralatan disediakan. Detail peralatan akan dijelaskan saat konsultasi program.' },
    { q: 'Apakah ada briefing keselamatan sebelum kegiatan?', a: 'Ya, setiap sesi diawali dengan briefing keselamatan dan panduan penggunaan peralatan oleh fasilitator.' },
    { q: 'Apakah program cocok untuk pemula?', a: 'Ya, program kami dirancang untuk berbagai level peserta, termasuk pemula. Fasilitator akan memberikan panduan lengkap.' },
    { q: 'Apakah bisa dikombinasikan dengan program lain?', a: 'Bisa. Setiap program dapat dikombinasikan dengan program lainnya untuk konsep acara yang lebih lengkap.' }
];

const categories = ['Paintball', 'Outbound', 'Team Building', 'Gathering', 'Camping', 'Corporate Event', 'Destinasi'];

const galleryCategories = [
    { id: 'all', label: 'Semua' },
    { id: 'paintball', label: 'Paintball' },
    { id: 'team-building', label: 'Team Building' },
    { id: 'gathering', label: 'Gathering' },
    { id: 'outbound', label: 'Outbound' },
    { id: 'adventure', label: 'Adventure' }
];

// ============ RENDER FUNCTIONS ============

function renderKeunggulan() {
    const grid = document.getElementById('keunggulanGrid');
    if (!grid) return;
    grid.innerHTML = keunggulanData.map(item => `
        <div class="col-lg-3 col-md-6">
            <div class="keunggulan-card">
                <div class="keunggulan-number">${item.number}</div>
                <div class="keunggulan-icon"><i class="bi ${item.icon}"></i></div>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderProgramCards(containerId, showAll = false) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    const data = showAll ? programData : programData.slice(0, 6);
    grid.innerHTML = data.map(item => `
        <div class="col-lg-4 col-md-6">
            <div class="program-card">
                <div class="program-card-img">
                    <img src="${item.image}" alt="${item.title} di Batu Malang" loading="lazy" width="800" height="600">
                </div>
                <div class="program-card-body">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                    <a href="${item.link}" class="btn btn-outline-brand w-100 mt-auto">Lihat Program <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCorporateBenefits() {
    const grid = document.getElementById('corporateBenefits');
    if (!grid) return;
    grid.innerHTML = corporateBenefits.map(item => `
        <div class="col-6 col-md-6">
            <div class="benefit-card">
                <div class="benefit-icon"><i class="bi ${item.icon}"></i></div>
                <h5>${item.title}</h5>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderProses() {
    const grid = document.getElementById('prosesGrid');
    if (!grid) return;
    grid.innerHTML = prosesData.map(item => `
        <div class="col-6 col-md-6 col-lg-3">
            <div class="proses-card">
                <div class="proses-number">${item.number}</div>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderDestinasi() {
    const grid = document.getElementById('destinasiGrid');
    if (!grid) return;
    grid.innerHTML = destinasiData.map(item => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="destinasi-card">
                <img src="${item.image}" alt="Destinasi ${item.name}" loading="lazy" width="800" height="600">
                <div class="destinasi-overlay">
                    <h5>${item.name}</h5>
                </div>
            </div>
        </div>
    `).join('');
}

function renderGalleryFilter(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = galleryCategories.map((cat, i) => `
        <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${cat.id}">${cat.label}</button>
    `).join('');
}

function renderGallery(containerId, filter = 'all') {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    let filtered = filter === 'all' ? galleryData : galleryData.filter(g => g.category === filter);
    let colClass = "col-6 col-sm-6 col-md-4 col-lg-3";

    if (containerId === 'galeriGrid') {
        filtered = filtered.slice(0, 6);
        colClass = "col-6 col-md-4";
    }

    grid.innerHTML = filtered.map(item => `
        <div class="${colClass} gallery-col" data-category="${item.category}">
            <div class="gallery-item" data-image="${item.image}" data-alt="${item.alt}">
                <img src="${item.image}" alt="${item.alt}" loading="lazy" width="800" height="600">
            </div>
        </div>
    `).join('');
    attachGalleryClicks();
}

function attachGalleryClicks() {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const lightboxImg = document.getElementById('lightboxImage');
            if (lightboxImg) {
                lightboxImg.src = item.dataset.image;
                lightboxImg.alt = item.dataset.alt;
                const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
                modal.show();
            }
        });
    });
}

function renderTestimonial() {
    const grid = document.getElementById('testimonialGrid');
    if (!grid) return;
    grid.innerHTML = testimonialData.map(item => `
        <div class="col-10 col-md-6 col-lg-4 flex-shrink-0">
            <div class="testimonial-card">
                <p class="testimonial-text">${item.text}</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">${item.initial}</div>
                    <div>
                        <p class="testimonial-name">${item.name}</p>
                        <p class="testimonial-role">${item.role}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderBlogCards(containerId, limit = null) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    const data = limit ? blogData.slice(0, limit) : blogData;
    grid.innerHTML = data.map(item => `
        <div class="col-lg-4 col-md-6">
            <article class="blog-card">
                <div class="blog-card-img">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" width="800" height="600">
                </div>
                <div class="blog-card-body">
                    <span class="blog-category">${item.category}</span>
                    <h4><a href="${item.link || '#'}">${item.title}</a></h4>
                    <p class="blog-excerpt">${item.excerpt}</p>
                    <div class="blog-meta">
                        <span><i class="bi bi-calendar3 me-1"></i>${item.date}</span>
                        <a href="${item.link || '#'}" class="blog-read-more">Read more <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </article>
        </div>
    `).join('');
}

function renderBlogFeatured() {
    const container = document.getElementById('blogFeatured');
    if (!container || blogData.length === 0) return;
    const item = blogData[0];
    container.innerHTML = `
        <div class="row g-0">
            <div class="col-md-5">
                <div class="blog-featured-img">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" width="800" height="600">
                </div>
            </div>
            <div class="col-md-7">
                <div class="blog-featured-body">
                    <span class="blog-category">${item.category}</span>
                    <h3><a href="${item.link || '#'}">${item.title}</a></h3>
                    <p class="blog-excerpt">${item.excerpt}</p>
                    <div class="blog-meta">
                        <span><i class="bi bi-calendar3 me-1"></i>${item.date}</span>
                        <a href="${item.link || '#'}" class="blog-read-more">Read more <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderCategoryList() {
    const list = document.getElementById('categoryList');
    if (!list) return;
    list.innerHTML = categories.map(cat => `
        <li><a href="#"><span>${cat}</span> <span>(${Math.floor(Math.random() * 8) + 1})</span></a></li>
    `).join('');
}

function renderFAQ(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map((item, i) => `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button ${i === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faq-${containerId}-${i}">
                    ${item.q}
                </button>
            </h2>
            <div id="faq-${containerId}-${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}" data-bs-parent="#${containerId}">
                <div class="accordion-body">${item.a}</div>
            </div>
        </div>
    `).join('');
}

// ============ EVENT HANDLERS ============

function initFilterButtons() {
    document.querySelectorAll('.gallery-filter').forEach(filterContainer => {
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                const filter = e.target.dataset.filter;
                const gridId = filterContainer.id === 'galleryFilter' ? 'galeriGrid' : 'galeriGridFull';
                renderGallery(gridId, filter);
            }
        });
    });
}

function initNavbarScroll() {
    const navbar = document.getElementById('mainNavbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initBlogSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (!searchInput || !searchBtn) return;
    
    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        const grid = document.getElementById('blogGridFull');
        if (!grid) return;
        
        const featured = document.getElementById('blogFeatured');
        const desktopTitle = document.getElementById('desktopBlogTitle');
        const pagination = document.getElementById('blogPagination');
        
        if (query) {
            if (featured) featured.style.display = 'none';
            if (desktopTitle) desktopTitle.style.display = 'none';
            if (pagination) pagination.style.setProperty('display', 'none', 'important');
            
            const filtered = blogData.filter(item => item.title.toLowerCase().includes(query) || item.excerpt.toLowerCase().includes(query) || item.category.toLowerCase().includes(query));
            
            if (filtered.length === 0) {
                grid.innerHTML = '<div class="col-12 text-center py-5"><p>Artikel tidak ditemukan.</p></div>';
            } else {
                grid.innerHTML = filtered.map(item => `
        <div class="col-lg-4 col-md-6">
            <article class="blog-card">
                <div class="blog-card-img">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" width="800" height="600">
                </div>
                <div class="blog-card-body">
                    <span class="blog-category">${item.category}</span>
                    <h4><a href="${item.link || '#'}">${item.title}</a></h4>
                    <p class="blog-excerpt">${item.excerpt}</p>
                    <div class="blog-meta">
                        <span><i class="bi bi-calendar3 me-1"></i>${item.date}</span>
                        <a href="${item.link || '#'}" class="blog-read-more">Read more <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </article>
        </div>
    `).join('');
            }
        } else {
            if (featured) featured.style.display = 'block';
            if (desktopTitle) desktopTitle.style.display = '';
            if (pagination) {
                if (blogData.length > 6) {
                    pagination.style.display = 'flex';
                } else {
                    pagination.style.setProperty('display', 'none', 'important');
                }
            }
            renderBlogCards('blogGridFull');
        }
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// ============ INIT ============

document.addEventListener('DOMContentLoaded', () => {
    // Homepage
    renderKeunggulan();
    renderProgramCards('programGrid');
    renderCorporateBenefits();
    renderProses();
    renderDestinasi();
    // renderGalleryFilter('galleryFilter');
    renderGallery('galeriGrid');
    renderTestimonial();
    renderBlogCards('blogGrid', 3);
    renderFAQ('faqAccordion', faqData.slice(0, 5));

    // Program page
    renderProgramCards('programListGrid', true);

    // Galeri page
    renderGalleryFilter('galleryFilterFull');
    renderGallery('galeriGridFull');

    // Blog page
    renderBlogFeatured();
    renderBlogCards('blogGridFull');
    renderCategoryList();

    // Blog pagination logic
    const pagination = document.getElementById('blogPagination');
    if (pagination) {
        if (blogData.length > 6) {
            pagination.style.display = 'flex';
        } else {
            pagination.style.display = 'none';
        }
    }

    // Program detail FAQ
    renderFAQ('faqProgram', faqProgramData);

    // Event handlers
    initFilterButtons();
    initNavbarScroll();
    initSmoothScroll();
    initScrollToTop();
    initBlogSearch();
});
