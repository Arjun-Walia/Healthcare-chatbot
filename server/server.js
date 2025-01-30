const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static("public"));

// Predefined responses
const responses = {
  "headache": "You might be dehydrated or stressed. Drink water, take a break, and consider over-the-counter pain relievers like ibuprofen or acetaminophen.",
  "fever": "A fever could indicate an infection. Rest, drink plenty of fluids, and monitor your temperature. If it persists or exceeds 103°F, consult a doctor.",
  "cough": "A cough could be due to a cold, allergies, or irritation. Stay hydrated, use a humidifier, and consider cough drops or over-the-counter cough syrup.",
  "sore throat": "A sore throat might be caused by a cold, flu, or strep throat. Gargle with warm salt water, stay hydrated, and consider throat lozenges. If it persists, see a doctor.",
  "stomach ache": "A stomach ache could be due to indigestion, gas, or food intolerance. Avoid spicy or fatty foods, drink peppermint tea, and rest. If severe, consult a doctor.",
  "nausea": "Nausea can be caused by many factors, including motion sickness or food poisoning. Sip ginger tea, eat small bland meals, and avoid strong odors. If it persists, seek medical advice.",
  "fatigue": "Fatigue can result from lack of sleep, stress, or poor diet. Ensure you're getting 7-9 hours of sleep, eat a balanced diet, and stay hydrated. If fatigue persists, consult a doctor.",
  "muscle pain": "Muscle pain can be due to overexertion or tension. Rest, apply a warm compress, and consider over-the-counter pain relievers. If pain persists, see a doctor.",
  "rash": "A rash could be caused by allergies, infections, or skin conditions. Avoid scratching, apply a soothing lotion like calamine, and consult a doctor if it worsens.",
  "allergies": "Allergies can cause sneezing, itching, and congestion. Avoid allergens, use antihistamines, and consider a nasal spray. If symptoms are severe, consult a doctor.",
  "back pain": "Back pain can result from poor posture or strain. Practice good posture, apply a heating pad, and do gentle stretches. If pain persists, consult a doctor.",
  "diarrhea": "Diarrhea can be caused by infections or food intolerances. Stay hydrated, eat bland foods like bananas and rice, and avoid dairy. If it persists, consult a doctor.",
  "constipation": "Constipation can be relieved by increasing fiber intake, drinking plenty of water, and exercising regularly. Consider over-the-counter laxatives if needed.",
  "insomnia": "Insomnia can be caused by stress or poor sleep habits. Establish a bedtime routine, avoid screens before bed, and consider relaxation techniques. If it persists, consult a doctor.",
  "anxiety": "Anxiety can be managed with deep breathing exercises, meditation, and regular exercise. If anxiety is severe or persistent, consult a mental health professional.",
  "cold": "A cold is a viral infection. Rest, drink plenty of fluids, and use over-the-counter cold remedies. If symptoms worsen, consult a doctor.",
  "flu": "The flu can cause fever, body aches, and fatigue. Rest, stay hydrated, and consider antiviral medications if prescribed by a doctor.",
  "sunburn": "Sunburn can be painful and damaging to the skin. Apply aloe vera or a soothing lotion, stay hydrated, and avoid further sun exposure.",
  "dehydration": "Dehydration can cause dizziness and fatigue. Drink water or electrolyte solutions, and rest in a cool place.",
  "earache": "An earache could be due to an infection or fluid buildup. Use a warm compress and consult a doctor if pain persists.",
  "toothache": "A toothache could indicate a cavity or infection. Rinse your mouth with warm salt water and see a dentist as soon as possible.",
  "heartburn": "Heartburn can be caused by acid reflux. Avoid spicy or fatty foods, eat smaller meals, and consider antacids.",
  "migraine": "Migraines can be debilitating. Rest in a dark, quiet room, apply a cold compress, and consider migraine-specific medications.",
  "joint pain": "Joint pain could be due to arthritis or injury. Apply a warm compress, take over-the-counter pain relievers, and consult a doctor if it persists.",
  "dizziness": "Dizziness can be caused by dehydration, low blood sugar, or inner ear issues. Sit or lie down, drink water, and eat something light.",
  "shortness of breath": "Shortness of breath could indicate a serious condition. Sit upright, try to relax, and seek immediate medical attention if it worsens.",
  "chest pain": "Chest pain could be a sign of a heart issue. Seek immediate medical attention if the pain is severe or persistent.",
  "blurred vision": "Blurred vision could indicate an eye condition or other health issue. Rest your eyes and consult an eye doctor if it persists.",
  "high blood pressure": "High blood pressure requires medical management. Reduce salt intake, exercise regularly, and consult a doctor for medication.",
  "low blood pressure": "Low blood pressure can cause dizziness. Stay hydrated, eat small frequent meals, and avoid standing up too quickly.",
  "urinary tract infection": "A UTI can cause pain and frequent urination. Drink plenty of water and consult a doctor for antibiotics.",
  "menstrual cramps": "Menstrual cramps can be managed with a heating pad, over-the-counter pain relievers, and gentle exercise.",
  "sprain": "A sprain should be treated with rest, ice, compression, and elevation (RICE). Avoid putting weight on the injured area.",
  "burn": "For minor burns, run cool water over the area and apply aloe vera or a burn ointment. Seek medical attention for severe burns.",
  "nosebleed": "Sit upright, pinch your nose, and lean forward slightly. Apply a cold compress to the bridge of your nose. If bleeding persists, seek medical help.",
  "default": "I'm sorry, I can't provide specific advice for that. Please consult a healthcare professional for further assistance."
};

