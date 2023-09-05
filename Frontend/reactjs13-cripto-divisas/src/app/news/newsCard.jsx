function NewsCard({ title, content, imageUrl, date }) {
    return (
        <div className="news-card m-5">
            <p className="p-3 mb-2 rounded-4"
                style={{ backgroundColor: '#C6C6C6' }}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="news-image">
                            <img src={imageUrl} alt={title}
                                className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="news-content">
                            <h3>{title}</h3>
                            <p>{content}</p>
                            <div className="news-footer">
                                <p className="news-date text-dark fw-bold">{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </p>
        </div>
    );
}

export default NewsCard;
