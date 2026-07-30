<template>
  <footer ref="footerRef" :class="[
    'site-footer py-10 px-5 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:px-12 2xl:py-24 2xl:px-16 relative z-20',
    isDarkMode ? 'bg-black' : 'bg-white'
  ]">
    <div class="max-w-7xl mx-auto footer-container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <span :class="isDarkMode ? 'text-white' : 'text-black'">WEBHIVE</span><span
              :class="isDarkMode ? 'accent-dark' : 'accent-light'">.</span>
          </div>
          <span :class="['footer-logo-sub', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">
            TECHNOLOGIES
          </span>

          <p :class="['footer-description', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">
            Webhive Technologies builds headless CMS platforms, Next.js marketing sites, and e-commerce
            experiences. 20+ years of senior engineering for startups and enterprises.
          </p>

          <div class="footer-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              class="footer-social-icon" :class="isDarkMode ? 'social-icon-dark' : 'social-icon-light'">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
              class="footer-social-icon" :class="isDarkMode ? 'social-icon-dark' : 'social-icon-light'">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.83-5.97 6.83H1.66l7.73-8.84L1.25 2.25h6.83l4.72 6.24 5.44-6.24zm-1.16 17.52h1.83L7.02 4.13H5.05l12.03 15.64z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-column">
          <span :class="['footer-heading', isDarkMode ? 'text-white' : 'text-black']">
            Company
          </span>
          <nav class="footer-links">
            <router-link v-for="link in companyLinks" :key="link.label" :to="link.to"
              :class="['footer-link', isDarkMode ? 'link-dark' : 'link-light']">
              {{ link.label }}
            </router-link>
          </nav>
        </div>

        <div class="footer-column">
          <span :class="['footer-heading', isDarkMode ? 'text-white' : 'text-black']">
            Contact
          </span>
          <nav class="footer-links">
            <a href="mailto:hello@webhive.com" :class="['footer-link', isDarkMode ? 'link-dark' : 'link-light']">
              hello@webhive.com
            </a>
            <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer"
              :class="['footer-link', isDarkMode ? 'link-dark' : 'link-light']">
              Upwork agency profile
            </a>
            <span :class="['footer-link footer-link-static', isDarkMode ? 'link-dark' : 'link-light']">
              Worldwide · Remote-first
            </span>
            <span :class="['footer-link footer-link-static', isDarkMode ? 'link-dark' : 'link-light']">
              Response within 1 business day
            </span>
          </nav>
        </div>
      </div>

      <div :class="['footer-bottom', isDarkMode ? 'footer-bottom-dark' : 'footer-bottom-light']">
        <span :class="['footer-copyright', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">
          © {{ currentYear }} Webhive Technologies. All rights reserved.
        </span>
        <div class="footer-bottom-links">
          <router-link to="/privacy" :class="['footer-bottom-link', isDarkMode ? 'link-dark' : 'link-light']">
            Privacy
          </router-link>
          <router-link to="/terms" :class="['footer-bottom-link', isDarkMode ? 'link-dark' : 'link-light']">
            Terms
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, inject, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Accept an explicit prop (e.g. About.vue's :darkMode="isDarkMode"),
// but fall back to injected theme context if no prop was passed
// (e.g. components relying on Home.vue's provide('isDarkMode', ...)).
const props = defineProps({
  darkMode: { type: Boolean, default: undefined }
})

const injectedIsDarkMode = inject('isDarkMode', ref(true))

const isDarkMode = computed(() =>
  props.darkMode !== undefined ? props.darkMode : injectedIsDarkMode.value
)

const currentYear = computed(() => new Date().getFullYear())

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Culture', to: '/culture' },
  { label: 'Studio', to: '/studio' },
  { label: 'Policies', to: '/policies' },
  { label: 'Consultation', to: '/consultation' }
]

// Scroll-triggered entrance animation, same pattern as the ReplacementGlass hero:
// brand block -> nav columns (staggered) -> bottom bar, each fading/sliding in.
const footerRef = ref(null)

onMounted(() => {
  if (!footerRef.value) return

  const brandEl = footerRef.value.querySelector('.footer-brand')
  const columnEls = footerRef.value.querySelectorAll('.footer-column')
  const bottomEl = footerRef.value.querySelector('.footer-bottom')

  const trigger = {
    trigger: footerRef.value,
    start: 'top 85%',
    toggleActions: 'play none none none'
  }

  gsap.fromTo(brandEl,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: trigger }
  )

  gsap.fromTo(columnEls,
    { y: 24, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out', delay: 0.15, scrollTrigger: trigger }
  )

  gsap.fromTo(bottomEl,
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.3, scrollTrigger: trigger }
  )
})
</script>

<style scoped>
.footer-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 32px;
  padding-bottom: 40px;
}

@media (min-width: 481px) and (max-width: 767px) {
  .footer-grid {
    gap: 36px;
    padding-bottom: 44px;
  }
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 1.6fr 1fr 1fr;
    gap: 32px;
    padding-bottom: 48px;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .footer-grid {
    gap: 40px;
  }
}

@media (min-width: 1201px) {
  .footer-grid {
    gap: 44px;
  }
}

