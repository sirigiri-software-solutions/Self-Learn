// import React, { useState } from "react";

// const Chapter = ({ state, clas, subject, onChapterChange }) => {
//   const chaptersData = {
//     "Andhra Pradesh": {
//       6: {
//         Telugu_Sem_1: [
//           {
//             chapter: "పాఠం 1: మనకు అవసరమైన ఆహారం",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 2: మొక్కల గురించి తెలుసుకోవడం",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 3: జంతువులు మరియు వారి ఆహారం",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 4: జీవులు మరియు వారి నివాసాలు",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 5: కదలికలు మరియు నడక",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 6: నీరు",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 7: పదార్థాలు",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 8: వస్త్రాలు ఎలా తయారు అవుతాయి",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 9: కాంతితో ఆటలు",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 10: కొలతలు నేర్చుకుందాం",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 11: ప్రాథమిక విద్యుత్ వలయాలు",
//             subchapters: [],
//           },
//           {
//             chapter: "పాఠం 12: నీడలు – చిత్రాలు",
//             subchapters: [],
//           },
//         ],
//         Hindi: [
//           {
//             chapter: "पाठ 1: वह चिड़िया जो",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 2: बचपन",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 3: नादान दोस्त",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 4: चाँद से थोड़ी सी गप्पें",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 5: अक्षरों का महत्व",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 6: पार नज़र के",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 7: साथी हाथ बढ़ाना",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 8: ऐसे ऐसे",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 9: टिकट अलबम",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 10: झांसी की रानी",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 11: जो देखकर भी नहीं देखते",
//             subchapters: [],
//           },
//           {
//             chapter: "पाठ 12: संसार पुस्तक है",
//             subchapters: [],
//           },
//         ],
//         English: [
//           {
//             chapter: "Chapter 1: The Best Christmas Present in the World",
//             subchapters: ["The Ant and the Cricket"],
//           },
//           {
//             chapter: "Chapter 2: The Tsunami",
//             subchapters: ["Geography Lesson"],
//           },
//           {
//             chapter: "Chapter 3: Glimpses of the Past",
//             subchapters: [
//               "Macavity: The Mystery Cat",
//               "NOTES FOR THE TEACHER (UNITS 4-7)",
//             ],
//           },
//           {
//             chapter: "Chapter 4: Bepin Choudhury’s Lapse of Memory",
//             subchapters: ["The Last Bargain"],
//           },
//           {
//             chapter: "Chapter 5: The Summit Within",
//             subchapters: ["The School Boy"],
//           },
//           {
//             chapter: "Chapter 6: This is Jody’s Fawn",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: A Visit to Cambridge",
//             subchapters: [
//               "When I set out for Lyonnesse",
//               "NOTES FOR THE TEACHER (UNITS 8-10)",
//             ],
//           },
//           {
//             chapter: "Chapter 8: A Short Monsoon Diary",
//             subchapters: ["On the Grasshopper and Cricket"],
//           },
//           {
//             chapter: "Chapter 9: The Great Stone Face–I",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: The Great Stone Face–II",
//             subchapters: [],
//           },
//         ],
//         Mathematics: [
//           {
//             chapter: "Chapter 1: Numbers All Around Us",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Whole Numbers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: H.C.F. and L.C.M.",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Integers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Fractions and Decimals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Basic Arithmetic",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Introduction to Algebra",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Basic Geometric Concepts",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: 2D – 3D Shapes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Practical Geometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Perimeter and Area",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Data Handling",
//             subchapters: [],
//           },
//         ],
//         Science: [
//           {
//             chapter: "Chapter 1: The Food We Need",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Knowing about Plants",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Animals and Their Food",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Organisms and Habitat",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Movement and Locomotion",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Water",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Materials",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: How Fabrics are Made",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Fun with Magnets",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Let Us Measure",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Basic Electric Circuits",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Shadows – Images",
//             subchapters: [],
//           },
//         ],
//         Social: [
//           {
//             chapter: "Chapter 1: Indian History",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Geography",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Civics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Economics",
//             subchapters: [],
//           },
//         ],
//       },

//       7: {
//         Telugu_Sem_1: [
//           {
//             chapter: "Chapter 1: Grammar",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Prose",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Poetry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Short Stories",
//             subchapters: [],
//           },
//         ],
//         English: [
//           {
//             chapter: "Chapter 1: Vocabulary Building",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Grammar",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Literature",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Essay Writing",
//             subchapters: [],
//           },
//         ],
//         Mathematics: [
//           {
//             chapter: "Chapter 1: Decimals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Algebraic Expressions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Ratios and Proportions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Geometry",
//             subchapters: [],
//           },
//         ],
//         Science: [
//           {
//             chapter: "Chapter 1: Cells",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Ecosystems",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Electricity",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: The Solar System",
//             subchapters: [],
//           },
//         ],
//         Social: [
//           {
//             chapter: "Chapter 1: Ancient Civilizations",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Indian Independence",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: World Wars",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Government Structures",
//             subchapters: [],
//           },
//         ],
//       },

//       8: {
//         Telugu_Sem_1: [
//           {
//             chapter: "Chapter 1: Andhra Vaibhavam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Maatrubhoomi",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Shataka Sourabham",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Na Yatra",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Sandesham",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Payanam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Chaitanyamurthulu",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Telugu Literature",
//             subchapters: [
//               "Subchapter 1: Pothuluri Veerabrahmam",
//               "Subchapter 2: Nedunuri Gangadharam",
//               "Subchapter 3: Paddadi Papayya",
//               "Subchapter 4: Fatima Sheikh",
//               "Subchapter 5: Ragati Pandari",
//               "Subchapter 6: Tadinagamma",
//             ],
//           },
//           {
//             chapter: "Chapter 9: Melimalupu",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Chirumaalinyam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Naati Chaduvu",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Samadrashty",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Bhuvanavijayam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Aatithyam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 15: Kala Varasatvam",
//             subchapters: [],
//           },
//         ],
//         Hindi: [
//           {
//             chapter: "Chapter 1: सुबह (Subah)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Hindi Literature",
//             subchapters: ["Subchapter: बेटी (Beti) - (पठन हेतु) (Pathan hetu)"],
//           },
//           {
//             chapter: "Chapter 3: तेनालीराम की चतुराई (Tenaliram ki Chaturai)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: श्रीहरिकोटा (Sriharikota)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Hindi Literature",
//             subchapters: [
//               "Subchapter: मैं कौन? (Main Kaun?) - (पठन हेतु) (Pathan hetu)",
//             ],
//           },
//           {
//             chapter: "Chapter 6: गीत (Geet)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Hindi Literature",
//             subchapters: [
//               "Subchapter: कागज की थैली (Kagaz ki Thaili) - (पठन हेतु) (Pathan hetu)",
//             ],
//           },
//           {
//             chapter: "Chapter 8: कूड़ेदान (Koodedaan)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Hindi Literature",
//             subchapters: [
//               "Subchapter: जरा मुरकराइए (Zara Murkaraiye) - (पठन हेतु) (Pathan hetu)",
//             ],
//           },
//           {
//             chapter: "Chapter 10: मित्र को प (Mitra ko p)",
//             subchapters: [],
//           },
//         ],
//         English: [
//           {
//             chapter: "Chapter 1: The Best Christmas Present in the World",
//             subchapters: ["The Ant and the Cricket"],
//           },
//           {
//             chapter: "Chapter 2: The Tsunami",
//             subchapters: ["Geography Lesson"],
//           },
//           {
//             chapter: "Chapter 3: Glimpses of the Past",
//             subchapters: [
//               "Macavity: The Mystery Cat",
//               "NOTES FOR THE TEACHER (UNITS 4-7)",
//             ],
//           },
//           {
//             chapter: "Chapter 4: Bepin Choudhury’s Lapse of Memory",
//             subchapters: ["The Last Bargain"],
//           },
//           {
//             chapter: "Chapter 5: The Summit Within",
//             subchapters: ["The School Boy"],
//           },
//           {
//             chapter: "Chapter 6: This is Jody’s Fawn",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: A Visit to Cambridge",
//             subchapters: [
//               "When I set out for Lyonnesse",
//               "NOTES FOR THE TEACHER (UNITS 8-10)",
//             ],
//           },
//           {
//             chapter: "Chapter 8: A Short Monsoon Diary",
//             subchapters: ["On the Grasshopper and Cricket"],
//           },
//           {
//             chapter: "Chapter 9: The Great Stone Face–I",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: The Great Stone Face–II",
//             subchapters: [],
//           },
//         ],
//         English_Supplementary: [
//           {
//             chapter: "Chapter 1: How the Camel got his hump",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Children at work",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: The Selfish Giant",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: The treasure within",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Princess September",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: The fight",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: The open window",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Jalebis",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: The comet — I",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: The comet — II",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Ancient Education System of India",
//             subchapters: [],
//           },
//         ],
//         Math_SEM1: [
//           {
//             chapter: "Chapter 1: Rational Numbers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Linear Equations in One Variable",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Understanding Quadrilaterals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Practical Geometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Data Handling",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Squares and Square Roots",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Cubes and Cube Roots",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Comparing Quantities",
//             subchapters: [],
//           },
//         ],
//         Math_SEM2: [
//           {
//             chapter: "Chapter 9: Algebraic Expressions and Identities",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Visualising Shapes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Mensuration",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Exponents and Powers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Direct and Indirect Proportions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Factorization",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 15: Introduction to Graphs",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 16: Playing with Numbers",
//             subchapters: [],
//           },
//         ],
//         Physics_SEM1: [
//           {
//             chapter: "Chapter 1: Force and Pressure",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Friction",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Coal and Petroleum",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Synthetic Fibres and Plastics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Sound",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Materials: Metals and Non-Metals",
//             subchapters: [],
//           },
//         ],
//         Physics_SEM2: [
//           {
//             chapter: "Chapter 5: REACHING THE AGE OF ADOLESCENCE",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: CONSERVATION OF PLANTS AND ANIMALS",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: POLLUTION OF AIR AND WATER",
//             subchapters: [],
//           },
//         ],
//         Biology_Sem1: [
//           {
//             chapter: "Chapter 1: CELL – STRUCTURE AND FUNCTIONS",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: MICROORGANISMS: FRIEND AND FOE",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: CROP PRODUCTION AND MANAGEMENT",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: REPRODUCTION IN ANIMALS",
//             subchapters: [],
//           },
//           {
//             chapter: "GLOSSARY",
//             subchapters: [],
//           },
//         ],
//         Biology_Sem2: [
//           {
//             chapter: "Chapter 5: REACHING THE AGE OF ADOLESCENCE",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: CONSERVATION OF PLANTS AND ANIMALS",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: POLLUTION OF AIR AND WATER",
//             subchapters: [],
//           },
//           {
//             chapter: "GLOSSARY",
//             subchapters: [],
//           },
//         ],
//         Social_Geography_Sem_1: [
//           {
//             chapter: "Chapter 1: Resources",
//             subchapters: [],
//           },
//           {
//             chapter:
//               "Chapter 2: Land, Soil, Water, Natural Vegetation and Wildlife Resources",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Mineral and Power Resources",
//             subchapters: [],
//           },
//         ],
//         Social_Geography_Sem_2: [
//           {
//             chapter: "Chapter 4: Agriculture",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Industries",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Human Resources",
//             subchapters: [],
//           },
//         ],
//         Social_History_sem_1: [
//           {
//             chapter: "Chapter 1: How, When and Where",
//             subchapters: [],
//           },
//           {
//             chapter:
//               "Chapter 2: From Trade to Territory The Company Establishes Power",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Ruling the Countryside",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Tribals, Dikus and the Vision of a Golden Age",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: When People Rebel 1857 and After",
//             subchapters: [],
//           },
//         ],
//         Social_History_sem_2: [
//           {
//             chapter: "Chapter 6: Weavers, Iron Smelters and Factory Owners",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Civilising the “Native”, Educating the Nation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Women, Caste and Reform",
//             subchapters: [],
//           },
//           {
//             chapter:
//               "Chapter 9: The Making of the National Movement: 1870s--1947",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: India After Independence",
//             subchapters: [],
//           },
//         ],
//         Social_Politics_sem_1: [
//           {
//             title: "Unit One: The Indian Constitution and Secularism",
//             chapters: [
//               {
//                 chapter: "Chapter 1: The Indian Constitution",
//                 subchapters: [],
//               },
//               {
//                 chapter: "Chapter 2: Understanding Secularism",
//                 subchapters: [],
//               },
//             ],
//           },
//           {
//             title: "Unit Two: Parliament and The Making of Laws",
//             chapters: [
//               {
//                 chapter: "Chapter 3: Why do we need a Parliament?",
//                 subchapters: [],
//               },
//               {
//                 chapter: "Chapter 4: Understanding Laws",
//                 subchapters: [],
//               },
//             ],
//           },
//           {
//             title: "Unit Three: The Judiciary",
//             chapters: [
//               {
//                 chapter: "Chapter 5: Judiciary",
//                 subchapters: [],
//               },
//             ],
//           },
//         ],
//         Social_Politics_sem_2: [
//           {
//             chapter: "Chapter 6: Understanding Our Criminal Justice System",
//             subchapters: [],
//           },
//           {
//             title: "Unit Four: Social Justice and The Marginalised",
//             chapters: [
//               {
//                 chapter: "Chapter 7: Understanding Marginalisation",
//                 subchapters: [],
//               },
//               {
//                 chapter: "Chapter 8: Confronting Marginalisation",
//                 subchapters: [],
//               },
//             ],
//           },
//           {
//             title: "Unit Five: Economic Presence of the Government",
//             chapters: [
//               {
//                 chapter: "Chapter 9: Public Facilities",
//                 subchapters: [],
//               },
//               {
//                 chapter: "Chapter 10: Law and Social Justice",
//                 subchapters: [],
//               },
//             ],
//           },
//         ],
//       },

//       9: {
//         Telugu_Sem_1: [
//           {
//             chapter: "Chapter 1: ధర్మబోధ (Dharma Bodha)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: చైతన్యం (Chaitanyam)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: హరివిల్లు (Harivillu)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: ఆత్మకథ (Atmakatha)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: స్నేహం (Sneham)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: తీర్పు (Teerpu)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: మాటమహిమ (Matamahima)",
//             subchapters: [],
//           },
//         ],
//         Telugu_Sem_2: [
//           {
//             chapter: "Chapter 1: ఇల్లలకగానే (Illalaka Gane)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: రంగస్థలం (Rangasthalam)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: ప్రియమైన నాన్నకు (Priyamaina Nannaku)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: ఆశావాది (Ashaavaadi)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: ఏ దేశమేగినా (E Desamegina)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: నా చదువు (Naa Chaduvu)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: ఆకుపచ్చశోకం (Aakupaccha Shokam)",
//             subchapters: [],
//           },
//         ],
//         English: [
//           {
//             chapter: "Chapter 1: Grammar",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Comprehension",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Speech Writing",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Novels",
//             subchapters: [],
//           },
//         ],
//         Math_SEM1: [
//           {
//             chapter: "Chapter 1: Number System",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Polynomials",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Co-ordinate Geometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Linear Equations in Two Variables",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Introduction to Euclid's Geometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Lines and Angles",
//             subchapters: [],
//           },
//         ],
//         Math_SEM2: [
//           {
//             chapter: "Chapter 7: Triangles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Quadrilaterals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Circles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Heron’s Formula",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Surface Areas and Volumes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Statistics",
//             subchapters: [],
//           },
//         ],
//         Physics_SEM1: [
//           {
//             chapter: "Chapter 1: Matter in Our Surroundings",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Is Matter Around Us Pure?",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Atoms and Mole culs",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Structure of the Atom",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Note: Chapters 5 & 6 in Biological Science",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Motion",
//             subchapters: [],
//           },
//         ],
//         Physics_SEM2: [
//           {
//             chapter: "Chapter 8: Force and Laws of Motion",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Gravitation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Work and Energy",
//             subchapters: [],
//           },
//         ],
//         Biology_Sem1: [
//           {
//             chapter: "Chapter 5: The Fundamental Unit of Life",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Tissues",
//             subchapters: [],
//           },
//         ],
//         Biology_Sem2: [
//           {
//             chapter:
//               "Note: Chapters 7, 8, 9, 10, and 11 are related to Physical Science",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Improvement in Food Resources",
//             subchapters: [],
//           },
//         ],
//         Social_Politics: [
//           {
//             chapter: "Chapter 1: What is Democracy? Why Democracy?",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Constitutional Design",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Electoral Politics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Working of Institutions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Democratic Rights",
//             subchapters: [],
//           },
//         ],
//         Social_Geography: [
//           {
//             chapter: "Chapter 1: India – Size and Location",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Physical Features of India",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Drainage",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Climate",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Natural Vegetation and Wildlife",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Population",
//             subchapters: [],
//           },
//           {
//             chapter: "Glossary",
//             subchapters: [],
//           },
//         ],
//         Social_Economics: [
//           {
//             chapter: "Chapter 1: The Story of Village Palampur",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: People as Resource",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Poverty as a Challenge",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Food Security in India",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Natural Vegetation and Wildlife",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Population",
//             subchapters: [],
//           },
//           {
//             chapter: "Glossary",
//             subchapters: [],
//           },
//         ],
//         Social_History: [
//           {
//             chapter: "Section I: Events and Processes",
//             subchapters: [
//               "Chapter 1: The French Revolution",
//               "Chapter 2: Socialism in Europe and the Russian Revolution",
//               "Chapter 3: Nazism and the Rise of Hitler",
//             ],
//           },
//           {
//             chapter: "Section II: Livelihoods, Economies and Societies",
//             subchapters: [
//               "Chapter 4: Forest Society and Colonialism",
//               "Chapter 5: Pastoralists in the Modern World",
//             ],
//           },
//         ],
//       },

//       10: {
//         Telugu: [
//           {
//             chapter: "Chapter 1: Classical Literature",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Poetry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Essays",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Drama",
//             subchapters: [],
//           },
//         ],
//         English: [
//           {
//             chapter: "Chapter 1: Grammar",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Comprehension",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Poetry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Fiction",
//             subchapters: [],
//           },
//         ],
//         Math_SEM1: [
//           {
//             chapter: "Chapter 1: Real Numbers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Polynomials",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Pair of Linear Equations in Two Variables",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Quadratic Equations",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Arithmetic Progressions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Triangles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Coordinate Geometry",
//             subchapters: [],
//           },
//         ],
//         Math_SEM2: [
//           {
//             chapter: "Chapter 8: Introduction to Trigonometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Some Applications of Trigonometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Circles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Areas Related to Circles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Surface Areas and Volumes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Statistics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Probability",
//             subchapters: [],
//           },
//         ],
//         Physics: [
//           {
//             chapter: "Chapter 1: Chemical Reactions and Equations",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Acids, Bases and Salts",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Metals and Non-metals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Carbon and its Compounds",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Light – Reflection and Refraction",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: The Human Eye and the Colourful World",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Electricity",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Magnetic Effects of Electric Current",
//             subchapters: [],
//           },
//         ],
//         Biology: [
//           {
//             chapter: "Chapter 5: Life Processes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Control and Coordination",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: How do Organisms Reproduce?",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Heredity",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Our Environment",
//             subchapters: [],
//           },
//         ],
//         Social_Geography: [
//           {
//             chapter: "Chapter 1: Resources and Development",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Forest and Wildlife Resources",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Water Resources",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Agriculture",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Minerals and Energy Resources",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Manufacturing Industries",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Lifelines of National Economy",
//             subchapters: [],
//           },
//         ],
//         Social_History: [
//           {
//             chapter: "Section I: Events and Processes",
//             subchapters: [
//               "Chapter 1: The Rise of Nationalism in Europe",
//               "Chapter 2: Nationalism in India",
//             ],
//           },
//           {
//             chapter: "Section II: Livelihoods, Economies and Societies",
//             subchapters: [
//               "Chapter 3: The Making of a Global World",
//               "Chapter 4: The Age of Industrialisation",
//             ],
//           },
//           {
//             chapter: "Section III: Everyday Life, Culture and Politics",
//             subchapters: ["Chapter 5: Print Culture and the Modern World"],
//           },
//         ],
//         Social_Economics: [
//           {
//             chapter: "Chapter 1: DEVELOPMENT",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: SECTORS OF THE INDIAN ECONOMY",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: MONEY AND CREDIT",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: GLOBALISATION AND THE INDIAN ECONOMY",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: CONSUMER RIGHTS",
//             subchapters: [],
//           },
//         ],
//         Social_Politics: [
//           {
//             chapter: "Chapter 1: Power-sharing",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Federalism",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Gender, Religion and Caste",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Political Parties",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Outcomes of Democracy",
//             subchapters: [],
//           },
//         ],
//       },