// Chat endpoint
app.post('/chat', (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let reply = responses.default;

  if (userMessage.includes('headache')) {
    reply = responses.headache;
  } else if (userMessage.includes('fever')) {
    reply = responses.fever;
  } else if (userMessage.includes('cough')) {
    reply = responses.cough;
  } else if (userMessage.includes('sore throat')) {
    reply = responses['sore throat'];
  } else if (userMessage.includes('stomach ache') || userMessage.includes('stomach pain')) {
    reply = responses['stomach ache'];
  } else if (userMessage.includes('nausea') || userMessage.includes('vomiting')) {
    reply = responses.nausea;
  } else if (userMessage.includes('fatigue') || userMessage.includes('tired')) {
    reply = responses.fatigue;
  } else if (userMessage.includes('muscle pain') || userMessage.includes('muscle ache')) {
    reply = responses['muscle pain'];
  } else if (userMessage.includes('rash') || userMessage.includes('itching')) {
    reply = responses.rash;
  } else if (userMessage.includes('allergies') || userMessage.includes('sneezing')) {
    reply = responses.allergies;
  } else if (userMessage.includes('back pain')) {
    reply = responses['back pain'];
  } else if (userMessage.includes('diarrhea')) {
    reply = responses.diarrhea;
  } else if (userMessage.includes('constipation')) {
    reply = responses.constipation;
  } else if (userMessage.includes('insomnia') || userMessage.includes('can\'t sleep')) {
    reply = responses.insomnia;
  } else if (userMessage.includes('anxiety') || userMessage.includes('stress')) {
    reply = responses.anxiety;
  } else if (userMessage.includes('cold')) {
    reply = responses.cold;
  } else if (userMessage.includes('flu')) {
    reply = responses.flu;
  } else if (userMessage.includes('sunburn')) {
    reply = responses.sunburn;
  } else if (userMessage.includes('dehydration')) {
    reply = responses.dehydration;
  } else if (userMessage.includes('earache')) {
    reply = responses.earache;
  } else if (userMessage.includes('toothache')) {
    reply = responses.toothache;
  } else if (userMessage.includes('heartburn')) {
    reply = responses.heartburn;
  } else if (userMessage.includes('migraine')) {
    reply = responses.migraine;
  } else if (userMessage.includes('joint pain')) {
    reply = responses['joint pain'];
  } else if (userMessage.includes('dizziness')) {
    reply = responses.dizziness;
  } else if (userMessage.includes('shortness of breath')) {
    reply = responses['shortness of breath'];
  } else if (userMessage.includes('chest pain')) {
    reply = responses['chest pain'];
  } else if (userMessage.includes('blurred vision')) {
    reply = responses['blurred vision'];
  } else if (userMessage.includes('high blood pressure')) {
    reply = responses['high blood pressure'];
  } else if (userMessage.includes('low blood pressure')) {
    reply = responses['low blood pressure'];
  } else if (userMessage.includes('urinary tract infection') || userMessage.includes('uti')) {
    reply = responses['urinary tract infection'];
  } else if (userMessage.includes('menstrual cramps')) {
    reply = responses['menstrual cramps'];
  } else if (userMessage.includes('sprain')) {
    reply = responses.sprain;
  } else if (userMessage.includes('burn')) {
    reply = responses.burn;
  } else if (userMessage.includes('nosebleed')) {
    reply = responses.nosebleed;
  }

  res.json({ reply });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
