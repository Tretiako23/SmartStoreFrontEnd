/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
import CloseBtn from '../../../Common/CloseBtn';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

import { useStore } from '../../../../zustand/store';
import { RingLoader } from 'react-spinners';

const Registration = ({ toggleModal, toggleLogin }) => {
  const [isPassword, setIsPassword] = useState('password');
  const { setUserRegister } = useStore();
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
    await setUserRegister(data);
    toggleModal();
  };

  return (
    <>
      {' '}
      <AuthModalWrap>
        <AuthTitleWrap>
          <h3>Регістрація</h3>
          <CloseBtn type="button" toggleModal={toggleModal} />
        </AuthTitleWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrap>
            <Label htmlFor="number">Номер телефону</Label>
            <Input
              id="number"
              defaultValue="+380"
              {...register('number', {
                required: true,
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: 'Введіть коректний номер у форматі +380XXXXXXXXX',
                },
                minLength: {
                  value: 13,
                  message: 'Мінімальна довжина 13 символів',
                },
                maxLength: {
                  value: 13,
                  message: 'Максимальна довжина 13 символів',
                },
              })}
            />
            {errors?.number?.type === 'required' && (
              <span>Поле є обов'язковим</span>
            )}
            {errors?.number?.type === 'pattern' && (
              <span>{errors?.number?.message}</span>
            )}
            {errors?.number?.type === 'minLength' && (
              <span>{errors?.number?.message}</span>
            )}
            {errors?.number?.type === 'maxLength' && (
              <span>{errors?.number?.message}</span>
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
          <p>Вже маєте акаунт?</p>
          <button type="button" onClick={toggleLogin}>
            Вхід
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

export default Registration;
