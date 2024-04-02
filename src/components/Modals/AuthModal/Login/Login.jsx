/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import CloseBtn from '../../../Common/CloseBtn';
import {
  AuthModalWrap,
  AuthTitleWrap,
  Form,
  Input,
  InputContainer,
  InputWrap,
  Label,
  SubmitFormBtn,
  ToggleLoginWrap,
  TogglePassWrap,
} from '../AuthModalStyled';

import { FaRegEyeSlash } from 'react-icons/fa6';
import { FaRegEye } from 'react-icons/fa6';
import { useState } from 'react';
import { useStore } from '../../../../zustand/store';
import { RingLoader } from 'react-spinners';

const Login = ({ toggleModal, toggleLogin }) => {
  const [isPassword, setIsPassword] = useState('password');
  const { setUserLogIn } = useStore();

  const isLoading = useStore(state => state.isLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePassword = () => {
    console.log(isPassword);
    setIsPassword(prev => (prev === 'password' ? 'text' : 'password'));
  };

  const onSubmit = async data => {
    await setUserLogIn(data);
    toggleModal();
  };

  return (
    <>
      <AuthModalWrap>
        <AuthTitleWrap>
          <h3>Вхід</h3>
          <CloseBtn type="button" toggleModal={toggleModal} />
        </AuthTitleWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <Label htmlFor="number">Логін</Label>
            <Input
              id="number"
              defaultValue="+380"
              {...register('number', {
                required: true,
                pattern: {
                  value: /^\+?[0-9]{8,15}$/,
                  message: 'Введіть коректний номер телефону',
                },
              })}
            />
            {errors?.number?.type === 'required' && (
              <span>Поле є обов'язковим</span>
            )}
            {errors?.number?.type === 'maxLength' && (
              <span>Максимальна довжина 30 символів</span>
            )}
            {errors?.number?.type === 'pattern' && (
              <span>{errors?.login?.message}</span>
            )}
          </InputWrap>

          <InputWrap>
            <Label htmlFor="password">Пароль</Label>
            <InputContainer>
              <Input
                id="password"
                type={isPassword}
                {...register('password', {
                  required: true,
                  maxLength: 10,
                  minLength: 8,
                })}
              />
              <TogglePassWrap onClick={togglePassword}>
                {isPassword === 'password' ? (
                  <FaRegEyeSlash size={'20px'} />
                ) : (
                  <FaRegEye size={'20px'} />
                )}
              </TogglePassWrap>
            </InputContainer>

            {errors?.password?.type === 'required' && (
              <span>Поле є обов'язковим</span>
            )}
            {errors?.password?.type === 'maxLength' && (
              <span>Maмаксимальна довжина 10 символів</span>
            )}
            {errors?.password?.type === 'minLength' && (
              <span>Мінімальна довжина 8 символів</span>
            )}
          </InputWrap>

          <SubmitFormBtn type="submit">Продовжити</SubmitFormBtn>
        </Form>
        <ToggleLoginWrap>
          <p>Не маєте акаунт?</p>
          <button type="button" onClick={toggleLogin}>
            Реєстрація
          </button>
        </ToggleLoginWrap>
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

export default Login;
