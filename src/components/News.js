import React from 'react';
import * as PropTypes from 'prop-types';
import './News.css';

class News extends React.Component {

    handleClick = (event) => {
        const { news, onClick } = this.props;
        if (event.target.tagName.toLowerCase() !== 'a' && onClick) {
            onClick(news);
        }
    };

    render() {
        const { news } = this.props;
        const { title, url, media } = news;
        const mediaUrl = media[0].url;
        return (
            <div onClick={this.handleClick} className="News card text-left">
                <img
                    alt={title}
                    src={mediaUrl}
                    className="News__image"
                />
                <div className="card-body">
                    <h6 className="News__title card-title">{title}</h6>
                    <a
                        className="News__link btn btn-primary mb-3"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >Go to news</a>
                </div>
            </div>
        );
    }
}

News.propTypes = {
    news: (properties, propertyName) => {
        const news = properties[propertyName];
        if (!news) {
            return new Error('News must be set.');
        }
        if (!news.media) {
            return new Error('News must have an image.');
        }
    },
    onClick: PropTypes.func
};

export default News;
