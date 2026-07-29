<template>
  <div :class="['about-page-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="bg-overlay">
      <div class="bg-grid-lines" :style="{ transform: `translate(${parallax.bgX}px, ${parallax.bgY}px)` }"></div>
    </div>

    <header class="navbar">
      <a href="#" class="company-branding logo">
        WEBHIVE<span class="dot">.</span>
      </a>

      <div class="nav-actions">
        <router-link to="/consultation" class="consult-btn">
          Consultation
        </router-link>

        <button @click="toggleTheme" class="theme-toggle" aria-label="Toggle Theme">
          <div class="toggle-thumb" :class="{ 'toggle-active': isDarkMode }">
            <span class="toggle-icon">{{ isDarkMode ? '🌙' : '☀️' }}</span>
          </div>
        </button>

        <button @click="toggleMenu" class="menu-trigger" :class="{ 'menu-active': isMenuOpen }">
          <span class="burger-line line-top"></span>
          <span class="burger-line line-mid"></span>
          <span class="burger-line line-bot"></span>
        </button>
      </div>
    </header>

    <Transition @enter="onMenuEnter" @leave="onMenuLeave" :css="false">
      <div v-if="isMenuOpen" class="nav-overlay">
        <nav class="nav-links-container">
          <div v-for="(item, index) in menuItems" :key="item" class="menu-item-wrap">
            <span class="menu-index">0{{ index + 1 }}</span>
            <router-link :to="item === 'Home' ? '/' : '/' + item.toLowerCase()" @click="toggleMenu" class="menu-link">
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
          From concept to deployment, we combine stunning UI/UX design with high-performance engineering to build web
          platforms and mobile applications that grow businesses.
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
      <div class="section-content-width">
        <div class="section-header animate-scroll-element">
          <span class="mini-title">Expertise</span>
          <h2 class="section-main-heading">What We Do Best</h2>
        </div>

        <div class="services-grid">
          <div class="service-card animate-scroll-element">
            <div class="service-icon">🎨</div>
            <h3>Web Designing</h3>
            <p>Immersive, responsive, and strategic user experiences designed to maximize engagement and align
              beautifully
              with your brand identity.</p>
          </div>
          <div class="service-card animate-scroll-element">
            <div class="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Clean, efficient, and scalable code bases built using cutting-edge frameworks. Fast, reliable, and secure
              enterprise solutions.</p>
          </div>
          <div class="service-card animate-scroll-element">
            <div class="service-icon">📱</div>
            <h3>App Development</h3>
            <p>Native and cross-platform mobile apps built with seamless functionality, fluid gesture animations, and
              continuous cloud integrations.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="our-work-showcase" ref="workSection"
      :class="['work-showcase-section', isDarkMode ? 'showcase-bg-dark' : 'showcase-bg-light']">
      <div class="section-content-width">
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

        <div class="back-btn-row">
          <button class="go-back-btn" @click="goBack" aria-label="Go back to previous page">
            <span class="go-back-arrow" aria-hidden="true">←</span>
            Go Back
          </button>
        </div>
      </div>
    </section>

    <section class="contact-screenshot-section">
      <div class="contact-container">
        <h2 class="contact-title">Let's Get In Touch!</h2>
        <div class="title-underline"></div>
        <p class="contact-subtitle">
          Ready to start your next project with us? That's great! Give us a call or send us an email and we will get
          back to you as soon as possible!
        </p>

        <div class="contact-links-grid">
          <a href="tel:00923335499639" class="contact-item-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <span class="contact-detail">0092-333-5499639</span>
          </a>

          <a href="skype:atiq_ur_rehman?chat" class="contact-item-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.022 2c-1.895 0-3.666.522-5.187 1.428C5.23 3.161 3.491 4.887 3.17 6.471a10.016 10.016 0 0 0-1.418 5.111c0 1.884.517 3.648 1.413 5.163.308 1.632 2.029 3.398 3.655 3.693a10.003 10.003 0 0 0 5.16 1.428c1.896 0 3.668-.521 5.188-1.426 1.608.267 3.346-1.458 3.668-3.044.912-1.521 1.432-3.3 1.432-5.195 0-1.883-.517-3.647-1.413-5.161-.308-1.631-2.029-3.398-3.654-3.694A9.998 9.998 0 0 0 12.022 2zm.043 14.888c-2.617 0-4.303-1.282-4.303-2.915 0-.793.611-1.31 1.341-1.31.954 0 1.15.513 1.581 1.111.456.634 1.011.97 1.498.97.635 0 1.1-.318 1.1-.877 0-.523-.314-.775-1.267-1.168-1.547-.589-2.924-1.214-2.924-2.887 0-1.624 1.472-2.83 3.864-2.83 2.112 0 3.844 1.083 3.844 2.541 0 .748-.544 1.252-1.244 1.252-.843 0-1.077-.449-1.413-.962-.4-.607-.852-.841-1.3-.841-.54 0-.878.271-.878.747 0 .495.346.738 1.234 1.084 1.701.626 2.972 1.289 2.972 2.935-.001 1.776-1.594 3.152-4.129 3.152z" />
              </svg>
            </div>
            <span class="contact-detail">atiq_ur_rehman</span>
          </a>

          <a href="https://wa.me/00923335499639" target="_blank" class="contact-item-card">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.454L0 24zm6.59-4.846c1.666.988 3.31 1.489 5.353 1.49 5.383 0 9.765-4.381 9.768-9.764.002-2.607-1.011-5.059-2.854-6.904C16.97 2.13 14.522.921 11.914.921c-5.387 0-9.769 4.382-9.77 9.764-.001 2.148.57 3.864 1.642 5.4l-.994 3.633 3.731-.979zM17.8 14.532c-.3-.15-1.77-.874-2.044-.973-.274-.1-.474-.15-.674.15-.2.3-.774.973-.949 1.173-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.89-.794-1.49-1.774-1.665-2.074-.175-.3-.019-.462.13-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.623-.924-2.223-.244-.587-.49-.508-.674-.518-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.106 3.216 5.1 4.51.714.309 1.272.493 1.707.632.717.228 1.368.196 1.883.119.574-.085 1.77-.724 2.02-1.387.25-.663.25-1.229.175-1.349-.075-.12-.275-.22-.575-.37z" />
              </svg>
            </div>
            <span class="contact-detail">0092-333-5499639</span>
          </a>

          <a href="mailto:atiq@web-hive.com" class="contact-item-card email-highlight">
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <span class="contact-detail text-blue">atiq@web-hive.com</span>
          </a>
        </div>
      </div>
    </section>

    <Footer :darkMode="isDarkMode" />

    <!-- Floating chat widget -->
    <button class="chat-fab" @click="isChatOpen = !isChatOpen" :aria-label="isChatOpen ? 'Close chat' : 'Open chat'">
      <svg v-if="!isChatOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="24" height="24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.077-.16-3.02-.457L3 21l1.5-4.5C3.55 15.163 3 13.632 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="22" height="22">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>

    <Transition name="chat-pop">
      <div v-if="isChatOpen" class="chat-popup">
        <button class="chat-popup-close" @click="isChatOpen = false" aria-label="Close chat">✕</button>
        <ChatBot variant="popup" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ChatBot from '../components/ChatBot.vue'
