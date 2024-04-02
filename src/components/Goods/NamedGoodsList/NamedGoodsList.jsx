import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useStore } from '../../../zustand/store';
import { stringNormalize } from '../../../utils';

const CardItemWrap = styled.li`
  // width: calc(33.33% - 20px);

  padding: 10px;

  border-radius: 5px;
  box-shadow: var(--shadow);
  overflow: hidden;

  cursor: pointer;

  background-color: hsl(243.69deg 16.79% 90.54% / 81%);
  &:hover {
    cursor: pointer;
    color: var(--accent-color);
    text-decoration: underline;
    background-color: var(--colors-bg);
  }
`;

const CardLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const NamedGoodsList = () => {
  const data = useStore(state => state.currentList);

  const checkArr = ['чохли', 'скло', 'навушники'];
  const typeOrBrand =
    data.length > 0 && checkArr.includes(stringNormalize(data[0]?.categories));

  const uniqueModels = data.reduce((acc, currentItem) => {
    const existingModelObject = acc.find(
      obj => obj.model === currentItem.model
    );

    if (!existingModelObject) {
      acc.push(currentItem);
    }

    return acc;
  }, []);

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignContent: 'flex-start',
      }}
    >
      {uniqueModels.map(item => (
        <CardItemWrap key={item._id}>
          <article>
            <CardLink
              to={`/goods/${item.categories}/${
                typeOrBrand ? item.brand : item.type
              }/${item.model}`}
              style={{}}
            >
              <img
                src={item.imgUrl}
                alt={item.model}
                width="100px"
                height="100px"
                loading="lazy"
              />
              <h3>{`${!typeOrBrand ? item.type : ''} ${item.brand}`}</h3>
              <h4>{item.model}</h4>
            </CardLink>
          </article>
        </CardItemWrap>
      ))}
    </ul>
  );
};

export default NamedGoodsList;
