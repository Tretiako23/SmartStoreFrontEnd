import toast from 'react-hot-toast';

// AUTH TOASTERS
export const notifyErrorLogin = () =>
  toast.error(
    'Введений логін або пароль невірний, будь-ласка перевірте та спробуйте ще!'
  );
export const notifyFulfilledLogin = () => toast.success('Ласкаво Просимо!)');

export const notifyErrorRegistration = () =>
  toast.error(
    'something went wrong, please check your name, email and password are entered correctly'
  );
// FOR WORK WITH Goods TOASTERS
export const notifyCreacteNewGoods = () =>
  toast.success('Successfully created!');

export const notifyDeleteGoods = () => toast.success('Successfully deleted!');

export const notifyUpdateGoods = () => toast.success('Successfully update!');

// FOR WORK WITH USER ACTIONS

export const notifyAddGoodsToShopingCart = value =>
  toast.success(`${value} додано до кошика`);

export const notifyError = (
  message = 'Упс, щось пішло не так! Спробуйте ще раз пізніше!'
) => toast.error(message);

// Reusable
export const notifySucces = value => toast.success(value, { duration: 4000 });
