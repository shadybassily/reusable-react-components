import { useState } from 'react';
import './switch.css';
export default function Switch() {
   const [isOn, setIsOn] = useState(false);
   let thumbNailClassNames = `thumb-nail ${isOn ? 'on' : 'off'}`;
   const handleClick = () => {
      setIsOn(!isOn);
   };
   return (
      <div className="switch-container" onClick={handleClick}>
         <div className="slider"></div>
         <div className={thumbNailClassNames}></div>
      </div>
   );
}
