import { useRef, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

import './datePicker.css';

export default function DatePicker({
   icon = <AiOutlineCalendar />,
   style,
   placeholder = 'Select a date',
   ...otheProps
}) {
   const [date, setDate] = useState(new Date());
   const handleDateChange = (e) => {
      setDate(e.target.value);
   };

   const dateRef = useRef();
   const handleToggle = () => {
      //in order to display the placeholder
      //the input has to be of type 'text'
      //then  we change it to 'date'
      dateRef.current.type = 'date';
      dateRef.current.showPicker();
   };

   return (
      <div className="date-picker-container" style={style}>
         <input
            className="date-picker"
            type="text"
            ref={dateRef}
            onFocus={handleToggle}
            placeholder={placeholder}
            onChange={handleDateChange}
            {...otheProps}
         />

         {icon && (
            <div onClick={handleToggle} className="icon">
               {icon}
            </div>
         )}
      </div>
   );
}
