<template>
  <!-- chatbot -->
  <section :class="['chatbot-section', variant === 'popup' && 'chatbot-section--popup']">

    <!-- Section label -->
    <div class="chatbot-eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-text">Start a Conversation</span>
    </div>

    <h2 class="chatbot-heading">Tell us about your project</h2>
    <p class="chatbot-subheading">Answer a few quick questions and our team will get back to you within 24 hours.</p>

    <!-- Chat widget -->
    <div class="chatbot-card">

      <!-- Header -->
      <div class="chatbot-header">
        <div class="header-left">
          <div class="header-dot"></div>
          <div>
            <p class="header-title">WebHive Assistant</p>
            <p class="header-sub">Online · Replies instantly</p>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div ref="chatEl" class="chatbot-messages">
        <div v-for="msg in messages" :key="msg.id"
          :class="['msg-row', msg.sender === 'user' ? 'msg-row--user' : 'msg-row--bot']">
          <div :class="['msg-bubble', msg.sender === 'user' ? 'msg-bubble--user' : 'msg-bubble--bot']">
            <span class="msg-text">{{ msg.text }}</span>
            <span class="msg-time">{{ msg.time }}</span>
          </div>
        </div>

        <div v-if="isTyping" class="msg-row msg-row--bot">
          <div class="msg-bubble msg-bubble--bot typing-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      <!-- Input area -->
      <div class="chatbot-footer">

        <div v-if="stepType === 'buttons' && activeOptions.length" class="options-grid">
          <button v-for="opt in activeOptions" :key="opt.text" class="option-btn" @click="handleOption(opt)">
            {{ opt.text }}
          </button>
        </div>

        <div v-else-if="stepType === 'text_input'" class="input-row">
          <input v-model="inputValue" :type="chatTree[currentStep]?.inputField === 'email' ? 'email' : 'text'"
            :placeholder="chatTree[currentStep]?.placeholder" class="chat-input" @keydown.enter="handleInput" />
          <button class="send-btn" @click="handleInput" aria-label="Send">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" width="18" height="18">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>

        <div v-else-if="currentStep === 'completed'" class="completed-msg">
          ✓ Message sent — we will be in touch soon!
        </div>

      </div>
    </div>

  </section>
  <!-- chatbot end -->
</template>

<script setup>
import { ref, reactive, nextTick, computed } from 'vue'
import emailjs from '@emailjs/browser'


const props = defineProps({
  variant: { type: String, default: 'section' } // 'section' | 'popup'
})

