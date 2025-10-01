import React from 'react';

function Button({ children, onClick, type = 'button' }) {
    return (
        <button
            type={type}
            className="btn btn-primary fw-semibold custom-btn"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
