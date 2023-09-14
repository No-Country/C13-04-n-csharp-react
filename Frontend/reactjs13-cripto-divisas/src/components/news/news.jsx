import React from 'react';

const News = ({ articles }) => {

    if (!Array.isArray(articles) || articles.length === 0) {
        return <div>No hay artículos disponibles.</div>;
    }

    return (
        <div className="container" >
            {articles.map((article) => (
                <div key={article.article_id} className="row mb-4 p-4 rounded-4 "
                    style={{ backgroundColor: '#A7A7A7' }}>
                    <div className="col-md-4 col-12 mt-3 mt-md-0">
                        <img
                            src={article.image_url}
                            alt={article.title}
                            className="img-fluid mx-auto rounded-4"
                        />
                    </div>
                    <div className="col-md-8 col-12 mt-2">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>

                        <button type="button" className="btn float-right  custom-button">
                            <a href={article.link} target="_blank" className="text-dark text-decoration-none">Fuente original</a>
                        </button>


                    </div>
                </div>
            ))}
        </div>
    );
};

export default News;
