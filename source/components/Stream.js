import React, { Component } from 'react';
import StreamNews from './StreamNews';
import Header from './Header';
import NewsStore from '../stores/NewsStore';

class Stream extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: NewsStore.getNews(),
        };
        console.log('Stream constructor');
    }

    componentDidMount() {
        NewsStore.addChangeListener(this.onNewsChange);
    }

    componentWillUnmount() {
        NewsStore.removeChangeListener(this.onNewsChange);
    }

    onNewsChange = () => {
        this.setState({
            news: NewsStore.getNews()
        });
    };

    render() {
        const { news } = this.state;
        const headerText = 'Waiting for public news...';

        if (news) {
            return (
                <StreamNews news={news} />
            );
        }

        return (
            <Header text={headerText} />
        );
    }
}

export default Stream;
