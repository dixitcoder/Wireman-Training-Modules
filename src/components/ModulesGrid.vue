<template>
<div class="container">
  <!-- Heading -->
  <div class="card-container">
    <h2 class="heading">Available Modules</h2>
    <!-- Card Grid -->
    <div class="card-grid">
      <div
        v-for="module in modules"
        :key="module.id"
        class="module-card"
      >
        <h3 class="module-title">{{ module.title }}</h3>
        <p class="module-description">{{ module.description }}</p>
        <button
          @click="navigateToModule(module.id)"
          class="learn-more-btn"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>



</template>

<script>
export default {
  data() {
    return {
      modules: [
        { id: 1, title: "Module 1: Safety Practices and Hand Tools", description: "Learn the basics of safety and tool usage, including screwdrivers, pliers, and wire strippers." },
        { id: 2, title: "Module 2: Wire Joints and Soldering", description: "Explore different types of wire joints and soldering techniques for electrical connections." },
        { id: 3, title: "Module 3: Basic Electricity, Magnetism, and Electrostatics", description: "Understand electricity, magnetism, and electrostatics fundamentals, including Ohm's Law and electromagnetism." },
        { id: 4, title: "Module 4: AC Circuits, Poly Phase, and Measuring Instruments", description: "Learn about AC circuits, poly-phase systems, and how to use measurement instruments like multi-meters." },
        { id: 5, title: "Module 5: Power Systems, Substation Equipment, and Earthing", description: "Understand power generation, transmission, substations, and the importance of earthing in electrical safety." },
        { id: 6, title: "Module 6: DC Machines", description: "Dive into DC generators and motors, their construction, EMF equations, and practical applications." },
        { id: 7, title: "Module 7: Transformer, AC Motors, Starters, and Alternators", description: "Learn about transformers, AC motors, starters, and alternators and their roles in electrical systems." },
        { id: 8, title: "Module 8: Control Components and Equipment", description: "Explore relay, contactor, and timer-based control circuits used in electrical systems." },
        { id: 9, title: "Module 9: Domestic Wiring", description: "Understand domestic wiring systems, including circuit breakers, switches, and conduit wiring techniques." },
        { id: 10, title: "Module 10: Circuit Breakers", description: "Learn about different types of circuit breakers (MCB, MCCB, RCCB) and their maintenance." },
        { id: 11, title: "Module 11: Control Panel Wiring", description: "Explore control panel wiring, fuse systems, and safety protocols involved in panel setup." },
        { id: 12, title: "Module 12: Battery and Solar Cell", description: "Understand the types, charging/discharging process of batteries, and solar cell systems for clean energy." }
      ],
    };
  },
  methods: {
    navigateToModule(id) {
      this.$router.push(`/module/${id}`);
    },
  },
};
</script>

<style scoped>
.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-top: 30px;
}

.module-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.module-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
/* Module Card Hover Effect */
.module-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover effect for button */
vs-button {
  transition: background-color 0.2s ease, transform 0.2s ease;
}

/* Container max-width to ensure content doesn’t stretch too wide */
.container {
  max-width: 1200px;
}

/* Responsive card layout adjustments */
@media (max-width: 640px) {
  .module-card {
    margin-bottom: 20px;
  }
}

@media (min-width: 768px) {
  .module-card {
    margin-bottom: 30px;
  }
}

/* Additional text and button styling */
h2 {
  font-family: 'Roboto', sans-serif;
  color: #2d3748;
}

vs-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

vs-button:hover {
  transform: scale(1.05);
}
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}

/* Heading */
.heading {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: #2d3748;
}

/* Card Grid Layout */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Module Card Styling */
.module-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Module Card Hover Effect */
.module-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Module Title */
.module-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
}

/* Module Description */
.module-description {
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

/* Learn More Button */
.learn-more-btn {
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  border: none;
}

/* Learn More Button Hover Effect */
.learn-more-btn:hover {
  background-color: #2b6cb0;
  transform: scale(1.05);
}

/* Responsive Design */
@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

</style>