import Footer from '../components/footer.vue'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()

function goBack() {
  router.back()
}

// Enforced dark default matching Home.vue setup
const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const workSection = ref(null)
const isChatOpen = ref(false)

const menuItems = ['Home', 'Services', 'Portfolio', 'Culture', 'Studio', 'Policies']

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

// Helper function to update the global HTML class token
const applyGlobalThemeClass = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('theme-dark')
    document.documentElement.classList.remove('theme-light')
  } else {
    document.documentElement.classList.add('theme-light')
    document.documentElement.classList.remove('theme-dark')
  }
}

// CHANGED: Saved under the unified webhive-theme key and updates root HTML element classes
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  const activeTheme = isDarkMode.value ? 'dark' : 'light'

  localStorage.setItem('webhive-theme', activeTheme)
  applyGlobalThemeClass(isDarkMode.value)
}

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

  // CHANGED: Check the universal site theme preference. Defaults to dark.
  const savedTheme = localStorage.getItem('webhive-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = true
  }

  // Keep root context token up-to-date instantly on view mount
  applyGlobalThemeClass(isDarkMode.value)

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
  overflow-x: hidden !important;
  height: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:global(html::-webkit-scrollbar) {
  display: none;
  width: 0;
  height: 0;
}

:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  height: auto !important;
  width: 100% !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:global(body::-webkit-scrollbar) {
  display: none;
  width: 0;
  height: 0;
}

