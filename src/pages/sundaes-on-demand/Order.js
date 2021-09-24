import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import OrderEntry from './entry/OrderEntry';
import OrderConfirmation from './confirmation/OrderConfirmation';
import OrderSummary from './summary/OrderSummary';

import { OrderDetailsProvider } from '../../contexts/OrderDetails';

const Order = () => {
  // orderPhase needs to be 'inProgress', 'review', or 'completed'
  const [orderPhase, setOrderPhase] = useState('inProgress');
  let Component = OrderEntry;
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
    default:
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
};

export default Order;