// ── FAQ data ──────────────────────────────────────────────
// Answers shown to visitors who click "I Have a Question" instead of
// starting the quote flow. Purely informational — none of this is sent
// via email, so the EmailJS template does not need to change.
const faqData = {
  company: {
    label: '🏢 Company',
    questions: [
      { q: 'What services do you offer?', a: 'We offer web development, mobile app development, Magento & e-commerce development, and NetSuite integration.' },
      { q: 'Why should I choose WebHive?', a: 'We combine technical expertise with a fast, transparent process — from Magento specialists to full-stack developers, we build real solutions, not just websites.' },
      { q: 'Can I see your portfolio?', a: 'Yes! Check out the Portfolio section on our site to see examples of our recent work.' },
      { q: 'Do you work with international clients?', a: 'Absolutely — we work with clients across the globe and communicate via your preferred channel (email, Slack, Zoom, etc).' },
      { q: 'How do I get started?', a: "Just click 'Get a Quote' below and answer a few quick questions — we'll get back to you within 24 hours." },
    ],
  },
  webdev: {
    label: '💻 Web Development',
    questions: [
      { q: 'Do you build custom or business websites?', a: 'Yes, we build fully custom business, corporate, and startup websites tailored to your goals.' },
      { q: 'Can you redesign my existing website?', a: 'Yes, we regularly redesign and modernize existing websites while preserving what already works.' },
      { q: 'Do you build web applications or custom web solutions?', a: 'Yes, we build custom web apps beyond simple sites, including internal tools and client-facing platforms.' },
      { q: 'Can you integrate APIs into my website?', a: 'Yes, we integrate third-party and custom APIs into websites and web apps.' },
      { q: 'What technologies do you use for web development?', a: 'Mainly NextJs, React, Tailwind CSS, Laravel, and GSAP, with backend integrations chosen per project.' },
    ],
  },
  mobile: {
    label: '📱 Mobile App Development',
    questions: [
      { q: 'Do you build Android, iPhone, or cross-platform apps?', a: 'Yes, we build for Android, iOS, and cross-platform, depending on your needs.' },
      { q: 'Can you build an MVP for my startup?', a: 'Yes, MVP development is one of our specialties for startups looking to launch fast.' },
      { q: 'Can you redesign or add features to my existing app?', a: 'Yes, we can redesign existing apps or extend them with new features.' },
      { q: 'Do you publish on Google Play / App Store?', a: 'Yes, we handle the full publishing process for both stores.' },
      { q: 'What technologies do you use for app development?', a: 'Typically React Native, with native tooling used when performance requires it.' },
    ],
  },
  magento: {
    label: '🛍️ Magento Development',
    questions: [
      { q: 'Do you build custom Magento stores?', a: 'Yes, custom Magento development is one of our core specialties.' },
      { q: 'Can you migrate my store to Magento or upgrade it?', a: 'Yes, we handle both migrations to Magento and upgrades to the latest version.' },
      { q: 'Do you develop Magento extensions or customize themes?', a: 'Yes, we build custom extensions and fully customize Magento themes.' },
      { q: 'Can you integrate payment gateways and shipping services?', a: 'Yes, we integrate payment gateways and shipping providers into Magento stores.' },
      { q: 'Can you improve Magento speed and SEO?', a: 'Yes, Magento performance tuning and SEO optimization are part of our standard offering.' },
    ],
  },
  ecommerce: {
    label: '🛒 E-Commerce',
    questions: [
      { q: 'Which e-commerce platforms do you support?', a: 'Magento is our specialty, and we also support Shopify and fully custom e-commerce builds.' },
      { q: 'Can you build a multi-vendor marketplace?', a: 'Yes, we build multi-vendor marketplace platforms.' },
      { q: 'Can you integrate Stripe/PayPal or other payment gateways?', a: 'Yes, we integrate Stripe, PayPal, and other major payment gateways.' },
      { q: 'Can you migrate or improve my existing online store?', a: 'Yes, we handle store migrations and performance/UX improvements for existing stores.' },
    ],
  },
  netsuite: {
    label: '⚡ NetSuite Integration',
    questions: [
      { q: 'What is NetSuite integration and do you provide it?', a: 'NetSuite integration connects your website or store to NetSuite ERP so data flows automatically between systems — yes, we provide this.' },
      { q: 'Can you integrate NetSuite with Magento, Shopify, or my ERP/CRM?', a: 'Yes, we integrate NetSuite with Magento, Shopify, and most ERP/CRM systems.' },
      { q: 'Can you sync inventory, orders, or customer data with NetSuite?', a: 'Yes, we set up automatic syncing of inventory, orders, and customer data with NetSuite.' },
      { q: 'Can you automate workflows with NetSuite?', a: 'Yes, we build automated business workflows powered by NetSuite.' },
    ],
  },
  process: {
    label: '📋 Process, Pricing & Support',
    questions: [
      { q: 'How does your development process work?', a: 'Discovery, proposal, design, build, testing, and launch — with regular check-ins throughout.' },
      { q: 'What information do you need before starting?', a: "Your goals, target platform, rough budget, timeline, and any existing assets or requirements you have." },
      { q: 'How much does a project typically cost?', a: 'Cost varies by scope — click "Get a Quote" and share your details for an accurate estimate.' },
      { q: 'How long does a typical project take?', a: 'Timelines vary by scope, typically ranging from a few weeks to a few months.' },
      { q: 'Do you provide ongoing maintenance and support after launch?', a: 'Yes, we offer ongoing maintenance and support plans after launch.' },
      { q: 'Will you train my team or provide documentation?', a: 'Yes, we provide documentation and can train your team as part of handover.' },
    ],
  },
}

const faqFollowUpOptions = [
  { text: '❓ Ask Another Question', value: 'faq_categories' },
  { text: '📝 Get a Quote', value: 'start' },
]

