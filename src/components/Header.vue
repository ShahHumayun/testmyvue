<template>
  <header>
    <nav class="nav-container">
      <a href="#" class="logo">
        WEBHIVE<span class="dot">.</span>
      </a>

      <div v-if="!isMenuOpen" class="desktop-links">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">
          {{ link.label }}
        </a>
      </div>

      <div class="nav-actions">
        <a href="#contact" class="btn-consultation hide-mobile">
          Consultation
        </a>
        
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="menu-toggle" 
          :aria-label="isMenuOpen ? 'Close Menu' : 'Open Menu'"
        >
          <component :is="isMenuOpen ? 'XIcon' : 'MenuIcon'" />
        </button>
      </div>
    </nav>

    <transition name="slide-down">
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="mobile-links-wrapper">
          <a 
            v-for="link in navLinks" 
            :key="link.href" 
            :href="link.href" 
            class="mobile-nav-link"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </a>
          <a href="#contact" class="mobile-nav-link btn-consultation show-mobile-only" @click="isMenuOpen = false">
            Consultation
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const MenuIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`
};

const XIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
};

const isMenuOpen = ref(false);

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Culture', href: '#culture' },
  { label: 'Studio', href: '#location' },
  { label: 'Contact', href: '#contact' },
];
</script>

<style scoped>
/* ----------------------------------------- */
/* VARIABLES & BASE SETTINGS                 */
/* ----------------------------------------- */
:root {
  --primary: #00ffa3;
  --glass: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.1);
  --bg-dark: #000000;
}

/* ----------------------------------------- */
/* NAVBAR CONTAINER                          */
/* ----------------------------------------- */
.nav-container {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 1200px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  /* Font updated per request */
  font-family: system-ui, -apple-system, sans-serif;
}

/* Logo Styling */
.logo {
  font-size: 1.5rem;
  font-weight: 800;
  text-decoration: none;
  color: #fff;
  font-style: italic;
  letter-spacing: -0.05em;
}

.logo .dot {
  color: #00ffa3;
}

/* ----------------------------------------- */
/* DESKTOP NAVIGATION                        */
/* ----------------------------------------- */
.desktop-links {
  display: none;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .desktop-links {
    display: flex;
    align-items: center;
  }
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #00ffa3;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

/* ----------------------------------------- */
/* ACTIONS (BUTTONS)                         */
/* ----------------------------------------- */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.btn-consultation {
  background: #00ffa3;
  color: #000;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 15px rgba(0, 255, 163, 0.3);
}

.btn-consultation:hover {
  transform: scale(1.05);
}

.hide-mobile {
  display: none;
}

@media (min-width: 640px) {
  .hide-mobile {
    display: block;
  }
}

.show-mobile-only {
  display: inline-block;
}

@media (min-width: 640px) {
  .show-mobile-only {
    display: none;
  }
}

/* Menu Toggle Button - Visible Everywhere */
.menu-toggle {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  z-index: 1100;
  transition: transform 0.2s ease;
}

.menu-toggle:hover {
  transform: scale(1.05);
}

/* ----------------------------------------- */
/* PAN-SCREEN MENU OVERLAY                   */
/* ----------------------------------------- */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 80;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Font updated per request */
  font-family: system-ui, -apple-system, sans-serif;
}

.mobile-links-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  text-align: center;
}

.mobile-nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  transition: color 0.3s;
}

.mobile-nav-link:hover {
  color: #00ffa3;
}

/* ----------------------------------------- */
/* TRANSITIONS                               */
/* ----------------------------------------- */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>