.about-page-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  --space-sm: clamp(18px, 2.6vw, 36px);
  --space-md: clamp(22px, 3.6vw, 56px);
  --space-lg: clamp(32px, 5.5vw, 96px);
  width: 100%;
  min-height: 100vh;
  position: relative;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  overflow-x: hidden;
}

.theme-dark {
  background-color: #0b0c10;
  color: #ffffff;
}

.theme-light {
  --brand-accent: #f97316;
  background-color: #ffffff;
  color: #0f172a;
}

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

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  will-change: backdrop-filter;
  width: 100%;
  max-width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  padding: clamp(0.55rem, 1.4vw, 0.8rem) clamp(1rem, 2.6vw, 1.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}

.theme-light .navbar {
  background: rgba(15, 23, 42, 0.03);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.logo {
  font-size: clamp(1.1rem, 2.4vw, 1.4rem);
  font-weight: 800;
  text-decoration: none;
  color: #ffffff;
  font-style: italic;
  letter-spacing: -0.04em;
  display: flex;
  align-items: center;
}

.theme-light .logo {
  color: #0f172a;
}

.logo .dot {
  color: var(--brand-accent);
}

.status-dot {
  display: none;
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

.consult-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 255, 163, 0.3);
}

.theme-light .consult-btn:hover {
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.consult-btn:active {
  transform: translateY(0);
}

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

.theme-dark .burger-line {
  background-color: #ffffff;
}

.theme-light .burger-line {
  background-color: #0f172a;
}

.menu-active .line-top {
  transform: translateY(5px) rotate(45deg);
  background-color: var(--brand-accent) !important;
}

.menu-active .line-mid {
  opacity: 0;
}

.menu-active .line-bot {
  transform: translateY(-5px) rotate(-45deg);
  background-color: var(--brand-accent) !important;
}

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

.theme-dark .nav-overlay {
  background-color: rgba(11, 12, 16, 0.96);
}

.theme-light .nav-overlay {
  background-color: rgba(255, 255, 255, 0.96);
}

.nav-links-container {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 2.5vh, 24px);
  width: 100%;
  max-width: 800px;
}

.menu-item-wrap {
  overflow: hidden;
  display: flex;
  align-items: center;
}

.overlay-btn-item {
  margin-top: clamp(4px, 1vh, 12px);
}

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

.theme-dark .menu-link {
  color: #ffffff;
}

.theme-light .menu-link {
  color: #0f172a;
}

.menu-link:hover {
  color: var(--brand-accent);
}

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

.theme-light .consult-btn-overlay:hover {
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
}

@media (min-width: 1024px) {
  .nav-overlay {
    align-items: center;
    padding-left: clamp(80px, 10vw, 180px);
    justify-content: flex-start;
  }
}

@media (max-height: 500px) and (orientation: landscape) {
  .menu-link {
    font-size: clamp(1.2rem, 4.5vw, 2rem);
  }

  .nav-links-container {
    gap: clamp(4px, 1.2vh, 10px);
  }

  .menu-index {
    font-size: 11px;
  }

  .consult-btn-overlay {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    padding: 6px clamp(14px, 2.5vw, 24px);
  }
}

