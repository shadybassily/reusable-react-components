import { useRef } from 'react';

import './datePicker.css';

export default function DatePicker({ icon, style, placeholder = 'Select a date', ...otheProps }) {
   const dateRef = useRef();
   const handleToggle = () => {
      //in order to display the placeholder
      //the input has to be of type 'text'
      //then  we change it to 'date'
      dateRef.current.type = 'date';
      dateRef.current.showPicker();
   };

   return (
      <div className='component'>
      <h2 className='component-title'>Date Picker</h2>
         <div className="date-picker-container" style={style}>
         <input
            className="date-picker"
            type="text"
            ref={dateRef}
            onFocus={handleToggle}
            placeholder={placeholder}
            {...otheProps}
         />

         {icon && (
            <div onClick={handleToggle} className="icon">
               {icon}
            </div>
         )}
      </div>
      </div>
   );
}
