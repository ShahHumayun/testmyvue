<template>
  <section class="process-section">
    <div class="process-grid-layout">
      <div class="section-label-box">
        <h2 class="section-num">06 //</h2>
        <h3 class="section-title">Development Lifecycle</h3>
      </div>
      
      <div class="process-track">
        <div 
          v-for="step in steps" 
          :key="step.phase" 
          class="process-step-card"
        >
          <div class="card-accent-line"></div>
          
          <div class="step-header">
            <span class="phase-code">{{ step.phase.split('.')[0] }} //</span>
            <h4 class="phase-title">{{ step.phase.split('.')[1] || step.phase }}</h4>
          </div>
          
          <div class="step-body">
            <p class="phase-detail">{{ step.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true
    // Expects shape: [{ phase: "01. UX Audit", detail: "..." }]
  }
})
</script>

<style scoped>
.process-section {
  background-color: #000000;
  padding: 4rem 0;
}

.process-grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .process-grid-layout {
    grid-template-columns: 300px 1fr;
  }
}

.section-label-box {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.section-num {
  color: #00ffa3;
  font-family: monospace;
  font-size: 1rem;
  margin: 0;
}

.section-title {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.01em;
}

/* Timeline Cards Stack Grid */
.process-track {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 992px) {
  .process-track {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

.process-step-card {
  background-color: #050505;
  border: 1px solid #111111;
  padding: 2rem;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.process-step-card:hover {
  border-color: #1a1a1a;
}

/* Interactive Neon Top-Bar Hover Highlight */
.card-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #00ffa3;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.process-step-card:hover .card-accent-line {
  transform: scaleX(1);
}

.step-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.phase-code {
  color: #00ffa3;
  font-family: monospace;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.phase-title {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
}

.phase-detail {
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}
</style>