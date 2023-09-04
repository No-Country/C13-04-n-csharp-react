import React from 'react';
import NewsCard from './newsCard'; // Asegúrate de que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';

const newsData = [
  {
    title: `Binance Partners with Taiwan's New Taipei District Prosecutors Office to Bolster Investigative Skills Against Cybercrimes`,
    content: `Workshop held as part of Binance's Global Law Enforcement Training Program
    Binance, a leading cryptocurrency exchange, recently collaborated with Taiwan's New Taipei
    District Prosecutors Office to conduct a workshop aimed at enhancing the investigative skills 
    of over 70 prosecutors in the virtual asset space.
    The workshop is part of Binance's Global Law Enforcement Training Program,
    which organized over 60 in-person and online training sessions in 2023, 
    including a session with Taiwan's Criminal Investigation Bureau in June.
    The initiative brought together more than 70 prosecutors and assistant prosecutors, 
    both on-site and virtually, to discuss a range of topics, such as recent crime trends 
    in the virtual asset space, blockchain and digital asset investigations basics, and case studies
    of Binance's efforts in combating financial crimes globally in partnership with law enforcement
    agencies and financial intelligence units.`,
    imageUrl: '/images/news/d8f9d34e3bcf0b6be27614fe01896805-cover.jpeg',
    date: '2023-08-25',
  },
  {
    title: 'Binance Announces Helmet Design Contest in Partnership with Alpine F1 Driver Pierre Gasly',
    content: `August 23, 2023, DUBAI - Binance, the global blockchain ecosystem behind the world’s leading 
    cryptocurrency exchange, today announced its partnership with BWT Alpine F1 Team driver Pierre Gasly.
    As part of this collaboration, Binance is launching a contest to design Gasly's helmet for the Abu Dhabi Grand Prix,
    taking place on November 26, 2023. The competition is open to all existing and new Binance users as well as F1 enthusiasts worldwide. 
    Participants are encouraged to “unleash their creativity” by submitting their helmet designs before September 8, 2023. The core of this
    contest is dedicated to creativity and excellence. Designs that reflect Binance’s values, resonate with its innovative ethos, and align 
    with the campaign's objectives of fostering connections within the motorsport community, will play a crucial role in the selection process.
    A comprehensive list of requirements can be found in the Terms & Conditions of the contest. `,
    imageUrl: '/images/news/6e2f71beba64f22c4efa3c28009f36c8-cover.jpeg',
    date: '2023-08-23',
  },
  {
    title: '',
    content: ``,
    imageUrl: '',
    date: ''       // Agrega la fecha aquí
  }
];

function NewsPage() {
  return (
    <div className="news-page" style={{backgroundColor: '#A7A7A7'}}>
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          content={news.content}
          imageUrl={news.imageUrl}
          date={news.date}
        />
      ))}
    </div>
  );
}

export default NewsPage;
