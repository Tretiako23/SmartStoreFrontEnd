/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../zustand/store';

import FavoriteCard from '../../components/UserComponent/FavoriteCard';
import { useEffect } from 'react';
import { AdminLink, DescriptionWrap } from './UserPageStyled';
import { Container } from '../../components/Container';

const UserPage = () => {
  const user = useStore(state => state.auth.user);
  const navigate = useNavigate();

  const goods = useStore(state => state.goods);
  const filteredByFavorites = goods.filter(item =>
    item.favorites.includes(user?.id)
  );

  useEffect(() => {
    if (!user) navigate('/');
  }, []);

  return (
    user && (
      <Container>
        {user.role === 'admin' && (
          <AdminLink to={'/admin'}>Go to Admin</AdminLink>
        )}

        <DescriptionWrap>
          <p>
            Мій номер:
            <span> {user.number || 0}</span>
          </p>
          <p>
            Сумма моїх покупок:
            <span> {user.totalPurchaseAmount || 0}Грн</span>
          </p>
          <p>
            Mоя знижка:
            <span> {user.personalDiscount || 0}%</span>
          </p>
        </DescriptionWrap>

        <div>
          <h2>Мої закладки</h2>
          <ul>
            {filteredByFavorites.map(item => (
              <li key={item._id}>
                <FavoriteCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    )
  );
};

export default UserPage;
