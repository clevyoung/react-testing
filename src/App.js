import { Switch, Route } from 'react-router-dom';
import ColorButton from './pages/ColorButton';
import Checkbox from './pages/Checkbox';
import Order from './pages/Sundaes-on-demand/Order';
import RadioGroup from './pages/RadioGroup';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/checkbox' component={Checkbox} />
        <Route path='/color-button' component={ColorButton} />
        <Route path='/order' component={Order} />
        <Route path='/radio-group' component={RadioGroup} />
      </Switch>
    </div>
  );
}

export default App;
