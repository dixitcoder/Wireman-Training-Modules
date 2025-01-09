<template>
  <div>
    <h3>Progress Tracker</h3>
    <vs-progress :value="progress" color="success" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 25, // Example value
    };
  },
};
</script>
