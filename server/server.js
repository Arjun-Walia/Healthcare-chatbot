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
  }

  res.json({ reply });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