// ── Lead-capture chat tree (unchanged) ───────────────────
const chatTree = {
  start: {
    sender: 'bot',
    message: "Hi! I'm the WebHive assistant. What kind of solution are you looking to build?",
    type: 'buttons',
    options: [
      { text: '💻 Custom Web App', value: 'Custom Web Application', nextStep: 'ask_platform' },
      { text: '📱 Mobile App', value: 'Mobile App', nextStep: 'ask_platform' },
      { text: '🛒 E-Commerce Platform', value: 'E-Commerce Platform', nextStep: 'ask_platform' },
      { text: '⚡ NetSuite Integration', value: 'NetSuite Integration', nextStep: 'ask_platform' },
      { text: '❓ I Have a Question', value: 'FAQ', nextStep: 'faq_categories' },
    ],
  },
  ask_platform: {
    sender: 'bot',
    message: 'Great choice! Which platform are you targeting?',
    type: 'buttons',
    options: [
      { text: '🌐 Web', value: 'Web', nextStep: 'ask_budget' },
      { text: '📱 Mobile', value: 'Mobile', nextStep: 'ask_budget' },
      { text: '🖥️ Both', value: 'Web & Mobile', nextStep: 'ask_budget' },
      { text: '🤔 Not sure yet', value: 'Not decided', nextStep: 'ask_budget' },
    ],
  },
  ask_budget: {
    sender: 'bot',
    message: 'What is your estimated budget for this project?',
    type: 'buttons',
    options: [
      { text: 'Under $5K', value: 'Under $5,000', nextStep: 'ask_timeline' },
      { text: '$5K – $15K', value: '$5,000 – $15,000', nextStep: 'ask_timeline' },
      { text: '$15K – $50K', value: '$15,000 – $50,000', nextStep: 'ask_timeline' },
      { text: '$50K+', value: '$50,000+', nextStep: 'ask_timeline' },
    ],
  },
  ask_timeline: {
    sender: 'bot',
    message: 'What is your expected timeline to launch?',
    type: 'buttons',
    options: [
      { text: '< 1 month', value: 'Less than 1 month', nextStep: 'ask_stage' },
      { text: '1 – 3 months', value: '1–3 months', nextStep: 'ask_stage' },
      { text: '3 – 6 months', value: '3–6 months', nextStep: 'ask_stage' },
      { text: 'Flexible', value: 'Flexible', nextStep: 'ask_stage' },
    ],
  },
  ask_stage: {
    sender: 'bot',
    message: 'Where is your project right now?',
    type: 'buttons',
    options: [
      { text: '💡 Just an idea', value: 'Just an idea', nextStep: 'ask_description' },
      { text: '📄 Have requirements', value: 'Have requirements', nextStep: 'ask_description' },
      { text: '🔄 Redesigning existing', value: 'Redesigning existing product', nextStep: 'ask_description' },
      { text: '🚀 Ready to build', value: 'Ready to build', nextStep: 'ask_description' },
    ],
  },
  ask_description: {
    sender: 'bot',
    message: 'Briefly describe what you want to build or the problem you want to solve.',
    type: 'text_input',
    inputField: 'description',
    placeholder: 'e.g. An app that helps restaurants manage reservations…',
    nextStep: 'ask_name',
  },
  ask_name: {
    sender: 'bot',
    message: 'Thanks! What is your name?',
    type: 'text_input',
    inputField: 'name',
    placeholder: 'Your full name',
    nextStep: 'ask_email',
  },
  ask_email: {
    sender: 'bot',
    message: (name) => `Nice to meet you, ${name}! What's your email address so our team can reach you?`,
    type: 'text_input',
    inputField: 'email',
    placeholder: 'name@company.com',
    nextStep: 'submit_lead',
  },
}

const currentStep = ref('start')
const isTyping = ref(false)
const inputValue = ref('')
const chatEl = ref(null)

const lead = reactive({
  service: '', platform: '', budget: '',
  timeline: '', project_stage: '',
  description: '', name: '', email: '',
})

const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
const messages = ref([{ id: 1, sender: 'bot', text: chatTree.start.message, time: now() }])
const activeOptions = ref(chatTree.start.options)
const stepType = computed(() => chatTree[currentStep.value]?.type ?? 'buttons')

const scroll = async () => {
  await nextTick()
  if (chatEl.value) chatEl.value.scrollTop = chatEl.value.scrollHeight
}

const stepFieldMap = {
  ask_platform: 'platform',
  ask_budget: 'budget',
  ask_timeline: 'timeline',
  ask_stage: 'project_stage',
}

