import React, { Component } from 'react';
import News from './News';
import NewsUtils from '../utils/NewsUtils';

const listStyle = {
    padding: '0'
};

const listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

class NewsList extends Component {

    getNewsElement = (newsId) => {
        const { nl, onRemoveNewsFromCollection } = this.props;
        const news = nl[newsId];
        let newsElement;

        if (onRemoveNewsFromCollection) {
            newsElement = (
                <News
                    news={news}
                    onClick={onRemoveNewsFromCollection}
                />
            );
        } else {
            newsElement = <News news={news}/>;
        }

        return (
            <li style={listItemStyle} className="align-top" key={news.id}>
                {newsElement}
            </li>
        );
    };

    render() {
        const { nl } = this.props;
        const newsElements = NewsUtils
            .getListOfNewsIds(nl)
            .map(this.getNewsElement);

        return (
            <ul style={listStyle}>
                {newsElements}
            </ul>
        );
    }
}

export default NewsList;
