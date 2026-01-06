// ========================================
// MOBILE NAVIGATION TOGGLE
// ======================================== 
// Fungsi untuk membuka/menutup menu hamburger di mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle navigation
    nav.classList.toggle('nav-active');
    
    // Animate burger icon
    burger.classList.toggle('toggle');
});

// Menutup menu saat link diklik (untuk mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

// ========================================
// SMOOTH SCROLL
// ======================================== 
// Membuat scroll smooth saat klik link navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// SCROLL ANIMATION FOR PROJECT CARDS
// ======================================== 
// Animasi fade-in untuk project cards saat di-scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Set initial state untuk project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ======================================== 
// Mengubah transparansi navbar saat scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(15, 23, 42, 1)';
    } else {
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    }
});

// ========================================
// DYNAMIC PROJECT CARDS (OPTIONAL)
// ======================================== 
// CARA MENAMBAH PROJECT SECARA DINAMIS MENGGUNAKAN JAVASCRIPT:
// Uncomment kode di bawah ini jika ingin menambah project via JavaScript
// daripada langsung di HTML

/*
const projectsData = [
    {
        icon: '🎮',
        title: 'Gaming Platform',
        description: 'Platform gaming multiplayer dengan real-time chat dan leaderboard system.',
        technologies: ['React', 'Socket.io', 'Express'],
        link: '#'
    },
    // Tambahkan project baru di sini dengan format yang sama
];

function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-icon">${project.icon}</div>
            <h3>${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="tech-stack">
                ${project.technologies.map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
            </div>
            <a href="${project.link}" class="project-link">View Project →</a>
        </div>
    `;
}

// Uncomment baris di bawah untuk render projects secara dinamis
// const projectsGrid = document.getElementById('projectsGrid');
// projectsGrid.innerHTML = projectsData.map(createProjectCard).join('');
*/

// ========================================
// TYPING ANIMATION (OPTIONAL)
// ======================================== 
// Animasi mengetik untuk hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < originalText.length) {
            heroTitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }

    // Mulai animasi setelah halaman load
    setTimeout(typeWriter, 500);
}

// ========================================
// ACTIVE LINK HIGHLIGHT
// ======================================== 
// Highlight link navigasi sesuai section yang aktif
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.style.color = 'var(--text-secondary)';
        if (item.getAttribute('href').slice(1) === current) {
            item.style.color = 'var(--primary-color)';
        }
    });
});

// ========================================
// CONSOLE MESSAGE
// ======================================== 
// Pesan untuk developer yang melihat console
console.log('%c👋 Hai Developer!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cTertarik dengan kode ini? Hubungi saya!', 'color: #764ba2; font-size: 14px;');