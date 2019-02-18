import React from 'react';
import './Header.css';

export const DEFAULT_HEADER_TEXT = 'Default header';

class Header extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <h2 className="Header">{text}</h2>
        );
    }
}

Header.defaultProps = {
    text: DEFAULT_HEADER_TEXT
};

export default Header;