// ── FAQ flow helpers ──────────────────────────────────────
const showFaqCategories = () => {
  currentStep.value = 'faq_categories'
  isTyping.value = true
  scroll()
  setTimeout(() => {
    isTyping.value = false
    messages.value.push({ id: Date.now(), sender: 'bot', text: 'Sure! What would you like to know about?', time: now() })
    activeOptions.value = Object.entries(faqData).map(([key, cat]) => ({ text: cat.label, value: key }))
    scroll()
  }, 800)
}

const showFaqQuestions = (categoryKey) => {
  currentStep.value = 'faq_questions'
  const category = faqData[categoryKey]
  isTyping.value = true
  scroll()
  setTimeout(() => {
    isTyping.value = false
    messages.value.push({ id: Date.now(), sender: 'bot', text: `Here are some common questions about ${category.label.replace(/^\S+\s/, '')}:`, time: now() })
    activeOptions.value = category.questions.map((item, idx) => ({ text: item.q, value: `${categoryKey}:${idx}` }))
    scroll()
  }, 800)
}

const showFaqAnswer = (refValue) => {
  const [categoryKey, idx] = refValue.split(':')
  const item = faqData[categoryKey].questions[Number(idx)]
  currentStep.value = 'faq_followup'
  isTyping.value = true
  scroll()
  setTimeout(() => {
    isTyping.value = false
    messages.value.push({ id: Date.now(), sender: 'bot', text: item.a, time: now() })
    activeOptions.value = faqFollowUpOptions
    scroll()
  }, 900)
}

const handleOption = (option) => {
  messages.value.push({ id: Date.now(), sender: 'user', text: option.text, time: now() })
  activeOptions.value = []

  // Entry point into the FAQ branch (from the main menu)
  if (option.nextStep === 'faq_categories') {
    showFaqCategories()
    return
  }

  // Inside the FAQ branch
  if (currentStep.value === 'faq_categories') {
    showFaqQuestions(option.value)
    return
  }
  if (currentStep.value === 'faq_questions') {
    showFaqAnswer(option.value)
    return
  }
  if (currentStep.value === 'faq_followup') {
    if (option.value === 'faq_categories') showFaqCategories()
    else advance('start')
    return
  }

  // Existing lead-capture flow
  const field = stepFieldMap[currentStep.value] || 'service'
  lead[field] = option.value
  advance(option.nextStep)
}

const handleInput = () => {
  const val = inputValue.value.trim()
  if (!val) return
  const step = chatTree[currentStep.value]
  lead[step.inputField] = val
  messages.value.push({ id: Date.now(), sender: 'user', text: val, time: now() })
  inputValue.value = ''
  if (step.nextStep === 'submit_lead') sendEmail()
  else advance(step.nextStep)
}

const advance = (key) => {
  currentStep.value = key
  const step = chatTree[key]
  if (!step) return
  isTyping.value = true
  scroll()
  setTimeout(() => {
    isTyping.value = false
    const text = typeof step.message === 'function' ? step.message(lead.name) : step.message
    messages.value.push({ id: Date.now(), sender: 'bot', text, time: now() })
    if (step.type === 'buttons') activeOptions.value = step.options
    scroll()
  }, 1000)
}

const sendEmail = async () => {
  isTyping.value = true
  scroll()
  try {
    const res = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: lead.name,
        from_email: lead.email,
        service: lead.service,
        platform: lead.platform,
        budget: lead.budget,
        timeline: lead.timeline,
        project_stage: lead.project_stage,
        description: lead.description,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    isTyping.value = false
    if (res.status === 200) {
      messages.value.push({ id: Date.now(), sender: 'bot', text: `✅ All done, ${lead.name}! Your details have been sent to our team. We'll get back to you within 24 hours.`, time: now() })
      currentStep.value = 'completed'
    }
  } catch (err) {
    console.error(err)
    isTyping.value = false
    messages.value.push({ id: Date.now(), sender: 'bot', text: '⚠️ Something went wrong. Please try again or email us directly.', time: now() })
  } finally {
    scroll()
  }
}
</script>

<style scoped>
/* ── chatbot design ── */
.chatbot-section {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: clamp(80px, 12vh, 140px) clamp(16px, 4vw, 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
}

/* ── Eyebrow ── */
.chatbot-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00ffa3;
  box-shadow: 0 0 8px rgba(0, 255, 163, 0.6);
  animation: pulse-green 2s infinite;
}

.eyebrow-text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #00ffa3;
}

