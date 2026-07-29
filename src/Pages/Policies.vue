<template>
  <div :class="['hero-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']" @mousemove="handleMouseMove">
    <div class="bg-overlay">
      <div class="bg-grid-lines" :style="{ transform: `translate(${parallax.bgX}px, ${parallax.bgY}px)` }"></div>
    </div>

    <!-- FIXED FLOATING NAVBAR SYSTEM -->
    <header class="navbar">
      <a href="#" class="company-branding logo">
        WEBHIVE<span class="dot">.</span>
      </a>

      <div class="nav-actions">
        <router-link to="/" class="consult-btn">
          Home
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

    <!-- NAVIGATION OVERLAY SYSTEM -->
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
            <router-link to="/Consultation" class="consult-btn-overlay" @click="toggleMenu">
              Consultation
            </router-link>
          </div>
        </nav>
      </div>
    </Transition>

    <!-- POLICY CONTENT -->
    <main class="hero-main">
      <div class="ambient-glow" :style="{ transform: `translate(${parallax.bgX * -0.5}px, ${parallax.bgY * -0.5}px)` }">
      </div>

      <section class="policy-hero">
        <span class="hero-eyebrow">Legal</span>
        <h1 class="hero-title">Privacy &amp; Refund <span class="accent-text">Policy</span></h1>
        <p class="hero-subtitle">
          How www.web-hive.com collects, uses and protects your information —
          and the terms that apply if you request a refund.
        </p>

        <div class="doc-tabs" role="tablist">
          <button v-for="tab in tabs" :key="tab.id" role="tab" :aria-selected="activeDoc === tab.id" class="doc-tab"
            :class="{ 'doc-tab-active': activeDoc === tab.id }" @click="switchDoc(tab.id)">
            {{ tab.label }}
          </button>
        </div>
      </section>

      <section class="policy-body">
        <aside class="index-rail" aria-label="Section navigation">
          <a v-for="(sec, i) in currentSections" :key="sec.id" :href="'#' + sec.id" class="rail-link"
            :class="{ 'rail-link-active': activeSectionId === sec.id }" @click.prevent="goToSection(sec.id)">
            <span class="rail-index">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="rail-label">{{ sec.title }}</span>
          </a>

          <button type="button" class="rail-link go-back-rail-link" @click="goBack"
            aria-label="Go back to previous page">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round" class="rail-back-arrow">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span class="rail-label">Go Back</span>
          </button>
        </aside>

        <article class="policy-content" ref="contentRef">
          <div v-for="(sec, i) in currentSections" :key="sec.id" :id="sec.id" class="policy-section">
            <div class="section-head">
              <span class="section-index">{{ String(i + 1).padStart(2, '0') }}</span>
              <h2 class="section-title">{{ sec.title }}</h2>
            </div>

            <p v-for="(p, pi) in sec.paragraphs" :key="pi" class="section-text">
              {{ p }}
            </p>

            <ul v-if="sec.list" class="section-list">
              <li v-for="(item, li) in sec.list" :key="li">{{ item }}</li>
            </ul>

            <a v-if="sec.crossLink" class="cross-link" :href="'#' + sec.crossLink.target"
              @click.prevent="goToSection(sec.crossLink.target, sec.crossLink.doc)">
              {{ sec.crossLink.label }}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round" class="cross-link-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </article>
      </section>
    </main>

    <Footer :darkMode="isDarkMode" />
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import Footer from '../components/footer.vue'

const router = useRouter()

const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const currentYear = new Date().getFullYear()

const menuItems = ['About', 'Services', 'Portfolio', 'Culture', 'Studio']

const parallax = reactive({
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

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window

  const xWeight = (clientX / innerWidth) - 0.5
  const yWeight = (clientY / innerHeight) - 0.5

  parallax.bgX = xWeight * -20
  parallax.bgY = yWeight * -20
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// NEW: Go back to the previous page in history
function goBack() {
  router.back()
}

/* -------------------------------------------------- */
/* POLICY CONTENT                                      */
/* -------------------------------------------------- */
const tabs = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'refund', label: 'Refund Policy' }
]

const activeDoc = ref('privacy')
const activeSectionId = ref('')
const contentRef = ref(null)
let observer = null

