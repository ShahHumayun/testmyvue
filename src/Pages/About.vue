<template>
  <div :class="['about-page-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="bg-overlay">
      <div 
        class="bg-grid-lines"
        :style="{ transform: `translate(${parallax.bgX}px, ${parallax.bgY}px)` }"
      ></div>
    </div>

    <header class="navbar">
      <div class="company-branding">
        <span class="status-dot"></span>
        <span class="brand-text">WebHive Technologies</span>
      </div>

      <div class="nav-actions">
        <router-link to="/consultation" class="consult-btn">
          Consultation
        </router-link>

        <button 
          @click="isDarkMode = !isDarkMode"
          class="theme-toggle"
          aria-label="Toggle Theme"
        >
          <div 
            class="toggle-thumb"
            :class="{ 'toggle-active': isDarkMode }"
          >
            <span class="toggle-icon">{{ isDarkMode ? '🌙' : '☀️' }}</span>
          </div>
        </button>

        <button 
          @click="toggleMenu" 
          class="menu-trigger"
          :class="{ 'menu-active': isMenuOpen }"
        >
          <span class="burger-line line-top"></span>
          <span class="burger-line line-mid"></span>
          <span class="burger-line line-bot"></span>
        </button>
      </div>
    </header>

    <Transition @enter="onMenuEnter" @leave="onMenuLeave" :css="false">
      <div v-if="isMenuOpen" class="nav-overlay">
        <nav class="nav-links-container">
          <div 
            v-for="(item, index) in menuItems" 
            :key="item"
            class="menu-item-wrap"
          >
            <span class="menu-index">0{{ index + 1 }}</span>
            <router-link 
              :to="'/' + item.toLowerCase()" 
              @click="toggleMenu" 
              class="menu-link"
            >
              {{ item }}
            </router-link>
          </div>

          <div class="menu-item-wrap overlay-btn-item">
            <span class="menu-index">0{{ menuItems.length + 1 }}</span>
            <router-link to="/consultation" class="consult-btn-overlay">
              Consultation
            </router-link>
          </div>
        </nav>
      </div>
    </Transition>

    <main class="about-hero">
      <div class="ambient-glow"></div>

      <div class="hero-content-block">
        <span class="section-tag animate-fade-in">Innovative Digital Agency</span>
        <h1 class="about-title animate-title">
  We Design The <br><span class="highlight-text">Digital Future.</span>
