import React, { Component } from 'react';
import './News.css';

class News extends Component {

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
            <div onClick={this.handleClick} className="News card d-flex text-left">
                <img
                    alt={title}
                    src={mediaUrl}
                    className="News__image"
                />
                <div className="card-body">
                    <div className="News__title card-title">{title}</div>
                    <a
                        className="btn btn-primary"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >Go to news</a>
                </div>
            </div>
        );
    }
}

export default News;
