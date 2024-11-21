import React from 'react';
import '../styles/InterestingFacts.css';

const authors = [
  { id: 1, name: 'Шевченко', facts: [
    'Шевченко був пророком для своєї нації: У своїх віршах Шевченко передбачав багато подій, що сталися в Україні після його смерті. Він часто звертався до теми національної незалежності та боротьби за права українців, що стало актуальним вже через багато років після його загибелі.',
    'Історія з його автопортретом: Шевченко зробив автопортрет у 1840-х роках, і він вважається однією з найкращих його робіт. Цей автопортрет Шевченко малював на замовлення одного з його друзів. Інтригуюче те, що він зобразив себе без бороди, хоча в реальному житті носив її майже завжди.',
    '"Заповіт" — символ боротьби: Вірш "Заповіт" став справжнім гімном української національної свідомості. І хоча Шевченко писав його наприкінці свого життя, його слова «І славу, і волю» стали основою для революційних рухів в Україні.',
    'Шевченко і Петербург: Під час свого перебування в Санкт-Петербурзі Шевченко неодноразово ставав обєктом уваги як з боку аристократів, так і з боку простого люду. Однак, попри славу і підтримку художників, він часто відчував себе чужим в цьому оточенні через своє походження.'
  ] },
  { id: 2, name: 'Франко', facts: [
    'She was the first woman to win a Nobel Prize.',
    'She discovered radium and polonium.',
    'She founded the Curie Institute in Paris.'
  ] },
  { id: 3, name: 'Леся Українка', facts: [
    'He formulated the laws of motion and universal gravitation.',
    'He invented the reflecting telescope.',
    'He was a key figure in the scientific revolution.'
  ] },
  { id: 4, name: 'Хвильовий', facts: [
    'He developed the modern alternating current (AC) electricity supply system.',
    'He was known for his eccentric personality.',
    'He had over 300 patents for his inventions.'
  ] }
];

const AuthorFacts = () => {
  return (
    <div className="author-facts">
      <h1>Learn Interesting Facts About Authors</h1>

      <div className="author-list">
        {authors.map((author) => (
          <div
            key={author.id}
            className="author-item"
            onClick={() => {
              const authorElement = document.getElementById(`author-${author.id}`);
              authorElement.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <h2>{author.name}</h2>
          </div>
        ))}
      </div>

      <div className="author-details">
        {authors.map((author) => (
          <div
            key={author.id}
            id={`author-${author.id}`}
            className="author-detail"
          >
            <h2>Facts about {author.name}:</h2>
            <ul className="facts-list">
              {author.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorFacts;
