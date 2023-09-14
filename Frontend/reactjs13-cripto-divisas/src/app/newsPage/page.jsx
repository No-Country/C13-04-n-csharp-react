import React from 'react';
import News from '../../components/news/news';
import { getNews } from '@/utils/fetch';

const Page = async () => {
  const result = await getNews();
  console.log(result);

  return (
    <div className='container'>
      <h1 className="text-center mt-4 mb-4 fw-bold text-xl neon-text"
        style={{ color: "#FF7C03" }}>NOTICIAS</h1>
      <News articles={result} /> {/* Utiliza el componente News */}
    </div>
  );
};

export default Page;
