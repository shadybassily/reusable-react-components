import { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

import DatePicker from './components/inputs/date-picker/DatePicker';
import BracketsButton from './components/buttons/brackets-button/BracketsButton';

import './App.css';
function App() {
   const [date, setDate] = useState(new Date());
   const handleDateChange = (e) => {
      setDate(e.target.value);
   };

   //do something with the date

   return (
      <div className='App'>
         {/* <DatePicker
            placeholder="Start date"
            icon={<AiOutlineCalendar />}
            onChange={handleDateChange}
            style={{ fontSize:'15px'}}
         /> */}
         <BracketsButton />
      </div>
   );
}

export default App;
