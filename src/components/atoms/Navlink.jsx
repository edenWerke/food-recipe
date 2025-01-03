/* eslint-disable react/prop-types */
const Navlink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="flex items-center px-3 py-1 text-2xl font-extrabold text-white transition-all duration-300 transform hover:text-yellow-300 hover:scale-105 hover:underline"
      style={{ fontFamily: "Patrick Hand, cursive" }} // Ensure "Patrick Hand" is included in your CSS or import Google Fonts.
    >
      {children}
    </a>
  );
};

export default Navlink;
