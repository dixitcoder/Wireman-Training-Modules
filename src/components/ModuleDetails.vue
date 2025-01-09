
<template>
<div class="container">
  <!-- Display the selected module -->
   <div >
   
  <div v-if="selectedModule" class="module-detail" style="border:10px solid red">
    
    <h2 class="module-title">{{ selectedModule.title }}</h2>
    <p class="module-description">{{ selectedModule.description }}</p>
    
    <ul class="module-topics">
      <li v-for="topic in selectedModule.topics" :key="topic" class="topic-item">{{ topic }}</li>
    </ul>

    <!-- Button to take the quiz -->
    <button
      @click="startQuiz(OnlineID)"
      class="quiz-button"
    >
      Take Quiz for {{ selectedModule.title }}
    </button>
  </div>
   
</div>
<h2 class="module-title">{{ "Available Modules ..." }}</h2>
    <div v-for="module in modules" :key="module" class="module-detail">
      
    <h2 class="module-title">{{ module.title }}</h2>
    <p class="module-description">{{ module.description }}</p>
    
    <ul class="module-topics">
      <li v-for="topic in module.topics" :key="topic" class="topic-item">{{ topic }}</li>
    </ul>

    <!-- Button to take the quiz -->
    <button
      @click="startQuiz(module.id)"
      class="quiz-button"
    >
      Take Quiz for {{ module.title }}
    </button>
  </div>
</div>

</template>

<script>
import router from '/src/router/index.js';
export default {
  data() {
    return {
        // List of all 12 modules
      OnlineID:this.$route.params.id,
      modules: [
        { id: 1, title: "Module 1: Safety Practices", description: "Learn about safety practices in the workplace.", topics: ["Safety gear", "Emergency protocols", "Handling tools"] },
        { id: 2, title: "Module 2: Electrical Basics", description: "Understand the basics of electrical systems.", topics: ["Electric current", "Voltage", "Power generation"] },
        { id: 3, title: "Module 3: Circuit Design", description: "Learn how to design electrical circuits.", topics: ["Series circuits", "Parallel circuits", "Ohm's Law"] },
        { id: 4, title: "Module 4: Troubleshooting", description: "Learn how to troubleshoot electrical issues.", topics: ["Common electrical faults", "Testing tools", "Troubleshooting steps"] },
        { id: 5, title: "Module 5: Electrical Components", description: "Understand electrical components like resistors, capacitors, and more.", topics: ["Resistors", "Capacitors", "Diodes", "Transistors"] },
        { id: 6, title: "Module 6: AC Circuits", description: "Learn the fundamentals of alternating current (AC) circuits.", topics: ["AC vs DC", "Capacitive reactance", "Inductive reactance"] },
        { id: 7, title: "Module 7: Power Systems", description: "Understand power generation, transmission, and distribution.", topics: ["Power generation", "Transformers", "Power transmission"] },
        { id: 8, title: "Module 8: Electrical Machines", description: "Learn about motors and generators used in electrical systems.", topics: ["DC motors", "AC motors", "Transformers"] },
        { id: 9, title: "Module 9: Control Systems", description: "Learn about control systems and automation.", topics: ["PID controllers", "Sensors", "Actuators"] },
        { id: 10, title: "Module 10: Electrical Safety", description: "Focus on safety protocols when working with electricity.", topics: ["Personal protective equipment", "Safe handling", "Circuit protection"] },
        { id: 11, title: "Module 11: Wiring and Installations", description: "Learn about wiring techniques and electrical installations.", topics: ["Wiring types", "Installation standards", "Electrical codes"] },
        { id: 12, title: "Module 12: Solar Power Systems", description: "Understand solar power systems and their applications.", topics: ["Solar panels", "Inverters", "Solar installations"] },
      ],
      selectedModuleId: "", // Store the selected module's ID
    };
  },
computed: {
  // Compute the selected module based on the ID, default to module with id 1 if not selected
    selectedModule() {
    return this.modules.find(module => module.id === (this.selectedModuleId || Number(this.OnlineID) ));
  }
} ,

  methods: {
    startQuiz() {
       
  window.open(`/quiz/${this.OnlineID}`)
    },
  },
};
</script>

<style scoped>
/* Optional scoped styles */
.container {
  padding: 20px;
}

.vs-button {
  transition: all 0.3s ease;
}

.vs-button:hover {
  transform: scale(1.05);
}

h2 {
  color: #1a202c;
}
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}

/* Module Detail */
.module-detail {
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.module-detail:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Module Title */
.module-title {
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

/* Module Description */
.module-description {
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

/* Module Topics */
.module-topics {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.topic-item {
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

/* Quiz Button */
.quiz-button {
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

/* Button Hover Effect */
.quiz-button:hover {
  background-color: #2b6cb0;
  transform: scale(1.05);
}

</style>
