import React, { useState } from 'react';
import '../styles/TestChooser.css';

// Test data with questions and options
const tests = [
  {
    id: 1,
    name: 'Шевченко',
    description: 'Оберіть правильну відповідь',
    questions: [
      {
        question: 'Коли народився Тарас Шевченко?',
        options: ['1856', '1810', '1814'],
        correctAnswer: '1814',
      },
      {
        question: 'Як Шевченко престав бути кріпаком?',
        options: ['Вбив пана', 'Викупили', 'Втік'],
        correctAnswer: 'Викупили',
      },
      {
        question: 'Яке найбільш відоме твір Тараса Шевченка?',
        options: ['Заповіт', 'Катерина', 'Кавказ'],
        correctAnswer: 'Заповіт',
      },
      {
        question: 'До якого навчального закладу Тарас Шевченко був зарахований у 1838 році?',
        options: ['Київський університет', 'Харківський Університет', 'Петербурзька академія мистецтв'],
        correctAnswer: '9',
      },
      {
        question: 'Як називається село, де народився Тарас Шевченко?',
        options: ['Моринці', 'Великий Рожин', 'Лубни'],
        correctAnswer: 'Моринці',
      },
    ],
  },
  {
    id: 2,
    name: 'Леся Українка',
    description: 'Answer questions about biology and chemistry.',
    questions: [
      {
        question: 'What is the chemical symbol for water?',
        options: ['O2', 'H2O', 'CO2'],
        correctAnswer: 'H2O',
      },
      {
        question: 'What is the largest organ in the human body?',
        options: ['Heart', 'Liver', 'Skin'],
        correctAnswer: 'Skin',
      },
      {
        question: 'What planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter'],
        correctAnswer: 'Mars',
      },
      {
        question: 'What element has the chemical symbol O?',
        options: ['Oxygen', 'Osmium', 'Ozone'],
        correctAnswer: 'Oxygen',
      },
      {
        question: 'What is the boiling point of water?',
        options: ['90°C', '100°C', '110°C'],
        correctAnswer: '100°C',
      },
    ],
  },
  // Add more tests here
];

const TestChooser = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testResult, setTestResult] = useState(null);
  const [testCompleted, setTestCompleted] = useState(false);  // Track if the test is completed

  const handleTestSelect = (test) => {
    setSelectedTest(test);
    setShowModal(true);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTestResult(null);
    setTestCompleted(false);  // Reset test completion
  };

  const handleAnswerChange = (answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedTest.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const correctAnswers = selectedTest.questions.map((question, index) => {
      return userAnswers[index] === question.correctAnswer;
    });

    const correctCount = correctAnswers.filter((isCorrect) => isCorrect).length;

    setTestResult(`${correctCount} out of ${selectedTest.questions.length} answers are correct.`);
    setTestCompleted(true);  // Mark the test as completed
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTest(null);
  };

  return (
    <div className="test-chooser">
      <h1>Оберіть Тест</h1>
      <div className="test-list">
        {tests.map((test) => (
          <div
            key={test.id}
            className="test-item"
            onClick={() => handleTestSelect(test)}
          >
            <h2>{test.name}</h2>
            <p>{test.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for test questions */}
      {showModal && selectedTest && (
        <div className="test-modal">
          <div className="test-modal-content">
            <h2>{selectedTest.name}</h2>
            <p>{selectedTest.description}</p>

            {/* Show questions or result */}
            {!testCompleted ? (
              <>
                <div className="question">
                  <p>{selectedTest.questions[currentQuestionIndex].question}</p>
                  {selectedTest.questions[currentQuestionIndex].options.map((option, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={option}
                        onChange={() => handleAnswerChange(option)}
                        checked={userAnswers[currentQuestionIndex] === option}
                      />
                      {option}
                    </label>
                  ))}
                </div>

                <button onClick={handleNextQuestion}>
                  {currentQuestionIndex < selectedTest.questions.length - 1 ? 'Next' : 'Submit'}
                </button>
              </>
            ) : (
              <div className="test-result">
                <h3>Results</h3>
                <p>{testResult}</p>
              </div>
            )}

            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestChooser;
