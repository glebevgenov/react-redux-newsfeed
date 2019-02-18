import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewsList.css';
import News from './News';
import NewsUtils from '../utils/NewsUtils';
import { removeNewsFromCollection } from '../redux/actions';

class NewsList extends Component {

    getNewsElement = (newsId) => {
        const { nl, onRemoveNewsFromCollection } = this.props;
        const news = nl[newsId];
        const newsElement = (
            <News
                news={news}
                onClick={onRemoveNewsFromCollection}
            />
        );

        return (
            <li className="NewsList__item align-top" key={news.id}>
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
            <ul className="NewsList">
                {newsElements}
            </ul>
        );
    }
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
    onRemoveNewsFromCollection: ({ id }) => {
        dispatch(removeNewsFromCollection(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList);