</h1>
        
        <p class="about-subtitle animate-fade-in">
          From concept to deployment, we combine stunning UI/UX design with high-performance engineering to build web platforms and mobile applications that grow businesses.
        </p>

        <div class="cta-button-group animate-fade-in">
          <button @click="scrollToWork" class="btn-our-work">
            Our Work
          </button>
          <router-link to="/consultation" class="btn-start-project">
            Start a Project
          </router-link>
        </div>
      </div>
    </main>

    <section class="services-section">
      <div class="section-header animate-scroll-element">
        <span class="mini-title">Expertise</span>
        <h2 class="section-main-heading">What We Do Best</h2>
      </div>

      <div class="services-grid">
        <div class="service-card animate-scroll-element">
          <div class="service-icon">🎨</div>
          <h3>Web Designing</h3>
          <p>Immersive, responsive, and strategic user experiences designed to maximize engagement and align beautifully with your brand identity.</p>
        </div>
        <div class="service-card animate-scroll-element">
          <div class="service-icon">💻</div>
          <h3>Web Development</h3>
          <p>Clean, efficient, and scalable code bases built using cutting-edge frameworks. Fast, reliable, and secure enterprise solutions.</p>
        </div>
        <div class="service-card animate-scroll-element">
          <div class="service-icon">📱</div>
          <h3>App Development</h3>
          <p>Native and cross-platform mobile apps built with seamless functionality, fluid gesture animations, and continuous cloud integrations.</p>
        </div>
      </div>
    </section>

    <section id="our-work-showcase" ref="workSection" class="work-showcase-section">
      <div class="section-header">
        <span class="mini-title">Portfolio</span>
        <h2 class="showcase-heading">Featured Projects</h2>
        <p class="showcase-subheading">Take a look at some of our production-ready web and mobile ecosystems.</p>
      </div>

      <div class="showcase-grid">
        <div v-for="(project, idx) in projects" :key="idx" class="project-card">
          <div class="project-image-wrapper">
            <img :src="project.image" :alt="project.name" class="project-img" />
            <div class="image-tint-overlay"></div>
          </div>
          <div class="card-inner">
            <div class="card-meta">
              <span class="project-type">{{ project.type }}</span>
              <span class="project-tag-dot"></span>
            </div>
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tech-stack">
              <span v-for="tech in project.stack" :key="tech" class="tech-pill">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-screenshot-section">
      <div class="contact-container">
        <h2 class="contact-title">Let's Get In Touch!</h2>
        <div class="title-underline"></div>
        <p class="contact-subtitle">
          Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!
        </p>

        <div class="contact-links-grid">
          <a href="tel:00923335499639" class="contact-item-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
            <span class="contact-detail">0092-333-5499639</span>
          </a>

          <a href="skype:atiq_ur_rehman?chat" class="contact-item-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12.022 2c-1.895 0-3.666.522-5.187 1.428C5.23 3.161 3.491 4.887 3.17 6.471a10.016 10.016 0 0 0-1.418 5.111c0 1.884.517 3.648 1.413 5.163.308 1.632 2.029 3.398 3.655 3.693a10.003 10.003 0 0 0 5.16 1.428c1.896 0 3.668-.521 5.188-1.426 1.608.267 3.346-1.458 3.668-3.044.912-1.521 1.432-3.3 1.432-5.195 0-1.883-.517-3.647-1.413-5.161-.308-1.631-2.029-3.398-3.654-3.694A9.998 9.998 0 0 0 12.022 2zm.043 14.888c-2.617 0-4.303-1.282-4.303-2.915 0-.793.611-1.31 1.341-1.31.954 0 1.15.513 1.581 1.111.456.634 1.011.97 1.498.97.635 0 1.1-.318 1.1-.877 0-.523-.314-.775-1.267-1.168-1.547-.589-2.924-1.214-2.924-2.887 0-1.624 1.472-2.83 3.864-2.83 2.112 0 3.844 1.083 3.844 2.541 0 .748-.544 1.252-1.244 1.252-.843 0-1.077-.449-1.413-.962-.4-.607-.852-.841-1.3-.841-.54 0-.878.271-.878.747 0 .495.346.738 1.234 1.084 1.701.626 2.972 1.289 2.972 2.935-.001 1.776-1.594 3.152-4.129 3.152z"/></svg>
            </div>
            <span class="contact-detail">atiq_ur_rehman</span>
          </a>

          <a href="https://wa.me/00923335499639" target="_blank" class="contact-item-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.454L0 24zm6.59-4.846c1.666.988 3.31 1.489 5.353 1.49 5.383 0 9.765-4.381 9.768-9.764.002-2.607-1.011-5.059-2.854-6.904C16.97 2.13 14.522.921 11.914.921c-5.387 0-9.769 4.382-9.77 9.764-.001 2.148.57 3.864 1.642 5.4l-.994 3.633 3.731-.979zM17.8 14.532c-.3-.15-1.77-.874-2.044-.973-.274-.1-.474-.15-.674.15-.2.3-.774.973-.949 1.173-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.89-.794-1.49-1.774-1.665-2.074-.175-.3-.019-.462.13-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.623-.924-2.223-.244-.587-.49-.508-.674-.518-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.106 3.216 5.1 4.51.714.309 1.272.493 1.707.632.717.228 1.368.196 1.883.119.574-.085 1.77-.724 2.02-1.387.25-.663.25-1.229.175-1.349-.075-.12-.275-.22-.575-.37z"/></svg>
            </div>
            <span class="contact-detail">0092-333-5499639</span>
          </a>

          <a href="mailto:atiq@web-hive.com" class="contact-item-card email-highlight">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <span class="contact-detail text-blue">atiq@web-hive.com</span>
          </a>
        </div>
      </div>
    </section>

    <footer class="footer-group">
      <div class="copyright-section">
        <p>&copy; {{ new Date().getFullYear() }} WebHive Technologies. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const workSection = ref(null)

const menuItems = ['About', 'Services', 'Portfolio', 'Culture', 'Studio', 'Contact']

