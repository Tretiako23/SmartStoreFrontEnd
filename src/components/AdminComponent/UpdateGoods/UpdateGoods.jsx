/* eslint-disable react/prop-types */
import CloseBtn from '../../Common/CloseBtn';
import ModalPort from '../../ModalPort/ModalPort';
import { AuthTitleWrap } from '../../Modals/AuthModal/AuthModalStyled';
import GoodForm from '../AddGoodsForm/GoodForm';
import { UpdateFromWrap } from './UpdateGoodsStyled';

const UpdateGoods = ({ toggleModal, data }) => {
  return (
    <ModalPort toggleModal={toggleModal}>
      <UpdateFromWrap>
        <AuthTitleWrap>
          <h3>Оновити дані Товару</h3>
          <CloseBtn type="button" toggleModal={toggleModal} />
        </AuthTitleWrap>
        <GoodForm data={data} />
      </UpdateFromWrap>
    </ModalPort>
  );
};

export default UpdateGoods;
