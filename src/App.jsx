import { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

import DatePicker from './components/inputs/date-picker/DatePicker';

function App() {
   const [date, setDate] = useState(new Date());
   const handleDateChange = (e) => {
      setDate(e.target.value);
   };

   //do something with the date

   return (
      <div>
         <DatePicker
            placeholder="Start date"
            icon={<AiOutlineCalendar />}
            onChange={handleDateChange}
            style={{ fontSize:'15px'}}
         />
      </div>
   );
}

export default App;
