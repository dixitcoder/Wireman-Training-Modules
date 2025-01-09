<template>
 <div class="container">
  <h1 class="heading">Welcome to Wireman Training 📕</h1>
  <button class="start-learning-btn"> DixitCoder</button>
  <div class="modules-grid">
    <!-- Modules Grid will go here (you can dynamically add modules using Vue.js later) -->
    <ModulesGrid />
  </div>
</div>

</template>

<script>
import ModulesGrid from './ModulesGrid.vue';

export default {
  components: {
    ModulesGrid,  
  },
};
</script>
<style scoped>
/* Container Style */
.container {
  padding: 2rem;
  text-align: center;
  font-family: Arial, sans-serif;
}

/* Heading Style */
.heading {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #2d3748;  /* Dark text color */
}

/* Start Learning Button Style */
.start-learning-btn {
  background-color: #3182ce;  /* Primary Blue */
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-bottom: 2rem;  /* Space between button and the grid */
}

.start-learning-btn:hover {
  background-color: #2b6cb0;  /* Darker Blue on hover */
  transform: scale(1.05);  /* Slight scale effect */
}

.start-learning-btn:focus {
  outline: none;
}



</style>