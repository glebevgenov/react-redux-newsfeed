import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { setName, toggleIsEditingName, setEditingName } from '../redux/actions';

class CollectionRenameForm extends Component {

    componentDidMount() {
        this.collectionNameInput.focus();
    }

    render() {
        const {
            editingName,
            onInput,
            onInputKeyPress,
            onChangeClick,
            onCancelClick
        } = this.props;
        return (
            <div className="row mx-n2">
                <div className="col-md-4 px-2">
                    <input
                        className="form-control"
                        onChange={onInput}
                        onKeyPress={onInputKeyPress}
                        value={editingName}
                        ref={input => { this.collectionNameInput = input; }}
                    />
                </div>
                <div className="col-md-4 px-2">
                    <Button
                        label="Change"
                        handleClick={onChangeClick}
                    />
                </div>
                <div className="col-md-4 px-2">
                    <Button
                        label="Cancel"
                        handleClick={onCancelClick}
                    />
                </div>
            </div>                    
        );
    }
}

const mapStateToProps = state => state.collection;
const mapDispatchToProps = dispatch => ({
    onInput: (event) => dispatch(setEditingName(event.target.value)),
    onInputKeyPress: (event) => {
        if (event.key === 'Enter') {
            dispatch(setName());
        } 
    },
    onChangeClick: (event) => {
        event.preventDefault();
        dispatch(setName());
    },
    onCancelClick: (event) => {
        event.preventDefault();
        dispatch(toggleIsEditingName());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionRenameForm);