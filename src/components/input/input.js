import React from 'react';
import './input.css';

export const Input = ({ onChange, type, placeholder, required, name }) =>
    <input {...{type, onChange, placeholder, required, name}} className="input" />