const privacySections = [
  {
    id: 'purpose',
    title: 'What is this Privacy Policy for?',
    paragraphs: [
      'This privacy policy is for this website www.web-hive.com and served by WebHive and governs the privacy of its users who choose to use it. The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website and website owners. Furthermore the way this website processes, stores and protects user data and information will also be detailed within this policy.'
    ]
  },
  {
    id: 'website',
    title: 'The Website',
    paragraphs: [
      'This website and its owners take a proactive approach to user privacy and ensure the necessary steps are taken to protect the privacy of its users throughout their visiting experience. This website complies to all UK national laws and requirements for user privacy.'
    ]
  },
  {
    id: 'cookies',
    title: 'Use of Cookies',
    paragraphs: [
      'This website uses cookies to better the users experience while visiting the website. Where applicable this website uses a cookie control system allowing the user on their first visit to the website to allow or disallow the use of cookies on their computer / device. This complies with recent legislation requirements for websites to obtain explicit consent from users before leaving behind or reading files such as cookies on a user\u2019s computer / device.',
      'Cookies are small files saved to the user\u2019s computers hard drive that track, save and store information about the user\u2019s interactions and usage of the website. This allows the website, through its server to provide the users with a tailored experience within this website. Users are advised that if they wish to deny the use and saving of cookies from this website on to their computers hard drive they should take necessary steps within their web browsers security settings to block all cookies from this website and its external serving vendors.',
      'This website uses tracking software to monitor its visitors to better understand how they use it. This software is provided by Google Analytics which uses cookies to track visitor usage. The software will save a cookie to your computers hard drive in order to track and monitor your engagement and usage of the website, but will not store, save or collect personal information. You can read Google\u2019s privacy policy here for further information [ http://www.google.com/privacy.html ].',
      'Other cookies may be stored to your computers hard drive by external vendors when this website uses referral programs, sponsored links or adverts. Such cookies are used for conversion and referral tracking and typically expire after 30 days, though some may take longer. No personal information is stored, saved or collected.'
    ]
  },
  {
    id: 'contact',
    title: 'Contact & Communication',
    paragraphs: [
      'Users contacting this website and/or its owners do so at their own discretion and provide any such personal details requested at their own risk. Your personal information is kept private and stored securely until a time it is no longer required or has no use, as detailed in the Data Protection Act 1998.',
      'Every effort has been made to ensure a safe and secure form to email submission process but advise users using such form to email processes that they do so at their own risk. This website and its owners use any information submitted to provide you with further information about the products / services they offer or to assist you in answering any questions or queries you may have submitted.',
      'This includes using your details to subscribe you to any email newsletter program the website operates but only if this was made clear to you and your express permission was granted when submitting any form to email process. Or whereby you the consumer have previously purchased from or enquired about purchasing from the company a product or service that the email newsletter relates to. This is by no means an entire list of your user rights in regard to receiving email marketing material. Your details are not passed on to any third parties.'
    ]
  },
  {
    id: 'newsletter',
    title: 'Email Newsletter',
    paragraphs: [
      'This website operates an email newsletter program, used to inform subscribers about products and services supplied by this website. Users can subscribe through an online automated process should they wish to do so but do so at their own discretion. Some subscriptions may be manually processed through prior written agreement with the user. Subscriptions are taken in compliance with UK Spam Laws detailed in the Privacy and Electronic Communications Regulations 2003.',
      'All personal details relating to subscriptions are held securely and in accordance with the Data Protection Act 1998. No personal details are passed on to third parties nor shared with companies / people outside of the company that operates this website. Under the Data Protection Act 1998 you may request a copy of personal information held about you by this website\u2019s email newsletter program. A small fee will be payable. If you would like a copy of the information held on you please write to the business address at the bottom of this policy.',
      'Email marketing campaigns published by this website or its owners may contain tracking facilities within the actual email. Subscriber activity is tracked and stored in a database for future analysis and evaluation. Such tracked activity may include; the opening of emails, forwarding of emails, the clicking of links within the email content, times, dates and frequency of activity. This information is used to refine future email campaigns and supply the user with more relevant content based around their activity.',
      'In compliance with UK Spam Laws and the Privacy and Electronic Communications Regulations 2003 subscribers are given the opportunity to unsubscribe at any time through an automated system. This process is detailed at the footer of each email campaign. If an automated un-subscription system is unavailable clear instructions on how to unsubscribe will be detailed instead.'
    ]
  },
  {
    id: 'external-links',
    title: 'External Links',
    paragraphs: [
      'Although this website only looks to include quality, safe and relevant external links, users are advised to adopt a policy of caution before clicking any external web links mentioned throughout this website. (External links are clickable text / banner / image links to other websites, similar to; www.web-hive.com.) The owners of this website cannot guarantee or verify the contents of any externally linked website despite their best efforts. Users should therefore note they click on external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.'
    ]
  },
  {
    id: 'adverts',
    title: 'Adverts and Sponsored Links',
    paragraphs: [
      'This website may contain sponsored links and adverts. These will typically be served through our advertising partners, to whom may have detailed privacy policies relating directly to the adverts they serve. Clicking on any such adverts will send you to the advertisers website through a referral program which may use cookies and will track the number of referrals sent from this website. This may include the use of cookies which may in turn be saved on your computers hard drive. Users should therefore note they click on sponsored external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.'
    ]
  },
  {
    id: 'social',
    title: 'Social Media Platforms',
    paragraphs: [
      'Communication, engagement and actions taken through external social media platforms that this website and its owners participate on are subject to the terms and conditions as well as the privacy policies held with each social media platform respectively. Users are advised to use social media platforms wisely and communicate / engage upon them with due care and caution in regard to their own privacy and personal details.',
      'This website nor its owners will ever ask for personal or sensitive information through social media platforms and encourage users wishing to discuss sensitive details to contact them through primary communication channels such as by telephone or email. This website may use social sharing buttons which help share web content directly from web pages to the social media platform in question. Users are advised before using such social sharing buttons that they do so at their own discretion and note that the social media platform may track and save your request to share a web page respectively through your social media platform account.'
    ]
  },
  {
    id: 'shortened-links',
    title: 'Shortened Links in Social Media',
    paragraphs: [
      'This website and its owners through their social media platform accounts may share web links to relevant web pages. By default some social media platforms shorten lengthy urls [web addresses] (this is an example: HTTP://bit.ly/zyVUBo). Users are advised to take caution and good judgement before clicking any shortened urls published on social media platforms by this website and its owners. Despite the best efforts to ensure only genuine urls are published many social media platforms are prone to spam and hacking and therefore this website and its owners cannot be held liable for any damages or implications caused by visiting any shortened links.'
    ]
  },
  {
    id: 'privacy-refund-note',
    title: 'Refund Policy (Summary)',
    paragraphs: [
      'If you are not 100% satisfied with your purchase, within 120 days from the purchase date, we will fully refund the cost of your order.'
    ],
    crossLink: { doc: 'refund', target: 'overview', label: 'Read the full Refund Policy' }
  },
  {
    id: 'resources',
    title: 'Resources & Further Information',
    paragraphs: [
      'Hope you found this policy useful and any related links on the page. Edited & customized by WebHive, I-8 Markaz, Ahmed Center, Islamabad, 44000.'
    ],
    list: [
      'Data Protection Act 1998',
      'Privacy and Electronic Communications Regulations 2003',
      'Privacy and Electronic Communications Regulations 2003 \u2013 The Guide',
      'Twitter Privacy Policy',
      'Facebook Privacy Policy',
      'Google Privacy Policy',
      'LinkedIn Privacy Policy',
      'Mail-chimp Privacy Policy',
      'Web Design Wales Website Privacy Policy \u2013 Project Planner Template v.2.0, April 2015'
    ]
  }
]

