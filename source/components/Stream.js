import React, { Component } from 'react';
import NewsStream from '../services/NewsStream';
import StreamNews from './StreamNews';
import Header from './Header';

class Stream extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: null
        };
    }

    componentDidMount() {
        this.ns = new NewsStream();
        this.ns.on('news', this.handleLatestNews);
        this.ns.start();
    }

    componentWillUnmount() {
        this.ns.stop();
        delete this.ns;
    }

    handleLatestNews = (news) => {
        this.setState({
            news: news
        });
    };

    render() {
        const { news } = this.state;
        const { onAddNewsToCollection } = this.props;
        const headerText = 'Waiting for public news...';

        if (news) {
            return (
                <StreamNews
                    news={news}
                    onAddNewsToCollection={onAddNewsToCollection}
                />
            );
        }

        return (
            <Header
                text={headerText}/>
        );
    }
}

export default Stream;