//       Inter_FIRST_YEAR: {
//         MATHEMATICS_I_A: [
//           {
//             chapter: "Chapter 1: Functions",
//             subchapters: [
//               "1.0: Ordered Pairs",
//               "1.1: Types of Function-Definitions",
//               "1.2: Inverse Functions and Theorems",
//               "1.3: Real valued functions (Domain, Range and Inverse)",
//             ],
//           },
//           {
//             chapter: "Chapter 2: Mathematical Induction",
//             subchapters: [
//               "2.1: Principles of Mathematical Induction and Theorems",
//               "2.2: Applications of Mathematical Induction",
//               "2.3: Problems on divisibility",
//             ],
//           },
//           {
//             chapter: "Chapter 3: Matrices",
//             subchapters: [
//               "3.1: Types of Matrices",
//               "3.2: Scalar multiple of a matrix and multiplication of matrices",
//               "3.3: Transpose of a matrix",
//               "3.4: Determinants",
//               "3.5: Adjoint and Inverse of a Matrix",
//               "3.6: Consistency and Inconsistency of system of Simultaneous Equations",
//               "3.7: Solution of Simultaneous Linear Equations",
//             ],
//           },
//           {
//             chapter: "Chapter 4: Addition of Vectors",
//             subchapters: [
//               "4.1: Vectors as a triad of real numbers, some basic concepts",
//               "4.2: Classification (Types) of Vectors",
//               "4.3: Sum (Addition) of Vectors",
//               "4.4: Scalar Multiplication of a vector",
//               "4.5: Angle between two non-zero vectors",
//               "4.6: Linear Combination of Vectors",
//               "4.7: Components of a vector in Three Dimensions",
//               "4.8: Vector Equations of Line and Plane",
//             ],
//           },
//           {
//             chapter: "Chapter 5: Product of Vectors",
//             subchapters: [
//               "5.1: Scalar or dot product of two vectors - Geometrical interpretation Orthogonal Projections",
//               "5.2: Properties of dot product",
//               "5.3: Expression for Scalar(dot) product, Angle between two vectors",
//               "5.4: Geometrical Vector methods",
//               "5.5: Vector equation of a plane – normal form",
//               "5.6: Angle between two planes",
//               "5.7: Vector product (cross product) of two vectors and properties",
//               "5.8: Vector product in (i,j,k) system",
//               "5.9: Vector Areas",
//               "5.10: Scalar triple product",
//               "5.11: Vector equation of a plane - different forms, skew lines, shortest distance-plane, condition for coplanarity etc.",
//               "5.12: Vector triple product - results",
//               "5.13: Solved Problems",
//             ],
//           },
//           {
//             chapter: "Chapter 6: Trigonometric Ratios up to Transformations",
//             subchapters: [
//               "6.1: Trigonometric ratios – variation – Graphs and periodicity",
//               "6.2: Trigonometric ratios of compound angles",
//               "6.3: Trigonometric ratios of multiple and sub-multiple angles",
//               "6.4: Sum and product transformation",
//             ],
//           },
//           {
//             chapter: "Chapter 7: Trigonometric Equations",
//             subchapters: [
//               "7.1: General solutions of trigonometric equations",
//               "7.2: Simple trigonometric equations - solutions",
//             ],
//           },
//           {
//             chapter: "Chapter 8: Inverse Trigonometric Functions",
//             subchapters: [
//               "8.1: To reduce a trigonometric function into a bijective function",
//               "8.2: Graphs of Inverse trigonometric functions",
//               "8.3: Properties of inverse trigonometric functions",
//             ],
//           },
//           {
//             chapter: "Chapter 9: Hyperbolic Functions",
//             subchapters: [
//               "9.1: Definitions of Hyperbolic Functions, graphs",
//               "9.2: Definitions of inverse Hyperbolic Functions and graphs",
//               "9.3: Additions formula of Hyperbolic Functions",
//             ],
//           },
//           {
//             chapter: "Chapter 10: Complex Numbers",
//             subchapters: [
//               "10.1: Algebra of Complex Numbers",
//               "10.2: Geometrical representation of complex numbers",
//               "10.3: Modulus and Argument of a complex number",
//               "10.4: De-Moivre’s theorem and its applications",
//               "10.5: Roots of a complex number",
//               "10.6: Geometrical interpretation of multiplication and division of complex numbers",
//               "10.7: Solved Problems",
//             ],
//           },
//           {
//             chapter: "Chapter 11: Quadratic Expressions",
//             subchapters: [
//               "11.1: Quadratic equations",
//               "11.2: Quadratic expressions",
//               "11.3: Quadratic inequalities",
//             ],
//           },
//           {
//             chapter: "Chapter 12: Permutations and Combinations",
//             subchapters: [
//               "12.1: Fundamental principles of counting",
//               "12.2: Permutations",
//               "12.3: Combinations",
//               "12.4: Properties of combinations",
//               "12.5: Solved Problems",
//             ],
//           },
//           {
//             chapter: "Chapter 13: Binomial Theorem",
//             subchapters: [
//               "13.1: Binomial theorem for positive integral index",
//               "13.2: General term in the expansion of (a+b)n",
//               "13.3: Properties of binomial coefficients",
//               "13.4: Binomial theorem for any index",
//               "13.5: Solved Problems",
//             ],
//           },
//           {
//             chapter: "Chapter 14: Exponential and Logarithmic Series",
//             subchapters: [
//               "14.1: Exponential series",
//               "14.2: Logarithmic series",
//               "14.3: Logarithmic series for any base",
//               "14.4: Solved Problems",
//             ],
//           },
//           {
//             chapter: "Chapter 15: Mathematical Logic",
//             subchapters: [
//               "15.1: Statements and propositions",
//               "15.2: Truth value of a statement",
//               "15.3: Logical operations",
//               "15.4: Truth tables",
//               "15.5: Tautologies and contradictions",
//               "15.6: Logical equivalence",
//               "15.7: Solved Problems",
//             ],
//           },
//           {
//             chapter: "Chapter 16: Group Theory",
//             subchapters: [
//               "16.1: Groups",
//               "16.2: Subgroups",
//               "16.3: Cyclic groups",
//               "16.4: Permutation groups",
//               "16.5: Solved Problems",
//             ],
//           },
//         ],
//         MATHEMATICS_I_B: [
//           {
//             chapter: "Chapter 1: Locus",
//             subchapters: [
//               "1.1: Definition of Locus - Illustrations",
//               "1.2: Equation of Locus - Problems connected to it",
//             ],
//           },
//           {
//             chapter: "Chapter 2: Transformation of Axes",
//             subchapters: [
//               "2.1: Transformation of axes - Rules, derivations and illustrations",
//               "2.2: Rotation of axes - Derivations - Illustrations",
//             ],
//           },
//           {
//             chapter: "Chapter 3: Straight Lines",
//             subchapters: [
//               "3.1: Slope of a line",
//               "3.2: Angle between two lines",
//               "3.3: Straight line-Symmetric form",
//               "3.4: Straight line-Reduction into various forms",
//               "3.5: Intersection of two straight lines",
//               "3.6: Family of straight lines-Concurrent lines",
//               "3.7: Condition for Concurrent lines",
//               "3.8 : Length of the perpendicular from a point to a line",
//               "3.9: Distance between two parallel lines",
//               "3.10: Concurrent lines - Properties related to a triangle",
//             ],
//           },
//           {
//             chapter: "Chapter 4: Pair of Straight Lines",
//             subchapters: [
//               "4.1: Equations of a pair of lines passing through the origin",
//               "4.2: Angle between a pair of lines",
//               "4.3: Condition for perpendicular and coincident lines, bisectors of angles",
//               "4.4: Pair of bisectors of angles",
//               "4.5: Pair of lines - Second degree general equation",
//               "4.6: Conditions for parallel lines - Distance between them, Point of intersection of pair of lines",
//               "4.7: Homogenising a second degree equation with a first degree equation in x and y",
//             ],
//           },
//           {
//             chapter: "Chapter 5: Three Dimensional Coordinates",
//             subchapters: [
//               "5.1: Coordinates",
//               "5.2: Section formula",
//               "5.3: Solved Problems",
//             ],
//           },
//           {
//             chapter: "Chapter 6: Direction Cosines and Direction Ratios",
//             subchapters: ["6.1: Direction cosines", "6.2: Direction ratios"],
//           },
//           {
//             chapter: "Chapter 7: The Plane",
//             subchapters: [
//               "7.1: Cartesian equation of a plane - Simple illustrations",
//             ],
//           },
//           {
//             chapter: "Chapter 8: Limits and Continuity",
//             subchapters: [
//               "8.1: Intervals and neighbourhoods",
//               "8.2: Limits",
//               "8.3: Standard limits",
//               "8.4: Continuity",
//             ],
//           },
//           {
//             chapter: "Chapter 9: Differentiation",
//             subchapters: [
//               "9.1: Derivative of a function",
//               "9.2: Elementary properties",
//               "9.3: Trigonometric, Inverse Trigonometric, Hyperbolic, Inverse Hyperbolic Functions - Derivatives",
//               "9.4: Methods of differentiation",
//               "9.5: Second Order Derivatives",
//             ],
//           },
//           {
//             chapter: "Chapter 10: Applications of Derivatives",
//             subchapters: [
//               "10.1: Errors and approximations",
//               "10.2: Geometrical interpretation of the derivative",
//               "10.3: Equations of tangent and normal to a curve",
//               "10.4: Lengths of tangent, normal, subtangent and subnormal",
//               "10.5: Angle between two curves and condition for orthogonality of curves",
//               "10.6: Derivatives as a rate of change",
//               "10.7: Rolle’s Theorem and Lagrange’s Mean Valve Theorem",
//               "10.8: Increasing and Decreasing functions",
//               "10.9: Maxima and Minima",
//             ],
//           },
//         ],
//         PHYSICS_I: [
//           {
//             chapter: "Chapter 1: Physical World",
//             subchapters: [
//               "1.1: What is Physics?",
//               "1.2: Scope and excitement of Physics",
//               "1.3: Physics, technology and Society",
//               "1.4: Fundamental forces in nature",
//               "1.5: Nature of Physical Laws",
//             ],
//           },
//           {
//             chapter: "Chapter 2: Units and Measurements",
//             subchapters: [
//               "2.1: Introduction",
//               "2.2: The International System of Units",
//               "2.3: Measurement of Length",
//               "2.4: Measurement of Mass",
//               "2.5: Measurement of Time",
//               "2.6: Accuracy, precision of instruments and errors in Measurement",
//               "2.7: Significant Figures",
//               "2.8: Dimensions of Physical Quantities",
//               "2.9: Dimensional Formulae and dimensional equations",
//               "2.10: Dimensional Analysis and Its Applications",
//             ],
//           },
//           {
//             chapter: "Chapter 3: Motion in a Straight Line",
//             subchapters: [
//               "3.1: Introduction",
//               "3.2: Position, Path Length and Displacement",
//               "3.3: Average Velocity and Speed",
//               "3.4: Instantaneous Velocity and Speed",
//               "3.5: Acceleration",
//               "3.6: Kinematic equations for uniformly accelerated motion",
//               "3.7: Relative velocity",
//             ],
//           },
//           {
//             chapter: "Chapter 4: Motion in a Plane",
//             subchapters: [
//               "4.1: Introduction",
//               "4.2: Scalars and Vectors",
//               " 4.3: Multiplication of Vectors by real numbers",
//               "4.4: Addition and Subtraction of Vectors - graphical method",
//               "4.5: Resolution of Vectors",
//               "4.6: Vector addition – analytical method",
//               "4.7: Motion in a plane",
//               "4.8: Motion in a plane with constant acceleration",
//               "4.9: Relative velocity in two dimensions",
//               "4.10: Projectile Motion",
//               "4.11: Uniform circular motion",
//             ],
//           },
//           {
//             chapter: "Chapter 5: Laws of Motion",
//             subchapters: [
//               "5.1: Introduction",
//               "5.2: Aristotle’s Inertia",
//               "5.3: The Law of Inertia",
//               "5.4: Newton’s first law of Motion",
//               "5.5: Newton’s Second law of Motion",
//               "5.6: Newton’s Third law of Motion",
//               "5.7: Conservation of momentum",
//               "5.8: Equilibrium of a particle",
//               "5.9: Common Forces in Mechanics",
//               "5.10: Circular Motion",
//               "5.11: Solving problems in Mechanics",
//             ],
//           },
//           {
//             chapter: "Chapter 6: Work, Energy and Power",
//             subchapters: [
//               "6.1: Introduction",
//               "6.2: Notions of Work and Kinetic Energy : The work-energy theorem",
//               "6.3: Work",
//               "6.4: Kinetic energy",
//               "6.5: Work done by a variable force",
//               "6.6: The work-energy theorem for a variable force",
//               "6.7: The concept of Potential Energy",
//               "6.8: The conservation of Mechanical Energy",
//               "6.9: The Potential Energy of a spring",
//               "6.10: Various forms of energy : the law of conservation of Energy",
//               "6.11: Power",
//               "6.12: Collisions",
//             ],
//           },
//           {
//             chapter: "Chapter 7: System of Particles and Rotational Motion",
//             subchapters: [
//               "7.1: Introduction",
//               "7.2: Centre of Mass",
//               "7.3: Motion of Centre of Mass",
//               "7.4: Linear Momentum of a System of particles",
//               "7.5: Vector product of Two Vectors",
//               "7.6: Angular Velocity and its relation with linear velocity",
//               "7.7: Torque and Angular Momentum",
//               "7.8: Equilibrium of a Rigid Body",
//               "7.9: Moment of Inertia",
//               "7.10: Theorems of perpendicular and parallel Axis",
//               "7.11: Dynamics of Rotational Motion about a Fixed Axis",
//               "7.12: Angular momentum",
//             ],
//           },
//           {
//             chapter: "Chapter 8: Oscillations",
//             subchapters: [
//               "8.1: Introduction",
//               "8.2: Periodic and Oscillatory Motions",
//               "8.3: Simple Harmonic Motion (SHM)",
//               "8.4: Simple Harmonic Motion and Uniform Circular Motion",
//               "8.5: Velocity and Acceleration in Simple Harmonic Motion",
//               "8.6: Force Law for Simple Harmonic Motion",
//               "8.7: Energy in Simple Harmonic Motion",
//               "8.8: Some systems executing Simple Harmonic Motion",
//               "8.9: Damped Simple Harmonic Motion",
//               "8.10: Forced Oscillations and Resonance",
//             ],
//           },
//           {
//             chapter: "Chapter 9: Gravitation",
//             subchapters: [
//               "9.1: Introduction",
//               "9.2: Kepler’s Law",
//               "9.3: Universal Law of Gravitation",
//               "9.4: The Gravitational Constant",
//               "9.5: Acceleration due to Gravity of the Earth",
//               "9.6: Acceleration due to gravity below and above the surface of Earth",
//               "9.7: Gravitational Potential Energy",
//               "9.8: Escape Speed",
//               "9.9: Earth Satellite",
//               "9.10: Energy of an orbiting satellite",
//               "9.11: Geostationary and Polar satellites",
//               "9.12: Weightlessness",
//             ],
//           },
//           {
//             chapter: "Chapter 10: Mechanical Properties of Solids",
//             subchapters: [
//               "10.1: Introduction",
//               "10.2: Elastic behavior of Solids",
//               "10.3: Stress and Strain",
//               "10.4: Hooke’s Law",
//               "10.5: Stress-strain curve",
//               "10.6: Elastic Module",
//               "10.7: Applications of Elastic Behavior of Materials",
//               "10.8: Pressure",
//               "10.9: Viscosity",
//               "10.10: Surface tension",
//               "10.11: Surface Energy",
//               "10.12: Angle of Contact and Capillary Action",
//             ],
//           },
//           {
//             chapter: "Chapter 11: Mechanical Properties of Fluids",
//             subchapters: [
//               "11.1: Introduction",
//               "11.2: Pressure",
//               "11.3: Streamline flow",
//               "11.4: Bernoulli’s principle",
//               "11.5: Viscosity",
//               "11.6: Surface tension",
//               "11.7: Surface Energy",
//               "11.8: Angle of Contact and Capillary Action",
//             ],
//           },
//           {
//             chapter: "Chapter 12: Thermal Properties of Matter",
//             subchapters: [
//               "12.1: Introduction",
//               "12.2: Temperature and Heat",
//               "12.3: Measurement of Temperature",
//               "12.4: Ideal-gas Equation and Absolute Temperature",
//               "12.5: Thermal Expansion",
//               "12.6: Specific heat capacity",
//               "12.7: Calorimetry",
//               "12.8: Change of State",
//               "12.9: Regelation",
//               "12.10: Heat Transfer",
//               "12.11: Newton’s Law of Cooling",
//             ],
//           },
//           {
//             chapter: "Chapter 13: Thermodynamics",
//             subchapters: [
//               "13.1: Introduction",
//               "13.2: Thermal equilibrium",
//               "13.3: Zeroth law of Thermodynamics",
//               "13.4: Heat, Work and Internal Energy",
//               "13.5: First law of Thermodynamics",
//               "13.6: Specific Heat Capacity",
//               "13.7: Thermodynamic Process",
//               "13.8: Thermodynamic state variables and Equation of State",
//               "13.9: Thermodynamic Processes",
//               "13.10: Heat Engines",
//               "13.11: Refrigerators and Heat Pumps",
//               "13.12: Second Law of Thermodynamics",
//               "13.13: Reversible and irreversible processes",
//               "13.14: Carnot engine",
//               "13.15: Carnot Theorem",
//             ],
//           },
//           {
//             chapter: "Chapter 14: Kinetic Theory",
//             subchapters: [
//               "14.1: Introduction",
//               "14.2: Molecular nature of matter",
//               "14.3: Behavior of gases",
//               "14.4: Kinetic theory of an ideal gas",
//               "14.5: Law of equipartition of energy",
//               "14.6: Specific heat capacity",
//               "14.7: Mean free path",
//             ],
//           },
//           {
//             chapter: "Chapter 15: Oscillations and Waves",
//             subchapters: [
//               "15.1: Introduction",
//               "15.2: Periodic and Oscillatory Motions",
//               "15.3: Simple Harmonic Motion (SHM)",
//               "15.4: Simple Harmonic Motion and Uniform Circular Motion",
//               "15.5: Velocity and Acceleration in Simple Harmonic Motion",
//               "15.6: Force Law for Simple Harmonic Motion",
//               "15.7: Energy in Simple Harmonic Motion",
//               "15.8: Some systems executing Simple Harmonic Motion",
//               "15.9: Damped Simple Harmonic Motion",
//               "15.10: Forced Oscillations and Resonance",
//               "15.11: Wave Motion",
//               "15 .12: Types of Waves",
//               "15.13: Wave Parameters",
//               "15.14: Wave Speed",
//               "15.15: Wave Energy",
//             ],
//           },
//         ],
//         CHEMISTRY_I: [
//           {
//             chapter: "Chapter 1: Kinetic Theory",
//             subchapters: [
//               "1.1: Sub-atomic particles",
//               "1.2: Atomic models - Rutherford’s nuclear model of atom",
//               "1.3: Developments to the Bohr’s model of atom",
//               "1.4: Bohr’s model for hydrogen atom",
//               "1.5: Towards quantum mechanical model of the atom",
//               "1.6: Quantum mechanical model of an atom. Important features of quantum mechanical model of atom - orbitals and quantum numbers - shapes of atomic orbitals - energies of orbitals - filling of orbitals in atoms. Aufbau principle, Pauli’s exclusion principle and Hund’s rule of maximum multiplicity – Electronic configurations of atoms - Stability of half filled and completely filled orbitals.",
//             ],
//           },
//           {
//             chapter:
//               "Chapter 2: Classification of Elements and Periodicity in Properties",
//             subchapters: [
//               "2.1: Need to classify elements",
//               "2.2: Genesis of periodic classification",
//               "2.3: Modern periodic law and present form of the periodic table",
//               "2.4: Nomenclature of elements with atomic number greater than 100",
//               "2.5: Electronic configuration of elements and the periodic table",
//               "2.6: Electronic configuration and types of elements s, p, d and f blocks",
//               "2.7: Trends in physical properties",
//             ],
//           },
//           {
//             chapter: "Chapter 3: Chemical Bonding and Molecular Structure",
//             subchapters: [
//               "3.1: Kossel-Lewis approach to chemical bonding",
//               "3.2: Ionic or electrovalent bond",
//               "3.3: Bond parameters",
//               "3.4: The Valence Shell Electron Pair Repulsion (VSEPR) theory",
//               "3.5: Valence bond theory",
//               "3.6: Hybridisation",
//               "3.7: Coordinate bond",
//               "3.8: Molecular orbital theory - bonding in some homonuclear diatomic molecules",
//               "3.9: Hydrogen bonding",
//             ],
//           },
//           {
//             chapter: "Chapter 4: States of Matter: Gases and Liquids",
//             subchapters: [
//               "4.1: Intermolecular forces",
//               "4.2: Thermal energy",
//               "4.3: Intermolecular forces Vs Thermal interactions",
//               "4.4: The gaseous state",
//               "4.5: The gas laws",
//               "4.6: Ideal gas equation",
//               "4.7: Graham’s law of diffusion – Dalton’s law of partial pressures",
//               "4.8: Kinetic molecular theory of gases",
//               "4.9: Kinetic gas equation of an ideal gas (no derivation) – Deduction of gas laws from kinetic gas equation",
//               "4.10: Distribution of molecular speeds – rms, average and most probable speeds kinetic energy of gas molecules",
//               "4.11: Behaviour of real gases – deviation from ideal gas behavior – compressibility factor Vs pressure diagrams of real gases",
//               "4.12: Liquefaction of gases",
//               "4.13: Liquid state – properties of liquids in terms of inter molecular interactions – vapour pressure, viscosity and surface tension",
//             ],
//           },
//           {
//             chapter: "Chapter 5: Stoichiometry",
//             subchapters: [
//               "5.1: Some basic concepts",
//               "5.2: Laws of chemical combinations, Gay Lussac’s law of Gaseous volumes, Dalton’s atomic theory, Avogadro law",
//               "5.3: Atomic and molecular masses – mole concept and molar mass concept of equivalent weight",
//               "5.4: Percentage composition of compounds and calculations of empirical and molecular formulae of compounds",
//               "5.5: Stoichiometry and stoichiometric calculations",
//               "5.6: Methods of expressing concentrations of solutions",
//               "5.7: Redox reactions",
//               "5.8: Oxidation number concept",
//               "5.9: Types of redox reactions",
//               "5.10: Balancing of redox reactions – oxidation number method – half reaction (ion-electron) method.",
//               "5.11: Redox reactions in titrimetry",
//             ],
//           },
//           {
//             chapter: "Chapter 6: Thermodynamics",
//             subchapters: [
//               "6.1: Thermodynamic terms",
//               "6.2: Applications – work - enthalpy - extensive and intensive properties - heat capacity",
//               "6.3: Measurement of “U and H” : Calorimetry",
//               "6.4: Enthalpy change, ‘rH’ of reactions",
//               "6.5: Enthalpies for different types of reactions",
//               "6.6: Spontaneity",
//               "6.7: Gibbs Energy change and equilibrium",
//               "6.8: Absolute entropy and the third law of thermodynamics",
//             ],
//           },
//           {
//             chapter: "Chapter 7: Chemical Equilibrium and Acids-Bases",
//             subchapters: [
//               "7.1: Equilibrium in physical process",
//               "7.2: Equilibrium in chemical process – dynamic equilibrium",
//               "7.3: Law of chemical equilibrium – law of mass action and equilibrium constant",
//               "7.4: Homogeneous equilibria, equilibrium constant in gaseous systems, relationship between Kp and Kc",
//               "7.5: Heterogeneous equilibria",
//               "7.6: Applications of equilibrium constant",
//               "7.7: Relationship between equilibrium constant ‘K’, reaction Quotient ‘Q’ and Gibbs energy ‘G’",
//               "7.8: Factors affecting equilibria – Le-chatelier’s principle application to industrial synthesis of ammonia and sulphur trioxide",
//               "7.9: Ionic equilibrium in solutions",
//               "7.10: Acids, bases and salts – Arrhenius, Bronsted-Lowry and Lewis concepts of acids and bases",
//               "7.11: Ionisation of acids and bases",
//               "7.12: Buffer solutions",
//               "7.13: Solubility equilibria of sparingly soluble salts Solubility product constant - common ion effect on solubility of Ionic salts",
//             ],
//           },
//           {
//             chapter: "Chapter 8: Hydrogen and its Compounds",
//             subchapters: [
//               "8.1: Position of hydrogen in the periodic table",
//               "8.2: Dihydrogen - Occurrence and isotopes",
//               "8.3: Preparation of dihydrogen",
//               "8.4: Properties of dihydrogen",
//               "8.5: Hydrides: Ionic, covalent, and non-stiochiometric hydrides",
//               "8.6: Water: Physical properties; structure of water, ice chemical properties of water; hard and soft water temporary and permanent hardness of water.",
//               "8.7: Hydrogen peroxide: Preparation; physical properties; structure and chemical properties; storage and uses",
//               "8.8: Heavy water",
//               "8.9: Hydrogen as a fuel",
//             ],
//           },
//           {
//             chapter:
//               "Chapter 9: S-Block Elements (Alkali and Alkaline Earth Metals) Group 1 Elements:",
//             subchapters: [
//               "9.1: Alkali metals; Electronic configurations; atomic and ionic radii; ionization enthalpy; hydration enthalpy; physical properties; chemical properties; uses",
//               "9.2: General characteristics of the compounds of the alkali metals: oxides; halides; salts of oxy acids",
//               "9.3: Anamalous properties of lithium:",
//               "9.4: Some important compounds of sodium: Sodium carbonate; sodium chloride; sodium hydroxide; sodium hydrogen carbonate",
//               "9.5: Biological importance of sodium and potassium",
//               "Group 2 Elements:",
//               "9.6: Alkaline earth elements; Electronic configuration; ionization enthalpy; hydration enthalpy; physical properties; chemical properties; uses",
//               "9.7: General characteristics of compounds of the alkaline earth metals, oxides, hydroxides, halides, salts of oxyacids (carbonates, sulphates and nitrates)",
//               "9.8: Anomalous behavior of beryllium; its diagonal relationship with aluminium",
//               "9.9: Some important compounds of calcium",
//               "9.10: Biological importance of calcium and magnesium",
//             ],
//           },
//           {
//             chapter: "Chapter 10: p-Block Elements Group 13 (Boron Family)",
//             subchapters: [
//               "10.1: General introduction – Electronic configuration, atomic radii, ionization enthalpy, electro negativity; physical & chemical properties",
//               "10.2: Important trends and anomalous properties of boron",
//               "10.3: Some important compounds of boron – borax, ortho boric acid, diborane",
//               "10.4: Uses of boron, aluminium and their compounds",
//             ],
//           },
//           {
//             chapter: "Chapter 11: p-BLOCK ELEMENTS GROUP 14 (CARBON FAMILY) ",
//             subchapters: [
//               "11.1 General introduction – Electronic configuration, atomic radii, ionization enthalpy, electro negativity; physical & chemical properties",
//               "11.2 Important trends and anomalous properties of carbon",
//               "11.3 Allotropes of carbon ",
//               "11.4 Uses of carbon ",
//               "11.5 Some important compounds of carbon and s",
//             ],
//           },
//           {
//             chapter: "Chapter 12: ENVIRONMENTAL CHEMISTRY ",
//             subchapters: [
//               "12.1 Definition of terms: Air, Water and Soil pollutions ",
//               "12.2 Environmental pollution",
//               "12.3 Atmospheric pollution",
//               "12.4 Acid rain: Particulate pollutants",
//               "12.5 Stratospheric pollution",
//               "12.6 Water pollution ",
//               "12.7 Soil Pollution: Pesticides, industrial wastes ",
//               "12.8 Strategies to control environmental pollution ",
//               "12.9 Green chemistry",
//             ],
//           },
//           {
//             chapter:
//               "Chapter 13: ORGANIC CHEMISTRY-SOME BASIC PRINCIPLES AND TECHNIQUES AND HYDROCARBONS ",
//             subchapters: [
//               "General introduction  ",
//               "13.2 Tetravalency of Carbon: shapes of organic compounds",
//               "13.3 Structural representations of organic compounds ",
//               "13.4 Classification of organic compounds ",
//               "13.5 Nomenclature of organic compounds ",
//               "13.6 Isomerism ",
//               "13.7 Fundamental concepts in organic reaction mechanisms",
//               "13.8 Methods of purification of organic compounds ",
//               "13.9 Qualitative elemental analysis of organic compounds ",
//               "13.10 Quantitative elemental analysis of organic compounds ",
//               "13.11 Classification of hydrocarbons ",
//               "13.12 Alkanes – Nomenclature, isomerism (structural and conformations of ethane only) preparation of alkanes – properties of alkanes ",
//               "13.13 Alkenes – Nomenclature, structure of ethane, isomerism (structural and geometrical)– methods of preparation of alkenes – properties of alkenes",
//               "13.14 Alkynes – Nomenclature and isomerism, structure of acetylene methods of preparation of acetylene – physical properties and chemical reactions of alkynes ",
//               "13.15 Aromatic Hydrocarbons: Nomenclature and isomerism ",
//             ],
//           },
//         ],
//         BOTANY_I: [
//           {
//             chapter: "Diversity in the Living World  ",
//             subchapters: [
//               "Chapter-1 The Living World ",
//               "Chapter-2 Biological Classification  ",
//               "Chapter-3 Science of Plants – Botany  ",
//               "Chapter-4 Plant Kingdom ",
//             ],
//           },
//           {
//             chapter: "Structural Organisation in Plants –Morphology  ",
//             subchapters: ["Chater-5 Morphology of Flowering Plants  "],
//           },
//           {
//             chapter: "Reproduction in plants ",
//             subchapters: [
//               "Chater-6 Mode of Reproduction ",
//               "Chapter-7 Sexual Reproduction in Flowering plants  ",
//             ],
//           },
//           {
//             chapter: "Plant Systematic",
//             subchapters: ["Chapter-8 Texonomy of Angiosperms "],
//           },
//           {
//             chapter: "Structure and functions  ",
//             subchapters: [
//               "Chapter-9 The Unit of Life ",
//               "Chapter-10 Biomolecules  ",
//               "Chapter-11 Cell Cycle and Cell Division ",
//             ],
//           },
//           {
//             chapter: "Internal organization of Plants  ",
//             subchapters: [
//               "Chapter-12 Histology and Anatomy of Flowering Plants ",
//             ],
//           },
//           {
//             chapter: " Plant Ecology",
//             subchapters: [
//               "Chapter-13 Ecological Adaptation , Succession and Ecological Services.",
//             ],
//           },
//         ],
//         ZOOLOGY_I: [
//           {
//             chapter: "UNIT – I Diversity of Living World ",
//             subchapters: [
//               "1.1   What is Life? ",
//               "1.2   Nature, Scope and Meaning of Zoology ",
//               "1.3   Branches of Zoology",
//               "1.4   Need for Classification ",
//               "1.5   Biological Classification",
//               "1.6   Levels and Hierarchy of Classification",
//               "1.7   Nomenclature ",
//               "1.8   Species Concept ",
//               "1.9   Kingdom:  Animalia ",
//               "1.10   Biodiversity ",
//             ],
//           },
//           {
//             chapter: "UNIT – II  Structural Organisation in Animals  ",
//             subchapters: [
//               "2.1   Levels of Organisation ",
//               "2.2   Importance of Symmetry ",
//               "2.3   Coelom ",
//               "2.4   Animal Tissues ",
//             ],
//           },
//           {
//             chapter: "UNIT - III  Animal Diversity – I (Invertebrate Phyla)",
//             subchapters: [
//               "3.1   Phylum – Porifera",
//               "3.2   Phylum – Cnidaria",
//               "3.3   Phylum – Ctenophora",
//               "3.4   Phylum – Platyhelminthes",
//               "3.5   phylum – nematode",
//               "3.6   phylum – Annelida ",
//               "3.7   Phylum – Arthropoda ",
//               "3.8   Phylum – Mollusca ",
//               "3.9   phylum – Echinodermata",
//               "3.10   Phylum – Hemichordata ",
//             ],
//           },
//           {
//             chapter: "UNIT – IV Animal Diversity – II (Chordata Phylum )  ",
//             subchapters: [
//               "4.0   Phylum-Chordata",
//               "4.1   Subphylum- Urochordata or Tunicata",
//               "4.2   Subphylum-Cephalochordata ",
//               "4.3   Subphylum-Vertebrata/Craniata",
//               "4.4   Super Class: Agnatha ",
//               "4.5  Super Class : Gnathostomata ",
//               ,
//               "4.5 Terapoda  ",
//             ],
//           },
//           {
//             chapter: "UNIT – V  Locomotion and Reproduction  ",
//             subchapters: [
//               "5.1   Locomotion in Protozoa ",
//               "5.2   Flagellar and Ciliary movement",
//               "5.3   Asexual Reproduction ",
//               "5.4   Sexual Reproduction ",
//             ],
//           },
//         ],
//       },
//       Inter_SECOND_YEAR: {
//         MATHEMATICS_II_A: [
//           {
//             chapter: "Chapter-1: Complex Numbers",
//             subchapters: [
//               "1.1 Complex number as and ordered pair of real numbers Fundamental operations",
//               "1.2 Representation of complex number in the form a+ib",
//               "1.3 Modules and Amplitude of a complex number- Illustrations",
//               "1.4 Geometrical and Polar representation of comple number in Argand plane-Argand diagram",
//             ],
//           },
//           {
//             chapter: "Chapter-2: De Moivre’s Theorem",
//             subchapters: [
//               "2.1 De Moivre’s Theorem- Integral and Rational Indices",
//               "2.2 nth roots of unity-Geographical Interpretations- Illustrations",
//             ],
//           },
//           {
//             chapter: "Chapter-3: Quadratic Expressions",
//             subchapters: [
//               "3.1 Quadratic Expressions, Equations in one Variable",
//               "3.2 Sign of quadratic expressions-Change in signs and Maximum and Minimum",
//               "3.3 Quadratic Inequations",
//             ],
//           },
//           {
//             chapter: "Chapter-4: Theory of Equations",
//             subchapters: [
//               "4.1 Relation between the roots and the coefficients in an Equation",
//               "4.2 Solving an equation when two or more of its roots are connected by certain relations",
//               "4.3 Equations with real coefficients – occurrence of complex roots in conjugate pairs and its consequences",
//               "4.4 Transformation of equations – Reciprocal equations ",
//             ],
//           },
//           {
//             chapter: " Chapter-5: Permutations and Combinations",
//             subchapters: [
//               "5.1 Fundamental Principles of Counting – Linear and Circular permutations",
//               "5.2 Permutations of n dissimilar things taken r at a time",
//               "5.3 Permutations when repetitions are allowed",
//               "5.4 Circular Permutations",
//               "5.5 Permutations with Constant repetitions",
//               "5.6 Combinations- Definitions and Certain Theorems",
//             ],
//           },
//           {
//             chapter: "Chapter – 6 : Binomial Theorem",
//             subchapters: [
//               "6.1 Binomial Theorem for positive integral index",
//               "6.2 Binomial Theorem for Rational Index",
//               "6.3 Approximations using Binomial Theorem",
//             ],
//           },
//           {
//             chapter: "Chapter-7: Partial Fractions",
//             subchapters: [
//               "7.0 Rational Fractions",
//               "7.1 Partial Fractions of f(x)/g(x), when g(x) contains non-repeated linear factors",
//               "7.2 Partial Fractions of f(x)/g(x), when g(x) contains repeated and I or non-repeated linear factors",
//               "7.3 Partial Fractions of f(x)/g(x), when g(x) contains irreducible factors",
//             ],
//           },
//           {
//             chapter: "Chapter-8: Measure of Dispersion",
//             subchapters: [
//               "8.1 Range",
//               "8.2 Mean Deviation",
//               "8.3 Variance and Standard Deviation of ungrouped /grouped data",
//               "8.4 Coefficient of Variation and analysis of frequency distributions with equal means but different variances",
//             ],
//           },
//           {
//             chapter: "Chapter-9: Probability",
//             subchapters: [
//               "9.1 Random Experiments and Events",
//               "9.2 Classical definition of probability, Axiomatic approach and addition theorem of probability",
//               "9.3 Independent and Dependent events, Conditional Probability, Multiplication Theorem1 and Baye’s Theorem",
//             ],
//           },
//           {
//             chapter:
//               "Chapter -10: Random Variables and Probability Distributions",
//             subchapters: [
//               "10.1 Random Variables",
//               "10.2 Theoretical discrete distributions Binomial and Poisson distributions",
//             ],
//           },
//         ],
//         MATHEMATICS_II_B: [
//           {
//             chapter: "Chapter-1: Circle",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-2: System of Circles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-3: Parabola",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-4: Ellipse",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-5: Hyperbola",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-6: Integration",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-7: Definite Integrals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-8: Differential Equation",
//             subchapters: [],
//           },
//         ],
//         PHYSICS_II: [
//           {
//             chapter: "Chapter-1: Waves",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-2: RAY OPTICS AND OPTICAL INSTRUMENTS",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-3: WAVE OPTICS",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-4: ELECTRIC CHARGES AND FIELDS",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-5: ELECTROSTATIC POTENTIAL AND CAPACITANCE",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter-6: CURRENT ELECTRICITY",
//             subchapters: [],
//           },
//           {
//             chapter: "CHAPTER:7: MOVING CHARGES AND MAGNESTISM",
//             subchapters: [],
//           },
//           {
//             chapter: "CHAPETER: 8: MAGNETISM AND MATTER",
//             subchapters: [],
//           },
//           {
//             chapter: "CHAPETER: 9: ELECTROMAGNETIC INDUCTION",
//             subchapters: [],
//           },
//           {
//             chapter: "CHAPTER:10: ALTERNATING CURRENT",
//             subchapters: [],
//           },
//           {
//             chapter: "CHAPTER:11: ELECTROMAGNETIC WAVES",
//             subchapters: [],
//           },
//           {
//             chapter: "CHAPTER:12: DUAL NATURE OF RADIATION AND MATTER",
//             subchapters: [],
//           },
//           {
//             chapter: "CHAPTER:13: AROMS",
//             subchapters: [],
//           },
//           {
//             chapter: "CHAPTER: 14: NUCLEI",
//             subchapters: [],
//           },
//           {
//             chapter:
//               "CHAPTER:15:SEMICONDUCTOR ELCTRONICS: MATERIALS, DEVICES AND SIMPLE CIRCUITS",
//             subchapters: [],
//           },
//           {
//             chapter: "CHAPTER: 16 : COMMUNICATION SYSTEMS",
//             subchapters: [],
//           },
//         ],
//         CHEMISTRY_II: [
//           {
//             chapter: "Chapter-1 SOLID STATE",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: SOLUTIONS ",
//             subchapters: [],
//           },
//           {
//             chapter:
//               "Chapter 3:ELOCTROCHEMISTRY AND CHEMICAL KINETICS ELECTROCHEMISTRY And CHEMICAL KINETICS",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: SURFACE CHEMISTRY ",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: GENERAL PRINCIPLES OF MEALLURGY",
//             subchapters: [
//               "GROUP – 16 ELEMENTS",
//               "Ozone",
//               "GROUP – 17 ELEMENTS",
//               "GROUP – 18 ELEMENTS ",
//             ],
//           },
//           {
//             chapter: "Chapter 6:  P-BLOCK ELEMENTS GROUP -15 ELEMENTS",
//             subchapters: [],
//           },
//           {
//             chapter:
//               "Chapter 7:d AND f BLOCK ELEMENTS & COORDINATION COMPOUNDS ",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: POLYMERS ",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: BIOEMOLECULES",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10:CHEMISTRY IN EVERYDAY LIFE",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: HALO ALKANES AND HALOARENES",
//             subchapters: [],
//           },
//           {
//             chapter:
//               "Chapter 12: 2 ORGANIC COMPOUNDS CONTANING C,H AND O (Alcohols, Phenols, Ethers, Aldehydes, Ketones and Carboxylicacids)",
//             subchapters: [
//               "Alcohols, Phenols, Ethers",
//               "Aldehydes, Ketones",
//               "Carboxylic acids",
//             ],
//           },
//           {
//             chapter: "Chapter 13: ORGANIC COMPOUNDS CONTAINING NITROGEN ",
//             subchapters: [
//               "Amines",
//               "Diazonium Salts ",
//               "Cyanides and Isocyanides ",
//             ],
//           },
//         ],
//         BOTANY_II: [
//           {
//             chapter: "1. Human Anatomy and Physiology - I ",
//             subchapters: [],
//           },
//           {
//             chapter: "2.Microbiology",
//             subchapters: [],
//           },
//           {
//             chapter: "3.Genetics",
//             subchapters: [],
//           },
//           {
//             chapter: "4. Molecular Biology",
//             subchapters: [],
//           },
//           {
//             chapter: "5.Biotechnology  ",
//             subchapters: [],
//           },
//           {
//             chapter: "6. Plants, Microbes and Human Welfare ",
//             subchapters: [],
//           },
//         ],
//         ZOOLOGY_II: [
//           {
//             chapter: "UNIT – IHuman Anatomy and Physiology - I",
//             subchapters: [],
//           },
//           {
//             chapter: "UNIT – II  Human Anatomy and Physiology – II ",
//             subchapters: [],
//           },
//           {
//             chapter: "UNIT - III  Human Anatomy and Physiology – III",
//             subchapters: [],
//           },
//           {
//             chapter: "UNIT – IV Human Anatomy and Physiology – IV",
//             subchapters: [],
//           },
//           {
//             chapter: "UNIT – V Human Reproduction",
//             subchapters: [],
//           },
//           {
//             chapter: "UNIT –VI Genetics",
//             subchapters: [],
//           },
//           {
//             chapter: "UNIT –VII Organic Evolution",
//             subchapters: [],
//           },

