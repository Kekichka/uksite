import React, { useState } from 'react';
import '../styles/TestChooser.css';

// Test data with questions and options
const tests = [
  {
    id: 1,
    name: 'Біографія Шевченка',
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
        correctAnswer: 'Петербузька академія мистецтв',
      },
      {
        question: 'Як називається село, де народився Тарас Шевченко?',
        options: ['Моринці', 'Великий Рожин', 'Лубни'],
        correctAnswer: 'Моринці',
      },
    ],
  },
    {
      "id": 2,
      "name": "Біографія Лесі Українки",
      "questions": [
        {
          "question": "Яке справжнє ім'я Лесі Українки?",
          "options": ["Лариса Косач", "Олена Пчілка", "Ольга Кобилянська"],
          "correctAnswer": "Лариса Косач"
        },
        {
          "question": "Де народилася Леся Українка?",
          "options": ["Київ", "Новоград-Волинський", "Львів"],
          "correctAnswer": "Новоград-Волинський"
        },
        {
          "question": "Яка хвороба переслідувала Лесю Українку все життя?",
          "options": ["Туберкульоз", "Рак", "Серцево-судинна недостатність"],
          "correctAnswer": "Туберкульоз"
        },
        {
          "question": "Який найвідоміший твір Лесі Українки?",
          "options": ["Лісова пісня", "Національний гімн", "Енеїда"],
          "correctAnswer": "Лісова пісня"
        },
        {
          "question": "Скільки мов знала Леся Українка?",
          "options": ["5", "10", "14"],
          "correctAnswer": "10"
        }
      ]
    }
    ,
    {
      "id": 3,
      "name": "Біографія Івана Франка",
      "questions": [
        {
          "question": "Коли народився Іван Франко?",
          "options": ["1856", "1846", "1860"],
          "correctAnswer": "1856"
        },
        {
          "question": "Яке справжнє ім'я Івана Франка?",
          "options": ["Іван Федорович", "Іван Франкович", "Іван Якович"],
          "correctAnswer": "Іван Федорович"
        },
        {
          "question": "Який твір Івана Франка є одним із його найвідоміших?",
          "options": ["Каменярі", "Мойсей", "Заповіт"],
          "correctAnswer": "Мойсей"
        },
        {
          "question": "До якого університету вступив Іван Франко?",
          "options": ["Львівський університет", "Київський університет", "Чернівецький університет"],
          "correctAnswer": "Львівський університет"
        },
        {
          "question": "Яку діяльність Іван Франко поєднував з літературною?",
          "options": ["Громадську і політичну", "Медичну", "Історичну"],
          "correctAnswer": "Громадську і політичну"
        }
      ]
    }
    ,{
      "id": 4,
      "name": "Біографія Ліни Костенко",
      "questions": [
        {
          "question": "Коли народилася Ліна Костенко?",
          "options": ["1930", "1941", "1937"],
          "correctAnswer": "1930"
        },
        {
          "question": "Як називається найвідоміший роман Ліни Костенко?",
          "options": ["Маруся Чурай", "Записки українського самашедшого", "Берестечко"],
          "correctAnswer": "Маруся Чурай"
        },
        {
          "question": "Які літературні течії вплинули на творчість Ліни Костенко?",
          "options": ["Модернізм, постмодернізм", "Романтизм, імпресіонізм", "Класика, бароко"],
          "correctAnswer": "Модернізм, постмодернізм"
        },
        {
          "question": "Яким чином Ліна Костенко була пов'язана з дисидентським рухом?",
          "options": ["Вона була активною учасницею", "Її твори зазнавали цензури", "Вона виїхала за кордон"],
          "correctAnswer": "Її твори зазнавали цензури"
        },
        {
          "question": "Коли Ліна Костенко опублікувала свій перший поетичний збірник?",
          "options": ["1957", "1961", "1953"],
          "correctAnswer": "1957"
        }
      ]
    }
    ,
    {
      "id": 5,
      "name": "Біографія Миколи Хвильового",
      "questions": [
        {
          "question": "Коли народився Микола Хвильовий?",
          "options": ["1893", "1900", "1887"],
          "correctAnswer": "1893"
        },
        {
          "question": "Як Микола Хвильовий підписував свої твори?",
          "options": ["Хвильовий", "Николаїв", "Тимур"],
          "correctAnswer": "Хвильовий"
        },
        {
          "question": "До якої літературної організації належав Микола Хвильовий?",
          "options": ["ВАПЛІТЕ", "СПУ", "Літературна спілка"],
          "correctAnswer": "ВАПЛІТЕ"
        },
        {
          "question": "Яким маніфестом Микола Хвильовий виступив проти російського впливу?",
          "options": ["«Геть від Москви!»", "«Майбутнє України»", "«Нова епоха»"],
          "correctAnswer": "«Геть від Москви!»"
        },
        {
          "question": "Як завершив своє життя Микола Хвильовий?",
          "options": ["Покінчив із собою", "Емігрував за кордон", "Загинув під час арешту"],
          "correctAnswer": "Покінчив із собою"
        }
      ]
    }
    ,{
      "id": 6,
      "name": "Біографія Василя Стуса",
      "questions": [
        {
          "question": "Коли народився Василь Стус?",
          "options": ["1939", "1941", "1925"],
          "correctAnswer": "1939"
        },
        {
          "question": "Яке основне заняття Василя Стуса після закінчення університету?",
          "options": ["Літературна діяльність", "Вчитель", "Перекладач"],
          "correctAnswer": "Літературна діяльність"
        },
        {
          "question": "Скільки разів Василя Стуса ув'язнювали?",
          "options": ["Тричі", "Двічі", "Чотири рази"],
          "correctAnswer": "Тричі"
        },
        {
          "question": "Яка книга стала символом боротьби Василя Стуса?",
          "options": ["Зимові дерева", "Палімпсести", "Поезії з в'язниці"],
          "correctAnswer": "Зимові дерева"
        },
        {
          "question": "Коли Василь Стус помер?",
          "options": ["1985", "1979", "1982"],
          "correctAnswer": "1985"
        }
      ]
    }
    ,
  {
      "id": 8,
      "name": "Правда / Неправда",
      "questions": [
        {
          "question": "Тарас Шевченко був народжений у Києві.",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Неправда"
        },
        {
          "question": "Ліна Костенко стала лауреатом Шевченківської премії.",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Правда"
        },
        {
          "question": "Іван Франко написав тільки поезії.",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Неправда"
        },
        {
          "question": "Микола Хвильовий був членом ВАПЛІТЕ.",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Правда"
        },
        {
          "question": "Василь Стус не мав жодних зв'язків із дисидентським рухом.",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Неправда"
        },
        {
          "question": "Леся Українка захоплювалася малюванням.",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Правда"
        },
        {
          "question": "Іван Франко вивчав право в університеті.",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Неправда"
        },
        {
          "question": "Ліна Костенко написала роман «Маруся Чурай».",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Правда"
        },
        {
          "question": "Тарас Шевченко не мав жодного відношення до живопису.",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Неправда"
        },
        {
          "question": "Микола Хвильовий закликав до культурної незалежності України.",
          "options": ["Правда", "Неправда"],
          "correctAnswer": "Правда"
        }
      ]
    },    
    {
      "id": 10,
      "name": "Загальний по біографіях ",
      "questions": [
        {
          "question": "Який твір Тараса Шевченка став його найбільш відомим?",
          "options": ["Заповіт", "Катерина", "Кавказ"],
          "correctAnswer": "Заповіт"
        },
        {
          "question": "Як Шевченко перестав бути кріпаком?",
          "options": ["Вбив пана", "Викупили", "Втік"],
          "correctAnswer": "Викупили"
        },
        {
          "question": "Який твір Лесі Українки вважається її найвідомішим?",
          "options": ["Лісова пісня", "Кассандра", "Національний гімн"],
          "correctAnswer": "Лісова пісня"
        },
        {
          "question": "Як звали справжнє ім'я Лесі Українки?",
          "options": ["Лариса Косач", "Олена Пчілка", "Ольга Кобилянська"],
          "correctAnswer": "Лариса Косач"
        },
        {
          "question": "Який твір Івана Франка є найбільш відомим?",
          "options": ["Мойсей", "Каменярі", "Захар Беркут"],
          "correctAnswer": "Мойсей"
        },
        {
          "question": "До якого університету вступив Іван Франко?",
          "options": ["Львівський університет", "Київський університет", "Чернівецький університет"],
          "correctAnswer": "Львівський університет"
        },
        {
          "question": "Як завершив своє життя Микола Хвильовий?",
          "options": ["Покінчив із собою", "Емігрував за кордон", "Загинув під час арешту"],
          "correctAnswer": "Покінчив із собою"
        },
        {
          "question": "Яким маніфестом Микола Хвильовий виступив проти російського впливу?",
          "options": ["«Геть від Москви!»", "«Майбутнє України»", "«Нова епоха»"],
          "correctAnswer": "«Геть від Москви!»"
        },
        {
          "question": "Яка хвороба переслідувала Лесю Українку все життя?",
          "options": ["Туберкульоз", "Рак", "Серцево-судинна недостатність"],
          "correctAnswer": "Туберкульоз"
        },
        {
          "question": "Скільки разів Василя Стуса ув'язнювали?",
          "options": ["Тричі", "Двічі", "Чотири рази"],
          "correctAnswer": "Тричі"
        }
      ]
    }
    
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
                  {currentQuestionIndex < selectedTest.questions.length - 1 ? 'Наступне' : 'Завершити'}
                </button>
              </>
            ) : (
              <div className="test-result">
                <h3>Результат</h3>
                <p>{testResult}</p>
              </div>
            )}

            <button onClick={handleCloseModal}>Закрити</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestChooser;
