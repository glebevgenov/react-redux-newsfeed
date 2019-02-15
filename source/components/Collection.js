import React, { Component } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls';
import NewsList from './NewsList';
import Header from './Header';
import CollectionUtils from '../utils/CollectionUtils';
import CollectionStore from '../stores/CollectionStore';


class Collection extends Component {

    state = {
        nl: CollectionStore.getCollectionNl()
    };

    componentDidMount() {
        CollectionStore.addChangeListener(this.onCollectionChange);
    }

    componentWillUnmount() {
        CollectionStore.removeChangeListener(this.onCollectionChange);
    }

    onCollectionChange = () => {
        this.setState({
            nl: CollectionStore.getCollectionNl()
        });
    };

    createHtmlMarkupStringOfNewsList = () => {
        const { nl } = this.state;
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <NewsList nl={nl}/>
        );
        const htmlMarkup = {
            html: htmlString,
        };

        return JSON.stringify(htmlMarkup);
    };

    render() {
        const { nl } = this.state;
        const numberOfNewsInCollection = CollectionUtils.getNumberOfNewsInCollection(nl);

        if (numberOfNewsInCollection > 0) {
            const htmlMarkup = this.createHtmlMarkupStringOfNewsList();
            return (
                <div>
                    <CollectionControls
                        numberOfNewsInCollection={numberOfNewsInCollection}
                        htmlMarkup={htmlMarkup}
                    />
                    <NewsList nl={nl} />
                </div>
            );
        }
        return <Header text="Your collection is empty"/>;
    }
}

export default Collection;