//           {
//             chapter: "UNIT –VIII Applied Biology",
//             subchapters: [],
//           },
//         ],
//       },
//     },
//     "Telangana": {
//       '8': {
//         Mathematics: [
//           {
//             chapter: "Chapter 1: Rational Numbers",
//             subchapters: [],

//           },
//           {
//             chapter: "Chapter 2: Linear Equations in One Variable",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Construction of Quadrilaterals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Exponents and Powers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Comparing Quantities using proportion",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Square Roots and Cube Roots",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Frequency Distribution Tables and Graphs",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Exploring Geometrical Figures",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Area of Plane Figures",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Algebraic Expressions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Algebraic Expressions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Factorisation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Visualizing 3-D in 2-D",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Surface Areas and Volumes (cube-cuboid)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 15: Playing with Numbers",
//             subchapters: [],
//           }
//         ],

//         Physics: [
//           {
//             chapter: "Chapter 1: Force",
//             subchapters: [],
//             questions: ["What is a force? What changes can be produced by a force?",
//               "Give two examples each for a contact force and a force at a distance.",
//               "Explain Gravitational Force by giving a suitable example.",
//               "Draw and explain a free body diagram (FBD) to show all the forces acting on a car.",
//               "Why do tools meant for cutting always have sharp edges?",
//               "How can you differentiate between a contact force and a force at a distance?",
//               "A man stand still on a level floor.What forces act on him? Draw a free body diagram(FBD) to show all forces acting on him?",
//               "The surface area of an object is 20 m2 of 10 N is applied on it, then what is the pressure?",
//               "How do you appreciate the role of friction in facilitating our various activities?",
//               "If you push a heavy box which is at rest, you must exert some force to start its motion. However once the box is sliding you apply a lesser force to maintain that motion. Why?",
//               "How do you increase the pressure by keeping (a) area unchanged b) force unchanged",
//               "Imagine that friction disappeared from the earth.What will happen? Explain",

//             ]
//           },
//           {
//             chapter: "Chapter 2: Friction",
//             subchapters: [],
//             questions: [
//               "Explain the types of fractions with suitable examples?",
//               "A book placed on the surface of a table. The book is pushed in one direction. Draw the forces acting on the book and explain.",
//               "Give a few examples for Sliding friction.",
//               "Explain how lubrication reduces friction.",
//               "Explain with one example that Frictional force is proportional to the Normal force.",
//               "Explain why do sportsmen use shoes with spikes?",
//               "Would it be easier or difficult for you to walk on a marble floor with soapy water? Why?",
//               "What happens if we do not reduce friction in machines?",
//               "What purposes are served by using ball bearings in machines? Explain with daily life examples.",
//               "Draw a free body diagram (FBD) to show various forces acting on a body which is sliding on an inclined plane.",
//               "Do you agree with the statement, 'friction is both good and evil'? Explain with examples.",
//               "Reducing friction to the lowest possible level in machine tools solves the problem of energy crisis and conserves biodiversity. How do you support the statement? Explain."

//             ]
//           },
//           {
//             chapter: "Chapter 3: Synthetic fibres and plastics",
//             subchapters: [],
//             questions: [
//               "Why are some fibres called synthetic? Explain.",
//               "What are thermosetting plastics? Give two examples.",
//               "Give reasons: Why are plastic containers used as storing devices.",
//               "How have synthetic fibres changed our daily life?",
//               "What would happen if we make electric switches with thermoplastics?",
//               "What could be the consequences if plastics are not properly disposed of?",
//               "Rani wants to buy clothes for her parents for winter wear. What types of clothes would you suggest? Specify reasons.",
//               "What made humans search for alternatives to natural fibres?",
//               "Imagine what would happen if plastics had not been discovered.",
//               "Indiscriminate usage of plastic is a serious threat to biodiversity. What are the efforts of Government and Non-government organizations in this regard?",


//             ]
//           },
//           {
//             chapter: "Chapter 4: Metals and non-metals",
//             subchapters: [],
//             questions: [
//               "Explain about ductility.",
//               "Explain the physical properties of metals with suitable examples.",
//               "Draw the diagram of identifying electric conductivity of a material.",
//               "If you are given two samples, how do you distinguish which one is metal and which is non-metal?",
//               "Which metals are used in making jewelry? Why?",
//               "Why don’t cooking pans have metal handles?",
//               "Dumping of waste material made up of metals and non-metals leads to environmental pollution. Do you support the statement? Give your justification with suitable examples.",
//               "In a chemical reaction, why is iron unable to displace zinc from zinc sulfate?",
//               "How is the property of malleability of metals used in our daily life?"
//             ]
//           },
//           {
//             chapter: "Chapter 5: Sound",
//             subchapters: [],
//             questions: [
//               "How can you explain that sound has energy?",
//               "Write the unit to measure the sound intensity.",
//               "Write the differences between noise and music.",
//               "Explain the sources which produce sound pollution in your surroundings.",
//               "The sounds of crickets (insects) make us close our ears. Why?",
//               "Write the names of any three musical instruments that you know and explain how they produce sound.",
//               "Draw the figures depicting low amplitude and high amplitude.",
//               "Vibrations in a body produce sounds. How do you prove it?",
//               "What is the effect of humidity on the quality of sound propagation? Is there any difference in the propagation of sound in air during the summer and winter seasons? Discuss.",
//               "How does sound pollution affect biodiversity? Explain."
//             ]
//           },
//           {
//             chapter: "Chapter 6: REFLECTION OF LIGHT BY PLANE SURFACES",
//             subchapters: [],
//             questions: [
//               "If a ray incidents normally on a plane mirror, what will be the angle of reflection?",
//               "Explain the laws of reflection.",
//               "Explain the process of formation of an image with a pinhole camera? Draw a ray diagram to show this.",
//               "Why does the image in a plane mirror suffer lateral inversion?",
//               "Draw a ray diagram to understand the formation of an image for a pointed object by a plane mirror. Explain it.",
//               "In the adjacent figure, AO and OB are incident and reflected rays respectively. ∠AOB = 90°. Find the values of the angle of incidence and angle of reflection.",
//               "Bharath stands in front of a plane mirror at a distance of 5m from the mirror and observes his image in the mirror. If he moves 2m towards the plane mirror, then what will be the distance between Bharath and his image?",
//               "Explain diagrammatically the image of the letter 'B' in a plane mirror.",
//               "Why can't we see our image in a white sheet of paper though it reflects light?",
//               "Discuss the merits and demerits of using mirrors in building elevation.",
//               "Observe the adjacent figure. AB and BC are two plane mirrors arranged at 120°. A ray incidents at an angle of 55° on AB. Find the value of 'x'.",
//               "Niharika holds a clock in her hand, which shows the time 3:00 o'clock. If she observes the clock in a plane mirror, what will be the time that the clock shows in the plane mirror?",
//               "Two plane mirrors are fixed at right angles to each other and an object is placed between them as shown in the figure. Trace the path of the rays by which an observer sees the final image in one of the mirrors.",
//               "Two divergent rays originating from the same point have an angle of 100° between them. If they strike a plane mirror with the same incident angle, what will be the angle of reflection?",
//               "The size of the image in the mirror seems to be decreased when you move the object towards your eye from the mirror. Draw the diagram showing angles depicting the situation."
//             ]
//           },
//           {
//             chapter: "Chapter 7: COAL AND PETROLEUM",
//             subchapters: [],
//             questions: [
//               "Explain why petroleum is also called liquid gold.",
//               "Name the petrochemical products which are used in the agriculture industry.",
//               "Explain the process of formation of petroleum in Earth.",
//               "Why should people look for alternative sources of fossil fuel?",
//               "Name the petroleum products used for surfacing of roads.",
//               "What will happen if fossil fuels like coal and petroleum are completely exhausted?",
//               "Assume that you are a driver, what measures do you take to save petrol and diesel?",
//               "Suggest some alternative ways to save the fuel resources.",
//               "How is biodiversity affected by the excessive use of fossil fuels?",
//               "Discuss the consequences of crude oil and refined fuel spills into the sea from tankers or ships by accident."
//             ]

//           },
//           {
//             chapter: "Chapter 8: COMBUSTION, FUELS AND FLAME",
//             subchapters: [],
//             questions: [
//               "Give four examples of combustible materials.",
//               "Why should we not store spirit or petrol near our living place?",
//               "The oil fires should not be sprayed with water. Why?",
//               "Water is not used to control fires involving electrical equipment. Why?",
//               "What precautions are to be taken while pouring water on fire?",
//               "Give an example of a good fuel. How do you choose that fuel? Explain.",
//               "It is difficult to burn a heap of green leaves but not a heap of dry leaves. Explain why?",
//               "Where do you find spontaneous combustion and rapid combustion in your daily life?",
//               "Why is phosphorus preserved in water?",
//               "How do you feel about 'fuels have become a part of human life'?",
//               "Is there any other procedure to prove that oxygen is needed for burning?"
//             ]
//           },
//           {
//             chapter: "Chapter 9: ELECTRICAL CONDUCTIVITY OF LIQUIDS",
//             subchapters: [],
//             questions: [
//               "Give examples of good solid conductors and liquid conductors.",
//               "Give examples of poor solid conductors and liquid conductors.",
//               "Give two examples of electrolytes.",
//               "Draw the diagram of an electrolytic cell and explain.",
//               "Which energy is the cause for the glowing of a bulb in an electrolytic cell?",
//               "What do you add to distilled water to make it conduct electricity?",
//               "If the key is to be coated with aluminium instead of copper, what changes do we need to make in the experiment of coating an iron key with copper?",
//               "Is plastic coated by the process of electroplating? Why?"
//             ]
//           },
//           {
//             chapter: "SOME NATURAL PHENOMENA",
//             questions: [
//               "Describe with the help of a diagram an instrument which can be used to detect a charged body.",
//               "Which places are not safe during a thunderstorm?",
//               "List three states in India where earthquakes are more likely to occur.",
//               "Sometimes, a crackling sound is heard while taking off a sweater during winter. Explain.",
//               "Give two examples from your daily life about effects which are caused by the transfer of charges.",
//               "Inflate two balloons and rub both of them with a cloth first and then with different materials. Will they attract each other in both cases?",
//               "Explain why a charged balloon is repelled by another charged balloon whereas an uncharged balloon is attracted by a charged balloon.",
//               "The weather department has predicted that a thunderstorm is likely to occur on a certain day. Suppose you have to go out on that day. Would you carry an umbrella? Explain.",
//               "Is there any alternative method to find the intensity of an earthquake?",
//               "We know that the clouds have charges. Can we produce current through these charges?"
//             ]

//           },
//           {
//             chapter: "STARS AND THE SOLAR SYSTEM",
//             questions: [
//               "Why does the pole star seem to be stationary?",
//               "Among all 8 planets, what is the special thing about Earth?",
//               "How do people come to an understanding that the Earth is spherical?",
//               "How do people come to an understanding that the Earth rotates on its own axis?",
//               "What factors need to be considered to view the pole star at your place?",
//               "How can you find the north-south direction at your place?",
//               "Is it possible to see the pole star for people who live in the southern hemisphere of the Earth? Why?",
//               "Draw the different phases of the moon. Arrange them in order from Pournami to Amavasya.",
//               "What are the planets you have seen in the sky? When do you observe those planets?",
//               "What is the use of artificial satellites in our daily life?",
//               "How do day and night occur?",
//               "Even though we do not have a clock, we can know the time by observing some shadows in the daytime. Think and discuss with your friends how can we know the time at night.",
//               "We have launched many artificial satellites around our Earth for different purposes. What do you think about the impact of artificial satellites and their radiation on biodiversity?",
//             ]
//           },
//           {
//             chapter: "GRAPHS OF MOTION",

//           }
//         ],

//         Biology: [
//           {
//             chapter: "Chapter 1: What is Science?",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Cell – The Basic Unit Of Life",
//             subchapters: [],
//             questions: [
//               "Who discovered the cell for the first time? What procedure did he follow?",
//               "Name the factors on which the shape of the cells depends.",
//               "Distinguish between unicellular and multicellular organisms.",
//               "How will you prepare a slide without drying quickly?",
//               "Deekshith said that, 'we can’t see cells with the unaided eye.' Is the statement true or false? Explain.",
//               "Correct the statement and if necessary rewrite: a. Cell wall is essential in plant cells. b. Nucleus controls cell activity. c. Unicellular organisms perform all life processes like respiration, excretion, growth, and reproduction. d. To observe the nucleus and organelles clearly, staining is not necessary.",
//               "Describe the functions of the nucleus.",
//               "What is the difference between cells in onion peel and cells in spinach?",
//               "Label parts of diagrams given on page 25, and identify which is a plant cell and which is an animal cell.",
//               "What questions will you pose to know about diversity in cells?",
//               "If you want to know about unicellular and multicellular organisms, what questions will you pose?",
//               "Get some floating slime from a puddle, pick a very small amount of slime and put it on a slide. Separate out one fiber and look at it through the microscope. Draw the diagram of what you observed.",
//               "Collect different kinds of leaves from your surroundings and observe the shapes of the epidermal cells under a microscope. Make a table which contains serial number, name of the leaf, shape of the leaf, shape of the epidermal cells. Do not forget to write specific findings below the table.",
//               "Make sketches of animal and plant cells which you observe under a microscope.",
//               "Ameer said, 'Bigger onions have larger cells when compared to the cells of smaller onions!' Do you agree with his statement or not? Explain why.",
//               "How do you appreciate the fact that animals, human beings, and trees are made of cells, which are very small and we can look at them through a microscope?",
//               "Deepak said, 'A plant can’t stand erect without a cell wall.' Do you support this statement?"
//             ]
//           },
//           {
//             chapter: "Chapter 3: The World Of Micro-organisms",
//             subchapters: [],
//             questions: [
//               "Which organisms act as an interlink between living and non-living organisms? Why do you think so?",
//               "Write the diseases caused by microorganisms.",
//               "What type of microorganisms can we observe in pond water?",
//               "Whether microorganisms are useful or harmful. Explain.",
//               "Why does cooked food spoil soon but not uncooked food? Give your reasons.",
//               "What questions would you like to ask your teacher to know about different shapes of bacteria?",
//               "What would happen if you add buttermilk to a) chilled milk? b) hot milk c) lukewarm milk?",
//               "How are human actions causing the death of useful bacteria and fungi? What will happen if this continues?",
//               "What procedure did you follow to observe the lactobacillus bacterium in the lab?",
//               "Visit any bakery near your school with the help of your teacher or parents. Know about the preparation of bread and cake and prepare a note on them.",
//               "Observe some permanent slides of microorganisms in your school lab with the help of a microscope. Draw these pictures.",
//               "Prepare a model of any microorganism with clay and write the characteristics of the microbe.",
//               "Do you clean your hands with soap before eating? Why?",

//               "How do vaccines work in our body?",
//               "What are the differences between antibiotics and vaccines?",
//               "Take three bowls and mark them as A, B, and C. Pour lukewarm milk in bowl A, hot milk in bowl B, and cold milk in bowl C. Add one teaspoon of curd or buttermilk in all three bowls and stir them slightly. Cover the bowls with lids. Keep the bowls undisturbed for five to six hours. In which bowl did the milk turn into curd? Give your reasons.",
//               "Collect more information about scientists who invented and discovered other facts related to microorganisms. How have these discoveries helped mankind? Make a chart presentation and paste it on your classroom wall magazine.",
//               "Make an album of scientists and their discoveries related to microorganisms.",
//               "Visit the veterinary hospital and prepare a list of diseases affecting cattle, goats, and sheep by asking questions to the doctor.",
//               "What is pasteurization? How is it useful?",
//               "Edward Jenner collected fluid from a cowpox pustule and injected it into an eight-year-old boy. Then he exposed the boy to smallpox, and the boy did not get smallpox. How do you appreciate the daring action of Edward Jenner?",
//               "Visit a nearby milk chilling center/library. Observe the process and make a report on it.",
//               "'Prevention is better than cure' - comment.",
//               "Raheem tells his neighbors, 'stagnation of sewage in our surroundings is harmful to our health.' Do you support this? Why?",
//               "Jeevan said, 'If there are no microorganisms, the earth will remain with waste.' Do you agree with this statement? Why?",
//               "Kavita is suffering from a serious illness. The doctor prescribed antibiotics for five days. After three days of usage, she stopped taking antibiotics. Is it correct or not? Discuss.",
//               "What are the precautions taken to eradicate malaria?",
//               "One medical store owner is giving antibiotics to his customer who is suffering from fever without a doctor's prescription. But the customer's daughter, Malathi, is telling her father not to take antibiotics without a doctor's prescription. Whom do you support and why?"

