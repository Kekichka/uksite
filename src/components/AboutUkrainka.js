import React from 'react';
import '../styles/AboutAuthors.css';

const AboutUkrainka = () => {
  return (
    <>
      <div className="author-container">
        <h1>Леся Українка</h1>
        <div style={{ width: '80%', height: '5px', backgroundColor: '#2b3538', marginLeft: '20px'}}></div>
        <div className="author-content">
          
          <div className="author-text">
            <p>
            <b>Леся Українка</b> (справжнє ім'я — Лариса Петрівна Косач) народилася <b>25 лютого 1871 року</b> в Новограді-Волинському (тепер Житомирська область). Вона була однією з найвизначніших постатей української літератури та культури, поетесою, драматургом, публіцистом і активісткою національного руху. В родині інтелігентів вона змалку отримала гарну освіту: <b>знала кілька іноземних мов</b> і відвідувала літературні та театральні гуртки. Літературний псевдонім <b>"Леся Українка"</b> вона обрала, аби підкреслити свою приналежність до українського народу та підтримати національну ідентичність.

З дитинства Леся страждала від важкої хвороби — <b>туберкульозу кісток</b>, який супроводжував її усе життя, однак вона не дозволяла хворобі обмежувати її творчі можливості. 
            </p>
          </div>
          <img
            src="https://onlyart.org.ua/wp-content/uploads/2022/12/Lesya-Ukrainka-1024x1024.jpg" // Replace with actual image
            alt="Lesya Ukrainka"
            className="author-photo"
          />
        </div>
        <div className="author-text2">
          <p>
          Вже у молодому віці вона почала писати вірші, і в <b>13 років</b> її перша публікація з’явилася у журналі <b>"Зоря"</b>. Перші твори поетеси мали яскраво виражений фольклорний характер, а згодом її стиль еволюціонував, стаючи більш глибоким і філософським. Леся Українка писала не лише поезії, а й <b>драматичні твори</b>, зокрема трагедії, що стали класикою української літератури. Серед найвідоміших — <b>"Лісова пісня" та "Кассандра"</b>.
          </p>
        </div>
        <div className="author-content">
        <img
            src="https://www.ranok.com.ua/storage/img/author/84a250baa9514e83.jpg" // Replace with actual image
            alt="Lesya Ukrainka"
            className="author-photo"
          />
        <div className="author-text">
  
            <p>
            Активно залучена до <b>громадсько-політичного життя</b>, Леся Українка була однією з провідних постатей українського національного руху кінця XIX — початку XX століття. Вона підтримувала боротьбу за <b>незалежність України</b>, займалася педагогічною діяльністю, активно писала статті й публіцистичні твори. Вона багато подорожувала, проживала в різних країнах Європи, де знаходила підтримку серед культурної еліти. Леся Українка померла <b>1 серпня 1913 </b> в місті Сурамі (Грузія), залишивши по собі величезну спадщину. Її твори стали основою для розвитку сучасної української літератури та надихають наступні покоління.
            </p>
          </div>
        </div>
        <div className="author-actions">
          <p className="action-text1">Виконати тест</p>
          <p className="action-text2">Почути голос письменниці</p>
          <p className="action-text3">Цікаві факти</p>
        </div>
      </div>

      </>
  );
};

export default AboutUkrainka;
