import logo from "../../assets/logo.jpg";
import Navlink from "../atoms/Navlink";
import SearchInput from "../atoms/SearchInput";

// const Header = () => {
//   return (
//     <div className="sticky top-0 left-0 right-0 z-50 flex flex-col items-center justify-between w-full p-2 bg-white shadow-lg bg-opacity-70 backdrop-blur-md sm:flex-row sm:p-3">

//         <div className="flex items-center space-x-4">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-12 h-12 transition-all transform rounded-full shadow-lg hover:scale-110 hover:rotate-3"
//           />
//           <h1 className="text-lg font-semibold tracking-wide text-gray-400 transition-all duration-300 hover:text-yellow-300">
//             Sweet Dessert
//           </h1>
//         </div>
//       </div>

//   );
// };

// export default Header;
// import logo from "../../assets/logo.jpg";
// import Navlink from "../atoms/Navlink";
// import SearchInput from "../atoms/SearchInput";
// import { FaSearch } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa"; // Importing Instagram and YouTube icons
// import SearchInput from './SearchInput';  // Adjust the path as needed

// const Header = () => {
//   return (
//     <div className="relative flex items-center justify-between pb-6 pt-10 w-full">
//       {/* Top Border */}
//       <div className="absolute top-0 left-[-106px] right-[-106px] h-[2px] bg-gray-300"></div>

//       {/* Bottom Border */}
//       <div className="absolute bottom-0 left-[-26px] right-[-26px] h-[2px] bg-gray-300"></div>

//       {/* Logo and Text */}
//       <div className="flex items-center space-x-3">
//         <img
//           src={logo}
//           alt="Logo"
//           className="w-8 h-8 transition-all transform rounded-full hover:scale-110 hover:rotate-3"
//         />
//         <h1 className="md:text-sm font-bold font-sans tracking-wide text-gray-600 transition-all duration-300 hover:text-yellow-300">
//           Tatlı Rüyalar
//         </h1>
//       </div>

//       {/* Navigation Links */}
//       <div className="absolute left-1/3 transform -translate-x-1/2 flex items-center space-x-4">
//         <Navlink to="/home" className="flex items-center space-x-2 group">
//           <span className="text-base font-sans font-bold text-gray-500 transition duration-300 group-hover:text-yellow-300">
//             Bütün Tatlı Tarifleri
//           </span>
//         </Navlink>

//         <Navlink to="/contact" className="flex items-center space-x-2 group">
//           <span className="text-base font-sans font-bold text-gray-500 transition duration-300 group-hover:text-yellow-300">
//             Tatlılar Hakkında Her Şey
//           </span>
//         </Navlink>
//       </div>

//       {/* Search Input and Icons */}
//       <div className="relative flex items-center ml-9 space-x-3">
//         {/* <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
//         <SearchInput
//           type="text"
//           placeholder="Tatami malzeme ve yazıp araştır"
//           className="pl-10 pr-14 w-full border-7 border-gray-500 rounded-md focus:outline-none"
//         />

//         {/* Instagram and YouTube Icons */}
//         <div className="flex space-x-4">
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram className="text-2xl text-gray-500 hover:text-yellow-300" />
//           </a>
//           <a
//             href="https://www.youtube.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaYoutube className="text-2xl text-gray-500 hover:text-yellow-300" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
// import { FaSearch, FaInstagram, FaYoutube } from 'react-icons/fa';  // Importing Instagram and YouTube icons
// import SearchInput from './SearchInput';  // Adjust the path as needed

const Header = () => {
  return (
    <div className="relative flex items-center justify-between pb-6 pt-10 w-full">
      {/* Top Border */}
      {/* <div className="absolute top-0 left-[-106px] right-[-106px] h-[2px] bg-gray-300"></div> */}

      {/* Bottom Border */}
      {/* <div className="absolute bottom-0 left-[-26px] right-[-26px] h-[2px] bg-gray-300"></div> */}

      {/* Logo and Text */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 transition-all transform rounded-full hover:scale-110 hover:rotate-3"
        />
        <h1 className="md:text-sm font-bold font-sans tracking-wide text-gray-600 transition-all duration-300 hover:text-yellow-300">
          Tatlı Rüyalar
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="absolute left-1/3 transform -translate-x-1/2 flex items-center space-x-4">
        <Navlink to="/home" className="flex items-center space-x-2 group">
          <span className="text-base font-sans font-bold text-gray-500 transition duration-300 group-hover:text-yellow-300">
            Bütün Tatlı Tarifleri
          </span>
        </Navlink>

        <Navlink to="/contact" className="flex items-center space-x-2 group">
          <span className="text-base font-sans font-bold text-gray-500 transition duration-300 group-hover:text-yellow-300">
            Tatlılar Hakkında Her Şey
          </span>
        </Navlink>
      </div>

      {/* Search Input and Icons */}
      <div className="relative flex items-center ml-9 space-x-3">
        {/* <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
        <SearchInput
          type="text"
          placeholder="Tatami malzeme ve yazıp "
          className="pl-10 pr-14 w-full border-5 border-gray-400 rounded-md focus:outline-none"
        />

        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Instagram Gradient Color */}
            <FaInstagram
              className="text-2xl"
              style={{
                background: "linear-gradient(45deg, #f06292, #d500f9, #ff9800)", // Instagram gradient colors
                "-webkit-background-clip": "text",
              }}
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl text-red-600" />{" "}
            {/* YouTube with red color */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
