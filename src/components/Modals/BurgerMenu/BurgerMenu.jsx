/* eslint-disable react/prop-types */

import ModalPort from '../../ModalPort/ModalPort';
import { BurgerMenuModalWrap, BurgerMenuWrap } from './BurgerMenuStyled';

const BurgerMenu = ({ children, toggleBurgerMenu, isBurger }) => {
  return (
    <>
      {isBurger ? (
        <ModalPort toggleModal={toggleBurgerMenu}>
          <BurgerMenuModalWrap>{children}</BurgerMenuModalWrap>
        </ModalPort>
      ) : (
        <BurgerMenuWrap>{children}</BurgerMenuWrap>
      )}
    </>
  );
};

export default BurgerMenu;
