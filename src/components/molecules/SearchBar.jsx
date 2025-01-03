/* eslint-disable react/prop-types */
// import SearchInput from "../atoms/SearchInput";
// import Button from "../atoms/Button";

// const SearchBar = ({ onSearch }) => {
//   return (
//     <div className="flex items-center space-x-2 bg-white bg-opacity-80 rounded-full px-4 py-2 shadow-lg">
//       <SearchInput placeholder={"Search what you want"} className="w-full" />
//     </div>
//   );
// };

// export default SearchBar;
import SearchInput from "../atoms/SearchInput";
import Button from "../atoms/Button";

const SearchBar = ({ onSearch, placeholder }) => {
  return (
    <div className="flex items-center mr-30">
      <SearchInput
        placeholder={placeholder}
        className="flex-grow text-sm  px-38 placeholder-gray-400 text-gray-700 focus:outline-none"
      />
      <Button
        label="Ara"
        onClick={onSearch}
        className="text-white bg-red-500 hover:bg-red-900  px-8 py-2 text-lg font-semibold  transition duration-200"
      />
    </div>
  );
};

export default SearchBar;