.about-hero {
  min-height: clamp(560px, 92vh, 960px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(96px, 15vh, 150px) clamp(16px, 5vw, 60px) clamp(48px, 8vh, 96px);
  position: relative;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
}

.ambient-glow {
  position: absolute;
  width: min(600px, 80vw);
  height: min(600px, 80vw);
  background-color: var(--brand-accent);
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.12;
  pointer-events: none;
}

.theme-light .ambient-glow {
  opacity: 0.2;
  background-color: #fdba74;
}

.hero-content-block {
  text-align: center;
  max-width: 940px;
  width: 100%;
}

.section-tag {
  font-family: monospace;
  font-size: clamp(11px, 1.2vw, 13px);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--brand-accent);
  display: inline-block;
  margin-bottom: clamp(16px, 2.4vh, 24px);
}

.about-title {
  font-size: clamp(2.1rem, 7.5vw, 6rem);
  font-weight: 950;
  line-height: 1.12;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin-bottom: clamp(20px, 3vh, 28px);
  color: #ffffff;
}

.theme-light .about-title {
  color: #0f172a;
}

.highlight-text {
  background: linear-gradient(135deg, #ffffff 20%, var(--brand-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.theme-light .highlight-text {
  background: linear-gradient(135deg, #0f172a 40%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-subtitle {
  font-size: clamp(15px, 2vw, 20px);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto clamp(28px, 4.4vh, 44px);
  color: rgba(255, 255, 255, 0.65);
}

.theme-light .about-subtitle {
  color: #475569;
}

.cta-button-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 1.6vw, 20px);
  flex-wrap: wrap;
}

.btn-our-work {
  background-color: #000000;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: clamp(14px, 1.6vw, 18px) clamp(26px, 3vw, 38px);
  font-weight: 700;
  font-size: clamp(12.5px, 1vw, 14px);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  border-radius: 4px;
  transition: color 0.3s, border-color 0.3s, transform 0.2s;
  width: auto;
}

.btn-our-work:hover {
  color: var(--brand-accent);
  border-color: var(--brand-accent);
  transform: translateY(-2px);
}

.btn-start-project {
  text-decoration: none;
  background-color: #ffffff;
  color: #0b0c10;
  border: 1px solid transparent;
  padding: clamp(14px, 1.6vw, 18px) clamp(26px, 3vw, 38px);
  font-weight: 700;
  font-size: clamp(12.5px, 1vw, 14px);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
}

.theme-light .btn-start-project {
  background-color: #0f172a;
  color: #ffffff;
}

.btn-start-project:hover {
  background-color: var(--brand-accent);
  color: #0b0c10;
  transform: translateY(-2px);
}

.services-section {
  padding: var(--space-lg) 0;
  width: 100%;
  position: relative;
  z-index: 10;
  box-sizing: border-box;
}

.section-content-width {
  width: 100%;
  max-width: 100%;
  padding: 0 clamp(16px, 5vw, 60px);
  margin: 0 auto;
  box-sizing: border-box;
}

.mini-title {
  font-family: monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--brand-accent);
  display: block;
  margin-bottom: 8px;
}

.theme-light .mini-title {
  color: #f97316;
  font-weight: 600;
}

.section-main-heading {
  font-size: clamp(1.7rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: clamp(32px, 4.5vw, 48px);
  text-transform: uppercase;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(18px, 2.4vw, 30px);
  width: 100%;
}

.service-card {
  padding: clamp(26px, 3.4vw, 40px);
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-sizing: border-box;
  /* CHANGED: increased card height so the services grid reads taller */
  min-height: clamp(260px, 26vw, 320px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.theme-light .service-card {
  background-color: #ffffff;
  border-color: rgba(15, 23, 42, 0.06);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.01);
}

.service-icon {
  font-size: 32px;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 12px;
}

.service-card p {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
}

.theme-light .service-card p {
  color: #475569;
}

.work-showcase-section {
  padding: var(--space-lg) 0 calc(var(--space-lg) * 1.15);
  width: 100%;
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  /* CHANGED: transition added so the new background swap fades like the rest of the theme */
  transition: background-color var(--transition-speed);
}

/* CHANGED: Featured Projects section now gets its own alternate shade per
   theme, same pattern used across the other page sections — a light
   gray in the light theme, a slightly-lighter-than-black shade in dark. */
.showcase-bg-dark {
  background-color: #1c1c1c;
}

.showcase-bg-light {
  background-color: #f2f2f2;
}

.showcase-heading {
  font-size: clamp(1.7rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.showcase-subheading {
  font-size: clamp(14px, 1.4vw, 16px);
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: clamp(32px, 5vw, 54px);
}

.theme-light .showcase-subheading {
  color: #64748b;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: clamp(20px, 2.8vw, 32px);
  align-items: stretch;
  width: 100%;
}

@media (max-width: 860px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
  overflow: hidden;
  box-sizing: border-box;
  /* CHANGED: increased minimum card height for the featured projects grid */
  min-height: clamp(480px, 48vw, 640px);
}

.theme-light .project-card {
  background-color: #ffffff;
  border-color: rgba(15, 23, 42, 0.06);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--brand-accent);
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  /* CHANGED: taller image area to match the increased card height above */
  height: clamp(280px, 36vw, 400px);
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.03);
}

.image-tint-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(11, 12, 16, 0.3));
  pointer-events: none;
}

