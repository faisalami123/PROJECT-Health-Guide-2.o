// ================== বাংলা ডাটাবেস ==================
const symptoms_bn = {
  "মাথা ব্যথা": {
    causes: ["স্ট্রেস", "ঘুমের অভাব", "চোখের সমস্যা"],
    doctor: "নিউরোলজিস্ট",
    home: ["বিশ্রাম", "পানি পান", "হালকা ব্যথানাশক"],
    warning: "৩ দিনের বেশি হলে ডাক্তার দেখান"
  },
  "কাশি": {
    causes: ["ঠান্ডা", "অ্যালার্জি", "ইনফেকশন"],
    doctor: "মেডিসিন স্পেশালিস্ট",
    home: ["গরম পানি পান", "বাষ্প গ্রহণ"],
    warning: "দীর্ঘস্থায়ী হলে ডাক্তার দেখান"
  },
  "পেট ব্যথা": {
    causes: ["অম্বল", "গ্যাস", "সংক্রমণ"],
    doctor: "গ্যাস্ট্রোএন্টেরোলজিস্ট",
    home: ["হালকা খাবার", "পানি পান"],
    warning: "তীব্র ব্যথা হলে ডাক্তার দেখান"
  },
  "জ্বর": {
    causes: ["ভাইরাস", "ব্যাকটেরিয়া সংক্রমণ"],
    doctor: "মেডিসিন স্পেশালিস্ট",
    home: ["বিশ্রাম", "পানি পান"],
    warning: "১০২°F এর বেশি হলে ডাক্তার দেখান"
  },
  "ডায়রিয়া": {
    causes: ["দূষিত খাবার", "সংক্রমণ"],
    doctor: "গ্যাস্ট্রোএন্টেরোলজিস্ট",
    home: ["ORS পান করুন", "হালকা খাবার"],
    warning: "ডিহাইড্রেশন হলে ডাক্তার দেখান"
  },
  "বমি": {
    causes: ["ফুড পয়জনিং", "গ্যাস্ট্রিক"],
    doctor: "মেডিসিন স্পেশালিস্ট",
    home: ["ORS পান করুন", "বিশ্রাম নিন"],
    warning: "অতিরিক্ত হলে ডাক্তার দেখান"
  },
  "শ্বাসকষ্ট": {
    causes: ["অ্যাজমা", "অ্যালার্জি", "হার্ট সমস্যা"],
    doctor: "পালমোনোলজিস্ট",
    home: ["ইনহেলার ব্যবহার করুন", "শান্ত থাকুন"],
    warning: "তীব্র হলে জরুরি বিভাগে যান"
  },
  "চর্মরোগ": {
    causes: ["অ্যালার্জি", "সংক্রমণ"],
    doctor: "ডার্মাটোলজিস্ট",
    home: ["অ্যান্টিহিস্টামিন", "পরিষ্কার রাখুন"],
    warning: "ছড়িয়ে পড়লে ডাক্তার দেখান"
  },
  "দাঁতের ব্যথা": {
    causes: ["ক্যাভিটি", "ইনফেকশন"],
    doctor: "ডেন্টিস্ট",
    home: ["লবণ পানি দিয়ে কুলকুচি", "পেইনকিলার"],
    warning: "দীর্ঘস্থায়ী হলে ডাক্তার দেখান"
  },
  "চোখের ব্যথা": {
    causes: ["চোখের চাপ", "ইনফেকশন"],
    doctor: "অপথালমোলজিস্ট",
    home: ["চোখ ধুয়ে নিন", "বিশ্রাম নিন"],
    warning: "দৃষ্টিশক্তি কমলে ডাক্তার দেখান"
  },

"হার্ট অ্যাটাক": {
  causes: ["রক্তনালী ব্লক", "উচ্চ রক্তচাপ"],
  doctor: "কার্ডিওলজিস্ট",
  home: ["তৎক্ষণাৎ জরুরি সেবা নিন"],
  warning: "⚠️ জরুরি অবস্থা, দ্রুত হাসপাতালে যান"
},
"বুক ধড়ফড়": {
  causes: ["উচ্চ রক্তচাপ", "স্ট্রেস"],
  doctor: "কার্ডিওলজিস্ট",
  home: ["বিশ্রাম নিন"],
  warning: "বারবার হলে ডাক্তার দেখান"
},
"মাইগ্রেন": {
  causes: ["স্ট্রেস", "হরমোন পরিবর্তন"],
  doctor: "নিউরোলজিস্ট",
  home: ["অন্ধকার ঘরে বিশ্রাম", "পানি পান"],
  warning: "বারবার হলে ডাক্তার দেখান"
},
"খিঁচুনি": {
  causes: ["এপিলেপসি", "মস্তিষ্কে সমস্যা"],
  doctor: "নিউরোলজিস্ট",
  home: ["রোগীকে নিরাপদ স্থানে রাখুন"],
  warning: "⚠️ জরুরি অবস্থা, দ্রুত হাসপাতালে যান"
},
"হাড় ভাঙা": {
  causes: ["দুর্ঘটনা", "পড়ে যাওয়া"],
  doctor: "অর্থোপেডিক",
  home: ["প্লাস্টার করুন", "বিশ্রাম নিন"],
  warning: "ডাক্তার দেখানো জরুরি"
},
"জয়েন্ট ব্যথা": {
  causes: ["আর্থ্রাইটিস", "ইনজুরি"],
  doctor: "অর্থোপেডিক",
  home: ["গরম সেঁক", "বিশ্রাম"],
  warning: "দীর্ঘস্থায়ী হলে ডাক্তার দেখান"
},
"পেশী টান": {
  causes: ["অতিরিক্ত ব্যায়াম", "পানি শূন্যতা"],
  doctor: "অর্থোপেডিক",
  home: ["স্ট্রেচিং", "পানি পান"],
  warning: "বারবার হলে ডাক্তার দেখান"
},
"পেশী দুর্বলতা": {
  causes: ["স্নায়ুর সমস্যা", "পুষ্টির অভাব"],
  doctor: "নিউরোলজিস্ট",
  home: ["সুষম খাদ্য", "বিশ্রাম"],
  warning: "দীর্ঘস্থায়ী হলে ডাক্তার দেখান"
},
"প্রচুর প্রস্রাব": {
  causes: ["ডায়াবেটিস", "কিডনি সমস্যা"],
  doctor: "নেফ্রোলজিস্ট",
  home: ["পানি পান নিয়ন্ত্রণ করুন"],
  warning: "ডাক্তার দেখানো জরুরি"
},
"কিডনি ব্যথা": {
  causes: ["কিডনি স্টোন", "সংক্রমণ"],
  doctor: "নেফ্রোলজিস্ট",
  home: ["গরম সেঁক", "পানি পান"],
  warning: "⚠️ গুরুতর হলে ডাক্তার দেখান"
},
"মাসিক সমস্যা": {
  causes: ["হরমোন সমস্যা", "পলিসিস্টিক ওভারি"],
  doctor: "গাইনোকলজিস্ট",
  home: ["বিশ্রাম", "গরম সেঁক"],
  warning: "দীর্ঘস্থায়ী হলে ডাক্তার দেখান"
},
"বন্ধ্যাত্ব": {
  causes: ["হরমোন সমস্যা", "প্রজনন অঙ্গের সমস্যা"],
  doctor: "গাইনোকলজিস্ট",
  home: ["চিকিৎসকের পরামর্শ নিন"],
  warning: "ডাক্তার দেখানো জরুরি"
},
"ডায়াবেটিস": {
  causes: ["ইনসুলিন ঘাটতি"],
  doctor: "এন্ডোক্রাইনোলজিস্ট",
  home: ["ডায়েট নিয়ন্ত্রণ", "ব্যায়াম"],
  warning: "রক্তে শর্করা নিয়মিত পরীক্ষা করুন"
},
"থাইরয়েড সমস্যা": {
  causes: ["হরমোন ভারসাম্যহীনতা"],
  doctor: "এন্ডোক্রাইনোলজিস্ট",
  home: ["ডায়েট নিয়ন্ত্রণ"],
  warning: "ডাক্তার দেখানো জরুরি"
},
"সংক্রমণ": {
  causes: ["ব্যাকটেরিয়া", "ভাইরাস"],
  doctor: "মেডিসিন স্পেশালিস্ট",
  home: ["বিশ্রাম", "পানি পান"],
  warning: "জ্বর বেশি হলে ডাক্তার দেখান"
},
"ঘাম সমস্যা": {
  causes: ["হরমোন সমস্যা", "অতিরিক্ত গরম"],
  doctor: "ডার্মাটোলজিস্ট",
  home: ["ঠান্ডা পরিবেশে থাকুন"],
  warning: "দীর্ঘস্থায়ী হলে ডাক্তার দেখান"
},
"লালা সমস্যা": {
  causes: ["গ্রন্থির সমস্যা"],
  doctor: "ডেন্টিস্ট",
  home: ["পানি পান"],
  warning: "ডাক্তার দেখানো জরুরি"
}
};





