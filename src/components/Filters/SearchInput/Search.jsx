import { IoSearch } from 'react-icons/io5';
import { SearchInput, SearchInputWrap } from './SerachStyled';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('search') ?? '';

  const handleSearch = () => {
    if (searchParams.get('search'))
      navigate('/goods?search=' + encodeURIComponent(searchValue), {
        replace: true,
      });
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
      />
    </SearchInputWrap>
  );
};

export default Search;
