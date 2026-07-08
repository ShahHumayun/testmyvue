<template>
  <section class="stats-matrix-bar">
    <div class="stats-matrix-container">
      <div 
        v-for="(stat, index) in stats" 
        :key="stat.label" 
        class="matrix-stat-node"
      >
        <span class="node-index">// DATA_0{{ index + 1 }}</span>
        
        <div class="value-display-wrapper">
          <span class="node-value">{{ stat.value }}</span>
        </div>
        
        <span class="node-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true
    // Expects shape: [{ label: "Core Funnel Steps", value: "3 Steps" }]
  }
})
</script>

<style scoped>
.stats-matrix-bar {
  background-color: #000000;
  border-top: 1px solid #111111;
  border-bottom: 1px solid #111111;
  padding: 3.5rem 0;
}

.stats-matrix-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 3rem;
}

.matrix-stat-node {
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Vertical separating dividers between nodes on wider desktop viewports */
@media (min-width: 768px) {
  .matrix-stat-node:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -1.5rem;
    top: 10%;
    height: 80%;
    width: 1px;
    background-color: #111111;
  }
}

.node-index {
  color: #444444;
  font-family: monospace;
  font-size: 0.7rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.value-display-wrapper {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.25rem;
}

.node-value {
  color: #00ffa3;
  font-size: clamp(2.25rem, 4vw, 3.25rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  font-feature-settings: "tnum"; /* Tabular figures to maintain perfect layout alignments */
}

.node-label {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}
</style>