// ================== English Database ==================
const symptoms_en = {
  "Headache": {
    causes: ["Stress", "Lack of sleep", "Eye strain"],
    doctor: "Neurologist",
    home: ["Rest", "Drink water", "Mild painkiller"],
    warning: "See a doctor if it lasts more than 3 days"
  },
  "Cough": {
    causes: ["Cold", "Allergy", "Infection"],
    doctor: "Medicine Specialist",
    home: ["Drink warm water", "Steam inhalation"],
    warning: "See a doctor if persistent"
  },
  "Stomach Pain": {
    causes: ["Acidity", "Gas", "Infection"],
    doctor: "Gastroenterologist",
    home: ["Light food", "Drink water"],
    warning: "See a doctor if severe pain"
  },
  "Fever": {
    causes: ["Viral infection", "Bacterial infection"],
    doctor: "Medicine Specialist",
    home: ["Rest", "Drink water"],
    warning: "See a doctor if above 102°F"
  },
  "Diarrhea": {
    causes: ["Contaminated food", "Infection"],
    doctor: "Gastroenterologist",
    home: ["Drink ORS", "Light food"],
    warning: "See a doctor if dehydration occurs"
  },
  "Vomiting": {
    causes: ["Food poisoning", "Gastric"],
    doctor: "Medicine Specialist",
    home: ["Drink ORS", "Take rest"],
    warning: "See a doctor if excessive"
  },
  "Breathing Difficulty": {
    causes: ["Asthma", "Allergy", "Heart problem"],
    doctor: "Pulmonologist",
    home: ["Use inhaler", "Stay calm"],
    warning: "Go to ER if severe"
  },
  "Skin Rash": {
    causes: ["Allergy", "Infection"],
    doctor: "Dermatologist",
    home: ["Antihistamine", "Keep clean"],
    warning: "See a doctor if spreading"
  },
  "Toothache": {
    causes: ["Cavity", "Infection"],
    doctor: "Dentist",
    home: ["Salt water rinse", "Painkiller"],
    warning: "See a doctor if persistent"
  },
  "Eye Pain": {
    causes: ["Eye strain", "Infection"],
    doctor: "Ophthalmologist",
    home: ["Wash eyes", "Take rest"],
    warning: "See a doctor if vision decreases"
  },
  "Heart Attack": {
  causes: ["Blocked artery", "High blood pressure"],
  doctor: "Cardiologist",
  home: ["Seek emergency care immediately"],
  warning: "⚠️ Emergency, go to hospital quickly"
},
"Palpitations": {
  causes: ["High blood pressure", "Stress"],
  doctor: "Cardiologist",
  home: ["Take rest"],
  warning: "See a doctor if frequent"
},
"Migraine": {
  causes: ["Stress", "Hormonal changes"],
  doctor: "Neurologist",
  home: ["Rest in dark room", "Drink water"],
  warning: "See a doctor if frequent"
},
"Seizure": {
  causes: ["Epilepsy", "Brain disorder"],
  doctor: "Neurologist",
  home: ["Keep patient safe"],
  warning: "⚠️ Emergency, go to hospital quickly"
},
"Fracture": {
  causes: ["Accident", "Fall"],
  doctor: "Orthopedic",
  home: ["Apply plaster", "Rest"],
  warning: "Doctor consultation required"
},
"Joint Pain": {
  causes: ["Arthritis", "Injury"],
  doctor: "Orthopedic",
  home: ["Warm compress", "Rest"],
  warning: "See a doctor if persistent"
},
"Muscle Cramp": {
  causes: ["Over exercise", "Dehydration"],
  doctor: "Orthopedic",
  home: ["Stretching", "Drink water"],
  warning: "See a doctor if frequent"
},
"Muscle Weakness": {
  causes: ["Nerve problem", "Nutrient deficiency"],
  doctor: "Neurologist",
  home: ["Balanced diet", "Rest"],
  warning: "See a doctor if persistent"
},
"Frequent Urination": {
  causes: ["Diabetes", "Kidney problem"],
  doctor: "Nephrologist",
  home: ["Control water intake"],
  warning: "Doctor consultation required"
},
"Kidney Pain": {
  causes: ["Kidney stone", "Infection"],
  doctor: "Nephrologist",
  home: ["Warm compress", "Drink water"],
  warning: "⚠️ See a doctor if severe"
},
"Menstrual Problem": {
  causes: ["Hormonal imbalance", "PCOS"],
  doctor: "Gynecologist",
  home: ["Rest", "Warm compress"],
  warning: "See a doctor if persistent"
},
"Infertility": {
  causes: ["Hormonal imbalance", "Reproductive organ problem"],
  doctor: "Gynecologist",
  home: ["Consult doctor"],
  warning: "Doctor consultation required"
},
"Diabetes": {
  causes: ["Insulin deficiency"],
  doctor: "Endocrinologist",
  home: ["Diet control", "Exercise"],
  warning: "Check blood sugar regularly"
},
"Thyroid Disorder": {
  causes: ["Hormonal imbalance"],
  doctor: "Endocrinologist",
  home: ["Diet control"],
  warning: "Doctor consultation required"
},
"Infection": {
  causes: ["Bacteria", "Virus"],
  doctor: "Medicine Specialist",
  home: ["Rest", "Drink water"],
  warning: "See a doctor if fever is high"
},
"Sweating Problem": {
  causes: ["Hormonal issue", "Hot environment"],
  doctor: "Dermatologist",
  home: ["Stay in cool environment", "Drink water"],
  warning: "See a doctor if persistent"
},
"Saliva Disorder": {
  causes: ["Gland problem"],
  doctor: "Dentist",
  home: ["Drink water"],
  warning: "Doctor consultation required"
}
};




