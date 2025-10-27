type Options = Record<string, string>;

interface QuestionItem {
  question: string;
  options: Options;
  answer: string;
}

type MedicalTerminology = Record<string, QuestionItem>;

/**
 * Shuffle an array in-place (Fisher–Yates)
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffle answers and question order
 */
function shuffleQuestions(data: MedicalTerminology): QuestionItem[] {
  // Convert object → array for shuffling questions
  const entries = Object.entries(data);

  // Shuffle questions
  const shuffledQuestions = shuffleArray(entries).map(([key, item]) => {
    // Shuffle answer options
    const optionEntries = Object.entries(item.options);
    const shuffledOptions = shuffleArray(optionEntries);

    const newOptions: Options = {};
    let newAnswer = "";

    shuffledOptions.forEach(([oldKey, text], index) => {
      const newKey = String.fromCharCode(65 + index); // A, B, C, D...
      newOptions[newKey] = text;
      if (oldKey === item.answer) {
        newAnswer = newKey;
      }
    });

    return {
      question: item.question,
      options: newOptions,
      answer: newAnswer,
    };
  });

  return shuffledQuestions;
}















const baseQuestions: MedicalTerminology = {
  "page_1_2": {
    "question": "What is the definition of Microbiology?",
    "options": {
      "A": "The science that deals with the study of macroscopic organisms.",
      "B": "The science that deals with the study of microorganisms, their related activities, and their influences on life.",
      "C": "The science that only studies beneficial applications of microbes.",
      "D": "The science that studies the classification of animals and plants."
    },
    "answer": "B"
  },
  "page_2": {
    "question": "Microbiology serves which other areas?",
    "options": {
      "A": "Only medicine and industry.",
      "B": "Only agriculture and botany.",
      "C": "Science, industry and agriculture.",
      "D": "Philosophy and the arts."
    },
    "answer": "C"
  },
  "page_3": {
    "question": "What is Bacteriology the study of?",
    "options": {
      "A": "Fungi",
      "B": "Bacteria",
      "C": "Viruses",
      "D": "Algae"
    },
    "answer": "B"
  },
  "page_3_2": {
    "question": "What is Mycology the study of?",
    "options": {
      "A": "Algae",
      "B": "Parasites",
      "C": "Bacteria",
      "D": "Fungi"
    },
    "answer": "D"
  },
  "page_3_3": {
    "question": "What is Phycology the study of?",
    "options": {
      "A": "Algae",
      "B": "Fungi",
      "C": "Bacteria",
      "D": "Viruses"
    },
    "answer": "A"
  },
  "page_3_4": {
    "question": "What does Protozoology or Parasitology study?",
    "options": {
      "A": "Only protozoa.",
      "B": "Only helminthes.",
      "C": "Parasites including protozoa, helminthes, and some parasitic insects.",
      "D": "Viruses and prions."
    },
    "answer": "C"
  },
  "page_3_5": {
    "question": "Virology is the study of...",
    "options": {
      "A": "Bacteria and fungi.",
      "B": "Algae and protozoa.",
      "C": "Viruses and virus-like particles such as viroids and prions.",
      "D": "Only infectious diseases."
    },
    "answer": "C"
  },
  "page_4": {
    "question": "Which functional discipline of Microbiology studies host reactions to microorganisms?",
    "options": {
      "A": "Medical Microbiology",
      "B": "Immunology",
      "C": "Veterinary Microbiology",
      "D": "Pharmaceutical Microbiology"
    },
    "answer": "B"
  },
  "page_4_2": {
    "question": "What is Medical Microbiology concerned with?",
    "options": {
      "A": "The development of drugs for microbes.",
      "B": "Roles of microorganisms in infectious diseases in humans.",
      "C": "Animal infectious diseases.",
      "D": "Applications of microorganisms in fermentation."
    },
    "answer": "B"
  },
  "page_4_3": {
    "question": "Which discipline is concerned with the development of drugs and agents for microbial control?",
    "options": {
      "A": "Immunology",
      "B": "Medical Microbiology",
      "C": "Pharmaceutical Microbiology",
      "D": "Biotechnology"
    },
    "answer": "C"
  },
  "page_4_4": {
    "question": "Biotechnology is concerned with the applications of microorganisms in which field especially?",
    "options": {
      "A": "Infectious diseases in humans.",
      "B": "Animal infectious diseases.",
      "C": "Fermentation industries.",
      "D": "Host reactions to microorganisms."
    },
    "answer": "C"
  },
  "page_5": {
    "question": "What is Genetic engineering concerned with?",
    "options": {
      "A": "The study of animal infectious diseases.",
      "B": "The manipulation of microorganisms for the production of valuable human proteins.",
      "C": "Exploring food spoilage and food-born disease.",
      "D": "The distribution and role of microorganisms in the environment."
    },
    "answer": "B"
  },
  "page_5_2": {
    "question": "What technology does genetic engineering utilize for the production of valuable human proteins?",
    "options": {
      "A": "Fermentation technology.",
      "B": "Recombinant DNA technology.",
      "C": "Food spoilage analysis.",
      "D": "Pest control technology."
    },
    "answer": "B"
  },
  "page_5_3": {
    "question": "Which discipline explores food spoilage, food-born disease, and flavors from microbial origin?",
    "options": {
      "A": "Genetic engineering",
      "B": "Microbial Ecology",
      "C": "Food Microbiology",
      "D": "Agricultural Microbiology"
    },
    "answer": "C"
  },
  "page_5_4": {
    "question": "What is Microbial Ecology the study of?",
    "options": {
      "A": "The distribution and role of microorganisms in the environment.",
      "B": "Microbial populations of significance to plant disease.",
      "C": "Production of valuable human proteins.",
      "D": "Food spoilage and food-born disease."
    },
    "answer": "A"
  },
  "page_5_5": {
    "question": "Which discipline deals with microbial populations significant to plant disease, fertilization, and crop improvement?",
    "options": {
      "A": "Food Microbiology",
      "B": "Microbial Ecology",
      "C": "Genetic engineering",
      "D": "Agricultural Microbiology"
    },
    "answer": "D"
  },
  "page_6": {
    "question": "What three areas does the discipline of Taxonomy deal with?",
    "options": {
      "A": "Classification, Identification and Nomenclature (naming).",
      "B": "Bacteriology, Mycology, and Virology.",
      "C": "Morphology, Staining, and Physiology.",
      "D": "Food, Medical, and Agricultural Microbiology."
    },
    "answer": "A"
  },
  "page_6_2": {
    "question": "What is the correct hierarchical order for the Classification of Living Organisms?",
    "options": {
      "A": "Kingdoms, Families, Genera, Species, Classes, Orders.",
      "B": "Kingdoms, Divisions (phylum), Classes, Orders, Families, Genera, then Species.",
      "C": "Species, Genera, Families, Orders, Classes, Kingdoms.",
      "D": "Divisions, Kingdoms, Classes, Families, Orders, Species."
    },
    "answer": "B"
  },
  "page_6_3": {
    "question": "In Linnaeus Classification (1753), what were the two kingdoms all living creatures were classified into?",
    "options": {
      "A": "Kingdom Protista and Kingdom Monera.",
      "B": "Kingdom Animals and Kingdom Plants.",
      "C": "Kingdom Fungi and Kingdom Protista.",
      "D": "Kingdom Bacteria and Kingdom Archaea."
    },
    "answer": "B"
  },
  "page_6_4": {
    "question": "In Haeckel Classification (1865), what separate kingdom were microorganisms grouped into?",
    "options": {
      "A": "Kingdom Fungi.",
      "B": "Kingdom Monera.",
      "C": "Kingdom Protista.",
      "D": "Kingdom Animalia."
    },
    "answer": "C"
  },
  "page_7": {
    "question": "Who proposed the five-kingdom classification system in 1969?",
    "options": {
      "A": "Carlos Linnaeus",
      "B": "Haeckel",
      "C": "Whittaker",
      "D": "Louis Pasteur"
    },
    "answer": "C"
  },
  "page_7_2": {
    "question": "What are the five kingdoms in the Whittaker Classification system?",
    "options": {
      "A": "Animalia, Plantae, Protista, Fungi, and Monera.",
      "B": "Animalia, Plantae, Bacteria, Archaea, and Eukarya.",
      "C": "Animals, Plants, Protista, Bacteria, and Viruses.",
      "D": "Prokaryotes, Eukaryotes, Fungi, Plants, and Animals."
    },
    "answer": "A"
  },
  "page_8": {
    "question": "According to the Whittaker classification, microorganisms occupy how many kingdoms?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Five"
    },
    "answer": "C"
  },
  "page_8_2": {
    "question": "Which kingdom includes protozoa and single-celled algae?",
    "options": {
      "A": "Protista",
      "B": "Fungi",
      "C": "Monera",
      "D": "Animalia"
    },
    "answer": "A"
  },
  "page_8_3": {
    "question": "Which kingdom includes molds and yeasts?",
    "options": {
      "A": "Protista",
      "B": "Fungi",
      "C": "Monera",
      "D": "Plantae"
    },
    "answer": "B"
  },
  "page_8_4": {
    "question": "Which kingdom includes only bacteria (Eubacteria, Archaebacteria and Cyanobacteria)?",
    "options": {
      "A": "Protista",
      "B": "Fungi",
      "C": "Monera",
      "D": "Plantae"
    },
    "answer": "C"
  },
  "page_9": {
    "question": "Who was the first person to see the microbial world using magnifying glasses?",
    "options": {
      "A": "Louis Pasteur",
      "B": "Robert Koch",
      "C": "van Leeuwenhoek",
      "D": "Whittaker"
    },
    "answer": "C"
  },
  "page_9_2": {
    "question": "How much did van Leeuwenhoek's simple microscope magnify objects?",
    "options": {
      "A": "About 300 times",
      "B": "Over 1,000 times",
      "C": "About 100 times",
      "D": "Over 10,000 times"
    },
    "answer": "A"
  },
  "page_9_3": {
    "question": "Who noticed that rod-shaped bacteria were present when lactic acid was produced in wine instead of alcohol?",
    "options": {
      "A": "van Leeuwenhoek",
      "B": "Louis Pasteur",
      "C": "Robert Koch",
      "D": "Carlos Linnaeus"
    },
    "answer": "B"
  },
  "page_9_4": {
    "question": "What did Pasteur believe was responsible for the spoilage of wine (production of lactic acid)?",
    "options": {
      "A": "The yeast",
      "B": "The bacteria",
      "C": "The environment itself",
      "D": "The alcohol"
    },
    "answer": "B"
  },
  "page_11_12": {
    "question": "Who provided the first definitive proof of the germ theory of disease?",
    "options": {
      "A": "Louis Pasteur",
      "B": "van Leeuwenhoek",
      "C": "Robert Koch",
      "D": "Carlos Linnaeus"
    },
    "answer": "C"
  },
  "page_12": {
    "question": "In 1876, Robert Koch showed a relationship between which disease and a bacillus?",
    "options": {
      "A": "Typhoid fever",
      "B": "Tuberculosis",
      "C": "Anthrax",
      "D": "Wine spoilage"
    },
    "answer": "C"
  },
  "page_12_2": {
    "question": "What is the name of the bacillus that Koch identified as related to anthrax?",
    "options": {
      "A": "Bacillus subtilis",
      "B": "Bacillus anthracis",
      "C": "Escherichia coli",
      "D": "Staphylococcus aureus"
    },
    "answer": "B"
  },
  "page_12_3": {
    "question": "What is the definition of a 'bacillus'?",
    "options": {
      "A": "A spherical bacterium",
      "B": "A rod shaped bacterium",
      "C": "A spiral shaped bacterium",
      "D": "A bacterium that forms spores"
    },
    "answer": "B"
  },
  "page_12_4": {
    "question": "What was the outcome when Koch injected healthy mice with spores or bacilli grown in culture from diseased animals?",
    "options": {
      "A": "The mice remained healthy.",
      "B": "The mice developed a different disease.",
      "C": "The mice developed anthrax, and the bacteria were isolated from their blood.",
      "D": "The mice produced antibodies against anthrax."
    },
    "answer": "C"
  },
  "page_12_5": {
    "question": "What name was given to the criteria Koch formalized to prove a causal relationship between a specific disease and a microorganism?",
    "options": {
      "A": "The Germ Theory",
      "B": "Koch's Postulates",
      "C": "The Principles of Microbiology",
      "D": "The Anthrax Criteria"
    },
    "answer": "B"
  },
  "page_13": {
    "question": "In Pasteur's swan-neck flask experiment, why did the liquid remain sterile for months/years?",
    "options": {
      "A": "The liquid was boiled, killing all microbes.",
      "B": "The liquid was allowed to cool, preventing growth.",
      "C": "Dust and microorganisms settled in the bend of the flask neck and couldn't reach the liquid.",
      "D": "The flask was sealed, preventing air from entering."
    },
    "answer": "C"
  },
  "page_13_2": {
    "question": "In Pasteur's experiment, what happened when the flask was tilted, allowing the liquid to contact the deposit in the neck?",
    "options": {
      "A": "The liquid remained sterile.",
      "B": "The liquid turned cloudy due to microbial growth.",
      "C": "The liquid evaporated.",
      "D": "The liquid changed color but remained sterile."
    },
    "answer": "B"
  },
  "page_14": {
    "question": "Which of the following is NOT a basis for classifying and identifying microorganisms?",
    "options": {
      "A": "Morphology (shape, size)",
      "B": "Staining properties",
      "C": "The name of the scientist who discovered it",
      "D": "Nutritional and environmental requirements"
    },
    "answer": "C"
  },
  "page_14_2": {
    "question": "What does 'Morphology' refer to in microbial classification?",
    "options": {
      "A": "Shape, size and arrangement of cells.",
      "B": "Presence or absence of endospores and capsules.",
      "C": "The ability to ferment certain sugars.",
      "D": "Related DNA sequences."
    },
    "answer": "A"
  },
  "page_14_3": {
    "question": "The presence or absence of flagella, endospores, and capsules falls under which classification basis?",
    "options": {
      "A": "Morphology",
      "B": "Staining properties",
      "C": "Fine Structure",
      "D": "Physiology"
    },
    "answer": "C"
  },
  "page_14_4": {
    "question": "Carbon source and oxygen requirement are examples of which classification basis?",
    "options": {
      "A": "Nutritional and environmental requirements.",
      "B": "Physiology.",
      "C": "Biochemical activities.",
      "D": "Genetic relatedness."
    },
    "answer": "A"
  },
  "page_14_5": {
    "question": "What is 'Phage typing' as a classification method?",
    "options": {
      "A": "The ability to ferment certain sugars.",
      "B": "Related DNA sequences within related organisms.",
      "C": "The ability of some viruses to attack related organisms.",
      "D": "Related antigenic proteins in related organisms."
    },
    "answer": "C"
  },
  "page_15": {
    "question": "Which of the following are Eucaryotic microorganisms?",
    "options": {
      "A": "Fungi, Single cell Algae and Protozoa.",
      "B": "Eubacteria and Cyanobacteria.",
      "C": "Only Eubacteria.",
      "D": "Only Fungi."
    },
    "answer": "A"
  },
  "page_15_2": {
    "question": "What were the two traditional divisions of Procaryotic Microorganisms?",
    "options": {
      "A": "Fungi and Protozoa.",
      "B": "The bacteria (Eubacteria) and Cynobacteria (blue green algae).",
      "C": "Algae and Fungi.",
      "D": "Eubacteria and Archaebacteria."
    },
    "answer": "B"
  },
  "page_15_3": {
    "question": "What are Eubacteria?",
    "options": {
      "A": "Aerobic photosynthetic bacteria.",
      "B": "True Bacteria, which constitute the bulk of procaryotes.",
      "C": "Eukaryotic microorganisms.",
      "D": "Once classified as algae."
    },
    "answer": "B"
  },
  "page_15_4": {
    "question": "What are Cynobacteria (blue green algae)?",
    "options": {
      "A": "Eukaryotic microorganisms.",
      "B": "True Bacteria.",
      "C": "Aerobic photosynthetic bacteria that were once classified as algae.",
      "D": "Protozoa."
    },
    "answer": "C"
  },
  "page_16": {
    "question": "What system is used for the Nomenclature (naming) of microorganisms?",
    "options": {
      "A": "The Whittaker Binomial System",
      "B": "The Linnaeus Binomial System",
      "C": "The Haeckel Classification System",
      "D": "The Koch Taxonomic System"
    },
    "answer": "B"
  },
  "page_16_2": {
    "question": "According to the Linnaeus Binomial System, each organism is given two names. What are they?",
    "options": {
      "A": "The kingdom name and the species name.",
      "B": "The family name and the genus name.",
      "C": "The genus name (a general name), and species name (a specific name).",
      "D": "The class name and the order name."
    },
    "answer": "C"
  },
  "page_16_3": {
    "question": "In the name *Staphylococcus aureus*, what does 'Staphyle' mean?",
    "options": {
      "A": "Grape bunch",
      "B": "Sphere",
      "C": "Golden",
      "D": "Rod-shaped"
    },
    "answer": "A"
  },
  "page_16_4": {
    "question": "In the name *Staphylococcus aureus*, what does 'coccus' mean?",
    "options": {
      "A": "Grape bunch",
      "B": "Sphere",
      "C": "Golden",
      "D": "Rod-shaped"
    },
    "answer": "B"
  },
  "page_16_5": {
    "question": "In the name *Staphylococcus aureus*, what does 'aur' mean?",
    "options": {
      "A": "Grape bunch",
      "B": "Sphere",
      "C": "Golden",
      "D": "Rod-shaped"
    },
    "answer": "C"
  },
  "page_16_6": {
    "question": "What do *Staphylococcus aureus* colonies look like on solid culture media?",
    "options": {
      "A": "Golden yellow colonies.",
      "B": "Purple colonies.",
      "C": "Transparent colonies.",
      "D": "Green colonies."
    },
    "answer": "A"
  },
  "page_17": {
    "question": "The bacterium *Salmonella typhi* was named after whom?",
    "options": {
      "A": "The disease it causes (Typhoid fever).",
      "B": "The microbiologist Salmon.",
      "C": "The location it was discovered.",
      "D": "Its golden appearance."
    },
    "answer": "B"
  },
  "page_17_2": {
    "question": "In *Salmonella typhi*, what does 'typhi' stand for?",
    "options": {
      "A": "The microbiologist who discovered it.",
      "B": "The disease typhoid fever.",
      "C": "The shape of the bacterium.",
      "D": "The family it belongs to."
    },
    "answer": "B"
  },
  "page_17_3": {
    "question": "Which of the following is a correct rule for writing binomial names?",
    "options": {
      "A": "The first letter of the genus name is capitalized, but not that of the species name.",
      "B": "Both genus and species names are capitalized.",
      "C": "Only the species name is capitalized.",
      "D": "Neither name is capitalized."
    },
    "answer": "A"
  },
  "page_17_4": {
    "question": "How should genus and species names be formatted in text?",
    "options": {
      "A": "Only bolded.",
      "B": "Only in quotes.",
      "C": "Either underlined or italicized.",
      "D": "In all capital letters."
    },
    "answer": "C"
  },
  "page_18": {
    "question": "What is a major difference between a Prokaryotic cell and a Eukaryotic cell regarding the nucleus?",
    "options": {
      "A": "Prokaryotes have a defined nucleus, Eukaryotes do not.",
      "B": "Prokaryotes have a nuclear membrane, Eukaryotes do not.",
      "C": "Prokaryotes lack a defined nucleus and nuclear membrane, while Eukaryotes have both.",
      "D": "Both have a defined nucleus, but the prokaryotic one is smaller."
    },
    "answer": "C"
  },
  "page_18_2": {
    "question": "Are histone proteins present in Prokaryotic cells?",
    "options": {
      "A": "Yes, they are present.",
      "B": "No, they are absent.",
      "C": "Only in some prokaryotes.",
      "D": "Only during cell division."
    },
    "answer": "B"
  },
  "page_18_3": {
    "question": "How do the chromosomes differ between Prokaryotic and Eukaryotic cells?",
    "options": {
      "A": "Prokaryotes have multiple/linear, Eukaryotes have single/circular.",
      "B": "Prokaryotes have single/circular, Eukaryotes have multiple/linear.",
      "C": "Both have single/circular chromosomes.",
      "D": "Both have multiple/linear chromosomes."
    },
    "answer": "B"
  },
  "page_18_4": {
    "question": "What is the sedimentation coefficient of ribosomes in Prokaryotic cells?",
    "options": {
      "A": "70S",
      "B": "80S",
      "C": "30S",
      "D": "50S"
    },
    "answer": "A"
  },
  "page_18_5": {
    "question": "Is the Endoplasmic Reticulum (ER) present in Prokaryotic cells?",
    "options": {
      "A": "Yes, it is present.",
      "B": "No, it is absent.",
      "C": "Only the smooth ER is present.",
      "D": "Only the rough ER is present."
    },
    "answer": "B"
  },
  "page_18_6": {
    "question": "What is the typical cell wall component in Prokaryotes (Eubacteria)?",
    "options": {
      "A": "Chitin/Cellulose",
      "B": "Peptidoglycan",
      "C": "It is always absent.",
      "D": "Lipopolysaccharide"
    },
    "answer": "B"
  },
  "page_18_7": {
    "question": "Where is respiration associated in Prokaryotic cells?",
    "options": {
      "A": "Mitochondrial membrane",
      "B": "Cytoplasmic membrane",
      "C": "Nucleus",
      "D": "Ribosomes"
    },
    "answer": "B"
  },
  "page_20": {
    "question": "What are the two basic morphological forms of Fungi?",
    "options": {
      "A": "Bacteria and Viruses",
      "B": "Mold (filamentous fungi) and Yeast (oval cells).",
      "C": "Hyphae and Mycelia.",
      "D": "Algae and Protozoa."
    },
    "answer": "B"
  },
  "page_20_2": {
    "question": "Fungi are what type of microorganisms?",
    "options": {
      "A": "Prokaryotic",
      "B": "Eukaryotic",
      "C": "Archaebacteria",
      "D": "Cyanobacteria"
    },
    "answer": "B"
  },
  "page_20_3": {
    "question": "What sterol is inserted in the cytoplasmic membranes of fungi?",
    "options": {
      "A": "Cholesterol",
      "B": "Ergosterols",
      "C": "Peptidoglycan",
      "D": "Chitin"
    },
    "answer": "B"
  },
  "page_20_4": {
    "question": "What are the cell walls of fungi made of?",
    "options": {
      "A": "Peptidoglycan",
      "B": "Cellulose",
      "C": "Polymers of N-acetyl-glucosamine known as chitin.",
      "D": "Ergosterols."
    },
    "answer": "C"
  },
  "page_21": {
    "question": "Molds are made of long filamentous cells known as what?",
    "options": {
      "A": "Mycelia",
      "B": "Hypae",
      "C": "Spores",
      "D": "Yeasts"
    },
    "answer": "B"
  },
  "page_21_2": {
    "question": "What is the extensive interwoven mat of filaments formed by growing hyphae called?",
    "options": {
      "A": "Mycelia (Single: mycelium).",
      "B": "Spores.",
      "C": "Yeast buds.",
      "D": "Chitin."
    },
    "answer": "A"
  },
  "page_21_3": {
    "question": "What is the difference between aerial mycelia and vegetative mycelia?",
    "options": {
      "A": "Aerial mycelia absorb nutrients, while vegetative mycelia carry spores.",
      "B": "Aerial mycelia are under the surface, while vegetative mycelia are above the surface.",
      "C": "Aerial mycelia carry reproductive spores, while vegetative mycelia absorb nutrients.",
      "D": "There is no difference; the terms are interchangeable."
    },
    "answer": "C"
  },
  "page_24": {
    "question": "What are 'septa' in fungi?",
    "options": {
      "A": "Reproductive spores.",
      "B": "Cross-walls found in the hyphae of some fungi.",
      "C": "The oval cells of yeasts.",
      "D": "The scars left by budding."
    },
    "answer": "B"
  },
  "page_24_2": {
    "question": "A fungus that has septa is described as...",
    "options": {
      "A": "Septate",
      "B": "Aseptate",
      "C": "A mold",
      "D": "A yeast"
    },
    "answer": "A"
  },
  "page_24_3": {
    "question": "Fungal colonies are also known as...",
    "options": {
      "A": "Hyphae (single = hypha)",
      "B": "Mycelia (single = mycelium)",
      "C": "Thalli (single = thallus)",
      "D": "Septa (single = septum)"
    },
    "answer": "C"
  },
  "page_24_4": {
    "question": "How do yeasts, which are oval unicellular fungi, typically reproduce?",
    "options": {
      "A": "By forming septa.",
      "B": "By sexual spores only.",
      "C": "By asexual means, especially budding.",
      "D": "By forming filamentous hyphae."
    },
    "answer": "C"
  },
  "page_24_5": {
    "question": "What are the asexual spores (conidia) produced by budding in *Candida albicans* known as?",
    "options": {
      "A": "Blastospores",
      "B": "Birth scars",
      "C": "Septa",
      "D": "Thalli"
    },
    "answer": "A"
  },
  "page_24_6": {
    "question": "What gives *Candida albicans* its common pseudohyphae shape?",
    "options": {
      "A": "The formation of septa between cells.",
      "B": "The blastospores may not detach from each other and elongate.",
      "C": "The formation of aerial mycelia.",
      "D": "The presence of a birth scar."
    },
    "answer": "B"
  },
  "page_26": {
    "question": "Fungi reproduce by which types of spores?",
    "options": {
      "A": "Asexual spores only.",
      "B": "Sexual spores only.",
      "C": "Asexual and/or sexual spores.",
      "D": "Neither; they reproduce by budding only."
    },
    "answer": "C"
  },
  "page_26_2": {
    "question": "What is the most common type of multiplication during rapid growth of fungi?",
    "options": {
      "A": "Asexual reproduction by formation of conidia.",
      "B": "Sexual reproduction.",
      "C": "Budding.",
      "D": "Septa formation."
    },
    "answer": "A"
  },
  "page_26_3": {
    "question": "What are 'conidiophores'?",
    "options": {
      "A": "Asexual spores.",
      "B": "Specialized structures of hyphae that carry conidia (asexual spores).",
      "C": "Sexual spores.",
      "D": "The nuclei of fungi."
    },
    "answer": "B"
  },
  "page_26_4": {
    "question": "The nuclei of fungi are typically...",
    "options": {
      "A": "Haploid (one copy of each chromosome).",
      "B": "Diploid (two copies of each chromosome).",
      "C": "Polyploid (many copies of each chromosome).",
      "D": "Absent."
    },
    "answer": "A"
  },
  "page_27": {
    "question": "In humans, fungi mainly cause what type of infections frequently?",
    "options": {
      "A": "Systemic infections.",
      "B": "Cutaneous (skin) infections.",
      "C": "No infections, they are only beneficial.",
      "D": "Infections in animals and plants only."
    },
    "answer": "B"
  },
  "page_27_2": {
    "question": "What are 'aflatoxins'?",
    "options": {
      "A": "Ergot alkaloids.",
      "B": "Psychotropic toxins like LSD.",
      "C": "Carcinogenic and hepatotoxic (liver-damaging) toxins produced by fungi.",
      "D": "Beneficial proteins produced by fungi."
    },
    "answer": "C"
  },
  "page_27_3": {
    "question": "LSD is an example of what type of fungal toxin?",
    "options": {
      "A": "Ergot alkaloids.",
      "B": "Psychotropic toxins.",
      "C": "Aflatoxins.",
      "D": "Cutaneous toxins."
    },
    "answer": "B"
  },
  "page_28": {
    "question": "Algae are what type of organisms?",
    "options": {
      "A": "Eukaryotic non-photosynthetic organisms.",
      "B": "Eukaryotic photosynthetic organisms.",
      "C": "Prokaryotic photosynthetic organisms.",
      "D": "Prokaryotic non-photosynthetic organisms."
    },
    "answer": "B"
  },
  "page_28_2": {
    "question": "What is 'phytoplankton'?",
    "options": {
      "A": "Wandering microscopic algae that move with wind and currents.",
      "B": "Large algae that form trees.",
      "C": "Toxic algae.",
      "D": "Fungi that live in water."
    },
    "answer": "A"
  },
  "page_28_3": {
    "question": "What are the cell walls of algae mainly made of?",
    "options": {
      "A": "Chitin",
      "B": "Peptidoglycan",
      "C": "Cellulose",
      "D": "Ergosterols"
    },
    "answer": "C"
  },
  "page_28_4": {
    "question": "What substance do many algae use to carry out photosynthesis?",
    "options": {
      "A": "Chlorophyll a",
      "B": "Chitin",
      "C": "Cellulose",
      "D": "Alginic acid"
    },
    "answer": "A"
  },
  "page_28_5": {
    "question": "Are algae motile?",
    "options": {
      "A": "No, they are all stationary.",
      "B": "Yes, many are motile by means of flagella.",
      "C": "Yes, but only by amoeboid motility.",
      "D": "Yes, but only by cilia."
    },
    "answer": "B"
  },
  "page_29": {
    "question": "What are Protozoa?",
    "options": {
      "A": "Eukaryotic, photosynthetic, single-celled organisms.",
      "B": "Eukaryotic, non-photosynthetic, single-celled organisms.",
      "C": "Prokaryotic, photosynthetic organisms.",
      "D": "Prokaryotic, non-photosynthetic organisms."
    },
    "answer": "B"
  },
  "page_29_2": {
    "question": "What is a key structural characteristic of Protozoa?",
    "options": {
      "A": "They have cell walls made of cellulose.",
      "B": "They have cell walls made of chitin.",
      "C": "They have no cell walls.",
      "D": "They have cell walls made of peptidoglycan."
    },
    "answer": "C"
  },
  "page_29_3": {
    "question": "How do many Protozoa move?",
    "options": {
      "A": "Only by flagella.",
      "B": "By amoeboid motility, or by cilia or flagella.",
      "C": "They do not move.",
      "D": "Only by cilia."
    },
    "answer": "B"
  },
  "page_29_4": {
    "question": "How do Protozoa feed?",
    "options": {
      "A": "Only by photosynthesis.",
      "B": "Only by absorbing soluble nutrients.",
      "C": "By ingestion of particles (endocytosis) and by absorbing soluble nutrients.",
      "D": "They do not feed."
    },
    "answer": "C"
  },
  "page_29_5": {
    "question": "How do Protozoa reproduce?",
    "options": {
      "A": "By sexual as well as asexual (multiple fission or schizogony) means.",
      "B": "Only by sexual means.",
      "C": "Only by asexual means.",
      "D": "By budding only."
    },
    "answer": "A"
  },
  "page_31": {
    "question": "Which protozoan in the diagram is shown moving with cilia?",
    "options": {
      "A": "Amoeba",
      "B": "Euglena",
      "C": "Paramecium",
      "D": "Plasmodium"
    },
    "answer": "C"
  },
  "page_31_2": {
    "question": "Which organism in the diagram moves using pseudopodia?",
    "options": {
      "A": "Amoeba",
      "B": "Paramecium",
      "C": "Vorticella",
      "D": "Chlamydomonas"
    },
    "answer": "A"
  },
  "page_31_3": {
    "question": "Which organism in the diagram is shown moving with a flagellum?",
    "options": {
      "A": "Euglena",
      "B": "Amoeba",
      "C": "Paramecium",
      "D": "Plasmodium"
    },
    "answer": "A"
  },
  "page_31_4": {
    "question": "The groups Sarcodina, Mastigophora, Ciliophora, and Apicomplexa are examples of what?",
    "options": {
      "A": "Fungi",
      "B": "Bacteria",
      "C": "Algae",
      "D": "Protozoa"
    },
    "answer": "D"
  },
  "page_31_5": {
    "question": "What organism is shown inside red blood cells?",
    "options": {
      "A": "Amoeba",
      "B": "Paramecium",
      "C": "Plasmodium",
      "D": "Euglena"
    },
    "answer": "C"
  },
  "page_32": {
    "question": "What is the name of the well-accepted protocol for the classification of bacteria?",
    "options": {
      "A": "Koch's Manual of Systemic Bacteriology",
      "B": "Pasteur's Manual of Systemic Bacteriology",
      "C": "Bergey's manual of systemic bacteriology",
      "D": "Linnaeus' Manual of Systemic Bacteriology"
    },
    "answer": "C"
  },
  "page_32_2": {
    "question": "Did recent editions of Bergey's manual continue to use the traditional taxonomy of kingdom, phylum, class, etc.?",
    "options": {
      "A": "Yes, they expanded on this system.",
      "B": "No, they abandoned this extremely difficult taxonomic approach.",
      "C": "They only use kingdom and phylum.",
      "D": "They only use family, genus, and species."
    },
    "answer": "B"
  },
  "page_32_3": {
    "question": "Instead of the traditional hierarchy, recent editions of Bergey's manual classified bacteria into what?",
    "options": {
      "A": "19 different parts",
      "B": "5 kingdoms",
      "C": "3 domains",
      "D": "10 groups"
    },
    "answer": "A"
  },
  "page_32_4": {
    "question": "What was the classification into 19 parts based on?",
    "options": {
      "A": "Complex genetic relationships only.",
      "B": "Fewer, well-established characteristics among members of each part.",
      "C": "Their location in the human body.",
      "D": "The scientist who discovered them."
    },
    "answer": "B"
  },
  "page_33": {
    "question": "In the 19-group classification from Bergey's Manual (Eighth Edition), which group uses light as an energy source?",
    "options": {
      "A": "Phototrophic bacteria",
      "B": "Gliding bacteria",
      "C": "Spirochetes",
      "D": "Chemolithotropic bacteria"
    },
    "answer": "A"
  },
  "page_33_2": {
    "question": "Which bacterial group is described as 'motile without flagella; they glide'?",
    "options": {
      "A": "Phototrophic bacteria",
      "B": "Gliding bacteria",
      "C": "Spirochetes",
      "D": "Sheathed bacteria"
    },
    "answer": "B"
  },
  "page_33_3": {
    "question": "Which bacterial group is described as 'tightly coiled spiral cells'?",
    "options": {
      "A": "Spirochetes",
      "B": "Spiral and curved bacteria",
      "C": "Gliding bacteria",
      "D": "Actinomycetes"
    },
    "answer": "A"
  },
  "page_33_4": {
    "question": "Which bacterial group is described as 'rock-eating bacteria'?",
    "options": {
      "A": "Methanogenic bacteria",
      "B": "Rickettsias",
      "C": "Mycoplasmas",
      "D": "Chemolithotropic bacteria"
    },
    "answer": "D"
  },
  "page_33_5": {
    "question": "What are Methanogenic bacteria?",
    "options": {
      "A": "Methane-producers",
      "B": "Rock-eating bacteria",
      "C": "Tightly coiled spiral cells",
      "D": "Use light as energy source"
    },
    "answer": "A"
  },
  "page_34": {
    "question": "Which bacterial group is described as 'branching bacteria'?",
    "options": {
      "A": "Rickettsias",
      "B": "Mycoplasmas",
      "C": "Actinomycetes and related organisms",
      "D": "Gram positive cocci"
    },
    "answer": "C"
  },
  "page_34_2": {
    "question": "Which bacterial group is described as 'obligate intracellular bacteria, cause arthropod-born diseases'?",
    "options": {
      "A": "Rickettsias",
      "B": "Mycoplasmas",
      "C": "Actinomycetes",
      "D": "Endospore-forming rods and cocci"
    },
    "answer": "A"
  },
  "page_34_3": {
    "question": "Which bacterial group is described as 'cell wall-less bacteria'?",
    "options": {
      "A": "Rickettsias",
      "B": "Mycoplasmas",
      "C": "Actinomycetes",
      "D": "Spirochetes"
    },
    "answer": "B"
  },
  "page_35": {
    "question": "What are Cyanobacteria?",
    "options": {
      "A": "Photoautotrophic bacteria which release oxygen during their photosynthesis.",
      "B": "Bacteria that are tolerant to extremely harsh environmental conditions.",
      "C": "Cell wall-less bacteria.",
      "D": "Methane-producing bacteria."
    },
    "answer": "A"
  },
  "page_35_2": {
    "question": "Where do cyanobacteria contain the enzymes and pigment (chlorophyll) for photosynthesis?",
    "options": {
      "A": "In the cytoplasm.",
      "B": "In the nucleus.",
      "C": "In specialized membrane-bound structures.",
      "D": "In the cell wall."
    },
    "answer": "C"
  },
  "page_35_3": {
    "question": "What type of cyanobacteria is being used as an animal food supplement?",
    "options": {
      "A": "Anabaena",
      "B": "Gleocapsa",
      "C": "Spirulina",
      "D": "All cyanobacteria are toxic."
    },
    "answer": "C"
  },
  "page_35_4": {
    "question": "How do cyanobacteria contribute to soil fertility?",
    "options": {
      "A": "They are toxic to pests.",
      "B": "They metabolize and release organic matters useful to plants.",
      "C": "They are a food supplement.",
      "D": "They tolerate extreme environments."
    },
    "answer": "B"
  },
  "page_36": {
    "question": "Which groups are included in Archaebacteria?",
    "options": {
      "A": "Thermo-acidophils, extreme halophils and methanogens.",
      "B": "Cyanobacteria and Eubacteria.",
      "C": "Rickettsias and Mycoplasmas.",
      "D": "Gram-positive and Gram-negative bacteria."
    },
    "answer": "A"
  },
  "page_36_2": {
    "question": "What does 'halophilic' mean?",
    "options": {
      "A": "Tolerates high temperature.",
      "B": "Tolerates acidic pH.",
      "C": "Tolerates very high salt concentration.",
      "D": "Produces methane."
    },
    "answer": "C"
  },
  "page_36_3": {
    "question": "What does 'acidophilic' mean?",
    "options": {
      "A": "Tolerates high temperature.",
      "B": "Tolerates acidic pH.",
      "C": "Tolerates very high salt concentration.",
      "D": "Produces methane."
    },
    "answer": "B"
  },
  "page_36_4": {
    "question": "What does 'thermophilic' mean?",
    "options": {
      "A": "Tolerates high temperature.",
      "B": "Tolerates acidic pH.",
      "C": "Tolerates very high salt concentration.",
      "D": "Produces methane."
    },
    "answer": "A"
  },
  "page_36_5": {
    "question": "What does 'methanogenic' mean?",
    "options": {
      "A": "Tolerates high temperature.",
      "B": "Tolerates acidic pH.",
      "C": "Tolerates very high salt concentration.",
      "D": "Can generate methane from carbon dioxide and hydrogen gas."
    },
    "answer": "D"
  },
  "page_37": {
    "question": "What is a key difference in the cell wall composition between Eubacteria and Archaebacteria?",
    "options": {
      "A": "Eubacteria have Peptidoglycan; Archaebacteria have Protein or Polysaccharides.",
      "B": "Eubacteria have Protein or Polysaccharides; Archaebacteria have Peptidoglycan.",
      "C": "Both have Peptidoglycan.",
      "D": "Both have Protein or Polysaccharides."
    },
    "answer": "A"
  },
  "page_37_2": {
    "question": "Is N-acetyl muramic acid present in the cell wall of Archaebacteria?",
    "options": {
      "A": "Yes, it is present.",
      "B": "No, it is absent.",
      "C": "Only in thermophiles.",
      "D": "Only in methanogens."
    },
    "answer": "B"
  },
  "page_37_3": {
    "question": "How do the membrane lipids differ between Eubacteria and Archaebacteria?",
    "options": {
      "A": "Eubacteria have Ether-linked fatty acids; Archaebacteria have Ester-linked fatty acids.",
      "B": "Eubacteria have Ester-linked fatty acids; Archaebacteria have Ether-linked fatty acids.",
      "C": "Both have Ether-linked fatty acids.",
      "D": "Both have Ester-linked fatty acids."
    },
    "answer": "B"
  },
  "page_37_4": {
    "question": "What is the structure of the lipids in Eubacteria vs. Archaebacteria?",
    "options": {
      "A": "Eubacteria have branched chains; Archaebacteria have straight chains.",
      "B": "Eubacteria have straight chains; Archaebacteria have branched chains.",
      "C": "Both have straight chains.",
      "D": "Both have branched chains."
    },
    "answer": "B"
  },
  "page_39": {
    "question": "What are the two basic shapes bacteria exist in?",
    "options": {
      "A": "Spheres (cocci) and rods (bacilli).",
      "B": "Spirals and squares.",
      "C": "Cocci and spirals.",
      "D": "Rods and clubs."
    },
    "answer": "A"
  },
  "page_39_2": {
    "question": "A spherical bacterium is called a...",
    "options": {
      "A": "Coccus (plural: cocci).",
      "B": "Bacillus (plural: bacilli).",
      "C": "Spirillum",
      "D": "Vibrio"
    },
    "answer": "A"
  },
  "page_39_3": {
    "question": "A rod-shaped bacterium is sometimes called a...",
    "options": {
      "A": "Coccus",
      "B": "Bacillus",
      "C": "Spirochaete",
      "D": "Vibrio"
    },
    "answer": "B"
  },
  "page_39_4": {
    "question": "Why is shape considered a very important identification criterion for bacteria?",
    "options": {
      "A": "Because it is a constant, highly conserved heritable character.",
      "B": "Because it changes depending on the environment.",
      "C": "Because all bacteria have the same shape.",
      "D": "Because it tells you if the bacteria is pathogenic."
    },
    "answer": "A"
  },
  "page_40": {
    "question": "A comma-shaped rod is known as a...",
    "options": {
      "A": "Spirillum",
      "B": "Spirochaete",
      "C": "Vibrio",
      "D": "Cocco-bacillus"
    },
    "answer": "C"
  },
  "page_40_2": {
    "question": "A relaxed-coil spiral rod is known as a...",
    "options": {
      "A": "Spirillum",
      "B": "Spirochaete",
      "C": "Vibrio",
      "D": "Fusiform rod"
    },
    "answer": "A"
  },
  "page_40_3": {
    "question": "A tight-coil spiral or helical rod is known as a...",
    "options": {
      "A": "Spirillum",
      "B": "Spirochaete",
      "C": "Vibrio",
      "D": "Cocco-bacillus"
    },
    "answer": "B"
  },
  "page_40_4": {
    "question": "A rod with pointed-ends is known as a...",
    "options": {
      "A": "Club-shaped rod",
      "B": "Square-end rod",
      "C": "Cocco-bacillus rod",
      "D": "Fusiform rod"
    },
    "answer": "D"
  },
  "page_40_5": {
    "question": "When is the typical morphology of bacteria best seen?",
    "options": {
      "A": "In older cells from the stationary stage.",
      "B": "In younger cells.",
      "C": "In dead cells.",
      "D": "After the cells have lysed."
    },
    "answer": "B"
  },
  "page_40_6": {
    "question": "When are the *established* morphologies of bacteria usually taken for identification?",
    "options": {
      "A": "From cells in the stationary stage of bacterial growth.",
      "B": "From actively dividing younger cells.",
      "C": "From cells in the death phase.",
      "D": "From cells that have lysed."
    },
    "answer": "A"
  },
  "page_41_42": {
    "question": "Why can old bacterial cultures NOT be reliably used for establishing morphology?",
    "options": {
      "A": "Because they are too young.",
      "B": "Because they undergo drastic morphological alterations or lyse due to nutrient depletion and toxic waste.",
      "C": "Because they form characteristic arrangements.",
      "D": "Because they divide too quickly."
    },
    "answer": "B"
  },
  "page_42": {
    "question": "What determines the characteristic arrangement of bacterial cells (e.g., chains, clusters)?",
    "options": {
      "A": "The age of the cells.",
      "B": "The shape of the cells (coccus or rod).",
      "C": "The plane of division and whether daughter cells detach or remain attached.",
      "D": "The type of staining dye used."
    },
    "answer": "C"
  },
  "page_44": {
    "question": "Bacterial cells carry what net charge on their surfaces?",
    "options": {
      "A": "Net negative charges.",
      "B": "Net positive charges.",
      "C": "Net neutral charge.",
      "D": "It varies by species."
    },
    "answer": "A"
  },
  "page_44_2": {
    "question": "Because of their surface charge, bacterial cells usually stain easier with what type of dyes?",
    "options": {
      "A": "Acidic (anionic, negatively charged) dyes.",
      "B": "Basic (cationic, positively charged) dyes.",
      "C": "Neutral dyes.",
      "D": "Rosaniline dyes."
    },
    "answer": "B"
  },
  "page_44_3": {
    "question": "Crystal violet, safranin, basic fuchsin, and methylene blue are all examples of what?",
    "options": {
      "A": "Acidic dyes",
      "B": "Basic rosanilines.",
      "C": "Decolorizing agents.",
      "D": "Mordants."
    },
    "answer": "B"
  },
  "page_44_4": {
    "question": "What is a 'simple stain' technique?",
    "options": {
      "A": "A multi-step procedure using two dyes.",
      "B": "A technique that stains different bacteria with different colors.",
      "C": "A technique where a smear is stained with a single dye, and all cells acquire the same color.",
      "D": "A technique used only for Gram staining."
    },
    "answer": "C"
  },
  "page_44_5": {
    "question": "What is the purpose of a simple stain?",
    "options": {
      "A": "To differentiate between Gram-positive and Gram-negative bacteria.",
      "B": "To enhance the recognition of bacterial shapes under the light microscope.",
      "C": "To identify acid-fast bacteria.",
      "D": "To see endospores."
    },
    "answer": "B"
  },
  "page_45": {
    "question": "What is a 'differential stain'?",
    "options": {
      "A": "A procedure that stains all cells the same color.",
      "B": "A procedure that stains different types of bacteria with different colors after a multi-step procedure.",
      "C": "A procedure that uses only one dye.",
      "D": "A procedure used only to see bacterial shape."
    },
    "answer": "B"
  },
  "page_45_2": {
    "question": "What two steps are essential in a differential stain procedure?",
    "options": {
      "A": "One dye and a heating step.",
      "B": "Two differently colored dyes and a decolorization step.",
      "C": "A basic dye and an acidic dye.",
      "D": "A simple stain and a negative stain."
    },
    "answer": "B"
  },
  "page_45_3": {
    "question": "Which of the following is NOT listed as a recognized differential stain?",
    "options": {
      "A": "Gram stain",
      "B": "Acid-fast (or Zhiel-Neelsen) stain",
      "C": "Spore stain",
      "D": "Simple stain"
    },
    "answer": "D"
  },
  "page_47": {
    "question": "*Corynebacterium* is given as an example of which bacterial morphology?",
    "options": {
      "A": "Straight rod",
      "B": "Club-shaped rod",
      "C": "Branching rod",
      "D": "Spore forming rod"
    },
    "answer": "B"
  },
  "page_47_2": {
    "question": "*Actinomyces* is given as an example of which bacterial morphology?",
    "options": {
      "A": "Straight rod",
      "B": "Club-shaped rod",
      "C": "Branching rod",
      "D": "Comma forms"
    },
    "answer": "C"
  },
  "page_47_3": {
    "question": "*Bacillus* is given as an example of which bacterial morphology?",
    "options": {
      "A": "Straight rod",
      "B": "Comma forms",
      "C": "Spore forming rod",
      "D": "Spiral forms"
    },
    "answer": "C"
  },
  "page_47_4": {
    "question": "Cocci that divide in one plane and form a chain are exemplified by which genus?",
    "options": {
      "A": "Neisseria (Diplococci)",
      "B": "Streptococcus (Chain)",
      "C": "Sarcina (Tetrad)",
      "D": "Staphylococcus (Cluster)"
    },
    "answer": "B"
  },
  "page_47_5": {
    "question": "Cocci that divide in three planes to form a cube-like group are exemplified by which genus?",
    "options": {
      "A": "Neisseria (Diplococci)",
      "B": "Streptococcus (Chain)",
      "C": "Sarcina",
      "D": "Staphylococcus (Cluster)"
    },
    "answer": "C"
  },
  "page_47_6": {
    "question": "Cocci that divide in multiple planes to form a grape-like cluster are exemplified by which genus?",
    "options": {
      "A": "Neisseria (Diplococci)",
      "B": "Streptococcus (Chain)",
      "C": "Sarcina",
      "D": "Staphylococcus (Cluster)"
    },
    "answer": "D"
  },
  "page_48": {
    "question": "Who developed the Gram-stain procedure?",
    "options": {
      "A": "Robert Koch",
      "B": "Louis Pasteur",
      "C": "Christian Gram",
      "D": "Carlos Linnaeus"
    },
    "answer": "C"
  },
  "page_48_2": {
    "question": "In the Gram stain, what is the function of iodine?",
    "options": {
      "A": "It is the primary stain.",
      "B": "It is a mordant (or fixative) that forms a complex with gentian violet.",
      "C": "It is the decolorizing agent.",
      "D": "It is the counter-stain."
    },
    "answer": "B"
  },
  "page_48_3": {
    "question": "What is the decolorizing agent used in the Gram stain?",
    "options": {
      "A": "Iodine solution",
      "B": "Acetone-alcohol mixture",
      "C": "Safranin",
      "D": "Crystal violet"
    },
    "answer": "B"
  },
  "page_48_4": {
    "question": "What is the reason for the difference in decolorization between bacterial types?",
    "options": {
      "A": "Differences in their outer envelopes (especially cell walls).",
      "B": "Differences in their DNA.",
      "C": "Differences in their ribosomes.",
      "D": "Differences in their shape."
    },
    "answer": "A"
  },
  "page_49": {
    "question": "After the decolorization step, what color are the cells that will become 'Gram-negative'?",
    "options": {
      "A": "Purple",
      "B": "Colorless",
      "C": "Red",
      "D": "Blue"
    },
    "answer": "B"
  },
  "page_49_2": {
    "question": "What is the counter-stain dye mentioned in the text?",
    "options": {
      "A": "Crystal violet",
      "B": "Iodine",
      "C": "The red colored Safranin dye.",
      "D": "Acetone-alcohol."
    },
    "answer": "C"
  },
  "page_49_3": {
    "question": "At the end of the Gram stain procedure, what color are the 'Gram-positive' bacteria?",
    "options": {
      "A": "Red-pink",
      "B": "Purple-blue",
      "C": "Colorless",
      "D": "Green"
    },
    "answer": "B"
  },
  "page_49_4": {
    "question": "At the end of the Gram stain procedure, what color are the 'Gram-negative' bacteria?",
    "options": {
      "A": "Red-pink",
      "B": "Purple-blue",
      "C": "Colorless",
      "D": "Green"
    },
    "answer": "A"
  },
  "page_51": {
    "question": "Why can't some bacteria, like Mycobacteria, be stained efficiently by the routine Gram stain procedure?",
    "options": {
      "A": "Due to the high lipid content (fatty mycolic acids) of their cell envelope.",
      "B": "Because they are Gram-positive.",
      "C": "Because they lack a cell wall.",
      "D": "Because they are too small to see."
    },
    "answer": "A"
  },
  "page_51_2": {
    "question": "What are bacteria like Mycobacteria called due to their resistance to staining?",
    "options": {
      "A": "Gram-resistant",
      "B": "Acid-fast (fast = resistant)",
      "C": "Non-stainable",
      "D": "Lipid-bacteria"
    },
    "answer": "B"
  },
  "page_51_3": {
    "question": "How is the dye (basic Fuchsin) forced to permeate Acid-fast bacteria?",
    "options": {
      "A": "By adding alcohol and iodine.",
      "B": "By heating the dye during staining and including phenol (carbolic acid) in the dye solution.",
      "C": "By letting the stain sit for 24 hours.",
      "D": "By using a counter-stain first."
    },
    "answer": "B"
  },
  "page_51_4": {
    "question": "What do acid-fast cells resist decolorization by?",
    "options": {
      "A": "Water",
      "B": "Iodine",
      "C": "Safranin",
      "D": "Acid (20% sulfuric acid) or acid alcohol."
    },
    "answer": "D"
  },
  "page_52": {
    "question": "After the acid-fast stain procedure, what color are the Acid-fast bacteria?",
    "options": {
      "A": "Pink-red",
      "B": "Blue",
      "C": "Purple",
      "D": "Colorless"
    },
    "answer": "A"
  },
  "page_52_2": {
    "question": "What happens to all *other* types of bacteria (non-acid-fast) after acid treatment in this stain?",
    "options": {
      "A": "They also retain the pink-red color.",
      "B": "They turn purple.",
      "C": "They lose their pink color.",
      "D": "They are destroyed."
    },
    "answer": "C"
  },
  "page_52_3": {
    "question": "The Acid-Fast stain is of considerable significance in diagnosing which two mycobacterial diseases?",
    "options": {
      "A": "Anthrax and Typhoid fever",
      "B": "Staphylococcus and Streptococcus infections",
      "C": "Tuberculosis and leprosy",
      "D": "Food poisoning and wine spoilage"
    },
    "answer": "C"
  },
  "page_52_4": {
    "question": "Leprosy is caused by which microorganism?",
    "options": {
      "A": "Mycobacterium tuberculosis",
      "B": "M. Leprae",
      "C": "Staphylococcus aureus",
      "D": "Bacillus anthracis"
    },
    "answer": "B"
  },
  "page_53": {
    "question": "What is the outermost layer of the mycobacterial cell wall shown in the diagram?",
    "options": {
      "A": "Mycolic acid",
      "B": "Arabinogalactan",
      "C": "Peptidoglycan",
      "D": "Surface glycolipids"
    },
    "answer": "D"
  },
  "page_53_2": {
    "question": "Which component is located between the surface glycolipids and the arabinogalactan in the diagram?",
    "options": {
      "A": "Mycolic acid",
      "B": "Peptidoglycan",
      "C": "Lipid bilayer",
      "D": "Lipoarabinomannan"
    },
    "answer": "A"
  },
  "page_53_3": {
    "question": "What component is located just outside the lipid bilayer (cell membrane)?",
    "options": {
      "A": "Mycolic acid",
      "B": "Arabinogalactan",
      "C": "Peptidoglycan",
      "D": "Surface glycolipids"
    },
    "answer": "C"
  },
  "page_53_4": {
    "question": "What is the structure labeled 'MAPC' in the diagram?",
    "options": {
      "A": "Mycolic acid",
      "B": "Lipoarabinomannan",
      "C": "A porin",
      "D": "The text does not explicitly define it, but it's part of the cell wall structure."
    },
    "answer": "D"
  },
  "page_54": {
    "question": "In the diagram of the Acid-Fast stain procedure, what is the first step?",
    "options": {
      "A": "Cover smear with carbolfuchsin and steam over boiling water.",
      "B": "Decolorize with acid-alcohol.",
      "C": "Counterstain with methylene blue.",
      "D": "Rinse with water."
    },
    "answer": "A"
  },
  "page_54_2": {
    "question": "What is the second step in the Acid-Fast stain procedure diagram?",
    "options": {
      "A": "Cover smear with carbolfuchsin.",
      "B": "After cooling, decolorize with acid-alcohol.",
      "C": "Counterstain with methylene blue.",
      "D": "Blot dry."
    },
    "answer": "B"
  },
  "page_54_3": {
    "question": "What is the counterstain used in the Acid-Fast stain procedure?",
    "options": {
      "A": "Carbolfuchsin",
      "B": "Acid-alcohol",
      "C": "Methylene blue",
      "D": "Safranin"
    },
    "answer": "C"
  },
  "page_54_4": {
    "question": "What is the purpose of rinsing with water in step 3?",
    "options": {
      "A": "To stop the decolorization action of the acid-alcohol.",
      "B": "To apply the counterstain.",
      "C": "To heat the slide.",
      "D": "To fix the smear."
    },
    "answer": "A"
  },
  "page_56": {
    "question": "What are the three indispensable structures that *must* be found in all living cells, whether prokaryotic or eukaryotic?",
    "options": {
      "A": "Cell wall, Nucleus, and Ribosomes",
      "B": "The cytoplasmic membrane, The Genome (DNA and RNA), and Ribosomes",
      "C": "The cytoplasmic membrane, Flagella, and Capsule",
      "D": "Nucleus, Mitochondria, and Ribosomes"
    },
    "answer": "B"
  },
  "page_56_2": {
    "question": "Is the prokaryotic cell considered much less sophisticated than the eukaryotic cell?",
    "options": {
      "A": "Yes, it is far less sophisticated.",
      "B": "No, it is relatively simpler, but not much less sophisticated.",
      "C": "Yes, it is a primitive, non-functional cell.",
      "D": "No, it is much more sophisticated than a eukaryotic cell."
    },
    "answer": "B"
  },
  "page_57": {
    "question": "Which of the following is considered a 'dispensable' structure in prokaryotes, meaning the organism might be able to survive without it?",
    "options": {
      "A": "The Genome (DNA/RNA)",
      "B": "The Cytoplasmic membrane",
      "C": "Ribosomes",
      "D": "Flagella"
    },
    "answer": "D"
  },
  "page_57_2": {
    "question": "Which of these is NOT listed as a dispensable structure in prokaryotes?",
    "options": {
      "A": "Cell wall",
      "B": "Capsule",
      "C": "Ribosomes",
      "D": "Plasmids"
    },
    "answer": "C"
  },
  "page_57_3": {
    "question": "What is another name for extrachromosomal DNA in prokaryotes?",
    "options": {
      "A": "Glycocalyx",
      "B": "Pili",
      "C": "Plasmids",
      "D": "Flagella"
    },
    "answer": "C"
  },
  "page_58": {
    "question": "How many outer layers does the envelope of a Gram Positive bacterium have?",
    "options": {
      "A": "Two: Cell wall (C.W) and Cytoplasmic membrane",
      "B": "Three: Outer membrane, Cell Wall, and Inner (cytoplasmic) membrane",
      "C": "One: Peptidoglycan only",
      "D": "Four: Capsule, Outer membrane, Cell wall, and Cytoplasmic membrane"
    },
    "answer": "A"
  },
  "page_58_2": {
    "question": "How many outer layers does the envelope of a Gram Negative bacterium have?",
    "options": {
      "A": "Two: Cell wall (C.W) and Cytoplasmic membrane",
      "B": "Three: Outer membrane, Cell Wall, and Inner (cytoplasmic) membrane",
      "C": "One: Peptidoglycan only",
      "D": "Two: Outer membrane and Inner membrane"
    },
    "answer": "B"
  },
  "page_58_3": {
    "question": "How does the thickness of the cell wall (C.W.) compare between Gram Positive and Gram Negative bacteria?",
    "options": {
      "A": "Gram Positive is Thin; Gram Negative is Thick.",
      "B": "Gram Positive is Thick (up to 40 layers or more); Gram Negative is Thin (as to one layer).",
      "C": "Both are the same thickness.",
      "D": "Gram Positive has no cell wall; Gram Negative has a thick cell wall."
    },
    "answer": "B"
  },
  "page_58_4": {
    "question": "Are Teichoic acids present in Gram Negative bacteria?",
    "options": {
      "A": "Yes, they are present.",
      "B": "No, they are absent.",
      "C": "Only in the outer membrane.",
      "D": "Only in the cytoplasmic membrane."
    },
    "answer": "B"
  },
  "page_58_5": {
    "question": "Is Lipopolysaccharide (LPS) present in Gram Positive bacteria?",
    "options": {
      "A": "Yes, it is present.",
      "B": "No, it is absent.",
      "C": "Yes, it is a major component of their cell wall.",
      "D": "Yes, but in small amounts."
    },
    "answer": "B"
  },
  "page_59": {
    "question": "What is another name for the Lipopolysaccharide (LPS) of the outer membrane of Gram negative bacteria?",
    "options": {
      "A": "Endotoxin",
      "B": "Exotoxin",
      "C": "Teichoic acid",
      "D": "Peptidoglycan"
    },
    "answer": "A"
  },
  "page_59_2": {
    "question": "What does 'pyrogenic' mean in the context of LPS?",
    "options": {
      "A": "Fever-causing",
      "B": "Cell-bound",
      "C": "Toxic",
      "D": "Antibiotic"
    },
    "answer": "A"
  },
  "page_59_3": {
    "question": "LPS is widely distributed in Gram negative bacteria but absent from which group?",
    "options": {
      "A": "Archaebacteria",
      "B": "Gram positive ones",
      "C": "All bacteria",
      "D": "Viruses"
    },
    "answer": "B"
  },
  "page_59_4": {
    "question": "What symptoms of diseases caused by Gram negative infections is LPS responsible for?",
    "options": {
      "A": "Fever, intra-vascular coagulation and shock.",
      "B": "Only fever.",
      "C": "Only shock.",
      "D": "Skin rashes and coughing."
    },
    "answer": "A"
  },
  "page_60": {
    "question": "Are the toxicity and pathological effects of different endotoxins (LPS) different depending on their source bacterium?",
    "options": {
      "A": "Yes, they are completely different.",
      "B": "No, the effects are the same whatever their sources.",
      "C": "It depends on the patient.",
      "D": "Only the toxicity is the same, the effects are different."
    },
    "answer": "B"
  },
  "page_60_2": {
    "question": "Chemically, LPS is made of three parts. Which of these is NOT one of the parts?",
    "options": {
      "A": "Lipid A",
      "B": "A core polysaccharide",
      "C": "Outer polysaccharide",
      "D": "Teichoic acid"
    },
    "answer": "D"
  },
  "page_60_3": {
    "question": "Which part of the LPS is the toxic component?",
    "options": {
      "A": "Lipid A: a phospholipid.",
      "B": "The core polysaccharide.",
      "C": "The outer polysaccharide.",
      "D": "Ketodeoxyoctulonate (KDO)."
    },
    "answer": "A"
  },
  "page_60_4": {
    "question": "What links the core polysaccharide to Lipid A?",
    "options": {
      "A": "The outer polysaccharide.",
      "B": "A phospholipid.",
      "C": "Ketodeoxyoctulonate (KDO).",
      "D": "A sugar unit."
    },
    "answer": "C"
  },
  "page_61": {
    "question": "In which group of bacteria are Teichoic acids found?",
    "options": {
      "A": "Only in Gram positive bacteria.",
      "B": "Only in Gram negative bacteria.",
      "C": "In both Gram positive and Gram negative bacteria.",
      "D": "In Archaebacteria only."
    },
    "answer": "A"
  },
  "page_61_2": {
    "question": "Is the function of Teichoic acids clearly understood?",
    "options": {
      "A": "Yes, their only function is to cause fever.",
      "B": "Yes, their only function is to adsorb bacteriophages.",
      "C": "No, their function is not clear.",
      "D": "Yes, they control the level of cations."
    },
    "answer": "C"
  },
  "page_61_3": {
    "question": "Which of the following is NOT listed as an *attributed* (potential) function of teichoic acids?",
    "options": {
      "A": "Control of level of cations that penetrate the cytoplasmic membranes.",
      "B": "Antigenic stimuli.",
      "C": "Adsorption of certain bacteriophages.",
      "D": "Acting as the primary endotoxin."
    },
    "answer": "D"
  },
  "page_61_4": {
    "question": "Chemically, what are Teichoic acids?",
    "options": {
      "A": "Polymers of glycerol or ribitol phosphate molecules.",
      "B": "Phospholipids, just like Lipid A.",
      "C": "A core polysaccharide of five sugars.",
      "D": "Polymers of N-acetyl-glucosamine."
    },
    "answer": "A"
  },
  "page_62": {
    "question": "What are other names for the Cell Wall of Eubacteria?",
    "options": {
      "A": "Peptidoglycan or Murein or mucopeptide.",
      "B": "LPS or Endotoxin.",
      "C": "Chitin or Cellulose.",
      "D": "Outer membrane or Inner membrane."
    },
    "answer": "A"
  },
  "page_62_2": {
    "question": "Which bacterial group lacks N-acetylmuramic acid in its cell wall when it is made of polysaccharide?",
    "options": {
      "A": "Eubacteria",
      "B": "Gram-positive bacteria",
      "C": "Archae bacterial cell wall",
      "D": "Mycoplasma"
    },
    "answer": "C"
  },
  "page_62_3": {
    "question": "Some Archaebacteria may have a cell wall made of what alternative substance?",
    "options": {
      "A": "Peptidoglycan",
      "B": "Protein only",
      "C": "Lipopolysaccharide",
      "D": "Mycolic acid"
    },
    "answer": "B"
  },
  "page_62_4": {
    "question": "Which bacteria lack a cell wall completely under all conditions?",
    "options": {
      "A": "Eubacteria",
      "B": "Archaebacteria",
      "C": "Mycoplasma",
      "D": "Gram-positive bacteria"
    },
    "answer": "C"
  },
  "page_62_5": {
    "question": "Why are the shapes and sizes of Mycoplasma cells quite variable?",
    "options": {
      "A": "Because of their thick cell wall.",
      "B": "Because of their lack of cell wall.",
      "C": "Because they have a protein-only cell wall.",
      "D": "Because they are Archaebacteria."
    },
    "answer": "B"
  },
  "page_63": {
    "question": "What does it mean that Mycoplasma are 'highly pleomorphic'?",
    "options": {
      "A": "They have varying shapes and sizes.",
      "B": "They are very small.",
      "C": "They lack a cell wall.",
      "D": "They can incorporate sterols."
    },
    "answer": "A"
  },
  "page_63_2": {
    "question": "Why can Mycoplasma pass through bacterial filters that retain other bacteria?",
    "options": {
      "A": "Because they are highly pathogenic.",
      "B": "Because their size is very small and they lack a rigid cell wall.",
      "C": "Because they can digest the filter.",
      "D": "Because they incorporate sterols into their membranes."
    },
    "answer": "B"
  },
  "page_63_3": {
    "question": "What distinctive feature allows Mycoplasma to confer some rigidity to their membranes to compensate for the absence of a cell wall?",
    "options": {
      "A": "Their ability to incorporate sterols, such as cholesterol, into their cell membranes.",
      "B": "Their high pleomorphism.",
      "C": "Their very small size.",
      "D": "Their peptidoglycan layer."
    },
    "answer": "A"
  },
  "page_63_4": {
    "question": "What is the bacterial peptidoglycan made of?",
    "options": {
      "A": "Homopolymers of two alternating amino sugars, cross-linked by short peptide chains.",
      "B": "Only short peptide chains.",
      "C": "Only alternating amino sugars.",
      "D": "Lipids and polysaccharides."
    },
    "answer": "A"
  },
  "page_64": {
    "question": "What are the two alternating amino-sugars that form the polymeric chain of peptidoglycan?",
    "options": {
      "A": "N-Acetyl-glucosamine (NAG) and N-Acetyl-Muramic acid (NAM).",
      "B": "L-Ala and D-Glu.",
      "C": "D-Ala and L-Lys.",
      "D": "Glycerol and Ribitol phosphate."
    },
    "answer": "A"
  },
  "page_64_2": {
    "question": "What kind of linkage joins NAG and NAM to form the polymeric chain?",
    "options": {
      "A": "O-1, 4- glycosidic Linkage",
      "B": "Peptide Cross-Linking Chains",
      "C": "A tetra-peptide chain",
      "D": "Ester-linkage"
    },
    "answer": "A"
  },
  "page_64_3": {
    "question": "How many amino acids are typically in the 'Tetra-peptide chain' that attaches to the amino sugars?",
    "options": {
      "A": "Two",
      "B": "Four",
      "C": "Five",
      "D": "Ten"
    },
    "answer": "B"
  },
  "page_64_4": {
    "question": "What is the function of the 'Peptide Cross-Linking Chains (Cross Bridges)'?",
    "options": {
      "A": "To link the amino sugars NAG and NAM together.",
      "B": "To attach the polymers (chains) to each other.",
      "C": "To form the tetra-peptide chain.",
      "D": "To attach to the cytoplasmic membrane."
    },
    "answer": "B"
  },
  "page_65": {
    "question": "In the 'Gram-positive Cell Wall' diagram, what is the thick, multi-layered structure called?",
    "options": {
      "A": "Peptidoglycan",
      "B": "Outer Membrane",
      "C": "Periplasmic Space",
      "D": "LPS"
    },
    "answer": "A"
  },
  "page_65_2": {
    "question": "In the 'Gram-positive Cell Wall' diagram, what are the vertical green strands labeled 'LTA' that span the peptidoglycan layer?",
    "options": {
      "A": "LTA (Lipoteichoic acid)",
      "B": "Protein",
      "C": "Phospholipid",
      "D": "Porins"
    },
    "answer": "A"
  },
  "page_65_3": {
    "question": "In the 'Gram-negative Cell Wall' diagram, what is the structure *outside* of the thin Peptidoglycan layer?",
    "options": {
      "A": "Cytoplasmic Membrane",
      "B": "Outer Membrane",
      "C": "A thick Peptidoglycan layer",
      "D": "LTA"
    },
    "answer": "B"
  },
  "page_65_4": {
    "question": "What is the space between the Outer Membrane and the Inner Membrane in the 'Gram-negative Cell Wall' diagram called?",
    "options": {
      "A": "Cytoplasm",
      "B": "Peptidoglycan",
      "C": "Periplasmic Space",
      "D": "LPS"
    },
    "answer": "C"
  },
  "page_65_5": {
    "question": "What structures labeled 'Porins' and 'LPS' are found in the 'Gram-negative Cell Wall' diagram?",
    "options": {
      "A": "In the Inner Membrane",
      "B": "In the Peptidoglycan layer",
      "C": "In the Outer Membrane",
      "D": "In the Cytoplasm"
    },
    "answer": "C"
  },
  "page_66": {
    "question": "What is the *main* function of the bacterial peptidoglycan (cell wall)?",
    "options": {
      "A": "To protect the bacterial cell from bursting in hypotonic media or shrinking in hypertonic environments.",
      "B": "To help the cell acquire its shape.",
      "C": "To store cellular metabolites.",
      "D": "To allow the cell to move."
    },
    "answer": "A"
  },
  "page_66_2": {
    "question": "What is the osmotic pressure of the bacterial cytoplasm like?",
    "options": {
      "A": "Considerably low.",
      "B": "Considerably high.",
      "C": "The same as the outside environment.",
      "D": "Zero."
    },
    "answer": "B"
  },
  "page_66_3": {
    "question": "What does a high osmotic pressure in the cytoplasm indicate?",
    "options": {
      "A": "That cellular metabolites are scarce.",
      "B": "That cellular metabolites (amino acids, sugars, etc.) are at abundance in a free form.",
      "C": "That the cell is about to burst.",
      "D": "That the cell is in a hypertonic environment."
    },
    "answer": "B"
  },
  "page_67": {
    "question": "The osmotic pressure inside the bacterial cytoplasm can range from...",
    "options": {
      "A": "5 atmospheres to 20 atmospheres.",
      "B": "1 atmosphere to 2 atmospheres.",
      "C": "0 atmospheres to 1 atmosphere.",
      "D": "100 atmospheres to 200 atmospheres."
    },
    "answer": "A"
  },
  "page_67_2": {
    "question": "What is the relationship between the osmotic pressure of the cytoplasm and the thickness of the cell wall?",
    "options": {
      "A": "When pressure is low, the wall is thick.",
      "B": "When pressure is high, the wall is thin.",
      "C": "When pressure is high, the wall is usually considerably thicker.",
      "D": "There is no relationship."
    },
    "answer": "C"
  },
  "page_67_3": {
    "question": "Besides protecting from osmotic variations, what is the other function of the cell wall discussed on page 68?",
    "options": {
      "A": "It helps the bacterial cell to acquire and maintain its shape.",
      "B": "It helps the cell move.",
      "C": "It stores food for the cell.",
      "D": "It contains the cell's genetic material."
    },
    "answer": "A"
  },
  "page_68": {
    "question": "How can the cell wall be removed from bacterial cells?",
    "options": {
      "A": "By treatment with wall-active antibiotics (e.g., penicillins) or the enzyme lysozyme.",
      "B": "By placing the cells in a hypotonic solution.",
      "C": "By placing the cells in a hypertonic solution.",
      "D": "By staining the cells with crystal violet."
    },
    "answer": "A"
  },
  "page_68_2": {
    "question": "What is another name for the enzyme lysozyme?",
    "options": {
      "A": "Penicillin",
      "B": "Beta-lactam",
      "C": "Nuramidase",
      "D": "Peptidoglycan"
    },
    "answer": "C"
  },
  "page_69": {
    "question": "Upon wall removal in an isotonic environment, what shape do rod-shaped bacteria become?",
    "options": {
      "A": "They quickly round up (become spheres).",
      "B": "They stay rod-shaped.",
      "C": "They become spiral-shaped.",
      "D": "They lyse immediately."
    },
    "answer": "A"
  },
  "page_69_2": {
    "question": "What are these round, wall-less cells called in Gram-positive bacteria?",
    "options": {
      "A": "Spheroplasts",
      "B": "Protoplasts",
      "C": "Mycoplasma",
      "D": "L-forms"
    },
    "answer": "B"
  },
  "page_69_3": {
    "question": "What are these round, wall-less cells called in Gram-negative bacteria?",
    "options": {
      "A": "Spheroplasts",
      "B": "Protoplasts",
      "C": "Mycoplasma",
      "D": "L-forms"
    },
    "answer": "A"
  },
  "page_69_4": {
    "question": "What happens to protoplasts or spheroplasts when placed in a hypotonic environment (e.g., water)?",
    "options": {
      "A": "They shrink.",
      "B": "They swell rapidly and ultimately burst (plasmolysis).",
      "C": "They are unaffected.",
      "D": "They form a new cell wall."
    },
    "answer": "B"
  },
  "page_69_5": {
    "question": "What happens to bacterial cells in a Hypertonic environment?",
    "options": {
      "A": "They swell and burst.",
      "B": "Water diffuses out and the cells eventually shrink.",
      "C": "They are unaffected.",
      "D": "Water diffuses in, but the cell wall protects them."
    },
    "answer": "B"
  },
  "page_70": {
    "question": "What is the basic structure of the Bacterial Cytoplasmic Membrane?",
    "options": {
      "A": "A single layer of phospholipids.",
      "B": "A Peptidoglycan layer.",
      "C": "A Phospholipid Bilayer impregnated by Proteins.",
      "D": "A layer of Teichoic acids."
    },
    "answer": "C"
  },
  "page_70_2": {
    "question": "What property does the spatial orientation of the phospholipid bilayer confer to the membrane?",
    "options": {
      "A": "An overall hydrophobic surface.",
      "B": "An outer and inner hydrophilic surface, and a continuous hydrophobic layer in between.",
      "C": "An overall hydrophilic surface.",
      "D": "A completely permeable barrier."
    },
    "answer": "B"
  },
  "page_70_3": {
    "question": "How is the entry and exit of most molecules to and from the cytoplasm achieved?",
    "options": {
      "A": "They pass directly through the phospholipid bilayer.",
      "B": "Through the proteins that span the membrane.",
      "C": "Through the cell wall.",
      "D": "Through the porins in the outer membrane."
    },
    "answer": "B"
  },
  "page_71": {
    "question": "What is the 'prime function' of the cell membrane?",
    "options": {
      "A": "Respiration and energy production.",
      "B": "Cell Wall Synthesis.",
      "C": "Selective Permeability: mediating the transport of certain molecules across the membrane.",
      "D": "Enzyme and Toxin Secretion."
    },
    "answer": "C"
  },
  "page_71_2": {
    "question": "Transport of molecules by membrane proteins that is energy-dependent is called...",
    "options": {
      "A": "Active transport",
      "B": "Facilitated diffusion",
      "C": "Passive diffusion",
      "D": "Osmosis"
    },
    "answer": "A"
  },
  "page_71_3": {
    "question": "Transport of molecules by membrane proteins that is energy-independent is called...",
    "options": {
      "A": "Active transport",
      "B": "Facilitated diffusion",
      "C": "Passive diffusion",
      "D": "Osmosis"
    },
    "answer": "B"
  },
  "page_71_4": {
    "question": "How do certain molecules, e.g. water, pass the membrane without the aid of proteins?",
    "options": {
      "A": "By active transport",
      "B": "By facilitated diffusion",
      "C": "By passive diffusion",
      "D": "They cannot pass without proteins."
    },
    "answer": "C"
  },
  "page_72": {
    "question": "Where are the respiratory chain components located in a bacterial cell?",
    "options": {
      "A": "In the cell membrane.",
      "B": "In the mitochondria.",
      "C": "In the cytoplasm.",
      "D": "In the cell wall."
    },
    "answer": "A"
  },
  "page_72_2": {
    "question": "Bacterial cytoplasmic membranes are equivalent to what structure in eukaryotes in terms of respiration?",
    "options": {
      "A": "The nucleus",
      "B": "The endoplasmic reticulum",
      "C": "The Golgi apparatus",
      "D": "Mitochondrial membranes"
    },
    "answer": "D"
  },
  "page_72_3": {
    "question": "Where are most precursor units required for the synthesis of the cell wall synthesized?",
    "options": {
      "A": "In the cytoplasm.",
      "B": "At the inner surface or inside the membrane.",
      "C": "In the periplasmic space.",
      "D": "Outside the cell."
    },
    "answer": "B"
  },
  "page_73": {
    "question": "How does the cell membrane participate in cell division?",
    "options": {
      "A": "It is required for septum formation and participates in DNA replication and segregation.",
      "B": "It dissolves during cell division.",
      "C": "It only helps with DNA replication.",
      "D": "It only forms the septum."
    },
    "answer": "A"
  },
  "page_73_2": {
    "question": "What are 'signal sequences' used for?",
    "options": {
      "A": "To help larger protein molecules (enzymes, toxins) cross from the interior to the exterior of the cell.",
      "B": "To signal the start of DNA replication.",
      "C": "To signal the start of cell division.",
      "D": "To help water cross the membrane."
    },
    "answer": "A"
  },
  "page_74": {
    "question": "What is 'compartmentalization' essential for?",
    "options": {
      "A": "Allowing all substances to mix freely.",
      "B": "Enabling reactions to take place that would otherwise be impossible.",
      "C": "Only for eukaryotic cells.",
      "D": "Preventing any materials from entering or leaving the cell."
    },
    "answer": "B"
  },
  "page_74_2": {
    "question": "Which of the following is NOT one of the five main methods by which substances can move across a cell membrane?",
    "options": {
      "A": "Simple Diffusion",
      "B": "Osmosis",
      "C": "Active Transport",
      "D": "Septum Formation"
    },
    "answer": "D"
  },
  "page_74_3": {
    "question": "What is the fifth method listed for substances to move across a cell membrane?",
    "options": {
      "A": "Facilitated Diffusion",
      "B": "Vesicles",
      "C": "Signal Sequences",
      "D": "Passive Diffusion"
    },
    "answer": "B"
  },
  "page_75": {
    "question": "What is 'Simple Diffusion' (also called lipid diffusion)?",
    "options": {
      "A": "The transport of substances by a protein molecule.",
      "B": "The pumping of substances using ATP.",
      "C": "The diffusion of substances directly through the lipid bi-layer part of the membrane.",
      "D": "The movement of water across a membrane."
    },
    "answer": "C"
  },
  "page_75_2": {
    "question": "What types of substances can move by simple diffusion?",
    "options": {
      "A": "Lipid-soluble molecules (e.g., steroids) or very small molecules (e.g., H2O, O2, CO2).",
      "B": "Any charged ion.",
      "C": "Large proteins and sugars.",
      "D": "Only water."
    },
    "answer": "A"
  },
  "page_75_3": {
    "question": "Is energy involved in simple diffusion?",
    "options": {
      "A": "Yes, it is an active process.",
      "B": "No, it is a passive diffusion process.",
      "C": "Only when moving large molecules.",
      "D": "Only when moving water."
    },
    "answer": "B"
  },
  "page_75_4": {
    "question": "In simple diffusion, substances can only move in which direction?",
    "options": {
      "A": "Down their concentration gradient.",
      "B": "Up their concentration gradient.",
      "C": "In any direction, regardless of concentration.",
      "D": "Into the cell only."
    },
    "answer": "A"
  },
  "page_77": {
    "question": "What is 'Facilitated Diffusion'?",
    "options": {
      "A": "The transport of substances across a membrane by a trans-membrane protein molecule.",
      "B": "The diffusion of lipids directly through the membrane.",
      "C": "The pumping of substances using ATP.",
      "D": "The movement of water across a membrane."
    },
    "answer": "A"
  },
  "page_77_2": {
    "question": "Is energy involved in facilitated diffusion?",
    "options": {
      "A": "Yes, it is an active process.",
      "B": "No, it is a passive diffusion process.",
      "C": "Only for large molecules.",
      "D": "Only for ions."
    },
    "answer": "B"
  },
  "page_77_3": {
    "question": "In facilitated diffusion, substances can only move in which direction?",
    "options": {
      "A": "Down their concentration gradient.",
      "B": "Up their concentration gradient.",
      "C": "In any direction.",
      "D": "Out of the cell only."
    },
    "answer": "A"
  },
  "page_77_4": {
    "question": "What are the two kinds of transport proteins involved in facilitated diffusion?",
    "options": {
      "A": "Channel Proteins and Carrier Proteins",
      "B": "Simple Proteins and Complex Proteins",
      "C": "Pumps and Pores",
      "D": "Lipid Proteins and Water Proteins"
    },
    "answer": "A"
  },
  "page_78": {
    "question": "What do 'Channel Proteins' do?",
    "options": {
      "A": "They form a water-filled pore or channel to allow charged substances (ions) to diffuse.",
      "B": "They have a binding site and flip between two states.",
      "C": "They use ATP to pump molecules.",
      "D": "They diffuse directly through the lipid bilayer."
    },
    "answer": "A"
  },
  "page_78_2": {
    "question": "What do 'Carrier Proteins' do?",
    "options": {
      "A": "They form a water-filled pore.",
      "B": "They have a binding site for a specific solute and flip between two states.",
      "C": "They use ATP to pump molecules.",
      "D": "They are only used for simple diffusion."
    },
    "answer": "B"
  },
  "page_78_3": {
    "question": "Why does the rate of facilitated diffusion have a maximum rate (curved relationship), while simple (lipid) diffusion does not (linear relationship)?",
    "options": {
      "A": "Because facilitated diffusion uses energy.",
      "B": "Because the rate of facilitated diffusion is limited by the number of transport proteins.",
      "C": "Because simple diffusion is faster.",
      "D": "Because facilitated diffusion can move against the gradient."
    },
    "answer": "B"
  },
  "page_80": {
    "question": "What is 'Active Transport'?",
    "options": {
      "A": "The pumping of substances across a membrane by a trans-membrane protein pump molecule.",
      "B": "The diffusion of substances down their concentration gradient.",
      "C": "The movement of substances through a channel protein without energy.",
      "D": "The diffusion of lipids directly through the membrane."
    },
    "answer": "A"
  },
  "page_80_2": {
    "question": "What enzyme activity do protein pumps also have?",
    "options": {
      "A": "They are ATPase enzymes, splitting ATP into ADP + Pi for energy.",
      "B": "They are lysozymes, breaking down cell walls.",
      "C": "They are polymerases, building DNA.",
      "D": "They have no enzyme activity."
    },
    "answer": "A"
  },
  "page_80_3": {
    "question": "What is the *only* transport mechanism that can transport substances *up* (against) their concentration gradient?",
    "options": {
      "A": "Simple Diffusion",
      "B": "Facilitated Diffusion",
      "C": "Active Transport (or Pumping)",
      "D": "Osmosis"
    },
    "answer": "C"
  },
  "page_82": {
    "question": "What is the Outer Membrane (OM) of a Gram-negative bacterium similar to?",
    "options": {
      "A": "The peptidoglycan cell wall.",
      "B": "The cytoplasmic (inner) membrane (i.e., it is a phospholipid bilayer).",
      "C": "The capsule.",
      "D": "The teichoic acids of a Gram-positive cell."
    },
    "answer": "B"
  },
  "page_82_2": {
    "question": "What are the proteins in the Outer Membrane called?",
    "options": {
      "A": "Porins",
      "B": "Carrier proteins",
      "C": "Channel proteins",
      "D": "ATPases"
    },
    "answer": "A"
  },
  "page_82_3": {
    "question": "What is the function of porins?",
    "options": {
      "A": "To act as pores that allow the passage of certain molecular size.",
      "B": "To pump molecules against their gradient.",
      "C": "To bind to specific solutes and flip.",
      "D": "To perform respiration."
    },
    "answer": "A"
  },
  "page_83": {
    "question": "According to Figure 16 (A), a Gram-positive bacterium has a thick peptidoglycan layer that contains what?",
    "options": {
      "A": "Lipopolysaccharide and porin proteins.",
      "B": "Teichoic and lipoteichoic acids.",
      "C": "A periplasmic space and an outer membrane.",
      "D": "Only peptidoglycan."
    },
    "answer": "B"
  },
  "page_83_2": {
    "question": "According to Figure 16 (B), a Gram-negative bacterium has a thin peptidoglycan layer and what other structure?",
    "options": {
      "A": "An outer membrane that contains lipopolysaccharide, phospholipids, and proteins.",
      "B": "A thick layer of teichoic acids.",
      "C": "Only a cytoplasmic membrane.",
      "D": "A layer of mycolic acid."
    },
    "answer": "A"
  },
  "page_83_3": {
    "question": "Where is the periplasmic space located in a Gram-negative bacterium?",
    "options": {
      "A": "Inside the cytoplasm.",
      "B": "Between the cytoplasmic and outer membranes.",
      "C": "Within the outer membrane.",
      "D": "Outside the entire cell."
    },
    "answer": "B"
  },
  "page_83_4": {
    "question": "What attaches the outer membrane to the peptidoglycan in a Gram-negative bacterium?",
    "options": {
      "A": "Lipoteichoic acid",
      "B": "Lipoprotein links",
      "C": "Carrier proteins",
      "D": "Porin proteins"
    },
    "answer": "B"
  },
  "page_84": {
    "question": "In the summary diagram, what structure is present in the GRAM NEGATIVE cell envelope but ABSENT in the GRAM POSITIVE cell envelope?",
    "options": {
      "A": "Peptidoglycan layer",
      "B": "Cytoplasmic membrane",
      "C": "Outer membrane",
      "D": "Ribosome"
    },
    "answer": "C"
  },
  "page_84_2": {
    "question": "In the summary diagram, what structure is present in the GRAM POSITIVE cell envelope but ABSENT in the GRAM NEGATIVE cell envelope?",
    "options": {
      "A": "Surface proteins",
      "B": "Peptidoglycan layer",
      "C": "The text does not explicitly show one.",
      "D": "Periplasmic space"
    },
    "answer": "C"
  },
  "page_84_3": {
    "question": "In the GRAM NEGATIVE diagram, what is the 'Inclusion body'?",
    "options": {
      "A": "The genetic material.",
      "B": "A structure for motility.",
      "C": "A ribosome.",
      "D": "A storage granule within the cytoplasm."
    },
    "answer": "D"
  },
  "page_84_4": {
    "question": "What is the 'Mesosome' shown in the GRAM POSITIVE diagram?",
    "options": {
      "A": "An invagination of the cytoplasmic membrane.",
      "B": "The genetic material.",
      "C": "A storage granule.",
      "D": "The outer membrane."
    },
    "answer": "A"
  },
  "page_85": {
    "question": "The detailed diagram shows the 'Gram negative cell envelope' has a 'Thin cell wall' and an 'Outer membrane'. What components are shown in this outer membrane?",
    "options": {
      "A": "Teichoic acids and Lipoteichoic acids",
      "B": "Porin protein, LPS, Phospholipid, and Protein",
      "C": "Only Peptidoglycan",
      "D": "Only Protein and Phospholipid"
    },
    "answer": "B"
  },
  "page_85_2": {
    "question": "The detailed diagram shows the 'Gram positive cell envelope' has a 'Thick cell wall'. What components are shown embedded in this thick wall?",
    "options": {
      "A": "Teichoic acids and Lipoteichoic acids",
      "B": "Porin protein and LPS",
      "C": "Periplasmic space",
      "D": "Outer membrane"
    },
    "answer": "A"
  },
  "page_85_3": {
    "question": "What is the 'Nucleoid'?",
    "options": {
      "A": "The region in the cytoplasm containing the bacterial chromosome.",
      "B": "A small plasmid.",
      "C": "A storage granule.",
      "D": "An invagination of the cell membrane."
    },
    "answer": "A"
  },
  "page_85_4": {
    "question": "What are 'Pili' shown as?",
    "options": {
      "A": "Long, whip-like tails for motility.",
      "B": "Short, hair-like appendages.",
      "C": "The outer membrane.",
      "D": "Storage granules."
    },
    "answer": "B"
  },
  "page_87": {
    "question": "The electromicrographs on this page show cell division. What does 'CW' stand for?",
    "options": {
      "A": "Cell Wall",
      "B": "Cytoplasmic Water",
      "C": "Chromosome",
      "D": "Capsule"
    },
    "answer": "A"
  },
  "page_87_2": {
    "question": "What does 'CM' stand for?",
    "options": {
      "A": "Cell Mass",
      "B": "Cytoplasmic Membrane",
      "C": "Chromosome",
      "D": "Capsule"
    },
    "answer": "B"
  },
  "page_87_3": {
    "question": "What does 'OM' stand for in the Gram(-) image?",
    "options": {
      "A": "Outer Membrane",
      "B": "Organic Material",
      "C": "Organelle",
      "D": "Osmotic Membrane"
    },
    "answer": "A"
  },
  "page_87_4": {
    "question": "What does 'S' stand for in the Gram(+) image?",
    "options": {
      "A": "Spore",
      "B": "Septum",
      "C": "Surface",
      "D": "Sphere"
    },
    "answer": "B"
  },
  "page_87_5": {
    "question": "What does 'N' stand for in the images?",
    "options": {
      "A": "Nucleus",
      "B": "Nucleoid",
      "C": "Nitrogen",
      "D": "Nutrient"
    },
    "answer": "B"
  },
  "page_88": {
    "question": "What is the 'Glycocalyx'?",
    "options": {
      "A": "A loose layer of a muco-polysaccharide substance that surrounds the outer envelope.",
      "B": "A rigid, well-defined layer that protects from phagocytosis.",
      "C": "The bacterial cell wall.",
      "D": "A structure for motility."
    },
    "answer": "A"
  },
  "page_88_2": {
    "question": "What is another name for the Glycocalyx?",
    "options": {
      "A": "Slime",
      "B": "Capsule",
      "C": "Cell wall",
      "D": "Pili"
    },
    "answer": "A"
  },
  "page_88_3": {
    "question": "What texture do colonies of bacteria with a glycocalyx, like *Leuconostoc mesenteroides*, often exhibit?",
    "options": {
      "A": "Dry and granular",
      "B": "Highly mucoid",
      "C": "Hard and solid",
      "D": "Invisible"
    },
    "answer": "B"
  },
  "page_88_4": {
    "question": "What appears to be the function of the glycocalyx?",
    "options": {
      "A": "To help bacterial cells cling (adherence) strongly to surfaces.",
      "B": "To protect the cell from osmotic lysis.",
      "C": "To store food.",
      "D": "To perform photosynthesis."
    },
    "answer": "A"
  },
  "page_88_5": {
    "question": "Why are glycocalyxes of some bacteria considered 'virulence factors'?",
    "options": {
      "A": "Because they are toxic.",
      "B": "Because a pathogen must establish a foothold (colonization) on the host to be pathogenic.",
      "C": "Because they repel white blood cells.",
      "D": "Because they store antibiotics."
    },
    "answer": "B"
  },
  "page_89": {
    "question": "While most bacterial capsules are polysaccharide, what is the capsule of *Bacillus anthracis* made of?",
    "options": {
      "A": "A poly-glutamic acid capsule (a polymeric peptide).",
      "B": "A muco-polysaccharide.",
      "C": "Lipopolysaccharide.",
      "D": "Teichoic acid."
    },
    "answer": "A"
  },
  "page_89_2": {
    "question": "What is the main known function of the capsule of *Streptococcus pneumoniae*?",
    "options": {
      "A": "To help the bacterium adhere to surfaces.",
      "B": "To protect the bacterium against phagocytosis by white blood cells.",
      "C": "To store food for the bacterium.",
      "D": "To allow the bacterium to move."
    },
    "answer": "B"
  },
  "page_89_3": {
    "question": "How does the capsule of *Streptococcus pneumoniae* protect it from phagocytes?",
    "options": {
      "A": "It is toxic to the phagocyte.",
      "B": "It is too thick for the phagocyte to digest.",
      "C": "Its highly negative net charge helps repulse the negatively charged phagocyte.",
      "D": "It camouflages the bacterium."
    },
    "answer": "C"
  },
  "page_89_4": {
    "question": "What is another role some bacterial capsules play?",
    "options": {
      "A": "Helping the adherence of bacteria to surfaces through their mucoid characteristics.",
      "B": "Storing genetic material.",
      "C": "Sensing the environment.",
      "D": "Causing osmotic lysis."
    },
    "answer": "A"
  },
  "page_90": {
    "question": "What is the 'genome'?",
    "options": {
      "A": "A single gene.",
      "B": "The total gene content of a cell.",
      "C": "A plasmid.",
      "D": "A ribosome."
    },
    "answer": "B"
  },
  "page_90_2": {
    "question": "What are 'genes'?",
    "options": {
      "A": "Segments on the double stranded DNA that contain information for the synthesis of a single protein.",
      "B": "The total gene content of a cell.",
      "C": "Small circular DNA molecules.",
      "D": "Storage granules."
    },
    "answer": "A"
  },
  "page_90_3": {
    "question": "What does the genetic material (chromosome) of bacteria typically consist of?",
    "options": {
      "A": "A single, circular DNA molecule.",
      "B": "Multiple, linear DNA molecules.",
      "C": "A single, linear DNA molecule.",
      "D": "Multiple, circular DNA molecules."
    },
    "answer": "A"
  },
  "page_90_4": {
    "question": "The bacterial chromosome is 'haploid'. What does this mean?",
    "options": {
      "A": "It carries two copies of each gene.",
      "B": "It carries one copy of each gene.",
      "C": "It has no genes.",
      "D": "It is made of RNA."
    },
    "answer": "B"
  },
  "page_90_5": {
    "question": "What is the smallest known bacterial genome?",
    "options": {
      "A": "E. coli DNA",
      "B": "The mycoplasmal DNA",
      "C": "Yeast DNA",
      "D": "Bacillus anthracis DNA"
    },
    "answer": "B"
  },
  "page_91": {
    "question": "What are 'Plasmids'?",
    "options": {
      "A": "The main bacterial chromosome.",
      "B": "Small (few hundred genes), circular DNA molecules that may be found in the cytoplasm.",
      "C": "The ribosomes of the cell.",
      "D": "Storage granules for DNA."
    },
    "answer": "B"
  },
  "page_91_2": {
    "question": "How do plasmids replicate?",
    "options": {
      "A": "They are dependent on the main chromosome and replicate at the same time (synchronously).",
      "B": "They replicate independent of the bacterial main chromosome (asynchronously).",
      "C": "They do not replicate.",
      "D": "They only replicate uni-directionally."
    },
    "answer": "B"
  },
  "page_91_3": {
    "question": "What controls the replication rate of plasmids?",
    "options": {
      "A": "The host chromosome.",
      "B": "The plasmid itself.",
      "C": "The environment.",
      "D": "Nothing, it is random."
    },
    "answer": "A"
  },
  "page_91_4": {
    "question": "What are 'episomes'?",
    "options": {
      "A": "Plasmids that have been cured from the cell.",
      "B": "Plasmids that replicate uni-directionally.",
      "C": "Integrated plasmids (plasmids that integrate into the main chromosome).",
      "D": "Large plasmids."
    },
    "answer": "C"
  },
  "page_92": {
    "question": "What is the 'copy number' of a plasmid?",
    "options": {
      "A": "The number of copies of the same plasmid per cell.",
      "B": "The number of different types of plasmids in a cell.",
      "C": "The number of genes on a plasmid.",
      "D": "The number of cells that contain the plasmid."
    },
    "answer": "A"
  },
  "page_92_2": {
    "question": "What is 'plasmid curing'?",
    "options": {
      "A": "The process of a plasmid integrating into the chromosome.",
      "B": "The process of a plasmid replicating.",
      "C": "The process of removal of a plasmid from the cell, e.g., by acridine dyes.",
      "D": "The process of a plasmid gaining new genes."
    },
    "answer": "C"
  },
  "page_92_3": {
    "question": "What is the difference between small and large plasmids?",
    "options": {
      "A": "Small plasmids carry more genes than large plasmids.",
      "B": "Large plasmids carry more genes than small plasmids.",
      "C": "Small plasmids are episomes, large plasmids are not.",
      "D": "Large plasmids are episomes, small plasmids are not."
    },
    "answer": "B"
  },
  "page_93": {
    "question": "What is a 'conjugative plasmid'?",
    "options": {
      "A": "A plasmid that carries genes for antibiotic resistance.",
      "B": "A plasmid that carries genes for the formation of a sex pilus and other gene-transfer proteins.",
      "C": "A plasmid that cannot be transferred to another cell.",
      "D": "A plasmid that has integrated into the chromosome."
    },
    "answer": "B"
  },
  "page_93_2": {
    "question": "What process does the 'sex pilus' mediate?",
    "options": {
      "A": "Conjugation (transfer of genetic material) between two bacterial cells.",
      "B": "Adherence of the bacterium to a surface.",
      "C": "Motility of the bacterium.",
      "D": "Plasmid curing."
    },
    "answer": "A"
  },
  "page_93_3": {
    "question": "How are 'non-conjugative plasmids' (which do not code for sex pili) transferred?",
    "options": {
      "A": "They cannot be transferred.",
      "B": "Their mobility is aided by other conjugative plasmids.",
      "C": "They are transferred by flagella.",
      "D": "They are transferred by simple diffusion."
    },
    "answer": "B"
  },
  "page_93_4": {
    "question": "What happens when a bacterial cell gains a plasmid?",
    "options": {
      "A": "It acquires the ability to synthesize a new protein and hence a new property or trait.",
      "B": "It immediately dies.",
      "C": "It loses its main chromosome.",
      "D": "It becomes an episome."
    },
    "answer": "A"
  },
  "page_94": {
    "question": "Are plasmids essential for the survival of bacterial cells?",
    "options": {
      "A": "Yes, a cell cannot live without plasmids.",
      "B": "No, plasmids are not essential for survival.",
      "C": "Only large plasmids are essential.",
      "D": "Only conjugative plasmids are essential."
    },
    "answer": "B"
  },
  "page_94_2": {
    "question": "How can plasmids act as 'survival factors' for bacteria like *Pseudomonas*?",
    "options": {
      "A": "They carry information for the synthesis of degradative enzymes that can degrade unusual carbon/nitrogen compounds.",
      "B": "They make the cell wall thicker.",
      "C": "They help the cell move away from danger.",
      "D": "They store essential nutrients."
    },
    "answer": "A"
  },
  "page_95": {
    "question": "What is an 'R factor'?",
    "options": {
      "A": "A plasmid that codes for resistance of bacteria to antibiotics.",
      "B": "A plasmid that codes for nitrogen fixation.",
      "C": "A plasmid that codes for resistance to heavy metals.",
      "D": "A plasmid that codes for bacterial toxins."
    },
    "answer": "A"
  },
  "page_95_2": {
    "question": "R plasmids carry genes for transfer (RTF) and genes coding for what?",
    "options": {
      "A": "Nitrogen fixation",
      "B": "Resistance to one or more antibiotics.",
      "C": "Bacterial toxins.",
      "D": "Degradative enzymes."
    },
    "answer": "B"
  },
  "page_95_3": {
    "question": "Enzymes required for nitrogen fixation in the bacterium *Rhizobium* are coded for by what?",
    "options": {
      "A": "The main chromosome",
      "B": "Plasmids",
      "C": "Ribosomes",
      "D": "R factors"
    },
    "answer": "B"
  },
  "page_95_4": {
    "question": "Enterotoxins (toxins that affect the GIT) of enterotoxigenic strains of *E. coli* are coded for by what?",
    "options": {
      "A": "The main chromosome",
      "B": "Plasmids",
      "C": "The cell wall",
      "D": "The capsule"
    },
    "answer": "B"
  },
  "page_96": {
    "question": "What are 'bacteriocins'?",
    "options": {
      "A": "Antibiotics that kill all bacteria.",
      "B": "Lethal proteins that cause lysis of other closely-related bacterial species.",
      "C": "Enzymes that degrade hydrocarbons.",
      "D": "Proteins that make up pili."
    },
    "answer": "B"
  },
  "page_96_2": {
    "question": "What are 'Col factors'?",
    "options": {
      "A": "Plasmids that code for degradative enzymes in Pseudomonas.",
      "B": "Plasmids that code for resistance to UV radiation.",
      "C": "Conjugative plasmids that code for Colicins (bacteriocins of E. coli).",
      "D": "Plasmids that code for enzymes to synthesize antibiotics."
    },
    "answer": "C"
  },
  "page_96_3": {
    "question": "Many degradative enzymes produced by the genus *Pseudomonas* that degrade difficult substrates (like hydrocarbons in oil) are coded by what?",
    "options": {
      "A": "Plasmids",
      "B": "The main chromosome",
      "C": "The ribosomes",
      "D": "The capsule"
    },
    "answer": "A"
  },
  "page_96_4": {
    "question": "Enzymes required for the synthesis of several important antibiotics by *Streptomyces* species are coded for by what?",
    "options": {
      "A": "The main chromosome",
      "B": "Plasmids",
      "C": "The cell wall",
      "D": "Bacteriocins"
    },
    "answer": "B"
  },
  "page_97": {
    "question": "What is a bacterial 'flagellum'?",
    "options": {
      "A": "A whip-like hollow filament used for motility.",
      "B": "A short, rigid tube used for adherence.",
      "C": "A storage granule.",
      "D": "The main chromosome."
    },
    "answer": "A"
  },
  "page_97_2": {
    "question": "Chemically, what is the flagellum made of?",
    "options": {
      "A": "Repeated protein units known as 'flagellin'.",
      "B": "Repeated protein units known as 'pilin'.",
      "C": "Peptidoglycan.",
      "D": "Lipopolysaccharide."
    },
    "answer": "A"
  },
  "page_97_3": {
    "question": "Where is the flagellum anchored?",
    "options": {
      "A": "It floats freely in the cytoplasm.",
      "B": "It is anchored in the cell envelope (cytoplasmic membrane, cell wall, and outer membrane in Gram-negatives).",
      "C": "It is anchored to the nucleoid.",
      "D": "It is anchored to the ribosomes."
    },
    "answer": "B"
  },
  "page_97_4": {
    "question": "What structure anchors the flagellum to the cell envelope?",
    "options": {
      "A": "A special basal body having ring structures.",
      "B": "A hook structure.",
      "C": "The flagellum shaft.",
      "D": "Pili."
    },
    "answer": "A"
  },
  "page_97_5": {
    "question": "How does the flagellum get energy for movement?",
    "options": {
      "A": "It is a passive process and requires no energy.",
      "B": "It is an energy-requiring process, obtained by hydrolysis of ATP.",
      "C": "It gets energy from sunlight.",
      "D": "It gets energy from the nucleus."
    },
    "answer": "B"
  },
  "page_98": {
    "question": "What is 'tumbling motility'?",
    "options": {
      "A": "Moving in one direction, stopping and oscillating, then moving in another direction.",
      "B": "Moving in a single, straight line.",
      "C": "Moving in a perfect circle.",
      "D": "Gliding slowly along a surface."
    },
    "answer": "A"
  },
  "page_98_2": {
    "question": "Flagellated bacteria usually move across a gradient of what?",
    "options": {
      "A": "A chemo-attracting substance (a nutrient).",
      "B": "Sunlight.",
      "C": "Oxygen.",
      "D": "Water."
    },
    "answer": "A"
  },
  "page_98_3": {
    "question": "Why must motility be observed on young, actively dividing bacterial cultures?",
    "options": {
      "A": "Because aged cultures are too small to see.",
      "B": "Because flagella are delicate and may disintegrate in aged cultures.",
      "C": "Because young cultures have more ATP.",
      "D": "Because aged cultures move too fast."
    },
    "answer": "B"
  },
  "page_99": {
    "question": "According to the diagram, what are the three main parts of a flagellum?",
    "options": {
      "A": "Filament, Hook, and Basal body.",
      "B": "Filament, Cap, and Hook.",
      "C": "Basal body, Rings, and Shaft.",
      "D": "Motor, Hook, and Filament."
    },
    "answer": "A"
  },
  "page_99_2": {
    "question": "Which part of the flagellum is embedded in the cell membrane/envelope?",
    "options": {
      "A": "Filament",
      "B": "Hook",
      "C": "Basal body",
      "D": "Filament cap"
    },
    "answer": "C"
  },
  "page_99_3": {
    "question": "Which part is the long, whip-like structure that extends outwards?",
    "options": {
      "A": "Filament",
      "B": "Hook",
      "C": "Basal body",
      "D": "Rings"
    },
    "answer": "A"
  },
  "page_99_4": {
    "question": "What part connects the Filament to the Basal body?",
    "options": {
      "A": "Filament cap",
      "B": "Hook",
      "C": "Rings",
      "D": "The membrane itself"
    },
    "answer": "B"
  },
  "page_100": {
    "question": "What is unique about 'Gliding Bacteria'?",
    "options": {
      "A": "They are motile bacteria that do not have any flagella or other motility structures.",
      "B": "They have the most flagella of any bacteria.",
      "C": "They are not motile.",
      "D": "They only move by tumbling."
    },
    "answer": "A"
  },
  "page_100_2": {
    "question": "Is the mechanism for gliding motility clear?",
    "options": {
      "A": "Yes, it is fully understood.",
      "B": "No, the mechanism is unclear.",
      "C": "Yes, it is caused by flagella.",
      "D": "Yes, it is caused by pili."
    },
    "answer": "B"
  },
  "page_100_3": {
    "question": "What is one hypothesis to explain gliding motility?",
    "options": {
      "A": "Periodical secretion and re-absorption of hydrogen cations across cell membranes.",
      "B": "The use of very small, invisible flagella.",
      "C": "The use of pili to pull the cell.",
      "D": "The cell simply floats on water currents."
    },
    "answer": "A"
  },
  "page_100_4": {
    "question": "What is a second hypothesis to explain gliding motility?",
    "options": {
      "A": "The use of pili.",
      "B": "Tumbling motility.",
      "C": "Secretion of a gel material that creates mechanical movement when it contracts and swells.",
      "D": "Repulsion from the cell's own negative charge."
    },
    "answer": "C"
  },
  "page_101": {
    "question": "What is another name for Pili?",
    "options": {
      "A": "Fimbriae",
      "B": "Flagella",
      "C": "Cilia",
      "D": "Endospores"
    },
    "answer": "A"
  },
  "page_101_2": {
    "question": "Pili are made of repeating units of a protein called...",
    "options": {
      "A": "Flagellin",
      "B": "Pilin",
      "C": "Peptidoglycan",
      "D": "Actin"
    },
    "answer": "B"
  },
  "page_101_3": {
    "question": "What is the function of the short type of pili?",
    "options": {
      "A": "It serves as an adherence mechanism to surfaces.",
      "B": "It is used for sexual conjugation.",
      "C": "It is used for motility.",
      "D": "It stores genetic material."
    },
    "answer": "A"
  },
  "page_101_4": {
    "question": "The second, long, single hollow tube type of pilus is used for what process?",
    "options": {
      "A": "Adherence to surfaces",
      "B": "Sexual conjugation (transfer of genetic material)",
      "C": "Motility",
      "D": "Protection from phagocytosis"
    },
    "answer": "B"
  },
  "page_103": {
    "question": "What are 'food storage granules' (inclusions)?",
    "options": {
      "A": "Insoluble, polymeric granules of essential nutrient molecules.",
      "B": "The main chromosome of the bacterium.",
      "C": "Motility structures.",
      "D": "Plasmids."
    },
    "answer": "A"
  },
  "page_103_2": {
    "question": "Which of the following is listed as a frequently stored food granule in bacteria?",
    "options": {
      "A": "Volutin (Poly-hydroxy butyrate)",
      "B": "Pilin",
      "C": "Flagellin",
      "D": "Mycolic acid"
    },
    "answer": "A"
  },
  "page_103_3": {
    "question": "Which storage material is widely distributed and found *only* in bacteria?",
    "options": {
      "A": "Glycogen",
      "B": "Starch",
      "C": "Poly-hydroxy butyrate",
      "D": "Cellulose"
    },
    "answer": "C"
  },
  "page_103_4": {
    "question": "Which bacterium is given as an example that stores coarse volutin granules in excess?",
    "options": {
      "A": "Escherichia coli",
      "B": "Corynebacterium diphtheriae",
      "C": "Staphylococcus aureus",
      "D": "Bacillus anthracis"
    },
    "answer": "B"
  },
  "page_104": {
    "question": "Under what conditions do bacterial endospores appear?",
    "options": {
      "A": "Under favorable growth conditions.",
      "B": "Under unfavorable growth conditions, especially nutrient depletion.",
      "C": "During sexual conjugation.",
      "D": "When the cell is actively dividing."
    },
    "answer": "B"
  },
  "page_104_2": {
    "question": "What substance, not found in vegetative cells, do endospores contain 5-15% of?",
    "options": {
      "A": "Mycolic acid",
      "B": "Peptidoglycan",
      "C": "Dipicolinic acid",
      "D": "Pilin"
    },
    "answer": "C"
  },
  "page_104_3": {
    "question": "Dipicolinic acid is a calcium chelator and is thought to play a role in what?",
    "options": {
      "A": "Conferring heat resistance to endospores.",
      "B": "Allowing the spore to move.",
      "C": "Storing genetic material.",
      "D": "Aiding in cell division."
    },
    "answer": "A"
  },
  "page_104_4": {
    "question": "Which of the following is NOT a structural feature of the bacterial endospore?",
    "options": {
      "A": "A central core cell.",
      "B": "A peptidoglycan cortex.",
      "C": "An outer thick spore coat.",
      "D": "A flagellum for motility."
    },
    "answer": "D"
  },
  "page_104_5": {
    "question": "Why are endospores metabolically inert?",
    "options": {
      "A": "Because they are metabolically inert.",
      "B": "Because they are quite dehydrated (contain only about 15% water).",
      "C": "Because they contain dipicolinic acid.",
      "D": "Because they have a thick spore coat."
    },
    "answer": "B"
  },
  "page_105": {
    "question": "Endospores are the most resistant life forms detected and are resistant to...",
    "options": {
      "A": "Dryness, heat, chemical agents and destructive radiation.",
      "B": "Only dryness and heat.",
      "C": "Only chemical agents.",
      "D": "Only radiation."
    },
    "answer": "A"
  },
  "page_105_2": {
    "question": "Most spore-forming bacteria are Gram positive bacilli, such as which genus?",
    "options": {
      "A": "Staphylococcus",
      "B": "Streptococcus",
      "C": "Escherichia",
      "D": "Bacillus and Clostridium"
    },
    "answer": "D"
  },
  "page_105_3": {
    "question": "What is the main function of bacterial endospores (unlike fungal spores)?",
    "options": {
      "A": "Reproduction",
      "B": "Protection against dryness and other harsh conditions (survival).",
      "C": "Motility",
      "D": "Adherence"
    },
    "answer": "B"
  },
  "page_105_4": {
    "question": "What happens to endospores when growth conditions become favorable once more?",
    "options": {
      "A": "They die.",
      "B": "They form a new, stronger spore.",
      "C": "They germinate into the normal vegetative form of the cell.",
      "D": "They begin conjugation."
    },
    "answer": "C"
  },
  "page_109_110": {
    "question": "Which list contains the main chemical elements necessary for cell growth?",
    "options": {
      "A": "Carbon, Nitrogen, Hydrogen, Oxygen, Sulfur and Phosphorus.",
      "B": "Iron, Magnesium, Calcium, and Zinc.",
      "C": "Helium, Argon, and Neon.",
      "D": "DNA, RNA, and Proteins."
    },
    "answer": "A"
  },
  "page_111": {
    "question": "Microorganisms that use organic compounds as their major carbon source are called...",
    "options": {
      "A": "Autotrophs",
      "B": "Heterotrophs",
      "C": "Phototrophs",
      "D": "Chemotrophs"
    },
    "answer": "B"
  },
  "page_111_2": {
    "question": "Microorganisms that use CO2 as their major or even sole source of carbon are called...",
    "options": {
      "A": "Autotrophs",
      "B": "Heterotrophs",
      "C": "Phototrophs",
      "D": "Chemotrophs"
    },
    "answer": "A"
  },
  "page_112": {
    "question": "Nitrogen is an essential part of which biological molecules?",
    "options": {
      "A": "Lipids",
      "B": "Carbohydrates",
      "C": "Amino acids (that form proteins)",
      "D": "Water"
    },
    "answer": "C"
  },
  "page_112_2": {
    "question": "What is the process called when some bacteria use atmospheric (gaseous) nitrogen for cell synthesis?",
    "options": {
      "A": "Denitrification",
      "B": "Nitrification",
      "C": "Nitrogen fixation",
      "D": "Ammonification"
    },
    "answer": "C"
  },
  "page_113": {
    "question": "Sulfur is needed for the biosynthesis of which amino acids?",
    "options": {
      "A": "Alanine, Glycine, and Valine",
      "B": "Cysteine, cystine and methionine",
      "C": "Leucine and Isoleucine",
      "D": "Only Proline"
    },
    "answer": "B"
  },
  "page_113_2": {
    "question": "Phosphorus is essential for the synthesis of which two critical molecules?",
    "options": {
      "A": "Nucleic acids and ATP",
      "B": "Amino acids and proteins",
      "C": "Carbohydrates and lipids",
      "D": "Vitamins and minerals"
    },
    "answer": "A"
  },
  "page_115": {
    "question": "Organisms that use chemical compounds for energy production are called...",
    "options": {
      "A": "Phototrophs",
      "B": "Chemotrophs",
      "C": "Autotrophs",
      "D": "Heterotrophs"
    },
    "answer": "B"
  },
  "page_115_2": {
    "question": "Organisms that primarily depend on radiant energy (light) are called...",
    "options": {
      "A": "Phototrophs",
      "B": "Chemotrophs",
      "C": "Autotrophs",
      "D": "Heterotrophs"
    },
    "answer": "A"
  },
  "page_115_3": {
    "question": "What is a 'Chemoautotroph'?",
    "options": {
      "A": "Uses light for energy and CO2 for carbon.",
      "B": "Uses inorganic substances for energy and CO2 for carbon.",
      "C": "Uses organic substances for energy and organic compounds for carbon.",
      "D": "Uses light for energy and organic compounds for carbon."
    },
    "answer": "B"
  },
  "page_116": {
    "question": "What is a 'Chemoheterotroph'?",
    "options": {
      "A": "Uses light for energy and CO2 for carbon.",
      "B": "Uses inorganic substances for energy and CO2 for carbon.",
      "C": "Uses organic substances for energy and organic compounds for carbon.",
      "D": "Uses light for energy and organic compounds for carbon."
    },
    "answer": "C"
  },
  "page_116_2": {
    "question": "Most bacteria, fungi, and protozoa belong to which nutritional class?",
    "options": {
      "A": "Chemoautotrophs",
      "B": "Chemoheterotrophos",
      "C": "Photoautotrophs",
      "D": "Photoheterotrophs"
    },
    "answer": "B"
  },
  "page_116_3": {
    "question": "What is a 'Photoautotroph'?",
    "options": {
      "A": "Uses light for energy and CO2 for carbon.",
      "B": "Uses inorganic substances for energy and CO2 for carbon.",
      "C": "Uses organic substances for energy and organic compounds for carbon.",
      "D": "Uses light for energy and organic compounds for carbon."
    },
    "answer": "A"
  },
  "page_116_4": {
    "question": "Algae, cyanobacteria, purple sulfur and green sulfur bacteria belong to which nutritional class?",
    "options": {
      "A": "Chemoautotrophs",
      "B": "Chemoheterotrophos",
      "C": "Photoautotrophs",
      "D": "Photoheterotrophs"
    },
    "answer": "C"
  },
  "page_116_5": {
    "question": "What is a 'Photoheterotroph'?",
    "options": {
      "A": "Uses light for energy and CO2 for carbon.",
      "B": "Uses inorganic substances for energy and CO2 for carbon.",
      "C": "Uses organic substances for energy and organic compounds for carbon.",
      "D": "Uses light for energy and organic compounds for carbon."
    },
    "answer": "D"
  },
  "page_117": {
    "question": "Which of the following is NOT one of the four main physical environmental conditions that influence microbes?",
    "options": {
      "A": "Temperature",
      "B": "pH",
      "C": "Gaseous atmosphere",
      "D": "Salinity"
    },
    "answer": "D"
  },
  "page_117_2": {
    "question": "Microorganisms that grow best at temperatures between 15-20°C are called...",
    "options": {
      "A": "Psychrophils",
      "B": "Mesophils",
      "C": "Thermophils",
      "D": "Neutralophils"
    },
    "answer": "A"
  },
  "page_117_3": {
    "question": "Microorganisms that grow best at temperatures between 25-40°C are called...",
    "options": {
      "A": "Psychrophils",
      "B": "Mesophils",
      "C": "Thermophils",
      "D": "Acidophils"
    },
    "answer": "B"
  },
  "page_117_4": {
    "question": "Microorganisms that grow best at temperatures between 40-85°C are called...",
    "options": {
      "A": "Psychrophils",
      "B": "Mesophils",
      "C": "Thermophils",
      "D": "Halophils"
    },
    "answer": "C"
  },
  "page_117_5": {
    "question": "Organisms like *Pyrococcus* species are notable for growing at temperatures...",
    "options": {
      "A": "Below freezing",
      "B": "At human body temperature",
      "C": "Above 100°C",
      "D": "Only at neutral pH"
    },
    "answer": "C"
  },
  "page_118": {
    "question": "Most bacteria grow best at a pH around neutrality and are called...",
    "options": {
      "A": "Neutraloplills",
      "B": "Acidophils",
      "C": "Alkaliphils",
      "D": "Mesophils"
    },
    "answer": "A"
  },
  "page_118_2": {
    "question": "What is the optimum pH for the growth of most molds and yeasts?",
    "options": {
      "A": "Lower than that of bacteria (pH 5-6)",
      "B": "Higher than that of bacteria (pH 8-10)",
      "C": "The same as bacteria (pH 7)",
      "D": "They can grow at any pH."
    },
    "answer": "A"
  },
  "page_118_3": {
    "question": "What are the two principal gases that affect the growth of microorganisms?",
    "options": {
      "A": "Carbon dioxide and oxygen",
      "B": "Nitrogen and hydrogen",
      "C": "Methane and sulfur dioxide",
      "D": "Helium and argon"
    },
    "answer": "A"
  },
  "page_119": {
    "question": "Microorganisms that normally require O2 for growth (e.g., in 21% O2) are called...",
    "options": {
      "A": "Aerobic microorganisms",
      "B": "Facultative microorganisms",
      "C": "Anaerobic microorganisms",
      "D": "Microaerophils"
    },
    "answer": "A"
  },
  "page_119_2": {
    "question": "Microorganisms that can grow in an air atmosphere but can also grow anaerobically are called...",
    "options": {
      "A": "Aerobic microorganisms",
      "B": "Facultative microorganisms",
      "C": "Anaerobic microorganisms",
      "D": "Microaerophils"
    },
    "answer": "B"
  },
  "page_119_3": {
    "question": "Do facultative microorganisms *require* O2 for growth?",
    "options": {
      "A": "Yes, it is essential.",
      "B": "No, they do not require O2, although they can use it for energy.",
      "C": "Yes, but only in low concentrations.",
      "D": "No, O2 is toxic to them."
    },
    "answer": "B"
  },
  "page_120": {
    "question": "Microorganisms which may be poisoned by O2 and cannot grow in an air atmosphere are called...",
    "options": {
      "A": "Aerobic microorganisms",
      "B": "Facultative microorganisms",
      "C": "Anaerobic microorganisms",
      "D": "Microaerophils"
    },
    "answer": "C"
  },
  "page_120_2": {
    "question": "What are 'Strict anaerobes'?",
    "options": {
      "A": "Microorganisms that prefer low O2.",
      "B": "Microorganisms that tolerate O2.",
      "C": "Microorganisms that are killed by brief exposure to O2.",
      "D": "Microorganisms that require O2."
    },
    "answer": "C"
  },
  "page_120_3": {
    "question": "What causes the toxicity of O2 for strict anaerobes?",
    "options": {
      "A": "Toxic molecules produced during O2 reactions, like superoxide radicals and hydrogen peroxide.",
      "B": "The O2 gas itself physically damaging the cell wall.",
      "C": "O2 preventing the cell from getting CO2.",
      "D": "O2 raising the pH of the cytoplasm."
    },
    "answer": "A"
  },
  "page_121": {
    "question": "What is the function of the enzyme 'superoxide dismutase'?",
    "options": {
      "A": "It rapidly converts superoxide radicals to H2O2.",
      "B": "It converts H2O2 into molecular oxygen and water.",
      "C": "It produces superoxide radicals.",
      "D": "It uses O2 for energy."
    },
    "answer": "A"
  },
  "page_121_2": {
    "question": "What is the function of the enzyme 'catalase'?",
    "options": {
      "A": "It rapidly converts superoxide radicals to H2O2.",
      "B": "It converts H2O2 into molecular oxygen and water.",
      "C": "It produces hydrogen peroxide.",
      "D": "It is toxic to the cell."
    },
    "answer": "B"
  },
  "page_122": {
    "question": "What are 'Microaerophilic microorganisms'?",
    "options": {
      "A": "They are killed by any exposure to O2.",
      "B": "They require the full 21% O2 in air.",
      "C": "They can use O2 but cannot withstand 21% O2, and grow best at 1-15% O2.",
      "D": "They do not use O2 at all."
    },
    "answer": "C"
  },
  "page_122_2": {
    "question": "Why do microaerophiles have a limited tolerance to O2?",
    "options": {
      "A": "Due to a high susceptibility to peroxide radicals and Hydrogen peroxide.",
      "B": "Because they lack the genes for respiration.",
      "C": "Because they prefer high levels of CO2.",
      "D": "Because they are a type of strict anaerobe."
    },
    "answer": "A"
  },
  "page_124": {
    "question": "In what type of solution is there no net flow of water into or out of the microbial cell?",
    "options": {
      "A": "Isotonic solution",
      "B": "Hypertonic solution",
      "C": "Hypotonic solution",
      "D": "A neutral pH solution"
    },
    "answer": "A"
  },
  "page_124_2": {
    "question": "What happens to a cell in a 'hypertonic' environment (higher solute concentration outside)?",
    "options": {
      "A": "The cell loses water and growth is inhibited.",
      "B": "Water flows in and cell rupture occurs.",
      "C": "There is no net flow of water.",
      "D": "The cell grows normally."
    },
    "answer": "A"
  },
  "page_124_3": {
    "question": "What happens to a cell in a 'hypotonic' environment (much lower solute concentration outside)?",
    "options": {
      "A": "The cell loses water and growth is inhibited.",
      "B": "Water flows in and cell rupture occurs.",
      "C": "There is no net flow of water.",
      "D": "The cell is unaffected."
    },
    "answer": "B"
  },
  "page_126": {
    "question": "When do cells typically obtain energy through anaerobic respiration or fermentation?",
    "options": {
      "A": "If no oxygen is available.",
      "B": "When oxygen is abundant.",
      "C": "In the presence of sunlight.",
      "D": "When nutrients are depleted."
    },
    "answer": "A"
  },
  "page_126_2": {
    "question": "How does fermentation compare to aerobic respiration in terms of ATP production?",
    "options": {
      "A": "It is not an efficient process and forms far fewer ATP molecules.",
      "B": "It is much more efficient and forms far more ATP molecules.",
      "C": "It is equally efficient and forms the same number of ATP molecules.",
      "D": "It does not produce any ATP."
    },
    "answer": "A"
  },
  "page_126_3": {
    "question": "What are the two primary fermentation processes mentioned?",
    "options": {
      "A": "Lactic Acid Fermentation and Alcohol Fermentation",
      "B": "Glycolysis and TCA Cycle",
      "C": "Oxidative Phosphorylation and Photophosphorylation",
      "D": "Deamination and Nitrogen Fixation"
    },
    "answer": "A"
  },
  "page_127_128": {
    "question": "Where is lactic acid fermentation given as an example of occurring?",
    "options": {
      "A": "In yeast cells making bread.",
      "B": "In muscle tissues during rapid and vigorous exercise when O2 is depleted.",
      "C": "In cyanobacteria during photosynthesis.",
      "D": "In strict anaerobes."
    },
    "answer": "B"
  },
  "page_128_2": {
    "question": "In lactic acid fermentation, what molecule (formed during Glycolysis) is converted into lactic acid?",
    "options": {
      "A": "Pyruvic acid",
      "B": "Glucose",
      "C": "Alcohol",
      "D": "NADH"
    },
    "answer": "A"
  },
  "page_128_3": {
    "question": "What is the simple equation for lactic acid fermentation?",
    "options": {
      "A": "Glucose → Pyruvic acid → Lactic acid + energy",
      "B": "Glucose → Pyruvic acid → alcohol + carbon dioxide + energy",
      "C": "Glucose + Oxygen → CO2 + Water + energy",
      "D": "Lactic acid → Glucose + energy"
    },
    "answer": "A"
  },
  "page_129": {
    "question": "Is the shift to lactic acid fermentation a permanent replacement for aerobic respiration in cells?",
    "options": {
      "A": "Yes, cells can live on it permanently.",
      "B": "No, this shift is only temporary and cells need oxygen for sustained activity.",
      "C": "Yes, it is more efficient than aerobic respiration.",
      "D": "No, it does not provide any energy."
    },
    "answer": "B"
  },
  "page_130": {
    "question": "What sensation does the build-up of Lactic acid in muscle tissue cause?",
    "options": {
      "A": "A cooling, numb sensation.",
      "B": "A burning, painful sensation.",
      "C": "A feeling of increased energy.",
      "D": "No sensation at all."
    },
    "answer": "B"
  },
  "page_131": {
    "question": "In which organisms does alcohol fermentation typically occur?",
    "options": {
      "A": "In human muscle cells.",
      "B": "In yeasts and some bacteria.",
      "C": "In all plants.",
      "D": "In algae and protozoa."
    },
    "answer": "B"
  },
  "page_131_2": {
    "question": "In alcohol fermentation, pyruvic acid is broken down to produce...",
    "options": {
      "A": "Alcohol and carbon dioxide",
      "B": "Lactic acid",
      "C": "Only alcohol",
      "D": "Only carbon dioxide"
    },
    "answer": "A"
  },
  "page_132": {
    "question": "What is the simple equation for alcohol fermentation?",
    "options": {
      "A": "Glucose → Pyruvic acid → Lactic acid + energy",
      "B": "Glucose → Pyruvic acid → alcohol + carbon dioxide + energy",
      "C": "Glucose + Oxygen → CO2 + Water + energy",
      "D": "Alcohol → Glucose + energy"
    },
    "answer": "B"
  },
  "page_132_2": {
    "question": "In alcohol fermentation, what molecule is formed when the Pyruvate loses a carbon?",
    "options": {
      "A": "Carbon dioxide",
      "B": "Lactic acid",
      "C": "Ethyl Alcohol",
      "D": "NADH"
    },
    "answer": "A"
  },
  "page_133": {
    "question": "Which of the following food products is produced using fermentation?",
    "options": {
      "A": "Yogurt, Cheese, and Bread",
      "B": "Sugar",
      "C": "Flour",
      "D": "Salt"
    },
    "answer": "A"
  },
  "page_133_2": {
    "question": "Which of these is NOT listed as a product of fermentation?",
    "options": {
      "A": "Soy Sauce",
      "B": "Vinegar",
      "C": "Beer / Wine",
      "D": "Sugar"
    },
    "answer": "D"
  },
  "page_136": {
    "question": "What is the substrate of the Tricarboxylic acid (TCA) cycle (Kreb's cycle)?",
    "options": {
      "A": "Acetyl-CoA",
      "B": "Pyruvate",
      "C": "Glucose",
      "D": "Lactic Acid"
    },
    "answer": "A"
  },
  "page_136_2": {
    "question": "Acetyl-CoA arises from the catabolism of which molecules?",
    "options": {
      "A": "Only carbohydrates",
      "B": "Only lipids",
      "C": "Only amino acids",
      "D": "Carbohydrates, lipids and amino acids"
    },
    "answer": "D"
  },
  "page_136_3": {
    "question": "Acetyl-CoA is an energy-rich molecule composed of coenzyme A and what?",
    "options": {
      "A": "Acetic acid",
      "B": "Lactic acid",
      "C": "Pyruvic acid",
      "D": "Citric acid"
    },
    "answer": "A"
  },
  "page_138": {
    "question": "For each *one* acetyl-CoA molecule oxidized, the TCA cycle generates...",
    "options": {
      "A": "2 CO2s, 3 NADHs, 1 FADH2, 1 GTP",
      "B": "1 CO2, 2 NADHs, 2 FADH2, 2 GTP",
      "C": "6 CO2s, 10 NADHs, 2 FADH2, 4 ATP",
      "D": "1 Glucose, 2 Pyruvate"
    },
    "answer": "A"
  },
  "page_138_2": {
    "question": "When 1 glucose molecule is oxidized by *glycolysis and the TCA cycle*, how many ATP are *directly* synthesized (via substrate-level phosphorylation)?",
    "options": {
      "A": "Only 4 ATP",
      "B": "38 ATP",
      "C": "2 ATP",
      "D": "24 ATP"
    },
    "answer": "A"
  },
  "page_138_3": {
    "question": "Where does *most* of the ATP generated from the oxidation of glucose come from?",
    "options": {
      "A": "Directly from glycolysis",
      "B": "Directly from the TCA cycle",
      "C": "From the oxidation of NADH and FADH2 in the electron transport chain",
      "D": "From fermentation"
    },
    "answer": "C"
  },
  "page_139": {
    "question": "The Electron Transport Chain (ETC) transfers electrons from donors (like NADH) to acceptors such as...",
    "options": {
      "A": "O2 (Oxygen)",
      "B": "CO2 (Carbon Dioxide)",
      "C": "Glucose",
      "D": "Water"
    },
    "answer": "A"
  },
  "page_139_2": {
    "question": "Where are the ETC carriers located in *bacteria*?",
    "options": {
      "A": "In the inner membrane of the mitochondria",
      "B": "In the bacterial plasma membrane",
      "C": "In the cell wall",
      "D": "In the cytoplasm"
    },
    "answer": "B"
  },
  "page_139_3": {
    "question": "Where are the ETC carriers located in *eukaryotes*?",
    "options": {
      "A": "In the inner membrane of the mitochondria",
      "B": "In the bacterial plasma membrane",
      "C": "In the cell wall",
      "D": "In the cytoplasm"
    },
    "answer": "A"
  },
  "page_139_4": {
    "question": "What is 'oxidative phosphorylation'?",
    "options": {
      "A": "The process by which energy from electron transport is used to make ATP.",
      "B": "The process of breaking down glucose into pyruvate.",
      "C": "The process of using light energy to make ATP.",
      "D": "The process of converting pyruvic acid to lactic acid."
    },
    "answer": "A"
  },
  "page_140": {
    "question": "What is the Total Aerobic Yield of ATP from the aerobic oxidation of one glucose molecule?",
    "options": {
      "A": "2 ATP",
      "B": "4-6 ATP",
      "C": "36-38 ATP",
      "D": "100 ATP"
    },
    "answer": "C"
  },
  "page_140_2": {
    "question": "How much ATP is generated from the two FADH2 produced during the TCA cycle?",
    "options": {
      "A": "2 ATP",
      "B": "4 ATP",
      "C": "18 ATP",
      "D": "6 ATP"
    },
    "answer": "B"
  },
  "page_140_3": {
    "question": "How much ATP is generated from the six NADH produced during the TCA cycle?",
    "options": {
      "A": "2 ATP",
      "B": "4 ATP",
      "C": "18 ATP",
      "D": "6 ATP"
    },
    "answer": "C"
  },
  "page_140_4": {
    "question": "How much ATP is generated from substrate-level phosphorylation (GTP) during the TCA cycle?",
    "options": {
      "A": "2 ATP",
      "B": "4 ATP",
      "C": "18 ATP",
      "D": "6 ATP"
    },
    "answer": "A"
  },
  "page_141": {
    "question": "How does aerobic respiration compare in effectiveness to anaerobic processes?",
    "options": {
      "A": "Aerobic respiration is much more effective.",
      "B": "Aerobic respiration is much less effective.",
      "C": "They are equally effective.",
      "D": "Anaerobic processes are more effective."
    },
    "answer": "A"
  },
  "page_141_2": {
    "question": "What is the 'Pasteur effect'?",
    "options": {
      "A": "When microbes are moved to aerobic conditions, they *reduce* their rate of sugar catabolism.",
      "B": "When microbes are moved to aerobic conditions, they *increase* their rate of sugar catabolism.",
      "C": "The process of killing microbes with heat.",
      "D": "The process of microbes switching to fermentation."
    },
    "answer": "A"
  },
  "page_141_3": {
    "question": "What is the advantage of the Pasteur effect for the microorganism?",
    "options": {
      "A": "It can produce alcohol faster.",
      "B": "It can grow without oxygen.",
      "C": "Less sugar must be degraded to obtain the same amount of ATP.",
      "D": "It produces more heat."
    },
    "answer": "C"
  },
  "page_142": {
    "question": "What is 'deamination'?",
    "options": {
      "A": "The removal of the amino group from an amino acid.",
      "B": "The addition of an amino group to an amino acid.",
      "C": "The breakdown of glucose.",
      "D": "The first step in lipid use."
    },
    "answer": "A"
  },
  "page_142_2": {
    "question": "What can happen to the organic acid that results from deamination?",
    "options": {
      "A": "It can be converted to pyruvate, acetyl-CoA, or a TCA cycle intermediate and be oxidized.",
      "B": "It is immediately excreted as a waste product.",
      "C": "It is used to build the cell wall.",
      "D": "It becomes toxic to the cell."
    },
    "answer": "A"
  },
  "page_142_3": {
    "question": "What effect does the excretion of excess nitrogen (as ammonium ion) from deamination have on the medium?",
    "options": {
      "A": "It makes the medium acidic.",
      "B": "It makes the medium alkaline.",
      "C": "It makes the medium neutral.",
      "D": "It has no effect on the medium's pH."
    },
    "answer": "B"
  },
  "page_143": {
    "question": "How do most bacteria multiply?",
    "options": {
      "A": "By sexual reproduction",
      "B": "By asexual reproduction",
      "C": "By forming gametes",
      "D": "By fusing two parent cells"
    },
    "answer": "B"
  },
  "page_143_2": {
    "question": "What is the most common mode of asexual reproduction in most prokaryotes?",
    "options": {
      "A": "Transverse binary fission",
      "B": "Budding",
      "C": "Fragmentation",
      "D": "Spore formation"
    },
    "answer": "A"
  },
  "page_143_3": {
    "question": "What happens *prior* to cell division in binary fission?",
    "options": {
      "A": "The cell contents are halved.",
      "B": "The DNA is replicated.",
      "C": "The cell shrinks.",
      "D": "A septum is formed."
    },
    "answer": "B"
  },
  "page_144": {
    "question": "What is the 'septum' in the context of binary fission?",
    "options": {
      "A": "A cross wall that is formed to divide the enlarged cell into two.",
      "B": "A small bud that grows off the parent cell.",
      "C": "The replicated DNA.",
      "D": "A storage granule."
    },
    "answer": "A"
  },
  "page_144_2": {
    "question": "What happens if daughter cells remain attached after binary fission?",
    "options": {
      "A": "They form characteristic pairs, clusters or chains.",
      "B": "They immediately die.",
      "C": "They form a single, larger cell.",
      "D": "They form an endospore."
    },
    "answer": "A"
  },
  "page_144_3": {
    "question": "What is 'budding' as a form of prokaryotic reproduction?",
    "options": {
      "A": "A small protuberance (bud) grows out at one end of the cell and then separates.",
      "B": "The cell divides into two equal halves.",
      "C": "The cell shatters into multiple fragments.",
      "D": "Two cells fuse their genetic material."
    },
    "answer": "A"
  },
  "page_145_146": {
    "question": "If you start with a single bacterium, the increase in population numbers (1 → 2 → 4 → 8 → 16) can be expressed as...",
    "options": {
      "A": "2n",
      "B": "n^2",
      "C": "2^n",
      "D": "n+2"
    },
    "answer": "C"
  },
  "page_147": {
    "question": "In the exponential growth equation 2^n, what does 'n' refer to?",
    "options": {
      "A": "The number of generations",
      "B": "The total number of cells in the culture (N)",
      "C": "The starting number of cells",
      "D": "The time in hours"
    },
    "answer": "A"
  },
  "page_147_2": {
    "question": "In the equation N = N0 x 2^n, what does 'N0' represent?",
    "options": {
      "A": "The final number of cells",
      "B": "The number of bacteria inoculated at time zero (initial population)",
      "C": "The number of generations",
      "D": "The generation time"
    },
    "answer": "B"
  },
  "page_148": {
    "question": "What is the 'generation time'?",
    "options": {
      "A": "The time interval required for a cell to divide (or for a population to double).",
      "B": "The total time a culture grows for.",
      "C": "The number of generations per hour.",
      "D": "The time it takes for a culture to die."
    },
    "answer": "A"
  },
  "page_148_2": {
    "question": "What is the generation time for *E. coli* in a rich medium?",
    "options": {
      "A": "13 hours",
      "B": "12.5 minutes",
      "C": "1 minute",
      "D": "24 hours"
    },
    "answer": "B"
  },
  "page_148_3": {
    "question": "What is the generation time for *Mycobacterium tuberculosis*?",
    "options": {
      "A": "About 13 hours",
      "B": "About 12.5 minutes",
      "C": "About 1 minute",
      "D": "About 30 seconds"
    },
    "answer": "A"
  },
  "page_149": {
    "question": "What is the full equation for the final population (N) starting from an initial population (N0)?",
    "options": {
      "A": "N = N0 x 2^n",
      "B": "N = N0 + 2^n",
      "C": "N = N0 / 2^n",
      "D": "N = n x 2"
    },
    "answer": "A"
  },
  "page_149_2": {
    "question": "What is the mathematical formula used to calculate the number of generations (n)?",
    "options": {
      "A": "n = 3.3 (log10 N - log10 N0)",
      "B": "n = 0.301 (log10 N + log10 N0)",
      "C": "n = N / N0",
      "D": "n = t / g"
    },
    "answer": "A"
  },
  "page_150": {
    "question": "How can the generation time (g) be determined?",
    "options": {
      "A": "g = t / n (time interval / number of generations)",
      "B": "g = n / t (number of generations / time interval)",
      "C": "g = t x n",
      "D": "g = N / n"
    },
    "answer": "A"
  },
  "page_150_2": {
    "question": "What is the 'growth rate' (R)?",
    "options": {
      "A": "The number of generations per hour",
      "B": "The generation time",
      "C": "The total time of the experiment",
      "D": "The total number of cells"
    },
    "answer": "A"
  },
  "page_151_152": {
    "question": "What is a 'closed system' for growing microorganisms?",
    "options": {
      "A": "A system where new nutrients are continuously added.",
      "B": "A system (like a tube or flask) where no new nutrients are added and no waste products are removed.",
      "C": "A system open to the air.",
      "D": "A system where only waste products are removed."
    },
    "answer": "B"
  },
  "page_152": {
    "question": "What two factors eventually stop the increase in cell numbers in a closed system?",
    "options": {
      "A": "1. The nutrients were used-up, or 2. Enough metabolic waste products accumulate.",
      "B": "1. The container is too small, or 2. The temperature changes.",
      "C": "1. The pH changes, or 2. The light source is removed.",
      "D": "1. The cells run out of space, or 2. The cells forget how to divide."
    },
    "answer": "A"
  },
  "page_153_154": {
    "question": "What is the 'Lag phase' of the bacterial growth curve?",
    "options": {
      "A": "The phase of maximal growth rate.",
      "B": "A phase with no increase in cell number, where cells increase in size and synthesize new enzymes.",
      "C": "A phase where the growth rate is zero due to nutrient exhaustion.",
      "D": "A phase where the death rate accelerates."
    },
    "answer": "B"
  },
  "page_154": {
    "question": "What is the 'Logarithmic phase' (or exponential phase)?",
    "options": {
      "A": "A phase with no increase in cell number.",
      "B": "The phase where the growth rate is constant and maximal.",
      "C": "The phase where the death rate accelerates.",
      "D": "The phase where growth rate is zero."
    },
    "answer": "B"
  },
  "page_154_2": {
    "question": "In which phase are cells most nearly uniform in terms of chemical composition and metabolic activities?",
    "options": {
      "A": "Lag phase",
      "B": "Logarithmic phase",
      "C": "Stationary phase",
      "D": "Decline (death) phase"
    },
    "answer": "B"
  },
  "page_155": {
    "question": "What is the 'Stationary phase'?",
    "options": {
      "A": "The growth rate is zero due to accumulation of toxic products and/or exhaustion of nutrients.",
      "B": "The growth rate is maximal.",
      "C": "There is no increase in cell number, but cells are adapting.",
      "D": "The death rate accelerates."
    },
    "answer": "A"
  },
  "page_155_2": {
    "question": "What happens in the 'Decline (death) phase'?",
    "options": {
      "A": "The growth rate is maximal.",
      "B": "The number of viable cells decreases exponentially due to further waste accumulation and nutrient depletion.",
      "C": "The growth rate is zero, with some cells dying and others dividing.",
      "D": "Cells are adapting to the new environment."
    },
    "answer": "B"
  },
  "page_156": {
    "question": "Why is cellular *growth* (increase in size) not a good measure for bacterial growth?",
    "options": {
      "A": "Because variation in cell size during growth stages is limited.",
      "B": "Because bacterial cells do not grow in size.",
      "C": "Because it is too hard to measure.",
      "D": "Because cells only grow in the lag phase."
    },
    "answer": "A"
  },
  "page_156_2": {
    "question": "Bacterial growth is more conveniently measured in terms of...",
    "options": {
      "A": "Increase of cell size.",
      "B": "Increase of number of cells or weight of cell mass.",
      "C": "The color of the culture.",
      "D": "The amount of nutrients used."
    },
    "answer": "B"
  },
  "page_157": {
    "question": "What is the 'BREED SLIDE METHOD'?",
    "options": {
      "A": "A method that counts only living cells.",
      "B": "A total count method based on counting cells in a stained smear of a known volume over a known area.",
      "C": "A method that uses an electronic counter.",
      "D": "A method that measures the dry weight of cells."
    },
    "answer": "B"
  },
  "page_157_2": {
    "question": "To calculate the number of cells in the original culture using the Breed slide method, what must be known?",
    "options": {
      "A": "The area of the microscope field.",
      "B": "The weight of the cells.",
      "C": "The turbidity of the culture.",
      "D": "The type of stain used."
    },
    "answer": "A"
  },
  "page_158": {
    "question": "What do 'COUNTING CHAMBERS' (like a Petroff-Hauser counter) measure?",
    "options": {
      "A": "Only the number of living cells.",
      "B": "The total number of cells (live and dead) by direct microscopic counting.",
      "C": "The cell mass.",
      "D": "The turbidity of the suspension."
    },
    "answer": "B"
  },
  "page_158_2": {
    "question": "What are the grids on a counting chamber divided into?",
    "options": {
      "A": "Circles of different sizes.",
      "B": "Squares of known area that receive a known volume.",
      "C": "Sections based on cell type.",
      "D": "Sections for live and dead cells."
    },
    "answer": "B"
  },
  "page_160": {
    "question": "What is a 'Coulter counter'?",
    "options": {
      "A": "A special counting slide.",
      "B": "A device that measures turbidity.",
      "C": "A device capable of counting particles (cells) in terms of electric impulses.",
      "D": "A method for weighing cell mass."
    },
    "answer": "C"
  },
  "page_160_2": {
    "question": "How does a Coulter counter detect a bacterial cell?",
    "options": {
      "A": "It stains the cell and takes a picture.",
      "B": "It detects a drop in voltage across a slit (aperture) as the cell passes through.",
      "C": "It weighs the cell.",
      "D": "It measures the light scattered by the cell."
    },
    "answer": "B"
  },
  "page_162": {
    "question": "What do 'VIABLE COUNT METHODS' determine?",
    "options": {
      "A": "The total number of cells (live and dead).",
      "B": "The number of living bacterial cells.",
      "C": "The dry weight of the bacteria.",
      "D": "The turbidity of the culture."
    },
    "answer": "B"
  },
  "page_162_2": {
    "question": "The viable count technique is based on what assumption?",
    "options": {
      "A": "That each living bacterial cell can give rise to a single colony.",
      "B": "That 100 cells will form one colony.",
      "C": "That dead cells can also form colonies.",
      "D": "That all cells in the culture are alive."
    },
    "answer": "A"
  },
  "page_162_3": {
    "question": "What two techniques are used for viable count determination?",
    "options": {
      "A": "Breed slide and counting chamber.",
      "B": "The spread plate technique and the pour plate technique.",
      "C": "Coulter counter and turbidimetry.",
      "D": "Simple stain and Gram stain."
    },
    "answer": "B"
  },
  "page_162_4": {
    "question": "Why are suitable ten-fold dilutions used in these techniques?",
    "options": {
      "A": "Because bacteria grow in exceedingly high numbers.",
      "B": "To kill the bacteria.",
      "C": "To make the bacteria larger.",
      "D": "To save on growth medium."
    },
    "answer": "A"
  },
  "page_163": {
    "question": "Why is it more appropriate to express the result of a viable count as 'colony-forming units' (CFUs)?",
    "options": {
      "A": "Because some bacteria form clumps of two or more cells that still give rise to a single colony.",
      "B": "Because 'CFU' is a shorter term than 'cells'.",
      "C": "Because dead cells can sometimes form colonies.",
      "D": "Because the exact number is never known."
    },
    "answer": "A"
  },
  "page_165": {
    "question": "What is the key difference between 'The pour plate method' and 'The spread plate method'?",
    "options": {
      "A": "Pour plate inoculates 0.1 ml; Spread plate inoculates 1.0 ml.",
      "B": "In pour plate, melted agar is added *after* inoculum and colonies grow *on and in* the medium. In spread plate, inoculum is spread *on top* of solid medium.",
      "C": "In spread plate, melted agar is added *after* inoculum. In pour plate, inoculum is spread *on top* of solid medium.",
      "D": "There is no difference, the terms are interchangeable."
    },
    "answer": "B"
  },
  "page_165_2": {
    "question": "In the pour plate method, where do colonies grow?",
    "options": {
      "A": "Only on the surface of the medium.",
      "B": "Only on the bottom of the plate.",
      "C": "Grow on and in the solidified medium.",
      "D": "In the air above the medium."
    },
    "answer": "C"
  },
  "page_165_3": {
    "question": "In the spread plate method, where do colonies grow?",
    "options": {
      "A": "Only on the surface of the medium.",
      "B": "Grow on and in the solidified medium.",
      "C": "Only on the bottom of the plate.",
      "D": "In the air above the medium."
    },
    "answer": "A"
  },
  "page_166": {
    "question": "According to the FDA Bacteriological Analytical Manual, what is the statistically valid range for counting colonies on a plate?",
    "options": {
      "A": "1-10 colonies",
      "B": "10-100 colonies",
      "C": "25 - 250 colonies",
      "D": "Over 300 colonies"
    },
    "answer": "C"
  },
  "page_167": {
    "question": "What does the 'DRY WEIGHT METHODS' measure?",
    "options": {
      "A": "The number of living cells.",
      "B": "The total number of cells.",
      "C": "The cell mass (by weighing oven-dried or freeze-dried bacteria).",
      "D": "The turbidity of the culture."
    },
    "answer": "C"
  },
  "page_167_2": {
    "question": "When is the dry weight method suitable?",
    "options": {
      "A": "Only when a good quantity of bacterial growth can be obtained.",
      "B": "For very small, dilute cultures.",
      "C": "For all types of cultures.",
      "D": "When bacteria are actively storing heavy reserve materials."
    },
    "answer": "A"
  },
  "page_167_3": {
    "question": "When can inaccurate results be obtained with the dry weight method?",
    "options": {
      "A": "If the bacteria are dead.",
      "B": "If the bacteria are Gram-negative.",
      "C": "If the bacteria are actively storing heavy reserve materials.",
      "D": "If the bacteria are in the log phase."
    },
    "answer": "C"
  },
  "page_168": {
    "question": "In 'TURBIDIMETRIC METHODS', what is the turbidity (cloudiness) of a bacterial suspension an index for?",
    "options": {
      "A": "The mass of the bacterial population.",
      "B": "The type of bacteria.",
      "C": "The age of the bacteria.",
      "D": "The pH of the culture."
    },
    "answer": "A"
  },
  "page_168_2": {
    "question": "How is the amount of light absorbed by a cell suspension measured?",
    "options": {
      "A": "On a colorimeter, expressed as absorbance (A) or optical density (O.D.).",
      "B": "On a scale, expressed in grams.",
      "C": "With a ruler, expressed in millimeters.",
      "D": "By eye, expressed as 'cloudy' or 'clear'."
    },
    "answer": "A"
  },
  "page_168_3": {
    "question": "Are O.D. values a direct measure of cell number or cell mass?",
    "options": {
      "A": "Yes, they are a direct measure.",
      "B": "No, they are an indirect measure.",
      "C": "They are a direct measure of cell number, but not cell mass.",
      "D": "They are a direct measure of cell mass, but not cell number."
    },
    "answer": "B"
  },
  "page_168_4": {
    "question": "How can O.D. values be converted to cell numbers or cell mass?",
    "options": {
      "A": "They cannot be converted.",
      "B": "By constructing a standard calibration curve.",
      "C": "By multiplying by the pH.",
      "D": "By dividing by the temperature."
    },
    "answer": "B"
  },
  "page_169": {
    "question": "What are the clear advantages of turbidimetric methods?",
    "options": {
      "A": "They are both rapid and reproducible.",
      "B": "They count only live cells.",
      "C": "They are not affected by growth conditions.",
      "D": "They directly measure cell mass."
    },
    "answer": "A"
  },
  "page_172": {
    "question": "Culture media must include a source of C, N, P, S, H, and O. How are micronutrients (trace elements) usually present?",
    "options": {
      "A": "They must be added in large, pure quantities.",
      "B": "They are usually present as trace contaminants in water, on glassware, or in chemicals.",
      "C": "They are not needed for bacterial growth.",
      "D": "They are produced by the bacteria themselves."
    },
    "answer": "B"
  },
  "page_172_2": {
    "question": "What are liquid media good for?",
    "options": {
      "A": "Separating different organisms from a mixed culture.",
      "B": "Growing quantities of microbes needed for analysis or experiments.",
      "C": "Observing colony morphology.",
      "D": "Creating an inert gelling surface."
    },
    "answer": "B"
  },
  "page_172_3": {
    "question": "How are solid media usually made?",
    "options": {
      "A": "By adding agar.",
      "B": "By freezing the liquid media.",
      "C": "By adding high concentrations of salt.",
      "D": "By removing all the water."
    },
    "answer": "A"
  },
  "page_172_4": {
    "question": "Why is agar a good gelling medium for microbial growth?",
    "options": {
      "A": "Because very few microbes can degrade it, so it acts as an inert gelling medium.",
      "B": "Because it is the primary source of Carbon for most microbes.",
      "C": "Because it melts at a low temperature (40°C).",
      "D": "Because it is a liquid at room temperature."
    },
    "answer": "A"
  },
  "page_172_5": {
    "question": "At what temperature does agar melt, and at what temperature does it remain liquid until?",
    "options": {
      "A": "Melts at 40°C, remains liquid until 80°C.",
      "B": "Melts at 100°C, remains liquid until 50°C.",
      "C": "Melts at 80-90°C, remains liquid until 40-42°C.",
      "D": "Melts at 50°C, remains liquid until 10°C."
    },
    "answer": "C"
  },
  "page_173": {
    "question": "Table 6.2 shows a 'Chemically Defined Medium'. What is the carbon source in this medium for *E. coli*?",
    "options": {
      "A": "Glucose (5.0 g)",
      "B": "Ammonium phosphate, monobasic (1.0 g)",
      "C": "Sodium chloride (NaCl) (5.0 g)",
      "D": "Magnesium sulfate (MgSO4. 7H2O) (0.2 g)"
    },
    "answer": "A"
  },
  "page_173_2": {
    "question": "What is the nitrogen source in this chemically defined medium?",
    "options": {
      "A": "Glucose",
      "B": "Ammonium phosphate, monobasic (NH4H2PO4)",
      "C": "Sodium chloride (NaCl)",
      "D": "Potassium phosphate, dibasic (K2HPO4)"
    },
    "answer": "B"
  },
  "page_174": {
    "question": "Table 6.4 shows a 'Complex Medium' (Nutrient Agar). What is 'Peptone'?",
    "options": {
      "A": "A gelling agent.",
      "B": "A pure chemical.",
      "C": "Partially digested protein.",
      "D": "A sugar."
    },
    "answer": "C"
  },
  "page_174_2": {
    "question": "What are the three main nutrient sources in Nutrient Agar?",
    "options": {
      "A": "Peptone, Beef extract, and Sodium chloride",
      "B": "Peptone, Beef extract, and Agar",
      "C": "Glucose, Ammonium phosphate, and Water",
      "D": "Agar, Water, and Sodium chloride"
    },
    "answer": "A"
  },
  "page_175": {
    "question": "What is the difference between 'Enrichment culture' and 'Selective medium'?",
    "options": {
      "A": "Enrichment culture suppresses non-enriched microbes without selective poisons; it's typically a broth.",
      "B": "Selective medium suppresses non-enriched microbes without poisons; it's typically a broth.",
      "C": "Enrichment culture is a solid medium; Selective medium is a liquid medium.",
      "D": "There is no difference."
    },
    "answer": "A"
  },
  "page_175_2": {
    "question": "What is the purpose of an enrichment culture?",
    "options": {
      "A": "To kill all microorganisms.",
      "B": "To increase the relative concentration of *certain* microorganisms prior to plating.",
      "C": "To see colony morphology.",
      "D": "To grow *all* microorganisms equally."
    },
    "answer": "B"
  },
  "page_175_3": {
    "question": "What is a 'Complex Media'?",
    "options": {
      "A": "A medium where the exact chemical composition is known.",
      "B": "A medium where the composition is not completely known, often made from organic materials like tryptone or yeast extract.",
      "C": "A medium that suppresses the growth of some microbes.",
      "D": "A medium that allows all microbes to look different."
    },
    "answer": "B"
  },
  "page_175_4": {
    "question": "What are 'tryptone' and 'yeast extract'?",
    "options": {
      "A": "Pure sugars.",
      "B": "Inexpensive organic materials (digested protein, brewing waste) used in complex media.",
      "C": "Selective poisons.",
      "D": "Gelling agents."
    },
    "answer": "B"
  },
  "page_176": {
    "question": "What is a 'Selective Medium'?",
    "options": {
      "A": "It is designed to suppress the growth of some microorganisms while allowing the growth of others.",
      "B": "It is designed to allow all microorganisms to grow, but with different appearances.",
      "C": "It is a liquid broth used to increase the concentration of all microbes.",
      "D": "It is a medium where the exact chemical composition is known."
    },
    "answer": "A"
  },
  "page_176_2": {
    "question": "Why is a solid medium typically used with selective media?",
    "options": {
      "A": "So that individual colonies may be isolated.",
      "B": "Because selective agents only work in agar.",
      "C": "Because liquid media is too expensive.",
      "D": "To suppress all growth."
    },
    "answer": "A"
  },
  "page_176_3": {
    "question": "Which medium 'selects against gram-positives' (i.e., allows Gram-negatives to grow)?",
    "options": {
      "A": "Mannitol salts agar",
      "B": "MacConkey agar",
      "C": "Phenylethyl alcohol agar",
      "D": "Blood agar"
    },
    "answer": "B"
  },
  "page_176_4": {
    "question": "Which medium 'selects against gram-negatives' (i.e., allows Gram-positives to grow)?",
    "options": {
      "A": "Mannitol salts agar",
      "B": "MacConkey agar",
      "C": "Eosin-methylene blue agar",
      "D": "Phenylethyl alcohol agar"
    },
    "answer": "D"
  },
  "page_176_5": {
    "question": "Mannitol salts agar selects against non-skin flora. What does this imply it selects *for*?",
    "options": {
      "A": "Gram-negative bacteria",
      "B": "Skin flora (like *Staphylococcus*), which can tolerate high salt.",
      "C": "All bacteria",
      "D": "Fungi"
    },
    "answer": "B"
  },
  "page_177": {
    "question": "What is a 'Differential Medium'?",
    "options": {
      "A": "A medium that suppresses the growth of some microorganisms.",
      "B": "A medium that allows growth of more than one microbe but with morphologically distinguishable colonies.",
      "C": "A medium that only allows one type of microbe to grow.",
      "D": "A medium where the composition is unknown."
    },
    "answer": "B"
  },
  "page_177_2": {
    "question": "Blood agar is a differential medium used to distinguish microbes based on what?",
    "options": {
      "A": "Mannitol fermentation",
      "B": "Lactose fermentation",
      "C": "Various kinds of hemolysis (breakdown of red blood cells).",
      "D": "Gram stain reaction."
    },
    "answer": "C"
  },
  "page_177_3": {
    "question": "MacConkey agar is differential for what?",
    "options": {
      "A": "Mannitol fermentation (yellow)",
      "B": "Lactose fermentation (yellow)",
      "C": "Hemolysis",
      "D": "Salt tolerance"
    },
    "answer": "B"
  },
  "page_177_4": {
    "question": "Mannitol salts agar is differential for what?",
    "options": {
      "A": "Mannitol fermentation (yellow)",
      "B": "Lactose fermentation (yellow)",
      "C": "Hemolysis",
      "D": "Gram stain reaction"
    },
    "answer": "A"
  },
  "page_178": {
    "question": "The image of the Mannitol Salts Agar plate shows it is differential. *Staphylococcus aureus* turns the medium yellow, what does this indicate?",
    "options": {
      "A": "It ferments mannitol.",
      "B": "It does not ferment mannitol.",
      "C": "It is Gram-negative.",
      "D": "It is Gram-positive."
    },
    "answer": "A"
  },
  "page_178_2": {
    "question": "*Staphylococcus epidermidis* grows on the plate but does not change the color. What does this indicate?",
    "options": {
      "A": "It ferments mannitol.",
      "B": "It does not ferment mannitol (but is salt-tolerant).",
      "C": "It cannot grow on the plate.",
      "D": "It is Gram-negative."
    },
    "answer": "B"
  },
  "page_179": {
    "question": "The image shows a Blood Agar plate. What does the clearing around the bacterial colonies (labeled 'Hemolysis') indicate?",
    "options": {
      "A": "The bacteria are digesting the agar.",
      "B": "The bacteria are lysing (destroying) the red blood cells in the medium.",
      "C": "The bacteria are fermenting lactose.",
      "D": "The bacteria are salt-tolerant."
    },
    "answer": "B"
  },
  "page_180": {
    "question": "How does the chromosome of a prokaryote (bacterium) differ from a eukaryote?",
    "options": {
      "A": "The prokaryotic chromosome is linear and has a nuclear membrane.",
      "B": "The prokaryotic chromosome consists of a single, circular, double-stranded DNA molecule.",
      "C": "The prokaryotic chromosome is diploid.",
      "D": "The prokaryotic chromosome is 10 times longer than a eukaryotic one."
    },
    "answer": "B"
  },
  "page_180_2": {
    "question": "What does it mean that the prokaryotic chromosome is 'naked'?",
    "options": {
      "A": "It is lacking the nuclear membrane found in eukaryotic cells.",
      "B": "It is not made of DNA.",
      "C": "It is not coiled or twisted.",
      "D": "It does not contain any genes."
    },
    "answer": "A"
  },
  "page_181": {
    "question": "What are 'plasmids' in a bacterial cell?",
    "options": {
      "A": "The main chromosome.",
      "B": "Double-stranded DNA molecules that are much smaller than the chromosome and can replicate independently.",
      "C": "Ribosomes.",
      "D": "The nuclear membrane."
    },
    "answer": "B"
  },
  "page_181_2": {
    "question": "What shape are most plasmids?",
    "options": {
      "A": "Circular DNA molecules",
      "B": "Linear DNA molecules",
      "C": "Single-stranded DNA molecules",
      "D": "RNA molecules"
    },
    "answer": "A"
  },
  "page_182": {
    "question": "Which of the following is a way that chromosomes of *eukaryotic* microorganisms (fungi, algae) differ from bacterial chromosomes?",
    "options": {
      "A": "Each chromosome is linear rather than circular.",
      "B": "The DNA molecules are at least 10 times shorter.",
      "C": "There is only one chromosome per cell (haploid).",
      "D": "They are naked and lack a nuclear membrane."
    },
    "answer": "A"
  },
  "page_182_2": {
    "question": "Most eukaryotic cells are...",
    "options": {
      "A": "Haploid (one copy of each chromosome)",
      "B": "Diploid (two copies of each chromosome)",
      "C": "Circular",
      "D": "Naked"
    },
    "answer": "B"
  },
  "page_184": {
    "question": "What are DNA and RNA collectively called?",
    "options": {
      "A": "Nucleic acids",
      "B": "Proteins",
      "C": "Lipids",
      "D": "Carbohydrates"
    },
    "answer": "A"
  },
  "page_184_2": {
    "question": "What is the function of DNA?",
    "options": {
      "A": "It contains the hereditary information of a cell.",
      "B": "It is usually involved in deciphering information and carrying out instructions.",
      "C": "It is the main structural component of the cell wall.",
      "D": "It is an enzyme."
    },
    "answer": "A"
  },
  "page_184_3": {
    "question": "What is the function of RNA?",
    "options": {
      "A": "It contains the permanent hereditary information.",
      "B": "It is usually involved in deciphering the information in DNA and carrying out its instructions.",
      "C": "It is the main energy currency of the cell.",
      "D": "It forms the cell membrane."
    },
    "answer": "B"
  },
  "page_185": {
    "question": "What are the building units of each DNA molecule called?",
    "options": {
      "A": "Nucleotides",
      "B": "Amino acids",
      "C": "Fatty acids",
      "D": "Monosaccharides"
    },
    "answer": "A"
  },
  "page_185_2": {
    "question": "What are the three parts of a nucleotide?",
    "options": {
      "A": "A nitrogenous base, the pentose sugar deoxyribose, and one phosphate group.",
      "B": "A nitrogenous base, an amino acid, and a phosphate group.",
      "C": "A sugar, a lipid, and a phosphate group.",
      "D": "A purine, a pyrimidine, and a sugar."
    },
    "answer": "A"
  },
  "page_187": {
    "question": "What are the four nitrogenous bases that occur in DNA?",
    "options": {
      "A": "Adenine (A), Guanine (G), Cytosine (C), and Uracil (U)",
      "B": "Adenine (A), Guanine (G), Cytosine (C), and Thymine (T)",
      "C": "Adenine (A), Uracil (U), Cytosine (C), and Thymine (T)",
      "D": "Guanine (G), Uracil (U), Cytosine (C), and Thymine (T)"
    },
    "answer": "B"
  },
  "page_187_2": {
    "question": "Which two bases are 'purine bases'?",
    "options": {
      "A": "Cytosine (C) and Thymine (T)",
      "B": "Adenine (A) and Guanine (G)",
      "C": "Adenine (A) and Thymine (T)",
      "D": "Guanine (G) and Cytosine (C)"
    },
    "answer": "B"
  },
  "page_187_3": {
    "question": "Which two bases are 'pyrimidine bases'?",
    "options": {
      "A": "Cytosine (C) and Thymine (T)",
      "B": "Adenine (A) and Guanine (G)",
      "C": "Adenine (A) and Cytosine (C)",
      "D": "Guanine (G) and Thymine (T)"
    },
    "answer": "A"
  },
  "page_187_4": {
    "question": "What forms the 'backbone' of a single strand of DNA?",
    "options": {
      "A": "The alternating deoxyribose (sugar) and phosphates.",
      "B": "The purines and pyrimidines.",
      "C": "Only the deoxyribose sugars.",
      "D": "Only the phosphate groups."
    },
    "answer": "A"
  },
  "page_188": {
    "question": "How are the two DNA strands cross-linked to form double-stranded DNA?",
    "options": {
      "A": "By covalent bonds between the sugars.",
      "B": "By hydrogen bonds that link the bases on one strand with those on the other.",
      "C": "By phosphodiester bonds between the bases.",
      "D": "By peptide bonds."
    },
    "answer": "B"
  },
  "page_188_2": {
    "question": "Two bases attached in this manner are called a...",
    "options": {
      "A": "Nucleotide",
      "B": "Backbone",
      "C": "Complementary base pair",
      "D": "Double helix"
    },
    "answer": "C"
  },
  "page_189": {
    "question": "What are the only two kinds of complementary base pairs found in double-stranded DNA?",
    "options": {
      "A": "A linked to G, and C linked to T",
      "B": "A linked to C, and G linked to T",
      "C": "A linked to A, T to T, C to C, and G to G",
      "D": "Adenine (A) linked to Thymine (T), and Guanine (G) linked to Cytosine (C)"
    },
    "answer": "D"
  },
  "page_189_2": {
    "question": "How many hydrogen bonds link Guanine (G) and Cytosine (C)?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four"
    },
    "answer": "C"
  },
  "page_189_3": {
    "question": "How many hydrogen bonds link Adenine (A) and Thymine (T)?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four"
    },
    "answer": "B"
  },
  "page_189_4": {
    "question": "What is the A:T ratio or G:C ratio in double-stranded DNA?",
    "options": {
      "A": "Always 1:1",
      "B": "Always 2:1",
      "C": "Always 1:2",
      "D": "It varies."
    },
    "answer": "A"
  },
  "page_189_5": {
    "question": "What is the shape of a double-stranded DNA molecule?",
    "options": {
      "A": "A single straight line.",
      "B": "A 'double helix' (two strands wound around each other).",
      "C": "A sphere.",
      "D": "A 'cloverleaf-like' structure."
    },
    "answer": "B"
  },
  "page_191": {
    "question": "What is the sugar component of RNA?",
    "options": {
      "A": "Deoxyribose",
      "B": "Ribose",
      "C": "Glucose",
      "D": "Sucrose"
    },
    "answer": "B"
  },
  "page_191_2": {
    "question": "Instead of the pyrimidine Thymine (T), RNA contains which pyrimidine?",
    "options": {
      "A": "Adenine (A)",
      "B": "Guanine (G)",
      "C": "Cytosine (C)",
      "D": "Uracil (U)"
    },
    "answer": "D"
  },
  "page_191_3": {
    "question": "Unlike double-stranded DNA, RNA is typically...",
    "options": {
      "A": "Single-stranded",
      "B": "Double-stranded",
      "C": "Triple-stranded",
      "D": "A helix"
    },
    "answer": "A"
  },
  "page_191_4": {
    "question": "What is the ratio of A to U or G to C in RNA molecules?",
    "options": {
      "A": "It is always 1:1, just like in DNA.",
      "B": "It can vary and is not necessarily 1:1.",
      "C": "It is always 2:1.",
      "D": "It is always 1:2."
    },
    "answer": "B"
  },
  "page_192": {
    "question": "Which of the following is NOT one of the three major types of RNA?",
    "options": {
      "A": "Messenger RNA (mRNA)",
      "B": "Transfer RNA (tRNA)",
      "C": "Ribosomal RNA (rRNA)",
      "D": "Hereditary RNA (hRNA)"
    },
    "answer": "D"
  },
  "page_192_2": {
    "question": "What is 'DNA replication'?",
    "options": {
      "A": "The process that copies the nucleotide sequence of a parent DNA molecule into two daughter DNA molecules.",
      "B": "The process of using DNA to make RNA.",
      "C": "The process of using RNA to make protein.",
      "D": "The process of a cell dividing."
    },
    "answer": "A"
  },
  "page_193": {
    "question": "What are the three general steps of DNA replication in bacteria?",
    "options": {
      "A": "1. uncoiling of the helix, 2. strand separation, 3. synthesis of two new strands by complementary base pairing",
      "B": "1. transcription, 2. translation, 3. protein synthesis",
      "C": "1. initiation, 2. elongation, 3. termination",
      "D": "1. lag phase, 2. log phase, 3. stationary phase"
    },
    "answer": "A"
  },
  "page_193_2": {
    "question": "Where does replication begin in the DNA?",
    "options": {
      "A": "At a random site",
      "B": "At the origin of replication (ori)",
      "C": "At the end of the chromosome",
      "D": "At the promoter region"
    },
    "answer": "B"
  },
  "page_194": {
    "question": "In what direction does DNA replication proceed from the origin in circular bacterial DNA?",
    "options": {
      "A": "It is bidirectional (occurs in both directions).",
      "B": "It is unidirectional (occurs in only one direction).",
      "C": "It starts at the origin and goes to the end.",
      "D": "It starts at the end and goes to the origin."
    },
    "answer": "A"
  },
  "page_1s95": {
    "question": "What is the name of the unwinding enzymes that cause the two parent DNA strands to separate?",
    "options": {
      "A": "DNA helicases",
      "B": "DNA polymerases",
      "C": "DNA ligases",
      "D": "Gyrases"
    },
    "answer": "A"
  },
  "page_195_2": {
    "question": "What are the 'Y'-shaped structures formed by the separated strands, which are the actual site of DNA copying?",
    "options": {
      "A": "Origins of replication",
      "B": "Replication forks",
      "C": "Plasmids",
      "D": "Helices"
    },
    "answer": "B"
  },
  "page_197": {
    "question": "Why is DNA replication called 'semiconservative replication'?",
    "options": {
      "A": "Because each daughter molecule contains one strand from the parent and one newly synthesized strand.",
      "B": "Because it only copies half of the DNA.",
      "C": "Because it is a very slow process.",
      "D": "Because both daughter molecules are made of entirely new DNA."
    },
    "answer": "A"
  },
  "page_197_2": {
    "question": "What enzyme unwinds the parental strands at the origin of replication?",
    "options": {
      "A": "Gyrase",
      "B": "DNA polymerase",
      "C": "Helicase",
      "D": "Ligase"
    },
    "answer": "A"
  },
  "page_198": {
    "question": "As the two parental strands separate, each strand serves as the '________' for the construction of a new strand.",
    "options": {
      "A": "Template",
      "B": "Origin",
      "C": "Fork",
      "D": "Enzyme"
    },
    "answer": "A"
  },
  "page_198_2": {
    "question": "On the new strand, Adenine (A) on the parental strand pairs with...",
    "options": {
      "A": "Thymine (T)",
      "B": "Guanine (G)",
      "C": "Cytosine (C)",
      "D": "Adenine (A)"
    },
    "answer": "A"
  },
  "page_198_3": {
    "question": "On the new strand, Guanine (G) on the parental strand pairs with...",
    "options": {
      "A": "Thymine (T)",
      "B": "Guanine (G)",
      "C": "Cytosine (C)",
      "D": "Adenine (A)"
    },
    "answer": "C"
  },
  "page_199": {
    "question": "What enzyme ensures complementary base pairing by adding the correct nucleotides to the new strand?",
    "options": {
      "A": "Gyrase",
      "B": "Helicase",
      "C": "DNA polymerase",
      "D": "RNA polymerase"
    },
    "answer": "C"
  },
  "page_200": {
    "question": "Each nucleotide molecule has two ends. What are they called?",
    "options": {
      "A": "The 3' end (deoxyribose) and the 5' end (phosphate).",
      "B": "The 5' end (deoxyribose) and the 3' end (phosphate).",
      "C": "The A end and the T end.",
      "D": "The purine end and the pyrimidine end."
    },
    "answer": "A"
  },
  "page_200_2": {
    "question": "If the nucleotides on the parental strand are arranged in the 5' -> 3' direction, those on the new complementary strand will be arranged in what direction?",
    "options": {
      "A": "5' -> 3' (parallel)",
      "B": "3' -> 5' (antiparallel)",
      "C": "In a random direction.",
      "D": "In a 3' -> 3' direction."
    },
    "answer": "B"
  },
  "page_205_206": {
    "question": "What is a 'gene'?",
    "options": {
      "A": "A segment of DNA that contains the nucleotide sequence for making a particular protein.",
      "B": "A molecule of mRNA.",
      "C": "A ribosome.",
      "D": "A plasmid."
    },
    "answer": "A"
  },
  "page_206": {
    "question": "What is the process called when information in a gene (DNA) is copied to a molecule of mRNA?",
    "options": {
      "A": "Replication",
      "B": "Translation",
      "C": "Transcription",
      "D": "Mutation"
    },
    "answer": "C"
  },
  "page_206_2": {
    "question": "What carries the transcribed information from the DNA to the ribosomes?",
    "options": {
      "A": "mRNA",
      "B": "tRNA",
      "C": "rRNA",
      "D": "DNA polymerase"
    },
    "answer": "A"
  },
  "page_206_3": {
    "question": "What is 'translation'?",
    "options": {
      "A": "The process where DNA is copied to mRNA.",
      "B": "The process where the information in mRNA is used to synthesize the corresponding protein.",
      "C": "The process where DNA is replicated.",
      "D": "The process where the cell divides."
    },
    "answer": "B"
  },
  "page_208": {
    "question": "In transcription, does the enzyme copy both strands of the DNA?",
    "options": {
      "A": "Yes, both strands are copied.",
      "B": "No, transcription involves only one of the two DNA strands (the coding or sense strand).",
      "C": "It depends on the gene.",
      "D": "Only the non-coding strand is copied."
    },
    "answer": "B"
  },
  "page_208_2": {
    "question": "What enzyme is responsible for transcribing the gene to mRNA?",
    "options": {
      "A": "DNA-dependent DNA-polymerase",
      "B": "DNA-dependent RNA-polymerase",
      "C": "RNA-dependent DNA-polymerase (Reverse Transcriptase)",
      "D": "Helicase"
    },
    "answer": "B"
  },
  "page_208_3": {
    "question": "Where does RNA polymerase first bind on the DNA?",
    "options": {
      "A": "To the 'promoter' region.",
      "B": "To the 'terminator' region.",
      "C": "To the start codon.",
      "D": "To the coding strand."
    },
    "answer": "A"
  },
  "page_208_4": {
    "question": "After binding, RNA polymerase recognizes a '________' which is close to the binding site, and RNA synthesis begins.",
    "options": {
      "A": "Termination sequence",
      "B": "Transcription start site",
      "C": "Replication origin",
      "D": "Stop codon"
    },
    "answer": "B"
  },
  "page_209": {
    "question": "In which direction does RNA-polymerase move along the DNA during transcription?",
    "options": {
      "A": "3' -> 5' direction",
      "B": "5' -> 3' direction",
      "C": "Both directions simultaneously.",
      "D": "It does not move."
    },
    "answer": "B"
  },
  "page_209_2": {
    "question": "What happens when RNA-polymerase reaches a 'termination sequence'?",
    "options": {
      "A": "Both the newly synthesized RNA and the RNA polymerase are released.",
      "B": "DNA replication begins.",
      "C": "Translation begins immediately.",
      "D": "The RNA polymerase moves back to the promoter."
    },
    "answer": "A"
  },
  "page_209_3": {
    "question": "The newly synthesized mRNA strand is ________ to the segment of DNA being transcribed.",
    "options": {
      "A": "Identical",
      "B": "Complementary",
      "C": "Unrelated",
      "D": "Antiparallel"
    },
    "answer": "B"
  },
  "page_209_4": {
    "question": "If a deoxyribonucleotide on the DNA strand contains adenine (A), the corresponding ribonucleotide on the RNA strand will contain...",
    "options": {
      "A": "Thymine (T)",
      "B": "Uracil (U)",
      "C": "Cytosine (C)",
      "D": "Guanine (G)"
    },
    "answer": "B"
  },
  "page_214": {
    "question": "The 'words' of the genetic messages carried by mRNA are written in a chemical language called the...",
    "options": {
      "A": "Genetic code",
      "B": "Transcription code",
      "C": "Replication code",
      "D": "Amino code"
    },
    "answer": "A"
  },
  "page_214_2": {
    "question": "The genetic code is based upon units called 'mRNA codons'. How many bases make up one codon?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Four"
    },
    "answer": "C"
  },
  "page_214_3": {
    "question": "During translation, what does each mRNA codon tell a ribosome?",
    "options": {
      "A": "Which DNA base to add.",
      "B": "Which RNA base to add.",
      "C": "Which of the 20 different amino acids is to be added.",
      "D": "When to stop replication."
    },
    "answer": "C"
  },
  "page_215": {
    "question": "What is the significance of the codon AUG?",
    "options": {
      "A": "It codes for methionine and is also a 'start codon'.",
      "B": "It is a 'stop codon'.",
      "C": "It codes for alanine.",
      "D": "It is not a valid codon."
    },
    "answer": "A"
  },
  "page_215_2": {
    "question": "What does the 'start codon' indicate?",
    "options": {
      "A": "It always appears at the end of the genetic message.",
      "B": "It always appears at the beginning of the genetic message.",
      "C": "It signals the end of transcription.",
      "D": "It signals the start of DNA replication."
    },
    "answer": "B"
  },
  "page_215_3": {
    "question": "Which amino acid will always be the *initial* amino acid as protein synthesis begins?",
    "options": {
      "A": "Alanine",
      "B": "Glycine",
      "C": "Methionine",
      "D": "Tryptophan"
    },
    "answer": "C"
  },
  "page_216": {
    "question": "What are 'nonsense codons'?",
    "options": {
      "A": "Codons for which there are no corresponding amino acids, causing termination (stop).",
      "B": "Codons that code for multiple amino acids.",
      "C": "The start codon AUG.",
      "D": "Codons that are spelled incorrectly."
    },
    "answer": "A"
  },
  "page_216_2": {
    "question": "Which three codons are nonsense (stop) codons?",
    "options": {
      "A": "AUG, UGG, CCC",
      "B": "UAA, UAG and UGA",
      "C": "UUU, UUC, UUA",
      "D": "AAA, GGG, CCC"
    },
    "answer": "B"
  },
  "page_216_3": {
    "question": "How many possible codons are there (4 bases taken 3 at a time)?",
    "options": {
      "A": "16 (4^2)",
      "B": "20",
      "C": "61",
      "D": "64 (4^3)"
    },
    "answer": "D"
  },
  "page_216_4": {
    "question": "How many codons correspond to amino acids?",
    "options": {
      "A": "20",
      "B": "64",
      "C": "61 (64 total - 3 stop codons)",
      "D": "3"
    },
    "answer": "C"
  },
  "page_216_5": {
    "question": "Why is the genetic code described as slightly 'redundant'?",
    "options": {
      "A": "Because some amino acids are coded for by more than one codon.",
      "B": "Because some codons do not code for any amino acid.",
      "C": "Because the start codon is also an amino acid codon.",
      "D": "Because it is the same in all organisms."
    },
    "answer": "A"
  },
  "page_218": {
    "question": "Decoding the mRNA base sequence into an amino acid sequence is accomplished by tRNA molecules and which set of enzymes?",
    "options": {
      "A": "Amino-acyl synthetases",
      "B": "RNA polymerases",
      "C": "DNA polymerases",
      "D": "Ribosomes"
    },
    "answer": "A"
  },
  "page_218_2": {
    "question": "What are tRNA molecules?",
    "options": {
      "A": "Small, single-stranded nucleic acids (73-93 nucleotides).",
      "B": "Large, double-stranded DNA molecules.",
      "C": "Proteins that carry amino acids.",
      "D": "Components of the ribosome."
    },
    "answer": "A"
  },
  "page_219": {
    "question": "What causes the tRNA molecule to fold into a structure with loops and stems (often drawn as a cloverleaf)?",
    "options": {
      "A": "Attachment to the ribosome.",
      "B": "Internal complementary base sequences forming short double-stranded regions.",
      "C": "The amino acid attached to it.",
      "D": "Its interaction with mRNA."
    },
    "answer": "B"
  },
  "page_219_2": {
    "question": "What is the 'Anticodon' on a tRNA molecule?",
    "options": {
      "A": "A sequence of 3 bases that can base-pair with a codon sequence in the mRNA.",
      "B": "The site where the amino acid attaches.",
      "C": "The site recognized by the aminoacyl tRNA synthetase.",
      "D": "The start signal for translation."
    },
    "answer": "A"
  },
  "page_220": {
    "question": "Where does the amino acid attach to the tRNA molecule?",
    "options": {
      "A": "At the anticodon loop.",
      "B": "At the 3'-terminus of the tRNA molecule.",
      "C": "At the 5'-terminus of the tRNA molecule.",
      "D": "At the recognition region."
    },
    "answer": "B"
  },
  "page_220_2": {
    "question": "What enzyme matches the correct amino acid with the tRNA anticodon?",
    "options": {
      "A": "A specific aminoacyl tRNA synthetase",
      "B": "RNA polymerase",
      "C": "Ribosome",
      "D": "DNA polymerase"
    },
    "answer": "A"
  },
  "page_221": {
    "question": "What provides the necessary distinction for the aminoacyl tRNA synthetase to recognize the correct tRNA?",
    "options": {
      "A": "The anticodon.",
      "B": "The amino acid attachment site.",
      "C": "The recognition site (region).",
      "D": "The length of the tRNA."
    },
    "answer": "C"
  },
  "page_221_2": {
    "question": "When an amino acid becomes attached to a tRNA molecule, the tRNA is said to be...",
    "options": {
      "A": "Acylated (or charged)",
      "B": "Translated",
      "C": "Transcribed",
      "D": "Replicated"
    },
    "answer": "A"
  },
  "page_223": {
    "question": "What are the three stages of protein synthesis (translation)?",
    "options": {
      "A": "Initiation, Elongation, and Termination",
      "B": "Replication, Transcription, and Translation",
      "C": "Binding, Pairing, and Releasing",
      "D": "Lag, Log, and Stationary"
    },
    "answer": "A"
  },
  "page_223_2": {
    "question": "Which of the following is a main feature of the 'initiation' step?",
    "options": {
      "A": "Binding of ribosomes to the mRNA.",
      "B": "Joining together two amino acids by peptide bond formation.",
      "C": "Dissociation of the completed protein.",
      "D": "Movement of the mRNA along the ribosome."
    },
    "answer": "A"
  },
  "page_223_3": {
    "question": "Recognition of the initiation codon occurs during which stage?",
    "options": {
      "A": "Initiation",
      "B": "Elongation",
      "C": "Termination",
      "D": "Transcription"
    },
    "answer": "A"
  },
  "page_224": {
    "question": "Joining together amino acids by peptide bond formation occurs during which stage?",
    "options": {
      "A": "Initiation",
      "B": "Elongation",
      "C": "Termination",
      "D": "Replication"
    },
    "answer": "B"
  },
  "page_224_2": {
    "question": "Moving the mRNA and ribosome relative to each other occurs during which stage?",
    "options": {
      "A": "Initiation",
      "B": "Elongation",
      "C": "Termination",
      "D": "Transcription"
    },
    "answer": "B"
  },
  "page_224_3": {
    "question": "Dissociation of the completed protein and release of ribosomes occurs during which stage?",
    "options": {
      "A": "Initiation",
      "B": "Elongation",
      "C": "Termination",
      "D": "Replication"
    },
    "answer": "C"
  },
  "page_226": {
    "question": "What is the function of ribosomes in protein synthesis?",
    "options": {
      "A": "They bring together mRNA and charged tRNA molecules in the proper orientation for translation.",
      "B": "They transcribe DNA into mRNA.",
      "C": "They replicate the DNA.",
      "D": "They attach amino acids to tRNA."
    },
    "answer": "A"
  },
  "page_226_2": {
    "question": "What is the size of a bacterial ribosome?",
    "options": {
      "A": "70S",
      "B": "80S",
      "C": "30S",
      "D": "50S"
    },
    "answer": "A"
  },
  "page_226_3": {
    "question": "What are the two subunits of a bacterial ribosome?",
    "options": {
      "A": "One 30S subunit and one 50S subunit.",
      "B": "One 40S subunit and one 60S subunit.",
      "C": "Two 30S subunits.",
      "D": "Two 50S subunits."
    },
    "answer": "A"
  },
  "page_226_4": {
    "question": "What type of rRNA molecule is found in the 30S subunit?",
    "options": {
      "A": "16S rRNA",
      "B": "23S rRNA",
      "C": "5S rRNA",
      "D": "tRNA"
    },
    "answer": "A"
  },
  "page_226_5": {
    "question": "What types of rRNA molecules are found in the 50S subunit?",
    "options": {
      "A": "One 16S rRNA",
      "B": "One 23S rRNA and one 5S rRNA",
      "C": "Only 23S rRNA",
      "D": "Only 5S rRNA"
    },
    "answer": "B"
  },
  "page_227": {
    "question": "What is 'polycistronic mRNA'?",
    "options": {
      "A": "mRNA molecules in prokaryotes that often contain information for the synthesis of several proteins.",
      "B": "mRNA molecules that contain information for only one protein.",
      "C": "mRNA molecules found only in eukaryotes.",
      "D": "A type of ribosomal RNA."
    },
    "answer": "A"
  },
  "page_227_2": {
    "question": "What kind of proteins do polycistronic mRNA molecules often encode?",
    "options": {
      "A": "Random, unrelated proteins.",
      "B": "Different proteins that are required for a specific metabolic pathway.",
      "C": "Only structural proteins.",
      "D": "Only enzymes."
    },
    "answer": "B"
  },
  "page_228": {
    "question": "If an mRNA molecule is polycistronic, what might happen after the ribosome encounters the stop codon for the first protein?",
    "options": {
      "A": "The ribosome always dissociates completely.",
      "B": "If the next start codon is close, the ribosome might reform an initiation complex and translate the next protein.",
      "C": "The ribosome skips the next protein sequence.",
      "D": "The mRNA is immediately degraded."
    },
    "answer": "B"
  },
  "page_230": {
    "question": "What is an 'operon'?",
    "options": {
      "A": "A segment of DNA which has several structural genes coding for proteins with closely related functions.",
      "B": "A single structural gene.",
      "C": "A repressor protein.",
      "D": "A type of mRNA."
    },
    "answer": "A"
  },
  "page_230_2": {
    "question": "The proteins coded by the Lac operon are all active in what process?",
    "options": {
      "A": "Tryptophan synthesis",
      "B": "Lactose metabolism",
      "C": "DNA replication",
      "D": "Flagellar synthesis"
    },
    "answer": "B"
  },
  "page_230_3": {
    "question": "What regulates the expression (transcription and translation) of the structural genes in an operon?",
    "options": {
      "A": "A common mechanism, the operator.",
      "B": "Each gene is regulated independently.",
      "C": "The promoter only.",
      "D": "The repressor protein only."
    },
    "answer": "A"
  },
  "page_230_4": {
    "question": "How does the operator site control the genes inside the operon?",
    "options": {
      "A": "By its attachment or detachment to a repressor protein.",
      "B": "By changing the DNA sequence.",
      "C": "By binding RNA polymerase directly.",
      "D": "By coding for the proteins itself."
    },
    "answer": "A"
  },
  "page_230_5": {
    "question": "The structural genes of an operon are usually transcribed as what type of mRNA?",
    "options": {
      "A": "Monocistronic mRNA",
      "B": "Polycistronic mRNA",
      "C": "tRNA",
      "D": "rRNA"
    },
    "answer": "B"
  },
  "page_230_6": {
    "question": "What is a 'structural gene'?",
    "options": {
      "A": "Any gene that codes for a specific protein.",
      "B": "A gene that codes for a repressor protein.",
      "C": "The operator site.",
      "D": "The promoter site."
    },
    "answer": "A"
  },
  "page_231": {
    "question": "Where is the 'operator site' located?",
    "options": {
      "A": "It precedes the structural genes and overlaps with the promoter site.",
      "B": "It is located after the structural genes.",
      "C": "It is located far away from the operon.",
      "D": "It is within one of the structural genes."
    },
    "answer": "A"
  },
  "page_231_2": {
    "question": "What happens when the operator site is blocked by the attachment of the repressor protein?",
    "options": {
      "A": "Transcription increases.",
      "B": "The promoter site is also blocked, preventing RNA polymerase attachment and blocking transcription.",
      "C": "RNA polymerase binds more tightly.",
      "D": "The structural genes are translated faster."
    },
    "answer": "B"
  },
  "page_231_3": {
    "question": "What is a 'regulator gene'?",
    "options": {
      "A": "The structural gene that codes for the synthesis of a repressor protein.",
      "B": "The operator site.",
      "C": "The promoter site.",
      "D": "One of the structural genes within the operon."
    },
    "answer": "A"
  },
  "page_231_4": {
    "question": "Where is the regulator gene typically located?",
    "options": {
      "A": "Inside the operon, next to the operator.",
      "B": "Inside the operon, at the end.",
      "C": "Outside the operon.",
      "D": "Within the promoter."
    },
    "answer": "C"
  },
  "page_233": {
    "question": "In 'Regulation by Repression', what often regulates biosynthetic reactions?",
    "options": {
      "A": "The starting substrate.",
      "B": "The end product of the reactions.",
      "C": "The temperature.",
      "D": "The availability of oxygen."
    },
    "answer": "B"
  },
  "page_233_2": {
    "question": "When a high concentration of the end product is present, what happens to the genes coding for the enzymes?",
    "options": {
      "A": "They are turned on (expressed more).",
      "B": "They are turned off (repressed).",
      "C": "They are mutated.",
      "D": "They are deleted."
    },
    "answer": "B"
  },
  "page_233_3": {
    "question": "In this system, what is the end product called when it interacts with the repressor protein?",
    "options": {
      "A": "Corepressor",
      "B": "Inducer",
      "C": "Operator",
      "D": "Promoter"
    },
    "answer": "A"
  },
  "page_233_4": {
    "question": "What does the corepressor-repressor complex bind to?",
    "options": {
      "A": "The promoter site",
      "B": "The operator site",
      "C": "RNA polymerase",
      "D": "The structural genes"
    },
    "answer": "B"
  },
  "page_233_5": {
    "question": "What happens when the concentration of the end product (corepressor) becomes low?",
    "options": {
      "A": "The repressor protein binds more tightly to the operator.",
      "B": "The repressor protein cannot bind to the operator site, and transcription proceeds.",
      "C": "Transcription is permanently blocked.",
      "D": "The operator site is deleted."
    },
    "answer": "B"
  },
  "page_234": {
    "question": "What is given as an example of a repressible operon?",
    "options": {
      "A": "The tryptophan operon of E. coli.",
      "B": "The lactose operon of E. coli.",
      "C": "The flagellar operon of Salmonella.",
      "D": "The galactose operon of E. coli."
    },
    "answer": "A"
  },
  "page_234_2": {
    "question": "In the tryptophan operon, when does the repressor protein bind to the operator site?",
    "options": {
      "A": "Only when tryptophan concentration is low.",
      "B": "Only when tryptophan is present in the cell at high concentration.",
      "C": "It is always bound.",
      "D": "It never binds."
    },
    "answer": "B"
  },
  "page_234_3": {
    "question": "What happens to the tryptophan operon when intracellular tryptophan level is low?",
    "options": {
      "A": "The operon is turned off.",
      "B": "The operon is turned on and enzymes for tryptophan synthesis are produced.",
      "C": "The repressor protein binds tightly.",
      "D": "The operator is deleted."
    },
    "answer": "B"
  },
  "page_237": {
    "question": "In 'Regulation by Induction', when is an inducible operon switched on?",
    "options": {
      "A": "In the presence of the end product.",
      "B": "In the presence of the substrate of the enzyme(s) coded for by the operon.",
      "C": "When the repressor protein binds the operator.",
      "D": "When nutrients are low."
    },
    "answer": "B"
  },
  "page_237_2": {
    "question": "When is an inducible operon shut off?",
    "options": {
      "A": "In the presence of the substrate.",
      "B": "In the absence of the substrate.",
      "C": "When RNA polymerase binds.",
      "D": "When the end product is low."
    },
    "answer": "B"
  },
  "page_237_3": {
    "question": "In an inducible system, how does the repressor protein behave in the *absence* of the substrate?",
    "options": {
      "A": "It shuts off transcription by attaching to the operator site.",
      "B": "It cannot bind the operator site.",
      "C": "It activates transcription.",
      "D": "It is not produced."
    },
    "answer": "A"
  },
  "page_238": {
    "question": "In an inducible system, what happens in the *presence* of the substrate?",
    "options": {
      "A": "The repressor protein binds tightly to the operator.",
      "B": "The repressor protein fails to bind to the operator site and the operon is turned on.",
      "C": "Transcription is permanently shut off.",
      "D": "The substrate binds to the operator."
    },
    "answer": "B"
  },
  "page_238_2": {
    "question": "What is the substrate called in this case?",
    "options": {
      "A": "A corepressor",
      "B": "An inducer",
      "C": "An operator",
      "D": "A promoter"
    },
    "answer": "B"
  },
  "page_238_3": {
    "question": "What is a well-known example of a bacterial inducible operon?",
    "options": {
      "A": "The lactose metabolism operon (Lac operon) of E. coli.",
      "B": "The tryptophan operon of E. coli.",
      "C": "The flagellar operon of Salmonella.",
      "D": "The histidine operon of E. coli."
    },
    "answer": "A"
  },
  "page_238_4": {
    "question": "The Lac operon consists of an operator, a promoter, and how many adjacent structural genes?",
    "options": {
      "A": "One",
      "B": "Two",
      "C": "Three",
      "D": "Five"
    },
    "answer": "C"
  },
  "page_241": {
    "question": "What are 'Transposable elements'?",
    "options": {
      "A": "Small DNA sequences (transposons, jumping genes) which can jump from one region to another or invert themselves.",
      "B": "Plasmids that carry antibiotic resistance.",
      "C": "Operator sites in an operon.",
      "D": "Proteins involved in DNA replication."
    },
    "answer": "A"
  },
  "page_241_2": {
    "question": "What are other names for transposable elements?",
    "options": {
      "A": "Transposons, Insertion Sequences, or Jumping Genes",
      "B": "Operons, Promoters, or Operators",
      "C": "Plasmids, Episomes, or Vectors",
      "D": "Codons, Anticodons, or Genes"
    },
    "answer": "A"
  },
  "page_241_3": {
    "question": "How can the insertion or removal of these sequences affect a gene?",
    "options": {
      "A": "It alters the process of transcription and gene expression.",
      "B": "It always destroys the gene.",
      "C": "It has no effect on the gene.",
      "D": "It causes the gene to replicate faster."
    },
    "answer": "A"
  },
  "page_241_4": {
    "question": "What process in *Salmonella* is regulated by a transposon?",
    "options": {
      "A": "Lactose metabolism.",
      "B": "Tryptophan synthesis.",
      "C": "The expression of two different types of flagella (H1 and H2).",
      "D": "Antibiotic resistance."
    },
    "answer": "C"
  },
  "page_242": {
    "question": "In *Salmonella*, what determines whether H1 or H2 flagella are formed?",
    "options": {
      "A": "The orientation (direction) of a transposable sequence in either an H1 or H2 operon.",
      "B": "The presence of lactose.",
      "C": "The concentration of tryptophan.",
      "D": "The temperature."
    },
    "answer": "A"
  },
  "page_242_2": {
    "question": "The H1 operon contains a gene for H1 flagella and a gene for what else?",
    "options": {
      "A": "A repressor protein which shuts off the H2 operon.",
      "B": "A protein that activates the H2 operon.",
      "C": "An enzyme for lactose metabolism.",
      "D": "A transposon enzyme."
    },
    "answer": "A"
  },
  "page_244": {
    "question": "What is a 'Phenotype'?",
    "options": {
      "A": "The observable properties of an organism expressed under specific conditions.",
      "B": "The total gene content of a cell.",
      "C": "A permanent change in the DNA sequence.",
      "D": "A type of transposable element."
    },
    "answer": "A"
  },
  "page_244_2": {
    "question": "What determines the phenotype?",
    "options": {
      "A": "Only the genetic make up (genotype).",
      "B": "Only the environment.",
      "C": "Both the genetic make up (genotype) and the environment.",
      "D": "Neither the genotype nor the environment."
    },
    "answer": "C"
  },
  "page_244_3": {
    "question": "What is the example given for phenotypic variation in *Serratia marcescens*?",
    "options": {
      "A": "It produces red pigment at room temperature but loses it at 37°C.",
      "B": "It forms capsules only at 37°C.",
      "C": "It can only metabolize lactose at room temperature.",
      "D": "It forms endospores only at 37°C."
    },
    "answer": "A"
  },
  "page_244_4": {
    "question": "In phenotypic variation, does the microorganism's underlying genetic makeup change?",
    "options": {
      "A": "Yes, it is a permanent genetic change.",
      "B": "No, the microorganism adapts physiologically under the control of the genotype.",
      "C": "Sometimes it changes, sometimes it doesn't.",
      "D": "The genotype is irrelevant to the phenotype."
    },
    "answer": "B"
  },
  "page_245": {
    "question": "What is a 'Genotype'?",
    "options": {
      "A": "The observable properties of an organism.",
      "B": "The total gene content of a cell.",
      "C": "A specific set of environmental conditions.",
      "D": "A protein produced by a gene."
    },
    "answer": "B"
  },
  "page_245_2": {
    "question": "Are all genes on the chromosome expressed (turned on) at the same time?",
    "options": {
      "A": "Yes, all genes are always expressed.",
      "B": "No, many genes are turned on and expressed, while others remain silent until needed.",
      "C": "Only the genes on plasmids are expressed.",
      "D": "Genes are only expressed during replication."
    },
    "answer": "B"
  },
  "page_246": {
    "question": "What is a 'Mutation'?",
    "options": {
      "A": "Any permanent (inheritable) change in the sequence of DNA nucleotides of a gene.",
      "B": "A temporary change in gene expression due to the environment.",
      "C": "The transfer of genes between bacteria.",
      "D": "The normal process of DNA replication."
    },
    "answer": "A"
  },
  "page_246_2": {
    "question": "What does the term 'Wild Type Strain' describe?",
    "options": {
      "A": "Microbial strains found in nature.",
      "B": "Microbial strains created in the lab.",
      "C": "Microbial strains that have lost an essential function.",
      "D": "Microbial strains that have regained a lost function."
    },
    "answer": "A"
  },
  "page_246_3": {
    "question": "What is an 'Auxotroph'?",
    "options": {
      "A": "A microbial strain found in nature.",
      "B": "A microbial strain that lost its ability to synthesize an essential metabolite by mutation.",
      "C": "A microbial strain that requires oxygen.",
      "D": "A microbial strain that can fix nitrogen."
    },
    "answer": "B"
  },
  "page_246_4": {
    "question": "What must be supplied to an auxotroph for it to be able to multiply?",
    "options": {
      "A": "Oxygen",
      "B": "Light",
      "C": "The essential metabolite it cannot synthesize.",
      "D": "Antibiotics"
    },
    "answer": "C"
  },
  "page_247": {
    "question": "What is a 'Prototype' (likely meant Prototroph)?",
    "options": {
      "A": "An auxotroph which reverses its auxotrophy and restores the ability to synthesize the metabolite.",
      "B": "A wild type strain.",
      "C": "A strain that cannot synthesize an essential metabolite.",
      "D": "A strain used for genetic experiments."
    },
    "answer": "A"
  },
  "page_247_2": {
    "question": "The rate of spontaneous mutation remains relatively constant per...",
    "options": {
      "A": "Cell division",
      "B": "Cell per unit time",
      "C": "Generation",
      "D": "Hour"
    },
    "answer": "A"
  },
  "page_248": {
    "question": "Why is the frequency of mutants (total number) in a population *not* the same as the mutation rate?",
    "options": {
      "A": "Because frequency is a result of accumulation of mutants over time.",
      "B": "Because mutation rate cannot be measured.",
      "C": "Because frequency only counts lethal mutations.",
      "D": "Because mutation rate is always zero."
    },
    "answer": "A"
  },
  "page_248_2": {
    "question": "Is the frequency of mutants in bacterial populations considered relatively low or high?",
    "options": {
      "A": "Relatively low, because the mutation rate is low.",
      "B": "Relatively high, due to the outstanding speed by which bacteria multiply.",
      "C": "Zero, because bacteria do not mutate.",
      "D": "It depends on the type of bacteria."
    },
    "answer": "B"
  },
  "page_249": {
    "question": "If a bacterial population has a mutation rate of 10^-7 per division and reaches 10^9 cells/ml, what is the frequency of mutants?",
    "options": {
      "A": "10 mutant cells/ml",
      "B": "100 mutant cells/ml",
      "C": "1000 mutant cells/ml",
      "D": "1 mutant cell/ml"
    },
    "answer": "B"
  },
  "page_250": {
    "question": "What are the two main types of mutation occurrence?",
    "options": {
      "A": "Spontaneous or induced",
      "B": "Beneficial or harmful",
      "C": "Point or frameshift",
      "D": "Silent or missense"
    },
    "answer": "A"
  },
  "page_250_2": {
    "question": "What causes spontaneous mutation?",
    "options": {
      "A": "Intentional treatment with chemicals.",
      "B": "Natural physical agents (heat, radiation) or mistakes by DNA polymerase.",
      "C": "Insertion of transposons.",
      "D": "Exposure to antibiotics."
    },
    "answer": "B"
  },
  "page_250_3": {
    "question": "What is 'tautomerization'?",
    "options": {
      "A": "The spontaneous alteration where DNA bases interconvert between two chemical forms (e.g., keto/enol).",
      "B": "The insertion of an extra base.",
      "C": "The deletion of a base.",
      "D": "The repair of DNA damage."
    },
    "answer": "A"
  },
  "page_250_4": {
    "question": "Do the different tautomer forms of bases have the same base-pairing properties?",
    "options": {
      "A": "Yes, they pair exactly the same.",
      "B": "No, they have different base-pairing properties.",
      "C": "Tautomers cannot base-pair.",
      "D": "Only the keto form can base-pair."
    },
    "answer": "B"
  },
  "page_251": {
    "question": "If Guanine (G) is in the enol form during replication, what base might DNA polymerase add across from it instead of Cytosine (C)?",
    "options": {
      "A": "Thymine (T)",
      "B": "Adenine (A)",
      "C": "Guanine (G)",
      "D": "Uracil (U)"
    },
    "answer": "A"
  },
  "page_251_2": {
    "question": "The incorrect pairing of G(enol) with T ultimately leads to the replacement of a G-C pair with what?",
    "options": {
      "A": "A-T (a transitional mutation)",
      "B": "T-A (a transversion mutation)",
      "C": "C-G",
      "D": "G-C (no change)"
    },
    "answer": "A"
  },
  "page_252": {
    "question": "What is the typical rate of spontaneous mutation in a specific gene?",
    "options": {
      "A": "Extremely high (10^-1 to 10^-3)",
      "B": "Extremely low (10^-6 to 10^-10)",
      "C": "Moderate (10^-3 to 10^-5)",
      "D": "Zero"
    },
    "answer": "B"
  },
  "page_252_2": {
    "question": "What causes 'induced mutation'?",
    "options": {
      "A": "Natural background radiation.",
      "B": "Mistakes during DNA replication.",
      "C": "Intentional treatment of cells with physical or chemical agents (mutagens).",
      "D": "Spontaneous tautomerization."
    },
    "answer": "C"
  },
  "page_253": {
    "question": "What is a 'Point Mutation'?",
    "options": {
      "A": "A change of a single base pair (substitution, loss, or gain).",
      "B": "A change involving a large segment of DNA.",
      "C": "A mutation caused by heat.",
      "D": "A mutation that is always lethal."
    },
    "answer": "A"
  },
  "page_253_2": {
    "question": "What is a 'Substitution (replacement) Mutation'?",
    "options": {
      "A": "The replacement of an original base pair by another.",
      "B": "The deletion of a base pair.",
      "C": "The insertion of a base pair.",
      "D": "A shift in the reading frame."
    },
    "answer": "A"
  },
  "page_253_3": {
    "question": "What is 'Transition'?",
    "options": {
      "A": "A point mutation where a purine is substituted by a pyrimidine.",
      "B": "A point mutation where an original purine is substituted by a purine, or a pyrimidine by a pyrimidine.",
      "C": "The deletion of a base.",
      "D": "The insertion of a base."
    },
    "answer": "B"
  },
  "page_253_4": {
    "question": "What is 'Transversion'?",
    "options": {
      "A": "A point mutation where a purine is replaced by a pyrimidine, or a pyrimidine by a purine.",
      "B": "A point mutation where a purine is replaced by a purine.",
      "C": "The deletion of multiple bases.",
      "D": "The insertion of multiple bases."
    },
    "answer": "A"
  },
  "page_254": {
    "question": "What is a 'Deletion Mutation'?",
    "options": {
      "A": "A base pair (or sequence) is erased at a specific site.",
      "B": "A new base pair (or sequence) is inserted.",
      "C": "One base pair is replaced by another.",
      "D": "A shift in the reading frame."
    },
    "answer": "A"
  },
  "page_254_2": {
    "question": "What is an 'Insertion Mutation'?",
    "options": {
      "A": "A base pair (or sequence) is erased.",
      "B": "A new base pair (or sequence) is inserted into the DNA.",
      "C": "One base pair is replaced by another.",
      "D": "A silent change in the DNA."
    },
    "answer": "B"
  },
  "page_254_3": {
    "question": "Insertion or deletion of bases can lead to what type of mutation?",
    "options": {
      "A": "Reading frame shift Mutation",
      "B": "Silent Mutation",
      "C": "Transition Mutation",
      "D": "Transversion Mutation"
    },
    "answer": "A"
  },
  "page_254_4": {
    "question": "What happens in a reading frame shift mutation?",
    "options": {
      "A": "Only one amino acid is changed.",
      "B": "There is a complete shift of reading the genetic code in tri-letter blocks from the point of insertion/deletion.",
      "C": "A stop codon is always created.",
      "D": "The DNA sequence is unchanged."
    },
    "answer": "B"
  },
  "page_255": {
    "question": "What is a 'Silent Mutation'?",
    "options": {
      "A": "A mutation where the altered codon codes for the same amino acid, resulting in no change in the protein.",
      "B": "A mutation that causes a premature stop codon.",
      "C": "A mutation that changes one amino acid to another.",
      "D": "A mutation that deletes a gene."
    },
    "answer": "A"
  },
  "page_255_2": {
    "question": "Why can silent mutations occur?",
    "options": {  
      "A": "Because of the degeneracy (redundancy) of the genetic code.",
      "B": "Because the DNA repair system corrects them.",
      "C": "Because they only occur in non-coding DNA.",
      "D": "Because they are always lethal."
    },
    "answer": "A"
  },
  "page_255_3": {
    "question": "A change in which base of a codon is more likely to result in a silent mutation?",
    "options": {
      "A": "The first base.",
      "B": "The second base.",
      "C": "The third base.",
      "D": "All are equally likely."
    },
    "answer": "C"
  },
  "page_255_4": {
    "question": "What is a 'Non-sense Mutation'?",
    "options": {
      "A": "A mutation that changes a codon into a non-sense (stop) codon.",
      "B": "A mutation that codes for the same amino acid.",
      "C": "A mutation that changes one amino acid to another.",
      "D": "A mutation that inserts extra bases."
    },
    "answer": "A"
  },
  "page_255_5": {
    "question": "What is the result of a non-sense mutation?",
    "options": {
      "A": "A longer protein.",
      "B": "Pre-mature termination of protein synthesis, usually resulting in a shorter protein.",
      "C": "No change in the protein.",
      "D": "A protein with one different amino acid."
    },
    "answer": "B"
  },
  "page_256": {
    "question": "What is a 'Missense Mutation'?",
    "options": {
      "A": "A mutation which results in the replacement of an amino acid by another.",
      "B": "A mutation that results in a stop codon.",
      "C": "A mutation that results in no change to the amino acid sequence.",
      "D": "A mutation that shifts the reading frame."
    },
    "answer": "A"
  },
  "page_256_2": {
    "question": "What is a 'Lethal Mutation'?",
    "options": {
      "A": "A mutation that affects the function of a vital protein, leading to cell death.",
      "B": "A mutation that has no effect.",
      "C": "A silent mutation.",
      "D": "A mutation that can be beneficial."
    },
    "answer": "A"
  },
  "page_256_3": {
    "question": "What is a 'Conditional Lethal Mutation'?",
    "options": {
      "A": "A mutation that is lethal under all conditions.",
      "B": "A mutation where the mutant protein is affected only under certain conditions (e.g., temperature-sensitive).",
      "C": "A silent mutation.",
      "D": "A beneficial mutation."
    },
    "answer": "B"
  },
  "page_257": {
    "question": "What is a 'Polar Mutation'?",
    "options": {
      "A": "A mutation, e.g., a nonsense codon early in a polycistronic mRNA, that blocks translation of downstream genes.",
      "B": "A mutation at the poles of the cell.",
      "C": "A mutation caused by temperature changes.",
      "D": "A mutation that changes the electrical charge of a protein."
    },
    "answer": "A"
  },
};
export const medicalTerminologyComprehensive: QuestionItem[] =
  shuffleQuestions(baseQuestions);