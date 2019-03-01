import React from 'react';
import Collection from './Collection';
import News from './News';
import { connect } from 'react-redux';
import { addNewsToCollection } from '../redux/actions';

const App = ({ news, onClick}) => {
    return (
        <div className="App container my-5">
            <div className="row">
                <div className="col-lg-3">
                    <News
                        news={news}
                        onClick={() => onClick(news)}
                    />
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                Послдняя новость
                            </div>
                            <div className="card-subtitle mb-2 text-muted">
                                NewsAPI
                            </div>
                            <p className="small">
                                Отображает последнюю новость позволяя добавлять и удалять ее из ленты по щелчку. Новость обновляется через 15 с.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <Collection />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ news }) => ({ news });
const mapDispatchToProps = dispatch => ({
    onClick: (news) => {
        dispatch(addNewsToCollection(news));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

