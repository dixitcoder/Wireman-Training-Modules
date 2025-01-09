<template>
  <div class="quiz-container">
    <div class="quiz-title">{{ quizTitle }}</div>

    <div v-if="questions.length > 0">
      <div v-for="(question, index) in questions" :key="index" class="question-block">
        
        <div class="question">
          {{ index + 1 }}. {{ question.text }}
        </div>
        <div v-for="option in question.options" :key="option" class="option">
          <label>
            <input
              type="radio"
              :name="'question-' + index"
              :value="option"
              v-model="answers[index]"
            />
            {{ option }}
          </label>
        </div>
        <div v-if="feedback[index]" class="feedback">
          {{ feedback[index] }}
        </div>
      </div>
      <button class="start-learning-btn"  @click="submitQuiz">Submit Quiz</button> <span style="padding-left: 25px;"></span>
      <button class="start-learning-btn" style="background-color:red" @click="refresh">Reset Quiz</button>
    </div>



    <div v-else>
      <p>No quiz available for this module.</p>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizTitle: "",
      questions: [],
      answers: [],
      feedback: [],
    };
  },
  computed: {
    moduleId() {
      return this.$route.params.id;
    },
  },
  watch: {
    moduleId: "loadQuizData",
  },
  methods: {
    refresh() {
      this.answers = new Array(this.questions.length).fill(null);
      this.feedback = new Array(this.questions.length).fill(null);
    },
    loadQuizData() {
      const quizData = this.getQuizDataByModuleId(this.moduleId);
      if (quizData) {
        this.quizTitle = quizData.title;
        this.questions = quizData.questions;
        this.answers = new Array(quizData.questions.length).fill(null);
        this.feedback = new Array(quizData.questions.length).fill(null);
      } else {
        this.quizTitle = "Quiz Not Found";
        this.questions = [];
        this.answers = [];
        this.feedback = [];
      }
    },
    getQuizDataByModuleId(moduleId) {
      const quizzes = {
          1: {
    title: "મોડ્યુલ 1 ક્વિઝ: સુરક્ષા પ્રથાઓ",
    questions: [
      { 
        text: "સુરક્ષાનું પહેલું નિયમ શું છે?", 
        options: ["હાથમોજા પહેરો", "સાધનો વાપરો", "જાગૃત રહો"], 
        correctAnswer: "જાગૃત રહો" 
      },
      { 
        text: "સાધનો હેન્ડલ કરવાની યોગ્ય રીત શું છે?", 
        options: ["કાળજીપૂર્વક", "હાથમોજા વગર", "કોઈ પણ રીતે"], 
        correctAnswer: "કાળજીપૂર્વક" 
      },
    ],
  },
  2: {
    title: "મોડ્યુલ 2 ક્વિઝ: ઇલેક્ટ્રિકલ મૂળભૂત તત્ત્વો",
    questions: [
      { 
        text: "વિદ્યુત પ્રવાહ શું છે?", 
        options: ["ઇલેક્ટ્રૉનનો પ્રવાહ", "વોલ્ટેજ", "પ્રતિકાર"], 
        correctAnswer: "ઇલેક્ટ્રૉનનો પ્રવાહ" 
      },
      { 
        text: "કઈ સામગ્રી સારી સંચાલક છે?", 
        options: ["કોપર", "લાકડું", "પ્લાસ્ટિક"], 
        correctAnswer: "કોપર" 
      },
    ],
  },
  3: {
    title: "મોડ્યુલ 3 ક્વિઝ: ફાયર સેફ્ટી",
    questions: [
      { 
        text: "આગ લાગતી વખતે શું કરવું?", 
        options: ["ફાયર અલાર્મ ચાલુ કરો", "પાણી નાંખો", "દોડો"], 
        correctAnswer: "ફાયર અલાર્મ ચાલુ કરો" 
      },
      { 
        text: "ફાયર એક્સટિંગ્વિશરનો રંગ શું છે?", 
        options: ["લાલ", "নীল", "પિલો"], 
        correctAnswer: "લાલ" 
      },
    ],
  },
  4: {
    title: "મોડ્યુલ 4 ક્વિઝ: પ્રાથમિક સારવાર",
    questions: [
      { 
        text: "ઘાવના પ્રથમ ઉપચારમાં શું કરવું?", 
        options: ["બેન્ડેજ લગાવો", "શુદ્ધ પાણીથી ધોવો", "એલ્કોહોલ વાપરો"], 
        correctAnswer: "શુદ્ધ પાણીથી ધોવો" 
      },
      { 
        text: "ફ્રેકચરના સમયે શું કરવું?", 
        options: ["હાડકાંને સ્થિર કરવું", "દબાણ લગાવો", "કંઈ કરવું નહી"], 
        correctAnswer: "હાડકાંને સ્થિર કરવું" 
      },
    ],
  },
  5: {
    title: "મોડ્યુલ 5 ક્વિઝ: હેલ્થ એન્ડ હાઇજિન",
    questions: [
      { 
        text: "દિનચર્યામાં સફાઈનું મહત્વ શું છે?", 
        options: ["બિમારીઓ ટાળી શકાય છે", "ઉર્જા વધે છે", "સમય બચી શકે છે"], 
        correctAnswer: "બિમારીઓ ટાળી શકાય છે" 
      },
      { 
        text: "કઈ વસ્તુ હાથ ધોવા માટે યોગ્ય છે?", 
        options: ["સાબુ અને પાણી", "કાગળ", "માટી"], 
        correctAnswer: "સાબુ અને પાણી" 
      },
    ],
  },
  6: {
    title: "મોડ્યુલ 6 ક્વિઝ: કિચન સેફ્ટી",
    questions: [
      { 
        text: "ભોજન બનાવતી વખતે શું વાપરવું જોઈએ?", 
        options: ["એપ્રોન", "હાથમોજા", "કૈટલ"], 
        correctAnswer: "એપ્રોન" 
      },
      { 
        text: "ચપટું કાપવા માટે શું મહત્વપૂર્ણ છે?", 
        options: ["મજબૂત ચપટી", "નરમ ચપટી", "કોઈ પણ ચપટી"], 
        correctAnswer: "મજબૂત ચપટી" 
      },
    ],
  },
  7: {
    title: "મોડ્યુલ 7 ક્વિઝ: પર્યાવરણ જાગૃતિ",
    questions: [
      { 
        text: "કઈ ક્રિયા પર્યાવરણ માટે હાનિકારક છે?", 
        options: ["પ્લાસ્ટિકનો ઉપયોગ", "ઝાડ વાવો", "કચરો નિયંત્રિત કરો"], 
        correctAnswer: "પ્લાસ્ટિકનો ઉપયોગ" 
      },
      { 
        text: "પ્રદૂષણ ઘટાડવા માટે શું કરવું જોઈએ?", 
        options: ["જંગલ કાપવું", "રિસાયકલ કરવું", "ઉર્જા વાપરો"], 
        correctAnswer: "રિસાયકલ કરવું" 
      },
    ],
  },
  8: {
    title: "મોડ્યુલ 8 ક્વિઝ: ઓફિસ સેફ્ટી",
    questions: [
      { 
        text: "કંપનીમાં ફાયર ડ્રિલનું મહત્વ શું છે?", 
        options: ["સલામતીનું જ્ઞાન", "કામમાં વિક્ષેપ", "સમય વ્યય"], 
        correctAnswer: "સલામતીનું જ્ઞાન" 
      },
      { 
        text: "ફોલિંગ ટૂલ્સને ટાળવા શું કરવું જોઈએ?", 
        options: ["શેલ્ફ્સ મજબૂત બનાવવી", "કંઈ કરવું નહી", "ઓછી ઊંચાઈની શેલ્ફ્સ"], 
        correctAnswer: "શેલ્ફ્સ મજબૂત બનાવવી" 
      },
    ],
  },
  9: {
    title: "મોડ્યુલ 9 ક્વિઝ: માર્ગ સલામતી",
    questions: [
      { 
        text: "યાત્રી દ્વારા શું વાપરવું જોઈએ?", 
        options: ["સીટ બેલ્ટ", "હેલમેટ", "કોઈ પણ વસ્તુ"], 
        correctAnswer: "સીટ બેલ્ટ" 
      },
      { 
        text: "રસ્તા પર ચાલતી વખતે શું મહત્વનું છે?", 
        options: ["ઝેબ્રા ક્રોસિંગ વાપરો", "ઝાડ નીચે જવો", "ફાસ્ટ ચાલો"], 
        correctAnswer: "ઝેબ્રા ક્રોસિંગ વાપરો" 
      },
    ],
  },
  10: {
    title: "મોડ્યુલ 10 ક્વિઝ: ટેકનોલોજી મૂલ્યાદાન",
    questions: [
      { 
        text: "ટેકનોલોજીનો ફાયદો શું છે?", 
        options: ["સમય બચાવે છે", "બેવકૂફ બનાવે છે", "ઊર્જા ઘટાડે છે"], 
        correctAnswer: "સમય બચાવે છે" 
      },
      { 
        text: "સુરક્ષા માટે કઈ ટેકનોલોજી ઉપયોગી છે?", 
        options: ["સીસીટીવી", "મોબાઇલ", "કચરો"], 
        correctAnswer: "સીસીટીવી" 
      },
    ],
  },
  11: {
    title: "મોડ્યુલ 11 ક્વિઝ: આરોગ્ય અને વ્યાયામ",
    questions: [
      { 
        text: "રોજ વ્યાયામ કરવાથી શું થાય છે?", 
        options: ["તંદુરસ્ત રહે છે", "વજન વધે છે", "કોઈ અસર ન થાય"], 
        correctAnswer: "તંદુરસ્ત રહે છે" 
      },
      { 
        text: "આહારમાં કઈ વસ્તુ ન હોવી જોઈએ?", 
        options: ["ચરબીવાળી વસ્તુ", "ફળ", "શાકભાજી"], 
        correctAnswer: "ચરબીવાળી વસ્તુ" 
      },
    ],
  },
  12: {
    title: "મોડ્યુલ 12 ક્વિઝ: એજ્યુકેશનલ એથિક્સ",
    questions: [
      { 
        text: "શિક્ષણમાં શા માટે ઐતિકતાનો ઉપયોગ છે?", 
        options: ["શિસ્ત માટે", "મજાક માટે", "સમય પસાર માટે"], 
        correctAnswer: "શિસ્ત માટે" 
      },
      { 
        text: "સત્યવાદિતાનું મહત્વ શું છે?", 
        options: ["વિશ્વાસ ઊભો થાય છે", "કમજોરી બતાવે છે", "મજા થાય છે"], 
        correctAnswer: "વિશ્વાસ ઊભો થાય છે" 
      },
    ],
  },
       
        // Additional quiz modules can be added here...
      };
      return quizzes[moduleId] || null;
    },
    submitQuiz() {
      if (!this.questions.length) {
        alert("No questions available to submit.");
        return;
      }

      this.feedback = this.questions.map((question, index) => {
        if (this.answers[index] === question.correctAnswer) {
          return "Correct!";
        } else {
          return `Incorrect! The correct answer is "${question.correctAnswer}".`;
        }
      });
    },
  },
  mounted() {
    this.loadQuizData();
  },
};
</script>

<style scoped>
.quiz-container {
  font-family: "Arial", sans-serif;
  line-height: 1.5;
  padding: 20px;
}

.quiz-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.question-block {
  margin-bottom: 20px;
}

.question {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}

.option {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.feedback {
  color: red;
  font-weight: bold;
  margin-top: 5px;
}
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