// ================== বাংলা ক্যাটাগরি ==================
const categories_bn = {
"শ্বাসতন্ত্র": ["কাশি", "শ্বাসকষ্ট"],
"পাচনতন্ত্র": ["পেট ব্যথা", "ডায়রিয়া", "বমি"],
"রক্ত সঞ্চালন তন্ত্র": ["বুক ধড়ফড়", "হার্ট অ্যাটাক"],
"স্নায়ুতন্ত্র": ["মাথা ব্যথা", "মাইগ্রেন", "খিঁচুনি"],
"অস্থি তন্ত্র": ["হাড় ভাঙা", "জয়েন্ট ব্যথা"],
"পেশী তন্ত্র": ["পেশী টান", "পেশী দুর্বলতা"],
"মূত্রতন্ত্র": ["প্রচুর প্রস্রাব", "কিডনি ব্যথা"],
"প্রজননতন্ত্র": ["মাসিক সমস্যা", "বন্ধ্যাত্ব"],
"অন্তঃস্রাবী তন্ত্র": ["ডায়াবেটিস", "থাইরয়েড সমস্যা"],
"রোগ প্রতিরোধ তন্ত্র": ["জ্বর", "সংক্রমণ"],
"ত্বক তন্ত্র": ["চর্মরোগ", "চুলকানি"],
"এক্সোক্রাইন তন্ত্র": ["ঘাম সমস্যা", "লালা সমস্যা"]
};