//             ]
//           },
//           {
//             chapter: "Chapter 4: Reproduction In Animals",
//             subchapters: [],
//             questions: [
//               "Differentiate between: a) Sexual reproduction and asexual reproduction b) Gametes and zygote c) External fertilization and internal fertilization d) Viviparous and oviparous animals",
//               "Compare the reproduction in Hydra and Amoeba. Note down the differences in your notebook.",
//               "Why do fish and frogs lay more number of eggs whereas cows and human beings usually give birth to only one at a time?",
//               "Can animals produce offspring even without the formation of zygotes? How? Explain with a suitable example.",
//               "How can you identify whether an animal is viviparous or oviparous?",
//               "Who am I? a) I am formed by the fusion of male and female gametes... b) I am a gamete that has a tail and travels to fuse with the female gamete... c) I am a fully developed embryo inside a mother’s body...",
//               "State the reason why most terrestrial animals’ fertilization takes place internally.",
//               "What would happen if all organisms stop the process of reproduction?",
//               "Kavitha found a tadpole in a pond. She collected it carefully and put it in an aquarium, supposing it was a fish. After some days, what did she find?",
//               "Collect information from your library or from other sources like the internet and discuss the life cycle of honeybees in the symposium at your school.",
//               "Sketch the diagrams of the male and female reproductive systems.",
//               "Draw a labelled diagram of the life history of a frog and identify which stages are herbivores.",
//               "How would you appreciate Ritwik’s work when he kept back the pigeon squab in the ventilator? If you were in Ritwik’s place, what would you do?"
//             ]
//           },
//           {
//             chapter: "Chapter 5: Reaching The Age Of Adolescence",
//             subchapters: [],
//             questions: [
//               "How is adolescence different from childhood?",
//               "Write short notes on the following: a) Secondary sexual characters b) Adam’s Apple.",
//               "List out the changes in the body that take place at the age of adolescence.",
//               "Why are acne and pimples common in adolescents?",
//               "What can you suggest to your classmates to keep themselves clean and healthy?",
//               "If you have a chance to talk to a doctor, what questions would you ask about adolescent emotions and changes in the body?",
//               "Some mobile phones have an auditory meter to measure the frequency of produced sound. By using this phone, measure your friend's voice frequency, one from each class VI to X. Report your findings.",
//               "Write five suggestions to improve the performance of the Red Ribbon Club of your school.",
//               "Prepare a three-minute speech on behavioral changes in adolescents.",
//               "Nature prepares the human body to reproduce its generations. What do you think of it?",
//               "You know that early marriage is a social taboo. Prepare some slogans to prevent this.",
//               "Thirteen-year-old Swaroop always thinks of his height. Can he improve his height? What do you suggest to him?",
//               "Are you angry with your parents? How do you wish your parents to be?",
//               "What are your expectations about your parents and teachers?"
//             ]
//           },
//           {
//             chapter: "Chapter 6: Biodiversity and its Conservation",
//             subchapters: [],
//             questions: [
//               "How can you say that forests are biosphere reserves? Give reasons.",
//               "What do you understand about the terms (a) extinct (b) endangered (c) endemic? Give examples.",
//               "What is the scientific reason behind birds' migration?",
//               "What is the need for conducting biodiversity meetings? Collect information about these meetings, including when and where they were conducted and their agenda.",
//               "Nowadays, we find animals like leopards and bears intruding into our living places. What may be the reasons for this?",
//               "Make a list of animals/birds seen now and 30 years ago. Take the help of your elders. Write a few reasons for their disappearance.",
//               "Select an area in your locality. Observe the animals (living and visiting) for a day. Prepare a list and plot a graph.",
//               "When a tree is considered an ecosystem, record the flora and fauna connected with it.",
//               "Browse through the internet or books on wildlife and gather information on bird sanctuaries in India. Prepare a list of birds migrating to India.",
//               "Visit the local forest office and collect the data of local flora and fauna.",
//               "Where do you find most of the biodiversity on earth? Draw a Telangana map showing maximum biodiversity areas.",
//               "What do you understand by biodiversity? How can you say variations are present in them?",
//               "Most of our biodiversity is being lost due to human activities. Suggest a few ways to protect them.",
//               "When you see a park, sanctuary, or a zoo with many kinds of plants and animals, how would you express your happiness? Write a few lines on them.",
//               "Prepare an essay to give a talk on biodiversity and conservation.",
//               "Rani said conservation of biodiversity starts from our home. Is she correct? How do you support her? What will be your action plan for this?",
//               "When we take steps towards conserving the tiger, what are the other things that have to be conserved?",
//               "Prepare some slogans or a pamphlet to make people aware of the conservation of biodiversity."
//             ]
//           },
//           {
//             chapter: "Chapter 7: Different Ecosystem",
//             subchapters: [],
//             questions: [
//               "Define an ecosystem. Explain it with a suitable example.",
//               "Explain how the diversity of living organisms helps in enriching any ecosystem.",
//               "What happens when two animals having similar habits share one ecosystem? How could you conserve this type of biodiversity?",
//               "What is the difference between habitat and ecosystem?",
//               "Who am I? I am the base of the food chain. I depend on plants for food. I break down the remains of dead plants and animals.",
//               "Which of the following is a producer? (a) fox (b) fungus (c) hen (d) grass and why?",
//               "What do you understand by a food web? Describe your own food web with the help of a diagrammatic representation.",
//               "An ecosystem has mice. What happens if more cats are added to it?",
//               "List out producers (Plants, Bushes, Trees), consumers (herbivores and carnivores), and decomposers that you observed in your agriculture field or school garden.",
//               "In a grassland ecosystem, rabbits eat only plants. They eat plants faster than the plants can grow back. What must happen to bring the ecosystem into balance?",
//               "Plant, Tiger, Rabbit, Fox, Eagle: Did you find any connection among the above list of things? If we remove Rabbit from the list, what will happen?",
//               "What do you understand by the inter-dependency of animals and plants? How do you appreciate it?",
//               "Collect the data of plants and animals from a park near you and fill in the table on page No. 109 and write a report on it.",
//               "Prepare a table on adaptations of desert animals. Collect the data from your school library.",
//               "Construct the food web with the following: Grass, Plants, Grasshopper, Frog, Snake, Eagle, Goat, Fox, Tiger, Wolf, Rabbit."
//             ]

//           },
//           {
//             chapter: "Chapter 8: Production of Food from Plants",
//             subchapters: [],
//             questions: [
//               "State reasons why wheat is cultivated in Rabi season only.",
//               "Ramaiah levelled his field. Somaiah’s field has many ups and downs. Who will get more crop yield? Why?",
//               "What are the advantages of ploughing?",
//               "Treating with fungicides before sowing the seed is necessary. Why?",
//               "Why do farmers dry the paddy crop after cutting them from fields?",
//               "Give some examples of plants that grow after replanting.",
//               "Rahim removed weeds in his crop field, but David did not. Guess who will get more yield. Why?",
//               "What is natural manure? How to prepare it? Give two examples.",
//               "Why do farmers plough their field during summer?",
//               "Rajendar cultivated cotton crop in his field. He did not get sufficient yield. Can you guess the reasons?",
//               "Place a fistful of Bengal gram (or any other seeds) in a bowl of water. Do you find some seeds float while others sink?",
//               "Why do some seeds float and others sink?",
//               "Which seeds do you think will germinate and why?",
//               "Which seeds do you think will not germinate and why?",
//               "Which seeds do you think farmers should use for sowing in the field?",
//               "I am a plant. I grow in crop fields. Farmers pluck me as soon as they see me. Can you tell who am I?",
//               "Go to your nearest fertilizer shop and collect information about chemical fertilizers and fill the table. Copy the following table in your notebook.",
//               "Prepare a flow chart from ploughing to yielding in paddy.",
//               "How do you appreciate the irrigation systems used in drought-prone areas?",
//               "Narendra sprayed an overdose of pesticides on his cotton crop. Ramesh says it is a hazard to biodiversity and crop yield. Can you support Ramesh? How?",
//               "Venkatesh observed the irrigation method for paddy field. He wanted to follow the same practice for his maize crop. What suggestions do you give him?",
//               "Take some paddy grains and soak them in water for one day. Take them into a watch glass and sow them in soil. After that observe the radicle and plumule with the help of a hand lens and draw the picture of it.",
//               "What is the relation between night duration and crop field?",
//               "In a village, all farmers have grown the same type of crop. What are the disadvantages of this practice?"
//             ]
//           },
//           {
//             chapter: "Chapter 9: Production of Food from Animals",
//             subchapters: [],
//             questions: [
//               "One honey bee hive consists of different types of bees. What are they? How do they differ from each other?",
//               "Make a list of characters of local variety of buffaloes which give good quantity of milk in your village.",
//               "Explain the process of hatching eggs under a broody hen in rural areas.",
//               "Write about the accessory products produced in animal husbandry.",
//               "What are estuaries, and how are they suitable for both marine and river fish to live?",
//               "If you have a chance to visit a milk chilling center, what doubts would you like to clarify? Please list them.",
//               "Poultry, emu culture, fish farms, apiculture. Visit any one of the above industries. Get the information from farmers and prepare a note on this.",
//               "Collect news from newspapers about milk production and impurities in milk. Prepare a note and display it on the wall magazine.",
//               "Collect information about seaweeds and sea kelp from your school library and write a note with examples.",
//               "Observe a nearby poultry farm and find out how they export eggs to the market. What material is used for transportation?",
//               "Observe a dry honey bee hive and how the bees built it. Draw a picture. How does it look like?",
//               "Agriculture and animal husbandry are both sides of the same coin. How can you justify this?",
//               "How do you appreciate the uses of cattle?",
//               "What makes you amazed at the division of work in a honey bee colony? Support your answer.",
//               "Conversion of agricultural lands into fish ponds leads to food crisis and environmental pollution. Write your opinion to conduct a debate on this issue.",
//               "Raju stated that there is a relationship between animal husbandry and agriculture. How do you support this statement?"
//             ]

//           },
//           {
//             chapter: "Chapter 10: Not for Breathing Not for Drinking",
//             subchapters: [],
//             questions: [
//               "How does air pollution lead to water pollution?",
//               "What steps can be taken to control air pollution and water pollution?",
//               "Why does the increased level of nutrients in the water affect the survival of aquatic organisms?",
//               "Roadside plants cannot grow properly - find your own reasons and explain with your argument.",
//               "Sudheer is a traffic constable. What do you think about his health? Give some suggestions to protect his health during duty period.",
//               "Write a short note on the effects of water pollution in your village. Suggest precautions.",
//               "Visit a pollution check center. Observe the process of conducting a pollution check and record your findings. You may consider the following areas for your record: average number of vehicles checked in a certain time period, time taken to check each vehicle, pollutants checked for, the process of testing, permissible limits of emission of various pollutants, measures taken if the emitted gases are above the permissible limits.",
//               "Organize a field visit to a pond/lake/river present in or near your village with the help of your teachers. Observations followed by discussion could focus on: the history of the pond/lake/river, water resources available other than that river/pond/lake, cultural traditions, pollution concerns, source of pollution, effects of pollution on the people living by the riverside as well as those living far away.",
//               "What is air pollution? Make a flowchart to describe its causes and effects.",
//               "Clear and transparent water is always suitable for drinking. Comment.",
//               "If our monument like the Taj Mahal is affected by air pollution, what is your advice to protect it?",
//               "Reshma is going to talk about controlling measures of soil pollution. Prepare a write-up for her.",
//               "To conduct a quiz program on air and water pollution, prepare five thought-provoking questions.",
//               "'Use Bicycle – Avoid motor bikes and cars.' This slogan is prepared by Sravani. Prepare some more slogans on pollution.",
//               "If you are a general manager of a chemical industry, what precautions would you take to control air and water pollution?",
//               "How to minimize the usage of paper in daily life?"
//             ]
//           },
//           {
//             chapter: "Why do we fall ill?",
//             questions: [
//               "A doctor/nurse/health-worker is exposed to more sick people than others in the community. Find out how she/he avoids getting sick herself/himself.",
//               "Differentiate between infective and non-infective diseases.",
//               "Why do acute diseases become chronic diseases?",
//               "Draw the figure of Leishmania and Trypanosome.",
//               "Ramu was affected with smallpox. What advice do you give Ramu for not spreading the disease?",
//               "How do you appreciate the role of vaccine in preventing disease?",
//               "Prepare a questionnaire to collect information from your local health worker about the spreading of diseases.",
//               "How many times did you fall ill in the last one year? What were the illnesses?",
//               "Think of one change you could make in your habits in order to avoid any of/most of the above illnesses.",
//               "Think of one change you would wish for in your surroundings in order to avoid any of/most of the above illnesses.",
//               "Conduct a survey in your neighbourhood to find out what the three most common diseases are. Suggest three steps that could be taken by your local authorities to bring down the incidence of these diseases."
//             ]


//           }
//         ],

//         Telugu: [
//           {
//             chapter: "Chapter 1: Thayaaganiradhi",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Samudra Prayanam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Bandari Basavannna",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Aasamaanyulu",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Shathaka Sudha",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Telugu Janapadhageyellu",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Manjeera",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Chinnapudde",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Amarulu",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Singareni",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Kaapu Bidda",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Matlade Nagali",
//             subchapters: [],
//           }
//         ],

//         Social_Science: [
//           {
//             chapter: "Chapter 1: Reading and Analysis of Maps",
//             subchapters: [],
//             questions: [
//               "Study the school atlas carefully by looking at the various thematic maps.",
//               "Do you think the use of maps has changed from the time of ancient Greeks to now? In what way are they similar and different?",
//               "Many people believe that the making of maps by the Colonial powers was a more powerful tool for exploitation and control of the colonies than guns. Do you agree? Why?",
//               "In what ways were the maps prepared by the British different from the ones made by Ptolemy?",
//               "Read the paragraph 'Use of maps in our times' on page 8 and answer the following question: What are the various purposes for which maps are used in our times?",
//               "Prepare a few questions to find out more about different types of maps."
//             ]
//           },
//           {
//             chapter: "Chapter 2: Energy from the Sun",
//             subchapters: [],
//             questions: [
//               "Correct the false statements: If a place is closer to the sea, irrespective of its distance from equator, it will always be cooler. As you go up higher from the earth, it becomes warmer because sun is closer to you. Sun heats the air first and then the earth. Global warming is related to oxygen.",
//               "What is the difference between the highest temperature in Table 2 and the lowest temperature in Table 1?",
//               "Suppose, the temperature in Moscow was –8°C at 10 AM on 6 December. Twenty-four hours later, it was 12°C higher. What was the temperature at 10 AM on 7 December?",
//               "Delhi and Mumbai are both situated on plains and their height above sea level is less than 300 meters. Why is there so much difference in their monthly average temperatures? In which months are the average temperatures in these two cities most similar? Explain.",
//               "Between Bhopal, Delhi, Mumbai and Shimla, which two places show a similar temperature pattern? Explain the similarity between these two places.",
//               "Look at the graph of Minimum-Maximum temperature and answer the questions: What is the average highest temperature in July? How warm does it usually get in December? How cool does it usually get in June? Is there a bigger difference between night and day temperature in May or in August? When is summer?",
//               "How is solar energy better than thermal power?",
//               "Read the paragraph under the title 'Height and Temperature' on page 27 and comment on it.",
//               "Give three possible explanations for the differences between the average temperatures in Thiruvananthapuram and Shimla in January.",
//             ]
//           },
//           {
//             chapter: "Chapter 3: Earth Movements and Seasons",
//             subchapters: [],
//             questions: [
//               "Do you think there is any correlation between the crops grown in your region and the seasons? Find out by discussing with your elders and friends and write a short essay on it.",
//               "Why do you think Telangana does not receive any snowfall during winter months?",
//               "We have a rainy season. How do you think it is related to the movement of the Earth and the pattern of Sun’s rays? Does it occur in the summer, winter, or in between?",
//               "Collect information about the time of sunrise and sunset for different months of the year in your place. Calculate the duration of day and night for each month. Do you see any pattern in this?",
//               "Explain the idea of rotation of the Earth to your family members. Write down their questions or doubts and try to answer them.",
//               "Imagine that the Earth does not rotate but goes around the Sun year-round. What difference will it make to the seasons and distribution of temperature?",
//               "Identify a country in the Temperate Belt in both the Northern and Southern Hemisphere. Compare the seasons in those countries and your place.",
//               "What are the six seasons in Indian climate?",
//               "Read the first paragraph of this chapter and answer: What is the impact of seasons on the lives of human beings?"
//             ],
//           },
//           {
//             chapter: "Chapter 4: The Polar Regions",
//             subchapters: [],
//             questions: [
//               "Re-write the false statements with correct ones:",
//               "a) Animal body parts were used only in clothing.",
//               "b) Major part of the food includes vegetables.",
//               "c) Popular games amongst the people in Tundra are closely related to their daily lives.",
//               "d) Contact with people from outside impacted Eskimos' health.",
//               "Based on what you studied about equator regions in Class VII, how is the polar region different?",
//               "Create a wall paper with illustrations and descriptions comparing life between your location and that of the Tundra.",
//               "Imagine one entire day (24 hours) when the sun does not set and another day when there is no sun. What changes will this make in your daily lives? Write a short note on them.",
//               "Find out the living places of Eskimos on the world map.",
//             ],
//           },
//           {
//             chapter: "Chapter 5: Forests: Using and Protecting them",
//             subchapters: [],
//             questions: [
//               "Observe the map of the forests in Telangana and find out which district(s) has/have the maximum forest-covered area.",
//               "A few children in a school participated in Vanamahothsavam programme and planted some saplings. How would you respond to this?",
//               "Read the paragraph under the Heading 'Forests of Telangana' and answer the question.",
//               "What is the difference between Evergreen forests and Deciduous forests?",
//               "Observe the pictures on page 59 and write a comment."
//             ],
//           },
//           {
//             chapter: "Chapter 6: Minerals and Mining",
//             subchapters: [],
//             questions: [
//               "Draw a flow chart showing the visit to and different stages of open cast and underground mining.",
//               "Create a table to classify major health challenges, precautions, and care taken towards protecting mine workers as follows: 1. While working in the mines 2. While being employed.",
//               "Narrate the difference in requirement of labour in mine while using machines and human labour.",
//               "See the map of Telangana showing minerals in this chapter and identify the minerals found in your district.",
//               "Read the paragraph under the heading ‘To whom do the minerals belong’ and answer the following: The minerals do not belong to any particular person but they belong to all people. Justify with reasons.",
//               "How do minerals help the country in development?",
//               "Prepare a table showing different minerals and their uses."
//             ],
//           },
//           {
//             chapter: "Chapter 7: Money and Banking",
//             subchapters: [],
//             questions: [
//               "Can there be any difficulties or disadvantages in keeping money in a bank? Think and write.",
//               "In what ways have cheques made exchange of money more convenient?",
//               "Only a part of the total deposits is kept as cash in the bank-safe. Why is this so and how does this benefit the bank?",
//               "If many loans are written off (that is, borrowers are not required to pay back the money), how will this affect the working of the bank?",
//               "Read the paragraphs under the heading ‘Types of Loans’ and answer the following question: What sort of loans are more common in your area?",
//               "Suppose, this year, the rainfall is poor and the crop yield is only half as much as was originally expected. Some argue that farmers should be asked to pay back only half the amount they have taken as loans. Others argue that full amount should be repaid, keeping in view the next year’s crop. In your opinion, what should the bank do and why?",
//               "People have to pay a higher interest on loans than the interest they receive on a fixed deposit for the same time-period. Why do you think this is so?",
//               "Do you feel that the loans taken from SHGs are helpful to the members? How?"
//             ],
//           },
//           {
//             chapter: "Chapter 8: Impact of Technology on Livelihoods",
//             subchapters: [],
//             questions: [
//               "Narahari created the following list of activities where technology is not used. Do you agree with him? Give reasons for your answer.",
//               "Describe how the situation of labour has changed in powerlooms and mills. Do you think this change is beneficial to the labourers or to the owner? Give reasons for your answer.",
//               "What are the advantages of using CHs? Who benefits the most? Why do farmers use CH?",
//               "Changes in technology lead to changes in job opportunities. Do you agree with this statement? Why?",
//               "Prabavathi feels that it is true that telephone technology has changed. She feels that new jobs are available only to educated persons. She also says that many people in India are not literate and hence modern technology is always biased to the educated. Do you agree with her? Give your reasons.",
//               "Read the paragraph under the heading ‘New Skills and New Jobs’ and answer the following: What are the newly created jobs for young people in your area?",
//               "Locate the following on the world map: A) England B) USA C) India",
//               "The people who live in forests and close to forests cannot afford to use the latest technology. What measures do you suggest for improving their lives?"
//             ],
//           },
//           {
//             chapter: "Chapter 9: Public Health and the Government",
//             subchapters: [],
//             questions: [
//               "Correct the false statements: a. Most rural areas have trained doctors. b. There are more facilities in private hospitals. c. Nutritious food helps in improving the health scenario. d. Some doctors involve in unnecessary treatments to make money.",
//               "Which of the following facilities will you include in basic public facilities: Which Jayamma uses? a. Drives Scooter to school. b. Sends her child to Anganwadi. c. Owns a television set. d. Has a mobile phone. e. Sends letters through post office.",
//               "Identify the sentences in this chapter that discuss the role of the government in providing public health.",
//               "Discuss which among the following measures will you consider as instances – OR not an instance of improving the healthcare. Write down the reasons for your answer: a. TB patients are given free medicines. b. In some villages clean drinking water facilities have been arranged. c. Shopkeepers sell medicines for cold, fever, headache etc. d. The government provides foodgrains in Fair Price shops.",
//               "Priyamvada runs a private hospital. This has more facilities than that are available in a government hospital. Satyanarayana works as a government doctor in a mandal. Can you write an imaginary dialogue between them about access to health services?",
//               "Health is not limited to providing medicines. In this chapter, there are other aspects of health that are mentioned (like clean water etc). Bring them together and write a paragraph about such aspects.",
//               "Conduct a survey on government welfare schemes on health. List the beneficiaries in your area.",
//               "List questions you wish to ask the Health worker of your area on prevention of contagious diseases in your area.",
//               "What type of services would be rendered by ‘108’ vehicles emergencies?"
//             ],
//           },
//           {
//             chapter: "Chapter 10: Landlords and Tenants under the British and the Nizam",
//             subchapters: [],
//             questions: [
//               "Make simple questions based on each section of the chapter and ask them to your classmates. Check if the answers are correct.",
//               "Compare the condition of tenant farmers before freedom and farmers of today. What differences do you find?",
//               "During the freedom movement, some of the zamindars supported the British. Why?",
//               "What role did the moneylenders play in the lives of the peasants? In what way were they supported by the British government?",
//               "What were the similarities and differences between the Doras of Telangana and the zamindars of Awadh?",
//               "How did the Ryotwari settlement also give rise to landlordism?",
//               "Why were famines caused under British rule? Do you think it was because of the failure of rains or floods?",
//               "In what way can a government help to prevent famines even in times of crop failure?",
//               "Imagine that you are giving a representation to a British Government Enquiry Committee. Write down the grievances of tenant farmers in the form of an appeal.",
//               "Locate the following in the map of India: 1. Ganjam 2. Awadh 3. Hyderabad 4. River Godavari",
//               "Read the paragraph under the heading ‘Countless Collections, Cesses and Payments’ and answer the following: How do we pay taxes nowadays?"
//             ],
//           },
//           {
//             chapter: "Chapter 11A: A National Movement - The Early Phase 1885-1919",
//             subchapters: [],
//             questions: [
//               "Correct the false statements: a. In the early phase of Indian National Congress, it included only people from Bombay. b. Indian industrialists began to establish companies in different parts of India. c. People in India expected that India would become democratic after the First World War.",
//               "Write an imaginary dialogue between the extremist and moderate activists of Indian National Congress in the context of their a) main demands; and b) mode of mobilization.",
//               "After reading this chapter, Mariamma thinks that the early phase of national movement was largely participated by educated Indians. And many of their ideas were of western origin. Would you agree with her? Give reasons.",
//               "Why was it important to understand the economic impact of British rule in India?",
//               "What do you understand by swadeshi? What were the major areas of its impact?",
//               "How did different parts of the country and people respond to the division of Bengal?",
//               "Locate the following in the map of India: 1. Calcutta (Kolkata) 2. Madras (Chennai) 3. Bombay (Mumbai) 4. Lucknow",
//               "Locate the following in the World map: 1. Britain 2. France 3. Russia 4. Germany",
//               "A few leaders like Gandhi, Tilak, Subhash Chandra Bose, and Bhagat Singh sacrificed their lives for the sake of our nation. What would have happened if they did not do so?",
//               "Are there any movements that have taken place in your region recently? Why?"
//             ],

