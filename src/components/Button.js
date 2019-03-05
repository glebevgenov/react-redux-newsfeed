import React from 'react';

const Button = ({ label, handleClick }) => (
    <button
        className="Button btn btn-light btn-block"
        onClick={handleClick}
    >
        {label}
    </button>
);

export default Button;
