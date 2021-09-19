import { Switch, Route } from 'react-router-dom';
import ColorButton from './pages/ColorButton';
import Checkbox from './pages/Checkbox';
import SummaryForm from './pages/Summary/SummaryForm';

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
