import './brackets-button.css';

export default function BracketsButtons({ onClick, children = 'click me', ...otherProps }) {
   const handleClick = () => {
      console.log('clicked');
      // onClick();
   };
   return (
      <div className='component'>
      <h2 className='component-title'>Bracket Button</h2>
         <div onClick={handleClick} className="btn">
            {children}
         </div>
      </div>
   );
}
