// import React from 'react';
// import Header from './Header';
// import Image from '../atoms/Image';
// import pancake from "../../assets/pp.png";

// const More = () => {
//   return (
//     <div>
//       <Header />
//       <div className="flex">
//         <Image 
//           src={pancake}
//           alt="Delicious Pancake"
//           className="w-2/2 ml-16 mt-8 h-96 object-cover" // Set height to 12rem and maintain aspect ratio
//         />
//       </div>
//     </div>
//   );
// }

// export default More;
// import React from 'react';
// import Header from './Header';
// import Image from '../atoms/Image';
// import pancake from "../../assets/pp.png";

// const More = () => {
//   return (
//     <div>
//       <Header />
//       <div className="flex items-center mt-8">
//         <Image 
//           src={pancake}
//           alt="Delicious Pancake"
//           className="w-2/3 h-96 object-cover ml-16" // Adjust width and height as needed
//         />
//         <div className="w-64 h-96 ml-8 bg-gray-200 flex flex-col justify-center items-center"> {/* Center text vertically and horizontally */}
//           <h1 className="text-4xl font-bold">GOOGLE</h1>
//           <h2 className="text-2xl">REKLAM</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default More;
import React from 'react';
import Header from './Header';
import Image from '../atoms/Image';
import pancake from "../../assets/pp.png";

const More = () => {
  return (
    <div>
      <Header />
      <div className="flex items-start bg-blue-400 mt-8">
        {/* Image on the left */}
        <Image
          src={pancake}
          alt="Delicious Pancake"
          className="w-[70%] bg-pink-500 h-96 object-cover ml-16" // Adjust width and height as needed
        />
        {/* Gray boxes on the right */}
        <div className="ml-4 bg-red-400 flex flex-col">
          {/* First Gray Box */}
          <div className="w-72 h-[30rem] bg-gray-200 flex flex-col justify-center items-center mb-4">
            <h1 className="text-4xl font-bold">GOOGLE</h1>
            <h2 className="text-2xl">REKLAM</h2>
          </div>
          {/* Second Gray Box */}
          <div className="w-72 h-[30rem] bg-gray-200 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">GOOGLE</h1>
            <h2 className="text-2xl">REKLAM</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
