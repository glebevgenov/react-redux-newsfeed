import React, { Component } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import CollectionControls from './CollectionControls';
import NewsList from './NewsList';
import Header from './Header';
import CollectionUtils from '../utils/CollectionUtils';
import store from '../redux/store';


class Collection extends Component {

    createHtmlMarkup = () => {
        const { nl } = this.props;
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <Provider store={store}>
                <NewsList nl={nl}/>
            </Provider>
        );
        const htmlMarkup = {
            html: htmlString,
        };

        return JSON.stringify(htmlMarkup);
    };

    render() {
        const { nl } = this.props;
        const numberOfNewsInCollection = CollectionUtils.getNumberOfNewsInCollection(nl);

        if (numberOfNewsInCollection > 0) {
            const htmlMarkup = this.createHtmlMarkup();
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

const mapStateToProps = state => state.collection;
const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Collection);