//           },
//           {
//             chapter: "Chapter 11B: B National Movement - The Last Phase 1919-1947",
//             subchapters: [],
//             questions: [
//               "The national movement fought against all attempts of the British government to deny democratic freedom and rights of the people. Give examples of the rights which the government tried to curtail and the movement launched against it.",
//               "To what extent was the Salt Satyagraha successful in its objectives? Give your assessment.",
//               "Which of the following were parts of the national movement: a. Picketing shops that sell foreign clothes b. Hand spinning thread to weave clothes c. Burning imported clothes d. Wearing khadi e. All the above",
//               "What were the different events that led to the partition?",
//               "Read the first paragraph under the heading ‘The Happenings of 1922-1929’ and answer this, ‘Gandhiji called off the movement after the violence’. How do you support it?",
//               "Why did the Quit India Movement become popular?",
//               "Prepare a timeline chart of the Freedom Struggle from 1885 to 1947.",
//               "Did the fruits of sacrifices of many great leaders of the Independence movement reach all the people? Share your opinion."
//             ],
//           },
//           {
//             chapter: "Chapter 12: Freedom Movement in Hyderabad State",
//             subchapters: [],
//             questions: [
//               "Why do you think the literacy rate in Hyderabad state was lower than other princely states?",
//               "Describe the activities of the Andhra Maha Sabha for the promotion of education.",
//               "What were the demands of the Hyderabad State Congress and how many of them were fulfilled after 1948?",
//               "Do you think that the Telangana Armed struggle helped to end the rule of the Nizam? Give your reasons.",
//               "Read the paragraphs under the heading ‘Feudal System of the State’ and answer the following: Do you support the Feudal system of the Nizams? Why?",
//               "Many movements were led against the rulers in the past. Do you find any movements taken up nowadays? If yes, what are they?",
//               "What questions would you ask the librarian to know about the library of your area?",
//               "Locate the following places of Nizam’s rule on the India map: a) Aurangabad b) Warangal c) Raichur d) Gulbarga e) Hyderabad f) Khammam",
//               "Collect pictures of leaders of the Telangana armed struggle."
//             ],
//           },
//           {
//             chapter: "Chapter 13: The Indian Constitution",
//             subchapters: [],
//             questions: [
//               "‘Damanpur’ is ruled by its king based on a set of rules written down by the priest and ministers. He has also divided his kingdom into 16 provinces to which he appoints his officers as governors. Can we say that this is a democratic country? Is it a constitutional country? Give reasons for your answer.",
//               "Which of the following statement is correct? a. Constitution determines the relationship between people and government. b. Democratic countries generally contain a Constitution. c. To make a Constitution for a diverse country like India is an easy task. d. All are correct.",
//               "Read again the extracts from Nehru’s speech and answer the following: a. What pledge did he want the makers of the Indian Constitution to take? b. 'The ambition of the greatest man of our generation has been to wipe every tear from every eye.' Who was he referring to?",
//               "What values are embedded in the preamble of the Indian Constitution?",
//               "‘All are equal before law’– Explain this with examples.",
//               "Identify correct statements from the following: a. The Constitution defines powers of the Legislative houses. b. The Constitution cannot be changed under any circumstances. c. Ideals that are in the preamble are reflected in the design of institutions. d. Laws for the entire country are designed centrally.",
//               "On what occasions is equal justice seen? Mention with examples."
//             ],

//           },
//           {
//             chapter: "Chapter 14: Parliament and Central Government",
//             subchapters: [],
//             questions: [
//               "Why were the first elections difficult to conduct? List out as many reasons as you can.",
//               "Why do you think the elections need to be conducted free and fair?",
//               "For which of the following subjects can laws be made by the Members of Parliament, which by the members of state assembly, and which can be made by both: agriculture, railways, village hospitals, police, posts and telegraph, electricity, factories?",
//               "Name the two houses of the Parliament. Draw a table to show the similarities/differences between them on the following aspects: term, number of members, more or less powerful, election process, voting for the President.",
//               "In the Parliamentary Elections of 2009, no single party won a majority. How was the government formed? Discuss with the help of your teacher and write a paragraph.",
//               "Who are responsible for making the laws that are applicable for the entire country?",
//               "Do you think the parties should be made to include more women candidates for elections? Why?",
//             ],

//           },
//           {
//             chapter: "Chapter 15: Law and Justice- A case Study",
//             subchapters: [],

//             questions: [
//               "1. Correct the false statements: An F.I.R. is filed in the court. Being arrested by the police is equal to being punished. A bail is given on the basis of sureties. Supreme Court is the apex court in the country.",
//               "2. In the context of the differences between a criminal and a civil case, write a sentence each about (a) punishment and jail; (b) government lawyers; (c) filing FIR.",
//               "3. Can the Sessions or District court change the decision of a High Court? Why?",
//               "4. If someone is not satisfied with the decision of a Session’s Court or a High Court, what can be done?",
//               "5. What are the differences between the role of the S.H.O. and the magistrate?",
//               "6. In your view, what should have been the verdict in Ravi’s case?",
//               "7. A person confessed his crime at the police station and the police locked him in jail for 6 months. Is this the correct procedure? Explain your answer.",
//               "8. How should be the behaviour of elders towards children? Give your suggestions for good behaviour to ensure child safety?",
//               "9. Imagine a person is teasing you. Write a letter of complaint to the police stating all the particulars."
//             ]


//           },
//           {
//             chapter: "Chapter 16: Abolition of Zamindari System",
//             subchapters: [],
//             questions: [
//               "1. When laws are passed in the Assembly, there is much discussion on it from different points of view. What would have been the different points of view regarding the Land Reform Act in 1950s? Which point of view would have been stronger?",
//               "2. What would have been the points of view in 1970s when the Land Ceiling Acts were passed?",
//               "3. Do you think the peasant women gained from these reforms in any way? Give your reasons.",
//               "4. Is vetti prevalent still in your region? If it is there, prepare a report.",
//               "5. Imagine that you are a tenant who got ownership over land when the Land Reform Act was implemented. Write down your feelings.",
//               "6. Imagine that you are a landlord at the time of the Land Reform Act. Describe your feelings and actions at that time.",
//               "7. Many people feel that the land reform actually harmed a large number of tenants-at-will. Do you agree with this view? Give reasons.",
//               "8. Though the governments made effective laws, why has the land Ceiling Act not been implemented effectively?",
//               "9. Locate Pochampally village in Nalgonda district in Telangana map.",
//               "10. Read the first paragraph under the heading ‘Rural Poverty at the time of Independence’ and answer the following: Have the conditions improved now? In what way?"
//             ]

//           },
//           {
//             chapter: "Chapter 17: Understanding Poverty",
//             subchapters: [],
//             questions: [
//               "1. Which of the following statement/ statements in the context of poverty as chronic hunger is true? (AS1) a. having food only once a day b. having food below the required calorie c. person driving the harvester and person ploughing the field require same calorie of food d. person ploughing the field requires more calorie than shop owner e. hunger also affects the person’s immune system",
//               "2. Identify the major reasons for poverty as described in the chapter. (AS1)",
//               "3. What have been the major features of programmes like MNREGA and PDS? Which aspects of poverty do they try to address? Why are ration shops necessary? (AS4)",
//               "4. Read the first two paragraphs under the title 'The Struggle towards ‘the Right to Life’' on pages 201 and 202 and comment on them. (AS2)",
//               "5. Write a letter to your District Collector on the functioning of the P.D.S. programme in your village."
//             ],
//           },
//           {
//             chapter: "Chapter 18: Rights Approach to Development",
//             subchapters: [],
//             questions: [
//               "1. Correct the false statement: (AS1) a) Welfare functions of the government need to be monitored. b) People need to allow the elected representatives alone to monitor the implementation of programmes. c) Information officers can withhold the information for an indefinite period. d) By looking at various documents, one can identify if the programmes are implemented without malpractices.",
//               "2. Read the paragraph under the heading ‘Need for Information to Fight Corruption’ and answer the following: (AS2) Observe any of the government programmes and make a report of its implementation in your area.",
//               "3. Collect a few success stories regarding the Right To Information Act (RTI) from newspapers and read them out in your class. (AS3)",
//               "4. RTE is a boon to children. Explain. (AS1)",
//               "5. Do you need any more rights? Why? (AS4)",
//               "6. What information would you ask your Headmaster according to the Right to Information Act? (AS4)",
//               "7. How can you say that the Right to Information Act helps to face corruption? (AS6)"
//             ]
//           },
//           {
//             chapter: "Chapter 19: Social and Religious Reform Movements",
//             subchapters: [],
//             questions: [
//               "1. Do you agree with the following statement: 'Western education and Christian Missionaries influenced the Social and Religious reform movement in India'? Why? (AS2)",
//               "2. What was the importance of the printing press in the development of the reform movement? (AS1)",
//               "3. The main idea behind religious reform was to end complex rituals, worshipping of many gods and idol worship, and the purdah system. Do you think people have accepted these reforms? Explain. (AS2)",
//               "4. Why do you think people like Ramabai paid special attention to the condition of widows? (AS1)",
//               "5. Explain the role of Raja Rammohan Roy as a social reformer in India in the 19th century. (AS1)",
//               "6. What was the main concern of Sir Syed Ahmad Khan in promoting English Education? (AS1)",
//               "7. Different leaders thought of different ways in which the ‘untouchable’ castes could be made equals with all others. Make a table with the suggestions of leaders like Phule, Bhagya Reddy Varma, Narayana Guru, Ambedkar, and Gandhiji. (AS3)",
//               "8. Why does caste remain such a controversial issue today? What do you think was the most important movement against caste in colonial times? (AS4)",
//               "9. What did Ambedkar want to achieve through the temple entry movement? (AS1)",
//               "10. How in your opinion were the movements of social reform effective in ridding Indian society of social evils? What social evils do you find today? (AS4)",
//               "11. Create a pamphlet that reflects the issue of girls' education and its importance. (AS6)",
//               "12. What qualities of Social Reformers did you like? Why? (AS6)"
//             ]
//           },
//           {
//             chapter: "Chapter 20: Understanding Secularism",
//             subchapters: [],
//             questions: [
//               "1. List the different types of religious practices that you find being practiced in your neighbourhood. They could be different forms of prayers, worship of different gods, sacred sites, different kinds of religious music and singing. Does this indicate freedom of religious practice? (AS3)",
//               "2. Will the government intervene if some religious group says that their religion allows them to practise infanticide? Give reasons for your answer. (AS1)",
//               "3. Find out some examples of different views within the same religion. (AS1)",
//               "4. The Indian State both keeps away from religion as well as intervenes in religion. This idea can be quite confusing. Discuss this once again in the class using examples from the chapter as well as those that you might have come up with. (AS1)",
//               "5. Read the paragraph under the heading ‘What is Secularism?’ and comment on it. (AS2)"
//             ],
//           },
//           {
//             chapter: "Chapter 21: Performing Arts and Artistes in Modern Times",
//             subchapters: [],
//             questions: [
//               "1. Correct the false statements: (AS1) a. All dance forms emerged as part of devotion. b. Historically, artistes were supported by big Zamindars. c. Burrakatha was adopted to mobilise people. d. Today, Bharatanatyam is largely taught by nattuvanars.",
//               "2. Discuss the changes that have come about in the lives of folk artistes during the last 50 years. (AS1)",
//               "3. Do you think folk arts are declining? What loss do you think it will cause to our culture? (AS4)",
//               "4. Is it possible to orient folk arts to new requirements of modern life and revive them? (AS4)",
//               "5. What are the major changes that have taken place in Bharatanatyam dance since the days of Sadir? (AS1)",
//               "6. Who among the following were the supporters of devadasi system and those who opposed it and who wanted to reform it: (AS1) Balasaraswati, Rukmini Devi, Veeresalingam, Bhagya Reddy Varma, Krishna Iyer, Bangalore Nagaratnamma.",
//               "7. Why has it always been difficult for artistes to earn their livelihood by practicing their art? How can artistes be supported to stand on their own feet? (AS1)",
//               "8. Collect and prepare a table with the information about arts and dramas performed by the artistes of your area. (AS3)"
//             ]
//           },
//           {
//             chapter: "Chapter 22: Sports: Film and Print Media",
//             subchapters: [],
//             questions: [
//               "1. Find any three differences between drama and film. (AS1)",
//               "2. Do you think any story or poem in your language textbook could be made into a small film? Can you think of the various people you will need in making a film based on that? (AS1)",
//               "3. Some people argue 'Cinema is a powerful tool to transform the society'; others argue that 'It has a negative impact'. Whom do you agree with and why? (AS4)",
//               "4. What were the major themes discussed in early films? How is it similar or different from the films you have seen? (AS1)",
//               "5. How did newspapers play a major role in the freedom movement? (AS6)",
//               "6. What are the reasons for the disappearance of dramas now-a-days. (AS1)",
//               "7. Debate: Is cinema knowledge giving or life spoiling? Conduct a debate."
//             ]
//           },
//           {
//             chapter: "Chapter 23: Sports: Nationalism and Commerce",
//             subchapters: [],
//             questions: [
//               "1. Correct the false statements: (AS1) Colonial rulers promoted Cricket to be played between nations that were under their power. People adopted the game of cricket to become westernised. Indian villagers played cricket. Cricket was introduced in schools to teach good manners.",
//               "2. Write a short note on Gandhiji’s views on other sports and cricket. (AS1)",
//               "3. Give brief explanations for the following. (AS1) The Parsis were the first Indian community to set up a cricket club in India. The significance of the shift of the ICC headquarters from London to Dubai.",
//               "4. Find out the history of any one local sport. Ask your parents or grandparents about how this game was played in their childhood. Find out whether it is played in the same way now. Try and think of the historical forces that might account for the changes. (AS3)",
//               "5. How have advances in technology, especially television technology, influenced the development of contemporary cricket? (AS4)",
//               "6. Prepare a pamphlet on the consequences of commercialisation of cricket. (AS6)",
//               "7. Point out any five cricket playing countries on the world map. (AS5)",
//               "8. Debate: Does a Nation’s prestige increase by sports? Conduct a debate.",
//               "9. Project: Collect information about any game. Write the history of the game in the form of a report."
//             ]
//           },
//           {
//             chapter: "Chapter 23:Disaster Management",
//             questions: [
//               "1. Describe any disaster that occurred in your area or that you watched on T.V.? What measures could have been taken to reduce its impact. (AS4)",
//               "2. How could the disaster be prevented/managed? (AS1)",
//               "3. Discuss experiences of your elders with regard to the disasters and the management and write a note. (AS3)",
//               "4. Suggest the precautions to be taken by the people to face the disasters. (AS4)",
//               "5. Mention the effects of drought. (AS1)",
//               "6. Mention the occasions where the water is wasted and suggest the preventive measures. (AS6)",
//               "7. Make an album with the pictures of natural disasters. (AS3)"
//             ]
//           }
//         ],

//         English: [
//           {
//             chapter: "Chapter 1: Family",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Social Issues",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Humanity",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Science and Technology",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Education and Career",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Art and Culture",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Women Empowerment",
//             subchapters: [],
//           }
//         ]
//       },

//       '9': {
//         Mathematics: [
//           {
//             chapter: "Chapter 1: Real Numbers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Mathematics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: The Elements of Geometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Lines and Angles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Co-Ordinate Geometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Linear Equations in Two Variables",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Triangles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Quadrilaterals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Statistics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Surface Areas and Volumes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Areas",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Circles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Geometrical Constructions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Probability",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 15: Proofs in Mathematics",
//             subchapters: [],
//           }
//         ],

//         Physics: [
//           {
//             chapter: "Chapter 1: Matter Around Us",
//             subchapters: [],
//             questions: [
//               "1. Explain diffusion phenomena based on the states of matter. (AS1)",
//               "2. Mention the properties of solids. (AS1)",
//               "3. Mention the properties of liquids. (AS1)",
//               "4. What is fluid? (AS1)",
//               "5. Mention the properties of gases. (AS1)",
//               "6. Give two daily life situations where you observe diffusion. (AS1)",
//               "7. Mention works where we use compressibility in our daily life. (AS1)",
//               "8. Mention the situations where we use diffusion in our day-to-day life. (AS1)",
//               "9. How can we smell perfume sitting several meters away from the source? (AS1)",
//               "10. How do you prove that the speed of diffusion of ammonia is more than that of hydrochloric acid? (AS3)",
//               "11. Give examples of matter which will be available in different states. (AS1)",
//               "12. Draw the diagram showing the experimental arrangement to verify the speed of diffusion of two gases. (AS1)",
//               "13. We can't rejoin the broken chalk easily. Give reason. (AS1)",
//               "14. Does the space between the particles in the matter influence the speed of diffusion? Explain. (AS2)"
//             ]
//           },
//           {
//             chapter: "Chapter 2: Motion",
//             subchapters: [],
//             questions: [
//               "1. Distinguish between speed and velocity. (AS1)",
//               "2. Briefly explain about constant acceleration.",
//               "3. How can you say that a body is in motion? Is it a common property? (AS1)",
//               "4. Are average speed and average velocity the same? If not, explain why. (AS1)",
//               "5. How do you measure instantaneous speed? (AS1)",
//               "6. Explain acceleration with an example. (AS1)",
//               "7. What do you mean by acceleration? (AS1)",
//               "8. In the given distance vs time graphs showing motion of two cars A and B, which car moves faster? (AS1)",
//               "9. A body leaving a certain point 'O' moves with constant acceleration. At the end of the 5th second, its velocity is 1.5 m/s. At the end of the 6th second, the body stops and then begins to move backward. Find the distance traversed by the body before it stops. Determine the velocity with which the body returns to point 'O'. (27m, -9 m/s) (AS1)",
//               "10. A train of length 50m is moving with a constant speed of 10 m/s. Calculate the time taken by the train to cross an electric pole and a bridge of length 250m. (5s, 30s) (AS1)",
//               "11. Draw the distance vs time graph when the speed of a body increases uniformly. (AS5)",
//               "12. Draw the distance vs time graph when its speed decreases uniformly. (AS5)",
//               "13. What is the average speed of a Cheetah that sprints 100m in 4 seconds? What if it sprints 50m in 2 seconds? (25 m/s) (AS7)",
//               "14. A car travels at a speed of 80 km/h during the first half of its running time and at 40 km/h during the other half. Find the average speed of the car. (60 km/h) (AS7)",
//               "15. A particle covers 10m in the first 5 seconds and 10m in the next 3 seconds. Assuming constant acceleration, find the initial speed, acceleration, and distance covered in the next 2 seconds. (7/6 m/s, 1/3 m/s², 8.33m) (AS7)",
//               "16. When the velocity is constant, can the average velocity over any time interval differ from the instantaneous velocity at any instant? If so, give an example; if not, explain why. (AS2)",
//               "17. Draw a distance vs time graph for the story of the race between the rabbit and the tortoise. (AS5)",
//               "18. A man is 48m behind a bus that is at rest. The bus starts accelerating at 1 m/s², and at the same time, the man starts running with a uniform velocity of 10 m/s. What is the minimum time in which the man catches the bus? (8s) (AS7)"
//             ]
//           },
//           {
//             chapter: "Chapter 3: Laws Of Motion",
//             subchapters: [],
//             questions: [
//               "Why does dust come out of a carpet when it is beaten with a stick? (AS1)",
//               "Why is luggage kept on the roof of a bus tied with a rope? (AS1)",
//               "Why does a pace bowler in cricket run from a long distance before bowling? (AS1)",
//               "Illustrate an example of each of the three laws of motion. (AS1)",
//               "What is Static Inertia? (AS1)",
//               "What is Inertia of Motion? (AS1)",
//               "Define Momentum. (AS1)",
//               "What is Impulse? (AS1)",
//               "Define Impulsive Force. (AS1)",
//               "Two objects have masses of 8 kg and 25 kg. Which one has more inertia, and why? (AS1)",
//               "Calculate the momentum of a 6.0 kg ball moving at a velocity of 2.2 m/s. (Ans: 13.2 kg m/s²) (AS1)",
//               "Two people push a car for 3 seconds with a combined force of 200 N. Calculate the impulse provided to the car. (AS1)",
//               "If the car has a mass of 1200 kg, what will be its change in velocity? (Ans: 0.5 m/s) (AS1)",
//               "An object of mass 1.4 kg is initially at rest and moves 4 meters in 2 seconds after a force acts for 0.2 seconds. Find the magnitude of the force. (Ans: 14 N) (AS1)",
//               "Calculate the force applied on a 5 kg object moving at 10 m/s, reaching 25 m/s in 20 seconds. (Ans: 3.75 N) (AS1)",
//               "A hammer of mass 400 g moving at 30 m/s strikes a nail and is stopped in 0.01 s. Calculate the force of the nail on the hammer. (Ans: 1200 N) (AS1)",
//               "A man of mass 30 kg climbs a rope bearing 450 N. What is the maximum safe acceleration? (Ans: 15 m/s²) (AS7)",
//               "Calculate the stopping force for a 1500 kg vehicle decelerating at 1.7 m/s². (Ans: -2550 N in the opposite direction) (AS7)",
//               "Two ice skaters push off each other from rest. If one has a mass of 60 kg and a velocity of 2 m/s, calculate the velocity of the other skater with a mass of 40 kg. (Ans: 3 m/s in the opposite direction) (AS7)",
//               "Three identical blocks, each 10 kg, are pulled on a horizontal frictionless surface with a rope tension (F) of 30 N. Calculate the acceleration of each block and the tensions in the other ropes. (Ans: a = 1 m/s², T1 = 10 N, T2 = 20 N) (AS1)",
//               "If a fly collides with the windshield of a fast-moving bus, is the impact force experienced the same for both the fly and the bus? Why? (AS2)",
//               "Does the same acceleration affect both the fly and the bus? Why? (AS2)"
//             ]
//           },
//           {
//             chapter: "Chapter 4: Refraction of Light at Plane Surfaces?",
//             subchapters: [],
//             questions: [
//               "The speed of light in a diamond is 124,000 km/s. Find the refractive index of diamond if the speed of light in air is 300,000 km/s. (AS1)",
//               "If the refractive index of glass relative to water is 9/8, what is the refractive index of water relative to glass? (AS1) (Ans: 8/9)",
//               "The absolute refractive index of water is 4/3. What is the critical angle? (AS1) (Ans: 48.5°)",
//               "Determine the refractive index of benzene if the critical angle of benzene with respect to air is 42°. (AS1) (Ans: 1.51)",
//               "Explain the formation of a mirage. (AS1)",
//               "Explain the refraction of light through a glass slab with a neat ray diagram. (AS5)",
//               "Why do stars appear to twinkle? (AS7)",
//               "A light ray is incident on an air-liquid interface at 45° and is refracted at 30°. What is the refractive index of the liquid? For what angle of incidence will the angle between the reflected ray and refracted ray be 90°? (AS7) (Ans: 1.414, 54.7°)",
//               "In what cases does a light ray not deviate at the interface of two media? (AS7)",
//               "Place an object on the table and look at it through a transparent glass slab. It will appear closer to you. Draw a ray diagram to show the passage of light ray in this situation. (AS5)",
//               "Why does a diamond shine more than a glass piece cut to the same shape? (AS7)",
//               "Why is it difficult to shoot a fish swimming in water? (AS1)",
//               "Explain why a test tube immersed at a certain angle in a tumbler of water appears to have a mirror surface for a certain viewing position. (AS7)",
//               "When sitting at a campfire, objects beyond the fire appear to sway. Explain why."
//             ]

