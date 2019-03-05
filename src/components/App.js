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
                                Лента новостей
                            </div>
                            <ul className="small">
                                <li>
                                    отображает последнюю новость от новостного API
                                </li>
                                <li>
                                    обновление новости происходит через 15 с.
                                </li>
                                <li>
                                    по щелчку новость попадает в ленту справа
                                </li>
                            </ul>
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

