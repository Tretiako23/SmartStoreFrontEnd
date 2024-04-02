/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import {
  AuthModalWrap,
  AuthTitleWrap,
  Input,
  InputWrap,
  Label,
  Form,
  SubmitFormBtn,
} from '../AuthModal/AuthModalStyled';
import CloseBtn from '../../Common/CloseBtn';
import axios from 'axios';
import {
  notifyError,
  notifySucces,
} from '../../../components/Toasters/Toasters';
import { RingLoader } from 'react-spinners';
import { useStore } from '../../../zustand/store';

const SubscribeModal = ({ toggleModal, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { toggleLoader } = useStore();
  const isLoading = useStore(state => state.isLoading);

  const onSubmit = async data => {
    try {
      toggleLoader();
      const positiveResult = `На пошту "${data.email}" буде відправлено сповіщення як тільки товар буде в наявності!`;

      const result = await axios.post('/goods/subscribe', { id, ...data });

      result.status === 200 ? notifySucces(positiveResult) : notifyError();
      toggleModal();
    } catch (error) {
      notifyError();
    } finally {
      toggleLoader();
    }
  };

  return (
    <>
      <AuthModalWrap>
        <AuthTitleWrap>
          <h3>Сповістити мене про наявність товару</h3>
          <CloseBtn type="button" toggleModal={toggleModal} />
        </AuthTitleWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <Label htmlFor="email">Електронна пошта</Label>
            <Input id="email" defaultValue="" {...register('email')} />
            {errors?.email?.message && <span>{errors?.email?.message}</span>}
          </InputWrap>
          <SubmitFormBtn type="submit">Підписатись</SubmitFormBtn>
        </Form>
      </AuthModalWrap>

      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '#b922f77a 0px 0px 15px 5px',
            borderRadius: '50%',
          }}
        >
          <RingLoader
            color="rgba(122,16,124,1)"
            loading="true"
            size={155}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
};

export default SubscribeModal;
