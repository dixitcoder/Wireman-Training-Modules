<template>
  <div :class="theme">
    <!-- Header -->
    <header class="header">
      <h1>Learning Platform</h1>
      <button @click="toggleTheme" class="theme-toggle-btn">
        <span v-if="theme === 'dark-mode'">🌙</span>
        <span v-if="theme === 'light-mode'">☀️</span>
        Toggle Theme
      </button>
    </header>

    <!-- Search Filter -->
    <div class="search-bar">
      <input v-model="filterQuery" placeholder="Search for tools, concepts..." />
    </div>

    <!-- Tools Section -->
    <section class="section">
      <h2>Tools</h2>
      <div class="item-grid">
        <div v-for="(tool) in filteredTools" :key="tool.name" class="item-box">
          <h3>{{ tool.name }}</h3>
          <p>{{ tool.description[language] }}</p>
            <p>{{ tool.description.gujarati }}</p>
        </div>
      </div>
    </section>

    <!-- Concepts Section -->
    <section class="section">
      <h2>Concepts</h2>
      <div class="item-grid">
        <div v-for="concept in filteredConcepts" :key="concept.name" class="item-box">
          <h3>{{ concept.name }}</h3>
          <p>{{ concept.description[language] }}</p>
            <p>{{ concept.description.gujarati }}</p>

        </div>
      </div>
    </section>

    <!-- Wires Section -->
    <section class="section">
      <h2>Wires</h2>
      <div class="item-grid">
        <div v-for="wire in filteredWires" :key="wire.name" class="item-box">
          <h3>{{ wire.name }}</h3>
          <p>{{ wire.description[language] }}</p>
            <p>{{ wire.description.gujarati }}</p>

        </div>
      </div>
    </section>

    <!-- Power Systems Section -->
<section class="section">
  <h2>Power Systems</h2>
  <div class="item-grid">
    <div v-for="system in fillterpowersystems" :key="system.name" class="item-box">
      <h3>{{ system.name }}</h3>
      <!-- English Description with a specific color -->
      <p class="english-text">
        {{ system.description.english }}
      </p>
      <!-- Gujarati Description with a different color -->
      <p :class="{'gujarati-text': language === 'gujarati'}">
        {{ system.description.gujarati }}
      </p>
    </div>
  </div>
</section>


    <!-- Modules Section -->
    <section class="section">
      <h2>Modules</h2>
      <div class="item-grid">
        <div v-for="module in fillterModules" :key="module.name" class="item-box">
          <h3>{{ module.name }}</h3>
          <p>{{ module.description[language] }}</p>
            <p>{{ module.description.gujarati }}</p>

        </div>
      </div>
    </section>

    <!-- Devices Section -->
    <section class="section">
      <h2>Devices</h2>
      <div class="item-grid">
        <div v-for="device in fillterDevices" :key="device.name" class="item-box">
          <h3>{{ device.name }}</h3>
          <p>{{ device.description[language] }}</p>
            <p>{{ device.description.gujarati }}</p>

        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  color: #333;
}

/* Dark Mode */
.dark-mode {
  background-color: #2c3e50;
  color: white;
}

.dark-mode header {
  background-color: #34495e;
}

.dark-mode .item-box {
  background-color: #34495e;
  border: 1px solid #7f8c8d;
}

.dark-mode .section h2 {
  color: #ecf0f1;
}

.dark-mode .search-bar input {
  background-color: #34495e;
  color: white;
  border: 1px solid #7f8c8d;
}