const refundSections = [
  {
    id: 'overview',
    title: 'Refund Policy',
    paragraphs: [
      'Since www.web-hive.com is offering non-tangible irrevocable goods we do not issue refunds once the order is accomplished and the product is sent. As a customer you are responsible for understanding this upon purchasing any item at our site. Please note that our bonuses are offered on behalf of our respected partners and are not an issue for a refund or charge-back.',
      'However, we realize that exceptional circumstances can take place with regard to the character of the product we supply. Therefore, we DO honor requests for a refund on the following reasons:'
    ]
  },
  {
    id: 'non-delivery',
    title: 'Non-delivery of the product',
    paragraphs: [
      'Due to some mailing issues of your e-mail provider or your own mail server you might not receive a delivery e-mail from us. In this case we recommend contacting us for assistance. Claims for non-delivery must be submitted to our Billing department in writing within 7 days from the order placing date. Otherwise the product will be considered received and downloaded.'
    ]
  },
  {
    id: 'download-issues',
    title: 'Download and unzipping issues',
    paragraphs: [
      'It may happen so that you are having problems while downloading the product or its unzipping. Claims regarding such issues must be submitted to our Technical Support department. If you do not properly contact us during this period, you agree that we may construe silence as a successful download of the product with no further right of redress or refund for a \u201cdownload issue\u201d reason. Failure to receive assistance for downloading or unzipping within 3 days may result in a refund decline.'
    ]
  },
  {
    id: 'major-defects',
    title: 'Major defects',
    paragraphs: [
      'Although all the products are thoroughly tested before release, unexpected errors may occur. Such issues must be submitted for our Technical Support Team\u2019s approval. We keep the right to rectify the error or defect within 72 hours.',
      'If any deficiency is approved and we fail to correct it within 72 hours from the date of the initial complaint letter or any other notification provided by a customer, the refund will be issued to the customer in full without any compensations or reimbursements. OR, at the customer\u2019s choice, replacement of the product of the same or around the same value can be offered.',
      'Please be advised that temporary access to your server can be requested by our technicians in order to identify and fix the possible issues with our products. Failure to provide such access in a timely manner may result in a delayed resolution of the issue. Refusal to provide access to your server will result in your inability to qualify for a refund.'
    ]
  },
  {
    id: 'not-as-described',
    title: 'Product not-as-described',
    paragraphs: [
      'Such issues should be reported to our Technical Support Department within 7 days from the date of purchase. Clear evidence must be provided proving that the purchased product is not as it is described on the website. Complaints which are based merely on the customer\u2019s false expectations or wishes are not honored. Sample products are available for evaluation purposes at our free sample templates section.',
      'Please note that we do not bear any responsibility and therefore we do not satisfy any refund/return/exchange requests based on incompatibility of our products with some third-party software (plug-ins, add-ons, modules, search engines, scripts, extensions etc) other than those which are specified as compatible in a description available on the preview page of each product. We don\u2019t guarantee that our products are fully compatible with any third-party programs and we do not provide support for third-party applications.',
      'Our Technical Support Team is always eager to assist you and deliver highly professional support in a timely manner. Thank you for purchasing our products.'
    ]
  }
]

