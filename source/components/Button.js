import React from 'react';

const buttonStyle = {
    margin: '10px 0'
};

const Button = ({ label, handleClick }) => (
    <button
        className="btn btn-primary mr-2"
        style={buttonStyle}
        onClick={handleClick}
    >
        {label}
    </button>
);

export default Button;
