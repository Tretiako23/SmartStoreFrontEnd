import axios from 'axios';
import { notifyError } from '../components/Toasters/Toasters';

export const getData = async ({ goodsId, setData, navigate }) => {
  try {
    const result = await axios.get(`/goods/${goodsId}`);
    setData(result.data);
  } catch (error) {
    notifyError('Це посилання вже не дійсне');
    navigate('/');
  }
};
