/* eslint-disable react/prop-types */
import { useState } from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registration';

const AuthModal = ({ toggleModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(prev => !prev);
  return isLogin ? (
    <Login toggleModal={toggleModal} toggleLogin={toggleLogin} />
  ) : (
    <Registration toggleModal={toggleModal} toggleLogin={toggleLogin} />
  );
};

export default AuthModal;
