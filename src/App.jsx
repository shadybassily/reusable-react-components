import DatePicker from './components/inputs/date-picker/DatePicker';
import BracketsButton from './components/buttons/brackets-button/BracketsButton';
import Spinner from './components/loaders/spinner/Spinner';

import './App.css';

const components = [
   {
      title: 'Date Picker',
      component: <DatePicker />,
   },
   {
      title: 'Brackets Button',
      component: <BracketsButton />,
   },
   {
      title: 'Spinner',
      component: <Spinner />,
   },
];
function App() {
   return (
      <div className="App">
         {components.map((c, i) => (
            <div className="component">
               <h2 className="component-title">#{i+1} {c.title}</h2>
               {c.component}
            </div>
         ))}
      </div>
   );
}

export default App;
