import React from 'react';
import { connect } from 'react-redux';
import CollectionControls from './CollectionControls';
import NewsList from './NewsList';

const Collection = ({ newsList }) => {

    const collectionLength = Object.keys(newsList).length;
    if (!collectionLength > 0) {
        return null;
    }
    return (
        <div>
            <CollectionControls collectionLength={collectionLength} />
            <NewsList newsList={newsList} />
        </div>
    );
}

const mapStateToProps = state => state.collection;
const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Collection);