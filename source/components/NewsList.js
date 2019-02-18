import React, { Component } from 'react';
import { connect } from 'react-redux';
import News from './News';
import NewsUtils from '../utils/NewsUtils';
import { removeNewsFromCollection } from '../redux/actions';

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
        const newsElement = (
            <News
                news={news}
                onClick={onRemoveNewsFromCollection}
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
