import { useMemo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import debounce from "lodash.debounce";

interface Props {
  doSearch: (name: string) => void;
}

function SearchInput({ doSearch }: Props) {
  const handleSearch = useMemo(
    () =>
      debounce((keyword) => {
        doSearch(keyword);
      }, 500),
    [doSearch]
  );

  return (
    <div className="relative w-full lg:w-2/5 rounded-sm overflow-hidden  mt-3 lg:mt-0 shadow-md lg:shadow-none">
      <input
        type="text"
        className="w-full outline-none pl-10 py-3 pr-2 bg-white shadow-md "
        placeholder="search item"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <AiOutlineSearch className="absolute left-2 top-3" fontSize={24} />
    </div>
  );
}

export default SearchInput;