.card-inner {
  padding: clamp(20px, 2.6vw, 32px);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.project-type {
  font-family: monospace;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--brand-accent);
  letter-spacing: 0.05em;
}

.theme-light .project-type {
  color: #f97316;
  font-weight: 600;
}

.project-tag-dot {
  width: 6px;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.project-title {
  font-size: clamp(18px, 1.8vw, 22px);
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.3;
}

.project-desc {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 28px;
  flex-grow: 1;
}

.theme-light .project-desc {
  color: #475569;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.tech-pill {
  font-family: monospace;
  font-size: 11px;
  padding: 4px 10px;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.8);
}

.theme-light .tech-pill {
  background-color: #f1f5f9;
  color: #334155;
}

.back-btn-row {
  max-width: 42rem;
  margin: clamp(2.5rem, 6vw, 5rem) auto 0;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 5;
}

.go-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  font-family: inherit;
  font-weight: 700;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.go-back-btn:hover {
  background-color: var(--brand-accent);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(0, 255, 163, 0.3);
}

.theme-light .go-back-btn:hover {
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.3);
}

.go-back-arrow {
  transition: transform 0.2s ease;
}

.go-back-btn:hover .go-back-arrow {
  transform: translateX(-3px);
}

.contact-screenshot-section {
  padding: var(--space-lg) clamp(16px, 5vw, 60px) calc(var(--space-lg) * 1.15);
  position: relative;
  z-index: 10;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.contact-container {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
}

.contact-title {
  font-size: clamp(1.7rem, 3.5vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
}

.title-underline {
  width: 50px;
  height: 3px;
  background-color: #00ffa3;
  margin: 0 auto;
  margin-bottom: 28px;
}

.theme-light .title-underline {
  background-color: #f97316;
}

.contact-subtitle {
  font-size: clamp(14px, 1.8vw, 17px);
  line-height: 1.6;
  max-width: 820px;
  margin: 0 auto clamp(36px, 6vw, 60px);
  color: rgba(255, 255, 255, 0.7);
}

.theme-light .contact-subtitle {
  color: #475569;
}

.contact-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(18px, 2.4vw, 30px);
  align-items: center;
  width: 100%;
}

.contact-item-card {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  padding: 16px;
  box-sizing: border-box;
}

.contact-item-card:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s;
}

.theme-light .icon-wrapper {
  color: #334155;
}

.icon-wrapper svg {
  width: 36px;
  height: 36px;
}

.contact-item-card:hover .icon-wrapper {
  color: var(--brand-accent);
}

