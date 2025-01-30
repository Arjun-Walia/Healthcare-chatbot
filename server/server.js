const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

// Improved Response Structure with Severity
const responses = {
  headache: {
    reply: "You might be dehydrated or stressed. Drink water, take a break, and consider over-the-counter pain relievers.",
    severity: "Mild",
  },
  fever: {
    reply: "A fever could indicate an infection. Rest, drink fluids, and monitor your temp. Consult a doctor if it exceeds 103°F.",
    severity: "Moderate",
  },
  cough: {
    reply: "A cough could be due to a cold, allergies, or irritation. Stay hydrated and consider over-the-counter cough syrup.",
    severity: "Mild",
  },
  "sore throat": {
    reply: "A sore throat might be caused by a cold, flu, or strep throat. Gargle with warm salt water and consider throat lozenges.",
    severity: "Mild",
  },
    "stomach ache": {
    reply: "A stomach ache could be due to indigestion, gas, or food intolerance. Avoid spicy or fatty foods, drink peppermint tea, and rest.",
    severity: "Mild",
  },
  nausea: {
    reply: "Nausea can be caused by many factors. Sip ginger tea, eat small bland meals, and avoid strong odors. If it persists, seek medical advice.",
    severity: "Mild",
  },
  fatigue: {
    reply: "Fatigue can result from lack of sleep, stress, or poor diet. Ensure you're getting 7-9 hours of sleep, eat a balanced diet, and stay hydrated. If fatigue persists, consult a doctor.",
    severity: "Mild",
  },
   "muscle pain": {
    reply: "Muscle pain can be due to overexertion or tension. Rest, apply a warm compress, and consider over-the-counter pain relievers.",
    severity: "Mild",
  },
   rash: {
    reply: "A rash could be caused by allergies, infections, or skin conditions. Avoid scratching, apply a soothing lotion, and consult a doctor if it worsens.",
    severity: "Mild",
  },
   allergies: {
    reply: "Allergies can cause sneezing, itching, and congestion. Avoid allergens, use antihistamines, and consider a nasal spray. If symptoms are severe, consult a doctor.",
    severity: "Mild",
  },
   "back pain": {
    reply: "Back pain can result from poor posture or strain. Practice good posture, apply a heating pad, and do gentle stretches. If pain persists, consult a doctor.",
    severity: "Mild",
  },
   diarrhea: {
    reply: "Diarrhea can be caused by infections or food intolerances. Stay hydrated, eat bland foods like bananas and rice, and avoid dairy. If it persists, consult a doctor.",
     severity: "Mild",
  },
  constipation: {
    reply: "Constipation can be relieved by increasing fiber intake, drinking plenty of water, and exercising regularly. Consider over-the-counter laxatives if needed.",
    severity: "Mild",
  },
   insomnia: {
    reply: "Insomnia can be caused by stress or poor sleep habits. Establish a bedtime routine, avoid screens before bed, and consider relaxation techniques. If it persists, consult a doctor.",
     severity: "Mild",
  },
  anxiety: {
    reply: "Anxiety can be managed with deep breathing exercises, meditation, and regular exercise. If anxiety is severe or persistent, consult a mental health professional.",
    severity: "Mild",
  },
  cold: {
    reply: "A cold is a viral infection. Rest, drink plenty of fluids, and use over-the-counter cold remedies. If symptoms worsen, consult a doctor.",
    severity: "Mild",
  },
   flu: {
    reply: "The flu can cause fever, body aches, and fatigue. Rest, stay hydrated, and consider antiviral medications if prescribed by a doctor.",
     severity: "Moderate",
  },
   sunburn: {
    reply: "Sunburn can be painful and damaging to the skin. Apply aloe vera or a soothing lotion, stay hydrated, and avoid further sun exposure.",
     severity: "Mild",
  },
  dehydration: {
    reply: "Dehydration can cause dizziness and fatigue. Drink water or electrolyte solutions, and rest in a cool place.",
     severity: "Moderate",
  },
  earache: {
    reply: "An earache could be due to an infection or fluid buildup. Use a warm compress and consult a doctor if pain persists.",
      severity: "Mild",
  },
  toothache: {
     reply: "A toothache could indicate a cavity or infection. Rinse your mouth with warm salt water and see a dentist as soon as possible.",
      severity: "Mild",
  },
    heartburn: {
    reply: "Heartburn can be caused by acid reflux. Avoid spicy or fatty foods, eat smaller meals, and consider antacids.",
      severity: "Mild",
  },
  migraine: {
    reply: "Migraines can be debilitating. Rest in a dark, quiet room, apply a cold compress, and consider migraine-specific medications.",
      severity: "Moderate",
  },
   "joint pain": {
      reply: "Joint pain could be due to arthritis or injury. Apply a warm compress, take over-the-counter pain relievers, and consult a doctor if it persists.",
      severity: "Mild",
  },
  dizziness: {
    reply: "Dizziness can be caused by dehydration, low blood sugar, or inner ear issues. Sit or lie down, drink water, and eat something light.",
      severity: "Mild",
  },
  "shortness of breath": {
    reply: "Shortness of breath could indicate a serious condition. Sit upright, try to relax, and seek immediate medical attention if it worsens.",
     severity: "Serious",
  },
   "chest pain": {
      reply: "Chest pain could be a sign of a heart issue. Seek immediate medical attention if the pain is severe or persistent.",
       severity: "Serious",
  },
  "blurred vision": {
      reply: "Blurred vision could indicate an eye condition or other health issue. Rest your eyes and consult an eye doctor if it persists.",
       severity: "Mild",
  },
   "high blood pressure": {
      reply: "High blood pressure requires medical management. Reduce salt intake, exercise regularly, and consult a doctor for medication.",
      severity: "Moderate",
  },
   "low blood pressure": {
    reply: "Low blood pressure can cause dizziness. Stay hydrated, eat small frequent meals, and avoid standing up too quickly.",
    severity: "Mild",
  },
   "urinary tract infection": {
    reply: "A UTI can cause pain and frequent urination. Drink plenty of water and consult a doctor for antibiotics.",
     severity: "Moderate",
  },
    "menstrual cramps": {
    reply: "Menstrual cramps can be managed with a heating pad, over-the-counter pain relievers, and gentle exercise.",
      severity: "Mild",
  },
    sprain: {
    reply: "A sprain should be treated with rest, ice, compression, and elevation (RICE). Avoid putting weight on the injured area.",
     severity: "Mild",
  },
   burn: {
    reply: "For minor burns, run cool water over the area and apply aloe vera or a burn ointment. Seek medical attention for severe burns.",
      severity: "Mild",
  },
    nosebleed: {
    reply: "Sit upright, pinch your nose, and lean forward slightly. Apply a cold compress to the bridge of your nose. If bleeding persists, seek medical help.",
     severity: "Mild",
  },
  default: {
    reply: "I'm sorry, I can't provide specific advice for that. Please consult a healthcare professional for further assistance.",
  },
};

