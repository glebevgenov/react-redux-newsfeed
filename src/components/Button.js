import React from 'react';
import './Button.css';

const Button = ({ label, handleClick }) => (
    <button
        className="Button btn btn-primary mr-2"
        onClick={handleClick}
    >
        {label}
    </button>
);

export default Button;
