import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import News from './News';
import { addNewsToCollection } from '../redux/actions';

class StreamNews extends Component {

    render() {
        const { news, onNewsClick } = this.props;

        return (
            <section>
                <Header text="Latest public photo from NewsAPI" />
                <News
                    news={news}
                    onClick={onNewsClick}
                />
            </section>
        );
    }
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
    onNewsClick: (news) => {
        dispatch(addNewsToCollection(news));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamNews);
