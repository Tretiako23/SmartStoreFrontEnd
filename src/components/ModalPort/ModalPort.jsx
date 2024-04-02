/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  overflow: hidden;
`;

export const ModalWrap = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);

  overflow: auto;
`;

const modalRoot = document.querySelector('#modal-root');

const ModalPort = ({ toggleModal, children }) => {
  let mouseDown = false;
  let mouseUp = false;

  const onMouseDown = e => {
    if (e.target === e.currentTarget) mouseDown = true;
  };

  const onMouseUp = () => {
    mouseUp = true;
  };

  const onCloseModal = e => {
    const isClick = mouseDown && mouseUp && e.target === e.currentTarget;

    if (isClick || e.code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', onCloseModal);

    return () => {
      window.removeEventListener('keydown', onCloseModal);
      document.body.style.overflow = 'auto';
    };
  }, [onCloseModal]);

  return createPortal(
    <ModalOverlay
      onClick={onCloseModal}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <ModalWrap>{children}</ModalWrap>
    </ModalOverlay>,
    modalRoot
  );
};

export default ModalPort;
