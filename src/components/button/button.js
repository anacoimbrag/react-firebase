import React from 'react';
import './button.css';

export const Submit = ({ onClick, value }) =>
    <button {...{ onClick }} className="btn btn-submit">{value}</button>

export const FabebookButton = ({ onClick }) =>
    <button {...{ onClick }} className="btn btn-facebook">Entrar com Facebook</button>

export const GoogleButton = ({ onClick }) =>
    <button {...{ onClick }} className="btn btn-google">Entrar com Google</button>

export const OnlyTextButton = ({ onClick, value }) =>
    <button {...{ onClick }} className="btn btn-only-text">{value}</button>