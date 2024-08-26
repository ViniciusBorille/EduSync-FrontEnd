import React from 'react';
import './Button.css';


const Button = ({ onClick, label, className = '' }) => {
    return (
      <div className='body_button'>
        <button className={`custom_button ${className}`} onClick={onClick}>
          {label}
        </button>
      </div>
    );
  };


export default Button;