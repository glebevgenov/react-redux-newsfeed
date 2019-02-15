import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from './CollectionExportForm';
import CollectionActionCreators from '../actions/CollectionActionCreators';
import CollectionStore from '../stores/CollectionStore';

class CollectionControls extends Component {

    state = {
        isEditingName: false
    };

    getHeaderText = () => {
        const name = CollectionStore.getCollectionName();
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

    toggleEditCollectionName = () => {
        this.setState(prevState => ({
            isEditingName: !prevState.isEditingName
        }));
    };

    removeAllNewsFromCollection = () => {
        CollectionActionCreators.removeAllNewsFromCollection();
    };

    render() {
        const { name, isEditingName } = this.state;
        const { htmlMarkup } = this.props;

        if (isEditingName) {
            return (
                <CollectionRenameForm
                    name={name}
                    onCancelCollectionNameChange={this.toggleEditCollectionName}
                />
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()}/>

                <Button
                    label="Rename collection"
                    handleClick={this.toggleEditCollectionName}
                />

                <Button
                    label="Empty collection"
                    handleClick={this.removeAllNewsFromCollection}
                />

                <CollectionExportForm htmlMarkup={htmlMarkup} />
            </div>
        );
    }
}

export default CollectionControls;
