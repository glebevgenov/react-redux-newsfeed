import React, { Component } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls';
import NewsList from './NewsList';
import Header from './Header';

class Collection extends Component {

    createHtmlMarkupStringOfNewsList = () => {
        const {nl} = this.props;
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <NewsList nl={nl}/>
        );
        const htmlMarkup = {
            html: htmlString,
        };

        return JSON.stringify(htmlMarkup);
    };

    getListOfNewsIds = () => Object.keys(this.props.nl);

    getNumberOfNewsInCollection = () => this.getListOfNewsIds().length;

    render() {
        const numberOfNewsInCollection = this.getNumberOfNewsInCollection();

        if (numberOfNewsInCollection > 0) {
            const {
                nl,
                onRemoveAllNewsFromCollection,
                onRemoveNewsFromCollection
            } = this.props;

            const htmlMarkup = this.createHtmlMarkupStringOfNewsList();

            return (
                <div>
                    <CollectionControls
                        numberOfNewsInCollection={numberOfNewsInCollection}
                        htmlMarkup={htmlMarkup}
                        onRemoveAllNewsFromCollection={onRemoveAllNewsFromCollection}
                    />
                    <NewsList
                        nl={nl}
                        onRemoveNewsFromCollection={onRemoveNewsFromCollection}
                    />
                </div>
            );
        }
        return <Header text="Your collection is empty"/>;
    }
}

export default Collection;
