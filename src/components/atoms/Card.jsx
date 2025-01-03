// const Card = ({ imageSrc, title, releaseDate, prepTime, servings, rating, author }) => {
//     return (
//       <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md">
//         {/* Image Section with Badge */}
//         <div className="relative">
//           <img
//             src={imageSrc}
//             alt={title}
//             className="object-cover w-full h-48"
//           />
//           <div className="absolute px-3 py-1 text-sm font-semibold text-teal-600 bg-white rounded-full shadow top-2 left-2">
//             Ramazan
//           </div>
//         </div>
  
//         {/* Card Content */}
//         <div className="p-4 shadow-none">
//           <div className="flex justify-between">
//             <p className="text-sm text-gray-500 ">{releaseDate}</p>
//             <div className="flex items-center">
//               {[...Array(5)].map((_, index) => (
//                 <span key={index} className={`text-yellow-500 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}>
//                   ★
//                 </span>
//               ))}
//               <span className="ml-1 text-sm text-gray-700">{rating.toFixed(1)}</span>
//             </div>
//           </div>
//           <h3 className="mt-2 text-xl font-semibold text-left">{title}</h3>
//           <p className="mt-1 text-sm font-medium text-left text-teal-600">
//             Toplam {prepTime} • {servings} kişilik
//           </p>
//           <div className="flex items-center mt-4">
//             <img
//               src={author.imageSrc}
//               alt={author.name}
//               className="object-cover w-8 h-8 rounded-full"
//             />
//             <p className="ml-2 text-sm text-gray-800">{author.name}</p>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Card;
/* eslint-disable react/prop-types */
// import Button from './Button'; // Adjust the path based on your project structure
const Card = ({ imageSrc, title, releaseDate, prepTime, servings, rating, author, buttonLabel, onButtonClick }) => {
  return (
      <div className="w-full max-w-sm overflow-hidden  bg-pink rounded-lg shadow-none">
          {/* Image Section with Badge */}
          <div className="relative">
              <img
                  src={imageSrc}
                  alt={title}
                  className="object-cover w-full h-48"
              />
              <div className="absolute px-3 py-1 text-sm font-semibold text-teal-600 bg-white rounded-full shadow top-2 left-2">
                  Ramazan
              </div>
          </div>

          {/* Card Content */}
          <div className="p-4">
              <div className="flex justify-between">
                  <p className="text-sm text-gray-500">{releaseDate}</p>
                  <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                          <span
                              key={index}
                              className={`text-lg ${
                                  index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'
                              }`}
                          >
                              ★
                          </span>
                      ))}
                      <span className="ml-1 text-sm text-gray-700">{rating.toFixed(1)}</span>
                  </div>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-left">{title}</h3>
              <p className="mt-1 text-sm font-medium text-left text-teal-600">
                  Toplam {prepTime} • {servings} kişilik
              </p>
              <div className="flex items-center mt-4">
                  <img
                      src={author.imageSrc}
                      alt={author.name}
                      className="object-cover w-8 h-8 rounded-full"
                  />
                  <p className="ml-2 text-sm text-gray-800">{author.name}</p>
              </div>
          </div>

          {/* Button at the Bottom Center */}
          {/* <div className="flex justify-center p-4">
              <button
                  onClick={onButtonClick}
                  className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-500"
              >
                  {buttonLabel}
              </button>
          </div> */}
      </div>
  );
};

export default Card;
