
import React from 'react';

const Chapter = ({ state, clas, subject, onChapterChange }) => {
  const chaptersData = {
    'Andhra Pradesh': {
      '6': {
        Telugu: ['Chapter 1: Language Basics', 'Chapter 2: Grammar', 'Chapter 3: Literature', 'Chapter 4: Poetry'],
        English: ['Chapter 1: Reading Comprehension', 'Chapter 2: Grammar', 'Chapter 3: Essay Writing', 'Chapter 4: Stories'],
        Mathematics: ['Chapter 1: Number Systems', 'Chapter 2: Algebra', 'Chapter 3: Geometry', 'Chapter 4: Fractions'],
        Science: ['Chapter 1: Living Organisms', 'Chapter 2: Matter and Energy', 'Chapter 3: Our Environment', 'Chapter 4: Forces'],
        Social: ['Chapter 1: Indian History', 'Chapter 2: Geography', 'Chapter 3: Civics', 'Chapter 4: Economics']
      },
      '7': {
        Telugu: ['Chapter 1: Grammar', 'Chapter 2: Prose', 'Chapter 3: Poetry', 'Chapter 4: Short Stories'],
        English: ['Chapter 1: Vocabulary Building', 'Chapter 2: Grammar', 'Chapter 3: Literature', 'Chapter 4: Essay Writing'],
        Mathematics: ['Chapter 1: Decimals', 'Chapter 2: Algebraic Expressions', 'Chapter 3: Ratios and Proportions', 'Chapter 4: Geometry'],
        Science: ['Chapter 1: Cells', 'Chapter 2: Ecosystems', 'Chapter 3: Electricity', 'Chapter 4: The Solar System'],
        Social: ['Chapter 1: Ancient Civilizations', 'Chapter 2: Indian Independence', 'Chapter 3: World Wars', 'Chapter 4: Government Structures']
      },
      '8': {
        Telugu: ['Chapter 1: Literature', 'Chapter 2: Grammar', 'Chapter 3: Essays', 'Chapter 4: Poetry'],
        English: ['Chapter 1: Prose', 'Chapter 2: Grammar', 'Chapter 3: Story Writing', 'Chapter 4: Drama'],
        Mathematics: ['Chapter 1: Linear Equations', 'Chapter 2: Polynomials', 'Chapter 3: Quadrilaterals', 'Chapter 4: Statistics'],
        Science: ['Chapter 1: Human Anatomy', 'Chapter 2: Chemical Reactions', 'Chapter 3: Motion', 'Chapter 4: Sound'],
        Social: ['Chapter 1: Medieval India', 'Chapter 2: The Renaissance', 'Chapter 3: Globalization', 'Chapter 4: The Indian Constitution']
      },
      '9': {
        Telugu: ['Chapter 1: Poetry', 'Chapter 2: Short Stories', 'Chapter 3: Essays', 'Chapter 4: Drama'],
        English: ['Chapter 1: Grammar', 'Chapter 2: Comprehension', 'Chapter 3: Speech Writing', 'Chapter 4: Novels'],
        Mathematics: ['Chapter 1: Trigonometry', 'Chapter 2: Geometry', 'Chapter 3: Probability', 'Chapter 4: Coordinate Geometry'],
        Science: ['Chapter 1: The Universe', 'Chapter 2: Electromagnetism', 'Chapter 3: Nutrition and Health', 'Chapter 4: Genetics'],
        Social: ['Chapter 1: Indian Democracy', 'Chapter 2: World Geography', 'Chapter 3: Environmental Studies', 'Chapter 4: World History']
      },
      '10': {
        Telugu: ['Chapter 1: Classical Literature', 'Chapter 2: Poetry', 'Chapter 3: Essays', 'Chapter 4: Drama'],
        English: ['Chapter 1: Grammar', 'Chapter 2: Comprehension', 'Chapter 3: Poetry', 'Chapter 4: Fiction'],
        Mathematics: ['Chapter 1: Calculus', 'Chapter 2: Vectors', 'Chapter 3: Permutations and Combinations', 'Chapter 4: Statistics'],
        Science: ['Chapter 1: Organic Chemistry', 'Chapter 2: Nuclear Physics', 'Chapter 3: Biology of Life', 'Chapter 4: Earth Sciences'],
        Social: ['Chapter 1: World History', 'Chapter 2: Modern India', 'Chapter 3: The Cold War', 'Chapter 4: Globalization and Economy']
      }
    },
    Telangana: {
      'Nursery': {
        Rhymes: ['Chapter 1: Nursery Rhymes', 'Chapter 2: Action Songs', 'Chapter 3: ABC Songs', 'Chapter 4: Number Songs'],
        Drawing: ['Chapter 1: Basic Shapes', 'Chapter 2: Color Matching', 'Chapter 3: Finger Painting', 'Chapter 4: Free Drawing']
      },
      'LKG': {
        Rhymes: ['Chapter 1: Fun Rhymes', 'Chapter 2: Nature Rhymes', 'Chapter 3: ABC Songs', 'Chapter 4: Counting Songs'],
        English: ['Chapter 1: Alphabet Recognition', 'Chapter 2: Phonics', 'Chapter 3: Simple Words', 'Chapter 4: Short Sentences'],
        Drawing: ['Chapter 1: Shapes and Colors', 'Chapter 2: Animal Drawings', 'Chapter 3: Nature Drawing', 'Chapter 4: Creative Sketching']
      },
      'UKG': {
        Rhymes: ['Chapter 1: Nature Songs', 'Chapter 2: ABC Songs', 'Chapter 3: Fun Rhymes', 'Chapter 4: Action Songs'],
        English: ['Chapter 1: Word Formation', 'Chapter 2: Phonics Practice', 'Chapter 3: Reading Simple Sentences', 'Chapter 4: Basic Grammar'],
        Drawing: ['Chapter 1: Nature Sketches', 'Chapter 2: Free Drawing', 'Chapter 3: Basic Color Theory', 'Chapter 4: Story-Based Drawing']
      },
      '1': {
        English: ['Chapter 1: Letters and Sounds', 'Chapter 2: Simple Stories', 'Chapter 3: Grammar Basics', 'Chapter 4: Sentence Formation'],
        Mathematics: ['Chapter 1: Counting', 'Chapter 2: Basic Addition', 'Chapter 3: Shapes', 'Chapter 4: Subtraction'],
        Drawing: ['Chapter 1: Nature Art', 'Chapter 2: Pattern Drawing', 'Chapter 3: Free Sketching', 'Chapter 4: Color Matching']
      },
      '2': {
        English: ['Chapter 1: Vocabulary Building', 'Chapter 2: Reading Practice', 'Chapter 3: Sentence Structure', 'Chapter 4: Story Telling'],
        Mathematics: ['Chapter 1: Multiplication', 'Chapter 2: Division', 'Chapter 3: Shapes and Patterns', 'Chapter 4: Problem Solving'],
        Drawing: ['Chapter 1: Landscape Drawing', 'Chapter 2: Color Theory', 'Chapter 3: Imaginative Drawing', 'Chapter 4: Artistic Creativity']
      }
    }
  };

  const handleChapterSelection = (event) => {
    const selectedChapter = event.target.value;
    onChapterChange(selectedChapter);
  };

  return (
    <div className="flex items-center mb-4 w-full">
    <label className="font-semibold text-sm text-gray-600 mr-4 w-32 text-right">Chapters:</label>
    <select className="flex-1 px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
            onChange={handleChapterSelection}>
      {(chaptersData[state] && chaptersData[state][clas] && chaptersData[state][clas][subject]) ? (
        chaptersData[state][clas][subject].map((chapter, index) => (
          <option key={index} value={chapter}>
            {chapter}
          </option>
        ))
      ) : (
        <option>No chapters available</option>
      )}
    </select>
  </div>
  );
};

export default Chapter;