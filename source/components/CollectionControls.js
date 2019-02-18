import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Button from './Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from './CollectionExportForm';
import { toggleIsEditingName, removeAllNewsFromCollection } from '../redux/actions';

class CollectionControls extends Component {

    getHeaderText = () => {
        const { name } = this.props;
        const { numberOfNewsInCollection } = this.props;
        let text = numberOfNewsInCollection;

        if (numberOfNewsInCollection === 1) {
            text = `${text} news article in your`;
        } else {
            text = `${text} news articles in your`;
        }

        return (
            <span>
                {text} <strong>{name}</strong> collection
            </span>
        );
    };

    render() {
        const {
            name,
            isEditingName,
            htmlMarkup,
            onRenameCollection,
            onEmptyCollection,
        } = this.props;

        if (isEditingName) {
            return (
                <CollectionRenameForm name={name} />
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()}/>

                <Button
                    label="Rename collection"
                    handleClick={onRenameCollection}
                />

                <Button
                    label="Empty collection"
                    handleClick={onEmptyCollection}
                />

                <CollectionExportForm htmlMarkup={htmlMarkup} />
            </div>
        );
    }
}

const mapStateToProps = state => state.collection;
const mapDispatchToProps = dispatch => ({
    onRenameCollection: () => {
        dispatch(toggleIsEditingName());
    },
    onEmptyCollection: () => {
        dispatch(removeAllNewsFromCollection());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionControls);
