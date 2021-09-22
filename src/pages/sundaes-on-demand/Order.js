import React from 'react';
import Container from 'react-bootstrap/Container';
import OrderEntry from './entry/OrderEntry';
import { OrderDetailsProvider } from '../../contexts/OrderDetails';

const Order = () => {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
};

export default Order;
