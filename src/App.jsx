import DatePicker from './components/inputs/date-picker/DatePicker';
import Field from './components/inputs/field/Field';
import Search from './components/inputs/search/Search';

import BracketsButton from './components/buttons/brackets-button/BracketsButton';
import SubmitButton from './components/buttons/submit/Submit';
import AddToCart from './components/buttons/add-to-cart/AddToCart';

import Spinner from './components/loaders/spinner/Spinner';
import Dots from './components/loaders/dots/Dots';
import Switch from './components/switchs/Switch';

import './App.css';

const components = [
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
      title: 'Submit Button',
      component: <SubmitButton />,
   },
   {
      title: 'Add To Cart',
      component: <AddToCart />,
   },
   {
      title: 'Spinner',
      component: <Spinner />,
   },
   {
      title: 'Loading Dots',
      component: <Dots />,
   },
   {
      title: 'Switch',
      component: <Switch />,
   },
   {
      title: 'Date Picker',
      component: <DatePicker />,
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
               <div className="component-content">{c.component}</div>
            </div>
         ))}
      </div>
   );
}

export default App;
