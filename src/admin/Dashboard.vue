<template>
  <div>
    <section class="section">
      
      <!-- Button to Add New Power System -->
        <h2 style="text-align: center;">New Import Note 🗒</h2>
      <!-- Display Power Systems -->
      <div  class="item-grid">
        <div v-for="(system, index) in powerSystems" :key="index" class="item-box">
          <h4>{{ system.name }}</h4>
          <p class="english-text">English Description: {{ system.description.english }}</p>
          <p class="gujarati-text">Gujarati Description: {{ system.description.gujarati }}</p>

          <!-- Edit and Delete Buttons -->
         
        </div>
      </div>
    </section>

    <!-- Modal for Adding and Editing Power Systems -->
 
  </div>

  <!-- If not logged in -->
  <div v-if="!isLoggedIn">
    <h3>Please log in as an admin to view the dashboard.</h3>
  </div>
</template>

<script>
import {  collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebasesdk";

export default {
  data() {
    return {
      powerSystems: [
       
      ],
      isModalOpen: false,
      isEditMode: false,
      modalData: {
        name: "",
        description: {
          english: "",
          gujarati: ""
        }
      },
      isLoggedIn: true // Set this to true when the user is logged in as an admin
    };
    },
  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, "powerSystems"));
      querySnapshot.forEach((doc) => {
        // Push the data into the powerSystems array
        this.powerSystems.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(this.powerSystems); // Log the power systems to the console
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  },
  methods: {
    openAddModal() {
      this.isModalOpen = true;
      this.isEditMode = false;
      this.modalData = { name: "", description: { english: "", gujarati: "" } };
    },
    closeModal() {
      this.isModalOpen = false;
    },
    savePowerSystem() {
      if (this.isEditMode) {
        // Update existing system
        const index = this.powerSystems.findIndex(system => system.name === this.modalData.name);
        if (index !== -1) {
          this.$set(this.powerSystems, index, { ...this.modalData });
        }
      } else {
        // Add new system
        this.powerSystems.push({ ...this.modalData });
      }
      this.closeModal();
    },
    editPowerSystem(index) {
      this.isModalOpen = true;
      this.isEditMode = true;
      this.modalData = { ...this.powerSystems[index] };
    },
    deletePowerSystem(index) {
      this.powerSystems.splice(index, 1);
    }
  }
};
</script>

<style scoped>
/* General Styles */
.section {
  padding: 20px;
  background-color: #f4f4f9;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.add-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
}

.add-button:hover {
  background-color: #45a049;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 20px;
  font-size: 20px;
}

label {
  font-weight: bold;
  margin-top: 10px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  height: 100px;
}

button {
  padding: 10px;
  margin-top: 15px;
  width: 100%;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

.save-button {
  background-color: #4caf50;
  color: white;
}

.save-button:hover {
  background-color: #45a049;
}

.cancel-button {
  background-color: #e53935;
  color: white;
  margin-top: 10px;
}

.cancel-button:hover {
  background-color: #d32f2f;
}

/* Item Styles */
.item-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.item-box {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  width: 30%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.edit-button,
.delete-button {
  padding: 5px 10px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
}

.edit-button {
  background-color: #2196f3;
  color: white;
}

.edit-button:hover {
  background-color: #1e88e5;
}

.delete-button {
  background-color: red;
  color: white;
}

.delete-button:hover {
  background-color: #e53935;
}

/* Text Color based on Language */
.english-text {
  color: blue;
}

.gujarati-text {
  color: green;
}
</style>
