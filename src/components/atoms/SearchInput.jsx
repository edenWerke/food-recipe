/* eslint-disable react/prop-types */
// import { FaSearch } from "react-icons/fa"; // Import the search icon

// const SearchInput = ({ placeholder, icon }) => {
//   return (
//     <div className="relative ">
//       {/* <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
//       <input
//         type="text"
//         placeholder={placeholder}
//         className="px-20 py-35 pr-20 pl-9 ml-60 text-lg font-medium border-2  border-black rounded-md  "
//       />
//       {icon && <span className="mr-4">{icon}</span>}
//       {/* Search Icon inside the input */}
//       {/**/}
//     </div>
//   );
// };

// export default SearchInput;
const SearchInput = ({ placeholder, icon }) => {
  return (
    <div className="relative ">
      {/* <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
      <input
        type="text"
        placeholder={placeholder}
        className="px-20 py-35 pr-20 pl-9 ml-60 text-lg font-medium border-2  border-gray-500 rounded-md  "
      />
      {icon && <span className="mr-4">{icon}</span>}
      {/* Search Icon inside the input */}
      {/**/}
    </div>
  );
};

export default SearchInput;
