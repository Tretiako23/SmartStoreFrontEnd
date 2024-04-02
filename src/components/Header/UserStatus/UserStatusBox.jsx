import { useState } from 'react';
import { UserStatusWrap } from '../HeaderStyled';
import { FaUser, FaUserCheck } from 'react-icons/fa';
import ModalPort from '../../ModalPort/ModalPort';
import AuthModal from '../../Modals/AuthModal/AuthModal';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../zustand/store';

const UserStatusBox = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const isLoggedIn = useStore(state => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const toggleModal = () => setIsShowModal(prev => !prev);

  const onClickCart = () => {
    const action = () => (isLoggedIn ? navigate('/user') : toggleModal());
    action();
  };

  return (
    <>
      <UserStatusWrap onClick={onClickCart}>
        {!isLoggedIn ? (
          <FaUser color="var(--colors-text)" size="25px" />
        ) : (
          <FaUserCheck color="var(--colors-text)" size="30px" />
        )}
      </UserStatusWrap>
      {isShowModal && (
        <ModalPort toggleModal={toggleModal}>
          <AuthModal toggleModal={toggleModal} />
        </ModalPort>
      )}
    </>
  );
};
export default UserStatusBox;
