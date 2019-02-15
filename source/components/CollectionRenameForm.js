import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Button from './Button';
import { setName, toggleIsEditingName, setEditingName } from '../actions';

class CollectionRenameForm extends Component {

    setInputValue(inputValue) {
        const { onInputValueChange } = this.props;
        onInputValueChange(inputValue);
    }

    handleInputValueChange = (event) => {
        this.setInputValue(event.target.value);
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { editingName, onFormSubmit } = this.props;
        onFormSubmit(editingName);
    };

    handleFormCancel = (event) => {
        event.preventDefault();
        const { name, onFormCancel } = this.props;
        this.setInputValue(name);
        onFormCancel();
    };

    componentDidMount() {
        this.collectionNameInput.focus();
    }

    render() {
        const { editingName } = this.props;
        return (
            <form className="form-inline" onSubmit={this.handleFormSubmit}>
                <Header text="Collection name:"/>
                <div className="form-group">
                    <input
                        className="form-control mr-2"
                        onChange={this.handleInputValueChange}
                        value={editingName}
                        ref={input => { this.collectionNameInput = input; }}
                    />
                </div>
                <Button
                    label="Change"
                    handleClick={this.handleFormSubmit}
                />
                <Button
                    label="Cancel"
                    handleClick={this.handleFormCancel}
                />
            </form>
        );
    }
}
const mapStateToProps = state => state.collection;
const mapDispatchToProps = dispatch => ({
    onInputValueChange: (inputValue) => dispatch(setEditingName(inputValue)),
    onFormSubmit: (name) => dispatch(setName(name)),
    onFormCancel: () => dispatch(toggleIsEditingName()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionRenameForm);
