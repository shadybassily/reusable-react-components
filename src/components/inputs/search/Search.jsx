import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './search.css';

export default function Search() {
   const [isOpen, setIsOpen] = useState(false);
   const [searchContent, setSearchContent] = useState('');

   let inputClassNames = `search-input ${isOpen && 'search-input-visible'}`;
   let searchIconClassNames = `search-icon ${isOpen && 'search-icon-animation'}`
   const handleClick = () => {
      setIsOpen(true);
   };
   const handleBlur = () => {
      //if there is no content, then collapse
      if (searchContent === '') {
         setIsOpen(false);
      }
   };
   return (
      <div className='search-container' onClick={handleClick}>
            <input
               className={inputClassNames}
               onBlur={handleBlur}
               placeholder="Search..."
               value={searchContent}
               onChange={(e) => setSearchContent(e.target.value)}
            />
         <BsSearch className={searchIconClassNames} />
      </div>
   );
}
