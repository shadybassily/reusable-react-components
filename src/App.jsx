import DatePicker from './components/inputs/date-picker/DatePicker';
import Field from './components/inputs/field/Field';
import Search from './components/inputs/search/Search';
import BracketsButton from './components/buttons/brackets-button/BracketsButton';
import SubmitButton from './components/buttons/submit/Submit';
import Spinner from './components/loaders/spinner/Spinner';

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
      title: 'Search',
      component: <Search />,
   },

   {
      title: 'Brackets Button',
      component: <BracketsButton />,
   },
   {
      title: 'Animating Button',
      component: <SubmitButton />,
   },
   {
      title: 'Spinner',
      component: <Spinner />,
   },
];
function App() {
   return (
      <div className="App">
         <div className="title-subtitle-container">
            <h1 className="app-title">Reusable React Components</h1>
         </div>
         {components.map((c, i) => (
            <div className="component" key={i}>
               <h2 className="component-title">
                  #{i + 1} {c.title}
               </h2>
               <div className='component-content'>{c.component}</div>
            </div>
         ))}
      </div>
   );
}

export default App;
