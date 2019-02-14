import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';
import News from './News';

class StreamNews extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentWillMount() {
        console.log('[Newsfeed] StreamNews: 1. Running componentWillMount()');

        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Latest public news from NewsAPI',
        });

        window.newsfeed = {
            numberOfReceivedNews: 1,
            numberOfDisplayedNews: 1,
        };
    }

    componentDidMount = () => {
        console.log('[Newsfeed] StreamNews: 3. Running componentDidMount()');
        const componentDOMRepresentation = ReactDOM.findDOMNode(this.ref.current);
        window.newsfeed.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.newsfeed.newsHtml = componentDOMRepresentation.children[1].outerHTML;
    };

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('[Newsfeed] StreamNews: 4. Running componentWillReceiveProps()');

        const { news: currentNews } = this.props;
        const { news: nextNews } = nextProps;
        const currentNewsLength = currentNews.text.length;
        const nextNewsLength = nextNews.text.length;
        const isNumberOfCharactersIncreasing = (nextNewsLength > currentNewsLength);
        let headerText;

        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
        });

        if (isNumberOfCharactersIncreasing) {
            headerText = 'Number of characters is increasing';
        } else {
            headerText = 'Latest public news from NewsAPI';
        }

        this.setState({
            headerText
        });

        window.newsfeed.numberOfReceivedNews++;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Newsfeed] StreamNews: 5. Running shouldComponentUpdate()');
        return (nextProps.news.text.length > 1);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Newsfeed] StreamNews: 6. Running componentWillUpdate()');
    }

    render() {
        console.log('[Newsfeed] StreamNews: Running render()');
        const { headerText } = this.state;
        const { news, onAddNewsToCollection } = this.props;

        return (
            <section ref={this.ref}>
                <Header text={headerText} />
                <News
                    news={news}
                    onClick={onAddNewsToCollection}
                />
            </section>
        );
    }

    componentDidUpdate(prevProps, prevState, nextContext) {
        console.log('[Newsfeed] StreamNews: 7. Running componentDidUpdate()');
        window.newsfeed.numberOfDisplayedNews++;
    }

    componentWillUnmount() {
        console.log('[Newsfeed] StreamNews: 8. Running componentWillUnmount()');
        delete window.newsfeed;
    }

}

export default StreamNews;
