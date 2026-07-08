<template>
  <section class="challenges-section">
    <div class="challenges-grid-layout">
      <div class="section-label-box">
        <h2 class="section-num">05 //</h2>
        <h3 class="section-title">System Hurdles & Resolution</h3>
      </div>
      
      <div class="challenges-container">
        <div class="challenge-panel problem-panel">
          <div class="panel-header">
            <span class="status-indicator alert">![CRITICAL_ERR]</span>
            <h4>The Technical Obstacle</h4>
          </div>
          <div class="panel-body">
            <p>{{ challenges.problem }}</p>
          </div>
        </div>

        <div class="challenge-panel solution-panel">
          <div class="panel-header">
            <span class="status-indicator resolve">// RESOLVED</span>
            <h4>The Architecture Approach</h4>
          </div>
          <div class="panel-body">
            <p>{{ challenges.solution }}</p>
          </div>
          <div class="panel-corner-accent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  challenges: {
    type: Object,
    required: true,
    // Expects shape: { problem: String, solution: String }
  }
})
</script>

<style scoped>
.challenges-section {
  background-color: #000000;
  padding: 4rem 0;
}

.challenges-grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .challenges-grid-layout {
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

/* Two Column Stack layout for side by side mapping */
.challenges-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 992px) {
  .challenges-container {
    grid-template-columns: 1fr 1fr;
  }
}

.challenge-panel {
  background-color: #050505;
  border: 1px solid #111111;
  padding: 2.5rem;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Specific styling variants for problem vs solution mapping */
.problem-panel {
  border-left: 2px solid #333333;
}

.solution-panel {
  border: 1px solid rgba(0, 255, 163, 0.15);
  box-shadow: 0 0 30px rgba(0, 255, 163, 0.02);
}

.panel-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.status-indicator {
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.status-indicator.alert {
  color: #555555;
}

.status-indicator.resolve {
  color: #00ffa3;
}

.panel-header h4 {
  color: #ffffff;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
}

.panel-body p {
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
}

.solution-panel .panel-body p {
  color: #ffffff; /* Make solution text pop fully white */
}

/* Corner geometric neon marker */
.panel-corner-accent {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-right: 2px solid #00ffa3;
  border-bottom: 2px solid #00ffa3;
}
</style>