// Function to determine intent
function determineIntent(message) {
    const messageLower = message.toLowerCase();

    if (messageLower.includes('headache')) {
        return 'headache';
    }
    if (messageLower.includes('fever')) {
        return 'fever';
    }
    if (messageLower.includes('cough')) {
        return 'cough';
    }
    if (messageLower.includes('sore throat')) {
        return 'sore throat';
    }
     if (messageLower.includes('stomach ache') || messageLower.includes('stomach pain')) {
        return 'stomach ache';
    }
    if (messageLower.includes('nausea') || messageLower.includes('vomiting')) {
        return 'nausea';
    }
    if (messageLower.includes('fatigue') || messageLower.includes('tired')) {
        return 'fatigue';
    }
    if (messageLower.includes('muscle pain') || messageLower.includes('muscle ache')) {
        return 'muscle pain';
    }
    if (messageLower.includes('rash') || messageLower.includes('itching')) {
        return 'rash';
    }
   if (messageLower.includes('allergies') || messageLower.includes('sneezing')) {
        return 'allergies';
    }
    if (messageLower.includes('back pain')) {
       return 'back pain';
    }
    if (messageLower.includes('diarrhea')) {
        return 'diarrhea';
    }
   if (messageLower.includes('constipation')) {
       return 'constipation';
    }
  if (messageLower.includes('insomnia') || messageLower.includes('can\'t sleep')) {
        return 'insomnia';
    }
   if (messageLower.includes('anxiety') || messageLower.includes('stress')) {
        return 'anxiety';
    }
     if (messageLower.includes('cold')) {
        return 'cold';
    }
   if (messageLower.includes('flu')) {
        return 'flu';
    }
   if (messageLower.includes('sunburn')) {
        return 'sunburn';
    }
    if (messageLower.includes('dehydration')) {
       return 'dehydration';
    }
    if (messageLower.includes('earache')) {
        return 'earache';
    }
     if (messageLower.includes('toothache')) {
        return 'toothache';
    }
     if (messageLower.includes('heartburn')) {
        return 'heartburn';
    }
    if (messageLower.includes('migraine')) {
        return 'migraine';
    }
  if (messageLower.includes('joint pain')) {
        return 'joint pain';
    }
    if (messageLower.includes('dizziness')) {
        return 'dizziness';
    }
    if (messageLower.includes('shortness of breath')) {
         return 'shortness of breath';
    }
     if (messageLower.includes('chest pain')) {
        return 'chest pain';
    }
    if (messageLower.includes('blurred vision')) {
        return 'blurred vision';
    }
    if (messageLower.includes('high blood pressure')) {
        return 'high blood pressure';
    }
    if (messageLower.includes('low blood pressure')) {
        return 'low blood pressure';
    }
     if (messageLower.includes('urinary tract infection') || messageLower.includes('uti')) {
         return 'urinary tract infection';
    }
     if (messageLower.includes('menstrual cramps')) {
        return 'menstrual cramps';
    }
    if (messageLower.includes('sprain')) {
        return 'sprain';
    }
    if (messageLower.includes('burn')) {
       return 'burn';
    }
    if (messageLower.includes('nosebleed')) {
        return 'nosebleed';
    }
   return 'default';

}


// Chat endpoint
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;
  const intent = determineIntent(userMessage);
  const responseData = responses[intent] || responses.default;

  res.json({
    reply: responseData.reply,
    severity: responseData.severity,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});