//           },
//           {
//             chapter: "Chapter 5: Gravitation",
//             subchapters: [],
//             questions: [
//               "How do you explain that an object is in uniform circular motion? (AS1)",
//               "Calculate the acceleration of the moon towards Earth's center. (AS1)",
//               "Explain the universal law of gravitation. (AS1)",
//               "Explain some situations where the center of gravity of a man lies outside the body. (AS1)",
//               "Where does the center of gravity of the Earth's atmosphere lie? (AS2)",
//               "Explain why a long pole is more beneficial to a tightrope walker if the pole has a slight bend. (AS7)",
//               "A car moves with a constant speed of 10 m/s in a circular path of radius 10m. The mass of the car is 1000 kg. How much is the required centripetal force for the car? (Ans: 10^4 N) (AS1)",
//               "What is the speed of an apple dropped from a tree after 1.5 seconds? What distance will it cover during this time? Take g = 10 m/s². (AS1) (Ans: 15 m/s; 11.25 m)",
//               "A ball is projected vertically up with a speed of 50 m/s. Find the maximum height, the time to reach the maximum height, and the speed at the maximum height (g = 10 m/s²). (AS1) (Ans: 125 m; 5 s; zero)",
//               "Two spherical balls of mass 10 kg each are placed with their centers 10 cm apart. Find the gravitational force of attraction between them. (AS1) (Ans: 10^4 G Newton)",
//               "Find the free-fall acceleration of an object on the surface of the moon if the radius of the moon and its mass are 1740 km and 7.4 x 10^22 kg respectively. Compare this value with the free-fall acceleration of a body on the surface of the earth. (AS1) (Ans: approximately 1.63 m/s²)",
//               "A ball is dropped from a height. If it takes 0.2 seconds to cross the last 6m before hitting the ground, find the height from which it is dropped. Take g = 10 m/s². (AS1) (Ans: 48.05 m)",
//               "The bob of a simple pendulum of length 1 m has a mass of 100 g and a speed of 1.4 m/s at the lowest point in its path. Find the tension in the string at this moment. Take g = 9.8 m/s². (AS1) (Ans: 1.176 N)",
//               "What path will the moon take if the gravitational interaction between the moon and Earth disappears? (AS2)",
//               "Can you think of two particles which do not exert gravitational force on each other? Why? (AS2)",
//               "Why is it easier to carry the same amount of water in two buckets, one in each hand, rather than in a single bucket? (AS7)",
//               "A man is standing against a wall such that his right shoulder and right leg are in contact with the surface of the wall along his height. Can he raise his left leg in this position without moving his body away from the wall? Why? Explain. (AS7)",
//               "An apple falls from a tree. An insect in the apple finds that the Earth is falling towards it with an acceleration 'g'. Who exerts the force needed to accelerate the Earth with this acceleration? (AS7)"
//             ]
//           },
//           {
//             chapter: "Chapter 6:  Is Matter Pure?",
//             subchapters: [],
//             questions: [
//               "Which separation techniques will you apply for the separation of the following? (AS1)",
//               "(a) Sodium chloride from its solution in water.",
//               "(b) Ammonium chloride from a mixture containing sodium chloride and ammonium chloride.",
//               "(c) Mixture of oil and water.",
//               "(d) Fine mud particles suspended in water.",
//               "Explain the following giving examples. (AS1)",
//               "(a) Saturated solution (b) Pure substance (c) Colloid (d) Suspension",
//               "Classify the following into elements, compounds, and mixtures. (AS1)",
//               "(a) Sodium (b) Soil (c) Sugar solution (d) Silver (e) Calcium carbonate (f) Tin (g) Silicon (h) Coal (i) Air (j) Methane (k) Carbon dioxide (l) Sea water",
//               "Determine the mass by mass percentage concentration of a 100g salt solution that contains 20g salt. (AS1) (Ans: 20%)",
//               "Calculate the concentration in terms of mass by volume percentage of the solution containing 2.5g potassium chloride in 50ml of potassium chloride (KCl) solution. (AS1)",
//               "How would you confirm that a colorless liquid given to you is pure water? (AS1)",
//               "Write the steps you would use for making tea. Use the words given below and write the steps for making tea: Solution, solvent, solute, dissolve, soluble, insoluble, filtrate, and residue. (AS7)"
//             ]
//           },
//           {
//             chapter: "Chapter 7: ATOMS, MOLECULES AND CHEMICAL REACTIONS",
//             subchapters: [],
//             questions: [
//               "Explain the process and precautions in verifying the law of conservation of mass. (AS-3)",
//               "A 0.24g sample of a compound of oxygen and boron was found by analysis to contain 0.144g of oxygen and 0.096g of boron. Calculate the percentage composition of the compound by weight. (AS-1)",
//               "In a class, a teacher asked students to write the molecular formula of oxygen. Shamita wrote the formula as O2 and Priyanka as O. Which one is correct? State the reason. (AS-1)",
//               "Lakshmi gives a statement: 'CO and Co both represent an element.' Is it correct? State reason. (AS-1)",
//               "Find out the chemical names and formulae for the following common household substances. (AS-1) a) Common salt b) Baking soda c) Washing soda d) Vinegar",
//               "Calculate the mass of the following: (AS-1) a) 0.5 mole of N2 gas. b) 0.5 mole of N atoms. c) 3.011 x 10^23 number of N atoms. d) 6.022 x 10^23 number of N2 molecules.",
//               "Calculate the number of particles in each of the following: (AS-1) a) 46g of Na b) 8g of O2 c) 0.1 mole of hydrogen.",
//               "Convert into moles: (AS-1) a) 12g of O2 gas. b) 20g of water. c) 22g of carbon dioxide.",
//               "Write the valencies of Fe in FeCl2 and FeCl3. (AS-1)",
//               "Calculate the molar mass of sulfuric acid (H2SO4) and glucose (C6H12O6). (AS-1)",
//               "Which has more number of atoms - 100g of sodium or 100g of iron? Justify your answer. (atomic mass of sodium = 23u, atomic mass of iron = 56u) (AS-1)",
//               "Write an equation for a decomposition reaction where energy is supplied in the form of heat/light/electricity. (AS-1)",
//               "How do chemical displacement reactions differ from chemical decomposition reactions? Explain with an example for each. (AS-1)",
//               "Name the reactions taking place in the presence of sunlight. (AS-1)",
//               "Why is respiration considered an exothermic reaction? Explain. (AS-1)",
//               "What is the difference between displacement and double displacement reactions? Write equations for these reactions. (AS-1)",
//               "Give two examples of oxidation-reduction reactions. (AS-6)",
//               "In the refining of silver, the recovery of silver from silver nitrate solution involves displacement by copper metal. Write the reaction involved. (AS-1)",
//               "Draw a diagram to show the experimental setup for the law of conservation of mass. (AS-5)",
//               "Why do we apply paint on iron articles? (AS-1)",
//               "What is the use of keeping food in airtight containers? (AS-6)",
//               "15.9g of copper sulfate and 10.6g of sodium carbonate react together to give 14.2g of sodium sulfate and 12.3g of copper carbonate. Which law of chemical combination is obeyed? How? (AS-1)",
//               "Carbon dioxide is added to 112g of calcium oxide. The product formed is 200g of calcium carbonate. Calculate the mass of carbon dioxide used. Which law of chemical combination will govern your answer? (AS-1)",
//               "Imagine what would happen if we did not have standard symbols for elements. (AS-2)"
//             ]
//           },
//           {
//             chapter: "Chapter 8: Floating Bodies",
//             subchapters: [],
//             questions: [
//               "Why do some objects float on water while others sink? (AS1)",
//               "Explain density and relative density, and write their formulae. (AS1)",
//               "Explain buoyancy in your own words. (AS1)",
//               "How can you find the relative density of a liquid? (AS3)",
//               "Draw the diagram of a mercury barometer.",
//               "A solid sphere has a radius of 2 cm and a mass of 0.05 kg. What is the relative density of the sphere? (AS1) [Ans: 1.49]",
//               "A small bottle weighs 20 g when empty and 22 g when filled with water. When it is filled with oil, it weighs 21.76 g. What is the density of oil? (AS1) [Ans: 0.88 g/cm^3]",
//               "An ice cube floats on the surface of water in a glass tumbler (density of ice = 0.9 g/cm^3). Will the water level in the glass rise when the ice melts completely? (AS1)",
//               "Find the pressure at a depth of 10m in water if the atmospheric pressure is 100kPa. [1Pa=1N/m^2] [100kPa = 10^5 Pa = 10^5 N/m^2 = 1 atm.] (AS1) [Ans: 198 kPa]",
//               "How can you appreciate the technology of making ships that float on water using materials that would normally sink? (AS6)",
//               "Can you make iron float on water? How? (AS3)",
//               "Where do you observe Archimedes' principle in daily life? Give two examples. (AS7)",
//               "Do all objects that sink in water also sink in oil? Give a reason. (AS1)"
//             ]
//           },
//           {
//             chapter: "Chapter 9: WHAT IS INSIDE THE ATOM?",
//             subchapters: [],
//             questions: [
//               "What are the three subatomic particles? (AS1)",
//               "What were the three major observations Rutherford made in the gold foil experiment? (AS1)",
//               "Give the main postulates of Bohr’s model of an atom. (AS1)",
//               "State the valencies of magnesium and sodium. (AS1)",
//               "Compare the subatomic particles electron, proton, and neutron. (AS1)",
//               "What are the limitations of J.J. Thomson’s model of the atom? (AS1)",
//               "Define valency by taking examples of nitrogen and boron. (AS1)",
//               "What is the main difference among the isotopes of the same element? (AS1)",
//               "If Z = 5, what would be the valency of the element? (AS2)",
//               "Sketch Rutherford’s atomic model. Why is Rutherford’s model of the atom called the planetary model? (AS5)",
//               "Cl⁻ has completely filled K, L & M shells. Explain it based on Bohr-Bury theory. (AS1)",
//               "Explain the efforts made by scientists to explain the structure of the atom by developing various atomic models. (AS6)"
//             ]
//           },
//           {
//             chapter: "Chapter 10: WORK AND ENERGY",
//             subchapters: [],
//             questions: [
//               "What is work according to science and write its units? (AS1)",
//               "Give few examples where displacement of an object is in the direction opposite to the force acting on the object. (AS1)",
//               "Write few daily life examples in which you observe conservation of energy. (AS6)",
//               "Draw a diagram to show conservation of mechanical energy in case of a free falling body. (AS5)",
//               "Give some examples for renewable sources of energy. (AS1)",
//               "A man carrying a bag of total mass 25kg climbs up to a height of 10m in 50 seconds. Calculate the power delivered by him on the bag. (AS1) (Ans: 49J)",
//               "A 10 kg ball is dropped from a height of 10m. Find (a) the initial potential energy of the ball, (b) the kinetic energy just before it reaches the ground, and (c) the speed just before it reaches the ground. (AS1) (Ans: 980J, 980J, 14m/s)",
//               "Calculate the work done by a person in lifting a load of 20 kg from the ground and placing it 1m high on a table. (AS1)",
//               "Find the mass of a body which has 5J of kinetic energy while moving at a speed of 2m/s. (AS1)",
//               "A cycle together with its rider weighs 100kg. How much work is needed to set it moving at 3 m/s? (AS1)",
//               "Which of the renewable sources of energy would you think suitable to produce in your native place? Why? (AS7)",
//               "What is potential energy? Derive an equation for gravitational potential energy of a body of mass ‘m’ at a height ‘h’. (AS1)",
//               "What is kinetic energy? Derive an expression for the kinetic energy of a body of mass ‘m’ moving at a speed ‘v’. (AS1)",
//               "When you lift a box from the floor and put it on an almirah, the potential energy of the box increases but there is no change in its kinetic energy. Is it a violation of conservation of energy? Explain. (AS7)",
//               "When an apple falls from a tree, what happens to its gravitational potential energy just as it reaches the ground? After it strikes the ground? (AS7)"
//             ]
//           }
//         ],

//         Biology: [
//           {
//             chapter: "Chapter 1: Cell Its Structure And Functions",
//             subchapters: [],
//             questions: [
//               "Differentiate between (A.S 1) (a) Plant cell and animal cell (b) Prokaryotic and eukaryotic cells.",
//               "What would happen to the cell if the nucleus is removed? Give two reasons to support your answer. (AS 1)",
//               "Lysosomes are known as suicidal bags of the cell. Why? (AS 1)",
//               "Why does a plant cell possess a large-sized vacuole? (AS 1)",
//               "“Cell is the basic unit of life,” explain the statement. (AS 1)",
//               "Who and when was 'The Cell Theory' proposed? When did they prepare it? What are its salient features? (AS 1)",
//               "What happens if the plasma membrane ruptures or breaks? (AS 2)",
//               "What would happen to the life of a cell if there was no Golgi complex? (AS 2)",
//               "When you are observing the nucleus of a cheek cell in the laboratory, what precautions do you take?",
//               "Read the chapter carefully, collect the information about the functions of different cell organelles and make a table which contains serial number, cell organelle, and their function. Don’t forget to write your specific findings below the table. (AS 4)",
//               "Prepare a model of a plant cell or animal cell with locally available materials. (AS 5)",
//               "Prepare a temporary mount of any leaf peel, observe the stomata, and draw their picture. Write a short note on the same. (AS 5)",
//               "Draw the typical animal cell and label its parts.",
//               "Look at the following cartoon of a cell. Find out the functions of cell organelles. (AS 5)",
//               "How do you appreciate the organization of cells in the living body? (AS 6)",
//               "If the organization of cells is destroyed due to physical and chemical influences, what will happen? (AS 6)",
//               "How could you appreciate the function of a tiny cell in the large body of an SCERT organism? (AS 6)"
//             ]
//           },
//           {
//             chapter: "Chapter 2: Plant Tissues",
//             subchapters: [],
//             questions: [
//               "Define the terms: Tissue, Meristematic tissue, Dermal tissue.",
//               "Differentiate the following: Meristematic tissue and Ground tissue, Apical meristem and Lateral meristem, Parenchyma and Collenchyma, Sclerenchyma and Parenchyma, Xylem and Phloem, Epidermis and Bark.",
//               "Name the following: Growing tissue, which causes growth in the length of the plant; Growing tissue, which causes growth in the girth of the plant; Large air cavities in aquatic plants; Food material in parenchyma; Pores essential for gaseous exchange and transpiration.",
//               "Compare and contrast the following: Xylem and Phloem, Meristematic tissue and Dermal tissue.",
//               "Give reasons to the following: Xylem is a conductive tissue; Epidermis gives protection.",
//               "Though Chlorenchyma, Arenchyma, and storage tissues are parenchymatous in nature, why do they have different (specific) names?",
//               "Describe the functions of Meristem, Xylem, and Phloem.",
//               "If you want to know more about tissues in plants, what questions are you going to ask?",
//               "“Bark cells are impervious to gases and water.” What experiment will you perform to prove this?",
//               "Collect information about how dermal tissues help the plants. Display it on a wall magazine.",
//               "Draw and label the diagram of the T.S. of stem.",
//               "While observing internal parts of plants, how do you feel about its structure and functions?"
//             ]
//           },
//           {
//             chapter: "Chapter 3: Animal Tissues",
//             subchapters: [],
//             questions: [
//               "What do you understand by the term tissue?",
//               "What is the specific function of the cardiac muscle?",
//               "Differentiate between striated and unstriated muscles based on their shape and location in the body.",
//               "Name the following: a) Tissue that forms the inner lining of our mouth, b) Tissue that connects muscle to bone in humans, c) Tissue that transports food in animals, d) Tissue that stores fat in our body, e) Connective tissue present in the brain.",
//               "Identify the types of tissue in the following: Linings of the organs; skin, bone, internal lining of kidney tubule.",
//               "If you touch at the elbow, you get a shock-like feeling. Why?",
//               "Why is blood called a connective tissue?",
//               "What happens if the platelets are not present in the blood?",
//               "Show the difference between the three types of muscle fibers with diagrams.",
//               "Write the procedure to identify your blood group with the help of a kit.",
//               "Collect old blood reports of your friends or relatives and prepare a project report on the contents of the blood.",
//               "Draw a neatly labeled diagram of a neuron.",
//               "Ramu felt weak. Ramu’s father took him to the hospital. The doctor advised a blood test. The report says that he does not have the required levels of hemoglobin. What are its ill effects?",
//               "How is a blood test useful to diagnose diseases? Explain with a daily life situation."
//             ]
//           },
//           {
//             chapter: "Chapter 4: Plasma Membrane",
//             subchapters: [],
//             questions: [
//               "The structure which controls the entry and exit of the materials through the cell is: (a) Cell wall, (b) Cell membrane, (c) Both, (d) None of them.",
//               "Fill in the blanks: (a) The smell of flowers reaches us through the process of …………….., (b) The MIC gas of Bhopal tragedy was spread throughout the city through the process of …………….., (c) Water enters the potato osmometer due to a process called …………….., (d) The fresh grape wrinkles, if kept in salt water because of ……………..",
//               "What do you mean by permeability of membrane? Explain with a suitable example.",
//               "If the dried vegetables are kept in water, they become fresh. What is the reason?",
//               "Name the process by which we can get fresh water from seawater.",
//               "What will happen to a marine fish if kept in a freshwater aquarium? Support your answer with reasons.",
//               "Why do doctors administer saline only, not distilled water?",
//               "What will happen if a 50% glucose solution is injected intravenously (into a vein)?",
//               "What will happen if cells do not have the ability of permeability?",
//               "What are your observations in experiments to know about diffusion?",
//               "Discuss with your friends and write a list of incidences where diffusion occurs.",
//               "Draw a flowchart showing the different stages in doing the experiment with an egg.",
//               "You have purchased a coconut in the market. By shaking it, you found that there is less water in the coconut. Can you fill the coconut with water without making a hole in it?",
//               "How is diffusion useful in everyday life?",
//               "Give examples of three daily life activities in which osmosis is involved."
//             ]

//           },
//           {
//             chapter: "Chapter 5: Diversity In Living Organism",
//             subchapters: [],
//             questions: [
//               "Variations lead to diversity in living organisms. State reasons.",
//               "What was the basis for early classifications?",
//               "What are the advantages of classifying organisms?",
//               "How do monocots differ from dicots?",
//               "Which phylum do I belong to? (a) My body is made of pores. I live in water. I do not have a backbone.",
//               "Which phylum do I belong to? (b) I am an insect. I have jointed legs.",
//               "Which phylum do I belong to? (c) I am a marine animal with spiny skin. My body is radially symmetrical.",
//               "Write some common characteristics of Pisces, Reptilia, and Aves.",
//               "Explain how animals in Vertebrata are classified into further subgroups.",
//               "What is the need for classification? What questions will you ask?",
//               "Platypus or Echidna is a group that forms a link between reptiles and mammals. Think and write about some characteristic features that these would have.",
//               "How can you appreciate the effort of scientists in classifying a wide range of organisms?"
//               ,



//             ]
//           },
//           {
//             chapter: "Chapter 6: Sense Organs",
//             subchapters: [],
//              questions : [
//               "We usually do not see bright colours in dim light.",
//               "Removal of wax layer too often, will raise incidence of ear infection.",
//               "During severe cough and cold we don't get the taste of food.",
//               "While cutting onions our tears start flowing.",
//               "The rationale behind seeing is just the impression of the image in the retina.",
//               "Ear functions only to hear.",
//               "Iris patterns are like finger prints used in identifying individuals.",
//               "Saliva helps the taste buds in taste sensation.",
//               "We are not able to adapt to sensations.",
//               "Rods and cones.",
//               "Iris and Pupil.",
//               "Pinna and Tympanum.",
//               "Nasal cavity and Ear canal.",
//               "When we see an object, a real inverted image is formed on the retina.",
//               "The sound waves, collected by the pinna are changed as vibrations.",
//               "We move our hand away from a hot object.",
//               "A pungent odour makes us close our nose.",
//               "Choroid layer provides ……………… to the eye.",
//               "The relationship between the tongue and ……………… is more.",
//               "Iris pattern is used for individual ………………",
//               "Area where optic nerve leaves the eye is called the ………………",
//               "The ear drum is the ……………….",
//               "This vitamin is essential for the health of the eye. a) Vitamin ‘A’ b) Vitamin ‘B’ c) Vitamin ‘C’ d) Vitamin ‘D’",
//               "Sensation is a complex pathway involving - a) Sense organs b) Sense organs and nerve impulses c) Sense organs, nerve impulses, brain d) Brain and nerve impulses",
//               "The sound waves if not focussed by external pinna and ear canal will result in a) Hearing several types of sound loudly b) Not hearing anything c) Slight hearing d) Not being able to make out the type and origin of sound",
//               "The muscles of the eyeball of a person become non-functional, the invariable effect would be a) The person fails to close eyes b) Fails to move eye c) Feels pain in the eye d) The nerves reaching the muscles become nonfunctional.",
//               "The tongue of a person is exposed to a high salty taste then: a) The person learns to taste salty things better b) Loves tasting salty things c) Hates tasting salty things d) Fails to taste a less salty thing just after the exposure.",
//               "What happens if our skin loses its sensory nature?",
//               "Form a group with five students in your class and collect information on eye diseases and their characteristics by talking with an ophthalmic assistant.",
//               "Draw and label the diagrams, showing the structure of the (1. Eye 2. Ear 3. Tongue)",
//               "How would you pay concern towards disabled people who are lacking sensory organs?",
//               "How do you appreciate the functions of sensory organs which helps us to enjoy the beauty of nature?",
//               "Sagar is not able to listen to things properly. Guess what would happen to SCERT him. What suggestions would you like to give him?",
//               "Draw a block diagram of water resources in your village.",
//     "What threats to nature do chemical fertilizers, pesticides, insecticides, and herbicides pose?",
//     "Organic manure is helpful to biodiversity. How do you support this statement?",
//     "Spraying high doses of pesticides is hazardous to biodiversity and crop yielding. How can you support this statement?",
//     "What are the adverse effects of using high yielding varieties of seeds?",
//     "How would you educate a farmer to use organic fertilizers instead of chemical fertilizers?",
//     "Venkatapuram village is in a drought-prone area. Somaiah wants to cultivate sugar cane in his fields. Is it beneficial or not? What questions will you ask him to convey your opinion?",
//     "Natural pest controlling methods are useful to biodiversity. Comment on this."
//           ]
          
//           },
//           {
//             chapter: "Chapter 7: Animal Behaviour",
//             subchapters: [],
//             questions : [
//               "What is the advantage of reflex action? (a) It has to be learned (b) It happens differently each time (c) It does not have to be learned (d) None of them",
//               "If a rat is given a mild electric shock when it goes to a certain part of its cage, it eventually avoids going there. This is because of- (a) Imitation (b) Conditioning (c) Instinct (d) Imprinting",
//               "Describe all types of behaviour discussed in the lesson with appropriate examples.",
//               "Differentiate between (a) Imitation and Imprinting (b) Instinct and Conditioning",
//               "How human behaviour is different from the behaviour of other animals? Explain with an example.",
//               "Observe ants going in a line. Ask your teacher how they communicate and write a note on this.",
//               "\"Understanding of animal behaviour creates a positive attitude towards animals.\" How do you support this statement? Explain with suitable examples.",
//               "Look at this picture. How do you feel about the sibling care nature of animals? Have you ever seen such situations in your surroundings? Explain in your own words."
//           ]
          
//           },
//           {
//             chapter: "Chapter 8: Challenges In Improving Agricultural Products",
//             subchapters: [],
//             questions : [
//               "Suggest some ways through which our country could increase the production of rice to meet at least global limits.",
//               "How are biofertilizers more beneficial as compared to chemical fertilizers?",
//               "(a) Find out the adverse effects of chemical fertilizers that are used for growing the high yielding variety of crops? (b) Can high yielding varieties be grown without them as well? How?",
//               "What are the essential measures that a farmer needs to take before sowing the seeds of a crop?",
//               "Suppose you had a farm in a drought-stricken area of your state; what crops would you grow and how?",
//               "What measures will you take to save your field from the seasonal outburst of insects?",
//               "A farmer had been using a particular insecticide for a long time. What consequences will it have on- a) insect population b) soil ecosystem?",
//               "Ramaiah has soil testing done in his field. The percentages of nutrients are 34-20-45. Is it suitable for cultivating sugar cane crop? Which crops can be cultivated without using pesticides in Ramaiah’s field?",
//               "Observe the fields in your surroundings and collect the information from farmers about the process to remove weeds.",
//               "Make a list of the major weeds in your area. Find out the different weeds that grow along with different crops in your area."
//           ]
//           },
//           {
//             chapter: "Chapter 9: Adaptations In Different Ecosystems",
//             subchapters: [],
//            questions : [
//               "Draw a block diagram of water resources in your village.",
//               "What threats to nature do chemical fertilizers, pesticides, insecticides, and herbicides pose?",
//               "Organic manure is helpful to biodiversity. How do you support this statement?",
//               "Spraying high doses of pesticides is hazardous to biodiversity and crop yielding. How can you support this statement?",
//               "What are the adverse effects of using high yielding varieties of seeds?",
//               "How would you educate a farmer to use organic fertilizers instead of chemical fertilizers?",
//               "Venkatapuram village is in a drought-prone area. Somaiah wants to cultivate sugar cane in his fields. Is it beneficial or not? What questions will you ask him to convey your opinion?",
//               "Natural pest controlling methods are useful to biodiversity. Comment on this.",
//               "In the chapter on ecosystem, we had studied about the mangrove ecosystems. In what way is it different from the marine ecosystem?",
//               "How do frogs protect themselves from cold and heat?",
//               "The Murrel (korramatta) and Rohu are fishes found in rivers. Will they be able to live in the mangrove forest ecosystem? Give reasons for your answer.",
//               "Collect some aquatic plants - cut the leaves and stems. Observe them under a microscope and record your observations like presence/absence of air spaces, etc., and answer the below. (a) Why do they float on water? (b) Which factors help to float? (c) Draw a diagram of what you have observed under the microscope.",
//               "Visit a nearby pond or a lake. Record the organisms you have observed and their adaptations.",
//               "Collect information on one lake from the internet and prepare a table of organisms adapted at different zones.",
//               "Are there any rivers meeting in the Bay of Bengal in the mangrove forest ecosystem? Collect information and make a note on them.",
//               "Draw a lake showing different zones. Why are they called so?",
//               "Amphibians are wonderful creatures on the earth. How do you appreciate their adaptation?",
//               "How do you appreciate the processing protection of pebble plants from their enemies?",
//               "Some animals and plants survive only in certain conditions. Nowadays, humans activities cause damage to these conditions. What do you think about this?"
//           ]
          
//           },
//           {
//             chapter: "Chapter 10: Soil Pollution",
//             subchapters: [],
//             questions : [
//               "Define soil pollution.",
//               "Chemical fertilizers are useful to crops. In which way do they cause environmental pollution?",
//               "Describe environmentally friendly methods to profitably dispose of human waste and cattle waste.",
//               "What steps can be taken to reduce pollution due to particulate matter from industries?",
//               "What is medical waste? Why is it called hazardous waste? What is the safe way to dispose of medical waste?",
//               "What farm practices impact soil? Do they impact soil in a positive or negative way?",
//               "Rank the positive impact agricultural practices in order in which you think they should be used for the benefit of your farm.",
//               "What are the three main physical properties of soil? What effects do these have on the plants?",
//               "What is pH? What is its range? What are the negative impacts if the pH of soil is too low or too high?",
//               "What is soil fertility? What steps are to be taken to improve soil fertility?",
//               "What is organic matter? Why is it important to plants?",
//               "What are the factors affecting organic matter levels in soil? How can this level of organic matter be increased?",
//               "What is solid waste? Explain best practices for solid waste management.",
//               "What is bioremediation? How does it help in controlling soil pollution?",
//               "How would soil texture affect the uptake of nutrients from soil? What would be its impact on crop production?",
//               "Why is soil conservation important to us? What will happen if no preventive measures are taken?",
//               "Name 5 living things that live in soil. What do these things do to affect the soil?",
//               "Prepare a flow chart to describe soil pollution, its causes, and methods of control.",
//               "Look at the following logo. What does it mean?",
//               "\"Plastic bags are a big environmental nuisance\" - How do you support this statement?",
//               "What soil problems do you find in your area? Prepare a list of those problems and suggest a method for each of them to control those problems.",
//               "Rank the negative impact practices in your area in the order in which you think they should be eliminated.",
//               "Ramu said soil health is important. How can you support him?"
//           ]
          
//           },
//           {
//             chapter: "Chapter 11: Bio-Geo Chemical Cycles",
//             subchapters: [],
//            questions : [
//               "What is the importance of different biogeochemical cycles in nature?",
//               "What emissions from human activities lead to ozone depletion? What are the principal steps in stratospheric ozone depletion caused by human activities?",
//               "Why could we say that biogeochemical cycles are in 'balance'?",
//               "If all the vegetation in the pond died, what effects would it have on the animals? Why?",
//               "Write an experiment to prove the greenhouse effect on temperature.",
//               "Go to a nearby pond and observe organisms living in the pond and biodegradable substances mixing in the water. How do they affect those organisms? Write your observation.",
//               "Describe the interdependence of biotic and abiotic components by taking the nitrogen cycle as an example. Draw the nitrogen cycle.",
//               "Write an essay explaining the importance of the ozone layer.",
//               "\"Burning of fossil fuels is a concern for scientists and environmentalists\" - How do you support this statement?",
//               "\"CO2 plays a vital role in the plant life process\" - Comment.",
//               "How do human activities cause an imbalance in biogeochemical cycles?",
//               "List three ways we, as humans, have affected the water cycle.",
//               "Prepare an article for a newspaper on the topic \"How human activities affect the environment\".",
//               "Prepare slogans on the greenhouse effect and read them out at the school assembly.",
//               "Draw the oxygen, water, and nitrogen cycles."
//           ]          
//           }
//         ],

