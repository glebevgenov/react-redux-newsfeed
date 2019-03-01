import React from 'react';
import { connect } from 'react-redux';
import News from './News';
import { removeNewsFromCollection } from '../redux/actions';

const NewsList = ({ newsList, onRemove }) => {
    return (
        <div className="NewsList row">
            {Object.keys(newsList).map(id => {
                let news = newsList[id];
                return <div className="col-lg-4" key={id}>
                    <News
                        news={news}
                        onClick={onRemove}
                    />
                </div>
            })}
        </div>
    );
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
    onRemove: ({ id }) => {
        dispatch(removeNewsFromCollection(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList);
