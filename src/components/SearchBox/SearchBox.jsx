import Search from '../Filters/SearchInput/Search';
import ShopingCartBox from '../ShopingCartBox/ShopingCartBox';
import { SearchBoxWrap } from './SerachBoxStyled';

const SearchBox = () => {
  return (
    <>
      <SearchBoxWrap>
        <Search />
        <ShopingCartBox />
      </SearchBoxWrap>
    </>
  );
};

export default SearchBox;
