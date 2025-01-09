<template>
<div class="footer">
  <div class="footer-content">
    <span>© 2025 Wireman Training. All rights reserved.</span>
  </div>
  <div class="footer-links">
    <button class="footer-button">Home</button>
    <button class="footer-button">Contact</button>
    <button class="footer-button">Privacy Policy</button>
  </div>
</div>

</template>
<style scoped>
  /* Footer Styles */
.footer {
  background-color: #2d3748;  /* Dark background */
  color: white;               /* Text color */
  padding: 2rem 1rem;         /* Padding for spacing */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 2px solid #4a5568; /* Optional border for separation */
}

/* Footer Content */
.footer-content {
  font-size: 1rem;
  font-weight: 400;
  color: #cbd5e0;  /* Light gray text color */
}

/* Footer Links Container */
.footer-links {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

/* Footer Buttons */
.footer-button {
  background: transparent;
  border: none;
  color: #cbd5e0;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-button:hover {
  color: #63b3ed;  /* Light blue on hover */
  transform: scale(1.05);
}

</style>