const projects = ref([
  { 
    name: 'Pinnacle Cart Development', 
    type: 'Web Solution', 
    desc: 'An ultra-optimized e-commerce storefront engineered for seamless customer journeys, scalable inventories, and lightning-fast checkout processing.', 
    stack: ['Vue.js', 'E-Commerce', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'My Expense Tracker', 
    type: 'App Solution', 
    desc: 'A sleek cross-platform React Native mobile dashboard offering fluid transaction filtering, cloud sync architectures, and gesture-driven layout analytics.', 
    stack: ['React Native', 'JavaScript', 'Context API'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
])

const parallax = reactive({
  rotateX: 0,
  rotateY: 0,
  bgX: 0,
  bgY: 0
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window

  const xWeight = (clientX / innerWidth) - 0.5
  const yWeight = (clientY / innerHeight) - 0.5

  parallax.rotateY = xWeight * 12
  parallax.rotateX = yWeight * -12

  parallax.bgX = xWeight * -20
  parallax.bgY = yWeight * -20
}

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }

const scrollToWork = () => {
  if (workSection.value) {
    workSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  gsap.fromTo('.animate-title', 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
  )

  gsap.fromTo('.animate-fade-in', 
    { opacity: 0, y: 25 }, 
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
  )

  gsap.from('.services-grid .service-card', {
    scrollTrigger: {
      trigger: '.services-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  })

  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '#our-work-showcase',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.contact-item-card', {
    scrollTrigger: {
      trigger: '.contact-screenshot-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const onMenuEnter = (el, done) => {
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' })
  gsap.fromTo(el.querySelectorAll('.menu-link, .consult-btn-overlay'), 
    { yPercent: 100 }, 
    { yPercent: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', delay: 0.1, onComplete: done }
  )
}

const onMenuLeave = (el, done) => {
  gsap.to(el.querySelectorAll('.menu-link, .consult-btn-overlay'), { yPercent: -100, duration: 0.4, stagger: 0.03, ease: 'power3.in' })
  gsap.to(el, { opacity: 0, duration: 0.4, ease: 'power2.in', delay: 0.15, onComplete: done })
}
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
  overflow-y: auto !important;
  height: auto !important;
}
:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  height: auto !important;
  width: 100% !important;
}

.about-page-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  width: 100%;
  min-height: 100vh;
  position: relative;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  overflow-x: hidden;
}

.about-page-wrapper *,
.about-page-wrapper *::before,
.about-page-wrapper *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.theme-dark { background-color: #0b0c10; color: #ffffff; }
.theme-light { background-color: #f4f6f9; color: #0f172a; }

.bg-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  pointer-events: none;
  overflow: hidden;
}
.bg-grid-lines {
  position: absolute;
  inset: -40px;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  background-size: 40px 40px;
}
.theme-dark .bg-grid-lines {
  background-image: 
    linear-gradient(to right, rgba(0, 255, 163, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 163, 0.04) 1px, transparent 1px);
}
.theme-light .bg-grid-lines {
  background-image: 
    linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px);
}

/* ----------------------------------------- */
/* NAVBAR DESIGN SYSTEM (From Home.vue)       */
/* ----------------------------------------- */

.navbar {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: clamp(10px, 2vw, 22px) clamp(14px, 4vw, 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  min-height: 0;
  flex-shrink: 0;
}

.company-branding {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex-shrink: 1;
  overflow: hidden;
}

.brand-text {
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: clamp(12px, 1vw, 14px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.7));
  -webkit-background-clip: text;
  background-clip: text;
  transition: color var(--transition-speed);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.theme-light .brand-text {
  background: none;
  color: #0f172a;
}

.status-dot {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  background-color: var(--brand-accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--brand-accent);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .4; transform: scale(0.9); }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.5vw, 20px);
  flex-shrink: 0;
}

.consult-btn {
  text-decoration: none;
  display: inline-block;
  background-color: var(--brand-accent);
  color: #0f172a;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
  padding: 10px 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  white-space: nowrap;
}
@media (max-width: 480px) {
  .consult-btn { display: none; }
}
.consult-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 255, 163, 0.3);
}
.consult-btn:active { transform: translateY(0); }

.theme-toggle {
  width: 40px;
  height: 22px;
  border-radius: 9999px;
  padding: 3px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: #cbd5e1;
  transition: background-color 0.3s;
  flex-shrink: 0;
}
@media (max-width: 480px) {
  .theme-toggle { width: 34px; height: 18px; padding: 2px; }
}
.theme-dark .theme-toggle {
  background-color: rgba(0, 255, 163, 0.1);
  border: 1px solid rgba(0, 255, 163, 0.2);
}
.toggle-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #fbbf24;
}
.toggle-active {
  transform: translateX(18px);
  background-color: #111827;
  border: 1px solid var(--brand-accent);
}
@media (max-width: 480px) {
  .toggle-thumb { width: 13px; height: 13px; }
  .toggle-active { transform: translateX(15px); }
}
.toggle-icon {
  font-size: 9px;
  user-select: none;
}

.menu-trigger {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border: none;
  z-index: 55;
  transition: background-color 0.3s, border-color 0.3s;
  flex-shrink: 0;
}
@media (max-width: 480px) {
  .menu-trigger { width: 30px; height: 30px; gap: 3px; }
}
.theme-dark .menu-trigger {
  background-color: rgba(24, 24, 27, 0.8);
  border: 1px solid #27272a;
}
.theme-light .menu-trigger {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
}
.burger-line {
  height: 1.5px;
  width: 15px;
  transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
}
.theme-dark .burger-line { background-color: #ffffff; }
.theme-light .burger-line { background-color: #0f172a; }

.menu-active .line-top { transform: translateY(5px) rotate(45deg); background-color: var(--brand-accent) !important; }
.menu-active .line-mid { opacity: 0; }
.menu-active .line-bot { transform: translateY(-5px) rotate(-45deg); background-color: var(--brand-accent) !important; }

/* ----------------------------------------- */
/* NAVIGATION OVERLAY PANEL (From Home.vue)  */
/* ----------------------------------------- */
.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  width: 100%;
  height: 100dvh;
  overflow: hidden !important;
  padding: clamp(24px, 5vh, 48px) clamp(20px, 6vw, 48px);
  padding-top: max(clamp(24px, 5vh, 48px), env(safe-area-inset-top));
  padding-bottom: max(clamp(24px, 5vh, 48px), env(safe-area-inset-bottom));
}
.theme-dark .nav-overlay { background-color: rgba(11, 12, 16, 0.96); }
.theme-light .nav-overlay { background-color: rgba(255, 255, 255, 0.96); }

.nav-links-container {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 2.5vh, 24px);
  width: 100%;
  max-width: 800px;
}

.menu-item-wrap { overflow: hidden; display: flex; align-items: center; }
.overlay-btn-item { margin-top: clamp(4px, 1vh, 12px); }
.menu-index {
  font-family: monospace;
  font-size: clamp(12px, 1.5vw, 14px);
  color: var(--brand-accent);
  min-width: clamp(28px, 5vw, 42px);
  margin-right: clamp(12px, 3vw, 28px);
  letter-spacing: 0.15em;
  opacity: 0.7;
  flex-shrink: 0;
}
.menu-link {
  font-size: clamp(1.1rem, 3vw, 2.2rem);
  font-weight: 900;
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.3s, transform 0.3s;
  display: inline-block;
  line-height: 1.1;
  word-break: break-word;
}
.theme-dark .menu-link { color: #ffffff; }
.theme-light .menu-link { color: #0f172a; }
.menu-link:hover { color: var(--brand-accent); }

.consult-btn-overlay {
  text-decoration: none;
  background-color: var(--brand-accent);
  color: #0f172a;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  font-size: clamp(1rem, 3.5vw, 1.8rem);
  padding: clamp(8px, 1.5vw, 12px) clamp(20px, 4vw, 32px);
  cursor: pointer;
  display: inline-block;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;
  white-space: nowrap;
}
.consult-btn-overlay:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 163, 0.4);
}

@media (min-width: 1024px) {
  .nav-overlay {
    align-items: center;
    padding-left: clamp(80px, 10vw, 180px);
    justify-content: flex-start;
  }
}

@media (max-height: 500px) and (orientation: landscape) {
  .menu-link { font-size: clamp(1.2rem, 4.5vw, 2rem); }
  .nav-links-container { gap: clamp(4px, 1.2vh, 10px); }
  .menu-index { font-size: 11px; }
  .consult-btn-overlay {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    padding: 6px clamp(14px, 2.5vw, 24px);
  }
}

/* ----------------------------------------- */
/* MAIN HERO BLOCK SECTION                   */
/* ----------------------------------------- */
.about-hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 140px clamp(16px, 5vw, 60px) 80px; position: relative; z-index: 10; }
.ambient-glow { position: absolute; width: min(600px, 80vw); height: min(600px, 80vw); background-color: var(--brand-accent); border-radius: 50%; filter: blur(150px); opacity: 0.12; pointer-events: none; }
.theme-light .ambient-glow { opacity: 0.2; background-color: #a7f3d0; }

.hero-content-block { text-align: center; max-width: 940px; width: 100%; }
.section-tag { font-family: monospace; font-size: 13px; text-transform: uppercase; letter-spacing: 0.25em; color: var(--brand-accent); display: inline-block; margin-bottom: 24px; }

.about-title { font-size: clamp(2.4rem, 7.5vw, 6rem); font-weight: 950; line-height: 1.1; text-transform: uppercase; letter-spacing: -0.03em; margin-bottom: 28px; color: #ffffff; }
.theme-light .about-title { color: #0f172a; }

.highlight-text { background: linear-gradient(135deg, #ffffff 20%, var(--brand-accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.theme-light .highlight-text { background: linear-gradient(135deg, #0f172a 40%, #059669 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.about-subtitle { font-size: clamp(16px, 2vw, 20px); line-height: 1.6; max-width: 700px; margin: 0 auto 44px; color: rgba(255, 255, 255, 0.65); }
.theme-light .about-subtitle { color: #475569; }

.cta-button-group { display: flex; align-items: center; justify-content: center; gap: 20px; }
@media (max-width: 540px) { .cta-button-group { flex-direction: column; width: 100%; } }

.btn-our-work { background-color: #000000; color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.15); padding: 18px 38px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; cursor: pointer; border-radius: 4px; transition: color 0.3s, border-color 0.3s, transform 0.2s; width: auto; }
.btn-our-work:hover { color: var(--brand-accent); border-color: var(--brand-accent); transform: translateY(-2px); }

.btn-start-project { text-decoration: none; background-color: #ffffff; color: #0b0c10; border: 1px solid transparent; padding: 18px 38px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 4px; transition: background-color 0.3s, color 0.3s, transform 0.2s; }
@media (max-width: 540px) { .btn-start-project { width: 100%; text-align: center; } .btn-our-work { width: 100%; } }
.theme-light .btn-start-project { background-color: #0f172a; color: #ffffff; }
.btn-start-project:hover { background-color: var(--brand-accent); color: #0b0c10; transform: translateY(-2px); }

/* ----------------------------------------- */
/* THREE-COLUMN SERVICE SECTION              */
/* ----------------------------------------- */
.services-section { padding: 80px clamp(16px, 5vw, 60px); max-width: 1400px; margin: 0 auto; position: relative; z-index: 10; }
.mini-title { font-family: monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; color: var(--brand-accent); display: block; margin-bottom: 8px; }
.theme-light .mini-title { color: #059669; font-weight: 600; }
.section-main-heading { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; margin-bottom: 48px; text-transform: uppercase; }

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.service-card { padding: 40px; border-radius: 6px; background-color: rgba(255, 255, 255, 0.01); border: 1px solid rgba(255, 255, 255, 0.04); }
.theme-light .service-card { background-color: #ffffff; border-color: rgba(15, 23, 42, 0.06); box-shadow: 0 4px 20px rgba(15, 23, 42, 0.01); }
.service-icon { font-size: 32px; margin-bottom: 20px; }
.service-card h3 { font-size: 20px; font-weight: 800; margin-bottom: 12px; }
.service-card p { font-size: 14px; line-height: 1.6; color: rgba(255, 255, 255, 0.6); }
.theme-light .service-card p { color: #475569; }

/* ----------------------------------------- */
/* PORTFOLIO GRID SIZING & ALIGNMENT         */
/* ----------------------------------------- */
.work-showcase-section { padding: 80px clamp(16px, 5vw, 60px) 100px; max-width: 1400px; margin: 0 auto; position: relative; z-index: 10; }
.showcase-heading { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; margin-bottom: 12px; text-transform: uppercase; }
.showcase-subheading { font-size: 16px; color: rgba(255, 255, 255, 0.5); margin-bottom: 54px; }
.theme-light .showcase-subheading { color: #64748b; }

.showcase-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr)); 
  gap: 32px; 
  align-items: stretch; 
}

.project-card { 
  display: flex;
  flex-direction: column;
  border-radius: 8px; 
  background-color: rgba(255, 255, 255, 0.02); 
  border: 1px solid rgba(255, 255, 255, 0.05); 
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s; 
  overflow: hidden; 
}
.theme-light .project-card { background-color: #ffffff; border-color: rgba(15, 23, 42, 0.06); }
.project-card:hover { transform: translateY(-6px); border-color: var(--brand-accent); }

.project-image-wrapper { position: relative; width: 100%; height: 260px; overflow: hidden; background-color: rgba(0,0,0,0.1); }
.project-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.project-card:hover .project-img { transform: scale(1.03); }
.image-tint-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, rgba(11, 12, 16, 0.3)); pointer-events: none; }

.card-inner { padding: 32px; display: flex; flex-direction: column; flex-grow: 1; }
.card-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.project-type { font-family: monospace; font-size: 12px; text-transform: uppercase; color: var(--brand-accent); letter-spacing: 0.05em; }
.theme-light .project-type { color: #059669; font-weight: 600; }
.project-tag-dot { width: 6px; height: 6px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; }

.project-title { font-size: 22px; font-weight: 800; margin-bottom: 12px; line-height: 1.3; }
.project-desc { font-size: 14px; line-height: 1.6; color: rgba(255, 255, 255, 0.6); margin-bottom: 28px; flex-grow: 1; }
.theme-light .project-desc { color: #475569; }

.project-tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; }
.tech-pill { font-family: monospace; font-size: 11px; padding: 4px 10px; background-color: rgba(255, 255, 255, 0.04); border-radius: 4px; color: rgba(255, 255, 255, 0.8); }
.theme-light .tech-pill { background-color: #f1f5f9; color: #334155; }

/* ----------------------------------------- */
/* CONTACT SCREENSHOT SECTION                */
/* ----------------------------------------- */
.contact-screenshot-section { padding: 80px clamp(16px, 5vw, 60px) 100px; position: relative; z-index: 10; width: 100%; }
.contact-container { max-width: 1200px; margin: 0 auto; text-align: center; }
.contact-title { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; letter-spacing: -0.01em; margin-bottom: 12px; }
.title-underline { width: 50px; height: 3px; background-color: #00ffa3; margin: 0 auto; margin-bottom: 28px; }
.contact-subtitle { font-size: clamp(14px, 1.8vw, 17px); line-height: 1.6; max-width: 820px; margin: 0 auto 60px; color: rgba(255, 255, 255, 0.7); }
.theme-light .contact-subtitle { color: #475569; }

.contact-links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; align-items: center; }
.contact-item-card { text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; transition: transform 0.3s ease; padding: 20px; }
.contact-item-card:hover { transform: translateY(-5px); }
.icon-wrapper { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: rgba(255,255,255,0.8); transition: color 0.3s; }
.theme-light .icon-wrapper { color: #334155; }
.icon-wrapper svg { width: 36px; height: 36px; }

.contact-item-card:hover .icon-wrapper { color: var(--brand-accent); }
.contact-detail { font-size: 15px; font-weight: 500; letter-spacing: 0.02em; }

.theme-dark .text-blue { color: #51cbff; }
.theme-light .text-blue { color: #0284c7; }
.contact-item-card:hover .text-blue { color: var(--brand-accent); }

/* ----------------------------------------- */
/* MINIMALIST COPYRIGHT FOOTER               */
/* ----------------------------------------- */
.footer-group { width: 100%; position: relative; z-index: 10; margin-top: auto; }
.copyright-section { width: 100%; text-align: center; padding: 30px 20px; font-size: 11px; letter-spacing: 0.05em; border-top: 1px solid; }
.theme-dark .copyright-section { color: rgba(255, 255, 255, 0.4); background-color: rgba(9, 9, 11, 0.6); border-top-color: rgba(255, 255, 255, 0.05); }
.theme-light .copyright-section { color: rgba(15, 23, 42, 0.5); background-color: rgba(241, 245, 249, 0.6); border-top-color: rgba(15, 23, 42, 0.06); }
</style>