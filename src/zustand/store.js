import axios from 'axios';
import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

import {
  notifyError,
  notifyErrorLogin,
  notifyFulfilledLogin,
  notifySucces,
} from '../components/Toasters/Toasters';

axios.defaults.baseURL = `https://smartstorebackend.onrender.com/api`;
// axios.defaults.baseURL = 'http://localhost:3000/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const useStore = create(
  devtools(
    set => ({
      auth: { user: null, isLoggedIn: false },
      goods: [],
      currentList: [],
      filters: {
        search: '',
        rangeValues: null,
        checkBox: [],
      },
      idList: [],
      isLoading: false,

      toggleLoader: () => {
        set(state => ({ ...state, isLoading: !state.isLoading }));
      },

      setUserLogIn: async credentials => {
        try {
          set(state => ({ ...state, isLoading: true }));
          const { data: user } = await axios.post('/auth/login', credentials);

          localStorage.setItem('token', user.token);

          token.set(user.token);
          notifyFulfilledLogin();

          set(
            state => ({ ...state, auth: { ...user, isLoggedIn: true } }),
            false,
            'setAuth'
          );
        } catch (error) {
          notifyErrorLogin();
          return;
        } finally {
          set(state => ({ ...state, isLoading: false }));
        }
      },

      refreshUser: async () => {
        const localToken = localStorage.getItem('token');
        if (localToken) {
          token.set(localToken);
        }
        try {
          const { data: user } = await axios.post('/auth/refresh', {
            token: localToken,
          });

          set(
            state => ({ ...state, auth: { ...user, isLoggedIn: true } }),
            false,
            'setAuth'
          );
          token.set(user.token);

          notifyFulfilledLogin();
        } catch {
          console.log('');
        }
      },

      setUserRegister: async credentials => {
        try {
          set(state => ({ ...state, isLoading: true }));
          const { data: user } = await axios.post(
            '/auth/register',
            credentials
          );
          console.log(user.token);
          token.set(user.token);
          notifyFulfilledLogin();

          set(
            state => ({ ...state, auth: { ...user, isLoggedIn: true } }),
            false,
            'setAuth'
          );
        } catch (error) {
          notifyErrorLogin();
          return;
        } finally {
          set(state => ({ ...state, isLoading: false }));
        }
      },

      removeUser: async () => {
        try {
          localStorage.removeItem('token');
          await axios.post('/auth/logout');

          token.unset();

          set(
            state => ({
              ...state,
              auth: { user: null, isLoggedIn: false },
            }),
            false,
            'setGoods'
          );

          notifySucces('Сесію у вашому акаунті завершено!');
        } catch (error) {
          notifyError();
        }
      },

      getGoods: async () => {
        const { data } = await axios.get('/goods');

        set(
          state => ({
            ...state,
            goods: [...data],
          }),
          false,
          'setGoods'
        );
      },

      setCurrentGoods: currentList => {
        set(state => ({ ...state, currentList }), false, 'setCurrentGoods');
      },

      setRangeValues: rangeValues => {
        set(state => ({
          ...state,
          filters: { ...state.filters, rangeValues },
        }));
      },

      setCheckBox: checkBox => {
        set(state => ({
          ...state,
          filters: { ...state.filters, checkBox },
        }));
      },

      setNewGoods: async credentials => {
        try {
          set(state => ({ ...state, isLoading: true }));
          const { data } = await axios.post(`/goods`, credentials);

          set(state => ({
            ...state,
            goods: [...state.goods, { ...data }],
          }));
          notifySucces('Товар успішно додано!');
        } catch (error) {
          error.response.status === 500
            ? notifyError('Додайте фото товару')
            : notifyError(error.message);
        } finally {
          set(state => ({ ...state, isLoading: false }));
        }
      },

      updateGoods: async (id, credentials) => {
        try {
          set(state => ({ ...state, isLoading: true }));
          const { data } = await axios.put(`/goods/${id}`, credentials);

          set(
            state => ({
              ...state,
              goods: state.goods.map(item => {
                if (item._id === id) {
                  return { ...item, ...data };
                }

                return item;
              }),
            }),
            false,
            'updateGoods'
          );
          notifySucces('Товар успішно оновлено!');
        } catch (error) {
          error.response.status === 500
            ? notifyError('Додайте фото товару')
            : notifyError(error.message);
        } finally {
          set(state => ({ ...state, isLoading: false }));
        }
      },

      updateHitGoods: async (id, isHit) => {
        try {
          set(state => ({ ...state, isLoading: true }));
          const { data } = await axios.put(`/goods/${id}/${isHit}`);

          set(
            state => ({
              ...state,
              goods: state.goods.map(item => {
                if (item._id === id) {
                  return { ...item, ...data };
                }
                return item;
              }),
            }),
            false,
            'updateGoods'
          );
          notifySucces('Товар успішно оновлено!');
        } catch (error) {
          error.response.status === 500
            ? notifyError('Додайте фото товару')
            : notifyError(error.message);
        } finally {
          set(state => ({ ...state, isLoading: false }));
        }
      },

      removeGoods: async id => {
        try {
          set(state => ({ ...state, isLoading: true }));
          await axios.delete(`/goods/${id}`);
          set(
            state => ({
              ...state,
              goods: [...state.goods.filter(item => item._id !== id)],
            }),
            false,
            'removeGoods'
          );
          notifySucces('Товар успішно видалено!');
        } catch (error) {
          notifyError();
        } finally {
          set(state => ({ ...state, isLoading: false }));
        }
      },

      removeIdItem: id =>
        set(
          state => ({
            ...state,
            idList: state.idList.filter(item => item !== id),
          }),
          false,
          'removeIdItem'
        ),

      setNewIdList: (idList = []) =>
        set(
          state => ({
            ...state,
            idList,
          }),
          false,
          'setNewIdList'
        ),

      setSearchFilter: value =>
        set(
          state => ({
            ...state,
            filters: { ...state.filters, search: value },
          }),
          false,
          'setSearchFilter'
        ),
    }),
    {
      name: 'Goods',
    }
  )
);
