import { CategoriesList, SectionWrap } from './SharedLayoutStyled';
import Header from '../components/Header/Header';

import { Suspense, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container';
import SearchBox from '../components/SearchBox/SearchBox';
import CatalogueDropDown from '../components/DropDown/CatalogueDropDown/CatalogueDropDown';
import Dropdown from '../components/DropDown/DropDown';

import { Toaster } from 'react-hot-toast';
import { useStore } from '../zustand/store';

const categories = [
  'Павербанки',
  'Зарядки',
  'Кабелі',
  'Колонки',
  'Навушники',
  'Для авто',
  'Інші товари',
];

const SharedLayout = () => {
  const { getGoods } = useStore();

  useEffect(() => {
    getGoods();
  }, []);

  return (
    <>
      <Header />
      <Toaster />
      <Container>
        <SectionWrap>
          <SearchBox />

          <nav>
            <CategoriesList>
              <CatalogueDropDown />
              {categories.map(item => (
                <Dropdown key={item} categoriName={item} />
              ))}
            </CategoriesList>
          </nav>
        </SectionWrap>
      </Container>
      <Suspense
        fallback={
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
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
