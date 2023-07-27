import { useState } from 'react';
import './submit.css';

export default function Submit() {
   const [isClicked, setIsClicked] = useState(false);
   let containerClassName = `btn-container ${isClicked && 'btn-container-animation'}`;
   let btClassName = `button ${isClicked && 'submit-btn-animation'}`;
   let doneClassName = `done ${isClicked && 'done-animation'}`;
   
   const handleClick = () => {
      //to start an animation
      setIsClicked(true);
      setTimeout(() => {
         setIsClicked(false);
      }, 2000);
   };
   return (
      <div className={containerClassName} onClick={handleClick}>
         <button type="submit" className={btClassName}>
            click
         </button>
         <p className={doneClassName}>&#x2713;</p>
      </div>
   );
}