// ================== English Categories ==================
const categories_en = {
"Respiratory": ["Cough", "Breathing Difficulty"],
"Digestive": ["Stomach Pain", "Diarrhea", "Vomiting"],
"Circulatory": ["Palpitations", "Heart Attack"],
"Nervous": ["Headache", "Migraine", "Seizure"],
"Skeletal": ["Fracture", "Joint Pain"],
"Muscular": ["Muscle Cramp", "Muscle Weakness"],
"Urinary": ["Frequent Urination", "Kidney Pain"],
"Reproductive": ["Menstrual Problem", "Infertility"],
"Endocrine": ["Diabetes", "Thyroid Disorder"],
"Immune": ["Fever", "Infection"],
"Integumentary": ["Skin Rash", "Itching"],
"Exocrine": ["Sweating Problem", "Saliva Disorder"]
};

// ================== বাংলা প্রাথমিক চিকিৎসা ==================
const firstAid_bn = {
"কাটা": ["ক্ষত পরিষ্কার করুন", "অ্যান্টিসেপটিক লাগান", "ব্যান্ডেজ করুন"],
"পোড়া": ["ঠান্ডা পানি দিন", "অ্যালোভেরা ব্যবহার করুন", "গুরুতর হলে ডাক্তার দেখান"],
"মাথায় আঘাত": ["বিশ্রাম নিন", "বরফ দিন", "অচেতন হলে ডাক্তার দেখান"],
"নাক দিয়ে রক্ত পড়া": ["সোজা বসুন", "নাক চেপে ধরুন ১০ মিনিট", "মাথা উঁচু রাখুন"],
"সাপের কামড়": ["রোগীকে শান্ত রাখুন", "কামড়ের জায়গা নাড়াচাড়া করবেন না", "তৎক্ষণাৎ হাসপাতালে যান"],
"কুকুর/বিড়ালের কামড়": ["ক্ষত ধুয়ে ফেলুন", "অ্যান্টিসেপটিক লাগান", "রেবিস ভ্যাকসিন নিন"],
"হাড় ভাঙা": ["আঘাতের জায়গা স্থির রাখুন", "স্প্লিন্ট ব্যবহার করুন", "ডাক্তার দেখান"],
"অজ্ঞান হওয়া": ["রোগীকে শুইয়ে দিন", "পা উঁচু করুন", "শ্বাস-প্রশ্বাস পরীক্ষা করুন"],
"পোকা কামড়": ["ঠান্ডা পানি দিন", "অ্যান্টিহিস্টামিন ব্যবহার করুন", "ফুলে গেলে ডাক্তার দেখান"],
"চোখে ধুলো ঢোকা": ["চোখ পানি দিয়ে ধুয়ে ফেলুন", "চোখ ঘষবেন না", "ব্যথা থাকলে ডাক্তার দেখান"],
"কানে ব্যথা": ["গরম সেঁক দিন", "পেইনকিলার নিন", "সংক্রমণ হলে ডাক্তার দেখান"],
"পেট ব্যথা": ["হালকা খাবার খান", "পানি পান করুন", "তীব্র হলে ডাক্তার দেখান"],
"খাদ্যে বিষক্রিয়া": ["ORS পান করুন", "বিশ্রাম নিন", "অতিরিক্ত হলে ডাক্তার দেখান"],
"শ্বাসকষ্ট": ["শান্ত থাকুন", "ইনহেলার ব্যবহার করুন", "তীব্র হলে হাসপাতালে যান"],
"বিদ্যুৎস্পৃষ্ট": ["বিদ্যুৎ সংযোগ বন্ধ করুন", "রোগীকে নিরাপদ স্থানে আনুন", "জরুরি বিভাগে যান"],
"ডুবে যাওয়া": ["রোগীকে পানি থেকে তুলুন", "CPR দিন", "জরুরি বিভাগে যান"],
"অতিরিক্ত রক্তপাত": ["চাপ দিয়ে রক্ত বন্ধ করুন", "ব্যান্ডেজ করুন", "রক্ত না থামলে ডাক্তার দেখান"],
"অ্যালার্জি প্রতিক্রিয়া": ["অ্যান্টিহিস্টামিন নিন", "শ্বাসকষ্ট হলে হাসপাতালে যান"],
"তাপজনিত অসুস্থতা": ["ঠান্ডা স্থানে যান", "পানি পান করুন", "তীব্র হলে ডাক্তার দেখান"],
"হিট স্ট্রোক": ["ঠান্ডা পানি দিন", "শরীর ঠান্ডা করুন", "জরুরি বিভাগে যান"]
};

// ================== English First Aid ==================
const firstAid_en = {
"Cut": ["Clean the wound", "Apply antiseptic", "Bandage it"],
"Burn": ["Cool with water", "Use aloe vera", "See a doctor if severe"],
"Head Injury": ["Take rest", "Apply ice", "See a doctor if unconscious"],
"Nosebleed": ["Sit upright", "Pinch nose for 10 minutes", "Keep head elevated"],
"Snake Bite": ["Keep patient calm", "Do not move the bitten area", "Go to hospital immediately"],
"Animal Bite": ["Wash wound", "Apply antiseptic", "Take rabies vaccine"],
"Fracture": ["Immobilize the area", "Use a splint", "See a doctor"],
"Fainting": ["Lay patient down", "Elevate legs", "Check breathing"],
"Insect Bite": ["Apply cold water", "Use antihistamine", "See a doctor if swelling occurs"],
"Foreign Body in Eye": ["Wash eye with clean water", "Do not rub", "See a doctor if pain persists"],
"Ear Pain": ["Apply warm compress", "Take painkiller", "See a doctor if infection"],
"Stomach Ache": ["Eat light food", "Drink water", "See a doctor if severe"],
"Food Poisoning": ["Drink ORS", "Take rest", "See a doctor if excessive"],
"Breathing Difficulty": ["Stay calm", "Use inhaler", "Go to hospital if severe"],
"Electric Shock": ["Turn off power", "Move patient to safe place", "Go to ER"],
"Drowning": ["Remove patient from water", "Give CPR", "Go to ER"],
"Severe Bleeding": ["Apply pressure", "Bandage wound", "See a doctor if not stopping"],
"Allergic Reaction": ["Take antihistamine", "Go to hospital if breathing difficulty"],
"Heat Exhaustion": ["Move to cool place", "Drink water", "See a doctor if severe"],
"Heat Stroke": ["Apply cold water", "Cool body", "Go to ER"]
};


