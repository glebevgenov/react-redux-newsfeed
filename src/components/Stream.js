import React, { Component } from 'react';
import { connect } from 'react-redux';
import StreamNews from './StreamNews';
import Header from './Header';

class Stream extends Component {

    render() {
        const { news } = this.props;
        const headerText = 'Waiting for public news...';

        if (news) {
            return (
                <StreamNews news={news} />
            );
        }

        return (
            <Header text={headerText} />
        );
    }
}

const mapStateToProps = news => news;
const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stream);
