import React from 'react';
import '../styles/AboutAuthors.css';

const AboutKostenko = () => {
  return (
    <>
      <div className="author-container">
        <h1>Ліна Костенко</h1>
        <div style={{ width: '80%', height: '5px', backgroundColor: '#2b3538', marginLeft: '0px'}}></div>
        <div className="author-content">
          <img
            src="https://esu.com.ua/images/article_images/K/Kostenko%20Lina%20Vasilivna.jpg" // Replace with actual image
            alt="Taras Shevchenko"
            className="author-photo"
          />
          <div className="author-text">
            <p>
            <b>Ліна Костенко</b> — одна з найбільших сучасних українських поетес, прозаїків та публіцистів, чиї твори стали важливими для розвитку української літератури у XX–XXI століттях. Народилася <b>19 березня 1930 року </b>в місті Ржищів Київської області. Ліна Костенко — представниця <b>"шістдесятників"</b>, покоління, яке боролося за права людини та свободу творчості в умовах радянської тоталітарної системи. Її творчість поєднує <b>глибокі філософські роздуми з патріотичними мотивами</b> та закликами до національного відродження України.

Перші вірші Ліна Костенко почала писати ще в юному віці, і вже в 1957 році вийшла її перша збірка поезій "Проміння землі". 
            </p>
          </div>
        </div>
        <div className="author-text2">
          <p>
          Однак справжнє визнання прийшло до неї після публікації збірки <b>"Мандрівка серця"</b> в 1961 році, а потім і збірок <b>"Сад нетанучих скульптур" і "Неповторність"</b>, де вона продовжила розвивати теми національної самосвідомості, боротьби за права людини і моральних принципів. Твори Ліни Костенко вражають глибиною змісту, високою мовною культурою та складністю образів. Вона є автором численних <b>поетичних і прозових творів</b>, серед яких особливо виділяються її романи <b>"Записки українського самашедшого" та "Берестечко"</b>, а також поетичний цикл <b>"Чарівний світ"</b>.
          </p>


        </div>

        <div className="author-content">
        <div className="author-text">
            <p>
            Ліна Костенко завжди була на передовій <b>боротьби за свободу слова та культури в Україні</b>, особливо в періоди радянських репресій. Вона відмовлялася публікувати свої твори в періоди цензури, виступала проти <b>ідеологічного диктату і обмеження творчої свободи</b>. Важливим етапом її життя стала участь у <b>"шістдесятницькому"</b> русі, що виступав за національну і культурну гідність українців, а також за права особистості в умовах тоталітарного режиму. Ліна Костенко залишається однією з найвідоміших та найшанованіших постатей сучасної української літератури.
            </p>
          </div>
          <img
            src="https://pbs.twimg.com/profile_images/3754809391/0eeb8ec167b3f49c4eb6b207618f2800_400x400.jpeg" // Replace with actual image
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

      </>
  );
};

export default AboutKostenko;