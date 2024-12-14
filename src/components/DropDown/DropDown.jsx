// /* eslint-disable react/prop-types */
// import { useState } from 'react';
// import {
//   DropdownItem,
//   DropdownItemContainer,
//   DropdownList,
// } from './DropDownStyled';
// import NestedDropdown from './NestedDropDown';

// import { NavLink } from 'react-router-dom';
// import { useStore } from '../../zustand/store';
// import { stringNormalize } from '../../utils';

// const Dropdown = ({ categoriName }) => {
//   const [showContent, setShowContent] = useState(false);

//   const data = useStore(state => state.goods);

//   const categoriesData = data.filter(
//     item => stringNormalize(item.categories) === stringNormalize(categoriName)
//   );

//   const checkArr = ['чохли', 'скло', 'навушники'];
//   const typeOrBrand = checkArr.includes(stringNormalize(categoriName));
//   const objKey = typeOrBrand ? 'brand' : 'type';

//   function removeSpacesForComparison(str) {
//     return str.replace(/\s+/g, '');
//   }

//   const uniqueFilters = categoriesData
//     .map(item => ({
//       original: item[objKey],
//       processed: removeSpacesForComparison(item[objKey].toLowerCase()),
//     }))
//     .filter((filter, index, array) => {
//       const currentIndex = array.findIndex(
//         item => item.processed === filter.processed
//       );
//       return currentIndex === index;
//     })
//     .map(item => item.original);

//   const handleHoverEnter = () => {
//     setTimeout(() => {
//       setShowContent(true);
//     }, 100);
//   };

//   const handleHoverLeave = () => {
//     setTimeout(() => {
//       setShowContent(false);
//     }, 100);
//   };

//   return (
//     <DropdownItemContainer
//       onMouseEnter={handleHoverEnter}
//       onMouseLeave={handleHoverLeave}
//     >
//       <NavLink to={`/goods/${stringNormalize(categoriName)}`}>
//         {categoriName}
//       </NavLink>

//       {showContent && categoriesData.length > 0 && (
//         <DropdownList className="dropdown-content">
//           {uniqueFilters.map(item => (
//             <DropdownItem key={item}>
//               <NavLink
//                 to={`/goods/${stringNormalize(categoriName)}/${stringNormalize(
//                   item
//                 )}`}
//               >
//                 {item}
//               </NavLink>
//               <NestedDropdown
//                 data={categoriesData}
//                 type={item}
//                 categoriName={categoriName}
//                 objKey={objKey}
//               />
//             </DropdownItem>
//           ))}
//         </DropdownList>
//       )}
//     </DropdownItemContainer>
//   );
// };

// export default Dropdown;
/* eslint-disable react/prop-types */

import { DropdownItemContainer } from './DropDownStyled';

import { NavLink } from 'react-router-dom';
import { stringNormalize } from '../../utils';

const Dropdown = ({ categoriName }) => {
  return (
    <DropdownItemContainer>
      <NavLink to={`/goods/${stringNormalize(categoriName)}`}>
        {categoriName}
      </NavLink>
    </DropdownItemContainer>
  );
};

export default Dropdown;
