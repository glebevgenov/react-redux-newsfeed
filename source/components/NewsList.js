import React, { Component } from 'react';
import News from './News';
import NewsUtils from '../utils/NewsUtils';
import CollectionActionCreators from '../actions/CollectionActionCreators';

const listStyle = {
    padding: '0'
};

const listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

class NewsList extends Component {

    removeNewsFromCollection = news => {
        CollectionActionCreators.removeNewsFromCollection(news.id);
    };

    getNewsElement = (newsId) => {
        const { nl } = this.props;
        const news = nl[newsId];
        const newsElement = (
            <News
                news={news}
                onClick={this.removeNewsFromCollection}
            />
        );

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
