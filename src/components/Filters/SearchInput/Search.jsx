import { IoSearch } from 'react-icons/io5';
import { SearchInput, SearchInputWrap } from './SerachStyled';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('search') ?? '';

  const handleSearch = () => {
    if (location.pathname === '/admin') {
      navigate('/admin?search=' + encodeURIComponent(searchValue), {
        replace: false,
      });
    } else if (searchParams.get('search'))
      navigate('/goods?search=' + encodeURIComponent(searchValue), {
        replace: true,
      });
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const updateQueryString = search => {
    const nextParams = search !== '' ? { search } : {};
    setSearchParams(nextParams);
  };

  return (
    <SearchInputWrap>
      <IoSearch size={24} onClick={handleSearch} />
      <SearchInput
        onChange={e => updateQueryString(e.target.value)}
        value={searchValue}
        onKeyDown={handleKeyPress}
      />
    </SearchInputWrap>
  );
};

export default Search;
