import React, { Component } from 'react';
import { Provider } from 'react-redux';
import * as ReactDOMServer from 'react-dom/server';
import store from '../redux/store';
import NewsList from './NewsList';
import { connect } from 'react-redux';

class CollectionExportForm extends Component {

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    createHtmlMarkup = () => {
        const { newsList } = this.props;
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <Provider store={store}>
                <NewsList newsList={newsList}/>
            </Provider>
        );
        const htmlMarkup = {
            html: htmlString,
        };

        return JSON.stringify(htmlMarkup);
    };

    handleClick = () => {
        this.formRef.current.submit();
    }
    
    render() {
        return <React.Fragment>
            <button 
                className="btn btn-primary btn-block"
                onClick={this.handleClick}
            >
                Экспорт в HTML
            </button>
            <form
                action="https://codepen.io/pen/define"
                method="POST"
                target="_blank"
                className="CollectionExportForm"
                ref={this.formRef}
            >
                <input type="hidden" name="data" value={this.createHtmlMarkup()}/> 
            </form>
        </React.Fragment>
    }
}

const mapStateToProps = state => state.collection;
const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionExportForm);
