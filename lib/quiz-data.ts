type Options = Record<string, string>;

interface QuestionItem {
  question: string;
  options: Options;
  answer: string;
}

type MedicalTerminology = Record<string, QuestionItem>;

/**
 * Utility to shuffle answers while preserving the correct one
 */
function shuffleOptions(data: MedicalTerminology): MedicalTerminology {
  const shuffled: MedicalTerminology = {};

  for (const key in data) {
    const item = data[key];
    const entries = Object.entries(item.options);

    // Fisher–Yates shuffle
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }

    const newOptions: Options = {};
    let newAnswer = "";

    entries.forEach(([oldKey, value], index) => {
      const newKey = String.fromCharCode(65 + index); // A, B, C, D...
      newOptions[newKey] = value;
      if (oldKey === item.answer) {
        newAnswer = newKey;
      }
    });

    shuffled[key] = {
      question: item.question,
      options: newOptions,
      answer: newAnswer,
    };
  }

  return shuffled;
}

const medicalTerminologyComprehensive: MedicalTerminology = shuffleOptions({
   "vital_signs":{
      "question":"What are vital signs?",
      "options":{
         "A":"Surgical procedures",
         "B":"Measurements indicating life-sustaining functions",
         "C":"X-ray findings",
         "D":"Blood test results"
      },
      "answer":"B"
   },
   "pulse":{
      "question":"What does pulse rate measure?",
      "options":{
         "A":"Body temperature",
         "B":"Blood oxygen level",
         "C":"Respiratory rate",
         "D":"Number of heart beats per minute"
      },
      "answer":"D"
   },
   "respiration":{
      "question":"How is respiration measured?",
      "options":{
         "A":"Measuring blood pressure",
         "B":"Counting chest rise and fall during breathing",
         "C":"Monitoring heart rate",
         "D":"Checking body temperature"
      },
      "answer":"B"
   },
   "temperature":{
      "question":"What is body temperature defined as?",
      "options":{
         "A":"Respiratory efficiency",
         "B":"Heart rate variability",
         "C":"Balance between heat lost and heat produced",
         "D":"Amount of oxygen in blood"
      },
      "answer":"C"
   },
   "blood_pressure":{
      "question":"What is the standard unit for measuring blood pressure?",
      "options":{
         "A":"mmHg (millimeters of mercury)",
         "B":" F (degrees Fahrenheit)",
         "C":"mL/min (milliliters per minute)",
         "D":"bpm (beats per minute)"
      },
      "answer":"A"
   },
   "oxygen_saturation":{
      "question":"What does oxygen saturation measure?",
      "options":{
         "A":"Blood pressure",
         "B":"Body temperature",
         "C":"Heart rate",
         "D":"Concentration of oxygen in blood"
      },
      "answer":"D"
   },
   "adip_o":{
      "question":"What does the combining form 'adip/o' mean?",
      "options":{
         "A":"Iron",
         "B":"Fat",
         "C":"Water",
         "D":"Protein"
      },
      "answer":"B"
   },
   "azot_o":{
      "question":"What does 'azot/o' refer to?",
      "options":{
         "A":"Nitrogen compounds",
         "B":"Potassium",
         "C":"Calcium",
         "D":"Sodium"
      },
      "answer":"A"
   },
   "ferr_o":{
      "question":"What is the meaning of 'ferr/o'?",
      "options":{
         "A":"Iron",
         "B":"Zinc",
         "C":"Copper",
         "D":"Magnesium"
      },
      "answer":"A"
   },
   "hydr_o":{
      "question":"What does 'hydr/o' mean?",
      "options":{
         "A":"Water, fluid",
         "B":"Heat",
         "C":"Blood",
         "D":"Air"
      },
      "answer":"A"
   },
   "kal":{
      "question":"What element does 'kal/' refer to?",
      "options":{
         "A":"Chlorine",
         "B":"Sodium",
         "C":"Calcium",
         "D":"Potassium"
      },
      "answer":"D"
   },
   "natr":{
      "question":"What does 'natr' indicate?",
      "options":{
         "A":"Hydrogen",
         "B":"Nitrogen",
         "C":"Sodium",
         "D":"Potassium"
      },
      "answer":"C"
   },
   "aer_o":{
      "question":"What is the meaning of 'aer/o'?",
      "options":{
         "A":"Tissue",
         "B":"Water",
         "C":"Air/gas",
         "D":"Blood"
      },
      "answer":"C"
   },
   "bar_o":{
      "question":"What does 'bar/o' refer to?",
      "options":{
         "A":"Volume",
         "B":"Weight",
         "C":"Pressure",
         "D":"Temperature"
      },
      "answer":"C"
   },
   "cry_o":{
      "question":"What is the meaning of 'cry/o'?",
      "options":{
         "A":"Sound",
         "B":"Light",
         "C":"Cold",
         "D":"Heat"
      },
      "answer":"C"
   },
   "electro_o":{
      "question":"What does 'electro/o' indicate?",
      "options":{
         "A":"Electricity",
         "B":"Magnetism",
         "C":"Pressure",
         "D":"Radiation"
      },
      "answer":"A"
   },
   "carcin_o":{
      "question":"What does 'carcin/o' mean?",
      "options":{
         "A":"Infection",
         "B":"Healing",
         "C":"Inflammation",
         "D":"Cancer/carcinoma"
      },
      "answer":"D"
   },
   "lith_o":{
      "question":"What is the meaning of 'lith/o'?",
      "options":{
         "A":"Bone",
         "B":"Blood",
         "C":"Tissue",
         "D":"Calculus, stone"
      },
      "answer":"D"
   },
   "onc_o":{
      "question":"What does 'onc/o' refer to?",
      "options":{
         "A":"Nerve",
         "B":"Muscle",
         "C":"Blood",
         "D":"Tumor"
      },
      "answer":"D"
   },
   "path_o":{
      "question":"What is the meaning of 'path/o'?",
      "options":{
         "A":"Treatment",
         "B":"Health",
         "C":"Disease",
         "D":"Prevention"
      },
      "answer":"C"
   },
   "logy":{
      "question":"What does the suffix '-logy' mean?",
      "options":{
         "A":"Condition",
         "B":"Specialist",
         "C":"Inflammation",
         "D":"Study of"
      },
      "answer":"D"
   },
   "ist":{
      "question":"What does the suffix '-ist' indicate?",
      "options":{
         "A":"Specialist in a field",
         "B":"Inflammation of",
         "C":"Study of",
         "D":"Condition of"
      },
      "answer":"A"
   },
   "ectomy":{
      "question":"What does the suffix '-ectomy' mean?",
      "options":{
         "A":"Measurement",
         "B":"Surgical removal",
         "C":"Surgical repair",
         "D":"Inflammation"
      },
      "answer":"B"
   },
   "plasty":{
      "question":"What is the meaning of '-plasty'?",
      "options":{
         "A":"Measurement",
         "B":"Surgical removal",
         "C":"Inflammation",
         "D":"Surgical repair"
      },
      "answer":"D"
   },
   "itis":{
      "question":"What does the suffix '-itis' indicate?",
      "options":{
         "A":"Inflammation",
         "B":"Enlargement",
         "C":"Deficiency",
         "D":"Pain"
      },
      "answer":"A"
   },
   "megaly":{
      "question":"What is the meaning of '-megaly'?",
      "options":{
         "A":"Pain",
         "B":"Inflammation",
         "C":"Deficiency",
         "D":"Enlargement"
      },
      "answer":"D"
   },
   "pnea":{
      "question":"What does the suffix '-pnea' refer to?",
      "options":{
         "A":"Breathing",
         "B":"Voice",
         "C":"Carbon dioxide level",
         "D":"Oxygen level"
      },
      "answer":"A"
   },
   "oxia":{
      "question":"What does '-oxia' indicate?",
      "options":{
         "A":"Heart rate",
         "B":"Blood pressure",
         "C":"Level of oxygen",
         "D":"Breathing rate"
      },
      "answer":"C"
   },
   "nas_o":{
      "question":"What does 'nas/o' mean?",
      "options":{
         "A":"Airway",
         "B":"Nose",
         "C":"Lung",
         "D":"Throat"
      },
      "answer":"B"
   },
   "rhin_o":{
      "question":"What is the meaning of 'rhin/o'?",
      "options":{
         "A":"Throat",
         "B":"Eye",
         "C":"Nose",
         "D":"Ear"
      },
      "answer":"C"
   },
   "bronch_o":{
      "question":"What does 'bronch/o' refer to?",
      "options":{
         "A":"Bronchus",
         "B":"Trachea",
         "C":"Lung",
         "D":"Alveoli"
      },
      "answer":"A"
   },
   "pulmon_o":{
      "question":"What is the meaning of 'pulmon/o'?",
      "options":{
         "A":"Kidney",
         "B":"Liver",
         "C":"Heart",
         "D":"Lungs"
      },
      "answer":"D"
   },
   "cyt_o":{
      "question":"What does 'cyt/o' mean?",
      "options":{
         "A":"Organ",
         "B":"Tissue",
         "C":"System",
         "D":"Cell"
      },
      "answer":"D"
   },
   "hist_o":{
      "question":"What is the meaning of 'hist/o'?",
      "options":{
         "A":"Organ",
         "B":"Cell",
         "C":"System",
         "D":"Tissue"
      },
      "answer":"D"
   },
   "aden_o":{
      "question":"What does 'aden/o' refer to?",
      "options":{
         "A":"Nerve",
         "B":"Muscle",
         "C":"Bone",
         "D":"Gland"
      },
      "answer":"D"
   },
   "blast_o":{
      "question":"What is the meaning of 'blast/o'?",
      "options":{
         "A":"Dead cell",
         "B":"Cancer cell",
         "C":"Immature cell",
         "D":"Mature cell"
      },
      "answer":"C"
   },
   "phag_o":{
      "question":"What is the meaning of 'phag/o'?",
      "options":{
         "A":"Destroy, break",
         "B":"Produce, create",
         "C":"Eat, ingest",
         "D":"Measure, count"
      },
      "answer":"C"
   },
   "gluc_o":{
      "question":"What does 'gluc/o' refer to?",
      "options":{
         "A":"Fat",
         "B":"Protein",
         "C":"Glucose",
         "D":"Water"
      },
      "answer":"C"
   },
   "lip_o":{
      "question":"What is the meaning of 'lip/o'?",
      "options":{
         "A":"Protein",
         "B":"Lipid, fat",
         "C":"Water",
         "D":"Sugar"
      },
      "answer":"B"
   },
   "homeostasis":{
      "question":"What is homeostasis?",
      "options":{
         "A":"Rapid change in body systems",
         "B":"Treatment protocol",
         "C":"Disease progression",
         "D":"Steady state maintaining optimal balance"
      },
      "answer":"D"
   },
   "metabolism":{
      "question":"What does metabolism include?",
      "options":{
         "A":"Neither anabolism nor catabolism",
         "B":"Anabolism and catabolism",
         "C":"Only anabolism",
         "D":"Only catabolism"
      },
      "answer":"B"
   },
   "analgesics":{
      "question":"What do analgesics do?",
      "options":{
         "A":"Reduce inflammation",
         "B":"Alleviate pain",
         "C":"Treat infections",
         "D":"Lower blood pressure"
      },
      "answer":"B"
   },
   "antibiotics":{
      "question":"What are antibiotics effective against?",
      "options":{
         "A":"Fungi",
         "B":"Parasites",
         "C":"Bacteria",
         "D":"Viruses"
      },
      "answer":"C"
   },
   "diuretics":{
      "question":"What do diuretics promote?",
      "options":{
         "A":"Excretion of water and electrolytes",
         "B":"Nerve conduction",
         "C":"Blood clotting",
         "D":"Muscle contraction"
      },
      "answer":"A"
   },
   "mon_o":{
      "question":"What does the prefix 'mon/o' mean?",
      "options":{
         "A":"One",
         "B":"Many",
         "C":"Three",
         "D":"Two"
      },
      "answer":"A"
   },
   "bi":{
      "question":"What is the meaning of prefix 'bi-'?",
      "options":{
         "A":"Three",
         "B":"One",
         "C":"Four",
         "D":"Two, twice"
      },
      "answer":"D"
   },
   "tri":{
      "question":"What does prefix 'tri-' indicate?",
      "options":{
         "A":"Two",
         "B":"Five",
         "C":"Four",
         "D":"Three"
      },
      "answer":"D"
   },
   "poly":{
      "question":"What is the meaning of prefix 'poly-'?",
      "options":{
         "A":"One",
         "B":"None",
         "C":"Many, much",
         "D":"Few"
      },
      "answer":"C"
   },
   "cyan_o":{
      "question":"What does prefix 'cyan/o' mean?",
      "options":{
         "A":"Blue",
         "B":"White",
         "C":"Yellow",
         "D":"Red"
      },
      "answer":"A"
   },
   "erythr_o":{
      "question":"What is the meaning of 'erythr/o'?",
      "options":{
         "A":"Black",
         "B":"Red",
         "C":"Blue",
         "D":"Green"
      },
      "answer":"B"
   },
   "leuk_o":{
      "question":"What does 'leuk/o' indicate?",
      "options":{
         "A":"White, colorless",
         "B":"Yellow",
         "C":"Blue",
         "D":"Red"
      },
      "answer":"A"
   },
   "melan_o":{
      "question":"What is the meaning of 'melan/o'?",
      "options":{
         "A":"White",
         "B":"Black, dark",
         "C":"Red",
         "D":"Green"
      },
      "answer":"B"
   },
   "a_an":{
      "question":"What do prefixes 'a-' and 'an-' mean?",
      "options":{
         "A":"Not, without",
         "B":"With, together",
         "C":"Before",
         "D":"Against"
      },
      "answer":"A"
   },
   "anti":{
      "question":"What does prefix 'anti-' indicate?",
      "options":{
         "A":"With",
         "B":"Before",
         "C":"Against",
         "D":"After"
      },
      "answer":"C"
   },
   "macro":{
      "question":"What is the meaning of prefix 'macro-'?",
      "options":{
         "A":"Large",
         "B":"Normal",
         "C":"Small",
         "D":"Abnormal"
      },
      "answer":"A"
   },
   "micro":{
      "question":"What does prefix 'micro-' mean?",
      "options":{
         "A":"Giant",
         "B":"Large",
         "C":"Small",
         "D":"Medium"
      },
      "answer":"C"
   },
   "post":{
      "question":"What does prefix 'post-' indicate?",
      "options":{
         "A":"After, behind",
         "B":"Before, in front",
         "C":"Around",
         "D":"During"
      },
      "answer":"A"
   },
   "pre":{
      "question":"What is the meaning of prefix 'pre-'?",
      "options":{
         "A":"After",
         "B":"During",
         "C":"Before",
         "D":"Against"
      },
      "answer":"C"
   },
   "sub":{
      "question":"What does prefix 'sub-' mean?",
      "options":{
         "A":"Above",
         "B":"Below",
         "C":"Around",
         "D":"Through"
      },
      "answer":"B"
   },
   "trans":{
      "question":"What does prefix 'trans-' indicate?",
      "options":{
         "A":"Across",
         "B":"Within",
         "C":"Against",
         "D":"Around"
      },
      "answer":"A"
   },
   "combining_vowel":{
      "question":"What is the most common combining vowel?",
      "options":{
         "A":"E",
         "B":"A",
         "C":"O",
         "D":"I"
      },
      "answer":"C"
   },
   "word_root":{
      "question":"What is the word root?",
      "options":{
         "A":"Core part of the term usually referring to a body part",
         "B":"The ending of the word",
         "C":"The connecting vowel",
         "D":"The beginning of the word"
      },
      "answer":"A"
   },
   "prefix":{
      "question":"Where is a prefix located in a medical term?",
      "options":{
         "A":"At the end",
         "B":"At the beginning",
         "C":"Between roots",
         "D":"In the middle"
      },
      "answer":"B"
   },
   "suffix":{
      "question":"Where is a suffix located in a medical term?",
      "options":{
         "A":"At the beginning",
         "B":"At the end",
         "C":"In the middle",
         "D":"Between roots"
      },
      "answer":"B"
   },
   "medical_terminology":{
      "question":"What is medical terminology primarily used for?",
      "options":{
         "A":"Medical research publications",
         "B":"Insurance billing codes",
         "C":"Writing prescriptions only",
         "D":"Effective and accurate communication among healthcare professionals"
      },
      "answer":"D"
   },
   "kardia":{
      "question":"The Greek word 'Kardia' refers to which organ?",
      "options":{
         "A":"Kidney",
         "B":"Heart",
         "C":"Liver",
         "D":"Stomach"
      },
      "answer":"B"
   },
   "gaster":{
      "question":"What does the Greek word 'Gaster' mean?",
      "options":{
         "A":"Intestine",
         "B":"Stomach",
         "C":"Bladder",
         "D":"Lung"
      },
      "answer":"B"
   },
   "hepar":{
      "question":"The Greek word 'Hepar' refers to which organ?",
      "options":{
         "A":"Brain",
         "B":"Pancreas",
         "C":"Liver",
         "D":"Heart"
      },
      "answer":"C"
   },
   "nephros":{
      "question":"What does the Greek word 'Nephros' mean?",
      "options":{
         "A":"Bone",
         "B":"Nerve",
         "C":"Kidney",
         "D":"Muscle"
      },
      "answer":"C"
   },
   "osteon":{
      "question":"The Greek word 'Osteon' refers to:",
      "options":{
         "A":"Bone",
         "B":"Joint",
         "C":"Cartilage",
         "D":"Tendon"
      },
      "answer":"A"
   },
   "combining_vowel_rule1":{
      "question":"When is a combining vowel used according to Rule 1?",
      "options":{
         "A":"Between two vowels",
         "B":"When suffix begins with a consonant",
         "C":"When suffix begins with a vowel",
         "D":"Never with prefixes"
      },
      "answer":"B"
   },
   "combining_vowel_rule2":{
      "question":"When is a combining vowel NOT used?",
      "options":{
         "A":"When prefix is present",
         "B":"When suffix begins with a vowel",
         "C":"With Greek-derived terms",
         "D":"Between two word roots"
      },
      "answer":"B"
   },
   "combining_form":{
      "question":"What is a combining form?",
      "options":{
         "A":"Prefix + suffix",
         "B":"Suffix + vowel",
         "C":"Word root + combining vowel",
         "D":"Prefix + root"
      },
      "answer":"C"
   },
   "ch_pronunciation":{
      "question":"How is 'ch' pronounced in medical terminology?",
      "options":{
         "A":"Sh",
         "B":"J",
         "C":"K",
         "D":"Ch"
      },
      "answer":"C"
   },
   "dys_pronunciation":{
      "question":"How is 'dys' pronounced?",
      "options":{
         "A":"Dis",
         "B":"Dize",
         "C":"Dice",
         "D":"Dyss"
      },
      "answer":"A"
   },
   "eu_pronunciation":{
      "question":"How is 'eu' pronounced?",
      "options":{
         "A":"U",
         "B":"Ee",
         "C":"Yoo",
         "D":"E-u"
      },
      "answer":"A"
   },
   "gn_pronunciation":{
      "question":"How is 'gn' pronounced at the beginning of words?",
      "options":{
         "A":"Ny",
         "B":"G-n",
         "C":"Gn",
         "D":"N"
      },
      "answer":"D"
   },
   "ph_pronunciation":{
      "question":"How is 'ph' pronounced?",
      "options":{
         "A":"V",
         "B":"P-h",
         "C":"Pf",
         "D":"F"
      },
      "answer":"D"
   },
   "pn_pronunciation":{
      "question":"How is 'pn' pronounced at the beginning of words?",
      "options":{
         "A":"P-n",
         "B":"Pn",
         "C":"M",
         "D":"N"
      },
      "answer":"D"
   },
   "ps_pronunciation":{
      "question":"How is 'ps' pronounced at the beginning?",
      "options":{
         "A":"Ps",
         "B":"S",
         "C":"P-s",
         "D":"Z"
      },
      "answer":"B"
   },
   "pt_pronunciation":{
      "question":"How is 'pt' pronounced at the beginning?",
      "options":{
         "A":"D",
         "B":"P-t",
         "C":"T",
         "D":"Pt"
      },
      "answer":"C"
   },
   "rh_pronunciation":{
      "question":"How is 'rh' pronounced?",
      "options":{
         "A":"R-h",
         "B":"H-r",
         "C":"Rh",
         "D":"R"
      },
      "answer":"D"
   },
   "x_pronunciation":{
      "question":"How is 'x' pronounced when it starts a word?",
      "options":{
         "A":"X",
         "B":"Ks",
         "C":"Sh",
         "D":"Z"
      },
      "answer":"D"
   },
   "primi":{
      "question":"What does the prefix 'prim/i' mean?",
      "options":{
         "A":"After",
         "B":"First",
         "C":"Many",
         "D":"Before"
      },
      "answer":"B"
   },
   "hemi":{
      "question":"What does 'hemi-' mean?",
      "options":{
         "A":"Double",
         "B":"Equal",
         "C":"Whole",
         "D":"Half, side"
      },
      "answer":"D"
   },
   "hexa":{
      "question":"What does 'hexa-' mean?",
      "options":{
         "A":"Ten",
         "B":"Eight",
         "C":"Four",
         "D":"Six"
      },
      "answer":"D"
   },
   "di":{
      "question":"What does prefix 'di-' mean?",
      "options":{
         "A":"Through",
         "B":"Against",
         "C":"Two, twice",
         "D":"Away from"
      },
      "answer":"C"
   },
   "tetra":{
      "question":"What does 'tetra-' mean?",
      "options":{
         "A":"Four",
         "B":"Six",
         "C":"Five",
         "D":"Three"
      },
      "answer":"A"
   },
   "quadr":{
      "question":"What does 'quadr-' mean?",
      "options":{
         "A":"Four",
         "B":"Quarter",
         "C":"Square",
         "D":"Multiple"
      },
      "answer":"A"
   },
   "penta":{
      "question":"What does 'penta-' mean?",
      "options":{
         "A":"Six",
         "B":"Many",
         "C":"Four",
         "D":"Five"
      },
      "answer":"D"
   },
   "pan":{
      "question":"What does 'pan-' mean?",
      "options":{
         "A":"Some",
         "B":"Half",
         "C":"None",
         "D":"All"
      },
      "answer":"D"
   },
   "diplo":{
      "question":"What does 'diplo-' mean?",
      "options":{
         "A":"Triple",
         "B":"Double",
         "C":"Single",
         "D":"Multiple"
      },
      "answer":"B"
   },
   "iso":{
      "question":"What does 'iso-' mean?",
      "options":{
         "A":"Unequal",
         "B":"Different",
         "C":"Similar",
         "D":"Equal"
      },
      "answer":"D"
   },
   "oligo":{
      "question":"What does 'olig/o-' mean?",
      "options":{
         "A":"Many",
         "B":"None",
         "C":"Few",
         "D":"All"
      },
      "answer":"C"
   },
   "chlor":{
      "question":"What does 'chlor/' mean?",
      "options":{
         "A":"Green",
         "B":"Yellow",
         "C":"Red",
         "D":"Blue"
      },
      "answer":"A"
   },
   "contra":{
      "question":"What does 'contra-' mean?",
      "options":{
         "A":"After",
         "B":"Against, opposite",
         "C":"With, together",
         "D":"Before"
      },
      "answer":"B"
   },
   "hetero":{
      "question":"What does 'hetero-' mean?",
      "options":{
         "A":"Different colors",
         "B":"Mixed types",
         "C":"Same, equal",
         "D":"Unequal, other"
      },
      "answer":"D"
   },
   "homo":{
      "question":"What does 'homo-' mean?",
      "options":{
         "A":"Mixed",
         "B":"Human",
         "C":"Different",
         "D":"Same, unchanging"
      },
      "answer":"D"
   },
   "mega":{
      "question":"What does 'mega-' mean?",
      "options":{
         "A":"Small",
         "B":"Large, abnormally large",
         "C":"Medium",
         "D":"Normal"
      },
      "answer":"B"
   },
   "neo":{
      "question":"What does 'neo-' mean?",
      "options":{
         "A":"Old",
         "B":"New",
         "C":"Temporary",
         "D":"Ancient"
      },
      "answer":"B"
   },
   "normo":{
      "question":"What does 'normo-' mean?",
      "options":{
         "A":"Small",
         "B":"Abnormal",
         "C":"Large",
         "D":"Normal"
      },
      "answer":"D"
   },
   "exo":{
      "question":"What does 'exo-' mean?",
      "options":{
         "A":"Between",
         "B":"Outside",
         "C":"Around",
         "D":"Inside"
      },
      "answer":"B"
   },
   "endo":{
      "question":"What does 'endo-' mean?",
      "options":{
         "A":"Around",
         "B":"Between",
         "C":"Outside",
         "D":"Inside, within"
      },
      "answer":"D"
   },
   "sider_o":{
      "question":"What does 'sider/o' mean?",
      "options":{
         "A":"Gold",
         "B":"Iron",
         "C":"Copper",
         "D":"Silver"
      },
      "answer":"B"
   },
   "prote_o":{
      "question":"What does 'prote/o' mean?",
      "options":{
         "A":"Enzyme",
         "B":"Fat",
         "C":"Protein",
         "D":"Sugar"
      },
      "answer":"C"
   },
   "stead_o":{
      "question":"What does 'stead/o' mean?",
      "options":{
         "A":"Salty",
         "B":"Sweet",
         "C":"Bitter",
         "D":"Fatty"
      },
      "answer":"D"
   },
   "erg_o":{
      "question":"What does 'erg/o' mean?",
      "options":{
         "A":"Work",
         "B":"Power",
         "C":"Energy",
         "D":"Motion"
      },
      "answer":"A"
   },
   "kin":{
      "question":"What does 'kin' mean?",
      "options":{
         "A":"Movement",
         "B":"Power",
         "C":"Stillness",
         "D":"Energy"
      },
      "answer":"A"
   },
   "photo":{
      "question":"What does 'photo' mean?",
      "options":{
         "A":"Dark",
         "B":"Color",
         "C":"Image",
         "D":"Light"
      },
      "answer":"D"
   },
   "son_o":{
      "question":"What does 'son/o' mean?",
      "options":{
         "A":"Cold",
         "B":"Light",
         "C":"Heat",
         "D":"Sound"
      },
      "answer":"D"
   },
   "py_o":{
      "question":"What does 'py/o' mean?",
      "options":{
         "A":"Pus",
         "B":"Fever",
         "C":"Fire",
         "D":"Pain"
      },
      "answer":"A"
   },
   "pyr_o":{
      "question":"What does 'pyr/o' mean?",
      "options":{
         "A":"Fever",
         "B":"Heat",
         "C":"Fire",
         "D":"Pus"
      },
      "answer":"A"
   },
   "iatry":{
      "question":"What does suffix '-iatry' mean?",
      "options":{
         "A":"Study of",
         "B":"Specialist",
         "C":"Condition",
         "D":"Field of medicine"
      },
      "answer":"D"
   },
   "ics":{
      "question":"What does suffix '-ics' mean?",
      "options":{
         "A":"Small version",
         "B":"Inflammation",
         "C":"Field of study",
         "D":"Specialist"
      },
      "answer":"C"
   },
   "iatric":{
      "question":"What does suffix '-iatric' mean?",
      "options":{
         "A":"Specialist",
         "B":"Treatment of",
         "C":"Pertaining to",
         "D":"Field of study"
      },
      "answer":"D"
   },
   "ia":{
      "question":"What does suffix '-ia' mean?",
      "options":{
         "A":"Pain",
         "B":"Condition of",
         "C":"Enlargement",
         "D":"Inflammation"
      },
      "answer":"B"
   },
   "iasis":{
      "question":"What does suffix '-iasis' mean?",
      "options":{
         "A":"Measurement of",
         "B":"Destruction of",
         "C":"Condition of",
         "D":"Formation of"
      },
      "answer":"C"
   },
   "ism":{
      "question":"What does suffix '-ism' mean?",
      "options":{
         "A":"Condition of",
         "B":"Study of",
         "C":"Process of",
         "D":"Specialist in"
      },
      "answer":"A"
   },
   "osis":{
      "question":"What does suffix '-osis' mean?",
      "options":{
         "A":"Inflammation",
         "B":"Normal condition",
         "C":"Pain",
         "D":"Abnormal condition"
      },
      "answer":"D"
   },
   "ac":{
      "question":"What does suffix '-ac' mean?",
      "options":{
         "A":"Pertaining to",
         "B":"Inflammation of",
         "C":"Condition of",
         "D":"Pain in"
      },
      "answer":"A"
   },
   "ical":{
      "question":"What does suffix '-ical' mean?",
      "options":{
         "A":"Small version",
         "B":"Pertaining to",
         "C":"Large version",
         "D":"Without"
      },
      "answer":"B"
   },
   "oid":{
      "question":"What does suffix '-oid' mean?",
      "options":{
         "A":"Pertaining to",
         "B":"Full of",
         "C":"Resembling",
         "D":"Without"
      },
      "answer":"C"
   },
   "um":{
      "question":"What does suffix '-um' mean?",
      "options":{
         "A":"Pertaining to",
         "B":"Large version",
         "C":"Small version",
         "D":"Structure, tissue, thing"
      },
      "answer":"D"
   },
   "algesia":{
      "question":"What does suffix '-algesia' mean?",
      "options":{
         "A":"Relief of pain",
         "B":"Without pain",
         "C":"Measurement of pain",
         "D":"Sensation of pain"
      },
      "answer":"D"
   },
   "dilation":{
      "question":"What does suffix '-dilation' mean?",
      "options":{
         "A":"Expansion, widening",
         "B":"Measurement",
         "C":"Examination",
         "D":"Constriction, narrowing"
      },
      "answer":"A"
   },
   "edema":{
      "question":"What does suffix '-edema' mean?",
      "options":{
         "A":"Swelling, accumulation of fluids",
         "B":"Softening",
         "C":"Drying, dehydration",
         "D":"Hardening"
      },
      "answer":"A"
   },
   "gen":{
      "question":"What does suffix '-gen' mean?",
      "options":{
         "A":"Producing, beginning",
         "B":"Examining",
         "C":"Measuring",
         "D":"Destroying, ending"
      },
      "answer":"A"
   },
   "lysis":{
      "question":"What does suffix '-lysis' mean?",
      "options":{
         "A":"Formation, building",
         "B":"Separation, loosing, dissolving",
         "C":"Measurement",
         "D":"Examination"
      },
      "answer":"B"
   },
   "necrosis":{
      "question":"What does suffix '-necrosis' mean?",
      "options":{
         "A":"Repair of tissue",
         "B":"Inflammation of tissue",
         "C":"Death of tissue",
         "D":"Growth of tissue"
      },
      "answer":"C"
   },
   "plegia":{
      "question":"What does suffix '-plegia' mean?",
      "options":{
         "A":"Paralysis",
         "B":"Weakness",
         "C":"Movement",
         "D":"Strength"
      },
      "answer":"A"
   },
   "rrhage":{
      "question":"What does suffix '-rrhage' mean?",
      "options":{
         "A":"Normal flow",
         "B":"Deficient flow",
         "C":"Blocked flow",
         "D":"Excessive flow"
      },
      "answer":"D"
   },
   "rrhea":{
      "question":"What does suffix '-rrhea' mean?",
      "options":{
         "A":"Discharge, flow",
         "B":"Destruction",
         "C":"Production",
         "D":"Retention, holding"
      },
      "answer":"A"
   },
   "scopy":{
      "question":"What does suffix '-scopy' mean?",
      "options":{
         "A":"Examination view",
         "B":"Surgical repair",
         "C":"Surgical removal",
         "D":"Measurement"
      },
      "answer":"A"
   },
   "spasm":{
      "question":"What does suffix '-spasm' mean?",
      "options":{
         "A":"Paralysis",
         "B":"Weakness",
         "C":"Voluntary movement",
         "D":"Involuntary contraction, twitching"
      },
      "answer":"D"
   },
   "dynia":{
      "question":"What does suffix '-dynia' mean?",
      "options":{
         "A":"Pain",
         "B":"Swelling",
         "C":"Inflammation",
         "D":"Enlargement"
      },
      "answer":"A"
   },
   "qid":{
      "question":"What does 'qid' mean in medical abbreviations?",
      "options":{
         "A":"Once a day",
         "B":"Four times a day",
         "C":"Three times a day",
         "D":"Twice a day"
      },
      "answer":"B"
   },
   "ac_abbrev":{
      "question":"What does 'ac' mean in medication timing?",
      "options":{
         "A":"Before meals",
         "B":"After meals",
         "C":"Between meals",
         "D":"With meals"
      },
      "answer":"A"
   },
   "pc":{
      "question":"What does 'pc' mean?",
      "options":{
         "A":"Before meals",
         "B":"With food",
         "C":"After meals",
         "D":"On empty stomach"
      },
      "answer":"C"
   },
   "prn":{
      "question":"What does 'prn' mean?",
      "options":{
         "A":"Immediately",
         "B":"When needed",
         "C":"Never",
         "D":"Routinely"
      },
      "answer":"B"
   },
   "subling":{
      "question":"What does 'subling' mean?",
      "options":{
         "A":"Into vein",
         "B":"Under the tongue",
         "C":"Through the skin",
         "D":"Into muscle"
      },
      "answer":"B"
   },
   "npo":{
      "question":"What does 'NPO' mean?",
      "options":{
         "A":"Normal physical order",
         "B":"Nasal passage obstruction",
         "C":"New patient order",
         "D":"Nothing by mouth"
      },
      "answer":"D"
   },
   "ut_dict":{
      "question":"What does 'ut dict' mean?",
      "options":{
         "A":"Unit dose",
         "B":"Under tongue",
         "C":"Urgent treatment",
         "D":"As directed"
      },
      "answer":"D"
   },
   "morph_o":{
      "question":"What does 'morph/o' mean?",
      "options":{
         "A":"Function",
         "B":"Size",
         "C":"Form",
         "D":"Color"
      },
      "answer":"C"
   },
   "reticul_o":{
      "question":"What does 'reticul/o' mean?",
      "options":{
         "A":"Network",
         "B":"Organ",
         "C":"Cell",
         "D":"Tissue"
      },
      "answer":"A"
   },
   "viscer_o":{
      "question":"What does 'viscer/o' mean?",
      "options":{
         "A":"Bones",
         "B":"Internal organs",
         "C":"Muscles",
         "D":"External organs"
      },
      "answer":"B"
   },
   "myx_o":{
      "question":"What does 'myx/o' mean?",
      "options":{
         "A":"Blood",
         "B":"Fat",
         "C":"Mucus",
         "D":"Water"
      },
      "answer":"C"
   },
   "somat_o":{
      "question":"What does 'somat/o' mean?",
      "options":{
         "A":"Mind",
         "B":"Body",
         "C":"Tissue",
         "D":"Cell"
      },
      "answer":"B"
   },
   "eti_o":{
      "question":"What does 'eti/o' mean?",
      "options":{
         "A":"Prevention",
         "B":"Cause",
         "C":"Effect",
         "D":"Treatment"
      },
      "answer":"B"
   },
   "idi_o":{
      "question":"What does 'idi/o' mean?",
      "options":{
         "A":"Unknown",
         "B":"Inherited",
         "C":"Acquired",
         "D":"Known"
      },
      "answer":"A"
   },
   "phil":{
      "question":"What does 'phil' mean?",
      "options":{
         "A":"Create, form",
         "B":"Attract, absorb",
         "C":"Repel, reject",
         "D":"Destroy, break"
      },
      "answer":"B"
   },
   "plas":{
      "question":"What does 'plas' mean?",
      "options":{
         "A":"Measurement",
         "B":"Destruction, breakdown",
         "C":"Formation, molding, development",
         "D":"Examination"
      },
      "answer":"C"
   },
   "trop":{
      "question":"What does 'trop' mean?",
      "options":{
         "A":"Measure, quantify",
         "B":"Act on, affect",
         "C":"Observe, monitor",
         "D":"Resist, oppose"
      },
      "answer":"B"
   },
   "ase":{
      "question":"What does suffix '-ase' mean?",
      "options":{
         "A":"Sugar",
         "B":"Enzyme",
         "C":"Protein",
         "D":"Fat"
      },
      "answer":"B"
   },
   "sacchar_o":{
      "question":"What does 'sacchar/o' mean?",
      "options":{
         "A":"Salt",
         "B":"Protein",
         "C":"Sugar",
         "D":"Fat"
      },
      "answer":"C"
   },
   "steat_o":{
      "question":"What does 'steat/o' mean?",
      "options":{
         "A":"Sweet",
         "B":"Bitter",
         "C":"Fatty",
         "D":"Salty"
      },
      "answer":"C"
   },
   "anabolism":{
      "question":"What is anabolism?",
      "options":{
         "A":"Building phase of metabolism",
         "B":"Energy production phase",
         "C":"Waste elimination phase",
         "D":"Breaking down phase of metabolism"
      },
      "answer":"A"
   },
   "catabolism":{
      "question":"What is catabolism?",
      "options":{
         "A":"Building body substances",
         "B":"Producing enzymes",
         "C":"Breaking down substances for energy",
         "D":"Maintaining steady state"
      },
      "answer":"C"
   },
   "collagen":{
      "question":"What is collagen?",
      "options":{
         "A":"Sugar stored in liver",
         "B":"Fat storage cell",
         "C":"Blood clotting factor",
         "D":"Fibrous protein in connective tissue"
      },
      "answer":"D"
   },
   "generic_name":{
      "question":"What characterizes a drug's generic name?",
      "options":{
         "A":"Registered trademark, capitalized",
         "B":"Marketing brand name",
         "C":"Simple version of chemical name, not capitalized",
         "D":"Company-specific name"
      },
      "answer":"C"
   },
   "adrenaline_source":{
      "question":"What is the source of Adrenaline?",
      "options":{
         "A":"Pancreas",
         "B":"Adrenal gland",
         "C":"Pituitary gland",
         "D":"Thyroid gland"
      },
      "answer":"B"
   },
   "digitalis_source":{
      "question":"What plant is Digitalis derived from?",
      "options":{
         "A":"Willow bark",
         "B":"Cinchona",
         "C":"Foxglove",
         "D":"Poppy"
      },
      "answer":"C"
   },
   "narcotics":{
      "question":"What do narcotics do?",
      "options":{
         "A":"Increase heart rate",
         "B":"Lower blood pressure",
         "C":"Reduce inflammation",
         "D":"Decrease pain sensation in CNS"
      },
      "answer":"D"
   },
   "anticoagulants":{
      "question":"What do anticoagulants prevent?",
      "options":{
         "A":"Infection",
         "B":"Pain sensation",
         "C":"Blood clot formation",
         "D":"Inflammation"
      },
      "answer":"C"
   },
   "nsaids":{
      "question":"How do NSAIDs work?",
      "options":{
         "A":"Inhibit blood clotting",
         "B":"Block histamine receptors",
         "C":"Stimulate immune system",
         "D":"Interfere with prostaglandin synthesis"
      },
      "answer":"D"
   },
   "hypnotics":{
      "question":"What do hypnotics do?",
      "options":{
         "A":"Lower cholesterol",
         "B":"Relieve depression",
         "C":"Induce sleep or dull senses",
         "D":"Reduce anxiety"
      },
      "answer":"C"
   },
   "pharyng_o":{
      "question":"What does 'pharyng/o' mean?",
      "options":{
         "A":"Pharynx",
         "B":"Larynx",
         "C":"Trachea",
         "D":"Bronchus"
      },
      "answer":"A"
   },
   "laryng_o":{
      "question":"What does 'laryng/o' mean?",
      "options":{
         "A":"Larynx",
         "B":"Pharynx",
         "C":"Trachea",
         "D":"Bronchus"
      },
      "answer":"A"
   },
   "trache_o":{
      "question":"What does 'trache/o' mean?",
      "options":{
         "A":"Bronchus",
         "B":"Trachea",
         "C":"Larynx",
         "D":"Pharynx"
      },
      "answer":"B"
   },
   "bronchiol":{
      "question":"What does 'bronchiol' mean?",
      "options":{
         "A":"Bronchus",
         "B":"Alveolus",
         "C":"Bronchiole",
         "D":"Trachea"
      },
      "answer":"C"
   },
   "phren_o":{
      "question":"What does 'phren/o' mean?",
      "options":{
         "A":"Lung",
         "B":"Chest",
         "C":"Breathing",
         "D":"Diaphragm"
      },
      "answer":"D"
   },
   "pneumon_o":{
      "question":"What does 'pneumon/o' mean?",
      "options":{
         "A":"Chest",
         "B":"Air",
         "C":"Breathing",
         "D":"Lung"
      },
      "answer":"D"
   },
   "spir_o":{
      "question":"What does 'spir/o' mean?",
      "options":{
         "A":"Lung",
         "B":"Breathing",
         "C":"Oxygen",
         "D":"Air"
      },
      "answer":"B"
   },
   "capnia":{
      "question":"What does suffix '-capnia' mean?",
      "options":{
         "A":"Breathing rate",
         "B":"Blood pressure",
         "C":"Level of oxygen",
         "D":"Level of carbon dioxide"
      },
      "answer":"D"
   },
   "phonia":{
      "question":"What does suffix '-phonia' mean?",
      "options":{
         "A":"Breathing",
         "B":"Speech",
         "C":"Voice",
         "D":"Sound"
      },
      "answer":"C"
   },
   "tachy":{
      "question":"What does 'tachy' mean?",
      "options":{
         "A":"Rapid",
         "B":"Irregular",
         "C":"Slow",
         "D":"Normal"
      },
      "answer":"A"
   },
   "brady":{
      "question":"What does 'brady' mean?",
      "options":{
         "A":"Rapid",
         "B":"Fast",
         "C":"Normal",
         "D":"Slow"
      },
      "answer":"D"
   },
   "bronchitis":{
      "question":"What is bronchitis?",
      "options":{
         "A":"Inflammation of a bronchus",
         "B":"Narrowing of airways",
         "C":"Infection of the lungs",
         "D":"Collapse of alveoli"
      },
      "answer":"A"
   },
   "emphysema":{
      "question":"What characterizes emphysema?",
      "options":{
         "A":"Spasms of bronchial muscles",
         "B":"Enlargement and destruction of alveoli",
         "C":"Infection of bronchial tubes",
         "D":"Accumulation of fluid in lungs"
      },
      "answer":"B"
   },
   "antitussives":{
      "question":"What do antitussives do?",
      "options":{
         "A":"Fight infection",
         "B":"Suppress cough",
         "C":"Dilate bronchi",
         "D":"Reduce mucus"
      },
      "answer":"B"
   },
   "gastroenteritis":{
      "question":"What does 'gastroenteritis' mean?",
      "options":{
         "A":"Surgical removal of stomach",
         "B":"Inflammation of stomach and intestine",
         "C":"Pain in stomach region",
         "D":"Study of stomach diseases"
      },
      "answer":"B"
   },
   "thermometer":{
      "question":"What does 'thermometer' literally mean?",
      "options":{
         "A":"Tool for temperature surgery",
         "B":"Machine for heat production",
         "C":"Instrument to measure heat",
         "D":"Device for cold therapy"
      },
      "answer":"C"
   },
   "arthropathy":{
      "question":"What is arthropathy?",
      "options":{
         "A":"Inflammation of joints",
         "B":"Disease of joints",
         "C":"Surgical repair of joints",
         "D":"Study of joints"
      },
      "answer":"B"
   },
   "gastroscope":{
      "question":"What is a gastroscope used for?",
      "options":{
         "A":"Visual examination of stomach",
         "B":"Measurement of stomach acid",
         "C":"Surgical removal of stomach",
         "D":"Treatment of stomach ulcers"
      },
      "answer":"A"
   },
   "cardiology":{
      "question":"What does cardiology mean?",
      "options":{
         "A":"Disease of the heart",
         "B":"Surgical repair of heart",
         "C":"Pain in the heart",
         "D":"Study of the heart"
      },
      "answer":"D"
   },
   "arthritis":{
      "question":"What is arthritis?",
      "options":{
         "A":"Surgical repair of joints",
         "B":"Inflammation of joints",
         "C":"Study of joints",
         "D":"Disease of joints"
      },
      "answer":"B"
   },
   "hepatic":{
      "question":"What does 'hepatic' mean?",
      "options":{
         "A":"Pertaining to the stomach",
         "B":"Pertaining to the kidney",
         "C":"Pertaining to the liver",
         "D":"Pertaining to the heart"
      },
      "answer":"C"
   },
   "osteoarthropathy":{
      "question":"What does osteoarthropathy mean?",
      "options":{
         "A":"Inflammation of bone only",
         "B":"Study of bone diseases",
         "C":"Disease of bone and joint",
         "D":"Surgical repair of bone"
      },
      "answer":"C"
   },
   "gastroenterology":{
      "question":"What does gastroenterology study?",
      "options":{
         "A":"Heart and blood vessels",
         "B":"Liver and gallbladder",
         "C":"Stomach and intestines",
         "D":"Kidneys and bladder"
      },
      "answer":"C"
   },
   "osteochondritis":{
      "question":"What is osteochondritis?",
      "options":{
         "A":"Disease of bone only",
         "B":"Study of bone formation",
         "C":"Inflammation of bone and cartilage",
         "D":"Surgical repair of cartilage"
      },
      "answer":"C"
   },
   "hyperthermia":{
      "question":"What does hyperthermia mean?",
      "options":{
         "A":"Normal body temperature",
         "B":"Measurement of heat",
         "C":"Condition of low temperature",
         "D":"Condition of excessive heat"
      },
      "answer":"D"
   },
   "intramuscular":{
      "question":"What does intramuscular mean?",
      "options":{
         "A":"Around the muscle",
         "B":"Within the muscle",
         "C":"Between muscles",
         "D":"Through the muscle"
      },
      "answer":"B"
   },
   "gastralgia":{
      "question":"What is gastralgia?",
      "options":{
         "A":"Stomach pain",
         "B":"Stomach enlargement",
         "C":"Stomach inflammation",
         "D":"Stomach removal"
      },
      "answer":"A"
   },
   "hypogastric":{
      "question":"What does hypogastric refer to?",
      "options":{
         "A":"Below the stomach",
         "B":"Around the stomach",
         "C":"Within the stomach",
         "D":"Above the stomach"
      },
      "answer":"A"
   },
   "chemical":{
      "question":"How is 'chemical' pronounced in medical terminology?",
      "options":{
         "A":"Ke-mi-kal",
         "B":"Chem-i-cal",
         "C":"Kem-i-kl",
         "D":"She-mi-cal"
      },
      "answer":"C"
   },
   "dystrophy":{
      "question":"What does dystrophy mean?",
      "options":{
         "A":"Excessive growth",
         "B":"Normal development",
         "C":"Good nourishment",
         "D":"Poor nourishment of tissue"
      },
      "answer":"D"
   },
   "euphoria":{
      "question":"What is euphoria?",
      "options":{
         "A":"Normal emotional state",
         "B":"Feeling of sadness",
         "C":"Lack of emotion",
         "D":"Exaggerated feeling of well-being"
      },
      "answer":"D"
   },
   "gnathic":{
      "question":"What does gnathic mean?",
      "options":{
         "A":"Pertaining to the jaw",
         "B":"Pertaining to the ear",
         "C":"Pertaining to the eye",
         "D":"Pertaining to the nose"
      },
      "answer":"A"
   },
   "pharmacy":{
      "question":"What is a pharmacy?",
      "options":{
         "A":"A surgical room",
         "B":"A patient ward",
         "C":"A diagnostic lab",
         "D":"A drug dispensary"
      },
      "answer":"D"
   },
   "pneumonia":{
      "question":"What is pneumonia?",
      "options":{
         "A":"Heart inflammation",
         "B":"Kidney infection",
         "C":"Lung infection inflaming air sacs",
         "D":"Liver disease"
      },
      "answer":"C"
   },
   "pseudo":{
      "question":"What does pseudo mean?",
      "options":{
         "A":"Complete",
         "B":"True",
         "C":"Partial",
         "D":"False"
      },
      "answer":"D"
   },
   "ptosis":{
      "question":"What is ptosis?",
      "options":{
         "A":"Inflammation of eyelid",
         "B":"Surgical repair of eyelid",
         "C":"Raising of the eyelid",
         "D":"Dropping of the upper eyelid"
      },
      "answer":"D"
   },
   "rheumatic":{
      "question":"What does rheumatic refer to?",
      "options":{
         "A":"Heart disease only",
         "B":"Disorder of muscles and joints",
         "C":"Lung infection",
         "D":"Kidney stones"
      },
      "answer":"B"
   },
   "xiphoid":{
      "question":"What is xiphoid?",
      "options":{
         "A":"Muscle in the arm",
         "B":"Bone in the skull",
         "C":"Cartilage attached to sternum",
         "D":"Nerve in the spine"
      },
      "answer":"C"
   },
   "primitive":{
      "question":"What does primitive mean in medical terms?",
      "options":{
         "A":"Middle phase",
         "B":"Occurring first in time",
         "C":"Advanced development",
         "D":"Final stage"
      },
      "answer":"B"
   },
   "monocular":{
      "question":"What does monocular mean?",
      "options":{
         "A":"Pertaining to both eyes",
         "B":"Pertaining to one eye",
         "C":"Pertaining to no eyes",
         "D":"Pertaining to artificial eye"
      },
      "answer":"B"
   },
   "unicellular":{
      "question":"What does unicellular mean?",
      "options":{
         "A":"Composed of many cells",
         "B":"Composed of tissues",
         "C":"Without cells",
         "D":"Composed of one cell"
      },
      "answer":"D"
   },
   "hemisphere":{
      "question":"What is a hemisphere?",
      "options":{
         "A":"Complete rounded structure",
         "B":"Quarter of a structure",
         "C":"Three-dimensional structure",
         "D":"One half of a rounded structure"
      },
      "answer":"D"
   },
   "hexadactyly":{
      "question":"What is hexadactyly?",
      "options":{
         "A":"Missing fingers",
         "B":"Having six fingers or toes",
         "C":"Webbed fingers",
         "D":"Having five fingers"
      },
      "answer":"B"
   },
   "bisexual":{
      "question":"What does bisexual mean biologically?",
      "options":{
         "A":"Without sexual characteristics",
         "B":"Changing sexes",
         "C":"Having one sex only",
         "D":"Possessing characters of both sexes"
      },
      "answer":"D"
   },
   "dimorphous":{
      "question":"What does dimorphous mean?",
      "options":{
         "A":"Having no form",
         "B":"Having two forms",
         "C":"Having one form",
         "D":"Having multiple forms"
      },
      "answer":"B"
   },
   "triplet":{
      "question":"What is a triplet?",
      "options":{
         "A":"Two offspring from single birth",
         "B":"Four offspring from single birth",
         "C":"Single offspring",
         "D":"One of three offspring from single birth"
      },
      "answer":"D"
   },
   "tetrahedron":{
      "question":"What is a tetrahedron?",
      "options":{
         "A":"Figure with six surfaces",
         "B":"Figure with four surfaces",
         "C":"Figure with eight surfaces",
         "D":"Figure with three surfaces"
      },
      "answer":"B"
   },
   "quadriplegia":{
      "question":"What is quadriplegia?",
      "options":{
         "A":"Paralysis of lower extremities",
         "B":"Partial paralysis",
         "C":"Paralysis of all four extremities",
         "D":"Paralysis of one side"
      },
      "answer":"C"
   },
   "pentavalent":{
      "question":"What does pentavalent mean?",
      "options":{
         "A":"Having no valence",
         "B":"Having valence of four",
         "C":"Having valence of three",
         "D":"Having valence of five"
      },
      "answer":"D"
   },
   "multiple":{
      "question":"What does multiple mean?",
      "options":{
         "A":"Consisting of no parts",
         "B":"Consisting of one part",
         "C":"Consisting of few parts",
         "D":"Consisting of many parts"
      },
      "answer":"D"
   },
   "polysaccharide":{
      "question":"What is a polysaccharide?",
      "options":{
         "A":"Substance composed of proteins",
         "B":"Substance composed of fats",
         "C":"Substance composed of one sugar",
         "D":"Substance composed of many sugars"
      },
      "answer":"D"
   },
   "pancytopenia":{
      "question":"What is pancytopenia?",
      "options":{
         "A":"Increase in blood cells",
         "B":"Decrease in all blood cell types",
         "C":"Cancer of blood cells",
         "D":"Normal blood cell count"
      },
      "answer":"B"
   },
   "diplopia":{
      "question":"What is diplopia?",
      "options":{
         "A":"Blurred vision",
         "B":"Loss of vision",
         "C":"Double vision",
         "D":"Night blindness"
      },
      "answer":"C"
   },
   "centigrade":{
      "question":"What is centigrade?",
      "options":{
         "A":"Temperature scale with 100 degrees",
         "B":"Volume measurement scale",
         "C":"Weight measurement scale",
         "D":"Pressure measurement scale"
      },
      "answer":"A"
   },
   "isointense":{
      "question":"What does isointense mean?",
      "options":{
         "A":"Having different intensity",
         "B":"Having same intensity as another object",
         "C":"Having maximum intensity",
         "D":"Having no intensity"
      },
      "answer":"B"
   },
   "oliguria":{
      "question":"What is oliguria?",
      "options":{
         "A":"Excessive urine production",
         "B":"Blood in urine",
         "C":"Below-average urine production",
         "D":"Normal urine production"
      },
      "answer":"C"
   },
   "cyanosis":{
      "question":"What causes cyanosis?",
      "options":{
         "A":"Redness from inflammation",
         "B":"Pallor from anemia",
         "C":"Bluish skin from lack of oxygen",
         "D":"Yellowing from jaundice"
      },
      "answer":"C"
   },
   "erythrocyte":{
      "question":"What is an erythrocyte?",
      "options":{
         "A":"Plasma cell",
         "B":"Red blood cell",
         "C":"White blood cell",
         "D":"Platelet"
      },
      "answer":"B"
   },
   "leukoplakia":{
      "question":"What is leukoplakia?",
      "options":{
         "A":"Bleeding gums",
         "B":"White patches in the mouth",
         "C":"Red patches in the mouth",
         "D":"Ulcers in the mouth"
      },
      "answer":"B"
   },
   "melanin":{
      "question":"What is melanin?",
      "options":{
         "A":"Yellow pigment in urine",
         "B":"Red pigment in blood",
         "C":"Light pigment in eyes",
         "D":"Dark pigment coloring hair and skin"
      },
      "answer":"D"
   },
   "xanthoderma":{
      "question":"What is xanthoderma?",
      "options":{
         "A":"Red coloration of skin",
         "B":"Blue coloration of skin",
         "C":"White patches on skin",
         "D":"Yellow coloration of the skin"
      },
      "answer":"D"
   },
   "chlorophyll":{
      "question":"What is chlorophyll?",
      "options":{
         "A":"Yellow pigment in plants",
         "B":"Green pigment for photosynthesis",
         "C":"Blue pigment in flowers",
         "D":"Red pigment in blood"
      },
      "answer":"B"
   },
   "aseptic":{
      "question":"What does aseptic mean?",
      "options":{
         "A":"Full of bacteria",
         "B":"Contaminated",
         "C":"Infected",
         "D":"Free of infectious organisms"
      },
      "answer":"D"
   },
   "antidote":{
      "question":"What is an antidote?",
      "options":{
         "A":"Means for counteracting poison",
         "B":"Pain medication",
         "C":"Infection treatment",
         "D":"Type of poison"
      },
      "answer":"A"
   },
   "contraception":{
      "question":"What is contraception?",
      "options":{
         "A":"Management of pregnancy",
         "B":"Promotion of pregnancy",
         "C":"Prevention of conception",
         "D":"Treatment of infertility"
      },
      "answer":"C"
   },
   "dissect":{
      "question":"What does dissect mean?",
      "options":{
         "A":"Preserve tissues",
         "B":"Destroy tissues",
         "C":"Separate tissues for anatomical study",
         "D":"Join tissues together"
      },
      "answer":"C"
   },
   "insignificant":{
      "question":"What does insignificant mean?",
      "options":{
         "A":"Moderately important",
         "B":"Not important",
         "C":"Critical",
         "D":"Very important"
      },
      "answer":"B"
   },
   "impotence":{
      "question":"What is impotence?",
      "options":{
         "A":"Fertile condition",
         "B":"Unable to copulate",
         "C":"Normal sexual function",
         "D":"Able to reproduce"
      },
      "answer":"B"
   },
   "noninfectious":{
      "question":"What does noninfectious mean?",
      "options":{
         "A":"Moderately infectious",
         "B":"Always infectious",
         "C":"Highly contagious",
         "D":"Not able to spread disease"
      },
      "answer":"D"
   },
   "unconscious":{
      "question":"What does unconscious mean?",
      "options":{
         "A":"Fully alert",
         "B":"Not responsive",
         "C":"Hyperactive",
         "D":"Partially awake"
      },
      "answer":"B"
   },
   "heterochromia":{
      "question":"What is heterochromia?",
      "options":{
         "A":"Changing iris colors",
         "B":"Same colored irises",
         "C":"Different colored irises",
         "D":"No color in irises"
      },
      "answer":"C"
   },
   "homothermic":{
      "question":"What does homothermic mean?",
      "options":{
         "A":"Changing body temperature",
         "B":"Low body temperature",
         "C":"Maintaining constant body temperature",
         "D":"No body temperature regulation"
      },
      "answer":"C"
   },
   "macroscopic":{
      "question":"What does macroscopic mean?",
      "options":{
         "A":"Invisible",
         "B":"Visible only with microscope",
         "C":"Partially visible",
         "D":"Visible with naked eye"
      },
      "answer":"D"
   },
   "megabladder":{
      "question":"What is megabladder?",
      "options":{
         "A":"Normal bladder size",
         "B":"Enlargement of the bladder",
         "C":"Bladder removal",
         "D":"Shrinkage of bladder"
      },
      "answer":"B"
   },
   "microscopic":{
      "question":"What does microscopic mean?",
      "options":{
         "A":"Large and visible",
         "B":"Extremely small, needs microscope",
         "C":"Variable size",
         "D":"Medium sized"
      },
      "answer":"B"
   },
   "neonate":{
      "question":"What is a neonate?",
      "options":{
         "A":"Adolescent",
         "B":"Newborn infant",
         "C":"Adult",
         "D":"Elderly person"
      },
      "answer":"B"
   },
   "normovolemia":{
      "question":"What is normovolemia?",
      "options":{
         "A":"Low blood volume",
         "B":"No blood volume",
         "C":"High blood volume",
         "D":"Normal blood volume"
      },
      "answer":"D"
   },
   "pseudoplegia":{
      "question":"What is pseudoplegia?",
      "options":{
         "A":"Partial paralysis",
         "B":"False paralysis",
         "C":"True paralysis",
         "D":"Temporary paralysis"
      },
      "answer":"B"
   },
   "postpartum":{
      "question":"What does postpartum refer to?",
      "options":{
         "A":"Before pregnancy",
         "B":"During childbirth",
         "C":"Period after childbirth",
         "D":"Period before childbirth"
      },
      "answer":"C"
   },
   "transdermal":{
      "question":"What does transdermal mean?",
      "options":{
         "A":"Absorbed through unbroken skin",
         "B":"Injected into vein",
         "C":"Inhaled through lungs",
         "D":"Taken orally"
      },
      "answer":"A"
   },
   "perinatal":{
      "question":"What is the perinatal period?",
      "options":{
         "A":"Only during pregnancy",
         "B":"Only after birth",
         "C":"Time around birth (pregnancy to 1 year after)",
         "D":"Before pregnancy"
      },
      "answer":"C"
   },
   "peritoneum":{
      "question":"What is the peritoneum?",
      "options":{
         "A":"Muscle in the abdomen",
         "B":"Membrane separating heart from mediastinum",
         "C":"Nerve in the spine",
         "D":"Bone in the chest"
      },
      "answer":"B"
   },
   "exocrine":{
      "question":"What are exocrine glands?",
      "options":{
         "A":"Glands that secrete outside body surface",
         "B":"Glands that absorb fluids",
         "C":"Glands that secrete internally",
         "D":"Glands with no secretion"
      },
      "answer":"A"
   },
   "endoscope":{
      "question":"What is an endoscope?",
      "options":{
         "A":"Instrument for measurement",
         "B":"Instrument for surgery",
         "C":"Instrument to view inside body",
         "D":"Instrument for injection"
      },
      "answer":"C"
   },
   "prenatal":{
      "question":"What does prenatal mean?",
      "options":{
         "A":"During birth",
         "B":"Before birth",
         "C":"After birth",
         "D":"Between births"
      },
      "answer":"B"
   },
   "adiposis":{
      "question":"What is adiposis?",
      "options":{
         "A":"Normal fat distribution",
         "B":"Accumulation of fat in the body",
         "C":"Fat metabolism disorder",
         "D":"Loss of fat from body"
      },
      "answer":"B"
   },
   "azoturia":{
      "question":"What is azoturia?",
      "options":{
         "A":"Elevation of nitrogen compounds in urine",
         "B":"Absence of nitrogen in urine",
         "C":"Normal nitrogen levels",
         "D":"Low nitrogen in urine"
      },
      "answer":"A"
   },
   "ferric":{
      "question":"What does ferric refer to?",
      "options":{
         "A":"Compounds with zinc",
         "B":"Compounds containing iron",
         "C":"Compounds with copper",
         "D":"Compounds without iron"
      },
      "answer":"B"
   },
   "sideropenia":{
      "question":"What is sideropenia?",
      "options":{
         "A":"Iron metabolism",
         "B":"Excess iron in blood",
         "C":"Deficiency of iron in blood",
         "D":"Normal iron levels"
      },
      "answer":"C"
   },
   "dehydrate":{
      "question":"What does dehydrate mean?",
      "options":{
         "A":"To gain water",
         "B":"To lose water",
         "C":"To measure water content",
         "D":"To maintain water balance"
      },
      "answer":"B"
   },
   "hyperkalemia":{
      "question":"What is hyperkalemia?",
      "options":{
         "A":"Low potassium in blood",
         "B":"Excess potassium in blood",
         "C":"Potassium deficiency",
         "D":"Normal potassium levels"
      },
      "answer":"B"
   },
   "hyponatremia":{
      "question":"What is hyponatremia?",
      "options":{
         "A":"Sodium metabolism disorder",
         "B":"Normal sodium levels",
         "C":"Increase of sodium in blood",
         "D":"Decrease of sodium in blood"
      },
      "answer":"D"
   },
   "proteolysis":{
      "question":"What is proteolysis?",
      "options":{
         "A":"Storage of proteins",
         "B":"Measurement of proteins",
         "C":"Formation of proteins",
         "D":"Dissolving of proteins"
      },
      "answer":"D"
   },
   "steatorrhea":{
      "question":"What is steatorrhea?",
      "options":{
         "A":"Discharge of fatty stools",
         "B":"Hard stools",
         "C":"Watery stools",
         "D":"Normal stool consistency"
      },
      "answer":"A"
   },
   "aerobe":{
      "question":"What is an aerobe?",
      "options":{
         "A":"Organism that doesn't need oxygen",
         "B":"Organism that needs oxygen to live",
         "C":"Organism that produces oxygen",
         "D":"Organism that consumes carbon dioxide"
      },
      "answer":"B"
   },
   "barotrauma":{
      "question":"What is barotrauma?",
      "options":{
         "A":"Injury from radiation",
         "B":"Injury from temperature",
         "C":"Injury from chemicals",
         "D":"Injury caused by pressure changes"
      },
      "answer":"D"
   },
   "cryotherapy":{
      "question":"What is cryotherapy?",
      "options":{
         "A":"Therapeutic use of light",
         "B":"Therapeutic use of sound",
         "C":"Therapeutic use of cold",
         "D":"Therapeutic use of heat"
      },
      "answer":"C"
   },
   "electroshock":{
      "question":"What is electroshock?",
      "options":{
         "A":"Shock from temperature",
         "B":"Psychological shock",
         "C":"Shock from impact",
         "D":"Shock produced by electricity"
      },
      "answer":"D"
   },
   "synergistic":{
      "question":"What does synergistic mean?",
      "options":{
         "A":"Acting separately",
         "B":"Acting together with increased effect",
         "C":"Acting against each other",
         "D":"Having no effect"
      },
      "answer":"B"
   },
   "akinesia":{
      "question":"What is akinesia?",
      "options":{
         "A":"Impairment of voluntary activity",
         "B":"Increase in voluntary movement",
         "C":"Normal movement",
         "D":"Involuntary movement"
      },
      "answer":"A"
   },
   "photosensitive":{
      "question":"What does photosensitive mean?",
      "options":{
         "A":"No sensitivity to light",
         "B":"Sensitivity to sound",
         "C":"Abnormal sensitivity to light",
         "D":"Normal light sensitivity"
      },
      "answer":"C"
   },
   "radioactive":{
      "question":"What does radioactive mean?",
      "options":{
         "A":"Measuring radiation",
         "B":"Absorbing radiation",
         "C":"Giving off radiation",
         "D":"Blocking radiation"
      },
      "answer":"C"
   },
   "ultrasonic":{
      "question":"What does ultrasonic mean?",
      "options":{
         "A":"Pertaining to heat waves",
         "B":"Pertaining to light waves",
         "C":"Pertaining to low frequency sounds",
         "D":"Pertaining to high frequency sound waves"
      },
      "answer":"D"
   },
   "hypothermia":{
      "question":"What is hypothermia?",
      "options":{
         "A":"High body temperature",
         "B":"Fluctuating temperature",
         "C":"Low body temperature",
         "D":"Normal body temperature"
      },
      "answer":"C"
   },
   "carcinogen":{
      "question":"What is a carcinogen?",
      "options":{
         "A":"Substance that diagnoses cancer",
         "B":"Substance that prevents cancer",
         "C":"Substance that tends to produce cancer",
         "D":"Substance that treats cancer"
      },
      "answer":"C"
   },
   "lithiasis":{
      "question":"What is lithiasis?",
      "options":{
         "A":"Absence of stones",
         "B":"Dissolution of stones",
         "C":"Formation or presence of stones in body",
         "D":"Prevention of stones"
      },
      "answer":"C"
   },
   "oncology":{
      "question":"What is oncology?",
      "options":{
         "A":"Study of infections",
         "B":"Study of hormones",
         "C":"Branch of science dealing with tumors",
         "D":"Study of blood"
      },
      "answer":"C"
   },
   "pathologist":{
      "question":"What does a pathologist do?",
      "options":{
         "A":"Prescribes medications",
         "B":"Examines origin and nature of diseases",
         "C":"Provides patient care",
         "D":"Performs surgeries"
      },
      "answer":"B"
   },
   "pyuria":{
      "question":"What is pyuria?",
      "options":{
         "A":"Absence of urine",
         "B":"Blood in urine",
         "C":"Presence of pus in urine",
         "D":"Protein in urine"
      },
      "answer":"C"
   },
   "pyretic":{
      "question":"What does pyretic mean?",
      "options":{
         "A":"Preventing fever",
         "B":"Measuring fever",
         "C":"Reducing fever",
         "D":"Pertaining to or producing fever"
      },
      "answer":"D"
   },
   "toxic":{
      "question":"What does toxic mean?",
      "options":{
         "A":"Pertaining to or caused by poison",
         "B":"Medicinal substance",
         "C":"Nutritional substance",
         "D":"Harmless substance"
      },
      "answer":"A"
   },
   "dermatology":{
      "question":"What does dermatology study?",
      "options":{
         "A":"Digestive system",
         "B":"Nervous system",
         "C":"Skin and its treatment",
         "D":"Heart diseases"
      },
      "answer":"C"
   },
   "cardiologist":{
      "question":"What does a cardiologist do?",
      "options":{
         "A":"Treats skin conditions",
         "B":"Specializes in brain disorders",
         "C":"Diagnoses and treats heart diseases",
         "D":"Focuses on bone diseases"
      },
      "answer":"C"
   },
   "psychiatry":{
      "question":"What is psychiatry?",
      "options":{
         "A":"Treatment of infections",
         "B":"Science of diagnosing and treating mental disorders",
         "C":"Study of physical diseases",
         "D":"Study of genetics"
      },
      "answer":"B"
   },
   "orthopedics":{
      "question":"What does orthopedics study?",
      "options":{
         "A":"Nerves only",
         "B":"Muscles only",
         "C":"Skeleton and its treatment",
         "D":"Internal organs"
      },
      "answer":"C"
   },
   "pediatric":{
      "question":"What does pediatric refer to?",
      "options":{
         "A":"Care and treatment of children",
         "B":"Care of elderly",
         "C":"Care of adults",
         "D":"Care of animals"
      },
      "answer":"A"
   },
   "phobia":{
      "question":"What is a phobia?",
      "options":{
         "A":"Normal fear response",
         "B":"Temporary fear",
         "C":"Lack of fear",
         "D":"Persistent and exaggerated fear"
      },
      "answer":"D"
   },
   "amebiasis":{
      "question":"What is amebiasis?",
      "options":{
         "A":"Infection with pathogenic ameba",
         "B":"Fungal infection",
         "C":"Viral infection",
         "D":"Bacterial infection"
      },
      "answer":"A"
   },
   "alcoholism":{
      "question":"What is alcoholism?",
      "options":{
         "A":"Social drinking",
         "B":"Alcohol avoidance",
         "C":"Chronic disorder characterized by dependence on alcohol",
         "D":"Temporary alcohol use"
      },
      "answer":"C"
   },
   "tetany":{
      "question":"What is tetany?",
      "options":{
         "A":"Muscle relaxation",
         "B":"Muscle weakness",
         "C":"Sustained muscle contraction",
         "D":"Muscle paralysis"
      },
      "answer":"C"
   },
   "neurosis":{
      "question":"What is neurosis?",
      "options":{
         "A":"Nerve regeneration",
         "B":"Nerve destruction",
         "C":"Abnormal condition of nerves",
         "D":"Normal nerve function"
      },
      "answer":"C"
   },
   "neuralgia":{
      "question":"What is neuralgia?",
      "options":{
         "A":"Muscle pain",
         "B":"Bone pain",
         "C":"Nerve pain",
         "D":"Joint pain"
      },
      "answer":"C"
   },
   "appendectomy":{
      "question":"What is an appendectomy?",
      "options":{
         "A":"Surgical repair of appendix",
         "B":"Surgical removal of appendix",
         "C":"Inflammation of appendix",
         "D":"Examination of appendix"
      },
      "answer":"B"
   },
   "spirometry":{
      "question":"What is spirometry?",
      "options":{
         "A":"Measurement of heart rate",
         "B":"Measurement of blood pressure",
         "C":"Measurement of breathing",
         "D":"Measurement of temperature"
      },
      "answer":"C"
   },
   "rhinoplasty":{
      "question":"What is rhinoplasty?",
      "options":{
         "A":"Surgical repair of nose",
         "B":"Surgical removal of nose",
         "C":"Inflammation of nose",
         "D":"Examination of nose"
      },
      "answer":"A"
   },
   "angiography":{
      "question":"What is angiography?",
      "options":{
         "A":"Imaging of muscles",
         "B":"Imaging of blood vessels",
         "C":"Imaging of bones",
         "D":"Imaging of nerves"
      },
      "answer":"B"
   },
   "cardiac":{
      "question":"What does cardiac mean?",
      "options":{
         "A":"Pertaining to the liver",
         "B":"Pertaining to the heart",
         "C":"Pertaining to the kidney",
         "D":"Pertaining to the stomach"
      },
      "answer":"B"
   },
   "skeletal":{
      "question":"What does skeletal mean?",
      "options":{
         "A":"Pertaining to nerves",
         "B":"Pertaining to skin",
         "C":"Pertaining to muscles",
         "D":"Pertaining to the skeleton"
      },
      "answer":"D"
   },
   "vascular":{
      "question":"What does vascular mean?",
      "options":{
         "A":"Pertaining to blood vessels",
         "B":"Pertaining to muscles",
         "C":"Pertaining to lymph vessels",
         "D":"Pertaining to nerves"
      },
      "answer":"A"
   },
   "dietary":{
      "question":"What does dietary mean?",
      "options":{
         "A":"Pertaining to sleep",
         "B":"Pertaining to medication",
         "C":"Pertaining to exercise",
         "D":"Pertaining to diet"
      },
      "answer":"D"
   },
   "surgical":{
      "question":"What does surgical mean?",
      "options":{
         "A":"Pertaining to medicine",
         "B":"Pertaining to prevention",
         "C":"Pertaining to diagnosis",
         "D":"Pertaining to surgery"
      },
      "answer":"D"
   },
   "toxoid":{
      "question":"What is a toxoid?",
      "options":{
         "A":"Resembling toxin (poison)",
         "B":"Measurement of toxicity",
         "C":"Antidote for toxin",
         "D":"Actual toxin"
      },
      "answer":"A"
   },
   "adipose":{
      "question":"What does adipose mean?",
      "options":{
         "A":"Pertaining to muscle",
         "B":"Pertaining to fat",
         "C":"Pertaining to bone",
         "D":"Pertaining to nerve"
      },
      "answer":"B"
   },
   "venous":{
      "question":"What does venous mean?",
      "options":{
         "A":"Pertaining to a capillary",
         "B":"Pertaining to a vein",
         "C":"Pertaining to a nerve",
         "D":"Pertaining to an artery"
      },
      "answer":"B"
   },
   "respiratory":{
      "question":"What does respiratory mean?",
      "options":{
         "A":"Pertaining to excretion",
         "B":"Pertaining to circulation",
         "C":"Pertaining to respiration",
         "D":"Pertaining to digestion"
      },
      "answer":"C"
   },
   "cerebellum":{
      "question":"What is the cerebellum?",
      "options":{
         "A":"Structure in lung",
         "B":"Structure in kidney",
         "C":"Structure in brain for coordination",
         "D":"Structure in heart"
      },
      "answer":"C"
   },
   "analgesia":{
      "question":"What is analgesia?",
      "options":{
         "A":"Measurement of pain",
         "B":"Treatment of pain",
         "C":"Increased sensation of pain",
         "D":"Loss of sensation of pain"
      },
      "answer":"D"
   },
   "vasodilation":{
      "question":"What is vasodilation?",
      "options":{
         "A":"Rupture of blood vessels",
         "B":"Dilatation of blood vessels",
         "C":"Constriction of blood vessels",
         "D":"Formation of blood vessels"
      },
      "answer":"B"
   },
   "cephaledema":{
      "question":"What is cephaledema?",
      "options":{
         "A":"Edema of the hands",
         "B":"Edema of the head",
         "C":"Edema of the feet",
         "D":"Edema of the abdomen"
      },
      "answer":"B"
   },
   "encephalogram":{
      "question":"What is an encephalogram?",
      "options":{
         "A":"X-ray picture of the brain",
         "B":"X-ray of the bones",
         "C":"X-ray of the heart",
         "D":"X-ray of the lungs"
      },
      "answer":"A"
   },
   "gastritis":{
      "question":"What is gastritis?",
      "options":{
         "A":"Inflammation of the liver",
         "B":"Inflammation of the kidney",
         "C":"Inflammation of the stomach",
         "D":"Inflammation of the intestine"
      },
      "answer":"C"
   },
   "hemolysis":{
      "question":"What is hemolysis?",
      "options":{
         "A":"Clotting of blood",
         "B":"Breaking down of red blood cells",
         "C":"Formation of red blood cells",
         "D":"Circulation of blood"
      },
      "answer":"B"
   },
   "hepatomegaly":{
      "question":"What is hepatomegaly?",
      "options":{
         "A":"Enlargement of the kidney",
         "B":"Enlargement of the heart",
         "C":"Enlargement of the spleen",
         "D":"Enlargement of the liver"
      },
      "answer":"D"
   },
   "hepatonecrosis":{
      "question":"What is hepatonecrosis?",
      "options":{
         "A":"Inflammation of liver",
         "B":"Death of liver tissue",
         "C":"Growth of liver tissue",
         "D":"Repair of liver tissue"
      },
      "answer":"B"
   },
   "hemiplegia":{
      "question":"What is hemiplegia?",
      "options":{
         "A":"Paralysis of one side of body",
         "B":"Paralysis of all limbs",
         "C":"Partial paralysis",
         "D":"Paralysis of both legs"
      },
      "answer":"A"
   },
   "acrophobia":{
      "question":"What is acrophobia?",
      "options":{
         "A":"Pathological fear of heights",
         "B":"Fear of water",
         "C":"Fear of enclosed spaces",
         "D":"Fear of open spaces"
      },
      "answer":"A"
   },
   "hemorrhage":{
      "question":"What is hemorrhage?",
      "options":{
         "A":"Internal bleeding only",
         "B":"External bleeding only",
         "C":"Mild bleeding",
         "D":"Profuse discharge of blood"
      },
      "answer":"D"
   },
   "menorrhea":{
      "question":"What is menorrhea?",
      "options":{
         "A":"Normal menstruation",
         "B":"Absent menstruation",
         "C":"Painful menstruation",
         "D":"Heavy menstruation"
      },
      "answer":"A"
   },
   "otoscopy":{
      "question":"What is otoscopy?",
      "options":{
         "A":"Examination of the ear canal",
         "B":"Examination of the nose",
         "C":"Examination of the eye",
         "D":"Examination of the throat"
      },
      "answer":"A"
   },
   "blepharospasm":{
      "question":"What is blepharospasm?",
      "options":{
         "A":"Spasm of leg muscles",
         "B":"Spasm of hand muscles",
         "C":"Spasm of facial muscles",
         "D":"Spasm of the eyelids"
      },
      "answer":"D"
   },
   "hypertension":{
      "question":"What is hypertension?",
      "options":{
         "A":"Elevation of blood pressure",
         "B":"Normal blood pressure",
         "C":"Low blood pressure",
         "D":"Irregular blood pressure"
      },
      "answer":"A"
   },
   "chemotherapy":{
      "question":"What is chemotherapy?",
      "options":{
         "A":"Treatment with radiation",
         "B":"Treatment with chemicals for cancer",
         "C":"Treatment with herbs",
         "D":"Treatment with surgery"
      },
      "answer":"B"
   },
   "arthralgia":{
      "question":"What is arthralgia?",
      "options":{
         "A":"Bone pain",
         "B":"Nerve pain",
         "C":"Muscle pain",
         "D":"Joint pain"
      },
      "answer":"D"
   },
   "gastrodynia":{
      "question":"What is gastrodynia?",
      "options":{
         "A":"Pain in the intestine",
         "B":"Pain in the liver",
         "C":"Pain in the kidney",
         "D":"Pain in the stomach"
      },
      "answer":"D"
   },
   "myoplasty":{
      "question":"What is myoplasty?",
      "options":{
         "A":"Inflammation of muscle",
         "B":"Surgical repair of muscle",
         "C":"Study of muscles",
         "D":"Surgical removal of muscle"
      },
      "answer":"B"
   },
   "bid":{
      "question":"What does 'bid' mean in medication orders?",
      "options":{
         "A":"Four times a day",
         "B":"Twice a day",
         "C":"Once a day",
         "D":"Three times a day"
      },
      "answer":"B"
   },
   "tid":{
      "question":"What does 'tid' mean?",
      "options":{
         "A":"Four times a day",
         "B":"Once a day",
         "C":"Three times a day",
         "D":"Twice a day"
      },
      "answer":"C"
   },
   "hs":{
      "question":"What does 'hs' mean?",
      "options":{
         "A":"Afternoon",
         "B":"In the morning",
         "C":"Evening",
         "D":"At bedtime (hour of sleep)"
      },
      "answer":"D"
   },
   "stat":{
      "question":"What does 'stat' mean?",
      "options":{
         "A":"Tomorrow",
         "B":"Weekly",
         "C":"Immediately",
         "D":"When convenient"
      },
      "answer":"C"
   },
   "po":{
      "question":"What does 'PO' mean?",
      "options":{
         "A":"By mouth",
         "B":"Into vein",
         "C":"Into muscle",
         "D":"Through skin"
      },
      "answer":"A"
   },
   "iv":{
      "question":"What does 'IV' mean?",
      "options":{
         "A":"Intramuscularly",
         "B":"Subcutaneously",
         "C":"Intravenously (into vein)",
         "D":"Orally"
      },
      "answer":"C"
   },
   "im":{
      "question":"What does 'IM' mean?",
      "options":{
         "A":"Intravenously",
         "B":"Subcutaneously",
         "C":"Orally",
         "D":"Intramuscularly (into muscle)"
      },
      "answer":"D"
   },
   "subq":{
      "question":"What does 'subq' mean?",
      "options":{
         "A":"Subcutaneously (through skin)",
         "B":"Intravenously",
         "C":"Orally",
         "D":"Intramuscularly"
      },
      "answer":"A"
   },
   "ans":{
      "question":"What does 'ANS' stand for?",
      "options":{
         "A":"Advanced nursing services",
         "B":"Acute neurological syndrome",
         "C":"Autonomic nervous system",
         "D":"American Nursing Society"
      },
      "answer":"C"
   },
   "bp":{
      "question":"What does 'B.P.' stand for?",
      "options":{
         "A":"Brain pressure",
         "B":"Breathing pattern",
         "C":"Body position",
         "D":"Blood pressure"
      },
      "answer":"D"
   },
   "cbc":{
      "question":"What does 'c.b.c' stand for?",
      "options":{
         "A":"Complete blood count",
         "B":"Comprehensive blood chemistry",
         "C":"Cardiac blood circulation",
         "D":"Complete body check"
      },
      "answer":"A"
   },
   "chf":{
      "question":"What does 'CHF' stand for?",
      "options":{
         "A":"Coronary heart function",
         "B":"Congestive heart failure",
         "C":"Chronic heart function",
         "D":"Cardiac health facility"
      },
      "answer":"B"
   },
   "copd":{
      "question":"What does 'COPD' stand for?",
      "options":{
         "A":"Chronic obstructive pulmonary disease",
         "B":"Cardiac obstructive pulmonary disorder",
         "C":"Cardiac oxygen pulmonary disease",
         "D":"Chronic oxygen pulmonary deficiency"
      },
      "answer":"A"
   },
   "ecg":{
      "question":"What does 'ECG' stand for?",
      "options":{
         "A":"Electrocardiogram",
         "B":"Electronic cardiac graph",
         "C":"Emergency cardiac gauge",
         "D":"Echo cardiogram"
      },
      "answer":"A"
   },
   "git":{
      "question":"What does 'G.I.T' stand for?",
      "options":{
         "A":"General infection treatment",
         "B":"General internal therapy",
         "C":"Gastric intestinal treatment",
         "D":"Gastrointestinal tract"
      },
      "answer":"D"
   },
   "icu":{
      "question":"What does 'ICU' stand for?",
      "options":{
         "A":"Immediate care unit",
         "B":"Infection control unit",
         "C":"Internal care unit",
         "D":"Intensive care unit"
      },
      "answer":"D"
   },
   "mi":{
      "question":"What does 'MI' stand for?",
      "options":{
         "A":"Myocardial inflammation",
         "B":"Myocardial infarction",
         "C":"Muscle injury",
         "D":"Medical intervention"
      },
      "answer":"B"
   },
   "otc":{
      "question":"What does 'O.T.C' mean?",
      "options":{
         "A":"Official therapeutic compound",
         "B":"On time consumption",
         "C":"Over the counter",
         "D":"Oral tablet capsule"
      },
      "answer":"C"
   },
   "uri":{
      "question":"What does 'URI' stand for?",
      "options":{
         "A":"Urinary retention issue",
         "B":"Unilateral respiratory inflammation",
         "C":"Upper respiratory infection",
         "D":"Upper renal infection"
      },
      "answer":"C"
   },
   "htn":{
      "question":"What does 'HTN' stand for?",
      "options":{
         "A":"Hyperthyroidism",
         "B":"Hypothermia",
         "C":"Hypertension",
         "D":"Hypotension"
      },
      "answer":"C"
   },
   "polymorphic":{
      "question":"What does polymorphic mean?",
      "options":{
         "A":"Having changing forms",
         "B":"Having one form",
         "C":"Having no form",
         "D":"Having many forms"
      },
      "answer":"D"
   },
   "cytogenesis":{
      "question":"What is cytogenesis?",
      "options":{
         "A":"Function of cells",
         "B":"Study of cells",
         "C":"Destruction of cells",
         "D":"Formation of cells"
      },
      "answer":"D"
   },
   "nuclear":{
      "question":"What does nuclear mean?",
      "options":{
         "A":"Pertaining to tissue",
         "B":"Pertaining to organs",
         "C":"Pertaining to cells",
         "D":"Pertaining to a nucleus"
      },
      "answer":"D"
   },
   "histologist":{
      "question":"What does a histologist do?",
      "options":{
         "A":"Specialist in systems",
         "B":"Specialist in cells",
         "C":"Specialist in organs",
         "D":"Specialist in study of tissue"
      },
      "answer":"D"
   },
   "adenoma":{
      "question":"What is an adenoma?",
      "options":{
         "A":"Enlargement of gland",
         "B":"Inflammation of gland",
         "C":"Removal of gland",
         "D":"Tumor of a gland"
      },
      "answer":"D"
   },
   "visceral":{
      "question":"What does visceral mean?",
      "options":{
         "A":"Pertaining to muscles",
         "B":"Pertaining to internal organs",
         "C":"Pertaining to external organs",
         "D":"Pertaining to bones"
      },
      "answer":"B"
   },
   "myxadenitis":{
      "question":"What is myxadenitis?",
      "options":{
         "A":"Inflammation of sweat gland",
         "B":"Inflammation of hormone gland",
         "C":"Inflammation of mucus-secreting gland",
         "D":"Inflammation of oil gland"
      },
      "answer":"C"
   },
   "mucorrhea":{
      "question":"What is mucorrhea?",
      "options":{
         "A":"Normal mucus flow",
         "B":"Increased flow of mucus",
         "C":"Decreased flow of mucus",
         "D":"Absence of mucus"
      },
      "answer":"B"
   },
   "somatic":{
      "question":"What does somatic mean?",
      "options":{
         "A":"Pertaining to the mind",
         "B":"Pertaining to the body",
         "C":"Pertaining to germ cells",
         "D":"Pertaining to emotions"
      },
      "answer":"B"
   },
   "etiology":{
      "question":"What is etiology?",
      "options":{
         "A":"Study of disease prevention",
         "B":"Study of disease causes",
         "C":"Study of disease treatment",
         "D":"Study of disease effects"
      },
      "answer":"B"
   },
   "idiopathic":{
      "question":"What does idiopathic mean?",
      "options":{
         "A":"Condition with known cause",
         "B":"Condition without clear cause",
         "C":"Condition from infection",
         "D":"Condition from injury"
      },
      "answer":"B"
   },
   "leukoblast":{
      "question":"What is a leukoblast?",
      "options":{
         "A":"Immature white blood cell",
         "B":"Immature red blood cell",
         "C":"Mature red blood cell",
         "D":"Mature white blood cell"
      },
      "answer":"A"
   },
   "genetics":{
      "question":"What is genetics?",
      "options":{
         "A":"Science of organs",
         "B":"Science of cells",
         "C":"Science of genes and heredity",
         "D":"Science of tissues"
      },
      "answer":"C"
   },
   "phagocyte":{
      "question":"What is a phagocyte?",
      "options":{
         "A":"Cell that ingests waste and foreign matter",
         "B":"Cell that produces antibodies",
         "C":"Cell that clots blood",
         "D":"Cell that carries oxygen"
      },
      "answer":"A"
   },
   "acidophilic":{
      "question":"What does acidophilic mean?",
      "options":{
         "A":"Attracting acid stain",
         "B":"Neutral to acid stain",
         "C":"Destroyed by acid stain",
         "D":"Repelling acid stain"
      },
      "answer":"A"
   },
   "hyperplasia":{
      "question":"What is hyperplasia?",
      "options":{
         "A":"Underdevelopment of organ",
         "B":"Overdevelopment of organ or tissue",
         "C":"Abnormal development",
         "D":"Normal development"
      },
      "answer":"B"
   },
   "chronotropic":{
      "question":"What does chronotropic mean?",
      "options":{
         "A":"Affecting rhythm",
         "B":"Affecting time or rate",
         "C":"Affecting strength",
         "D":"Affecting direction"
      },
      "answer":"B"
   },
   "atrophy":{
      "question":"What is atrophy?",
      "options":{
         "A":"Increase in size",
         "B":"No change in size",
         "C":"Wasting away or decrease in size",
         "D":"Abnormal growth"
      },
      "answer":"C"
   },
   "lipase":{
      "question":"What is lipase?",
      "options":{
         "A":"Enzyme that digests sugar",
         "B":"Enzyme that digests protein",
         "C":"Enzyme that digests fat",
         "D":"Enzyme that digests starch"
      },
      "answer":"C"
   },
   "lactase":{
      "question":"What is lactase?",
      "options":{
         "A":"Enzyme that digests protein",
         "B":"Enzyme that digests milk sugar",
         "C":"Enzyme that produces milk",
         "D":"Enzyme that digests fat"
      },
      "answer":"B"
   },
   "hydrophilic":{
      "question":"What does hydrophilic mean?",
      "options":{
         "A":"Destroyed by water",
         "B":"Repelling water",
         "C":"Attracting water",
         "D":"Neutral to water"
      },
      "answer":"C"
   },
   "glucosuria":{
      "question":"What is glucosuria?",
      "options":{
         "A":"Presence of protein in urine",
         "B":"Presence of glucose in urine",
         "C":"Presence of blood in urine",
         "D":"Absence of glucose in urine"
      },
      "answer":"B"
   },
   "lipogenesis":{
      "question":"What is lipogenesis?",
      "options":{
         "A":"Formation of fat",
         "B":"Storage of fat",
         "C":"Measurement of fat",
         "D":"Breakdown of fat"
      },
      "answer":"A"
   },
   "adipocyte":{
      "question":"What is an adipocyte?",
      "options":{
         "A":"Cell that breaks down fat",
         "B":"Cell that produces fat",
         "C":"Cell that transports fat",
         "D":"Cell that stores fat"
      },
      "answer":"D"
   },
   "protease":{
      "question":"What is protease?",
      "options":{
         "A":"Enzyme that produces protein",
         "B":"Enzyme that digests protein",
         "C":"Enzyme that digests sugar",
         "D":"Enzyme that digests fat"
      },
      "answer":"B"
   },
   "amino_acids":{
      "question":"What are amino acids?",
      "options":{
         "A":"Fat compounds for storage",
         "B":"Mineral compounds for bones",
         "C":"Nitrogen compounds that make up proteins",
         "D":"Sugar compounds for energy"
      },
      "answer":"C"
   },
   "glycogen":{
      "question":"What is glycogen?",
      "options":{
         "A":"Simple sugar in blood",
         "B":"Fat in adipose tissue",
         "C":"Protein in muscles",
         "D":"Complex sugar stored in liver and muscles"
      },
      "answer":"D"
   },
   "metformin":{
      "question":"What is Metformin used for?",
      "options":{
         "A":"Hypertension treatment",
         "B":"Diabetes treatment",
         "C":"Pain relief",
         "D":"Infection treatment"
      },
      "answer":"B"
   },
   "glucophage":{
      "question":"What is Glucophage?",
      "options":{
         "A":"Generic name for insulin",
         "B":"Pain medication",
         "C":"Type of antibiotic",
         "D":"Brand name for metformin"
      },
      "answer":"D"
   },
   "adrenaline":{
      "question":"Where does adrenaline come from?",
      "options":{
         "A":"Adrenal gland",
         "B":"Pituitary gland",
         "C":"Pancreas",
         "D":"Thyroid gland"
      },
      "answer":"A"
   },
   "pitocin":{
      "question":"What is Pitocin used for?",
      "options":{
         "A":"Treating infection",
         "B":"Reducing pain",
         "C":"Lowering blood pressure",
         "D":"Inducing labor"
      },
      "answer":"D"
   },
   "botox":{
      "question":"What is Botox derived from?",
      "options":{
         "A":"Animal hormone",
         "B":"Plant extract",
         "C":"Synthetic chemical",
         "D":"Clostridium botulinum toxin"
      },
      "answer":"D"
   },
   "aspirin":{
      "question":"What plant was aspirin originally derived from?",
      "options":{
         "A":"Poppy",
         "B":"Willow bark",
         "C":"Spiraea plant blossoms",
         "D":"Foxglove"
      },
      "answer":"C"
   },
   "taxol":{
      "question":"What is Taxol used for?",
      "options":{
         "A":"Pain reliever",
         "B":"Antitumor agent",
         "C":"Antibiotic",
         "D":"Anti-inflammatory"
      },
      "answer":"B"
   },
   "digitalis":{
      "question":"What does digitalis treat?",
      "options":{
         "A":"Heart failure",
         "B":"Pain",
         "C":"Infection",
         "D":"Diabetes"
      },
      "answer":"A"
   },
   "atropine":{
      "question":"What does atropine do?",
      "options":{
         "A":"Smooth muscle relaxant",
         "B":"Anti-inflammatory",
         "C":"Pain reliever",
         "D":"Antibiotic"
      },
      "answer":"A"
   },
   "humulin":{
      "question":"What is Humulin?",
      "options":{
         "A":"Human insulin",
         "B":"Animal insulin",
         "C":"Pain medication",
         "D":"Synthetic antibiotic"
      },
      "answer":"A"
   },
   "belladonna":{
      "question":"What does belladonna do?",
      "options":{
         "A":"Dilates pupils",
         "B":"Decreases blood pressure",
         "C":"Increases heart rate",
         "D":"Constricts pupils"
      },
      "answer":"A"
   },
   "anesthetics":{
      "question":"What do anesthetics do?",
      "options":{
         "A":"Measure sensation",
         "B":"Block pain only",
         "C":"Reduce or eliminate sensation",
         "D":"Increase sensation"
      },
      "answer":"C"
   },
   "anticonvulsants":{
      "question":"What do anticonvulsants do?",
      "options":{
         "A":"Suppress or reduce seizures",
         "B":"Cause seizures",
         "C":"Prevent infections",
         "D":"Reduce inflammation"
      },
      "answer":"A"
   },
   "antidiabetics":{
      "question":"What do antidiabetics do?",
      "options":{
         "A":"Treat infections",
         "B":"Prevent or alleviate diabetes",
         "C":"Measure blood sugar",
         "D":"Cause diabetes"
      },
      "answer":"B"
   },
   "corticosteroids":{
      "question":"What are corticosteroids?",
      "options":{
         "A":"Hormones from pituitary",
         "B":"Hormones from adrenal cortex",
         "C":"Hormones from thyroid",
         "D":"Hormones from pancreas"
      },
      "answer":"B"
   },
   "antifungal":{
      "question":"What are antifungal drugs effective against?",
      "options":{
         "A":"Fungi",
         "B":"Bacteria",
         "C":"Parasites",
         "D":"Viruses"
      },
      "answer":"A"
   },
   "antiviral":{
      "question":"What do antiviral drugs treat?",
      "options":{
         "A":"Fungal infections",
         "B":"Viral infections",
         "C":"Bacterial infections",
         "D":"Parasitic infections"
      },
      "answer":"B"
   },
   "antiarrhythmic":{
      "question":"What do antiarrhythmic drugs do?",
      "options":{
         "A":"Correct heart rhythm abnormalities",
         "B":"Reduce cholesterol",
         "C":"Prevent blood clots",
         "D":"Lower blood pressure"
      },
      "answer":"A"
   },
   "hypolipidemics":{
      "question":"What do hypolipidemic drugs do?",
      "options":{
         "A":"Lower cholesterol",
         "B":"Measure cholesterol",
         "C":"Synthesize cholesterol",
         "D":"Increase cholesterol"
      },
      "answer":"A"
   },
   "antianxiety":{
      "question":"What do antianxiety drugs do?",
      "options":{
         "A":"Prevent anxiety",
         "B":"Measure anxiety",
         "C":"Reduce anxiety",
         "D":"Increase anxiety"
      },
      "answer":"C"
   },
   "antidepressant":{
      "question":"How do antidepressants work?",
      "options":{
         "A":"Block neurotransmitters",
         "B":"Lower neurotransmitter levels",
         "C":"Destroy neurotransmitters",
         "D":"Raise brain levels of neurotransmitters"
      },
      "answer":"D"
   },
   "eupnea":{
      "question":"What is eupnea?",
      "options":{
         "A":"Normal breathing",
         "B":"Slow breathing",
         "C":"Difficult breathing",
         "D":"Rapid breathing"
      },
      "answer":"A"
   },
   "hypoxia":{
      "question":"What is hypoxia?",
      "options":{
         "A":"Normal oxygen levels",
         "B":"Oxygen measurement",
         "C":"Decreased oxygen in tissues",
         "D":"Increased oxygen in tissues"
      },
      "answer":"C"
   },
   "hypercapnia":{
      "question":"What is hypercapnia?",
      "options":{
         "A":"Decreased carbon dioxide",
         "B":"Normal carbon dioxide",
         "C":"Carbon dioxide measurement",
         "D":"Increased carbon dioxide in tissues"
      },
      "answer":"D"
   },
   "dysphonia":{
      "question":"What is dysphonia?",
      "options":{
         "A":"Difficulty in speaking",
         "B":"Difficulty in swallowing",
         "C":"Difficulty in breathing",
         "D":"Difficulty in hearing"
      },
      "answer":"A"
   },
   "nasal":{
      "question":"What does nasal mean?",
      "options":{
         "A":"Pertaining to the throat",
         "B":"Pertaining to the mouth",
         "C":"Pertaining to the ear",
         "D":"Pertaining to the nose"
      },
      "answer":"D"
   },
   "rhinorrhea":{
      "question":"What is rhinorrhea?",
      "options":{
         "A":"Discharge from the nose",
         "B":"Discharge from the eyes",
         "C":"Discharge from the mouth",
         "D":"Discharge from the ears"
      },
      "answer":"A"
   },
   "pharyngeal":{
      "question":"What does pharyngeal mean?",
      "options":{
         "A":"Pertaining to the larynx",
         "B":"Pertaining to the bronchi",
         "C":"Pertaining to the trachea",
         "D":"Pertaining to the pharynx"
      },
      "answer":"D"
   },
   "laryngoscopy":{
      "question":"What is laryngoscopy?",
      "options":{
         "A":"Inflammation of larynx",
         "B":"Measurement of larynx",
         "C":"Endoscopic examination of larynx",
         "D":"Surgical removal of larynx"
      },
      "answer":"C"
   },
   "tracheotomy":{
      "question":"What is a tracheotomy?",
      "options":{
         "A":"Incision into the trachea",
         "B":"Examination of trachea",
         "C":"Removal of trachea",
         "D":"Repair of trachea"
      },
      "answer":"A"
   },
   "bronchospasm":{
      "question":"What is bronchospasm?",
      "options":{
         "A":"Enlargement of bronchus",
         "B":"Inflammation of bronchus",
         "C":"Spasm of the bronchus",
         "D":"Narrowing of bronchus"
      },
      "answer":"C"
   },
   "bronchiolectasis":{
      "question":"What is bronchiolectasis?",
      "options":{
         "A":"Dilatation of bronchioles",
         "B":"Constriction of bronchioles",
         "C":"Removal of bronchioles",
         "D":"Inflammation of bronchioles"
      },
      "answer":"A"
   },
   "phrenic":{
      "question":"What does phrenic mean?",
      "options":{
         "A":"Pertaining to the lungs",
         "B":"Pertaining to the chest",
         "C":"Pertaining to the diaphragm",
         "D":"Pertaining to breathing"
      },
      "answer":"C"
   },
   "intrapulmonary":{
      "question":"What does intrapulmonary mean?",
      "options":{
         "A":"Outside the lungs",
         "B":"Around the lungs",
         "C":"Within the lungs",
         "D":"Between the lungs"
      },
      "answer":"C"
   },
   "pneumonectomy":{
      "question":"What is pneumonectomy?",
      "options":{
         "A":"Examination of lung",
         "B":"Surgical removal of lung tissue",
         "C":"Inflammation of lung",
         "D":"Repair of lung"
      },
      "answer":"B"
   },
   "spirometer":{
      "question":"What is a spirometer?",
      "options":{
         "A":"Instrument for measuring breathing volumes",
         "B":"Instrument for measuring heart rate",
         "C":"Instrument for oxygen levels",
         "D":"Instrument for blood pressure"
      },
      "answer":"A"
   },
   "oximeter":{
      "question":"What does an oximeter measure?",
      "options":{
         "A":"Oxygen saturation of blood",
         "B":"Carbon dioxide levels",
         "C":"Breathing rate",
         "D":"Blood pressure"
      },
      "answer":"A"
   },
   "tachypnea":{
      "question":"What is tachypnea?",
      "options":{
         "A":"Slow breathing (<12 breaths/min)",
         "B":"Rapid breathing (>20 breaths/min)",
         "C":"Normal breathing",
         "D":"Irregular breathing"
      },
      "answer":"B"
   },
   "bradypnea":{
      "question":"What is bradypnea?",
      "options":{
         "A":"Normal breathing",
         "B":"Deep breathing",
         "C":"Rapid breathing (>20 breaths/min)",
         "D":"Slow breathing (<12 breaths/min)"
      },
      "answer":"D"
   },
   "asthma":{
      "question":"What characterizes asthma?",
      "options":{
         "A":"Lung infection with fever",
         "B":"Dyspnea and wheezing from bronchial spasms",
         "C":"Chronic cough with blood",
         "D":"Chest pain with breathing"
      },
      "answer":"B"
   },
   "cystic_fibrosis":{
      "question":"What characterizes cystic fibrosis?",
      "options":{
         "A":"Mucus accumulation in bronchi causing obstruction",
         "B":"Allergic reaction in lungs",
         "C":"Autoimmune lung disease",
         "D":"Viral lung infection"
      },
      "answer":"A"
   },
   "dyspnea":{
      "question":"What is dyspnea?",
      "options":{
         "A":"Rapid breathing",
         "B":"Normal breathing",
         "C":"Difficult or labored breathing",
         "D":"Shallow breathing"
      },
      "answer":"C"
   },
   "influenza":{
      "question":"What is influenza?",
      "options":{
         "A":"Allergic reaction",
         "B":"Bacterial pneumonia",
         "C":"Chronic lung disease",
         "D":"Acute contagious respiratory infection"
      },
      "answer":"D"
   },
   "tuberculosis":{
      "question":"What causes tuberculosis?",
      "options":{
         "A":"Mycobacterium tuberculosis",
         "B":"Fungal infection",
         "C":"Streptococcus bacteria",
         "D":"Influenza virus"
      },
      "answer":"A"
   },
   "antihistaminic":{
      "question":"What do antihistaminic drugs treat?",
      "options":{
         "A":"Allergic and inflammatory reactions",
         "B":"Bacterial infections",
         "C":"Viral infections",
         "D":"Fungal infections"
      },
      "answer":"A"
   },
   "decongestant":{
      "question":"What do decongestants do?",
      "options":{
         "A":"Treat lung infections",
         "B":"Increase nasal secretions",
         "C":"Reduce swelling and mucus in nasal passages",
         "D":"Cause nasal congestion"
      },
      "answer":"C"
   },
   "mucolytic":{
      "question":"What do mucolytic medications do?",
      "options":{
         "A":"Thicken mucus",
         "B":"Break up mucus for easier clearance",
         "C":"Color mucus",
         "D":"Produce more mucus"
      },
      "answer":"B"
  },
});

export { medicalTerminologyComprehensive };