import { Switch, Route } from 'react-router-dom';
import ColorButton from './pages/colorButton';
import Checkbox from './pages/checkbox';
import SummaryForm from './pages/sundaes-on-demand/summary/SummaryForm';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/color-button' component={ColorButton} />
        <Route path='/checkbox' component={Checkbox} />
        <Route path='/summary' component={SummaryForm} />
      </Switch>
    </div>
  );
}

export default App;
