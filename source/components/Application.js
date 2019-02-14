import React, { Component } from 'react';
import Stream from './Stream';
import Collection from './Collection';

class Application extends Component {

    state = {
        collectionNl: {}
    };

    addNewsToCollection = (news) => {
        const { collectionNl } = this.state;
        collectionNl[news.id] = news;
        this.setState({collectionNl: collectionNl});
    };

    removeNewsFromCollection = (news) => {
        const { collectionNl } = this.state;
        delete collectionNl[news.id];
        this.setState({ collectionNl: collectionNl});
    };

    removeAllNewsFromCollection = () => {
        this.setState({
            collectionNl: {}
        });
    };

    render() {

        const {
            addNewsToCollection,
            removeNewsFromCollection,
            removeAllNewsFromCollection
        } = this;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <Stream onAddNewsToCollection={addNewsToCollection} />
                    </div>
                    <div className="col-md-9">
                        <Collection
                            nl={this.state.collectionNl}
                            onRemoveNewsFromCollection=
                                {removeNewsFromCollection}
                            onRemoveAllNewsFromCollection=
                                {removeAllNewsFromCollection}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Application;

