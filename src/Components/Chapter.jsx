import React, { useState } from "react";

const Chapter = ({ state, clas, subject, onChapterChange }) => {
  const chaptersData = { 
    "Andhra Pradesh": {
      6: {
        Telugu_Sem_1: [
          {
            chapter: "పాఠం 1: మనకు అవసరమైన ఆహారం",
            subchapters: [],
          },
          {
            chapter: "పాఠం 2: మొక్కల గురించి తెలుసుకోవడం",
            subchapters: [],
          },
          {
            chapter: "పాఠం 3: జంతువులు మరియు వారి ఆహారం",
            subchapters: [],
          },
          {
            chapter: "పాఠం 4: జీవులు మరియు వారి నివాసాలు",
            subchapters: [],
          },
          {
            chapter: "పాఠం 5: కదలికలు మరియు నడక",
            subchapters: [],
          },
          {
            chapter: "పాఠం 6: నీరు",
            subchapters: [],
          },
          {
            chapter: "పాఠం 7: పదార్థాలు",
            subchapters: [],
          },
          {
            chapter: "పాఠం 8: వస్త్రాలు ఎలా తయారు అవుతాయి",
            subchapters: [],
          },
          {
            chapter: "పాఠం 9: కాంతితో ఆటలు",
            subchapters: [],
          },
          {
            chapter: "పాఠం 10: కొలతలు నేర్చుకుందాం",
            subchapters: [],
          },
          {
            chapter: "పాఠం 11: ప్రాథమిక విద్యుత్ వలయాలు",
            subchapters: [],
          },
          {
            chapter: "పాఠం 12: నీడలు – చిత్రాలు",
            subchapters: [],
          },
        ],
        Hindi: [
          {
            chapter: "पाठ 1: वह चिड़िया जो",
            subchapters: [],
          },
          {
            chapter: "पाठ 2: बचपन",
            subchapters: [],
          },
          {
            chapter: "पाठ 3: नादान दोस्त",
            subchapters: [],
          },
          {
            chapter: "पाठ 4: चाँद से थोड़ी सी गप्पें",
            subchapters: [],
          },
          {
            chapter: "पाठ 5: अक्षरों का महत्व",
            subchapters: [],
          },
          {
            chapter: "पाठ 6: पार नज़र के",
            subchapters: [],
          },
          {
            chapter: "पाठ 7: साथी हाथ बढ़ाना",
            subchapters: [],
          },
          {
            chapter: "पाठ 8: ऐसे ऐसे",
            subchapters: [],
          },
          {
            chapter: "पाठ 9: टिकट अलबम",
            subchapters: [],
          },
          {
            chapter: "पाठ 10: झांसी की रानी",
            subchapters: [],
          },
          {
            chapter: "पाठ 11: जो देखकर भी नहीं देखते",
            subchapters: [],
          },
          {
            chapter: "पाठ 12: संसार पुस्तक है",
            subchapters: [],
          },
        ],
        English: [
          {
            chapter: "Chapter 1: The Best Christmas Present in the World",
            subchapters: ["The Ant and the Cricket"],
          },
          {
            chapter: "Chapter 2: The Tsunami",
            subchapters: ["Geography Lesson"],
          },
          {
            chapter: "Chapter 3: Glimpses of the Past",
            subchapters: [
              "Macavity: The Mystery Cat",
              "NOTES FOR THE TEACHER (UNITS 4-7)",
            ],
          },
          {
            chapter: "Chapter 4: Bepin Choudhury’s Lapse of Memory",
            subchapters: ["The Last Bargain"],
          },
          {
            chapter: "Chapter 5: The Summit Within",
            subchapters: ["The School Boy"],
          },
          {
            chapter: "Chapter 6: This is Jody’s Fawn",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: A Visit to Cambridge",
            subchapters: [
              "When I set out for Lyonnesse",
              "NOTES FOR THE TEACHER (UNITS 8-10)",
            ],
          },
          {
            chapter: "Chapter 8: A Short Monsoon Diary",
            subchapters: ["On the Grasshopper and Cricket"],
          },
          {
            chapter: "Chapter 9: The Great Stone Face–I",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: The Great Stone Face–II",
            subchapters: [],
          },
        ],
        Mathematics: [
          {
            chapter: "Chapter 1: Numbers All Around Us",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Whole Numbers",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: H.C.F. and L.C.M.",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Integers",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Fractions and Decimals",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Basic Arithmetic",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Introduction to Algebra",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: Basic Geometric Concepts",
            subchapters: [],
          },
          {
            chapter: "Chapter 9: 2D – 3D Shapes",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: Practical Geometry",
            subchapters: [],
          },
          {
            chapter: "Chapter 11: Perimeter and Area",
            subchapters: [],
          },
          {
            chapter: "Chapter 12: Data Handling",
            subchapters: [],
          },
        ],
        Science: [
          {
            chapter: "Chapter 1: The Food We Need",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Knowing about Plants",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Animals and Their Food",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Organisms and Habitat",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Movement and Locomotion",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Water",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Materials",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: How Fabrics are Made",
            subchapters: [],
          },
          {
            chapter: "Chapter 9: Fun with Magnets",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: Let Us Measure",
            subchapters: [],
          },
          {
            chapter: "Chapter 11: Basic Electric Circuits",
            subchapters: [],
          },
          {
            chapter: "Chapter 12: Shadows – Images",
            subchapters: [],
          },
        ],
        Social: [
          {
            chapter: "Chapter 1: Indian History",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Geography",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Civics",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Economics",
            subchapters: [],
          },
        ],
      },

      7: {
        Telugu_Sem_1: [
          {
            chapter: "Chapter 1: Grammar",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Prose",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Poetry",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Short Stories",
            subchapters: [],
          },
        ],
        English: [
          {
            chapter: "Chapter 1: Vocabulary Building",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Grammar",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Literature",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Essay Writing",
            subchapters: [],
          },
        ],
        Mathematics: [
          {
            chapter: "Chapter 1: Decimals",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Algebraic Expressions",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Ratios and Proportions",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Geometry",
            subchapters: [],
          },
        ],
        Science: [
          {
            chapter: "Chapter 1: Cells",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Ecosystems",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Electricity",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: The Solar System",
            subchapters: [],
          },
        ],
        Social: [
          {
            chapter: "Chapter 1: Ancient Civilizations",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Indian Independence",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: World Wars",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Government Structures",
            subchapters: [],
          },
        ],
      },

      8: {
        Telugu_Sem_1: [
          {
            chapter: "Chapter 1: Andhra Vaibhavam",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Maatrubhoomi",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Shataka Sourabham",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Na Yatra",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Sandesham",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Payanam",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Chaitanyamurthulu",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: Telugu Literature",
            subchapters: [
              "Subchapter 1: Pothuluri Veerabrahmam",
              "Subchapter 2: Nedunuri Gangadharam",
              "Subchapter 3: Paddadi Papayya",
              "Subchapter 4: Fatima Sheikh",
              "Subchapter 5: Ragati Pandari",
              "Subchapter 6: Tadinagamma",
            ],
          },
          {
            chapter: "Chapter 9: Melimalupu",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: Chirumaalinyam",
            subchapters: [],
          },
          {
            chapter: "Chapter 11: Naati Chaduvu",
            subchapters: [],
          },
          {
            chapter: "Chapter 12: Samadrashty",
            subchapters: [],
          },
          {
            chapter: "Chapter 13: Bhuvanavijayam",
            subchapters: [],
          },
          {
            chapter: "Chapter 14: Aatithyam",
            subchapters: [],
          },
          {
            chapter: "Chapter 15: Kala Varasatvam",
            subchapters: [],
          },
        ],
        Hindi: [
          {
            chapter: "Chapter 1: सुबह (Subah)",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Hindi Literature",
            subchapters: ["Subchapter: बेटी (Beti) - (पठन हेतु) (Pathan hetu)"],
          },
          {
            chapter: "Chapter 3: तेनालीराम की चतुराई (Tenaliram ki Chaturai)",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: श्रीहरिकोटा (Sriharikota)",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Hindi Literature",
            subchapters: [
              "Subchapter: मैं कौन? (Main Kaun?) - (पठन हेतु) (Pathan hetu)",
            ],
          },
          {
            chapter: "Chapter 6: गीत (Geet)",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Hindi Literature",
            subchapters: [
              "Subchapter: कागज की थैली (Kagaz ki Thaili) - (पठन हेतु) (Pathan hetu)",
            ],
          },
          {
            chapter: "Chapter 8: कूड़ेदान (Koodedaan)",
            subchapters: [],
          },
          {
            chapter: "Chapter 9: Hindi Literature",
            subchapters: [
              "Subchapter: जरा मुरकराइए (Zara Murkaraiye) - (पठन हेतु) (Pathan hetu)",
            ],
          },
          {
            chapter: "Chapter 10: मित्र को प (Mitra ko p)",
            subchapters: [],
          },
        ],
        English: [
          {
            chapter: "Chapter 1: The Best Christmas Present in the World",
            subchapters: ["The Ant and the Cricket"],
          },
          {
            chapter: "Chapter 2: The Tsunami",
            subchapters: ["Geography Lesson"],
          },
          {
            chapter: "Chapter 3: Glimpses of the Past",
            subchapters: [
              "Macavity: The Mystery Cat",
              "NOTES FOR THE TEACHER (UNITS 4-7)",
            ],
          },
          {
            chapter: "Chapter 4: Bepin Choudhury’s Lapse of Memory",
            subchapters: ["The Last Bargain"],
          },
          {
            chapter: "Chapter 5: The Summit Within",
            subchapters: ["The School Boy"],
          },
          {
            chapter: "Chapter 6: This is Jody’s Fawn",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: A Visit to Cambridge",
            subchapters: [
              "When I set out for Lyonnesse",
              "NOTES FOR THE TEACHER (UNITS 8-10)",
            ],
          },
          {
            chapter: "Chapter 8: A Short Monsoon Diary",
            subchapters: ["On the Grasshopper and Cricket"],
          },
          {
            chapter: "Chapter 9: The Great Stone Face–I",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: The Great Stone Face–II",
            subchapters: [],
          },
        ],
        English_Supplementary: [
          {
            chapter: "Chapter 1: How the Camel got his hump",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Children at work",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: The Selfish Giant",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: The treasure within",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Princess September",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: The fight",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: The open window",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: Jalebis",
            subchapters: [],
          },
          {
            chapter: "Chapter 9: The comet — I",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: The comet — II",
            subchapters: [],
          },
          {
            chapter: "Chapter 11: Ancient Education System of India",
            subchapters: [],
          },
        ],
        Math_SEM1: [
          {
            chapter: "Chapter 1: Rational Numbers",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Linear Equations in One Variable",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Understanding Quadrilaterals",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Practical Geometry",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Data Handling",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Squares and Square Roots",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Cubes and Cube Roots",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: Comparing Quantities",
            subchapters: [],
          },
        ],
        Math_SEM2: [
          {
            chapter: "Chapter 9: Algebraic Expressions and Identities",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: Visualising Shapes",
            subchapters: [],
          },
          {
            chapter: "Chapter 11: Mensuration",
            subchapters: [],
          },
          {
            chapter: "Chapter 12: Exponents and Powers",
            subchapters: [],
          },
          {
            chapter: "Chapter 13: Direct and Indirect Proportions",
            subchapters: [],
          },
          {
            chapter: "Chapter 14: Factorization",
            subchapters: [],
          },
          {
            chapter: "Chapter 15: Introduction to Graphs",
            subchapters: [],
          },
          {
            chapter: "Chapter 16: Playing with Numbers",
            subchapters: [],
          },
        ],
        Physics_SEM1: [
          {
            chapter: "Chapter 1: Force and Pressure",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Friction",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Coal and Petroleum",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Synthetic Fibres and Plastics",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Sound",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Materials: Metals and Non-Metals",
            subchapters: [],
          },
        ],
        Physics_SEM2: [
          {
            chapter: "Chapter 5: REACHING THE AGE OF ADOLESCENCE",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: CONSERVATION OF PLANTS AND ANIMALS",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: POLLUTION OF AIR AND WATER",
            subchapters: [],
          },
        ],
        Biology_Sem1: [
          {
            chapter: "Chapter 1: CELL – STRUCTURE AND FUNCTIONS",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: MICROORGANISMS: FRIEND AND FOE",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: CROP PRODUCTION AND MANAGEMENT",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: REPRODUCTION IN ANIMALS",
            subchapters: [],
          },
          {
            chapter: "GLOSSARY",
            subchapters: [],
          },
        ],
        Biology_Sem2: [
          {
            chapter: "Chapter 5: REACHING THE AGE OF ADOLESCENCE",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: CONSERVATION OF PLANTS AND ANIMALS",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: POLLUTION OF AIR AND WATER",
            subchapters: [],
          },
          {
            chapter: "GLOSSARY",
            subchapters: [],
          },
        ],
        Social_Geography_Sem_1: [
          {
            chapter: "Chapter 1: Resources",
            subchapters: [],
          },
          {
            chapter:
              "Chapter 2: Land, Soil, Water, Natural Vegetation and Wildlife Resources",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Mineral and Power Resources",
            subchapters: [],
          },
        ],
        Social_Geography_Sem_2: [
          {
            chapter: "Chapter 4: Agriculture",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Industries",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Human Resources",
            subchapters: [],
          },
        ],
        Social_History_sem_1: [
          {
            chapter: "Chapter 1: How, When and Where",
            subchapters: [],
          },
          {
            chapter:
              "Chapter 2: From Trade to Territory The Company Establishes Power",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Ruling the Countryside",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Tribals, Dikus and the Vision of a Golden Age",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: When People Rebel 1857 and After",
            subchapters: [],
          },
        ],
        Social_History_sem_2: [
          {
            chapter: "Chapter 6: Weavers, Iron Smelters and Factory Owners",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Civilising the “Native”, Educating the Nation",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: Women, Caste and Reform",
            subchapters: [],
          },
          {
            chapter:
              "Chapter 9: The Making of the National Movement: 1870s--1947",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: India After Independence",
            subchapters: [],
          },
        ],
        Social_Politics_sem_1: [
          {
            title: "Unit One: The Indian Constitution and Secularism",
            chapters: [
              {
                chapter: "Chapter 1: The Indian Constitution",
                subchapters: [],
              },
              {
                chapter: "Chapter 2: Understanding Secularism",
                subchapters: [],
              },
            ],
          },
          {
            title: "Unit Two: Parliament and The Making of Laws",
            chapters: [
              {
                chapter: "Chapter 3: Why do we need a Parliament?",
                subchapters: [],
              },
              {
                chapter: "Chapter 4: Understanding Laws",
                subchapters: [],
              },
            ],
          },
          {
            title: "Unit Three: The Judiciary",
            chapters: [
              {
                chapter: "Chapter 5: Judiciary",
                subchapters: [],
              },
            ],
          },
        ],
        Social_Politics_sem_2: [
          {
            chapter: "Chapter 6: Understanding Our Criminal Justice System",
            subchapters: [],
          },
          {
            title: "Unit Four: Social Justice and The Marginalised",
            chapters: [
              {
                chapter: "Chapter 7: Understanding Marginalisation",
                subchapters: [],
              },
              {
                chapter: "Chapter 8: Confronting Marginalisation",
                subchapters: [],
              },
            ],
          },
          {
            title: "Unit Five: Economic Presence of the Government",
            chapters: [
              {
                chapter: "Chapter 9: Public Facilities",
                subchapters: [],
              },
              {
                chapter: "Chapter 10: Law and Social Justice",
                subchapters: [],
              },
            ],
          },
        ],
      },

      9: {
        Telugu_Sem_1: [
          {
            chapter: "Chapter 1: ధర్మబోధ (Dharma Bodha)",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: చైతన్యం (Chaitanyam)",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: హరివిల్లు (Harivillu)",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: ఆత్మకథ (Atmakatha)",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: స్నేహం (Sneham)",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: తీర్పు (Teerpu)",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: మాటమహిమ (Matamahima)",
            subchapters: [],
          },
        ],
        Telugu_Sem_2: [
          {
            chapter: "Chapter 1: ఇల్లలకగానే (Illalaka Gane)",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: రంగస్థలం (Rangasthalam)",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: ప్రియమైన నాన్నకు (Priyamaina Nannaku)",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: ఆశావాది (Ashaavaadi)",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: ఏ దేశమేగినా (E Desamegina)",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: నా చదువు (Naa Chaduvu)",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: ఆకుపచ్చశోకం (Aakupaccha Shokam)",
            subchapters: [],
          },
        ],
        English: [
          {
            chapter: "Chapter 1: Grammar",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Comprehension",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Speech Writing",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Novels",
            subchapters: [],
          },
        ],
        Math_SEM1: [
          {
            chapter: "Chapter 1: Number System",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Polynomials",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Co-ordinate Geometry",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Linear Equations in Two Variables",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Introduction to Euclid's Geometry",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Lines and Angles",
            subchapters: [],
          },
        ],
        Math_SEM2: [
          {
            chapter: "Chapter 7: Triangles",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: Quadrilaterals",
            subchapters: [],
          },
          {
            chapter: "Chapter 9: Circles",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: Heron’s Formula",
            subchapters: [],
          },
          {
            chapter: "Chapter 11: Surface Areas and Volumes",
            subchapters: [],
          },
          {
            chapter: "Chapter 12: Statistics",
            subchapters: [],
          },
        ],
        Physics_SEM1: [
          {
            chapter: "Chapter 1: Matter in Our Surroundings",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Is Matter Around Us Pure?",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Atoms and Mole culs",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Structure of the Atom",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Note: Chapters 5 & 6 in Biological Science",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Motion",
            subchapters: [],
          },
        ],
        Physics_SEM2: [
          {
            chapter: "Chapter 8: Force and Laws of Motion",
            subchapters: [],
          },
          {
            chapter: "Chapter 9: Gravitation",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: Work and Energy",
            subchapters: [],
          },
        ],
        Biology_Sem1: [
          {
            chapter: "Chapter 5: The Fundamental Unit of Life",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Tissues",
            subchapters: [],
          },
        ],
        Biology_Sem2: [
          {
            chapter:
              "Note: Chapters 7, 8, 9, 10, and 11 are related to Physical Science",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Improvement in Food Resources",
            subchapters: [],
          },
        ],
        Social_Politics: [
          {
            chapter: "Chapter 1: What is Democracy? Why Democracy?",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Constitutional Design",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Electoral Politics",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Working of Institutions",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Democratic Rights",
            subchapters: [],
          },
        ],
        Social_Geography: [
          {
            chapter: "Chapter 1: India – Size and Location",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Physical Features of India",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Drainage",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Climate",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Natural Vegetation and Wildlife",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Population",
            subchapters: [],
          },
          {
            chapter: "Glossary",
            subchapters: [],
          },
        ],
        Social_Economics: [
          {
            chapter: "Chapter 1: The Story of Village Palampur",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: People as Resource",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Poverty as a Challenge",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Food Security in India",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Natural Vegetation and Wildlife",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Population",
            subchapters: [],
          },
          {
            chapter: "Glossary",
            subchapters: [],
          },
        ],
        Social_History: [
          {
            chapter: "Section I: Events and Processes",
            subchapters: [
              "Chapter 1: The French Revolution",
              "Chapter 2: Socialism in Europe and the Russian Revolution",
              "Chapter 3: Nazism and the Rise of Hitler",
            ],
          },
          {
            chapter: "Section II: Livelihoods, Economies and Societies",
            subchapters: [
              "Chapter 4: Forest Society and Colonialism",
              "Chapter 5: Pastoralists in the Modern World",
            ],
          },
        ],
      },

      10: {
        Telugu: [
          {
            chapter: "Chapter 1: Classical Literature",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Poetry",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Essays",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Drama",
            subchapters: [],
          },
        ],
        English: [
          {
            chapter: "Chapter 1: Grammar",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Comprehension",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Poetry",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Fiction",
            subchapters: [],
          },
        ],
        Math_SEM1: [
          {
            chapter: "Chapter 1: Real Numbers",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Polynomials",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Pair of Linear Equations in Two Variables",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Quadratic Equations",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Arithmetic Progressions",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Triangles",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Coordinate Geometry",
            subchapters: [],
          },
        ],
        Math_SEM2: [
          {
            chapter: "Chapter 8: Introduction to Trigonometry",
            subchapters: [],
          },
          {
            chapter: "Chapter 9: Some Applications of Trigonometry",
            subchapters: [],
          },
          {
            chapter: "Chapter 10: Circles",
            subchapters: [],
          },
          {
            chapter: "Chapter 11: Areas Related to Circles",
            subchapters: [],
          },
          {
            chapter: "Chapter 12: Surface Areas and Volumes",
            subchapters: [],
          },
          {
            chapter: "Chapter 13: Statistics",
            subchapters: [],
          },
          {
            chapter: "Chapter 14: Probability",
            subchapters: [],
          },
        ],
        Physics: [
          {
            chapter: "Chapter 1: Chemical Reactions and Equations",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Acids, Bases and Salts",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Metals and Non-metals",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Carbon and its Compounds",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Light – Reflection and Refraction",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: The Human Eye and the Colourful World",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Electricity",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: Magnetic Effects of Electric Current",
            subchapters: [],
          },
        ],
        Biology: [
          {
            chapter: "Chapter 5: Life Processes",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Control and Coordination",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: How do Organisms Reproduce?",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: Heredity",
            subchapters: [],
          },
          {
            chapter: "Chapter 9: Our Environment",
            subchapters: [],
          },
        ],
        Social_Geography: [
          {
            chapter: "Chapter 1: Resources and Development",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Forest and Wildlife Resources",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Water Resources",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Agriculture",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Minerals and Energy Resources",
            subchapters: [],
          },
          {
            chapter: "Chapter 6: Manufacturing Industries",
            subchapters: [],
          },
          {
            chapter: "Chapter 7: Lifelines of National Economy",
            subchapters: [],
          },
        ],
        Social_History: [
          {
            chapter: "Section I: Events and Processes",
            subchapters: [
              "Chapter 1: The Rise of Nationalism in Europe",
              "Chapter 2: Nationalism in India",
            ],
          },
          {
            chapter: "Section II: Livelihoods, Economies and Societies",
            subchapters: [
              "Chapter 3: The Making of a Global World",
              "Chapter 4: The Age of Industrialisation",
            ],
          },
          {
            chapter: "Section III: Everyday Life, Culture and Politics",
            subchapters: ["Chapter 5: Print Culture and the Modern World"],
          },
        ],
        Social_Economics: [
          {
            chapter: "Chapter 1: DEVELOPMENT",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: SECTORS OF THE INDIAN ECONOMY",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: MONEY AND CREDIT",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: GLOBALISATION AND THE INDIAN ECONOMY",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: CONSUMER RIGHTS",
            subchapters: [],
          },
        ],
        Social_Politics: [
          {
            chapter: "Chapter 1: Power-sharing",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: Federalism",
            subchapters: [],
          },
          {
            chapter: "Chapter 3: Gender, Religion and Caste",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: Political Parties",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: Outcomes of Democracy",
            subchapters: [],
          },
        ],
      },

      Inter_FIRST_YEAR: {
        MATHEMATICS_I_A: [
          {
            chapter: "Chapter 1: Functions",
            subchapters: [
              "1.0: Ordered Pairs",
              "1.1: Types of Function-Definitions",
              "1.2: Inverse Functions and Theorems",
              "1.3: Real valued functions (Domain, Range and Inverse)",
            ],
          },
          {
            chapter: "Chapter 2: Mathematical Induction",
            subchapters: [
              "2.1: Principles of Mathematical Induction and Theorems",
              "2.2: Applications of Mathematical Induction",
              "2.3: Problems on divisibility",
            ],
          },
          {
            chapter: "Chapter 3: Matrices",
            subchapters: [
              "3.1: Types of Matrices",
              "3.2: Scalar multiple of a matrix and multiplication of matrices",
              "3.3: Transpose of a matrix",
              "3.4: Determinants",
              "3.5: Adjoint and Inverse of a Matrix",
              "3.6: Consistency and Inconsistency of system of Simultaneous Equations",
              "3.7: Solution of Simultaneous Linear Equations",
            ],
          },
          {
            chapter: "Chapter 4: Addition of Vectors",
            subchapters: [
              "4.1: Vectors as a triad of real numbers, some basic concepts",
              "4.2: Classification (Types) of Vectors",
              "4.3: Sum (Addition) of Vectors",
              "4.4: Scalar Multiplication of a vector",
              "4.5: Angle between two non-zero vectors",
              "4.6: Linear Combination of Vectors",
              "4.7: Components of a vector in Three Dimensions",
              "4.8: Vector Equations of Line and Plane",
            ],
          },
          {
            chapter: "Chapter 5: Product of Vectors",
            subchapters: [
              "5.1: Scalar or dot product of two vectors - Geometrical interpretation Orthogonal Projections",
              "5.2: Properties of dot product",
              "5.3: Expression for Scalar(dot) product, Angle between two vectors",
              "5.4: Geometrical Vector methods",
              "5.5: Vector equation of a plane – normal form",
              "5.6: Angle between two planes",
              "5.7: Vector product (cross product) of two vectors and properties",
              "5.8: Vector product in (i,j,k) system",
              "5.9: Vector Areas",
              "5.10: Scalar triple product",
              "5.11: Vector equation of a plane - different forms, skew lines, shortest distance-plane, condition for coplanarity etc.",
              "5.12: Vector triple product - results",
              "5.13: Solved Problems",
            ],
          },
          {
            chapter: "Chapter 6: Trigonometric Ratios up to Transformations",
            subchapters: [
              "6.1: Trigonometric ratios – variation – Graphs and periodicity",
              "6.2: Trigonometric ratios of compound angles",
              "6.3: Trigonometric ratios of multiple and sub-multiple angles",
              "6.4: Sum and product transformation",
            ],
          },
          {
            chapter: "Chapter 7: Trigonometric Equations",
            subchapters: [
              "7.1: General solutions of trigonometric equations",
              "7.2: Simple trigonometric equations - solutions",
            ],
          },
          {
            chapter: "Chapter 8: Inverse Trigonometric Functions",
            subchapters: [
              "8.1: To reduce a trigonometric function into a bijective function",
              "8.2: Graphs of Inverse trigonometric functions",
              "8.3: Properties of inverse trigonometric functions",
            ],
          },
          {
            chapter: "Chapter 9: Hyperbolic Functions",
            subchapters: [
              "9.1: Definitions of Hyperbolic Functions, graphs",
              "9.2: Definitions of inverse Hyperbolic Functions and graphs",
              "9.3: Additions formula of Hyperbolic Functions",
            ],
          },
          {
            chapter: "Chapter 10: Complex Numbers",
            subchapters: [
              "10.1: Algebra of Complex Numbers",
              "10.2: Geometrical representation of complex numbers",
              "10.3: Modulus and Argument of a complex number",
              "10.4: De-Moivre’s theorem and its applications",
              "10.5: Roots of a complex number",
              "10.6: Geometrical interpretation of multiplication and division of complex numbers",
              "10.7: Solved Problems",
            ],
          },
          {
            chapter: "Chapter 11: Quadratic Expressions",
            subchapters: [
              "11.1: Quadratic equations",
              "11.2: Quadratic expressions",
              "11.3: Quadratic inequalities",
            ],
          },
          {
            chapter: "Chapter 12: Permutations and Combinations",
            subchapters: [
              "12.1: Fundamental principles of counting",
              "12.2: Permutations",
              "12.3: Combinations",
              "12.4: Properties of combinations",
              "12.5: Solved Problems",
            ],
          },
          {
            chapter: "Chapter 13: Binomial Theorem",
            subchapters: [
              "13.1: Binomial theorem for positive integral index",
              "13.2: General term in the expansion of (a+b)n",
              "13.3: Properties of binomial coefficients",
              "13.4: Binomial theorem for any index",
              "13.5: Solved Problems",
            ],
          },
          {
            chapter: "Chapter 14: Exponential and Logarithmic Series",
            subchapters: [
              "14.1: Exponential series",
              "14.2: Logarithmic series",
              "14.3: Logarithmic series for any base",
              "14.4: Solved Problems",
            ],
          },
          {
            chapter: "Chapter 15: Mathematical Logic",
            subchapters: [
              "15.1: Statements and propositions",
              "15.2: Truth value of a statement",
              "15.3: Logical operations",
              "15.4: Truth tables",
              "15.5: Tautologies and contradictions",
              "15.6: Logical equivalence",
              "15.7: Solved Problems",
            ],
          },
          {
            chapter: "Chapter 16: Group Theory",
            subchapters: [
              "16.1: Groups",
              "16.2: Subgroups",
              "16.3: Cyclic groups",
              "16.4: Permutation groups",
              "16.5: Solved Problems",
            ],
          },
        ],
        MATHEMATICS_I_B: [
          {
            chapter: "Chapter 1: Locus",
            subchapters: [
              "1.1: Definition of Locus - Illustrations",
              "1.2: Equation of Locus - Problems connected to it",
            ],
          },
          {
            chapter: "Chapter 2: Transformation of Axes",
            subchapters: [
              "2.1: Transformation of axes - Rules, derivations and illustrations",
              "2.2: Rotation of axes - Derivations - Illustrations",
            ],
          },
          {
            chapter: "Chapter 3: Straight Lines",
            subchapters: [
              "3.1: Slope of a line",
              "3.2: Angle between two lines",
              "3.3: Straight line-Symmetric form",
              "3.4: Straight line-Reduction into various forms",
              "3.5: Intersection of two straight lines",
              "3.6: Family of straight lines-Concurrent lines",
              "3.7: Condition for Concurrent lines",
              "3.8 : Length of the perpendicular from a point to a line",
              "3.9: Distance between two parallel lines",
              "3.10: Concurrent lines - Properties related to a triangle",
            ],
          },
          {
            chapter: "Chapter 4: Pair of Straight Lines",
            subchapters: [
              "4.1: Equations of a pair of lines passing through the origin",
              "4.2: Angle between a pair of lines",
              "4.3: Condition for perpendicular and coincident lines, bisectors of angles",
              "4.4: Pair of bisectors of angles",
              "4.5: Pair of lines - Second degree general equation",
              "4.6: Conditions for parallel lines - Distance between them, Point of intersection of pair of lines",
              "4.7: Homogenising a second degree equation with a first degree equation in x and y",
            ],
          },
          {
            chapter: "Chapter 5: Three Dimensional Coordinates",
            subchapters: [
              "5.1: Coordinates",
              "5.2: Section formula",
              "5.3: Solved Problems",
            ],
          },
          {
            chapter: "Chapter 6: Direction Cosines and Direction Ratios",
            subchapters: ["6.1: Direction cosines", "6.2: Direction ratios"],
          },
          {
            chapter: "Chapter 7: The Plane",
            subchapters: [
              "7.1: Cartesian equation of a plane - Simple illustrations",
            ],
          },
          {
            chapter: "Chapter 8: Limits and Continuity",
            subchapters: [
              "8.1: Intervals and neighbourhoods",
              "8.2: Limits",
              "8.3: Standard limits",
              "8.4: Continuity",
            ],
          },
          {
            chapter: "Chapter 9: Differentiation",
            subchapters: [
              "9.1: Derivative of a function",
              "9.2: Elementary properties",
              "9.3: Trigonometric, Inverse Trigonometric, Hyperbolic, Inverse Hyperbolic Functions - Derivatives",
              "9.4: Methods of differentiation",
              "9.5: Second Order Derivatives",
            ],
          },
          {
            chapter: "Chapter 10: Applications of Derivatives",
            subchapters: [
              "10.1: Errors and approximations",
              "10.2: Geometrical interpretation of the derivative",
              "10.3: Equations of tangent and normal to a curve",
              "10.4: Lengths of tangent, normal, subtangent and subnormal",
              "10.5: Angle between two curves and condition for orthogonality of curves",
              "10.6: Derivatives as a rate of change",
              "10.7: Rolle’s Theorem and Lagrange’s Mean Valve Theorem",
              "10.8: Increasing and Decreasing functions",
              "10.9: Maxima and Minima",
            ],
          },
        ],
        PHYSICS_I: [
          {
            chapter: "Chapter 1: Physical World",
            subchapters: [
              "1.1: What is Physics?",
              "1.2: Scope and excitement of Physics",
              "1.3: Physics, technology and Society",
              "1.4: Fundamental forces in nature",
              "1.5: Nature of Physical Laws",
            ],
          },
          {
            chapter: "Chapter 2: Units and Measurements",
            subchapters: [
              "2.1: Introduction",
              "2.2: The International System of Units",
              "2.3: Measurement of Length",
              "2.4: Measurement of Mass",
              "2.5: Measurement of Time",
              "2.6: Accuracy, precision of instruments and errors in Measurement",
              "2.7: Significant Figures",
              "2.8: Dimensions of Physical Quantities",
              "2.9: Dimensional Formulae and dimensional equations",
              "2.10: Dimensional Analysis and Its Applications",
            ],
          },
          {
            chapter: "Chapter 3: Motion in a Straight Line",
            subchapters: [
              "3.1: Introduction",
              "3.2: Position, Path Length and Displacement",
              "3.3: Average Velocity and Speed",
              "3.4: Instantaneous Velocity and Speed",
              "3.5: Acceleration",
              "3.6: Kinematic equations for uniformly accelerated motion",
              "3.7: Relative velocity",
            ],
          },
          {
            chapter: "Chapter 4: Motion in a Plane",
            subchapters: [
              "4.1: Introduction",
              "4.2: Scalars and Vectors",
              " 4.3: Multiplication of Vectors by real numbers",
              "4.4: Addition and Subtraction of Vectors - graphical method",
              "4.5: Resolution of Vectors",
              "4.6: Vector addition – analytical method",
              "4.7: Motion in a plane",
              "4.8: Motion in a plane with constant acceleration",
              "4.9: Relative velocity in two dimensions",
              "4.10: Projectile Motion",
              "4.11: Uniform circular motion",
            ],
          },
          {
            chapter: "Chapter 5: Laws of Motion",
            subchapters: [
              "5.1: Introduction",
              "5.2: Aristotle’s Inertia",
              "5.3: The Law of Inertia",
              "5.4: Newton’s first law of Motion",
              "5.5: Newton’s Second law of Motion",
              "5.6: Newton’s Third law of Motion",
              "5.7: Conservation of momentum",
              "5.8: Equilibrium of a particle",
              "5.9: Common Forces in Mechanics",
              "5.10: Circular Motion",
              "5.11: Solving problems in Mechanics",
            ],
          },
          {
            chapter: "Chapter 6: Work, Energy and Power",
            subchapters: [
              "6.1: Introduction",
              "6.2: Notions of Work and Kinetic Energy : The work-energy theorem",
              "6.3: Work",
              "6.4: Kinetic energy",
              "6.5: Work done by a variable force",
              "6.6: The work-energy theorem for a variable force",
              "6.7: The concept of Potential Energy",
              "6.8: The conservation of Mechanical Energy",
              "6.9: The Potential Energy of a spring",
              "6.10: Various forms of energy : the law of conservation of Energy",
              "6.11: Power",
              "6.12: Collisions",
            ],
          },
          {
            chapter: "Chapter 7: System of Particles and Rotational Motion",
            subchapters: [
              "7.1: Introduction",
              "7.2: Centre of Mass",
              "7.3: Motion of Centre of Mass",
              "7.4: Linear Momentum of a System of particles",
              "7.5: Vector product of Two Vectors",
              "7.6: Angular Velocity and its relation with linear velocity",
              "7.7: Torque and Angular Momentum",
              "7.8: Equilibrium of a Rigid Body",
              "7.9: Moment of Inertia",
              "7.10: Theorems of perpendicular and parallel Axis",
              "7.11: Dynamics of Rotational Motion about a Fixed Axis",
              "7.12: Angular momentum",
            ],
          },
          {
            chapter: "Chapter 8: Oscillations",
            subchapters: [
              "8.1: Introduction",
              "8.2: Periodic and Oscillatory Motions",
              "8.3: Simple Harmonic Motion (SHM)",
              "8.4: Simple Harmonic Motion and Uniform Circular Motion",
              "8.5: Velocity and Acceleration in Simple Harmonic Motion",
              "8.6: Force Law for Simple Harmonic Motion",
              "8.7: Energy in Simple Harmonic Motion",
              "8.8: Some systems executing Simple Harmonic Motion",
              "8.9: Damped Simple Harmonic Motion",
              "8.10: Forced Oscillations and Resonance",
            ],
          },
          {
            chapter: "Chapter 9: Gravitation",
            subchapters: [
              "9.1: Introduction",
              "9.2: Kepler’s Law",
              "9.3: Universal Law of Gravitation",
              "9.4: The Gravitational Constant",
              "9.5: Acceleration due to Gravity of the Earth",
              "9.6: Acceleration due to gravity below and above the surface of Earth",
              "9.7: Gravitational Potential Energy",
              "9.8: Escape Speed",
              "9.9: Earth Satellite",
              "9.10: Energy of an orbiting satellite",
              "9.11: Geostationary and Polar satellites",
              "9.12: Weightlessness",
            ],
          },
          {
            chapter: "Chapter 10: Mechanical Properties of Solids",
            subchapters: [
              "10.1: Introduction",
              "10.2: Elastic behavior of Solids",
              "10.3: Stress and Strain",
              "10.4: Hooke’s Law",
              "10.5: Stress-strain curve",
              "10.6: Elastic Module",
              "10.7: Applications of Elastic Behavior of Materials",
              "10.8: Pressure",
              "10.9: Viscosity",
              "10.10: Surface tension",
              "10.11: Surface Energy",
              "10.12: Angle of Contact and Capillary Action",
            ],
          },
          {
            chapter: "Chapter 11: Mechanical Properties of Fluids",
            subchapters: [
              "11.1: Introduction",
              "11.2: Pressure",
              "11.3: Streamline flow",
              "11.4: Bernoulli’s principle",
              "11.5: Viscosity",
              "11.6: Surface tension",
              "11.7: Surface Energy",
              "11.8: Angle of Contact and Capillary Action",
            ],
          },
          {
            chapter: "Chapter 12: Thermal Properties of Matter",
            subchapters: [
              "12.1: Introduction",
              "12.2: Temperature and Heat",
              "12.3: Measurement of Temperature",
              "12.4: Ideal-gas Equation and Absolute Temperature",
              "12.5: Thermal Expansion",
              "12.6: Specific heat capacity",
              "12.7: Calorimetry",
              "12.8: Change of State",
              "12.9: Regelation",
              "12.10: Heat Transfer",
              "12.11: Newton’s Law of Cooling",
            ],
          },
          {
            chapter: "Chapter 13: Thermodynamics",
            subchapters: [
              "13.1: Introduction",
              "13.2: Thermal equilibrium",
              "13.3: Zeroth law of Thermodynamics",
              "13.4: Heat, Work and Internal Energy",
              "13.5: First law of Thermodynamics",
              "13.6: Specific Heat Capacity",
              "13.7: Thermodynamic Process",
              "13.8: Thermodynamic state variables and Equation of State",
              "13.9: Thermodynamic Processes",
              "13.10: Heat Engines",
              "13.11: Refrigerators and Heat Pumps",
              "13.12: Second Law of Thermodynamics",
              "13.13: Reversible and irreversible processes",
              "13.14: Carnot engine",
              "13.15: Carnot Theorem",
            ],
          },
          {
            chapter: "Chapter 14: Kinetic Theory",
            subchapters: [
              "14.1: Introduction",
              "14.2: Molecular nature of matter",
              "14.3: Behavior of gases",
              "14.4: Kinetic theory of an ideal gas",
              "14.5: Law of equipartition of energy",
              "14.6: Specific heat capacity",
              "14.7: Mean free path",
            ],
          },
          {
            chapter: "Chapter 15: Oscillations and Waves",
            subchapters: [
              "15.1: Introduction",
              "15.2: Periodic and Oscillatory Motions",
              "15.3: Simple Harmonic Motion (SHM)",
              "15.4: Simple Harmonic Motion and Uniform Circular Motion",
              "15.5: Velocity and Acceleration in Simple Harmonic Motion",
              "15.6: Force Law for Simple Harmonic Motion",
              "15.7: Energy in Simple Harmonic Motion",
              "15.8: Some systems executing Simple Harmonic Motion",
              "15.9: Damped Simple Harmonic Motion",
              "15.10: Forced Oscillations and Resonance",
              "15.11: Wave Motion",
              "15 .12: Types of Waves",
              "15.13: Wave Parameters",
              "15.14: Wave Speed",
              "15.15: Wave Energy",
            ],
          },
        ],
        CHEMISTRY_I: [
          {
            chapter: "Chapter 1: Kinetic Theory",
            subchapters: [
              "1.1: Sub-atomic particles",
              "1.2: Atomic models - Rutherford’s nuclear model of atom",
              "1.3: Developments to the Bohr’s model of atom",
              "1.4: Bohr’s model for hydrogen atom",
              "1.5: Towards quantum mechanical model of the atom",
              "1.6: Quantum mechanical model of an atom. Important features of quantum mechanical model of atom - orbitals and quantum numbers - shapes of atomic orbitals - energies of orbitals - filling of orbitals in atoms. Aufbau principle, Pauli’s exclusion principle and Hund’s rule of maximum multiplicity – Electronic configurations of atoms - Stability of half filled and completely filled orbitals.",
            ],
          },
          {
            chapter:
              "Chapter 2: Classification of Elements and Periodicity in Properties",
            subchapters: [
              "2.1: Need to classify elements",
              "2.2: Genesis of periodic classification",
              "2.3: Modern periodic law and present form of the periodic table",
              "2.4: Nomenclature of elements with atomic number greater than 100",
              "2.5: Electronic configuration of elements and the periodic table",
              "2.6: Electronic configuration and types of elements s, p, d and f blocks",
              "2.7: Trends in physical properties",
            ],
          },
          {
            chapter: "Chapter 3: Chemical Bonding and Molecular Structure",
            subchapters: [
              "3.1: Kossel-Lewis approach to chemical bonding",
              "3.2: Ionic or electrovalent bond",
              "3.3: Bond parameters",
              "3.4: The Valence Shell Electron Pair Repulsion (VSEPR) theory",
              "3.5: Valence bond theory",
              "3.6: Hybridisation",
              "3.7: Coordinate bond",
              "3.8: Molecular orbital theory - bonding in some homonuclear diatomic molecules",
              "3.9: Hydrogen bonding",
            ],
          },
          {
            chapter: "Chapter 4: States of Matter: Gases and Liquids",
            subchapters: [
              "4.1: Intermolecular forces",
              "4.2: Thermal energy",
              "4.3: Intermolecular forces Vs Thermal interactions",
              "4.4: The gaseous state",
              "4.5: The gas laws",
              "4.6: Ideal gas equation",
              "4.7: Graham’s law of diffusion – Dalton’s law of partial pressures",
              "4.8: Kinetic molecular theory of gases",
              "4.9: Kinetic gas equation of an ideal gas (no derivation) – Deduction of gas laws from kinetic gas equation",
              "4.10: Distribution of molecular speeds – rms, average and most probable speeds kinetic energy of gas molecules",
              "4.11: Behaviour of real gases – deviation from ideal gas behavior – compressibility factor Vs pressure diagrams of real gases",
              "4.12: Liquefaction of gases",
              "4.13: Liquid state – properties of liquids in terms of inter molecular interactions – vapour pressure, viscosity and surface tension",
            ],
          },
          {
            chapter: "Chapter 5: Stoichiometry",
            subchapters: [
              "5.1: Some basic concepts",
              "5.2: Laws of chemical combinations, Gay Lussac’s law of Gaseous volumes, Dalton’s atomic theory, Avogadro law",
              "5.3: Atomic and molecular masses – mole concept and molar mass concept of equivalent weight",
              "5.4: Percentage composition of compounds and calculations of empirical and molecular formulae of compounds",
              "5.5: Stoichiometry and stoichiometric calculations",
              "5.6: Methods of expressing concentrations of solutions",
              "5.7: Redox reactions",
              "5.8: Oxidation number concept",
              "5.9: Types of redox reactions",
              "5.10: Balancing of redox reactions – oxidation number method – half reaction (ion-electron) method.",
              "5.11: Redox reactions in titrimetry",
            ],
          },
          {
            chapter: "Chapter 6: Thermodynamics",
            subchapters: [
              "6.1: Thermodynamic terms",
              "6.2: Applications – work - enthalpy - extensive and intensive properties - heat capacity",
              "6.3: Measurement of “U and H” : Calorimetry",
              "6.4: Enthalpy change, ‘rH’ of reactions",
              "6.5: Enthalpies for different types of reactions",
              "6.6: Spontaneity",
              "6.7: Gibbs Energy change and equilibrium",
              "6.8: Absolute entropy and the third law of thermodynamics",
            ],
          },
          {
            chapter: "Chapter 7: Chemical Equilibrium and Acids-Bases",
            subchapters: [
              "7.1: Equilibrium in physical process",
              "7.2: Equilibrium in chemical process – dynamic equilibrium",
              "7.3: Law of chemical equilibrium – law of mass action and equilibrium constant",
              "7.4: Homogeneous equilibria, equilibrium constant in gaseous systems, relationship between Kp and Kc",
              "7.5: Heterogeneous equilibria",
              "7.6: Applications of equilibrium constant",
              "7.7: Relationship between equilibrium constant ‘K’, reaction Quotient ‘Q’ and Gibbs energy ‘G’",
              "7.8: Factors affecting equilibria – Le-chatelier’s principle application to industrial synthesis of ammonia and sulphur trioxide",
              "7.9: Ionic equilibrium in solutions",
              "7.10: Acids, bases and salts – Arrhenius, Bronsted-Lowry and Lewis concepts of acids and bases",
              "7.11: Ionisation of acids and bases",
              "7.12: Buffer solutions",
              "7.13: Solubility equilibria of sparingly soluble salts Solubility product constant - common ion effect on solubility of Ionic salts",
            ],
          },
          {
            chapter: "Chapter 8: Hydrogen and its Compounds",
            subchapters: [
              "8.1: Position of hydrogen in the periodic table",
              "8.2: Dihydrogen - Occurrence and isotopes",
              "8.3: Preparation of dihydrogen",
              "8.4: Properties of dihydrogen",
              "8.5: Hydrides: Ionic, covalent, and non-stiochiometric hydrides",
              "8.6: Water: Physical properties; structure of water, ice chemical properties of water; hard and soft water temporary and permanent hardness of water.",
              "8.7: Hydrogen peroxide: Preparation; physical properties; structure and chemical properties; storage and uses",
              "8.8: Heavy water",
              "8.9: Hydrogen as a fuel",
            ],
          },
          {
            chapter:
              "Chapter 9: S-Block Elements (Alkali and Alkaline Earth Metals) Group 1 Elements:",
            subchapters: [
              "9.1: Alkali metals; Electronic configurations; atomic and ionic radii; ionization enthalpy; hydration enthalpy; physical properties; chemical properties; uses",
              "9.2: General characteristics of the compounds of the alkali metals: oxides; halides; salts of oxy acids",
              "9.3: Anamalous properties of lithium:",
              "9.4: Some important compounds of sodium: Sodium carbonate; sodium chloride; sodium hydroxide; sodium hydrogen carbonate",
              "9.5: Biological importance of sodium and potassium",
              "Group 2 Elements:",
              "9.6: Alkaline earth elements; Electronic configuration; ionization enthalpy; hydration enthalpy; physical properties; chemical properties; uses",
              "9.7: General characteristics of compounds of the alkaline earth metals, oxides, hydroxides, halides, salts of oxyacids (carbonates, sulphates and nitrates)",
              "9.8: Anomalous behavior of beryllium; its diagonal relationship with aluminium",
              "9.9: Some important compounds of calcium",
              "9.10: Biological importance of calcium and magnesium",
            ],
          },
          {
            chapter: "Chapter 10: p-Block Elements Group 13 (Boron Family)",
            subchapters: [
              "10.1: General introduction – Electronic configuration, atomic radii, ionization enthalpy, electro negativity; physical & chemical properties",
              "10.2: Important trends and anomalous properties of boron",
              "10.3: Some important compounds of boron – borax, ortho boric acid, diborane",
              "10.4: Uses of boron, aluminium and their compounds",
            ],
          },
          {
            chapter: "Chapter 11: p-BLOCK ELEMENTS GROUP 14 (CARBON FAMILY) ",
            subchapters: [
              "11.1 General introduction – Electronic configuration, atomic radii, ionization enthalpy, electro negativity; physical & chemical properties",
              "11.2 Important trends and anomalous properties of carbon",
              "11.3 Allotropes of carbon ",
              "11.4 Uses of carbon ",
              "11.5 Some important compounds of carbon and s",
            ],
          },
          {
            chapter: "Chapter 12: ENVIRONMENTAL CHEMISTRY ",
            subchapters: [
              "12.1 Definition of terms: Air, Water and Soil pollutions ",
              "12.2 Environmental pollution",
              "12.3 Atmospheric pollution",
              "12.4 Acid rain: Particulate pollutants",
              "12.5 Stratospheric pollution",
              "12.6 Water pollution ",
              "12.7 Soil Pollution: Pesticides, industrial wastes ",
              "12.8 Strategies to control environmental pollution ",
              "12.9 Green chemistry",
            ],
          },
          {
            chapter:
              "Chapter 13: ORGANIC CHEMISTRY-SOME BASIC PRINCIPLES AND TECHNIQUES AND HYDROCARBONS ",
            subchapters: [
              "General introduction  ",
              "13.2 Tetravalency of Carbon: shapes of organic compounds",
              "13.3 Structural representations of organic compounds ",
              "13.4 Classification of organic compounds ",
              "13.5 Nomenclature of organic compounds ",
              "13.6 Isomerism ",
              "13.7 Fundamental concepts in organic reaction mechanisms",
              "13.8 Methods of purification of organic compounds ",
              "13.9 Qualitative elemental analysis of organic compounds ",
              "13.10 Quantitative elemental analysis of organic compounds ",
              "13.11 Classification of hydrocarbons ",
              "13.12 Alkanes – Nomenclature, isomerism (structural and conformations of ethane only) preparation of alkanes – properties of alkanes ",
              "13.13 Alkenes – Nomenclature, structure of ethane, isomerism (structural and geometrical)– methods of preparation of alkenes – properties of alkenes",
              "13.14 Alkynes – Nomenclature and isomerism, structure of acetylene methods of preparation of acetylene – physical properties and chemical reactions of alkynes ",
              "13.15 Aromatic Hydrocarbons: Nomenclature and isomerism ",
            ],
          },
        ],
        BOTANY_I: [
          {
            chapter: "Diversity in the Living World  ",
            subchapters: [
              "Chapter-1 The Living World ",
              "Chapter-2 Biological Classification  ",
              "Chapter-3 Science of Plants – Botany  ",
              "Chapter-4 Plant Kingdom ",
            ],
          },
          {
            chapter: "Structural Organisation in Plants –Morphology  ",
            subchapters: ["Chater-5 Morphology of Flowering Plants  "],
          },
          {
            chapter: "Reproduction in plants ",
            subchapters: [
              "Chater-6 Mode of Reproduction ",
              "Chapter-7 Sexual Reproduction in Flowering plants  ",
            ],
          },
          {
            chapter: "Plant Systematic",
            subchapters: ["Chapter-8 Texonomy of Angiosperms "],
          },
          {
            chapter: "Structure and functions  ",
            subchapters: [
              "Chapter-9 The Unit of Life ",
              "Chapter-10 Biomolecules  ",
              "Chapter-11 Cell Cycle and Cell Division ",
            ],
          },
          {
            chapter: "Internal organization of Plants  ",
            subchapters: [
              "Chapter-12 Histology and Anatomy of Flowering Plants ",
            ],
          },
          {
            chapter: " Plant Ecology",
            subchapters: [
              "Chapter-13 Ecological Adaptation , Succession and Ecological Services.",
            ],
          },
        ],
        ZOOLOGY_I: [
          {
            chapter: "UNIT – I Diversity of Living World ",
            subchapters: [
              "1.1   What is Life? ",
              "1.2   Nature, Scope and Meaning of Zoology ",
              "1.3   Branches of Zoology",
              "1.4   Need for Classification ",
              "1.5   Biological Classification",
              "1.6   Levels and Hierarchy of Classification",
              "1.7   Nomenclature ",
              "1.8   Species Concept ",
              "1.9   Kingdom:  Animalia ",
              "1.10   Biodiversity ",
            ],
          },
          {
            chapter: "UNIT – II  Structural Organisation in Animals  ",
            subchapters: [
              "2.1   Levels of Organisation ",
              "2.2   Importance of Symmetry ",
              "2.3   Coelom ",
              "2.4   Animal Tissues ",
            ],
          },
          {
            chapter: "UNIT - III  Animal Diversity – I (Invertebrate Phyla)",
            subchapters: [
              "3.1   Phylum – Porifera",
              "3.2   Phylum – Cnidaria",
              "3.3   Phylum – Ctenophora",
              "3.4   Phylum – Platyhelminthes",
              "3.5   phylum – nematode",
              "3.6   phylum – Annelida ",
              "3.7   Phylum – Arthropoda ",
              "3.8   Phylum – Mollusca ",
              "3.9   phylum – Echinodermata",
              "3.10   Phylum – Hemichordata ",
            ],
          },
          {
            chapter: "UNIT – IV Animal Diversity – II (Chordata Phylum )  ",
            subchapters: [
              "4.0   Phylum-Chordata",
              "4.1   Subphylum- Urochordata or Tunicata",
              "4.2   Subphylum-Cephalochordata ",
              "4.3   Subphylum-Vertebrata/Craniata",
              "4.4   Super Class: Agnatha ",
              "4.5  Super Class : Gnathostomata ",
              ,
              "4.5 Terapoda  ",
            ],
          },
          {
            chapter: "UNIT – V  Locomotion and Reproduction  ",
            subchapters: [
              "5.1   Locomotion in Protozoa ",
              "5.2   Flagellar and Ciliary movement",
              "5.3   Asexual Reproduction ",
              "5.4   Sexual Reproduction ",
            ],
          },
        ],
      },
      Inter_SECOND_YEAR: {
        MATHEMATICS_II_A: [
          {
            chapter: "Chapter-1: Complex Numbers",
            subchapters: [
              "1.1 Complex number as and ordered pair of real numbers Fundamental operations",
              "1.2 Representation of complex number in the form a+ib",
              "1.3 Modules and Amplitude of a complex number- Illustrations",
              "1.4 Geometrical and Polar representation of comple number in Argand plane-Argand diagram",
            ],
          },
          {
            chapter: "Chapter-2: De Moivre’s Theorem",
            subchapters: [
              "2.1 De Moivre’s Theorem- Integral and Rational Indices",
              "2.2 nth roots of unity-Geographical Interpretations- Illustrations",
            ],
          },
          {
            chapter: "Chapter-3: Quadratic Expressions",
            subchapters: [
              "3.1 Quadratic Expressions, Equations in one Variable",
              "3.2 Sign of quadratic expressions-Change in signs and Maximum and Minimum",
              "3.3 Quadratic Inequations",
            ],
          },
          {
            chapter: "Chapter-4: Theory of Equations",
            subchapters: [
              "4.1 Relation between the roots and the coefficients in an Equation",
              "4.2 Solving an equation when two or more of its roots are connected by certain relations",
              "4.3 Equations with real coefficients – occurrence of complex roots in conjugate pairs and its consequences",
              "4.4 Transformation of equations – Reciprocal equations ",
            ],
          },
          {
            chapter: " Chapter-5: Permutations and Combinations",
            subchapters: [
              "5.1 Fundamental Principles of Counting – Linear and Circular permutations",
              "5.2 Permutations of n dissimilar things taken r at a time",
              "5.3 Permutations when repetitions are allowed",
              "5.4 Circular Permutations",
              "5.5 Permutations with Constant repetitions",
              "5.6 Combinations- Definitions and Certain Theorems",
            ],
          },
          {
            chapter: "Chapter – 6 : Binomial Theorem",
            subchapters: [
              "6.1 Binomial Theorem for positive integral index",
              "6.2 Binomial Theorem for Rational Index",
              "6.3 Approximations using Binomial Theorem",
            ],
          },
          {
            chapter: "Chapter-7: Partial Fractions",
            subchapters: [
              "7.0 Rational Fractions",
              "7.1 Partial Fractions of f(x)/g(x), when g(x) contains non-repeated linear factors",
              "7.2 Partial Fractions of f(x)/g(x), when g(x) contains repeated and I or non-repeated linear factors",
              "7.3 Partial Fractions of f(x)/g(x), when g(x) contains irreducible factors",
            ],
          },
          {
            chapter: "Chapter-8: Measure of Dispersion",
            subchapters: [
              "8.1 Range",
              "8.2 Mean Deviation",
              "8.3 Variance and Standard Deviation of ungrouped /grouped data",
              "8.4 Coefficient of Variation and analysis of frequency distributions with equal means but different variances",
            ],
          },
          {
            chapter: "Chapter-9: Probability",
            subchapters: [
              "9.1 Random Experiments and Events",
              "9.2 Classical definition of probability, Axiomatic approach and addition theorem of probability",
              "9.3 Independent and Dependent events, Conditional Probability, Multiplication Theorem1 and Baye’s Theorem",
            ],
          },
          {
            chapter:
              "Chapter -10: Random Variables and Probability Distributions",
            subchapters: [
              "10.1 Random Variables",
              "10.2 Theoretical discrete distributions Binomial and Poisson distributions",
            ],
          },
        ],
        MATHEMATICS_II_B: [
          {
            chapter: "Chapter-1: Circle",
            subchapters: [],
          },
          {
            chapter: "Chapter-2: System of Circles",
            subchapters: [],
          },
          {
            chapter: "Chapter-3: Parabola",
            subchapters: [],
          },
          {
            chapter: "Chapter-4: Ellipse",
            subchapters: [],
          },
          {
            chapter: "Chapter-5: Hyperbola",
            subchapters: [],
          },
          {
            chapter: "Chapter-6: Integration",
            subchapters: [],
          },
          {
            chapter: "Chapter-7: Definite Integrals",
            subchapters: [],
          },
          {
            chapter: "Chapter-8: Differential Equation",
            subchapters: [],
          },
        ],
        PHYSICS_II: [
          {
            chapter: "Chapter-1: Waves",
            subchapters: [],
          },
          {
            chapter: "Chapter-2: RAY OPTICS AND OPTICAL INSTRUMENTS",
            subchapters: [],
          },
          {
            chapter: "Chapter-3: WAVE OPTICS",
            subchapters: [],
          },
          {
            chapter: "Chapter-4: ELECTRIC CHARGES AND FIELDS",
            subchapters: [],
          },
          {
            chapter: "Chapter-5: ELECTROSTATIC POTENTIAL AND CAPACITANCE",
            subchapters: [],
          },
          {
            chapter: "Chapter-6: CURRENT ELECTRICITY",
            subchapters: [],
          },
          {
            chapter: "CHAPTER:7: MOVING CHARGES AND MAGNESTISM",
            subchapters: [],
          },
          {
            chapter: "CHAPETER: 8: MAGNETISM AND MATTER",
            subchapters: [],
          },
          {
            chapter: "CHAPETER: 9: ELECTROMAGNETIC INDUCTION",
            subchapters: [],
          },
          {
            chapter: "CHAPTER:10: ALTERNATING CURRENT",
            subchapters: [],
          },
          {
            chapter: "CHAPTER:11: ELECTROMAGNETIC WAVES",
            subchapters: [],
          },
          {
            chapter: "CHAPTER:12: DUAL NATURE OF RADIATION AND MATTER",
            subchapters: [],
          },
          {
            chapter: "CHAPTER:13: AROMS",
            subchapters: [],
          },
          {
            chapter: "CHAPTER: 14: NUCLEI",
            subchapters: [],
          },
          {
            chapter:
              "CHAPTER:15:SEMICONDUCTOR ELCTRONICS: MATERIALS, DEVICES AND SIMPLE CIRCUITS",
            subchapters: [],
          },
          {
            chapter: "CHAPTER: 16 : COMMUNICATION SYSTEMS",
            subchapters: [],
          },
        ],
        CHEMISTRY_II: [
          {
            chapter: "Chapter-1 SOLID STATE",
            subchapters: [],
          },
          {
            chapter: "Chapter 2: SOLUTIONS ",
            subchapters: [],
          },
          {
            chapter:
              "Chapter 3:ELOCTROCHEMISTRY AND CHEMICAL KINETICS ELECTROCHEMISTRY And CHEMICAL KINETICS",
            subchapters: [],
          },
          {
            chapter: "Chapter 4: SURFACE CHEMISTRY ",
            subchapters: [],
          },
          {
            chapter: "Chapter 5: GENERAL PRINCIPLES OF MEALLURGY",
            subchapters: [
              "GROUP – 16 ELEMENTS",
              "Ozone",
              "GROUP – 17 ELEMENTS",
              "GROUP – 18 ELEMENTS ",
            ],
          },
          {
            chapter: "Chapter 6:  P-BLOCK ELEMENTS GROUP -15 ELEMENTS",
            subchapters: [],
          },
          {
            chapter:
              "Chapter 7:d AND f BLOCK ELEMENTS & COORDINATION COMPOUNDS ",
            subchapters: [],
          },
          {
            chapter: "Chapter 8: POLYMERS ",
            subchapters: [],
          },
          {
            chapter: "Chapter 9: BIOEMOLECULES",
            subchapters: [],
          },
          {
            chapter: "Chapter 10:CHEMISTRY IN EVERYDAY LIFE",
            subchapters: [],
          },
          {
            chapter: "Chapter 11: HALO ALKANES AND HALOARENES",
            subchapters: [],
          },
          {
            chapter:
              "Chapter 12: 2 ORGANIC COMPOUNDS CONTANING C,H AND O (Alcohols, Phenols, Ethers, Aldehydes, Ketones and Carboxylicacids)",
            subchapters: [
              "Alcohols, Phenols, Ethers",
              "Aldehydes, Ketones",
              "Carboxylic acids",
            ],
          },
          {
            chapter: "Chapter 13: ORGANIC COMPOUNDS CONTAINING NITROGEN ",
            subchapters: [
              "Amines",
              "Diazonium Salts ",
              "Cyanides and Isocyanides ",
            ],
          },
        ],
        BOTANY_II: [
          {
            chapter: "1. Human Anatomy and Physiology - I ",
            subchapters: [],
          },
          {
            chapter: "2.Microbiology",
            subchapters: [],
          },
          {
            chapter: "3.Genetics",
            subchapters: [],
          },
          {
            chapter: "4. Molecular Biology",
            subchapters: [],
          },
          {
            chapter: "5.Biotechnology  ",
            subchapters: [],
          },
          {
            chapter: "6. Plants, Microbes and Human Welfare ",
            subchapters: [],
          },
        ],
        ZOOLOGY_II: [
          {
            chapter: "UNIT – IHuman Anatomy and Physiology - I",
            subchapters: [],
          },
          {
            chapter: "UNIT – II  Human Anatomy and Physiology – II ",
            subchapters: [],
          },
          {
            chapter: "UNIT - III  Human Anatomy and Physiology – III",
            subchapters: [],
          },
          {
            chapter: "UNIT – IV Human Anatomy and Physiology – IV",
            subchapters: [],
          },
          {
            chapter: "UNIT – V Human Reproduction",
            subchapters: [],
          },
          {
            chapter: "UNIT –VI Genetics",
            subchapters: [],
          },
          {
            chapter: "UNIT –VII Organic Evolution",
            subchapters: [],
          },

          {
            chapter: "UNIT –VIII Applied Biology",
            subchapters: [],
          },
        ],
      },
    },
     "Telangana" : {
      '8': {
          Mathematics: [
              {
                  chapter: "Chapter 1: Rational Numbers",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Linear Equations in One Variable",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Construction of Quadrilaterals",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Exponents and Powers",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Comparing Quantities using proportion",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Square Roots and Cube Roots",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Frequency Distribution Tables and Graphs",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Exploring Geometrical Figures",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Area of Plane Figures",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Algebraic Expressions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Algebraic Expressions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Factorisation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Visualizing 3-D in 2-D",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Surface Areas and Volumes (cube-cuboid)",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 15: Playing with Numbers",
                  subchapters: [],
              }
          ],
  
          Physics: [
              {
                  chapter: "Chapter 1: Force",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Friction",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Synthetic fibres and plastics",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Metals and non-metals",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Coal and Petroleum",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Combustion, fuels and Flame",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Electric conductivity of liquids",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Some natural phenomena",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Stars and solar system",
                  subchapters: [],
              }
          ],
  
          Biology: [
              {
                  chapter: "Chapter 1: What is Science?",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Cell – The Basic Unit Of Life",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Story Of Micro-organisms",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Reproduction In Animals",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Reaching The Age Of Adolescence",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Different Ecosystems",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Food Production In Plants: Methods Of Management",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Food Production In Animals",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Not For Drink Not For Breath",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Why Do We Fall ill",
                  subchapters: [],
              }
          ],
  
          Telugu: [
              {
                  chapter: "Chapter 1: Thayaaganiradhi",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Samudra Prayanam",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Bandari Basavannna",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Aasamaanyulu",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Shathaka Sudha",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Telugu Janapadhageyellu",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Manjeera",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Chinnapudde",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Amarulu",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Singareni",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Kaapu Bidda",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Matlade Nagali",
                  subchapters: [],
              }
          ],
  
          Social_Science: [
              {
                  chapter: "Chapter 1: Reading and Analysis of Maps",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Energy from the Sun",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Earth Movements and Seasons",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: The Polar Regions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Forests: Using and Protecting them",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Minerals and Mining",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Money and Banking",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Impact of Technology on Livelihoods",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Public Health and the Government",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Landlords and Tenants under the British and the Nizam",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: A National Movement - The Early Phase 1885-1919",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: B National Movement - The Last Phase 1919-1947",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Freedom Movement in Hyderabad State",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: The Indian Constitution",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 15: Parliament and Central Government",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 16: Abolition of Zamindari System",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 17: Understanding Poverty",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 18: Rights Approach to Development",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 19: Social and Religious Reform Movements",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 20: Understanding Secularism",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 21: Performing Arts and Artistes in Modern Times",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 22: Film and Print Media",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 23: Sports: Nationalism and Commerce",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 24: Disaster Management",
                  subchapters: [],
              }
          ],
  
          English: [
              {
                  chapter: "Chapter 1: Family",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Social Issues",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Humanity",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Science and Technology",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Education and Career",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Art and Culture",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Women Empowerment",
                  subchapters: [],
              }
          ]
      },
  
      '9': {
          Mathematics: [
              {
                  chapter: "Chapter 1: Real Numbers",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Mathematics",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: The Elements of Geometry",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Lines and Angles",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Co-Ordinate Geometry",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Linear Equations in Two Variables",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Triangles",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Quadrilaterals",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Statistics",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Surface Areas and Volumes",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Areas",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Circles",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Geometrical Constructions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Probability",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 15: Proofs in Mathematics",
                  subchapters: [],
              }
          ],
  
          Physics: [
              {
                  chapter: "Chapter 1: Matter Around Us",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Motion",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Laws Of Motion",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Is Matter Pure?",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Atoms And Molecules",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: What Is Inside The Atom?",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Gravitation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Floating Bodies",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Work And Energy",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Sound",
                  subchapters: [],
              }
          ],
  
          Biology: [
              {
                  chapter: "Chapter 1: Cell Its Structure And Functions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Plant Tissues",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Animal Tissues",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Movement Of Materials Across The Cell Membrane",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Diversity In Living Organism",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Sense Organs",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Animal Behaviour",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Challenges In Improving Agricultural Products",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Adaptations In Different Ecosystems",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Soil Pollution",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Bio-Geo Chemical Cycles",
                  subchapters: [],
              }
          ],
  
          Social_Science: [
              {
                  chapter: "Chapter 1: Our Earth",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: The Natural Realms of the Earth -Lithosphere",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Hydrosphere",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Atmosphere",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Biosphere",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Agriculture in India",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Industries in India",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Service Activities in India",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Credit in the Financial System",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Prices and Cost of Living",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: The Government Budget and Taxation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Changing Cultural Traditions in Europe 1300-1800",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Democratic and Nationalist Revolutions: 17th &18th centuries",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Democratic and Nationalist Revolutions:19th century",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 15: Industrialisation and Social Change",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 16: Social Protest Movements",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 17: Colonialism in Latin America, Asia and Africa",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 18: Impact of Colonialism in India",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 19: Expansion of Democracy",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 20: Democracy: An Evolving Idea",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 21: Human Rights and Fundamental Rights",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 22: Women Protection Acts",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 23: Disaster Management",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 24: Traffic Education",
                  subchapters: [],
              }
          ],
  
          Telugu: [
              {
                  chapter: "Chapter 1: Dh aramarjunulu",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Nenerigina Burgula",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Valasakuli",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Rangacharya tho mukhamukhi",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Shataka Madhurima",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Deekshaku Siddham Kandi",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Chelimi",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Udyama Spurthi",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Chorus",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Vagbhushanam",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Vayasam",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Tiyyani Palakarimpu",
                  subchapters: [],
              }
          ]
      },
  
      '10': {
          Mathematics: [
              {
                  chapter: "Chapter 1: Real Numbers",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Sets",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Polynomials",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Pair of Linear Equations in two variables",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Quadratic Equations",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Progressions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Coordinate Geometry",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Similar Triangles",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Tangents and Secants to a Circle",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Mensuration",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Trigonometry",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Applications of Trigonometry",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Probability",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Statistics",
                  subchapters: [],
              }
          ],
  
          Physics: [
              {
                  chapter: "Chapter 1: Heat",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Chemical Reactions and Equations",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Reflection of light by different surfaces",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Acids, Bases and Salts",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Refraction of Light at Plane Surfaces",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Refraction of Light at Curved Surfaces",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Human Eye and Colourful world",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Structure of Atom",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Classification of Elements- The Periodic Table",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Chemical bonding",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Electric Current",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Electromagnetism",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Principles of Metallurgy",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Carbon and its Compound",
                  subchapters: [],
              }
          ],
  
          Biology: [
              {
                  chapter: "Chapter 1: Chemical Reactions and Equations",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Respiration - The energy releasing system",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Transportation - The circulatory system ",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Excretion - The wastage disposing system",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Coordination - The linking system",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Reproduction - The generating system",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Coordination in life processes",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Our environment - Our concern",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Natural resources",
                  subchapters: [],
              }
          ],
  
          Social_Science: [
              {
                  chapter: "Chapter 1: India: Relief Features",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Ideas of Development",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Production and Employment",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Climate of India",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Indian Rivers and Water Resources",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: The People",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: People and Settlement",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: People and Migration",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Rampur : A Village Economy",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Globalisation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Food Security",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Sustainable Development with Equity",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: The World Between Wars 1900-1950 : Part -I",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: The World Between Wars 1900-1950 : Part - II",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 15: National Liberation Movements in the Colonies",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 16: National Movement in India–Partition & Independence",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 17: The Making of Independent India’s Constitution",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 18: Independent India (The First 30 years - 1947-77)",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 19: Emerging Political Trends 1977 to 2000",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 20: Post - War World and India",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 21: Social Movements in Our Times",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 22: Citizens and the Governments",
                  subchapters: [],
              }
          ],
  
          Telugu: [
              {
                  chapter: "Chapter 1: Dhanashilamu",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Evari Basha Vallaku Vinasompu",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Veera Telangana",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Kontha Baata",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Nagara Geetham",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Bhagyodayam",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Sataka Madhurima",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Lakshya Siddhi",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Jeevana Bhashayam",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Golconda Patnam",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Bhiksha",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Bhoomika",
                  subchapters: [],
              }
          ]
      },
  
      'Inter_1st_year': {
          Mathematics_IA: [
              {
                  chapter: "Chapter 1: Functions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Matrices",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Addition of Vectors",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Vector Products",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Trigonometric Rations up to Transformation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Hyperbolic EquationsProperties of Triangles",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Properties of Triangles",
                  subchapters: [],
              }
          ],
  
          Mathematics_IB: [
              {
                  chapter: "Chapter 1: Locus",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Transformation of Axes",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: The Straight Line",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Pair of Straight Lines",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Three Dimensional Co-ordinates",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Direction Cosines and Direction Ratios",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: The Plane",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Limits and Continuity",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Differentiation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Applications of Derivatives",
                  subchapters: [],
              }
          ],
  
          Physics: [
              {
                  chapter: "Chapter 1: Units And Measurements",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Motion In A Straight Line",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Motion In A Plane",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Newtons Laws Of Motion",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Work, Energy And Power",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: System Of Particles And Rotational Motion",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Simple Harmonic Motion",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Gravitation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Mechanical Properties Of Solids",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Mechanical Properties Of Fluids",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Thermal Properties Of Matter",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Thermodynamics",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Kinetic Theory of Gases",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Sound Waves",
                  subchapters: [],
              }
          ],
  
          Chemistry: [
              {
                  chapter: "Chapter 1: Some Basic Concepts Of Chemistry",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Structure Of Atom",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Classification Of Elements And Periodicity In Properties",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Chemical Bonding And Molecular Structure",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: States Of Matter",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Thermodynamics",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Equilibrium",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Redox Reactions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Hydrogen",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: The S-Block Elements",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: The P-Block Elements",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Organic Chemistry – Some Basic Principles And Techniques",
                  subchapters: [],
              },
              {
                 chapter: "Chapter 13: Hydrocarbons",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Environmental Chemistry",
                  subchapters: [],
              }
          ],
  
          Biology: [
              {
                  chapter: "Chapter 1: The Living World",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Biological Classification",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Plant Kingdom",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Animal Kingdom",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Morphology Of Flowering Plants",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Anatomy Of Flowering Plants",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Structural Organisation In Animals",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Biomolecules",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Biomolecules",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Cell Cycle And Cell Division",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Transport In Plants",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Mineral Nutrition",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Respiration In Plants",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Respiration In Plants",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 15: Body Fluids And Circulation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 16: Body Fluids And Circulation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 17: Body Fluids And Circulation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 18: Body Fluids And Circulation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 19: Locomotion And Movement",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 20: Locomotion And Movement",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 21: Neural Control And Coordination",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 22: Chemical Coordination And Integration",
                  subchapters: [],
              }
          ],
  
          Geography: [
              {
                  chapter: "Chapter 1: Introduction to geography",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: The Earth",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Landforms",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Climate",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Oceans",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Life on the Earth",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Hazards and disasters",
                  subchapters: [],
              }
          ]
      },
  
      'Inter_2nd_year': {
          Mathematics_IIA: [
              {
                  chapter: "Chapter 1: Complex Numbers",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: De Moivre’s Theorem",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Quadratic Expressions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Theory Of Equations",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Permutations And Combinations",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Binomial Theorem",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Partial Fractions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Measures Of Dispersion",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Probability",
                  subchapters: [],
              }
          ],
  
          Mathematics_IIB: [
              {
                  chapter: "Chapter 1: Circle",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: System Of Circles",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Parabola",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Ellipse",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Hyperbola",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Integration",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Definite IntegralsDifferential Equations",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Differential Equations",
                  subchapters: [],
              }
          ],
  
          Physics: [
              {
                  chapter: "Chapter 1: Waves",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Ray Optics and Optical Instruments",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Wave Optics",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Electric Charges and Fields",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Electrostatic Potential and Capacitance",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Current Electricity",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Moving Charges and Magnetism",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Magnetism and Matter",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Electromagnetic Induction",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Alternating Current",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Electromagnetic Wave",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Dual Nature of Radiation and Matter",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Atoms",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Nuclei",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 15: Semiconductor Electronics: Materials, Devices And Simple Circuit",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 16: Communication System",
                  subchapters: [],
              }
          ],
  
          Chemistry: [
              {
                  chapter: "Chapter 1: The Solid State",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Solutions",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Electrochemistry And Chemical Kinetics",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Surface Chemistry",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: General Principles Of Metallurgy",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: The p-Block Elements",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: The d-and f-Block Elements & Coordination Compounds",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Polymers",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Biomolecules",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Chemistry In Everyday Life",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Haloalkanes and Haloarenes",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Alcohols, Phenols and Ethers",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Organic Compounds Containing Nitrogen",
                  subchapters: [],
              }
          ],
  
          Biology: [
              {
                  chapter: "Chapter 1: Reproduction In Organisms",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Sexual Reproduction In Flowering Plants",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Human Reproduction",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Reproductive Health",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Principles Of Inheritance And Variation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Molecular Basis Of Inheritance",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Evolution",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Human Health And Disease",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Strategies For Enhancement In Food Production",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Microbes In Human Welfare",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Biotechnology : Principles And Processes",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Biotechnology And Its Applications",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Organisms And Populations",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Ecosystem",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 15: Biodiversity And Conservation",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 16: Environmental Issues",
                  subchapters: [],
              }
          ],
  
          Economics: [
              {
                  chapter: "Chapter 1: Economic Growth And Economic Development",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: Population And Human Resource Development",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: National Income, Poverty & Unemployment",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Planning And Environment",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Agricultural Sector",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Industrial Sector",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Tertiary Sector",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: New Economic Reforms And Foreign Sector",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Economic Features Of Telangana",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Economic Features Of Telangana",
                  subchapters: [],
              }
          ],
  
          Geography: [
              {
                  chapter: "Chapter 1: Human & Economic: Definition, Nature and Scope; Man and Geography",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 2: World Population",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 3: Resources",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 4: Primary Economic activities",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 5: Minerals",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 6: Secondary Economic activities",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 7: Tertiary & Quaternary Economic activities",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 8: Transport and Trade",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 9: Physiography",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 10: Climate, Vegetation & Soil",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 11: Population",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 12: Agriculture",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 13: Irrigation and Power",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 14: Minerals & Energy Resources",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 15: Industries",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 16: Trade & Transport",
                  subchapters: [],
              },
              {
                  chapter: "Chapter 17: Geography of Telangana",
                  subchapters: [],
              }
          ]
      }
  },
  };

  //   const handleChapterSelection = (event) => {
  //     const selectedChapter = event.target.value;
  //     onChapterChange(selectedChapter);
  //   };

  //   return (
  //     <div className="flex items-center mb-4 w-full">
  //       <label className="font-semibold text-sm text-gray-600 mr-4 w-32 text-right">
  //         Chapters:
  //       </label>
  //       <select
  //         className="flex-1 px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
  //         onChange={handleChapterSelection}
  //       >
  //         {chaptersData[state] &&
  //         chaptersData[state][clas] &&
  //         chaptersData[state][clas][subject] ? (
  //           chaptersData[state][clas][subject].map((chapter, index) => (
  //             <option key={index} value={chapter}>
  //               {chapter}
  //             </option>
  //           ))
  //         ) : (
  //           <option>No chapters available</option>
  //         )}
  //       </select>
  //     </div>
  //   );
  // };

  // export default Chapter;

  const [selectedChapter, setSelectedChapter] = useState("");
  const [selectedSubchapter, setSelectedSubchapter] = useState("");

  const handleChapterSelection = (event) => {
    const chapter = event.target.value;
    setSelectedChapter(chapter);
    setSelectedSubchapter("");
    onChapterChange(chapter);
  };

  const handleSubchapterSelection = (event) => {
    const subchapter = event.target.value;
    setSelectedSubchapter(subchapter);
  }; 

  const selectedChapters = chaptersData[state]?.[clas]?.[subject] || [];

  const chapterObject = selectedChapters.find(
    (chapter) => chapter.chapter === selectedChapter
  );

  return (
    <div className="flex flex-col mb-4 w-full ">
    <div className="flex flex-row items-center w-full space-x-2.5 ">
      <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
        Chapters:
      </label>
      <select
        className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
        onChange={handleChapterSelection}
      >
        {selectedChapters.length > 0 ? (
          selectedChapters.map((chapter, index) => (
            <option key={index} value={chapter.chapter}>
              {chapter.chapter}
            </option>
          ))
        ) : (
          <option>No chapters available</option>
        )}
      </select>
    </div>
  
    {/* Subchapter Dropdown */}
    {chapterObject && chapterObject.subchapters.length > 0 && (
    <div className="flex flex-row items-center w-full mt-4 space-x-2.5">
    <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
      Subchapters:
    </label>
    <select
      className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
      onChange={handleSubchapterSelection}
      value={selectedSubchapter}
    >
      <option value="">Select a subchapter</option>
      {chapterObject.subchapters.map((subchapter, index) => (
        <option key={index} value={subchapter}>
          {subchapter}
        </option>
      ))}
    </select>
  </div>
  
    )}
  </div>
  
  );
};

export default Chapter;