/* ── Headings ── */
.chatbot-heading {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: #fff;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  line-height: 1.1;
  width: 100%;
  transition: color var(--transition-speed);
}

.theme-light .chatbot-heading {
  color: #0f172a;
}

.chatbot-subheading {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 420px;
  transition: color var(--transition-speed);
}

.theme-light .chatbot-subheading {
  color: #475569;
}

/* ── Card ── */
.chatbot-card {
  width: 100%;
  background: #0a0a0a;
  border-radius: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 560px;
  outline: 1px solid rgba(255, 255, 255, 0.07);
}

/* ── Header ── */
.chatbot-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d0d0d;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00ffa3;
  box-shadow: 0 0 8px rgba(0, 255, 163, 0.7);
  animation: pulse-green 2s infinite;
  flex-shrink: 0;
}

.header-title {
  font-size: 13.5px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1;
  text-align: center;
}

.header-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
  margin: 4px 0 0;
  line-height: 1;
  text-align: center;
}

/* ── Messages ── */
.chatbot-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  scroll-behavior: smooth;
  background-color: #050505;
  background-image: radial-gradient(rgba(0, 255, 163, 0.025) 1px, transparent 1px);
  background-size: 22px 22px;
}

.chatbot-messages::-webkit-scrollbar {
  width: 3px;
}

.chatbot-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chatbot-messages::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
}

.msg-row {
  display: flex;
  margin: 4px 0;
}

.msg-row--bot {
  justify-content: flex-start;
}

.msg-row--user {
  justify-content: flex-end;
}

.msg-bubble {
  max-width: 88%;
  padding: 10px 16px;
  border-radius: 0;
  font-size: 13.5px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 6px;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.msg-text {
  flex: 1 1 auto;
  word-break: break-word;
}

.msg-time {
  font-size: 10px;
  flex-shrink: 0;
  margin-left: auto;
  white-space: nowrap;
}

.msg-bubble--bot {
  background: #1c1c1e;
  color: #f0f0f0;
  border-bottom-left-radius: 0;
}

.msg-bubble--bot .msg-time {
  color: rgba(255, 255, 255, 0.35);
}

.msg-bubble--user {
  background: #008f5f;
  color: #fff;
  border-bottom-right-radius: 0;
}

.msg-bubble--user .msg-time {
  color: rgba(255, 255, 255, 0.65);
}

/* ── Typing dots ── */
.typing-dots {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 14px;
  background: #1c1c1e;
  border-bottom-left-radius: 0;
}

.typing-dots span {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  animation: bounce-dot 1.2s infinite;
}

.typing-dots span:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-dots span:nth-child(3) {
  animation-delay: 0.3s;
}

/* ── Footer ── */
.chatbot-footer {
  padding: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d0d0d;
  flex-shrink: 0;
}

/* ── Options ── */
.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.option-btn {
  padding: 16px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #111;
  color: #bbb;
  font-size: 11px;
  font-family: system-ui, -apple-system, sans-serif;
  cursor: pointer;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.01em;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
}

.option-btn:hover {
  border-color: #00ffa3;
  color: #00ffa3;
  background: rgba(0, 255, 163, 0.04);
}

.option-btn:active {
  transform: scale(0.97);
}

/* ── Input row ── */
.input-row {
  display: flex;
  gap: 8px;
  align-items: center;
}

.chat-input {
  flex: 1;
  height: 44px;
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #111;
  color: #fff;
  font-size: 13.5px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.chat-input::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

.chat-input:focus {
  border-color: #00ffa3;
}

.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 0;
  border: none;
  background: #00ffa3;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s, background 0.15s;
}

.send-btn:hover {
  background: #00e691;
}

.send-btn:active {
  transform: scale(0.94);
}

/* ── Completed ── */
.completed-msg {
  text-align: center;
  font-size: 13px;
  color: #00ffa3;
  font-weight: 500;
  padding: 10px 0;
  letter-spacing: 0.01em;
}

/* ── Keyframes ── */
@keyframes pulse-green {

  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 8px rgba(0, 255, 163, 0.7);
  }

  50% {
    opacity: 0.55;
    box-shadow: 0 0 4px rgba(0, 255, 163, 0.2);
  }
}

@keyframes bounce-dot {

  0%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-5px);
  }
}