// ================== Nutrition Data ==================
const nutritionData = {
// Fruits
"Apple": {
  name: { en: "Apple", bn: "আপেল" },
  calories: 52, protein: "0.3g", fat: "0.2g", carbs: "14g",
  good: { en: "Rich in fiber and Vitamin C", bn: "ফাইবার ও ভিটামিন C সমৃদ্ধ" },
  bad: { en: "Too much may cause stomach upset", bn: "অতিরিক্ত খেলে পেটের সমস্যা হতে পারে" },
  healthScore: 85
},
"Banana": {
  name: { en: "Banana", bn: "কলা" },
  calories: 89, protein: "1.1g", fat: "0.3g", carbs: "23g",
  good: { en: "High in potassium", bn: "পটাশিয়াম সমৃদ্ধ" },
  bad: { en: "Excess may raise sugar levels", bn: "অতিরিক্ত খেলে রক্তে শর্করা বাড়তে পারে" },
  healthScore: 80
},
"Orange": {
  name: { en: "Orange", bn: "কমলা" },
  calories: 47, protein: "0.9g", fat: "0.1g", carbs: "12g",
  good: { en: "High in Vitamin C", bn: "ভিটামিন C সমৃদ্ধ" },
  bad: { en: "Acidic, may irritate stomach", bn: "অম্লীয়, পেটে জ্বালা করতে পারে" },
  healthScore: 82
},
"Mango": {
  name: { en: "Mango", bn: "আম" },
  calories: 60, protein: "0.8g", fat: "0.4g", carbs: "15g",
  good: { en: "Rich in Vitamin A", bn: "ভিটামিন A সমৃদ্ধ" },
  bad: { en: "High sugar content", bn: "চিনি বেশি" },
  healthScore: 78
},

// Vegetables
"Carrot": {
  name: { en: "Carrot", bn: "গাজর" },
  calories: 41, protein: "0.9g", fat: "0.2g", carbs: "10g",
  good: { en: "Rich in Vitamin A", bn: "ভিটামিন A সমৃদ্ধ" },
  bad: { en: "Too much may cause orange skin", bn: "অতিরিক্ত খেলে ত্বক কমলা রঙ হতে পারে" },
  healthScore: 88
},
"Spinach": {
  name: { en: "Spinach", bn: "পালং শাক" },
  calories: 23, protein: "2.9g", fat: "0.4g", carbs: "3.6g",
  good: { en: "Iron and calcium rich", bn: "লোহা ও ক্যালসিয়াম সমৃদ্ধ" },
  bad: { en: "Oxalates may affect kidney", bn: "অক্সালেট কিডনিতে সমস্যা করতে পারে" },
  healthScore: 90
},
"Potato": {
  name: { en: "Potato", bn: "আলু" },
  calories: 77, protein: "2g", fat: "0.1g", carbs: "17g",
  good: { en: "Good source of carbs", bn: "কার্বোহাইড্রেটের ভালো উৎস" },
  bad: { en: "High glycemic index", bn: "গ্লাইসেমিক সূচক বেশি" },
  healthScore: 70
},
"Tomato": {
  name: { en: "Tomato", bn: "টমেটো" },
  calories: 18, protein: "0.9g", fat: "0.2g", carbs: "3.9g",
  good: { en: "Rich in lycopene", bn: "লাইকোপিন সমৃদ্ধ" },
  bad: { en: "Acidic, may cause reflux", bn: "অম্লীয়, এসিডিটি করতে পারে" },
  healthScore: 85
},

// Grains
"Rice": {
  name: { en: "Rice", bn: "ভাত" },
  calories: 130, protein: "2.7g", fat: "0.3g", carbs: "28g",
  good: { en: "Staple energy source", bn: "প্রধান শক্তির উৎস" },
  bad: { en: "High glycemic index", bn: "গ্লাইসেমিক সূচক বেশি" },
  healthScore: 75
},
"Wheat": {
  name: { en: "Wheat", bn: "গম" },
  calories: 327, protein: "12g", fat: "1.5g", carbs: "71g",
  good: { en: "Rich in fiber", bn: "ফাইবার সমৃদ্ধ" },
  bad: { en: "Contains gluten", bn: "গ্লুটেন থাকে" },
  healthScore: 78
},
"Oats": {
  name: { en: "Oats", bn: "ওটস" },
  calories: 389, protein: "16g", fat: "7g", carbs: "66g",
  good: { en: "High fiber, lowers cholesterol", bn: "ফাইবার বেশি, কোলেস্টেরল কমায়" },
  bad: { en: "Calorie dense", bn: "ক্যালোরি বেশি" },
  healthScore: 85
},
"Corn": {
  name: { en: "Corn", bn: "ভুট্টা" },
  calories: 86, protein: "3.2g", fat: "1.2g", carbs: "19g",
  good: { en: "Rich in antioxidants", bn: "অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ" },
  bad: { en: "High starch", bn: "স্টার্চ বেশি" },
  healthScore: 76
},

// Snacks
"Burger": {
  name: { en: "Burger", bn: "বার্গার" },
  calories: 295, protein: "17g", fat: "12g", carbs: "30g",
  good: { en: "High protein", bn: "প্রোটিন বেশি" },
  bad: { en: "High saturated fat & sodium", bn: "স্যাচুরেটেড ফ্যাট ও সোডিয়াম বেশি" },
  healthScore: 40
},
"Pizza": {
  name: { en: "Pizza", bn: "পিজ্জা" },
  calories: 266, protein: "11g", fat: "10g", carbs: "33g",
  good: { en: "Contains protein & calcium", bn: "প্রোটিন ও ক্যালসিয়াম থাকে" },
  bad: { en: "High fat & sodium", bn: "চর্বি ও সোডিয়াম বেশি" },
  healthScore: 45
},
"Sandwich": {
  name: { en: "Sandwich", bn: "স্যান্ডউইচ" },
  calories: 250, protein: "12g", fat: "8g", carbs: "30g",
  good: { en: "Balanced meal option", bn: "সুষম খাবার হতে পারে" },
  bad: { en: "Depends on fillings", bn: "ফিলিং অনুযায়ী স্বাস্থ্যকর বা অস্বাস্থ্যকর" },
  healthScore: 55
},
"Fries": {
  name: { en: "Fries", bn: "ফ্রেঞ্চ ফ্রাই" },
  calories: 312, protein: "3.4g", fat: "15g", carbs: "41g",
  good: { en: "Tasty & filling", bn: "সুস্বাদু ও পেট ভরায়" },
  bad: { en: "High fat & calories", bn: "চর্বি ও ক্যালোরি বেশি" },
  healthScore: 35
},

// Sweets
"Cake": {
  name: { en: "Cake", bn: "কেক" },
  calories: 250, protein: "4g", fat: "12g", carbs: "35g",
  good: { en: "Tasty treat", bn: "সুস্বাদু খাবার" },
  bad: { en: "High sugar & fat", bn: "চিনি ও চর্বি বেশি" },
  healthScore: 30
},
"Ice Cream": {
  name: { en: "Ice Cream", bn: "আইসক্রিম" },
  calories: 207, protein: "3.5g", fat: "11g", carbs: "24g",
  good: { en: "Calcium and protein source", bn: "ক্যালসিয়াম ও প্রোটিনের উৎস" },
  bad: { en: "High sugar and fat", bn: "চিনি ও চর্বি বেশি" },
  healthScore: 35
},
"Chocolate": {
  name: { en: "Chocolate", bn: "চকোলেট" },
  calories: 546, protein: "4.9g", fat: "31g", carbs: "61g",
  good: { en: "Contains antioxidants", bn: "অ্যান্টিঅক্সিডেন্ট থাকে" },
  bad: { en: "High sugar and calories", bn: "চিনি ও ক্যালোরি বেশি" },
  healthScore: 40
},

// Meat
"Chicken": {
  name: { en: "Chicken", bn: "মুরগি" },
  calories: 239, protein: "27g", fat: "14g", carbs: "0g",
  good: { en: "High protein, low carb", bn: "প্রোটিন বেশি, কার্বোহাইড্রেট কম" },
  bad: { en: "Skin high in fat", bn: "চামড়ায় চর্বি বেশি" },
  healthScore: 75
},
"Beef": {
  name: { en: "Beef", bn: "গরুর মাংস" },
  calories: 250, protein: "26g", fat: "15g", carbs: "0g",
  good: { en: "Rich in iron and protein", bn: "লোহা ও প্রোটিন সমৃদ্ধ" },
  bad: { en: "High saturated fat", bn: "স্যাচুরেটেড ফ্যাট বেশি" },
  healthScore: 60
},
"Mutton": {
  name: { en: "Mutton", bn: "খাসির মাংস" },
  calories: 294, protein: "25g", fat: "21g", carbs: "0g",
  good: { en: "Protein rich", bn: "প্রোটিন সমৃদ্ধ" },
  bad: { en: "High cholesterol", bn: "কোলেস্টেরল বেশি" },
  healthScore: 55
},
"Duck": {
  name: { en: "Duck", bn: "হাঁস" },
  calories: 337, protein: "19g", fat: "28g", carbs: "0g",
  good: { en: "Rich flavor, protein source", bn: "সুস্বাদু, প্রোটিনের উৎস" },
  bad: { en: "High fat", bn: "চর্বি বেশি" },
  healthScore: 50
},

// Fish
"Rui": {
  name: { en: "Rui", bn: "রুই" },
  calories: 97, protein: "20g", fat: "1.5g", carbs: "0g",
  good: { en: "Lean protein", bn: "প্রোটিন সমৃদ্ধ" },
  bad: { en: "Small bones may cause issues", bn: "ছোট কাঁটা সমস্যা করতে পারে" },
  healthScore: 80
},
"Hilsa": {
  name: { en: "Hilsa", bn: "ইলিশ" },
  calories: 310, protein: "22g", fat: "25g", carbs: "0g",
  good: { en: "Omega-3 rich", bn: "ওমেগা-৩ সমৃদ্ধ" },
  bad: { en: "High fat", bn: "চর্বি বেশি" },
  healthScore: 70
},
"Katla": {
  name: { en: "Katla", bn: "কাতলা" },
  calories: 120, protein: "19g", fat: "4g", carbs: "0g",
  good: { en: "Protein source", bn: "প্রোটিনের উৎস" },
  bad: { en: "Bones may cause difficulty", bn: "কাঁটা সমস্যা করতে পারে" },
  healthScore: 75
},
"Shrimp": {
  name: { en: "Shrimp", bn: "চিংড়ি" },
  calories: 99, protein: "24g", fat: "0.3g", carbs: "0.2g",
  good: { en: "Low calorie, high protein", bn: "ক্যালোরি কম, প্রোটিন বেশি" },
  bad: { en: "High cholesterol", bn: "কোলেস্টেরল বেশি" },
  healthScore: 78
},
"Salmon": {
  name: { en: "Salmon", bn: "স্যামন" },
  calories: 208, protein: "20g", fat: "13g", carbs: "0g",
  good: { en: "Omega-3 fatty acids", bn: "ওমেগা-৩ ফ্যাটি অ্যাসিড সমৃদ্ধ" },
  bad: { en: "Expensive, high fat", bn: "দামী, চর্বি বেশি" },
  healthScore: 82
},

// Eggs
"Egg": {
  name: { en: "Egg", bn: "ডিম" },
  calories: 155, protein: "13g", fat: "11g", carbs: "1.1g",
  good: { en: "Complete protein", bn: "সম্পূর্ণ প্রোটিন" },
  bad: { en: "High cholesterol", bn: "কোলেস্টেরল বেশি" },
  healthScore: 75
},

// Dairy
"Milk": {
  name: { en: "Milk", bn: "দুধ" },
  calories: 42, protein: "3.4g", fat: "1g", carbs: "5g",
  good: { en: "Calcium rich", bn: "ক্যালসিয়াম সমৃদ্ধ" },
  bad: { en: "Lactose intolerance issue", bn: "ল্যাকটোজ অসহিষ্ণুতা সমস্যা" },
  healthScore: 85
},
"Yogurt": {
  name: { en: "Yogurt", bn: "দই" },
  calories: 59, protein: "10g", fat: "0.4g", carbs: "3.6g",
  good: { en: "Probiotics for gut health", bn: "প্রোবায়োটিকস অন্ত্রের জন্য ভালো" },
  bad: { en: "Flavored versions high sugar", bn: "ফ্লেভারড দইতে চিনি বেশি" },
  healthScore: 88
},
"Cheese": {
  name: { en: "Cheese", bn: "চিজ" },
  calories: 402, protein: "25g", fat: "33g", carbs: "1.3g",
  good: { en: "Calcium and protein", bn: "ক্যালসিয়াম ও প্রোটিন" },
  bad: { en: "High fat & sodium", bn: "চর্বি ও সোডিয়াম বেশি" },
  healthScore: 60
},
"Butter": {
  name: { en: "Butter", bn: "মাখন" },
  calories: 717, protein: "0.9g", fat: "81g", carbs: "0.1g",
  good: { en: "Rich flavor", bn: "সুস্বাদু স্বাদ" },
  bad: { en: "Very high fat", bn: "চর্বি অত্যধিক" },
  healthScore: 30
},

// Beverages
"Water": {
  name: { en: "Water", bn: "পানি" },
  calories: 0, protein: "0g", fat: "0g", carbs: "0g",
  good: { en: "Essential for life", bn: "জীবনের জন্য অপরিহার্য" },
  bad: { en: "No bad effects", bn: "কোনো খারাপ দিক নেই" },
  healthScore: 100
},
"Juice": {
  name: { en: "Juice", bn: "জুস" },
  calories: 45, protein: "0.7g", fat: "0.2g", carbs: "11g",
  good: { en: "Vitamin rich", bn: "ভিটামিন সমৃদ্ধ" },
  bad: { en: "High sugar if processed", bn: "প্রসেসড হলে চিনি বেশি" },
  healthScore: 70
},

"Tea": {
  name: { en: "Tea", bn: "চা" },
  calories: 1, protein: "0g", fat: "0g", carbs: "0.3g",
  good: { en: "Contains antioxidants, refreshing", bn: "অ্যান্টিঅক্সিডেন্ট থাকে, সতেজ করে" },
  bad: { en: "Too much caffeine may cause insomnia", bn: "অতিরিক্ত ক্যাফেইন ঘুমের সমস্যা করতে পারে" },
  healthScore: 70
},
"Coffee": {
  name: { en: "Coffee", bn: "কফি" },
  calories: 2, protein: "0.1g", fat: "0g", carbs: "0g",
  good: { en: "Boosts energy, antioxidants", bn: "শক্তি বাড়ায়, অ্যান্টিঅক্সিডেন্ট থাকে" },
  bad: { en: "Excess caffeine may raise blood pressure", bn: "অতিরিক্ত ক্যাফেইন রক্তচাপ বাড়াতে পারে" },
  healthScore: 65
}
};






