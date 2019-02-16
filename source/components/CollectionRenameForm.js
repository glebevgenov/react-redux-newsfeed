import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Button from './Button';
import { setName, toggleIsEditingName, setEditingName } from '../actions';

class CollectionRenameForm extends Component {

    componentDidMount() {
        this.collectionNameInput.focus();
    }

    render() {
        const {
            editingName,
            onInput,
            onSubmit,
            onCancel
        } = this.props;
        return (
            <form className="form-inline" onSubmit={onSubmit}>
                <Header text="Collection name:"/>
                <div className="form-group">
                    <input
                        className="form-control mr-2"
                        onChange={onInput}
                        value={editingName}
                        ref={input => { this.collectionNameInput = input; }}
                    />
                </div>
                <Button
                    label="Change"
                    handleClick={onSubmit}
                />
                <Button
                    label="Cancel"
                    handleClick={onCancel}
                />
            </form>
        );
    }
}
const mapStateToProps = state => state.collection;
const mapDispatchToProps = (dispatch, ownProps) => ({
    onInput: (event) => dispatch(setEditingName(event.target.value)),
    onSubmit: (event) => {
        event.preventDefault();
        dispatch(setName(ownProps.editingName));
    },
    onCancel: (event) => {
        event.preventDefault();
        dispatch(toggleIsEditingName());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionRenameForm);
