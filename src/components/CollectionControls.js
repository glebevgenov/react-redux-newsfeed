import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from './CollectionExportForm';
import { toggleIsEditingName, removeAllNewsFromCollection } from '../redux/actions';

const CollectionControls = ({
    name,
    isEditingName,
    onRenameCollection,
    onEmptyCollection,
}) => {
    return (
        <div className="card bg-dark text-light form-group">
            <div className="card-body row d-flex flex-row">
                <div className="col-md-4 align-self-center">{name}</div>
                <div className="col-md-8 align-self-center">
                    {isEditingName ? (
                        <CollectionRenameForm name={name} />
                    ) : (<div className="row mx-n2">
                        <div className="col-md-4 px-2">
                            <Button
                                label="Переименовать"
                                handleClick={onRenameCollection}
                            />
                        </div>
                        <div className="col-md-4 px-2">   
                            <Button
                                label="Очистить"
                                handleClick={onEmptyCollection}
                            />
                        </div>
                        <div className="col-md-4 px-2">   
                            <CollectionExportForm />
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
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