//         Social_Science: [
//           {
//             chapter: "Chapter 1: Our Earth",
//             subchapters: [],
//             questions : [
//               "Look at the map of India in an Atlas and identify the latitude and longitude for the following places: Kanyakumari _______ and ______, Imphal _______ and ___________, Jaisalmer ____________ and ________, Pune _____________ and _____________, Patna _____________ and ________________.",
//               "Identify the words that match with Latitude and Longitude (parallel lines, vertical lines, horizontal lines).",
//               "Look at the world map of time zones on the next page. a) If you travel from New Delhi to Paris, which time zone are you moving to? ______ b) If you are travelling from Hyderabad to Tokyo, which time zone are you moving to? __________.",
//               "Why is it difficult to study the formation of the earth and its structure?",
//               "Read the paragraph under the heading 'Internal structure of the earth' and answer the question. How can you say that the earth is still very active?",
//               "What is a grid and how does it help us?",
//               "Differentiate between a) Local and Standard time b) Equator and Prime meridian.",
//               "If every state follows its local time, what problems would arise?",
//               "With the help of your teachers, find out the standard meridian of the given countries: 1. Nepal 2. Pakistan 3. Bangladesh 4. England 5. Malaysia 6. Japan.",
//               "Make a thought-provoking poster on earth’s protection."
//           ]
          
//           },
//           {
//             chapter: "Chapter 2: The Natural Realms of the Earth -Lithosphere",
//             subchapters: [],
//            questions : [
//               "Find the odd one out in the context of lithosphere and give reasons for your choice: Byson gorge; Grand canyon; Ozone; Thar desert.",
//               "How is the lithosphere formed?",
//               "How are the continental plates formed and how are they eventually destroyed?",
//               "List out the landforms formed due to river work.",
//               "Draw a table as given below and fill in information. Write a small paragraph to explain the similarities and differences that you can think of in the context of earth’s external changes.",
//               "Why are glaciers not found in your surroundings?",
//               "How are beaches formed and name some beaches.",
//               "How is the human lifestyle responsible for the extension of deserts?",
//               "Find out the order of the landforms for the following: Draw the map of world plates by observing map 2.",
//               "Read the paragraph under the title 'Erosion' on page 20 and comment on it."
//           ]
          
//           },
//           {
//             chapter: "Chapter 3: Hydrosphere",
//             subchapters: [],
//            questions :[
//               "Find the odd one out and give an explanation for your choice. (i) a) evaporation b) condensation c) salination d) precipitation (ii) a) tectonics b) centrifugal force c) solar energy d) precipitation.",
//               "Correct the false statements: a) Ocean trenches can be located near the continents. b) Relief features of the oceans are like plains. c) Most salt in the seas is washed into it from land over centuries. d) Temperature of ocean water remains the same across the globe.",
//               "Do you think that the description of blue planet is accurate? Describe any one way in which your activity impacts its oceans.",
//               "Why are there differences in the salinity of oceans?",
//               "How is human life dependent upon oceans?",
//               "Observe map 1 on page 35 and write down the names of a few warm and cold currents.",
//               "Read the paragraph 'Ocean as a Resource' on page 33 and comment on it."
//           ]
          
//           },
//           {
//             chapter: "Chapter 4: Atmosphere",
//             subchapters: [],
//             questions : [
//               "Explain the composition of the atmosphere.",
//               "Discuss the structure of the atmosphere along with a diagram.",
//               "Differentiate weather and climate.",
//               "Compare and contrast convectional and orographic rainfall.",
//               "Describe the distribution of rainfall across the world.",
//               "How do climatic changes influence human life?",
//               "Explain relative humidity.",
//               "Why does the amount of water vapour decrease rapidly with altitude?",
//               "What is the Coriolis effect? Explain its effects.",
//               "Identify the location of the given local winds in the world map: a) Chinook b) Loo c) Simoon d) Yoma e) Norwester f) Mistral g) Puna h) Pampero.",
//               "Read the paragraph under the title ‘Effects of Planetary Winds’ on page 43 and comment on it."
//           ]
          
//           },
//           {
//             chapter: "Chapter 5: Biosphere",
//             subchapters: [],
//             questions :[
//               "Life itself constitutes a separate sphere called ‘Biosphere’. Explain.",
//               "Why has an ecological crisis occurred in modern times? What are its effects?",
//               "Write about the different kinds of forests and climatic conditions of their existence.",
//               "How can we protect natural resources?",
//                "Locate the following countries in the world map: a) New Zealand b) Brazil c) Australia d) North America e) China f) India.",
//     "Read the paragraph under the title ‘In addition to ...... and soil’ on page 57 and comment on it."

//           ]
//           },
//           {
//             chapter: "Chapter 6: Agriculture in India",
//             subchapters: [],
//            questions : [
//               "Name one important beverage crop and specify the geographical conditions required for its growth.",
//               "The land under cultivation has been reducing day by day. Can you imagine its consequences?",
//               "On an outline map of India, show the millet producing areas.",
//               "What is Minimum Support Price (MSP)? How is it being implemented in your area?",
//               "Explain all the ways in which the Indian government supported the Green Revolution.",
//               "Do you think it is important for India to be self-sufficient in food grains production? Discuss.",
//               "How is dry land agriculture different from irrigated agriculture?",
//               "Can you recall incidents such as pesticides being found in soft drinks? How is this related to the use of pesticides? Discuss.",
//               "Why are chemical fertilizers used in new farming methods? How could use of fertilizers make soil less fertile? What are the alternative ways of enriching soil?",
//               "How has the Green Revolution in some areas resulted in short-term gains but long-term losses to farmers?",
//               "What could be the effects of foreign trade on farmers’ income?",
//               "In earlier classes, we had studied about land distribution. How does the following image reflect this idea? Write a paragraph about this in the context of Indian agriculture.",
//               "Read the paragraph under the title ‘Fertilizer Problems’ on page 70 and comment on it.",
//               "Observe the map given on page 74 and locate the States where paddy is grown in the outline map of India."
//           ],
          
//           },
//           {
//             chapter: "Chapter 7: Industries in India",
//             subchapters: [],
//             questions : [
//               "Why did the government take up the responsibility to set up basic goods industries?",
//               "Why are industries located in specific areas?",
//               "What are the basic goods industries? How are they different from consumer goods industries?",
//               "Give a list of towns/areas in which some conventional mineral resources are found and identify the possible industries which can be set up.",
//               "Why did the government in 1990s allow private industries in many areas which were earlier restricted only to government?",
//               "What is the impact of industrial development on employment generation and on revenue?",
//               "‘Industrial activities increase environmental problems.’ Discuss.",
//               "Write a few slogans on the prevention of environmental pollution.",
//               "Read the paragraph 3 on page 83 and comment on it.",
//               "Observe the map given on page 95 and locate the iron and steel plants in the outline map of India."
//           ],
          
//           },
//           {
//             chapter: "Chapter 8: Service Activities in India",
//             subchapters: [],
//             questions : [
//               "What is meant by the term ‘service activities’?",
//               "List five service activities and give your reasons for why they cannot be considered as either agricultural or industrial activities.",
//               "How can service activities help in the overall development of a country?",
//               "How are agricultural and industrial activities related to services?",
//               "‘The growth of service sector is sustainable and can make India a rich country’. Do you agree with this statement? Elaborate.",
//               "Why are service sector activities becoming important?",
//               "Service activities cannot expand beyond a level without agriculture and industries. Explain.",
//               "How can service sector reduce educated unemployment in India?",
//               "Is there any migration of labourers from your area? Find out the reasons for the migration.",
//               "Read the 9th paragraph of this chapter ‘Working People engaged’ and answer the following: What are the service activities required for agriculture and industries?",
//               "Observe the map given on page 104. Locate the software technology parks of our country in the outline map of India."
//           ],
          
//           },
//           {
//             chapter: "Chapter 9: Credit in the Financial System",
//             subchapters: [],
//             questions : [
//     "Most of the credit needs of the poor households are met through informal sources. The dependence of richer households on informal credit is less. Do you agree? Use the data given on page 114 to support your answer.",
//     "How are the high interest rates on loans harmful?",
//     "What is the basic idea behind the SHGs for the poor? Explain.",
//     "Talk to a banker and find out the different purposes for which people in urban areas generally take loans.",
//     "What is the difference between bank loans taken directly and through SHG?",
//     "Read paragraph 3 under the heading ‘Self Help Group for the Poor’ and answer the question: How are SHGs working in your area?",
//     "What are the services rendered by the banks in fulfilling the needs of farmers?"
// ]

//           },
//           {
//             chapter: "Chapter 10: Prices and Cost of Living",
//             subchapters: [],
//             questions :[
//               "Why is there a need to regulate prices?",
//               "How are prices fixed by a seller/producer?",
//               "Differentiate the cost of living from the standard of living.",
//               "Who is affected the most with the increase in cost of living? Why?",
//               "Which groups can still get higher incomes whenever there is inflation?",
//               "How is Wholesale Price Index different from Consumer Price Index?",
//               "How is food inflation different from Consumer Price Indices?",
//               "What are the uses of the CPI?",
//               "Write any five issues that are considered while measuring CPI.",
//               "Read the sixth paragraph under the heading ‘Role of Government in Regulating Prices’ and answer the question: How does the APM affect the government revenue? Discuss.",
//               "Write a letter to your Tehsildar on proper maintenance of Public Distribution System by indicating your suggestions."
//           ]
          
//           },
//           {
//             chapter: "Chapter 11: The Government Budget and Taxation",
//             subchapters: [],
//             questions : [
//               "Why does the government need a budget? Why does the budget talk of taxes?",
//               "What is the difference between income tax and excise duty?",
//               "You are expected to pay taxes on steel, matches, clocks, cloth, iron; a tax increase on which of these would affect the prices of other commodities the most and why?",
//               "Ordinary food items, such as grain, pulses, oil are used by all. Then why is it said that imposing tax on them will have a greater effect on the poor?",
//               "Tax on income or tax on commodities; which of the two affects the rich more and which affects the poor more? Explain with reasons.",
//               "How would VAT reduce the evasion of taxes on goods?",
//               "What is the difference between Excise duty and Customs duty?",
//               "What are the possible reasons for the hike in bus fares?",
//               "Read the paragraph under the heading ‘Direct Taxes’ (Income Tax is charged only for ...) and answer the following: Why do high income earners pay more tax?",
//               "What is the effect of black money on our economy?"
//           ]
          
//           },
          
//           {
//             chapter: "Chapter 12: Democratic and Nationalist Revolutions: 17th &18th centuries",
//             subchapters: [],
//             questions : [
//               "Identify the name of the country in the context of the following statements: (UK, USA, and France)",
//               "Revolution where parliament system was established.",
//               "Country where king continues to play some role even after revolution.",
//               "Country that had to war against another in order to establish its democracy.",
//               "The Bill of Rights was adopted.",
//               "Overthrow of the monarchy was led by the peasants.",
//               "The Declaration of Rights of Man and Citizen was adopted.",
//               "What were the main ideas of social thinkers, which were significant to the establishment of new forms of governments? How did they gain popularity?",
//               "Describe the circumstances leading to the outbreak of revolutionary protests in France.",
//               "Would you agree with the view that the message of universal rights was beset with contradictions? Explain.",
//               "What made the American colonists raise the slogan ‘No Taxation without Representation’?",
//               "How do you understand women’s role in the French Revolution?",
//               "Read the paragraph under the title ‘The Reign of Terror’ of page 158 and comment on it.",
//               "Briefly explain the process of the unification of Germany.",
//               "Locate England, France, Prussia, Spain, and Austria on the Map of Europe."
//           ]
          
//           },
         
//           {
//             chapter: "Chapter 13: Industrialisation and Social Change",
//             subchapters: [],
//             qQuestions : [
//               "Write two sentences each on the following aspects in the context of the Industrial Revolution:",
//               "a) Technology",
//               "b) Financing and money",
//               "c) Agriculture revolution",
//               "d) Transport systems",
//               "What do you think is special about inventions happening during the Industrial Revolution?",
//               "How were the lives of different classes of British women affected by the Industrial Revolution?",
//               "What were the relative advantages of canal and railway transportation?",
//               "Locate the places where iron and textile industries are mainly concentrated in England during the Industrial Revolution.",
//               "Prepare a table on inventions during the time of the Industrial Revolution.",
//               "Read the paragraph under the title ‘The Workers’ of page 176 and comment on it."
//           ]
          
//           },
//           {
//             chapter: "Chapter 14: Social Protest Movements",
//             subchapters: [],
//             questions : [
//               "Which of the following statements about the lives of industrial workers are correct? Correct the false statements: (a)Workers controlled the industries (b)Living conditions of the workers were comfortable.(c)Low wages was one of the reasons for discontent among the workers (d)During the phase of industrialization, there was emphasis on emotions and feelings.(e)Romantic writers and artists tried to highlight values of closeness to nature as described in folk tales and folk songs.",
//               "List some of the problems faced by workers of those times. Discuss if such problems exist in our times too.",
//               "Write a paragraph differentiating the ideas of capitalism and socialism.",
//               "How was the idea of equality being similarly or differently challenged by women and workers' movements?",
//               "Draw a poster to illustrate the ideas of 'liberty, equality, and justice' within the context of workers and women. Identify occasions where these ideas are being violated.",
//               "Locate the countries in the world map in which the protest movements took place.",
//               "Read the last paragraph of page 187 and first paragraph of page 188 and comment on them."
//           ]
          
//           },
//           {
//             chapter: "Chapter 15: Colonialism in Latin America, Asia and Africa",
//             subchapters: [],
//            questions : [
//               "“Trade played a major role in the colonization.” Do you agree? Why?",
//               "How did the lives of native people in different countries affect colonization? Write two ideas each in the context of crops cultivated, religion, and use of natural resources for the three continents.",
//               "Compare the nature of colonial rule over China, India, and Indonesia. What differences and similarities do you find between them?",
//               "Locate the Portuguese, Dutch, British, and French colonies on the world map and fill them with different colors."
//           ]
          
//           },
//           {
//             chapter: "Chapter 16: Impact of Colonialism in India",
//             subchapters: [],
//             questions : [
//               "How did people use the forests before the rule of the British? Why was there less danger of the forests being fully destroyed in those days?",
//               "Whom did the adivasis revolt against? In what ways did they demonstrate their anger and protest? Give some examples.",
//               "How were the revolts of the adivasis suppressed by the British?",
//               "Make a timeline to show when adivasi protests occurred in different parts of India.",
//               "What problems did the Indian industrialists have with the British government?",
//               "During the British rule, why was it easier for European companies rather than Indian companies to set up industries? Give a few reasons.",
//               "Labour laws were first made for child labourers, then for women and lastly for men. Why were these laws made in this order?",
//               "How could education affect industrial development? Discuss in the class.",
//               "Identify the large industrial cities in an outline map of India during the 20th century.",
//               "Find out the names of the places where each of these adivasi struggles took place, and mark their locations on a map of India.",
//               "Read the paragraph under the title ‘Adivasi Revolts’ on pages 206 and 207 and comment on it."
//           ]
          
//           },
//           {
//             chapter: "Chapter 17: Expansion of Democracy",
//             subchapters: [],
//             questions :[
//               "Most countries often claim themselves to be democratic by conducting elections. How did this happen in the context of Myanmar and Libya?",
//               "Why do you think rulers try to control the media? Do you know how media is controlled in your area?",
//               "Write an imaginary dialogue between a person from Libya and Myanmar comparing the events and struggle for democracy in their respective countries.",
//               "How do literacy and mass education help in the functioning of democracy?",
//               "What is the difference between democracy and dictatorship?",
//               "What role did Aung San Suu Kyi play in fighting for democracy in Myanmar?",
//               "Read the last paragraph of this chapter and answer the question: What is a new kind of democracy?"
//             ]
            
//           },
//           {
//             chapter: "Chapter 18: Democracy: An Evolving Idea",
//             subchapters: [],
//              questions : [
//               "How does democracy produce an accountable, responsive, and legitimate government?",
//               "What are the conditions under which democracies accommodate social diversity?",
//               "Give arguments to support or oppose the following assertions: A. Industrialised countries can afford democracy but poor countries need dictatorship to become rich. B. Democracy can’t reduce inequality of income between different citizens. C. Government in poor countries should spend less on poverty reduction, health, education and spend more on industries and infrastructure. D. In democracy, all citizens have one vote, which means that there is absence of any domination and conflict.",
//               "In the context of assessing democracy, which among the following is the odd one out? A. free and fair elections B. dignity of the individual C. majority rule D. equal treatment before law",
//               "Studies on political and social inequalities in democracy show that: A. democracy and development go together. B. inequalities exist in democracies. C. inequalities do not exist under dictatorship. D. dictatorship is better than democracy.",
//               "Here is some information about six countries. Based on this information, how would you classify each of these countries? Write ‘democratic’, ‘undemocratic’ or ‘not sure’ against each of these. Country A: People who do not accept the country’s official religion do not have a right to vote. Country B: The same party has been winning elections for the last twenty years. Country C: Ruling party has lost in the last elections. Country D: The parliament cannot pass a law about the army without the consent of the Chief of Army. Country E: The parliament cannot pass a law reducing the powers of the judiciary. Country F: All the major economic decisions about the country are taken by officials of the central bank which the ministers cannot change.",
//               "Each of these statements contains a democratic and an undemocratic element. Write out the two separately for each statement. A. A minister said that some laws have to be passed by the parliament in order to conform to the regulations decided by the World Trade Organisation. B. The Election Commission ordered re-polling in a constituency where large scale rigging was reported. C. Women’s representation in the parliament has never reached 10 per cent. This led women’s organisations to demand one-third seats for women.",
//               "Write a response to the following arguments against democracy: A. Army is the most disciplined and corruption-free organisation in the country. Therefore army should rule the country. B. Rule of the majority means the rule of ignorant people. What we need is the rule of the wise, even if they are in small numbers. C. If we want religious leaders to guide us in spiritual matters, why not invite them to guide us in politics as well. The country should be ruled by religious leaders.",
//               "Locate the following countries on the world map: 1. Srilanka 2. Belgium 3. Russia 4. America (USA)",
//               "Read the first two paragraphs under the subheading ‘Dignity and freedom of the citizens’ and answer the following question: Write about the dignity and freedom of the citizens in a democratic country in your own words.",
//               "What are the reasons for the people to fight for democracy?",
//               "Give some examples that prove that democracy is practiced in our schools."
//             ]
            
//           },
//           {
//             chapter: "Chapter 19: Human Rights and Fundamental Rights",
//             subchapters: [],
//              questions :[
//               "Which of the following is not an instance of an exercise of a fundamental right? a. Workers from Bihar go to Punjab to work on the farms b. Religious minority set up a chain of schools c. Men and women government employees get the same salary d. Parents’ property is inherited by their children",
//               "Which of the following freedoms is not available to an Indian citizen? a. Freedom to criticise the government b. Freedom to participate in armed revolution c. Freedom to start a movement to change the government d. Freedom to oppose the central values of the Constitution",
//               "Which of these statements about the relationship between democracy and rights is more valid? Give reasons for your preference. a. Every country that is a democracy gives rights to its citizens. b. Every country that gives rights to its citizens is a democracy. c. Giving rights is good, but it is not necessary for a democracy.",
//               "Are these restrictions on the right to freedom justified? Give reasons for your answer. a. Indian citizens need permission to visit some border areas of the country for reasons of security. b. Outsiders are not allowed to buy property in some areas to protect the interest of the local population. c. The government bans the publication of a book that can go against the ruling party in the next elections.",
//               "Look through this chapter and the previous one and make a list of the six Fundamental Rights in the Constitution.",
//               "Are the Fundamental Rights being violated in each of the following cases? If so, which Fundamental Right or Rights? Discuss with your classmates. a. Suppose a person is kept in a police station for 4 days without being told the reasons, which law was broken? b. Suppose your neighbour tries to claim some of your land as her own. c. Suppose your parents do not allow you to go to school. They make you take up a job in a match factory instead because they cannot afford to feed you properly. d. Suppose your brother refuses to give you the land that you have inherited from your father.",
//               "Suppose you are an advocate. How would you argue the case for a group of people who come to you with the following request: “The river in our area is getting very polluted by the factories upstream. We get our drinking water from the river. People in our villages keep falling ill because of the polluted water. We have complained to the government but there has been no action from their side. This is surely a violation of our Fundamental Rights.”",
//               "Read the paragraph under the heading ‘Abolition of Title’ and answer the following question: The Awards can’t be used by the recipient as a title. Why?",
//               "Analyse an incident you know about where the Fundamental Rights are violated."
//             ]
            
//           },
//           {
//             chapter: "Chapter 20: Women Protection Acts",
//             subchapters: [],
//             questions : [
//               "What are the disadvantages of child marriage?",
//               "Why has domestic violence become a common practice? In what forms is domestic violence seen in society? Find out the reasons.",
//               "You have read about various problems faced by girls and women. Have you noticed any sort of problems in your village/town? Specify them and what is to be done?",
//               "Many acts have been made by the government. What do you suggest for better implementation of these acts?",
//               "Write an essay on general problems faced by women.",
//               "Imagine that you are Tahsildar. How would you prevent child marriage?",
//               "Prepare a pamphlet to understand the problems faced by women.",
//               "Read the paragraph under the title ‘Sexual Assault and Torturing’ of page 260 and comment on it."
//             ]
            
//           },
//           {
//             chapter: "Chapter 21: Disaster Management",
//             subchapters: [],
//             questions : [
//               "Explain how a natural hazard becomes a disaster.",
//               "What is terrorism? What are the motives of terrorists?",
//               "What safety measures should be followed to avoid fire accidents?",
//               "What are the main causes of road accidents? How can we reduce road accidents?",
//               "Terrorist attacks cause loss of life and wealth. What precautions should be taken to prevent these activities?",
//               "Identify the causes of rail accidents.",
//               "List out the reasons and risk-inducing factors in your home, school, or village.",
//               "Locate the following places attacked by terrorists on the India map: a) Mumbai b) Hyderabad c) Bhagalpur d) Kumbakonam e) Bangalore",
//               "Write about an incident related to a disaster you know.",
//               "Read the paragraph titled ‘Fire Accidents’ on page 266 and comment on it."
//             ]
            
//           },
//           {
//             chapter: "Chapter 22: Traffic Education",
//             subchapters: [],
//             questions : [
//               "What documents should a driver carry while driving and what skills are needed to drive safely?",
//               "What will happen if someone jumps the traffic signal? Explain.",
//               "Suggest a few steps that are taken in your area for road safety.",
//               "Explain mandatory, caution, and information traffic signs with examples.",
//               "Kamala wants to purchase a new vehicle. Explain to her what steps to take and what documents are needed for the registration of a vehicle.",
//               "Ramu wants to interchange his vehicle number to another vehicle. Is it correct or not? Explain why.",
//               "Explain the need for road safety.",
//               "Read the table ‘Accident Victims - Age’ on page 271, identify the age group for which the most cases are registered and draw a bar graph.",
//               "Read the paragraphs under the title ‘Traffic Chaos’ on page 272 and comment on them."
//             ]
            
//           }
//         ],

//         Telugu: [
//           {
//             chapter: "Chapter 1: Dh aramarjunulu",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Nenerigina Burgula",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Valasakuli",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Rangacharya tho mukhamukhi",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Shataka Madhurima",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Deekshaku Siddham Kandi",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Chelimi",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Udyama Spurthi",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Chorus",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Vagbhushanam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Vayasam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Tiyyani Palakarimpu",
//             subchapters: [],
//           }
//         ]
//       },

//       '10': {
//         Mathematics: [
//           {
//             chapter: "Chapter 1: Real Numbers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Sets",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Polynomials",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Pair of Linear Equations in two variables",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Quadratic Equations",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Progressions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Coordinate Geometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Similar Triangles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Tangents and Secants to a Circle",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Mensuration",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Trigonometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Applications of Trigonometry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Probability",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Statistics",
//             subchapters: [],
//           }
//         ],

//         Physics: [
//           {
//             chapter: "Chapter 1: Reflection of light at curved surfaces",
//             subchapters: [],
//              questions : [
//               "Where will the image be formed when we place an object on the principal axis of a concave mirror at a point between the focus and the center of curvature?",
//               "State the differences between convex and concave mirrors.",
//               "Distinguish between real and virtual images.",
//               "How do you get a virtual image using a concave mirror?",
//               "What do you know about the terms given below related to spherical mirrors? a) Pole b) Centre of curvature c) Focus d) Radius of curvature e) Focal length f) Principal axis g) Object distance h) Image distance i) Magnification",
//               "Write the rules for sign convention.",
//               "What do you infer from the experiment which you did to measure the object distance and image distance?",
//               "Find the distance of the image when an object is placed on the principal axis at a distance of 10 cm in front of a concave mirror whose radius of curvature is 8 cm.",
//               "The magnification produced by a mirror is +1. What does it mean?",
//               "If spherical mirrors were not known to human beings, guess the consequences.",
//               "Draw suitable rays by which we can guess the position of the image formed by a concave mirror.",
//               "Show the formation of an image with a ray diagram when an object is placed on the principal axis of a concave mirror away from the center of curvature.",
//               "Why do we prefer a convex mirror as a rear-view mirror in vehicles?",
//               "A convex mirror with a radius of curvature of 3 m is used as a rear-view mirror for a vehicle. If a bus is located at 5 m from this mirror, find the position, nature, and size of the image.",
//               "To form the image on the object itself, how should we place the object in front of a concave mirror? Explain with a ray diagram."
//             ]
            
