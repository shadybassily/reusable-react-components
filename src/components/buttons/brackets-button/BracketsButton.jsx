import './brackets-button.css';

export default function BracketsButtons({ onClick, children = 'Hover me', ...otherProps }) {
   const handleClick = () => {
      console.log('clicked');
      // onClick();
   };
   return (
      <div onClick={handleClick} className="btn">
         {children}
      </div>
   );
}
