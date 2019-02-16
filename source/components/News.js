import React from 'react';
import * as PropTypes from 'prop-types';

const newsStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '300px',
    height: '400px',
    margin: '10px'
};

const imageStyle = {
    objectFit: 'cover',
    maxHeight: '200px',
    width: '100%',
};

const titleStyle = {
    maxHeight: '200px',
};

const linkStyle = {
    position: 'absolute',
    bottom: 0,
};

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
            <div onClick={this.handleClick} style={newsStyle} className="card text-left">
                <img
                    alt="No image"
                    src={mediaUrl}
                    style={imageStyle}
                />
                <div className="card-body">
                    <h6 style={titleStyle} className="card-title">{title}</h6>
                    <a
                        style={linkStyle}
                        className="btn btn-primary mb-3"
                        href={url}
                        target="_blank"
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
    onImageClick: PropTypes.func
};

export default News;
