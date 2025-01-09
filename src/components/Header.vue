<template>
  <div>
    <nav class="navbar">
      <div class="navbar-title">
        <!-- Updated title without image -->
        ITI Training  📗
      </div>
      <div class="navbar-items">
        <button @click="navigateToHome" class="navbar-btn">Home</button>
        <button @click="navigateToAbout" class="navbar-btn">About</button>
        <button @click="navigateToModules" class="navbar-btn">Modules</button>
        <button @click="navigateToContact" class="navbar-btn">Contact</button>
        <button @click="navigateToAdmin" class="navbar-btn">New Update ⌛️</button>
      </div>
      <input 
        v-model="searchQuery" 
        placeholder="Search..." 
        class="search-input" 
        @input="search" 
      />
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    navigateToAbout() {
      this.$router.push('/about');
    },
    navigateToModules() {
      this.$router.push('/module/1');
    },
    navigateToContact() {
      this.$router.push('/contact');
    },
    navigateToAdmin() {
      this.$router.push('/Updates');
    },
    search() {
      // Handle search logic here
      console.log(this.searchQuery);
    },
  },
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2d3748; /* Dark background color */
  color: white;
}

.navbar-title {
  font-size: 1.5rem; /* Font size for the title */
  font-weight: bold; /* Make title bold */
}

.navbar-items {
  display: flex;
  gap: 15px; /* Space between buttons */
}

.navbar-btn {
  background-color: transparent;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.navbar-btn:hover {
  background-color: #4a5568; /* Darker shade on hover */
}

.search-input {
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 5px;
  max-width: 300px;
}
</style>