const currentSections = computed(() =>
  activeDoc.value === 'privacy' ? privacySections : refundSections
)

const initObserver = () => {
  if (observer) observer.disconnect()
  nextTick(() => {
    const els = contentRef.value ? contentRef.value.querySelectorAll('.policy-section') : []
    if (!els.length) return
    activeSectionId.value = els[0].id
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeSectionId.value = entry.target.id
        })
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    )
    els.forEach((el) => observer.observe(el))
  })
}

const switchDoc = (id) => {
  if (activeDoc.value === id) return
  activeDoc.value = id
  initObserver()
}

/* Smooth-scrolls to a section's heading on this same page.
   Switches the Privacy/Refund tab first if the target lives on the other one.
   Uses click.prevent + scrollIntoView so vue-router never intercepts the hash. */
const goToSection = (sectionId, docId) => {
  const needsSwitch = docId && docId !== activeDoc.value

  const scrollNow = () => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSectionId.value = sectionId
  }

  if (needsSwitch) {
    switchDoc(docId)
    nextTick(() => requestAnimationFrame(scrollNow))
  } else {
    scrollNow()
  }
}

onMounted(() => {
  // CHANGED: Check the universal site theme preference. Defaults to dark.
  const savedTheme = localStorage.getItem('webhive-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = true
  }

  // Keep root context token up-to-date instantly on view mount
  applyGlobalThemeClass(isDarkMode.value)
  initObserver()
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const onMenuEnter = (el, done) => {
  gsap.fromTo(el,
    { opacity: 0 },
    { opacity: 1, duration: 0.4, ease: 'power2.out' }
  )
  gsap.fromTo(el.querySelectorAll('.menu-link, .consult-btn-overlay'),
    { yPercent: 100 },
    { yPercent: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', delay: 0.1, onComplete: done }
  )
}

const onMenuLeave = (el, done) => {
  gsap.to(el.querySelectorAll('.menu-link, .consult-btn-overlay'),
    { yPercent: -100, duration: 0.4, stagger: 0.03, ease: 'power3.in' }
  )
  gsap.to(el,
    { opacity: 0, duration: 0.4, ease: 'power2.in', delay: 0.15, onComplete: done }
  )
}
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:global(html::-webkit-scrollbar),
:global(body::-webkit-scrollbar) {
  display: none;
  width: 0;
  height: 0;
}

:global(html),
:global(body) {
  margin: 0;
  padding: 0;
}

:global(body) {
  overflow-x: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* ----------------------------------------- */
/* 1. CORE SETUP & VARIABLES                 */
/* ----------------------------------------- */
.hero-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  /* Fluid clearance used for nav-aware offsets below (sticky rail,
     scroll-margin, hero padding) — grows per breakpoint tier so it
     always matches the new full-width navbar's actual height. */
  --nav-clearance: clamp(58px, 9vh, 88px);

  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
}

/* Scoped to the areas that actually need the reset — deliberately
   excludes the <Footer> child component so its own internal centering
   margin isn't zeroed out by this rule (see Studio.vue fix). */
.navbar,
.navbar *,
.navbar *::before,
.navbar *::after,
.nav-overlay,
.nav-overlay *,
.nav-overlay *::before,
.nav-overlay *::after,
.hero-main,
.hero-main *,
.hero-main *::before,
.hero-main *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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

/* ----------------------------------------- */
/* 2. BACKGROUND INTERACTIVE NET GRID        */
/* ----------------------------------------- */
.bg-overlay {
  position: fixed;
  inset: 0;
  opacity: 0.2;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
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

/* =========================================================
   NAVBAR — full width, flush to the top and side edges, no
   floating pill margin. Matches the Home.vue / About.vue /
   Services.vue / Portfolio.vue / Culture.vue / Studio.vue
   redesign exactly. Fluid base + explicit per-tier
   growth/shrink further down.
   ========================================================= */
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
  background: #ffffff;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
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

/* ----------------------------------------- */
/* 4. NAVIGATION OVERLAY SYSTEM              */
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

.theme-dark .nav-overlay {
  background-color: rgba(11, 12, 16, 0.96);
}

.theme-light .nav-overlay {
  background-color: #ffffff;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
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

/* ----------------------------------------- */
/* 5. HERO MAIN / AMBIENT ELEMENTS           */
/* fixed calc()-based top padding (tuned for  */
/* the old floating navbar) replaced with     */
/* --nav-clearance, matching every other page.*/
/* ----------------------------------------- */
.hero-main {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  width: 100%;
  padding: calc(var(--nav-clearance) + 16px) clamp(20px, 6vw, 80px) 0;
}

.ambient-glow {
  position: fixed;
  width: min(550px, 80vw);
  height: min(550px, 80vw);
  border-radius: 50%;
  filter: blur(140px);
  -webkit-filter: blur(140px);
  mix-blend-mode: screen;
  pointer-events: none;
  opacity: 0.12;
  top: 5%;
  right: -10%;
  z-index: 0;
}

.theme-dark .ambient-glow {
  background-color: var(--brand-accent);
}

.theme-light .ambient-glow {
  background-color: #fdba74;
  mix-blend-mode: multiply;
  opacity: 0.2;
}

/* ----------------------------------------- */
/* 6. POLICY HERO                            */
/* ----------------------------------------- */
.policy-hero {
  max-width: 900px;
  margin: 0 auto clamp(32px, 5vw, 56px);
  width: 100%;
}

.hero-eyebrow {
  display: inline-block;
  font-family: monospace;
  font-size: 12px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--brand-accent);
  opacity: 0.8;
  margin-bottom: 14px;
}

.hero-title {
  font-size: clamp(1.9rem, 4vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin-bottom: 16px;
}

.accent-text {
  color: var(--brand-accent);
}

.hero-subtitle {
  font-size: clamp(14px, 1.4vw, 17px);
  line-height: 1.6;
  max-width: 560px;
  color: #9ca3af;
  margin-bottom: clamp(24px, 3vw, 36px);
}

.theme-light .hero-subtitle {
  color: #4b5563;
}

.doc-tabs {
  display: inline-flex;
  gap: 6px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.theme-light .doc-tabs {
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.doc-tab {
  border: none;
  background: transparent;
  color: inherit;
  opacity: 0.6;
  font-size: 13.5px;
  font-weight: 700;
  padding: 9px 20px;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s, opacity 0.25s;
  white-space: nowrap;
}

.doc-tab:hover {
  opacity: 0.9;
}

.doc-tab-active {
  background-color: var(--brand-accent);
  color: #0f172a;
  opacity: 1;
}

/* ----------------------------------------- */
/* 7. POLICY BODY: RAIL + CONTENT             */
/* ----------------------------------------- */
.policy-body {
  max-width: 1160px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: clamp(24px, 4vw, 56px);
  align-items: start;
}

.index-rail {
  position: sticky;
  top: calc(var(--nav-clearance) + 24px);
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: calc(100vh - var(--nav-clearance) - 100px);
  overflow-y: auto;
  padding-right: 8px;
}

.index-rail::-webkit-scrollbar {
  width: 4px;
}

.index-rail::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.rail-link {
  display: flex;
  align-items: baseline;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  opacity: 0.55;
  padding: 9px 12px;
  border-radius: 10px;
  border-left: 2px solid transparent;
  transition: opacity 0.2s, background-color 0.2s, border-color 0.2s;
  font-size: 13px;
  line-height: 1.35;
}

.rail-link:hover {
  opacity: 0.85;
  background: rgba(255, 255, 255, 0.04);
}

.theme-light .rail-link:hover {
  background: rgba(15, 23, 42, 0.04);
}

.rail-link-active {
  opacity: 1;
  border-left-color: var(--brand-accent);
  background: rgba(255, 255, 255, 0.05);
  font-weight: 700;
}

.theme-light .rail-link-active {
  background: rgba(15, 23, 42, 0.05);
}

.rail-index {
  font-family: monospace;
  font-size: 11px;
  color: var(--brand-accent);
  flex-shrink: 0;
}

/* NEW: Go Back entry pinned after the section links inside the rail */
.go-back-rail-link {
  align-items: center;
  gap: 10px;
  width: 100%;
  border: none;
  border-left: 2px solid transparent;
  background: transparent;
  color: var(--brand-accent);
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  opacity: 0.85;
  margin-top: 10px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  text-align: left;
}

.theme-light .go-back-rail-link {
  border-top-color: rgba(15, 23, 42, 0.08);
}

.go-back-rail-link:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.04);
  border-left-color: var(--brand-accent);
}

.theme-light .go-back-rail-link:hover {
  background: rgba(15, 23, 42, 0.04);
}

.rail-back-arrow {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.go-back-rail-link:hover .rail-back-arrow {
  transform: translateX(-3px);
}

.policy-content {
  min-width: 0;
  padding-bottom: 80px;
}

.policy-section {
  scroll-margin-top: calc(var(--nav-clearance) + 40px);
  padding: clamp(28px, 4vw, 40px) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.theme-light .policy-section {
  border-bottom-color: rgba(15, 23, 42, 0.08);
}

.policy-section:last-child {
  border-bottom: none;
}

.section-head {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 16px;
}

.section-index {
  font-family: monospace;
  font-size: 13px;
  color: var(--brand-accent);
  opacity: 0.85;
  flex-shrink: 0;
}

.section-title {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 800;
  letter-spacing: -0.01em;
}

.section-text {
  font-size: 14.5px;
  line-height: 1.75;
  color: #9ca3af;
  margin-bottom: 14px;
  max-width: 720px;
}

.section-text:last-child {
  margin-bottom: 0;
}

.theme-light .section-text {
  color: #4b5563;
}

.section-list {
  margin-top: 4px;
  padding-left: 20px;
  max-width: 720px;
}

.section-list li {
  font-size: 14px;
  line-height: 1.8;
  color: #9ca3af;
}

.theme-light .section-list li {
  color: #4b5563;
}

.cross-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  color: var(--brand-accent);
  font-weight: 700;
  font-size: 13.5px;
  text-decoration: none;
  transition: opacity 0.2s;
}

.cross-link:hover {
  opacity: 0.8;
}

.cross-link-arrow {
  width: 14px;
  height: 14px;
}

@media (max-width: 900px) {
  .policy-body {
    grid-template-columns: 1fr;
  }

  .index-rail {
    position: sticky;
    top: calc(var(--nav-clearance) + 8px);
    flex-direction: row;
    max-height: none;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 6px;
    padding: 10px 4px;
    background: inherit;
    z-index: 5;
  }

  .rail-link {
    border-left: none;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    padding: 8px 10px;
  }

  .rail-link-active {
    border-bottom-color: var(--brand-accent);
  }

  .rail-label {
    display: none;
  }

  .rail-index {
    font-size: 12px;
  }

  .go-back-rail-link {
    width: auto;
    margin-top: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    border-top: none;
    border-left: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0;
  }

  .theme-light .go-back-rail-link {
    border-left-color: rgba(15, 23, 42, 0.15);
  }

  .rail-back-arrow {
    width: 16px;
    height: 16px;
  }
}

/* ----------------------------------------- */
/* 8. FOOTER (preserved styles, now unused    */
/* since <Footer /> handles this — kept for   */
/* parity with the rest of the site)          */
/* ----------------------------------------- */
.footer-group {
  width: 100%;
  position: relative;
  z-index: 10;
  flex-shrink: 0;
}

.copyright-section {
  width: 100%;
  text-align: center;
  padding: 30px 20px;
  font-size: 11px;
  border-top: 1px solid;
}

.theme-dark .copyright-section {
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(9, 9, 11, 0.6);
  border-top-color: rgba(255, 255, 255, 0.05);
}

.theme-light .copyright-section {
  color: rgba(15, 23, 42, 0.5);
  background-color: #ffffff;
  border-top-color: rgba(15, 23, 42, 0.06);
}

/* =========================================================================
   BREAKPOINT TIERS
   Organized by the exact ranges used across the rest of the site,
   desktop-first (max-width cascades down). Navbar sizing mirrors every
   other page tier-for-tier; --nav-clearance is bumped alongside it so
   sticky offsets and scroll-margins always stay in sync with the
   navbar's actual height at that tier.
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
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

  .hero-wrapper {
    --nav-clearance: 68px;
  }

  .policy-body {
    max-width: 1000px;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
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

  .hero-wrapper {
    --nav-clearance: 74px;
  }

  .policy-hero {
    max-width: 980px;
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

  .hero-wrapper {
    --nav-clearance: 82px;
  }

  .hero-main {
    padding-inline: clamp(40px, 6vw, 110px);
  }

  .policy-hero {
    max-width: 1100px;
  }

  .hero-title {
    font-size: clamp(2.8rem, 3.2vw, 4rem);
  }

  .policy-body {
    max-width: 1360px;
  }

  .section-title {
    font-size: clamp(1.3rem, 1.4vw, 1.7rem);
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up (e.g. 2560px) ---------- */
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

  .hero-wrapper {
    --nav-clearance: 96px;
  }

  .hero-main {
    padding-inline: clamp(60px, 7vw, 160px);
  }

  .policy-hero {
    max-width: 1300px;
  }

  .hero-title {
    font-size: clamp(3.2rem, 2.8vw, 4.6rem);
  }

  .hero-subtitle {
    max-width: 680px;
    font-size: 1.15rem;
  }

  .policy-body {
    max-width: 1600px;
    grid-template-columns: 300px 1fr;
  }

  .section-title {
    font-size: clamp(1.5rem, 1.2vw, 1.9rem);
  }

  .section-text,
  .section-list {
    font-size: 15.5px;
  }
}

/* ---------- Laptops / Large Tablets — 901px to 1024px ---------- */
@media (min-width: 901px) and (max-width: 1024px) {
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

  .hero-wrapper {
    --nav-clearance: 62px;
  }

  .hero-title {
    font-size: clamp(1.9rem, 4.6vw, 2.8rem);
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 900px ---------- */
@media (min-width: 481px) and (max-width: 900px) {
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

  .hero-wrapper {
    --nav-clearance: 58px;
  }

  .hero-title {
    font-size: clamp(1.7rem, 6vw, 2.3rem);
  }

  .hero-subtitle {
    max-width: 90%;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
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

  .hero-wrapper {
    --nav-clearance: 54px;
  }

  .hero-main {
    padding-left: 16px;
    padding-right: 16px;
  }

  .hero-title {
    font-size: clamp(1.5rem, 8vw, 1.9rem);
  }

  .hero-subtitle {
    font-size: 0.9rem;
    max-width: 100%;
  }

  .doc-tab {
    padding: 8px 14px;
    font-size: 12.5px;
  }

  .section-text,
  .section-list li {
    font-size: 13.5px;
  }
}

@media (max-width: 360px) {
  .navbar {
    padding: 0.5rem 0.7rem;
  }

  .logo {
    font-size: 1rem;
  }

  .hero-main {
    padding-left: 14px;
    padding-right: 14px;
  }

  .hero-title {
    font-size: clamp(1.3rem, 8.5vw, 1.7rem);
  }
}
</style>