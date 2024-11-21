import React from 'react';
import '../styles/AboutAuthors.css';

const Taras = () => {
  return (
    <div className="author-container">
      <h1>Тарас Шевченко</h1>
      <div className="author-content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Taras_Shevchenko_selfportrait_oil_1840-2.jpg/248px-Taras_Shevchenko_selfportrait_oil_1840-2.jpg"
          alt="Taras Shevchenko"
          className="author-photo"
        />
        <div className="author-text">
          <p>
            Тарас Григорович Шевченко народився 9 березня 1814 року в селі Моринці на Черкащині в родині кріпаків...
          </p>
        </div>
      </div>
      <div className="author-text2">
        <p>
          Проте його життя було омрачене численними переслідуваннями. У 1847 році, за участь у Кирило-Мефодіївському братстві...
        </p>
      </div>
      <div className="author-content">
        <div className="author-text">
          <p>
            В останні роки свого життя Шевченко продовжував творити, проте він вже не зміг повернутися до рідної України...
          </p>
        </div>
        <img
          src="https://www.writers.in.ua/wp-content/uploads/2019/02/taras-shevchenko.jpg"
          alt="Taras Shevchenko"
          className="author-photo"
        />
      </div>

      <div className="author-actions">
        <p className="action-text1">Виконати тест</p>
        <p className="action-text2">Почути голос письменника</p>
        <p className="action-text3">Цікаві факти</p>
      </div>
    </div>
  );
};

export default Taras;
