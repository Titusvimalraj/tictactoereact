import React from 'react';
import { Button } from 'react-bootstrap';

const ResetButton = ({ text, reset }) => {
    return <Button className="btn btn-primary" onClick={reset}>{text}</Button>;
}

export default ResetButton;

