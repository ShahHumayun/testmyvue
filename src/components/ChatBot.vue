<script setup>
import { ref, reactive, nextTick, computed } from 'vue'
import emailjs from '@emailjs/browser'

const chatTree = {
  start: {
    sender: 'bot',
    message: "Hi! I'm the WebHive assistant. What kind of solution are you looking to build?",
    type: 'buttons',
    options: [
      { text: '💻 Custom Web App',       value: 'Custom Web Application',  nextStep: 'ask_platform' },
      { text: '📱 Mobile App',           value: 'Mobile App',              nextStep: 'ask_platform' },
      { text: '🛒 E-Commerce Platform',  value: 'E-Commerce Platform',     nextStep: 'ask_platform' },
      { text: '⚡ NetSuite Integration', value: 'NetSuite Integration',    nextStep: 'ask_platform' },
    ],
  },
  ask_platform: {
    sender: 'bot',
    message: 'Great choice! Which platform are you targeting?',
    type: 'buttons',
    options: [
      { text: '🌐 Web',          value: 'Web',          nextStep: 'ask_budget' },
      { text: '📱 Mobile',       value: 'Mobile',       nextStep: 'ask_budget' },
      { text: '🖥️ Both',         value: 'Web & Mobile', nextStep: 'ask_budget' },
      { text: '🤔 Not sure yet', value: 'Not decided',  nextStep: 'ask_budget' },
    ],
  },
  ask_budget: {
    sender: 'bot',
    message: 'What is your estimated budget for this project?',
    type: 'buttons',
    options: [
      { text: 'Under $5K',   value: 'Under $5,000',      nextStep: 'ask_timeline' },
      { text: '$5K – $15K',  value: '$5,000 – $15,000',  nextStep: 'ask_timeline' },
      { text: '$15K – $50K', value: '$15,000 – $50,000', nextStep: 'ask_timeline' },
      { text: '$50K+',       value: '$50,000+',           nextStep: 'ask_timeline' },
    ],
  },
  ask_timeline: {
    sender: 'bot',
    message: 'What is your expected timeline to launch?',
    type: 'buttons',
    options: [
      { text: '< 1 month',    value: 'Less than 1 month', nextStep: 'ask_stage' },
      { text: '1 – 3 months', value: '1–3 months',        nextStep: 'ask_stage' },
      { text: '3 – 6 months', value: '3–6 months',        nextStep: 'ask_stage' },
      { text: 'Flexible',     value: 'Flexible',           nextStep: 'ask_stage' },
    ],
  },
  ask_stage: {
    sender: 'bot',
    message: 'Where is your project right now?',
    type: 'buttons',
    options: [
      { text: '💡 Just an idea',         value: 'Just an idea',                nextStep: 'ask_description' },
      { text: '📄 Have requirements',    value: 'Have requirements',           nextStep: 'ask_description' },
      { text: '🔄 Redesigning existing', value: 'Redesigning existing product',nextStep: 'ask_description' },
      { text: '🚀 Ready to build',       value: 'Ready to build',              nextStep: 'ask_description' },
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

const currentStep   = ref('start')
const isTyping      = ref(false)
const inputValue    = ref('')
const chatEl        = ref(null)

const lead = reactive({
  service: '', platform: '', budget: '',
  timeline: '', project_stage: '',
  description: '', name: '', email: '',
})

const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
const messages      = ref([{ id: 1, sender: 'bot', text: chatTree.start.message, time: now() }])
const activeOptions = ref(chatTree.start.options)
const stepType      = computed(() => chatTree[currentStep.value]?.type ?? '')

const scroll = async () => {
  await nextTick()
  if (chatEl.value) chatEl.value.scrollTop = chatEl.value.scrollHeight
}

const stepFieldMap = {
  ask_platform: 'platform',
  ask_budget:   'budget',
  ask_timeline: 'timeline',
  ask_stage:    'project_stage',
}

const handleOption = (option) => {
  const field = stepFieldMap[currentStep.value] || 'service'
  lead[field] = option.value
  messages.value.push({ id: Date.now(), sender: 'user', text: option.text, time: now() })
  activeOptions.value = []
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
        from_name:     lead.name,
        from_email:    lead.email,
        service:       lead.service,
        platform:      lead.platform,
        budget:        lead.budget,
        timeline:      lead.timeline,
        project_stage: lead.project_stage,
        description:   lead.description,
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

<template>
  <section class="chatbot-section">
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>

    <div class="chatbot-eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-text">Interactive Assistant</span>
    </div>

    <h2 class="chatbot-heading">Let's blueprint your project</h2>
    <p class="chatbot-subheading">Select your requirements below to match with our technical experts layout.</p>

    <div class="chatbot-card">
      <div class="chatbot-header">
        <div class="header-left">
          <div class="header-avatar">
            <span class="avatar-letter">W</span>
            <div class="header-dot"></div>
          </div>
          <div>
            <p class="header-title">WebHive Engine</p>
            <p class="header-sub">Automated System · Active</p>
          </div>
        </div>
      </div>

      <div ref="chatEl" class="chatbot-messages">
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="['msg-row', msg.sender === 'user' ? 'msg-row--user' : 'msg-row--bot']"
        >
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

      <div class="chatbot-footer">
        <div v-if="stepType === 'buttons' && activeOptions.length" class="options-grid">
          <button
            v-for="opt in activeOptions"
            :key="opt.text"
            class="option-btn"
            @click="handleOption(opt)"
          >
            {{ opt.text }}
          </button>
        </div>

        <div v-else-if="stepType === 'text_input'" class="input-row">
          <input
            v-model="inputValue"
            :type="chatTree[currentStep]?.inputField === 'email' ? 'email' : 'text'"
            :placeholder="chatTree[currentStep]?.placeholder"
            class="chat-input"
            @keydown.enter="handleInput"
          />
          <button class="send-btn" @click="handleInput" aria-label="Send">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" width="16" height="16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>

        <div v-else-if="currentStep === 'completed'" class="completed-msg">
          <span class="success-icon">✦</span> Project request transmitted successfully.
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section wrapper ── */
.chatbot-section {
  position: relative;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: clamp(60px, 10vh, 120px) clamp(16px, 4vw, 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  overflow: hidden;
}

/* Background Ambient Glows */
.bg-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 0; /* Clear rounded shapes */
  background: radial-gradient(square, rgba(0, 255, 163, 0.08) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
  filter: blur(40px);
}
.bg-glow-1 { top: 10%; left: -10%; }
.bg-glow-2 { bottom: 10%; right: -10%; }

/* ── Eyebrow ── */
.chatbot-eyebrow {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.03);
  padding: 6px 14px;
  border-radius: 0; /* Clear rounded shapes */
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 0; /* Clear rounded shapes */
  background: #00ffa3;
  box-shadow: 0 0 10px #00ffa3;
  animation: pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.eyebrow-text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
}

/* ── Headings ── */
.chatbot-heading {
  position: relative;
  z-index: 1;
  font-size: clamp(1.8rem, 4.5vw, 2.6rem);
  font-weight: 800;
  color: #fff;
  text-align: center;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
  line-height: 1.15;
}
.chatbot-subheading {
  position: relative;
  z-index: 1;
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  line-height: 1.6;
  margin-bottom: 36px;
  max-width: 460px;
}

/* ── Card ── */
.chatbot-card {
  position: relative;
  z-index: 1;
  width: 100%;
  background: rgba(13, 13, 13, 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 0; /* Clear rounded shapes */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 580px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* ── Header ── */
.chatbot-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(20, 20, 20, 0.4);
  flex-shrink: 0;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.header-avatar {
  position: relative;
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0; /* Clear rounded shapes */
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-letter {
  font-weight: 700;
  font-size: 14px;
  color: #00ffa3;
  text-shadow: 0 0 10px rgba(0, 255, 163, 0.3);
}
.header-dot {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  border-radius: 0; /* Clear rounded shapes */
  background: #00ffa3;
  box-shadow: 0 0 8px #00ffa3;
  border: 2px solid #0d0d0d;
}
.header-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.2;
}
.header-sub {
  font-size: 11px;
  color: rgba(0, 255, 163, 0.7);
  margin: 2px 0 0;
  line-height: 1;
  font-weight: 500;
}

/* ── Messages ── */
.chatbot-messages {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  scroll-behavior: smooth;
  background-color: transparent;
  background-image: radial-gradient(rgba(255, 255, 255, 0.015) 1.5px, transparent 1.5px);
  background-size: 24px 24px;
}
.chatbot-messages::-webkit-scrollbar { width: 4px; }
.chatbot-messages::-webkit-scrollbar-track { background: transparent; }
.chatbot-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 0; }

.msg-row { display: flex; margin: 2px 0; }
.msg-row--bot  { justify-content: flex-start; }
.msg-row--user { justify-content: flex-end; }

.msg-bubble {
  max-width: 80%;
  padding: 14px 20px;
  border-radius: 0 !important; /* Clear all chat bubble variants completely */
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.msg-text { word-break: break-word; color: rgba(255, 255, 255, 0.95); }
.msg-time {
  font-size: 9.5px;
  opacity: 0.4;
  align-self: flex-end;
  margin-top: 2px;
}

.msg-bubble--bot {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.msg-bubble--user {
  background: linear-gradient(135deg, rgba(0, 255, 163, 0.15) 0%, rgba(0, 180, 110, 0.05) 100%);
  border: 1px solid rgba(0, 255, 163, 0.2);
  box-shadow: 0 4px 15px rgba(0, 255, 163, 0.03);
}
.msg-bubble--user .msg-text { color: #fff; }

/* ── Typing dots ── */
.typing-dots {
  display: flex;
  flex-direction: row !important;
  align-items: center;
  gap: 5px;
  padding: 14px 20px;
}
.typing-dots span {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 0; /* Clear rounded shapes */
  background: rgba(0, 255, 163, 0.8);
  animation: bounce-dot 1.4s infinite ease-in-out;
}
.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }

/* ── Footer ── */
.chatbot-footer {
  padding: 20px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(16, 16, 16, 0.5);
  flex-shrink: 0;
}

/* ── Options ── */
.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.option-btn {
  padding: 14px 18px;
  border-radius: 0; /* Clear rounded shapes */
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  color: rgba(255, 255, 255, 0.75);
  font-size: 13.5px;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.option-btn:hover {
  border-color: rgba(0, 255, 163, 0.4);
  color: #00ffa3;
  background: rgba(0, 255, 163, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 255, 163, 0.05);
}
.option-btn:active { transform: translateY(0) scale(0.98); }

/* ── Input row ── */
.input-row {
  display: flex;
  gap: 10px;
  align-items: center;
}
.chat-input {
  flex: 1;
  height: 48px;
  padding: 0 18px;
  border-radius: 0; /* Clear rounded shapes */
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.chat-input::placeholder { color: rgba(255, 255, 255, 0.25); }
.chat-input:focus { 
  border-color: rgba(0, 255, 163, 0.5); 
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 12px rgba(0, 255, 163, 0.05);
}

.send-btn {
  width: 48px;
  height: 48px;
  border-radius: 0; /* Clear rounded shapes */
  border: none;
  background: #00ffa3;
  color: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 255, 163, 0.2);
}
.send-btn:hover  { 
  background: #1affb1; 
  transform: scale(1.04);
  box-shadow: 0 6px 16px rgba(0, 255, 163, 0.3);
}
.send-btn:active { transform: scale(0.96); }

/* ── Completed ── */
.completed-msg {
  text-align: center;
  font-size: 14px;
  color: #00ffa3;
  font-weight: 500;
  padding: 12px 0;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.success-icon {
  font-size: 16px;
  animation: pulse-green 1.5s infinite;
}

/* ── Keyframes ── */
@keyframes pulse-green {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.6; transform: scale(0.95); }
}
@keyframes bounce-dot {
  0%, 100% { transform: translateY(0); opacity: 0.4; }
  50%       { transform: translateY(-6px); opacity: 1; }
}

/* ── Mobile Responsive Overrides ── */
@media (max-width: 520px) {
  .options-grid { grid-template-columns: 1fr; gap: 10px; }
  .chatbot-card { height: 520px; }
  .chatbot-section { padding: 40px 16px; }
}
</style>