import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertBanner = ({ message, variant }) => {
  return (
    <Alert variant={variant} style={{ backgroundColor: 'red' }}>
      {message}
    </Alert>
  );
};

AlertBanner.defaultProps = {
  message: 'An unexpected error occurred. Please try again later.',
  variant: 'danger',
};

export default AlertBanner;
