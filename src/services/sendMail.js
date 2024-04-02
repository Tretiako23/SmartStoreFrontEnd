import axios from 'axios';
import { notifyError, notifySucces } from '../components/Toasters/Toasters';

export const sendMail = async data => {
  try {
    const result = await axios.post('auth/mail', data);
    result.status === 200 &&
      notifySucces('Заявку успішно сформовано очікуйте дзвінка \u{1F609}');
  } catch (error) {
    notifyError(
      'Упс щось пішло не так, можливо ведуться технічні роботи, будь-ласка спробуйте пізніше! 😕'
    );
    console.log(error.message);
  }
};
