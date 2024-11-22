import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import quotesData from '../assets/quotes.json';
import leftArrow from '../images/left.png';
import rightArrow from '../images/right.png';
import icon1 from '../images/biography.png';
import icon2 from '../images/facts.png';
import icon3 from '../images/tests.png';
import AOS from 'aos'; // Імпортуємо бібліотеку
import 'aos/dist/aos.css'; // Імпортуємо стилі для анімацій

const Home = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setQuotes(quotesData);
    AOS.init(); // Ініціалізація AOS при завантаженні компонента
  }, []);

  const handleNext = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrev = () => {
    setCurrentQuoteIndex(
      (prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length
    );
  };

  const currentQuote = quotes[currentQuoteIndex] || {};

  return (
    <div className="home-page">
      <div className="main-content">
        <div className="wrap">
          <picture>
            <img
              className="img-banner"
              src="https://images.unsplash.com/photo-1545310751-fcdeb3a4981d?q=80&w=2940&auto=format&fit=crop"
              alt="Ukrainian woman"
            />
          </picture>
          <div className="content_img-banner">
            <div className="subtitle" data-aos="fade-up" data-aos-duration="1000">
              Ласкаво просимо
            </div>
            <h2 data-aos="fade-up" data-aos-duration="1500">
              до української літератури
            </h2>
          </div>
        </div>

        <section className="about-section">
          <div className="about-box center" data-aos="fade-up" data-aos-duration="2000">
            <h1>Ласкаво просимо на сайт, присвячений українській літературі!</h1>
            <p>
              Ми створили цей ресурс для всіх, хто цінує багатство слова і хоче
              дізнатися більше про видатних авторів, які залишили неповторний слід
              в історії України.
            </p>
          </div>

          <div className="image-container" >
        <img
          className="image-first"
          src="https://i.pinimg.com/736x/8c/d4/f0/8cd4f07af4b928fbe726a57e9778868b.jpg"
          alt="Image 1"
           data-aos="fade-up" data-aos-duration="2000"
        />
        <img
          className="image-second"
          src="https://i.etsystatic.com/8984516/r/il/c54ffb/2845730044/il_1588xN.2845730044_lc36.jpg"
          alt="Image 2"
           data-aos="fade-up" data-aos-duration="2000"
        />
      </div>

          <div className="about-box right" data-aos="fade-up" data-aos-duration="2000">
            <h2>Що ви знайдете на нашому сайті?</h2>
          </div>

          <div className="about-boxes">
            <div className="about-box point" data-aos="fade-up" data-aos-duration="2500">
              <img src={icon1} alt="Пункт 1" />
              <h3>Біографії видатних українських письменників</h3>
              <p>Дізнайтесь більше про життя та творчість великих постатей української літератури — від класиків, таких як Тарас Шевченко та Леся Українка, до сучасних авторів, чиї твори вражають і надихають.</p>
            </div>
            <div className="about-box point" data-aos="fade-up" data-aos-duration="2500">
              <img src={icon2} alt="Пункт 2" />
              <h3>Цікаві факти про авторів</h3>
              <p>Заглибтесь у захопливі історії з життя наших письменників, дізнайтесь невідомі факти про їхній шлях до великого мистецтва та внесок у розвиток культури.</p>
            </div>
            <div className="about-box point" data-aos="fade-up" data-aos-duration="2500">
              <img src={icon3} alt="Пункт 3" />
              <h3>Інтерактивні тести для перевірки знань</h3>
              <p>Перевірте свої знання про українську літературу за допомогою інтерактивних тестів, які дозволяють не лише вивчати, але й закріплювати отриману інформацію у веселий та пізнавальний спосіб.</p>
            </div>
          </div>

          <div className="about-box left" data-aos="fade-up" data-aos-duration="3000">
            <h2>Наша місія</h2>
            <p>
              Українська література — це джерело натхнення, мудрості та культурної
              спадщини. Ми прагнемо зробити її доступнішою для кожного, щоб кожен
              міг відчути її красу та силу.
            </p>
          </div>
        </section>

        <div className="poet_quotes_wrap" data-aos="fade-up" data-aos-duration="3000">
          <div className="quotes">
            <img
              className="poet"
              src={currentQuote.photo}
              alt={currentQuote.author}
            />
            <div className="quote_wrapper">
              <h2>{currentQuote.author}</h2>
              <p>{currentQuote.quote}</p>
            </div>
          </div>
          <div className="navigation">
            <button onClick={handlePrev}>
              <img src={leftArrow} alt="arrow left" />
            </button>
            <button onClick={handleNext}>
              <img src={rightArrow} alt="arrow right" />
            </button>
          </div>
        </div>
        <section className="join-section " data-aos="fade-up" data-aos-duration="3000">
        <div className="join-content" >
          <h1>Долучайтеся!</h1>
          <p>
            Вивчайте творчість улюблених письменників, знаходьте нових героїв української літератури та діліться своїми враженнями.
          </p>
          <blockquote>
            "Пізнай свій край, себе, свій народ, свою землю — і ти побачиш свій шлях у житті."
            <br />
            <span>- Григорій Сковорода</span>
          </blockquote>
        </div>
      </section>
      </div>
      
    </div>
  );
};

export default Home;
