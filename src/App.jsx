import DatePicker from './components/inputs/date-picker/DatePicker';
import BracketsButton from './components/buttons/brackets-button/BracketsButton';
import Spinner from './components/loaders/spinner/Spinner';
import Field from './components/inputs/field/Field';

import './App.css';

const components = [
   {
      title: 'Date Picker',
      component: <DatePicker />,
   },
   {
      title: 'Field',
      component: <Field />,
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
            <div className="component" key={i}>
               <h2 className="component-title">#{i+1} {c.title}</h2>
               {c.component}
            </div>
         ))}
      </div>
   );
}

export default App;