// ================== Common Problems Data ==================
const commonProblemsData = {
  highBP: {
    bn: {
      title: "উচ্চ রক্তচাপ",
      causes: "স্ট্রেস, অতিরিক্ত লবণ, স্থূলতা",
      signs: "হাইপারটেনশন, হৃদরোগ",
      remedies: "লবণ কমানো, নিয়মিত ব্যায়াম"
    },
    en: {
      title: "High Blood Pressure",
      causes: "Stress, excess salt, obesity",
      signs: "Hypertension, heart disease",
      remedies: "Reduce salt, regular exercise"
    }
  },
  lowBP: {
    bn: {
      title: "নিম্ন রক্তচাপ",
      causes: "পানিশূন্যতা, রক্তক্ষরণ",
      signs: "মাথা ঘোরা, দুর্বলতা",
      remedies: "পর্যাপ্ত পানি পান, সুষম খাদ্য"
    },
    en: {
      title: "Low Blood Pressure",
      causes: "Dehydration, blood loss",
      signs: "Dizziness, weakness",
      remedies: "Drink enough water, balanced diet"
    }
  },
  diabetes: {
    bn: {
      title: "ডায়াবেটিস",
      causes: "ইনসুলিনের ঘাটতি, স্থূলতা",
      signs: "অতিরিক্ত তৃষ্ণা, ঘন প্রস্রাব",
      remedies: "খাদ্য নিয়ন্ত্রণ, ব্যায়াম"
    },
    en: {
      title: "Diabetes",
      causes: "Insulin deficiency, obesity",
      signs: "Excessive thirst, frequent urination",
      remedies: "Diet control, exercise"
    }
  },
  jointPain: {
    bn: {
      title: "বাত ব্যথা",
      causes: "আর্থ্রাইটিস, ইনফেকশন",
      signs: "অস্টিওআর্থ্রাইটিস",
      remedies: "বিশ্রাম, গরম/ঠান্ডা সেঁক"
    },
    en: {
      title: "Joint Pain",
      causes: "Arthritis, infection",
      signs: "Osteoarthritis",
      remedies: "Rest, hot/cold compress"
    }
  },
  headache: {
    bn: {
      title: "মাথা/ঘাড় ব্যথা",
      causes: "ভুল ভঙ্গি, স্ট্রেস",
      signs: "টেনশন হেডেক",
      remedies: "সঠিক ভঙ্গি, হালকা ব্যায়াম"
    },
    en: {
      title: "Headache / Neck Pain",
      causes: "Poor posture, stress",
      signs: "Tension headache",
      remedies: "Correct posture, light exercise"
    }
  },
  chestPain: {
    bn: {
      title: "বুক ব্যথা",
      causes: "গ্যাস্ট্রিক, হৃদরোগ",
      signs: "এনজাইনা, হার্ট অ্যাটাক",
      remedies: "বিশ্রাম, চিকিৎসকের পরামর্শ"
    },
    en: {
      title: "Chest Pain",
      causes: "Gastric issues, heart disease",
      signs: "Angina, heart attack",
      remedies: "Rest, consult doctor"
    }
  },
  leftChestPain: {
    bn: {
      title: "বুকের বাম দিকে ব্যথা",
      causes: "হৃদরোগ, মাংসপেশীর টান",
      signs: "হার্ট অ্যাটাক, এনজাইনা",
      remedies: "অবিলম্বে চিকিৎসকের পরামর্শ"
    },
    en: {
      title: "Left Chest Pain",
      causes: "Heart disease, muscle strain",
      signs: "Heart attack, angina",
      remedies: "Seek immediate medical help"
    }
  },
  backPain: {
    bn: {
      title: "পিঠের মাঝখানে ব্যথা",
      causes: "মাংসপেশীর টান, ডিস্ক সমস্যা",
      signs: "স্পাইনাল ডিসঅর্ডার",
      remedies: "বিশ্রাম, সঠিক ভঙ্গি"
    },
    en: {
      title: "Mid Back Pain",
      causes: "Muscle strain, disc problems",
      signs: "Spinal disorder",
      remedies: "Rest, proper posture"
    }
  },
  kneePain: {
    bn: {
      title: "হাঁটু ব্যথা",
      causes: "আঘাত, আর্থ্রাইটিস",
      signs: "অস্টিওআর্থ্রাইটিস",
      remedies: "বিশ্রাম, গরম সেঁক"
    },
    en: {
      title: "Knee Pain",
      causes: "Injury, arthritis",
      signs: "Osteoarthritis",
      remedies: "Rest, hot compress"
    }
  },
  anklePain: {
    bn: {
      title: "পায়ের গাঁটের ব্যথা",
      causes: "আঘাত, স্প্রেইন",
      signs: "আর্থ্রাইটিস",
      remedies: "বিশ্রাম, ঠান্ডা সেঁক"
    },
    en: {
      title: "Ankle Pain",
      causes: "Injury, sprain",
      signs: "Arthritis",
      remedies: "Rest, cold compress"
    }
  },
  handPain: {
    bn: {
      title: "হাত ব্যথা",
      causes: "আঘাত, টেন্ডন সমস্যা",
      signs: "কারপাল টানেল সিনড্রোম",
      remedies: "বিশ্রাম, চিকিৎসকের পরামর্শ"
    },
    en: {
      title: "Hand Pain",
      causes: "Injury, tendon issues",
      signs: "Carpal tunnel syndrome",
      remedies: "Rest, consult doctor"
    }
  },
  fingerPain: {
    bn: {
      title: "আঙুল ব্যথা",
      causes: "আঘাত, আর্থ্রাইটিস",
      signs: "গাউট, রিউমাটয়েড আর্থ্রাইটিস",
      remedies: "বিশ্রাম, চিকিৎসকের পরামর্শ"
    },
    en: {
      title: "Finger Pain",
      causes: "Injury, arthritis",
      signs: "Gout, rheumatoid arthritis",
      remedies: "Rest, consult doctor"
    }
  },
  waistPain: {
    bn: {
      title: "কোমরের ব্যথা",
      causes: "মাংসপেশীর টান, ডিস্ক সমস্যা",
      signs: "লোয়ার ব্যাক ডিসঅর্ডার",
      remedies: "বিশ্রাম, সঠিক ভঙ্গি"
    },
    en: {
      title: "Waist Pain",
      causes: "Muscle strain, disc problems",
      signs: "Lower back disorder",
      remedies: "Rest, proper posture"
    }
  }
};
