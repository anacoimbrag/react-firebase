import React from 'react';
import './input.css';

export const VerticalForm = ({children}) => <form className="vertical-form">{children}</form>

export const Input = ({ onChange, type, placeholder, required }) =>
    <input {...{type, onChange, placeholder, required}} className="input" />