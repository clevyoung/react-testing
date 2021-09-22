import { Switch, Route } from 'react-router-dom';
import ColorButton from './pages/colorButton';
import Checkbox from './pages/checkbox';
import SummaryForm from './pages/sundaes-on-demand/summary/SummaryForm';
import Order from './pages/sundaes-on-demand/Order';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/color-button' component={ColorButton} />
        <Route path='/checkbox' component={Checkbox} />
        <Route path='/summary' component={SummaryForm} />
        <Route path='/order' component={Order} />
      </Switch>
    </div>
  );
}

export default App;