/* =========================================================================
   BREAKPOINT TIERS
   Organized by the exact ranges used across the rest of the site. Every
   rule here is scoped with :not(.chatbot-section--popup) so the floating
   popup widget (already governed by its own fixed-size parent container
   in Home.vue/etc.) never gets resized just because the browser viewport
   happens to be large — only the inline page "section" variant scales.
   ========================================================================= */

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .chatbot-section:not(.chatbot-section--popup) {
    padding: clamp(64px, 11vh, 100px) 14px clamp(40px, 6vh, 64px);
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-heading {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-subheading {
    font-size: 13px;
    margin-bottom: 28px;
    max-width: 100%;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-card {
    height: clamp(420px, 68vh, 500px);
  }

  .chatbot-section:not(.chatbot-section--popup) .options-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .chatbot-section:not(.chatbot-section--popup) .option-btn {
    padding: 13px 14px;
    font-size: 12px;
    text-align: left;
  }

  .chatbot-section:not(.chatbot-section--popup) .chat-input,
  .chatbot-section:not(.chatbot-section--popup) .send-btn {
    height: 42px;
  }
}

@media (max-width: 360px) {
  .chatbot-section:not(.chatbot-section--popup) {
    padding-left: 10px;
    padding-right: 10px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-heading {
    font-size: 1.35rem;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-footer {
    padding: 14px;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .chatbot-section:not(.chatbot-section--popup) .chatbot-card {
    height: clamp(460px, 66vh, 540px);
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .chatbot-section:not(.chatbot-section--popup) {
    max-width: 680px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-card {
    height: 580px;
  }
}

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .chatbot-section:not(.chatbot-section--popup) {
    max-width: 700px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-card {
    height: 600px;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .chatbot-section:not(.chatbot-section--popup) {
    max-width: 720px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-card {
    height: 620px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-heading {
    font-size: 2.5rem;
  }
}

@media (min-width: 1536px) {
  .chatbot-section:not(.chatbot-section--popup) {
    max-width: 760px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-card {
    height: 640px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-heading {
    font-size: 2.65rem;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-subheading {
    font-size: 15px;
    max-width: 460px;
  }

  .chatbot-section:not(.chatbot-section--popup) .msg-bubble {
    font-size: 14.5px;
  }

  .chatbot-section:not(.chatbot-section--popup) .option-btn {
    font-size: 12px;
    padding: 18px 16px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chat-input {
    height: 48px;
    font-size: 14.5px;
  }

  .chatbot-section:not(.chatbot-section--popup) .send-btn {
    width: 48px;
    height: 48px;
  }

  .chatbot-section:not(.chatbot-section--popup) .header-title {
    font-size: 14.5px;
  }

  .chatbot-section:not(.chatbot-section--popup) .header-sub {
    font-size: 12px;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up (e.g. 2560px) ---------- */
@media (min-width: 1921px) {
  .chatbot-section:not(.chatbot-section--popup) {
    max-width: 820px;
  }

  .chatbot-section:not(.chatbot-section--popup) .eyebrow-text {
    font-size: 12.5px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-heading {
    font-size: 2.9rem;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-subheading {
    font-size: 16px;
    max-width: 500px;
    margin-bottom: 48px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-card {
    height: 680px;
  }

  .chatbot-section:not(.chatbot-section--popup) .header-title {
    font-size: 15.5px;
  }

  .chatbot-section:not(.chatbot-section--popup) .header-sub {
    font-size: 13px;
  }

  .chatbot-section:not(.chatbot-section--popup) .msg-bubble {
    font-size: 15px;
    padding: 12px 18px;
  }

  .chatbot-section:not(.chatbot-section--popup) .option-btn {
    font-size: 13px;
    padding: 20px 18px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chat-input {
    height: 52px;
    font-size: 15px;
    padding: 0 18px;
  }

  .chatbot-section:not(.chatbot-section--popup) .send-btn {
    width: 52px;
    height: 52px;
  }

  .chatbot-section:not(.chatbot-section--popup) .chatbot-footer {
    padding: 22px;
  }
}

/* ── Popup variant override (used only when embedded as a floating widget) ── */
.chatbot-section--popup {
  max-width: 100%;
  padding: 0;
  height: 100%;
}

.chatbot-section--popup .chatbot-eyebrow,
.chatbot-section--popup .chatbot-heading,
.chatbot-section--popup .chatbot-subheading {
  display: none;
}

.chatbot-section--popup .chatbot-card {
  height: 100%;
  outline: none;
}
</style>