.contact-detail {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.theme-dark .text-blue {
  color: #51cbff;
}

.theme-light .text-blue {
  color: #0284c7;
}

.contact-item-card:hover .text-blue {
  color: var(--brand-accent);
}

.footer-group {
  width: 100%;
  position: relative;
  z-index: 10;
  margin-top: auto;
}

.copyright-section {
  width: 100%;
  text-align: center;
  padding: 30px 20px;
  font-size: 11px;
  letter-spacing: 0.05em;
  border-top: 1px solid;
  box-sizing: border-box;
}

.theme-dark .copyright-section {
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(9, 9, 21, 0.6);
  border-top-color: rgba(255, 255, 255, 0.05);
}

.theme-light .copyright-section {
  color: rgba(15, 23, 42, 0.5);
  background-color: rgba(241, 245, 249, 0.6);
  border-top-color: rgba(15, 23, 42, 0.06);
}

.chat-fab {
  position: fixed;
  bottom: clamp(16px, 4vw, 28px);
  right: clamp(16px, 4vw, 28px);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: var(--brand-accent);
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 950;
  box-shadow: 0 8px 24px rgba(0, 255, 163, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.theme-light .chat-fab {
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.35);
}

.chat-fab:hover {
  transform: translateY(-2px) scale(1.05);
}

.chat-fab:active {
  transform: scale(0.95);
}

.chat-popup {
  position: fixed;
  bottom: clamp(84px, 12vh, 100px);
  right: clamp(16px, 4vw, 28px);
  width: min(380px, calc(100vw - 32px));
  height: min(400px, calc(100dvh - 140px));
  z-index: 940;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.chat-popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}

.chat-popup-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.chat-pop-enter-active,
.chat-pop-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.chat-pop-enter-from,
.chat-pop-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.96);
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .navbar {
    padding: 0.75rem 1.8rem;
  }

  .logo {
    font-size: 1.3rem;
  }

  .nav-actions {
    gap: 16px;
  }

  .hero-content-block {
    max-width: 820px;
  }
}

@media (min-width: 1201px) {
  .navbar {
    padding: 0.85rem 2.2rem;
  }

  .logo {
    font-size: 1.45rem;
  }

  .nav-actions {
    gap: 22px;
  }

  .consult-btn {
    font-size: 14px;
    padding: 11px 20px;
  }

  .hero-content-block {
    max-width: 980px;
  }

  .about-title {
    font-size: clamp(2.6rem, 6.4vw, 6.4rem);
  }
}

@media (min-width: 1536px) {
  .navbar {
    padding: 1rem 2.6rem;
  }

  .logo {
    font-size: 1.6rem;
  }

  .nav-actions {
    gap: 26px;
  }

  .consult-btn {
    font-size: 15px;
    padding: 12px 24px;
  }

  .theme-toggle {
    width: 44px;
    height: 24px;
  }

  .toggle-thumb {
    width: 18px;
    height: 18px;
  }

  .toggle-active {
    transform: translateX(20px);
  }

  .menu-trigger {
    width: 38px;
    height: 38px;
  }

  .hero-content-block {
    max-width: 1120px;
  }

  .about-title {
    font-size: clamp(3rem, 5.6vw, 7rem);
  }

  .about-subtitle {
    max-width: 780px;
    font-size: 1.25rem;
  }
}

