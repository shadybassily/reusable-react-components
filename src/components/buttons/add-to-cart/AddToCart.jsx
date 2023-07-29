import { useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import './add-to-cart.css';
export default function AddToCart() {
   const [isClicked, setIsClicked] = useState(false);
   let addtoCartClassNames = `add-to-cart ${isClicked && 'add-to-cart-animation'}`;
   let textClassNames = `text ${isClicked && 'text-animation'}`;
   let cartClassNames = `cart ${isClicked && 'cart-animation'}`;
   let itemClassNames = `item ${isClicked && 'item-animation'}`;

   const handleClick = () => {
      //to start an animation
      setIsClicked(true);
      setTimeout(() => {
         setIsClicked(false);
      }, 2000);
   };
   return (
      <div className={addtoCartClassNames} onClick={handleClick}>
         <div className={itemClassNames}>
            <GoDotFill />
         </div>
         <div className={cartClassNames}>
            <BsFillCartFill />
         </div>
         <div className={textClassNames}>Add To Cart</div>
      </div>
   );
}