//           },
//           {
//             chapter: "Chapter 2: Chemical  Equations",
//             subchapters: [],
//              questions : [
//               "What information do you get from a balanced chemical equation?",
//               "Why should we balance a chemical equation?",
//               "Balance the following chemical equations: (a) NaOH + H2SO4 → Na2SO4 + H2O(b) KClO3 JKCl + O2 (c) Hg (NO3 ) + KI JHgI2+KNO3",
//               "Mention the physical states of the reactants and products of the following chemical reactions and balance the equations: (a) C6H12O6 → C2H5OH + CO2 (b) NH3 + Cl2 → N2 + NH4Cl (c) Na + H2O → NaOH + H2",
//   "Balance the following chemical equation after writing the symbolic representation: (a) Calcium hydroxide (s) + Nitric acid (aq) → Water (l) + Calcium Nitrate (aq) (b) Magnesium (s) + Iodine (s) → Magnesium Iodide (s)",
//   "Write the following chemical reactions including the physical states of the substances and balance chemical equations: (a) Sodium Hydroxide reacts with Hydrochloric acid to form Sodium Chloride and Water. (b) Barium Chloride reacts with liquid Sodium Sulphate to leave Barium Sulphate as a precipitate and also form liquid Sodium Chloride.",
//   "Potassium nitrate and Sodium Nitrate react separately with copper sulfate solution. Write balanced chemical equations for the above reactions.",
//   "2 moles of Zinc react with a cupric chloride solution containing 6.023 x 10^22 formula units of CuCl2. Calculate the moles of copper obtained.",
//   "1 mole of propane (C3H8) on combustion at STP gives ‘A’ kilojoules of heat energy. Calculate the heat liberated when 2.4 liters of propane on combustion at STP.",
//             ]
            
//           },
//           {
//             chapter: "Chapter 3: Acids , Bases and Salts",
//             subchapters: [],
//              questions : [
//               "What is a neutralization reaction? Give two examples.",
//               "An acid or a base is mixed with water. Is this process exothermic or endothermic?",
//               "Distilled water does not conduct electricity. Why?",
//               "Dry hydrogen chloride gas does not turn blue litmus to red whereas aqueous hydrogen chloride acid does. Why?",
//               "Draw a neat diagram for showing acid solution in water conducting electricity.",
//               "Why does the flow of acid rain into a river make the survival of aquatic life in a river difficult?",
//               "What is baking powder? How does it make the cake soft and spongy?",
//               "Give two important uses for each of washing soda and baking soda.",
//               "Five solutions A, B, C, D and E when tested with universal indicator showed pH as 4, 1, 11, 7 and 9, respectively, classify the solutions as given below.",
//               "Why does tooth decay start when the pH of the mouth is lower than 5.5?",
//               "A milkman adds a very small amount of baking soda to fresh milk. Why does he shift the pH of the fresh milk from acidic nature to slightly alkaline? Why does this milk take a long time to set as curd?",
//               "Plaster of Paris should be stored in a moisture-proof container. Explain why?",
//               "Magnesium ribbons of the same size are taken in test tubes A and B. Hydrochloric acid is added to test tube A, while acetic acid is added to test tube B. The concentrations of both acids are the same. In which test tube will the fizzing occur more vigorously? Why?",
//               "Fresh milk has a pH of 6.6. Explain why the pH changes as it turns into curd?",
//               "How do you prepare an indicator using beetroot? Explain."
//             ]
            
//           },
//           {
//             chapter: "Chapter 4:Refraction of Light at Curved Surfaces",
//             subchapters: [],
//              questions : [
//               "Write the lens maker’s formula and explain the terms in it.",
//               "How do you verify experimentally that the focal length of a convex lens is increased when it is kept in water?",
//               "How do you find the focal length of a lens experimentally?",
//               "Draw ray diagrams for the following positions and explain the nature and position of image. i. Object is placed at C2 ii. Object is placed between F2 and optic centre P.",
//               "Man wants to get a picture of a zebra. He photographed a white donkey after fitting a glass, with black stripes on to the lens of his camera. What photo will he get? Explain.",
//               "Two converging lenses are to be placed in the path of parallel rays so that the rays remain parallel after passing through both lenses. How should the lenses be arranged? Explain with a neat ray diagram.",
//               "The focal length of a converging lens is 20cm. A 2 cm height object is 60cm from the lens. Where will the image be formed and what kind of image is it? And also find the height of the image.",
//               "A double convex lens has two surfaces of equal radii ‘R’ and refractive index n = 1.5. Find the focal length ‘f’.",
//               "Harsha tells Siddhu that the double convex lens behaves like a convergent lens. But Siddhu knows that Harsha’s assertion is wrong and corrected Harsha by asking some questions. What are the questions asked by Siddhu?",
//               "Can a virtual image be photographed by a camera?",
//               "How do you appreciate the coincidence of the experimental facts with the results obtained by a ray diagram in terms of behaviour of images formed by lenses?",
//               "Find the refractive index of the glass which is a symmetrical convergent lens if its focal length is equal to the radius of curvature of its surface.",
//               "Find the radii of curvature of a convexo-concave convergent lens made of glass with refractive index n=1.5 having focal length of 24cm. One of the radii of curvature is double the other.",
//               "A convex lens is made up of three different materials as shown in the figure. How many images does it form?",
//               "You have a lens. Suggest an experiment to find out the focal length of the lens.",
//               "Use the data obtained by activity-2 in table-1 of this lesson and draw the graphs of u vs v and 1/u vs 1/v.",
//               "Figure -4 shows ray AB that has passed through a divergent lens. Construct the path of the ray up to the lens if the position of its foci is known.",
//               "Figure -5 shows a point light source and its image produced by a lens with an optical axis N1N2. Find the position of the lens and its foci using a ray diagram.",
//               "Find the focus by drawing a ray diagram using the position of source S and the image S given in figure -6.",
//               "A parallel beam of rays is incident on a convergent lens with a focal length of 40cm. Where should a divergent lens with a focal length of 15 cm be placed for the beam of rays to remain parallel after passing through the two lenses? Draw a ray diagram.",
//               "The distance between two point sources of light is 24cm. Where should a convergent lens with a focal length of f=9cm be placed between them to obtain the images of both sources at the same point?",
//               "Suppose you are inside the water in a swimming pool near an edge. A friend is standing on the edge. Do you find your friend taller or shorter than his usual height? Why?"
// ]
            
//           },
//           {
//             chapter: "Chapter 5: Human Eye and Colourful world",
//             subchapters: [],
//             questions :[
//               "How do you correct the eye defect Myopia?",
//               "Explain the correction of the eye defect Hypermetropia.",
//               "How do you find experimentally the refractive index of material of a prism?",
//               "Explain the formation of rainbow.",
//               "Explain briefly the reason for the blue colour of the sky.",
//               "Explain two activities for the formation of artificial rainbow.",
//               "Derive an expression for the refractive index of the material of a prism.",
//               "Light of wavelength λ1 enters a medium with refractive index n2 from a medium with refractive index n1. What is the wavelength of light in the second medium?",
//               "Why does the sky sometimes appear white?",
//               "A person is viewing an extended object. If a converging lens is placed in front of his eye, will he feel that the size of the object has increased? Why?",
//               "Incident ray on one of the face (AB) of a prism and emergent ray from the face AC are given in figure -1. Complete the ray diagram.",
//               "How do you appreciate the role of molecules in the atmosphere for the blue colour of the sky?",
//               "How do you appreciate the working of Ciliary muscles in the eye?",
//               "Glass is known to be a transparent material. But ground glass is opaque and white in colour. Why?",
//               "A light ray falls on one of the faces of a prism at an angle of 40° so that it suffers angle of minimum deviation of 30°. Find the angle of prism and angle of refraction at the given surface.",
//               "The focal length of a lens suggested to a person with Hypermetropia is 100cm. Find the distance of near point and power of the lens.",
//               "Eye is the only organ to visualize the colourful world around us. This is possible due to accommodation of eye lens. Prepare a six line stanza expressing your wonderful feelings."
//             ]
            
//           },
//           {
//             chapter: "Chapter 6: Structure of Atom",
//             subchapters: [],
//              questions : [
//               "What information does the electronic configuration of an atom provide?",
//               "Rainbow is an example for continuous spectrum – explain.",
//               "What is absorption spectrum?",
//               "What is an orbital? How is it different from Bohr’s orbit?",
//               "Explain the significance of three Quantum numbers in predicting the positions of an electron in an atom.",
//               "What is nl x method? How is it useful?",
//               "What is emission spectrum?",
//               "Which electronic shell is a higher energy level K or L?",
//               "Answer the following questions. a. How many maximum number of electrons can be accommodated in a principal energy level? b. How many maximum number of electrons can be accommodated in a sub shell? c. How many maximum number of electrons can be accommodated in an orbital? d. How many sub shells are present in a principal energy level? e. How many spin orientations are possible for an electron in an orbital?",
//               "In an atom the number electrons in M-shell is equal to the number of electrons in the K and L Shell. Answer the following questions. a. Which is the outermost shell? b. How many electrons are there in its outermost shell? c. What is the atomic number of the element? d. Write the electronic configuration of the element.",
//               "How many elliptical orbits are there in the third Bohr’s orbit?",
//               "Following orbital diagram shows the electron configuration of nitrogen atom. Which rule does not support this? N (Z = 7)",
//               "Which rule is violated in the electronic configuration 1s0 2s2 2p4?",
//               "Write the four quantum numbers for the differentiating electron of sodium (Na) atom?",
//               "(i) An electron in an atom has the following set of four quantum numbers to which orbital does it belong? (ii) Write the four quantum numbers for 1s1 electron.",
//               "Collect the information regarding wavelengths and corresponding frequencies of three primary colours red, blue and green.",
//               "The wavelength of a radio wave is 1.0m. Find its frequency."
//             ]
            
//           },
//           {
//             chapter: "Chapter 7: Classification of ElementsThe Periodic Table",
//             subchapters: [],
//            questions : [
//               "Newlands proposed the law of octaves. Mendeleeff suggested eight groups for elements in his table. How do you explain these observations in terms of modern periodic classification?",
//               "What are the limitations of Mendeleeff’s periodic table? How could the modern periodic table overcome the limitations of Mendeleeff’s table?",
//               "Define the modern periodic Law. Discuss the construction of the long form of the periodic table.",
//               "Explain how the elements are classified into s, p, d and f- block elements in the periodic table and give the advantage of this kind of classification.",
//               "Write down the characteristics of the element having atomic number 17. Electronic configuration ____________________________________ Period number ____________________________________ Group number ____________________________________ Element family ____________________________________ No. of valence electrons ____________________________________ Valency ____________________________________ Metal or non-metal _",
//               "Why was the basis of classification of elements changed from the atomic mass to the atomic number?",
//               "What is a periodic property? How do the following properties change in a group and period? Explain. i) (a) Atomic radius (b) Ionization energy (c) Electron affinity (d) Electronegativity. ii) Explain the ionization energy order in the following sets of elements: a) Na, Al, Cl b) Li, Be, B c) C, N, O d) F, Ne, Na e) Be, Mg, Ca.",
//               "Given below is the electronic configuration of elements A, B, C, D. A.1s2 2s2 1. Which are the elements coming within the same period B.1s2 2s2 2p6 3s2 2. Which are the ones coming within the same group? C.1s2 2s2 2p6 3s2 3p3 3. Which are the noble gas elements? D.1s2 2s2 2p6 4. To which group and period does the element ‘C ‘belong",
//               "Elements in a group generally possess similar properties, but elements along a period have different properties. How do you explain this statement?",
//               "s - block and p - block elements (except 18th group elements) are sometimes called as ‘Representative elements’ based on their abundant availability in nature. Is it justified? Why?",
//               "The electronic configuration of the elements X, Y and Z are given below? a) X = 2 b) Y = 2, 6 c) Z = 2, 8, 2 i) Which element belongs to the second period? ii) Which element belongs to the second group? iii) Which element belongs to the 18th group?",
//               "Identify the element that has the larger atomic radius in each pair of the following and mark it with a symbol: (i) Mg, Ca (ii) Li, Cs (iii) N, P (iv) B, Al",
//               "Identify the element that has the lower Ionization energy in each pair of the following and mark it with a symbol: (i) Mg, Na (ii) Li, O (iii) Br, F (iv) K, Br",
//               "How does metallic character change when we move i. Down in a group ii. Across a period?",
//               "Name two elements that you would expect to have chemical properties similar to Mg. What is the basis for your choice?",
//               "On the basis of atomic numbers predict to which block the elements with atomic number 9, 37, 46 and 64 belong to?",
//               "Using the periodic table, predict the formula of the compound formed between an element X of group 13 and another element Y of group 16.",
//               "An element X belongs to 3rd period and group 2 of the periodic table. State (a) The number of valence electrons in it (b) The valency (c) Whether it is metal or a non-metal",
//               "An element has atomic number 19. Where would you expect this element in the periodic table and why?",
//               "How do you appreciate the role of electronic configuration of the atoms of elements in periodic classification?",
//               "Without knowing the electronic configurations of the atoms of elements Mendeleev still could arrange the elements nearly close to the arrangements in the Modern periodic table. How can you appreciate this?",
//               "Comment on the position of hydrogen in the periodic table.",
//               "How the positions of elements in the periodic table help you to predict its chemical properties? Explain with an example.",
//               "In period 2, element X is to the right of element Y. Then, find which of the elements have: i) Low nuclear charge ii) Low atomic size iii) High ionization energy iv) High electronegativity v) More metallic character."
//             ]
            
//           },
//           {
//             chapter: "Chapter 8:Chemical Bonding",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Classification of Elements- The Periodic Table",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Chemical bonding",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Electric Current",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Electromagnetism",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Principles of Metallurgy",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Carbon and its Compound",
//             subchapters: [],
//           }
//         ],

//         Biology: [
//           {
//             chapter: "Chapter 1: Chemical Reactions and Equations",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Respiration - The energy releasing system",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Transportation - The circulatory system ",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Excretion - The wastage disposing system",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Coordination - The linking system",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Reproduction - The generating system",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Coordination in life processes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Our environment - Our concern",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Natural resources",
//             subchapters: [],
//           }
//         ],

//         Social_Science: [
//           {
//             chapter: "Chapter 1: India: Relief Features",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Ideas of Development",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Production and Employment",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Climate of India",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Indian Rivers and Water Resources",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: The People",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: People and Settlement",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: People and Migration",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Rampur : A Village Economy",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Globalisation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Food Security",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Sustainable Development with Equity",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: The World Between Wars 1900-1950 : Part -I",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: The World Between Wars 1900-1950 : Part - II",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 15: National Liberation Movements in the Colonies",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 16: National Movement in India–Partition & Independence",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 17: The Making of Independent India’s Constitution",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 18: Independent India (The First 30 years - 1947-77)",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 19: Emerging Political Trends 1977 to 2000",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 20: Post - War World and India",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 21: Social Movements in Our Times",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 22: Citizens and the Governments",
//             subchapters: [],
//           }
//         ],

//         Telugu: [
//           {
//             chapter: "Chapter 1: Dhanashilamu",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Evari Basha Vallaku Vinasompu",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Veera Telangana",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Kontha Baata",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Nagara Geetham",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Bhagyodayam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Sataka Madhurima",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Lakshya Siddhi",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Jeevana Bhashayam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Golconda Patnam",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Bhiksha",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Bhoomika",
//             subchapters: [],
//           }
//         ]
//       },

//       'Inter_1st_year': {
//         Mathematics_IA: [
//           {
//             chapter: "Chapter 1: Functions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Matrices",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Addition of Vectors",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Vector Products",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Trigonometric Rations up to Transformation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Hyperbolic EquationsProperties of Triangles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Properties of Triangles",
//             subchapters: [],
//           }
//         ],

//         Mathematics_IB: [
//           {
//             chapter: "Chapter 1: Locus",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Transformation of Axes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: The Straight Line",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Pair of Straight Lines",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Three Dimensional Co-ordinates",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Direction Cosines and Direction Ratios",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: The Plane",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Limits and Continuity",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Differentiation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Applications of Derivatives",
//             subchapters: [],
//           }
//         ],

//         Physics: [
//           {
//             chapter: "Chapter 1: Units And Measurements",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Motion In A Straight Line",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Motion In A Plane",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Newtons Laws Of Motion",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Work, Energy And Power",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: System Of Particles And Rotational Motion",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Simple Harmonic Motion",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Gravitation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Mechanical Properties Of Solids",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Mechanical Properties Of Fluids",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Thermal Properties Of Matter",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Thermodynamics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Kinetic Theory of Gases",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Sound Waves",
//             subchapters: [],
//           }
//         ],

//         Chemistry: [
//           {
//             chapter: "Chapter 1: Some Basic Concepts Of Chemistry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Structure Of Atom",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Classification Of Elements And Periodicity In Properties",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Chemical Bonding And Molecular Structure",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: States Of Matter",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Thermodynamics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Equilibrium",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Redox Reactions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Hydrogen",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: The S-Block Elements",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: The P-Block Elements",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Organic Chemistry – Some Basic Principles And Techniques",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Hydrocarbons",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Environmental Chemistry",
//             subchapters: [],
//           }
//         ],

//         Biology: [
//           {
//             chapter: "Chapter 1: The Living World",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Biological Classification",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Plant Kingdom",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Animal Kingdom",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Morphology Of Flowering Plants",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Anatomy Of Flowering Plants",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Structural Organisation In Animals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Biomolecules",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Biomolecules",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Cell Cycle And Cell Division",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Transport In Plants",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Mineral Nutrition",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Respiration In Plants",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Respiration In Plants",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 15: Body Fluids And Circulation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 16: Body Fluids And Circulation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 17: Body Fluids And Circulation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 18: Body Fluids And Circulation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 19: Locomotion And Movement",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 20: Locomotion And Movement",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 21: Neural Control And Coordination",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 22: Chemical Coordination And Integration",
//             subchapters: [],
//           }
//         ],

//         Geography: [
//           {
//             chapter: "Chapter 1: Introduction to geography",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: The Earth",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Landforms",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Climate",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Oceans",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Life on the Earth",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Hazards and disasters",
//             subchapters: [],
//           }
//         ]
//       },

//       'Inter_2nd_year': {
//         Mathematics_IIA: [
//           {
//             chapter: "Chapter 1: Complex Numbers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: De Moivre’s Theorem",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Quadratic Expressions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Theory Of Equations",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Permutations And Combinations",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Binomial Theorem",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Partial Fractions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Measures Of Dispersion",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Probability",
//             subchapters: [],
//           }
//         ],

//         Mathematics_IIB: [
//           {
//             chapter: "Chapter 1: Circle",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: System Of Circles",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Parabola",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Ellipse",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Hyperbola",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Integration",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Definite IntegralsDifferential Equations",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Differential Equations",
//             subchapters: [],
//           }
//         ],

//         Physics: [
//           {
//             chapter: "Chapter 1: Waves",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Ray Optics and Optical Instruments",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Wave Optics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Electric Charges and Fields",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Electrostatic Potential and Capacitance",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Current Electricity",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Moving Charges and Magnetism",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Magnetism and Matter",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Electromagnetic Induction",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Alternating Current",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Electromagnetic Wave",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Dual Nature of Radiation and Matter",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Atoms",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Nuclei",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 15: Semiconductor Electronics: Materials, Devices And Simple Circuit",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 16: Communication System",
//             subchapters: [],
//           }
//         ],

//         Chemistry: [
//           {
//             chapter: "Chapter 1: The Solid State",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Solutions",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Electrochemistry And Chemical Kinetics",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Surface Chemistry",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: General Principles Of Metallurgy",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: The p-Block Elements",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: The d-and f-Block Elements & Coordination Compounds",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Polymers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Biomolecules",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Chemistry In Everyday Life",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Haloalkanes and Haloarenes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Alcohols, Phenols and Ethers",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Organic Compounds Containing Nitrogen",
//             subchapters: [],
//           }
//         ],

//         Biology: [
//           {
//             chapter: "Chapter 1: Reproduction In Organisms",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Sexual Reproduction In Flowering Plants",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Human Reproduction",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Reproductive Health",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Principles Of Inheritance And Variation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Molecular Basis Of Inheritance",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Evolution",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Human Health And Disease",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Strategies For Enhancement In Food Production",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Microbes In Human Welfare",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Biotechnology : Principles And Processes",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Biotechnology And Its Applications",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Organisms And Populations",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Ecosystem",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 15: Biodiversity And Conservation",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 16: Environmental Issues",
//             subchapters: [],
//           }
//         ],

//         Economics: [
//           {
//             chapter: "Chapter 1: Economic Growth And Economic Development",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: Population And Human Resource Development",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: National Income, Poverty & Unemployment",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Planning And Environment",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Agricultural Sector",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Industrial Sector",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Tertiary Sector",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: New Economic Reforms And Foreign Sector",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Economic Features Of Telangana",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Economic Features Of Telangana",
//             subchapters: [],
//           }
//         ],

//         Geography: [
//           {
//             chapter: "Chapter 1: Human & Economic: Definition, Nature and Scope; Man and Geography",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 2: World Population",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 3: Resources",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 4: Primary Economic activities",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 5: Minerals",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 6: Secondary Economic activities",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 7: Tertiary & Quaternary Economic activities",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 8: Transport and Trade",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 9: Physiography",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 10: Climate, Vegetation & Soil",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 11: Population",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 12: Agriculture",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 13: Irrigation and Power",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 14: Minerals & Energy Resources",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 15: Industries",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 16: Trade & Transport",
//             subchapters: [],
//           },
//           {
//             chapter: "Chapter 17: Geography of Telangana",
//             subchapters: [],
//           }
//         ]
//       }
//     },
//   };

//   //   const handleChapterSelection = (event) => {
//   //     const selectedChapter = event.target.value;
//   //     onChapterChange(selectedChapter);
//   //   };

//   //   return (
//   //     <div className="flex items-center mb-4 w-full">
//   //       <label className="font-semibold text-sm text-gray-600 mr-4 w-32 text-right">
//   //         Chapters:
//   //       </label>
//   //       <select
//   //         className="flex-1 px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
//   //         onChange={handleChapterSelection}
//   //       >
//   //         {chaptersData[state] &&
//   //         chaptersData[state][clas] &&
//   //         chaptersData[state][clas][subject] ? (
//   //           chaptersData[state][clas][subject].map((chapter, index) => (
//   //             <option key={index} value={chapter}>
//   //               {chapter}
//   //             </option>
//   //           ))
//   //         ) : (
//   //           <option>No chapters available</option>
//   //         )}
//   //       </select>
//   //     </div>
//   //   );
//   // };

//   // export default Chapter;

//   const [selectedChapter, setSelectedChapter] = useState("");
//   const [selectedSubchapter, setSelectedSubchapter] = useState("");

//   const handleChapterSelection = (event) => {
//     const chapter = event.target.value;
//     setSelectedChapter(chapter);
//     setSelectedSubchapter("");
//     onChapterChange(chapter);
//   };

//   const handleSubchapterSelection = (event) => {
//     const subchapter = event.target.value;
//     setSelectedSubchapter(subchapter);
//   };

//   const selectedChapters = chaptersData[state]?.[clas]?.[subject] || [];

//   const chapterObject = selectedChapters.find(
//     (chapter) => chapter.chapter === selectedChapter
//   );

//   return (
//     <div className="flex flex-col mb-4 w-full ">
//       <div className="flex flex-row items-center w-full space-x-2.5 ">
//         <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
//           Chapters:
//         </label>
//         <select
//           className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
//           onChange={handleChapterSelection}
//         >
//           {selectedChapters.length > 0 ? (
//             selectedChapters.map((chapter, index) => (
//               <option key={index} value={chapter.chapter}>
//                 {chapter.chapter}
//               </option>
//             ))
//           ) : (
//             <option>No chapters available</option>
//           )}
//         </select>
//       </div>

//       {/* Subchapter Dropdown */}
//       {chapterObject && chapterObject.subchapters.length > 0 && (
//         <div className="flex flex-row items-center w-full mt-4 space-x-2.5">
//           <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
//             Subchapters:
//           </label>
//           <select
//             className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
//             onChange={handleSubchapterSelection}
//             value={selectedSubchapter}
//           >
//             <option value="">Select a subchapter</option>
//             {chapterObject.subchapters.map((subchapter, index) => (
//               <option key={index} value={subchapter}>
//                 {subchapter}
//               </option>
//             ))}
//           </select>
//         </div>

//       )}
//     </div>

//   );
// };

// export default Chapter;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { chaptersData } from "./chapterdata"; 
import "./Chapters.css";
import { useChapterContext } from './ChapterContext'; 



const Chapter = ({ state, clas, subject, onChapterChange, onSubchapterChange }) => {
  const navigate = useNavigate();
  const { setSelectedQuestions } = useChapterContext(); 
  const [selectedChapter, setSelectedChapter] = useState("");
  const [selectedSubchapter, setSelectedSubchapter] = useState("");

  const handleChapterSelection = (event) => {
    const chapter = event.target.value;
    setSelectedChapter(chapter);
    setSelectedSubchapter(""); 
    onChapterChange(chapter);

    const chapterObject = chaptersData[state]?.[clas]?.[subject]?.find(chap => chap.chapter === chapter);
    if (chapterObject) {
      setSelectedQuestions(chapterObject.questions); 
    }
  };


  const handleSubchapterSelection = (event) => {
    const subchapter = event.target.value;
    setSelectedSubchapter(subchapter);
    onSubchapterChange(subchapter);
  };

  const selectedChapters = chaptersData[state]?.[clas]?.[subject] || [];
  const chapterObject = selectedChapters.find(chap => chap.chapter === selectedChapter);

  const gotoQuestion = () => {
    navigate("/question"); 

  };

  return (
    <div className="flex flex-col mb-4 w-full h-full">
      <div className="flex flex-row items-center w-full space-x-1">
      <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4  w-[30%] text-right">

          Chapters:
        </label>
        <select
          className="w-[85%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
          onChange={handleChapterSelection}
        >
          <option value="">Select a chapter</option>
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


   
      {chapterObject?.subchapters?.length > 0 && (
  <div className="flex items-center mb-4 mt-[3%]">
    <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4 w-[30%] text-right">
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




      {/* {chapterObject && chapterObject.questions.length > 0 && (
        <div className="flex items-center  w-full">
          <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4 w-[30%] text-right">
            Questions:
          </label>
          <button
            className="doubt-button px-4 py-2 bg-green-700  text-white rounded-md w-full"
            onClick={gotoQuestion}
          >
            Go To Questions
          </button>
        </div>
      )} */}

    </div>
  );
};

export default Chapter;