@media (min-width: 1921px) {
  .navbar {
    padding: 1.1rem 3.2rem;
  }

  .logo {
    font-size: 1.8rem;
  }

  .nav-actions {
    gap: 30px;
  }

  .consult-btn {
    font-size: 16px;
    padding: 13px 26px;
  }

  .hero-content-block {
    max-width: 1360px;
  }

  .about-title {
    font-size: clamp(3.6rem, 5vw, 8rem);
    margin-bottom: 36px;
  }

  .about-subtitle {
    max-width: 900px;
    font-size: 1.4rem;
    line-height: 1.7;
  }

  .btn-our-work,
  .btn-start-project {
    font-size: 15px;
    padding: 20px 44px;
  }

  .section-main-heading,
  .showcase-heading,
  .contact-title {
    font-size: clamp(2.6rem, 3vw, 3.6rem);
  }

  .project-card {
    min-height: clamp(500px, 30vw, 600px);
  }

  .project-image-wrapper {
    height: clamp(320px, 24vw, 400px);
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   CHANGED: this tier didn't exist before — the Featured Projects cards were
   plateauing at their 1921px sizing on very large/high-res displays. This
   keeps the card, image, and inner padding growing proportionally instead.
   ========================================================================== */
@media (min-width: 2560px) {
  .project-card {
    min-height: clamp(620px, 38vw, 740px);
  }

  .project-image-wrapper {
    height: clamp(400px, 28vw, 480px);
  }

  .card-inner {
    padding: clamp(34px, 3vw, 44px);
  }

  .project-title {
    font-size: 1.7rem;
  }

  .project-desc {
    font-size: 1.05rem;
  }

  .tech-pill {
    font-size: 13px;
    padding: 5px 12px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .navbar {
    padding: 0.7rem 1.6rem;
  }

  .logo {
    font-size: 1.25rem;
  }

  .nav-actions {
    gap: 14px;
  }

  .consult-btn {
    font-size: 12.5px;
    padding: 9px 16px;
  }

  .about-hero {
    padding: clamp(84px, 14vh, 116px) clamp(24px, 6vw, 48px) clamp(40px, 7vh, 72px);
  }

  .hero-content-block {
    max-width: 700px;
  }

  .about-title {
    font-size: clamp(2rem, 5.6vw, 3.4rem);
  }

  .cta-button-group {
    gap: 14px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .navbar {
    padding: 0.6rem 1.1rem;
  }

  .logo {
    font-size: 1.15rem;
  }

  .nav-actions {
    gap: clamp(8px, 2vw, 14px);
  }

  .consult-btn {
    font-size: 12px;
    padding: 8px 14px;
  }

  .about-hero {
    padding: clamp(78px, 15vh, 104px) clamp(20px, 6vw, 40px) clamp(32px, 6vh, 56px);
    min-height: clamp(480px, 80svh, 720px);
  }

  .hero-content-block {
    max-width: 560px;
  }

  .about-title {
    font-size: clamp(1.9rem, 7.5vw, 2.8rem);
  }

  .about-subtitle {
    max-width: 90%;
  }

  .section-content-width,
  .contact-screenshot-section {
    padding-left: clamp(18px, 5vw, 32px);
    padding-right: clamp(18px, 5vw, 32px);
  }

  .cta-button-group {
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.55rem 0.85rem;
  }

  .logo {
    font-size: 1.05rem;
  }

  .nav-actions {
    gap: 8px;
  }

  .consult-btn {
    display: none;
  }

  .theme-toggle {
    width: 34px;
    height: 18px;
    padding: 2px;
  }

  .toggle-thumb {
    width: 13px;
    height: 13px;
  }

  .toggle-active {
    transform: translateX(15px);
  }

  .menu-trigger {
    width: 30px;
    height: 30px;
    gap: 3px;
  }

  .about-hero {
    min-height: clamp(440px, 82svh, 620px);
    padding: clamp(74px, 15vh, 96px) 20px clamp(28px, 5vh, 44px);
  }

  .hero-content-block {
    max-width: 100%;
  }

  .section-tag {
    margin-bottom: 14px;
  }

  .about-title {
    font-size: clamp(1.5rem, 8.5vw, 2.1rem);
    margin-bottom: 16px;
  }

  .about-subtitle {
    font-size: 0.95rem;
    max-width: 100%;
  }

  .cta-button-group {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .btn-our-work,
  .btn-start-project {
    width: 100%;
    text-align: center;
  }

  .section-content-width,
  .contact-screenshot-section {
    padding-left: 16px;
    padding-right: 16px;
  }

  .service-card {
    padding: 26px 22px;
  }

  .card-inner {
    padding: 20px;
  }

  .project-image-wrapper {
    height: clamp(190px, 50vw, 250px);
  }

  .chat-popup {
    left: 16px;
    right: 16px;
    width: auto;
  }
}

@media (max-width: 360px) {
  .navbar {
    padding: 0.5rem 0.7rem;
  }

  .logo {
    font-size: 1rem;
  }

  .about-hero {
    padding-left: 16px;
    padding-right: 16px;
  }

  .about-title {
    font-size: clamp(1.3rem, 9vw, 1.8rem);
  }
}
</style>