@media (min-width: 1536px) {
  .footer-grid {
    gap: 56px;
    padding-bottom: 56px;
  }
}

@media (min-width: 1921px) {
  .footer-grid {
    gap: 72px;
    padding-bottom: 64px;
  }
}

.footer-logo {
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.01em;
}

.footer-logo-sub {
  display: block;
  font-family: monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.22em;
  margin-top: 4px;
}

.footer-description {
  font-size: 0.95rem;
  line-height: 1.65;
  max-width: 420px;
  margin-top: 20px;
}

.accent-dark {
  color: var(--brand-accent, #00ffa3);
}

.accent-light {
  color: var(--brand-accent, #f97316);
}

.footer-socials {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.footer-social-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.social-icon-dark {
  background-color: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
}

.social-icon-dark:hover {
  transform: translateY(-2px);
  background-color: var(--brand-accent, #00ffa3);
  color: #000;
}

.social-icon-light {
  background-color: rgba(15, 23, 42, 0.06);
  color: rgba(15, 23, 42, 0.7);
}

.social-icon-light:hover {
  transform: translateY(-2px);
  background-color: var(--brand-accent, #f97316);
  color: #fff;
}

.footer-heading {
  display: block;
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-link {
  font-size: 0.95rem;
  text-decoration: none;
  width: fit-content;
  transition: color 0.2s ease;
}

.footer-link-static {
  cursor: default;
}

.link-dark {
  color: rgba(255, 255, 255, 0.6);
}

a.link-dark:hover {
  color: #ffffff;
}

.link-light {
  color: rgba(15, 23, 42, 0.6);
}

a.link-light:hover {
  color: #000000;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
  border-top: 1px solid;
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.footer-bottom-dark {
  border-color: rgba(255, 255, 255, 0.08);
}

.footer-bottom-light {
  border-color: rgba(15, 23, 42, 0.08);
}

.footer-copyright {
  font-size: 0.85rem;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-link {
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

/* =========================================================================
   BREAKPOINT TIERS
   Organized by the exact ranges used across the rest of the site.
   The outer <footer> padding is handled via responsive Tailwind
   utility classes directly in the template (sm/md/lg/xl/2xl); this
   block covers everything Tailwind's default scale doesn't reach
   (the true 4K/2560px tier) plus all typography/spacing fine-tuning.
   ========================================================================= */

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .footer-container {
    max-width: 100%;
  }

  .footer-logo {
    font-size: 1.25rem;
  }

  .footer-logo-sub {
    font-size: 10px;
  }

  .footer-description {
    font-size: 0.875rem;
    max-width: 100%;
    margin-top: 16px;
  }

  .footer-socials {
    margin-top: 20px;
  }

  .footer-social-icon {
    width: 32px;
    height: 32px;
  }

  .footer-heading {
    font-size: 11px;
    margin-bottom: 16px;
  }

  .footer-link {
    font-size: 0.875rem;
  }

  .footer-links {
    gap: 12px;
  }

  .footer-bottom {
    padding-top: 24px;
  }

  .footer-copyright,
  .footer-bottom-link {
    font-size: 0.8rem;
  }

  .footer-bottom-links {
    gap: 18px;
  }
}

@media (max-width: 360px) {
  .footer-logo {
    font-size: 1.15rem;
  }

  .footer-description {
    font-size: 0.82rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .footer-description {
    max-width: 380px;
  }
}

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .footer-container {
    max-width: 1120px;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .footer-container {
    max-width: 1280px;
  }

  .footer-description {
    max-width: 440px;
  }
}

@media (min-width: 1536px) {
  .footer-container {
    max-width: 1400px !important;
  }

  .footer-logo {
    font-size: 1.65rem;
  }

  .footer-logo-sub {
    font-size: 12px;
  }

  .footer-description {
    font-size: 1rem;
    max-width: 480px;
    margin-top: 24px;
  }

  .footer-social-icon {
    width: 40px;
    height: 40px;
  }

  .footer-heading {
    font-size: 13px;
    margin-bottom: 24px;
  }

  .footer-link {
    font-size: 1rem;
  }

  .footer-links {
    gap: 16px;
  }

  .footer-copyright,
  .footer-bottom-link {
    font-size: 0.9rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up (e.g. 2560px) ---------- */
@media (min-width: 1921px) {
  .footer-container {
    max-width: 1700px !important;
  }

  .footer-logo {
    font-size: 1.85rem;
  }

  .footer-logo-sub {
    font-size: 14px;
  }

  .footer-description {
    font-size: 1.1rem;
    max-width: 540px;
    margin-top: 28px;
  }

  .footer-socials {
    margin-top: 32px;
    gap: 16px;
  }

  .footer-social-icon {
    width: 46px;
    height: 46px;
  }

  .footer-heading {
    font-size: 14px;
    margin-bottom: 28px;
  }

  .footer-link {
    font-size: 1.1rem;
  }

  .footer-links {
    gap: 18px;
  }

  .footer-bottom {
    padding-top: 40px;
  }

  .footer-copyright,
  .footer-bottom-link {
    font-size: 1rem;
  }

  .footer-bottom-links {
    gap: 32px;
  }
}
</style>