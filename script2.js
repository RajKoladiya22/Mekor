// Optimized JavaScript file
// This combines all inline scripts and the original script.js into one file.

// Custom Cursor Logic
var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + 1 + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 200 + "px";
  cursorBlur.style.top = dets.y - 200 + "px";
});

// Cursor Hover Effects on Navigation
var navh4 = document.querySelectorAll("#nav h6");
navh4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    (cursor.style.scale = 3), (cursor.style.border = "1px solid white");
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    (cursor.style.scale = 1), (cursor.style.border = "0px solid #95c11e ");
    cursor.style.backgroundColor = "#95c11e";
  });
});

// GSAP Animations (Corrected and Simplified)
gsap.to("#main", {
  backgroundColor: "white",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -40%",
    end: "top -80%",
    scrub: 5,
  },
});

gsap.from("#aboutus", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#aboutus",
    scroller: "body",
    start: "top 80%",
    end: "top 70%",
    scrub: 2,
  },
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileProductsBtn = document.getElementById('mobileProductsBtn');
const mobileProductsList = document.getElementById('mobileProductsList');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

hamburgerBtn.addEventListener('click', () => {
  const hamburger = hamburgerBtn.querySelector('.hamburger');
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('hidden');
});

mobileProductsBtn.addEventListener('click', () => {
  const icon = mobileProductsBtn.querySelector('svg');
  icon.style.transform = mobileProductsList.classList.contains('hidden') ? 'rotate(180deg)' : 'rotate(0deg)';
  mobileProductsList.classList.toggle('hidden');
});

// Close mobile menu on resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    mobileMenu.classList.add('hidden');
    hamburgerBtn.querySelector('.hamburger').classList.remove('active');
    mobileProductsList.classList.add('hidden');
  }
});

// Hero Section Animations (Re-implemented with GSAP for consistency)
const heroSection = document.getElementById('HeroSection');
if (heroSection) {
    gsap.from(".hero-title", { opacity: 0, y: 50, duration: 0.8, ease: "power2.out", delay: 0.2 });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 0.8, ease: "power2.out", delay: 0.4 });
    gsap.from(".cta-buttons a", { opacity: 0, y: 50, stagger: 0.2, duration: 0.6, ease: "power2.out", delay: 0.6 });
    gsap.from(".brochure-card", { opacity: 0, scale: 0.9, duration: 0.8, ease: "power2.out", delay: 0.8 });
}

// Product Section Animations (Using IntersectionObserver for efficiency)
const observerOptions = {
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stagger-1, .stagger-2, .stagger-3, .stagger-4, .stagger-5').forEach(el => {
    observer.observe(el);
});

// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formStatus = document.getElementById('formStatus');
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;

  submitButton.innerHTML = `
    <span class="flex items-center justify-center">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    </span>`;
  submitButton.disabled = true;

  setTimeout(() => {
    formStatus.innerHTML = '<span class="text-green-600 flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Message sent successfully! We\'ll get back to you soon.</span>';
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
    this.reset();
    setTimeout(() => {
      formStatus.innerHTML = '';
    }, 5000);
  }, 2000);
});

// Newsletter Form Submission
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('newsletterStatus');
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = `
    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>`;
  submitButton.disabled = true;

  setTimeout(() => {
    status.innerHTML = '<span class="text-green-400 flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Successfully subscribed!</span>';
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
    document.getElementById('emailInput').value = '';
    setTimeout(() => {
      status.innerHTML = '';
    }, 3000);
  }, 1500);
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll progress indicator
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = progress + '%';
}
window.addEventListener('scroll', updateScrollProgress);

// Dynamic year update
document.addEventListener('DOMContentLoaded', function () {
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll('.current-year');
  yearElements.forEach(element => {
    element.textContent = currentYear;
  });
});

// Smooth scroll for anchor links
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

// IntersectionObserver for elements with data-aos
const aosElements = document.querySelectorAll('[data-aos]');
if (aosElements) {
    const aosObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    aosElements.forEach(el => aosObserver.observe(el));
}