.dark-mode button {
  background-color: #34495e;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

/* Light Mode */
.light-mode {
  background-color: #ffffff;
  color: #333;
}

.light-mode header {
  background-color: #ecf0f1;
}

.light-mode .item-box {
  background-color: #bdc3c7;
  border: 1px solid #7f8c8d;
}

.light-mode .section h2 {
  color: #2c3e50;
}

.light-mode .search-bar input {
  background-color: #ecf0f1;
  color: black;
  border: 1px solid #ccc;
}

.light-mode button {
  background-color: #ecf0f1;
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ecf0f1;
}

header h1 {
  font-size: 2em;
  color: #2c3e50;
}

header button {
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Search Bar */
.search-bar {
  margin: 20px;
  text-align: center;
}

.search-bar input {
  width: 50%;
  padding: 12px;
  font-size: 1em;
  border-radius: 8px;
  border: 1px solid #ccc;
}

/* Section Styles */
.section {
  padding: 30px;
  text-align: center;
}

.section h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

/* Item Grid */
.item-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.item-box {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.item-box h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.item-box p {
  font-size: 1em;
  color: #555;
}

/* Button Styling */
button.theme-toggle-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 6px;
}

button.theme-toggle-btn:hover {
  background-color: #2980b9;
}
/* Item Grid */
.item-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  transition: all 0.3s ease;
}
.english-text {
  color: blue; /* Use the color you want for English */
}

.gujarati-text {
  color: green; /* Use the color you want for Gujarati */
}

/* Box Item */
.item-box {
  background: linear-gradient(145deg, #8e44ad, #3498db); /* Gradient background for depth */
  color: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #7f8c8d;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1); /* Soft shadow for 3D effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
}

.item-box:hover {
  transform: translateY(-5px); /* Elevate on hover */
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.item-box h3 {
  font-size: 1.5em;
  margin-bottom: 15px;
  font-weight: 600;
  text-transform: uppercase;
}

.item-box p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #ecf0f1; /* Lighter text for readability */
  margin-bottom: 20px;
}

/* Focus State */
.item-box:focus {
  outline: none;
  border: 2px solid #3498db;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

/* Item Box Text Styles */
.item-box {
  background: linear-gradient(145deg, #8e44ad, #3498db);
  color: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #7f8c8d;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
}

/* Title Text (Heading) */
.item-box h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6em;
  font-weight: 700; /* Bold for emphasis */
  letter-spacing: 1px;
  margin-bottom: 15px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
}

/* Description Text */
.item-box p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  line-height: 1.7;
  color: #ecf0f1;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  text-align: justify; /* Justified for better readability */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Slight shadow for contrast */
}

/* Enhanced Typography Styles */
.item-box h3, .item-box p {
  transition: all 0.3s ease;
}

/* On Hover - Text Effects */
.item-box:hover h3 {
  color: #ecf0f1; /* Lighten the title on hover */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5); /* More prominent text shadow on hover */
}

.item-box:hover p {
  color: #bdc3c7; /* Slight color change for description text */
}

</style>
<script>
export default {
  data() {
    return {
      language: "english",
      filterQuery: "",
      dialog: false,
      name: "",
      fav: true,
      menu: false,
      message: false,
      hints: true,
      info: "",
      isDarkMode: false,
      draggedIndex: null,
      tools: [
        {
          name: "Screwdrivers",
          description: {
            english: "For tightening and loosening screws.",
            gujarati: "સ્ક્રૂને કસવા અને ખોલવા માટે.",
          },
        },
        {
          name: "Pliers",
          description: {
            english: "Used for cutting, bending, and gripping wires.",
            gujarati: "વાયર કાપવા, વળગાવા અને પકડી રાખવા માટે.",
          },
        },
        {
          name: "Wire Strippers",
          description: {
            english: "For removing the insulation from wires.",
            gujarati: "વાયરોમાંથી ઇન્સ્યુલેશન દૂર કરવા માટે.",
          },
        },
        {
          name: "Voltage Tester",
          description: {
            english: "To check for the presence of electricity.",
            gujarati: "વિદ્યુતની હાજરીની તપાસ કરવા માટે.",
          },
        },
        {
          name: "Multimeter",
          description: {
            english: "Measures voltage, current, and resistance.",
            gujarati: "વોલ્ટેજ, કરંટ અને રેઝિસ્ટન્સ માપે છે.",
          },
        },
        {
          name: "Measuring Tape",
          description: {
            english: "For measuring distances and lengths.",
            gujarati: "દूरी અને લંબાઈ માપવા માટે.",
          },
        },
        {
          name: "Drill Machine",
          description: {
            english: "For making holes to install fixtures.",
            gujarati: "ફિક્સચર્સ ઇન્સ્ટોલ કરવા માટે છિદ્રો બનાવા માટે.",
          },
        },
        {
          name: "Hammer",
          description: {
            english: "Used for driving nails or fixing components.",
            gujarati: "નખ અથવા ઘટકોને ફિટ કરવા માટે ઉપયોગી.",
          },
        },
        {
          name: "Cable Puller",
          description: {
            english: "For pulling wires through conduits.",
            gujarati: "કંડ્યુટ્સ દ્વારા વાયર ખેંચવા માટે.",
          },
        },
        {
          name: "Insulation Tape",
          description: {
            english: "Used for insulating wires.",
            gujarati: "વાયરો માટે ઇન્સ્યુલેશન માટે.",
          },
        },
        {
          name: "Conduit Bender",
          description: {
            english: "For bending pipes to protect wires.",
            gujarati: "વાયરોનું રક્ષણ કરવા માટે પાઇપ વળગાવા માટે.",
          },
        },
      ],

      concepts: [
        {
          name: "Voltage (V)",
          description: {
            english: "The force that drives electrical current.",
            gujarati: "વિદ્યુત પ્રવાહને ચલાવવાની શક્તિ.",
          },
        },
        {
          name: "Current (I)",
          description: {
            english: "The flow of electric charge.",
            gujarati: "વિદ્યુત ચાર્જનું પ્રવાહ.",
          },
        },
        {
          name: "Resistance (R)",
          description: {
            english: "Opposes the flow of current.",
            gujarati: "પ્રવાહને વિરોધ કરે છે.",
          },
        },
        {
          name: "Power (P)",
          description: {
            english: "The rate at which electrical energy is consumed (P = V × I).",
            gujarati: "વિદ્યુત ઊર્જા ખપતનું દર (P = V × I).",
          },
        },
        {
          name: "Capacitance (C)",
          description: {
            english: "The ability of a system to store charge.",
            gujarati: "કોઈ પણ સિસ્ટમ માટે ચાર્જ સંગ્રહ કરવાની ક્ષમતા.",
          },
        },
      ],
      wires: [
        {
          name: "Single Core Wire",
          description: {
            english: "Used for simple circuits.",
            gujarati: "સરળ સર્કિટ માટે ઉપયોગી.",
          },
        },
        {
          name: "Multi-core Wire",
          description: {
            english: "Contains multiple wires, used in complex systems.",
            gujarati: "ઘણા વાયરો ધરાવે છે, જટિલ સિસ્ટમ્સમાં ઉપયોગ થાય છે.",
          },
        },
        {
          name: "Coaxial Cable",
          description: {
            english: "For television and internet connections.",
            gujarati: "ટેલિવિઝન અને ઇન્ટરનેટ કનેક્શન માટે.",
          },
        },
        {
          name: "Armored Cable",
          description: {
            english: "Protected with a metal layer for outdoor use.",
            gujarati: "બહાર માટે મેટલ પરતથી સુરક્ષિત.",
          },
        },
        {
          name: "Twisted Pair Cable",
          description: {
            english:
              "Used for data transmission, consisting of two wires twisted together.",
            gujarati: "ડેટા ટ્રાન્સમિશન માટે, બે વાયરો જોડીને વિળેલા.",
          },
        },
      ],

      powersystems: [
        {
          name: "AC",
          description: {
            english: "Alternating Current",
            gujarati: "વિચારધારા કર્તા વિદ્યુત પ્રવાહ",
          },
        },
        {
          name: "DC",
          description: {
            english: "Direct Current",
            gujarati: "સિડલી વિદ્યુત પ્રવાહ",
          },
        },
        {
          name: "CT",
          description: {
            english: "Current Transformer",
            gujarati: "વર્તમાન પરિવર્તક",
          },
        },
        {
          name: "PT",
          description: {
            english: "Potential Transformer",
            gujarati: "સંભાવનાત્મક પરિવર્તક",
          },
        },
        {
          name: "OLTC",
          description: {
            english: "On Load Tap Changer",
            gujarati: "લોડ પર ટેપ ચેન્જર",
          },
        },
        {
          name: "RTCC",
          description: {
            english: "Remote Tap Changing Control",
            gujarati: "દૂરથી ટેપ બદલાવ નિયંત્રણ",
          },
        },
        {
          name: "HT",
          description: {
            english: "High Tension (High Voltage)",
            gujarati: "હાઇ ટેન્શન (હાઇ વોલ્ટેજ)",
          },
        },
        {
          name: "LT",
          description: {
            english: "Low Tension (Low Voltage)",
            gujarati: "લો ટેન્શન (લો વોલ્ટેજ)",
          },
        },
        {
          name: "MVA",
          description: {
            english: "Mega Volt Ampere",
            gujarati: "મેગા વોલ્ટ એમ્પિયર",
          },
        },
        {
          name: "kVA",
          description: {
            english: "Kilo Volt Ampere",
            gujarati: "કિલો વોલ્ટ એમ્પિયર",
          },
        },
        {
          name: "CB",
          description: {
            english: "Circuit Breaker",
            gujarati: "સર્કિટ બ્રેકર",
          },
        },
        {
          name: "LA",
          description: {
            english: "Lightning Arrester",
            gujarati: "આલોચક ઘર્ષક",
          },
        },
        {
          name: "SCADA",
          description: {
            english: "Supervisory Control and Data Acquisition",
            gujarati: "સુપરવિઝરી નિયંત્રણ અને ડેટા આક્વિઝિશન",
          },
        },
        {
          name: "VCB",
          description: {
            english: "Vacuum Circuit Breaker",
            gujarati: "વિશ્વક વીજળી બ્રેકર",
          },
        },
        {
          name: "SF6",
          description: {
            english: "Sulfur Hexafluoride (used in circuit breakers)",
            gujarati: "સલ્ફર હેક્સાફ્લુoride (સર્કિટ બ્રેકર માં ઉપયોગી)",
          },
        },
        {
          name: "T/F",
          description: {
            english: "Transformer",
            gujarati: "પરિવર્તક",
          },
        },
        {
          name: "GIS",
          description: {
            english: "Gas Insulated Switchgear",
            gujarati: "ગેસ ઇન્સ્યુલેટેડ સ્વિચગિયર",
          },
        },
        {
          name: "ABB",
          description: {
            english: "Asea Brown Boveri (a transformer manufacturing company)",
            gujarati: "આસા બ્રાઉન બોભેરી (પરિવર્તક ઉત્પાદક કંપની)",
          },
        },
        {
          name: "BIL",
          description: {
            english: "Basic Insulation Level",
            gujarati: "મૂળ ઇન્સ્યુલેશન લેવલ",
          },
        },
        {
          name: "HV",
          description: {
            english: "High Voltage",
            gujarati: "હાઇ વોલ્ટેજ",
          },
        },
      ],
      Modules: [
        {
          name: "Module 1: Safety Practice and Hand Tools",
          description: {
            english:
              "In this module, you will learn the safety practices for electrical work and the use of hand tools.",
            gujarati:
              "આ મોડ્યુલમાં, તમે વીજકામ માટેની સલામતી પ્રથાઓ અને હેન્ડ ટૂલ્સનો ઉપયોગ શીખશો.",
          },
          tools: [
            {
              name: "Screwdrivers",
              description: {
                english: "Used to turn screws.",
                gujarati: "સ્ક્રુઝને ફેરવવા માટે ઉપયોગી.",
              },
            },
            {
              name: "Pliers",
              description: {
                english: "Used for gripping, twisting, or cutting wire.",
                gujarati: "કાંટા પકડવા, વળગાવા અથવા કાપવા માટે.",
              },
            },
            {
              name: "Wire Stripper",
              description: {
                english: "Used to remove insulation from wires.",
                gujarati: "વાયરો પરથી ઇન્સ્યુલેશન દૂર કરવા માટે.",
              },
            },
          ],
        },
        {
          name: "Module 2: Wire Joints and Soldering",
          description: {
            english:
              "Learn about various types of wire joints and soldering techniques to ensure safe and reliable connections.",
            gujarati:
              "સુરક્ષિત અને વિશ્વસનીય કનેક્શન સુનિશ્ચિત કરવા માટે વાયર જોડાણો અને સોલ્ડરિંગ ટેકનિક વિશે શીખો.",
          },
          tools: [
            {
              name: "Soldering Iron",
              description: {
                english: "Used to melt solder and make electrical connections.",
                gujarati: "સોલ્ડર ઓગળાવવા અને વીજળીના જોડાણો બનાવવા માટે.",
              },
            },
            {
              name: "Flux",
              description: {
                english: "Used to clean the surface before soldering.",
                gujarati: "સોલ્ડરિંગ પહેલાં સપાટી ધોઈને સાફ કરવા માટે.",
              },
            },
          ],
        },
        {
          name: "Module 3: Basic Electricity, Magnetism, Electrostatics",
          description: {
            english:
              "Learn the basic concepts of electricity, magnetism, and electrostatics, including Ohm's Law.",
            gujarati:
              "વીજવિદ્યા, ચુંબકત્વ અને ઈલેક્ટ્રોસ્ટેટિક્સના મૂળભૂત અભિગમો શીખો, જેમાં ઓહમના નિયમનો સમાવેશ થાય છે.",
          },
          tools: [
            {
              name: "Multimeter",
              description: {
                english: "Used to measure voltage, current, and resistance.",
                gujarati: "વોલ્ટેજ, કરંટ અને રેસિસ્ટન્સ માપવા માટે.",
              },
            },
            {
              name: "Magnet",
              description: {
                english: "Used to demonstrate the concept of magnetism.",
                gujarati: "ચુંબકત્વના અભિગમને પ્રદર્શિત કરવા માટે.",
              },
            },
          ],
        },
        {
          name: "Module 4: AC Circuits, Poly Phase, Measuring Instrument",
          description: {
            english:
              "Learn about AC circuits, polyphase systems, and measuring instruments like ammeters, voltmeters, and multimeters.",
            gujarati:
              "એસી સર્કિટ્સ, પોલીફેઝ સિસ્ટમ્સ અને એમિટર, વોલ્ટમીટર, મલ્ટીમીટર જેવા માપન સાધનો વિશે શીખો.",
          },
          tools: [
            {
              name: "Ammeter",
              description: {
                english: "Used to measure current.",
                gujarati: "કરંટ માપવા માટે.",
              },
            },
            {
              name: "Voltmeter",
              description: {
                english: "Used to measure voltage.",
                gujarati: "વોલ્ટેજ માપવા માટે.",
              },
            },
          ],
        },
        {
          name: "Module 5: Power System, Substation Equipment, and Earthing",
          description: {
            english:
              "Understand power generation, transmission, and distribution along with substation equipment and earthing techniques.",
            gujarati:
              "પાવર જનરેશન, ટ્રાન્સમિશન અને ડિસ્ટ્રીબ્યુશન, સબસ્ટેશન સાધનો અને અર્થિંગની ટેકનિકો વિશે સમજણ મેળવો.",
          },
          tools: [
            {
              name: "Transformer",
              description: {
                english: "Used to change voltage levels.",
                gujarati: "વોલ્ટેજ સ્તરો બદલીને વીજળી પ્રસારિત કરવા માટે.",
              },
            },
            {
              name: "Earthing Equipment",
              description: {
                english: "Used to safely discharge excess electricity into the ground.",
                gujarati: "અધિક વીજળીને જમીનમાં સુરક્ષિત રીતે નિકાલ કરવા માટે.",
              },
            },
          ],
        },
        {
          name: "Module 6: DC Machines",
          description: {
            english:
              "Learn about the structure and operation of DC generators and motors, including their maintenance and troubleshooting.",
            gujarati:
              "ડીસી જનરેટર અને મોટર્સની રચના અને કાર્ય, તેમજ જાળવણી અને સમસ્યા સમાધાન વિશે શીખો.",
          },
          tools: [
            {
              name: "DC Motor",
              description: {
                english: "Converts electrical energy into mechanical energy.",
                gujarati: "વીજળીની ઊર્જાને યાંત્રિક ઊર્જામાં બદલવા માટે.",
              },
            },
          ],
        },
        {
          name: "Module 7: Transformer, AC Motors, Starters, Alternator",
          description: {
            english:
              "Understand the different types of transformers, AC motors, starters, and alternators.",
            gujarati:
              "વિભિન્ન પ્રકારના ટ્રાન્સફોર્મર્સ, એસી મોટર્સ, સ્ટાર્ટર્સ અને અલ્ટરનેટર્સ સમજવો.",
          },
          tools: [
            {
              name: "AC Induction Motor",
              description: {
                english: "Uses alternating current to create rotational motion.",
                gujarati: "વિશ્વક વીજળીનો ઉપયોગ કરીને ઘુમાવટી ગતિ ઉત્પન્ન કરે છે.",
              },
            },
            {
              name: "Alternator",
              description: {
                english: "Used to convert mechanical energy into electrical energy.",
                gujarati: "યાંત્રિક ઊર્જાને વીજળીની ઊર્જામાં રૂપાંતર કરવા માટે.",
              },
            },
          ],
        },
        {
          name: "Module 8: Control Elements and Equipment",
          description: {
            english:
              "Learn about control components like relays, contactors, timers, and control circuits.",
            gujarati:
              "રીલેઝ, કોન્ટેક્ટર્સ, ટાઇમર્સ અને નિયંત્રણ સર્કિટ્સ જેવા નિયંત્રણ ઘટકો વિશે શીખો.",
          },
          tools: [
            {
              name: "Relay",
              description: {
                english: "An electrically operated switch used in control systems.",
                gujarati: "એક વિદ્યુતચાલિત સ્વિચ જે નિયંત્રણ સિસ્ટમમાં ઉપયોગ થાય છે.",
              },
            },
            {
              name: "Contactor",
              description: {
                english: "Used for switching electrical circuits on and off.",
                gujarati: "વિદ્યુત સર્કિટ્સને ચાલુ અને બંધ કરવા માટે.",
              },
            },
          ],
        },
        {
          name: "Module 9: Domestic Wiring",
          description: {
            english:
              "Learn about wiring techniques for residential buildings, including circuit breakers and distribution boards.",
            gujarati:
              "ઘરેલુ બિલ્ડિંગ્સ માટેના વાયરિંગ ટેકનિકો વિશે શીખો, જેમાં સર્કિટ બ્રેકર્સ અને વિતરણ બોર્ડનો સમાવેશ થાય છે.",
          },
          tools: [
            {
              name: "Circuit Breaker",
              description: {
                english:
                  "Protects electrical circuits from damage caused by overcurrent.",
                gujarati: "અધિક કરંટ દ્વારા નુકસાનથી વિદ્યુત સર્કિટ્સનું રક્ષણ કરે છે.",
              },
            },
          ],
        },
        {
          name: "Module 10: Circuit Breakers",
          description: {
            english:
              "Learn about MCB, MCCB, RCCB, and ELCB circuit breakers, including their functions and maintenance.",
            gujarati:
              "MCB, MCCB, RCCB અને ELCB સર્કિટ બ્રેકર્સ વિશે શીખો, તેમજ તેમના કાર્ય અને જાળવણી.",
          },
          tools: [
            {
              name: "MCB",
              fullForm: "Miniature Circuit Breaker",
              description: {
                english: "Used for overcurrent protection.",
                gujarati: "ઓવરકરંટ પ્રોટેક્શન માટે ઉપયોગ થાય છે.",
              },
            },
            {
              name: "MCCB",
              fullForm: "Molded Case Circuit Breaker",
              description: {
                english: "Used for protection against overloads and short circuits.",
                gujarati: "ઓવરલોડ અને શોર્ટ સર્કિટથી રક્ષણ માટે ઉપયોગ થાય છે.",
              },
            },
            {
              name: "RCCB",
              fullForm: "Residual Current Circuit Breaker",
              description: {
                english:
                  "Used for preventing electric shocks by detecting leakage currents.",
                gujarati: "વિદ્યુત શોકોથી બચાવવા માટે લીકેજ કરંટ શોધી તેની ઓળખ કરે છે.",
              },
            },
            {
              name: "ELCB",
              fullForm: "Earth Leakage Circuit Breaker",
              description: {
                english: "Used for detecting earth leakage currents.",
                gujarati: "ધૃવીકરણ લીકેજ કરંટ શોધવા માટે ઉપયોગ થાય છે.",
              },
            },
          ],
        },
        {
          name: "Module 11: Control Panel Wiring",
          description: {
            english:
              "Learn about wiring control panels with components like fuses, switches, and busbars.",
            gujarati:
              "ફ્યુઝ, સ્વિચિસ અને બસબાર જેવા ઘટકો સાથે કંટ્રોલ પેનલ્સનું વાયરિંગ શીખો.",
          },
          tools: [
            {
              name: "Fuse",
              description: {
                english:
                  "Protects the electrical circuit by breaking the connection in case of an overload.",
                gujarati:
                  "ઓવરલોડના સંજોગોમાં કનેક્શન તોડીને વિદ્યુત સર્કિટનું રક્ષણ કરે છે.",
              },
            },
          ],
        },
      ],
      devices: [
        {
          name: "MCB",
          full_form: "Miniature Circuit Breaker",
          description: {
            english:
              "A protective device used to automatically disconnect an electrical circuit in the event of an overcurrent or short circuit.",
            gujarati:
              "એક સુરક્ષા ઉપકરણ જે ઓવરકરન્ટ અથવા શોર્ટ સર્કિટની સ્થિતિમાં વૈદ્યુત સર્કિટને આપમેળે ડિસ્કનેક્ટ કરે છે.",
          },
        },
        {
          name: "MCCB",
          full_form: "Molded Case Circuit Breaker",
          description: {
            english:
              "A device that provides protection against overload and short circuit by automatically disconnecting the electrical supply.",
            gujarati:
              "એક ઉપકરણ જે ઓવરલોડ અને શોર્ટ સર્કિટથી સુરક્ષા પ્રદાન કરે છે અને વૈદ્યુત પુરવઠાને આપમેળે ડિસ્કનેક્ટ કરે છે.",
          },
        },
        {
          name: "RCCB",
          full_form: "Residual Current Circuit Breaker",
          description: {
            english:
              "A safety device that prevents electric shock by disconnecting the circuit when it detects leakage current.",
            gujarati:
              "એક સુરક્ષા ઉપકરણ જે વીજળીના આઘાતને રોકે છે અને લિકેજ કરંટ શોધી તેને ડિસ્કનેક્ટ કરે છે.",
          },
        },
        {
          name: "ELCB",
          full_form: "Earth Leakage Circuit Breaker",
          description: {
            english:
              "A safety device designed to prevent electrical shocks by detecting earth leakage currents and disconnecting the power supply.",
            gujarati:
              "એક સુરક્ષા ઉપકરણ જે ધરતીના લીકેજ કરંટને શોધી વીજળીના આઘાતને રોકે છે અને પાવર સપ્લાયને ડિસ્કનેક્ટ કરે છે.",
          },
        },
        {
          name: "VFD",
          full_form: "Variable Frequency Drive",
          description: {
            english:
              "A device used to control the speed of an electric motor by varying the frequency of the electrical power supplied to the motor.",
            gujarati:
              "એક ઉપકરણ જે ઇલેક્ટ્રિક મોટરની ગતિને નિયંત્રિત કરવા માટે મોટર સુધી પુરવઠા કરેલી વીજળીની ફ્રીક્વન્સી બદલવામાં મદદ કરે છે.",
          },
        },
        {
          name: "UPS",
          full_form: "Uninterruptible Power Supply",
          description: {
            english:
              "A device that provides backup power during power outages to ensure the smooth operation of electrical devices.",
            gujarati:
              "એક ઉપકરણ જે વીજળીના વિક્ષેપ દરમિયાન બેકઅપ પાવર પ્રદાન કરે છે જેથી ઈલેક્ટ્રિકલ ઉપકરણો સરળતાથી કાર્ય કરે છે.",
          },
        },
        {
          name: "PFC",
          full_form: "Power Factor Correction",
          description: {
            english:
              "A method used to improve the power factor of an electrical system by reducing the phase difference between voltage and current.",
            gujarati:
              "એક પદ્ધતિ જે વીજળીના સર્કિટમાં વોલ્ટેજ અને કરંટ વચ્ચેનો ફેઝ ડિફરન્સ ઘટાડીને પાવર ફેક્ટર સુધારે છે.",
          },
        },
        {
          name: "CT",
          full_form: "Current Transformer",
          description: {
            english:
              "A transformer used to measure current in an electrical circuit by producing a reduced current proportional to the original current.",
            gujarati:
              "એક ટ્રાન્સફોર્મર જે મૂળ કરંટની અનુરૂપ ઘટાડેલી કરંટ ઉત્પન્ન કરીને વીજળીના સર્કિટમાં કરંટ માપે છે.",
          },
        },
        {
          name: "PT",
          full_form: "Potential Transformer",
          description: {
            english:
              "A transformer used to measure the voltage in a power system by stepping down the voltage to a lower level.",
            gujarati:
              "એક ટ્રાન્સફોર્મર જે પાવર સિસ્ટમમાં વોલ્ટેજ માપવા માટે વોલ્ટેજને નમ્ર સ્તરે ઘટાડે છે.",
          },
        },
        {
          name: "RTU",
          full_form: "Remote Terminal Unit",
          description: {
            english:
              "A device used in industrial automation to connect remote sensors, actuators, and controllers to a central control system.",
            gujarati:
              "એક ઉપકરણ જે ઔદ્યોગિક ઓટોમેશનમાં રિમોટ સેન્સર્સ, ઍક્યુએટર્સ અને કંટ્રોલર્સને કેન્દ્રિય નિયંત્રણ સિસ્ટમ સાથે જોડવા માટે ઉપયોગ થાય છે.",
          },
        },
      ],
    };
  },
  computed: {
    theme() {
      return this.isDarkMode ? "dark-mode" : "light-mode";
    },
    timelineClass() {
      return this.isDarkMode ? "dark-timeline" : "light-timeline";
    },
    filteredTools() {
      return this.tools.filter((tool) =>
        tool.name.toLowerCase().includes(this.filterQuery.toLowerCase())
      );
    },
    filteredConcepts() {
      return this.concepts.filter((concept) =>
        concept.name.toLowerCase().includes(this.filterQuery.toLowerCase())
      );
    },
    filteredWires() {
      return this.wires.filter((wire) =>
        wire.name.toLowerCase().includes(this.filterQuery.toLowerCase())
      );
    },
    fillterpowersystems() {
      return this.powersystems.filter((wire) =>
        wire.name.toLowerCase().includes(this.filterQuery.toLowerCase())
      );
    },
    fillterModules() {
      return this.Modules.filter((wire) =>
        wire.name.toLowerCase().includes(this.filterQuery.toLowerCase())
      );
    },
    fillterDevices() {
      return this.devices.filter((wire) =>
        wire.name.toLowerCase().includes(this.filterQuery.toLowerCase())
      );
    },
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    },
    onDragStart(event, index) {
      this.draggedIndex = index;
      event.dataTransfer.effectAllowed = "move"; // Define drag effect
    },
    onDragEnd() {
      this.draggedIndex = null; // Reset the dragged index after drag ends
    },
    onDrop(event) {
      // Get the index where the item was dropped
      const targetIndex = this.getDropTargetIndex(event);

      // Rearrange the items in filteredTools based on the dragged and dropped indices
      const draggedItem = this.powersystems[this.draggedIndex];
      this.powersystems.splice(this.draggedIndex, 1); // Remove  item
      this.powersystems.splice(targetIndex, 0, draggedItem); // Insert it at the new position
    },
    getDropTargetIndex(event) {
      const { offsetY, clientHeight } = event;
      const targetIndex = Math.floor(offsetY / (clientHeight / this.powersystems.length));
      return targetIndex;
    },

    submit(name, info) {
      this.name = name;
      this.info = info;
      this.dialog = true;
    },
  },
};
</script>