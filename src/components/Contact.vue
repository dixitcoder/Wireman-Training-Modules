<template>
  <div class="contact-container">
    <h1 class="contact-title">Contact Us</h1>
    <p class="contact-description">
      Have questions? Reach out to us and we'll be happy to assist you. Please fill out the form below, and we'll get back to you as soon as possible.
    </p>

    <!-- Contact Form -->
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name" class="form-label">Full Name</label>
        <input v-model="form.name" id="name" type="text" class="form-input" required />
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email Address</label>
        <input v-model="form.email" id="email" type="email" class="form-input" required />
      </div>

      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea v-model="form.message" id="message" class="form-textarea" required></textarea>
      </div>

      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      alert(`Message sent by: ${this.form.name}\nEmail: ${this.form.email}\nMessage: ${this.form.message}`);
      // You can implement the form submission logic to a backend or email service here
    }
  }
};
</script>

<style scoped>
.contact-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2b6cb0; /* Soft blue */
  margin-bottom: 20px;
  text-align: center;
}

.contact-description {
  font-size: 1.2rem;
  color: #4a5568; /* Soft gray */
  text-align: center;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #2d3748; /* Dark gray */
}

.form-input,
.form-textarea {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #cbd5e0; /* Light gray border */
  border-radius: 5px;
  color: #2d3748;
}

.form-textarea {
  height: 150px;
}

.submit-button {
  background-color: #3182ce; /* Blue */
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #2b6cb0;
}
</style>
