
// import React from 'react';
// import Header from './Header';
// import Image from '../atoms/Image';
// import pancake from "../../assets/pp.png";

// const More = () => {
//   return (
//     <div>
//       <Header />
//       <div className="flex items-start mt-8 bg-blue-400">
//         {/* Image on the left */}
//         <Image
//           src={pancake}
//           alt="Delicious Pancake"
//           className="w-[70%] bg-pink-500 h-96 object-cover ml-16" // Adjust width and height as needed
//         />
//         {/* Gray boxes on the right */}
//         <div className="flex flex-col ml-4 bg-red-400">
//           {/* First Gray Box */}
//           <div className="w-72 h-[30rem] bg-gray-200 flex flex-col justify-center items-center mb-4">
//             <h1 className="text-4xl font-bold">GOOGLE</h1>
//             <h2 className="text-2xl">REKLAM</h2>
//           </div>
//           {/* Second Gray Box */}
//           <div className="w-72 h-[30rem] bg-gray-200 flex flex-col justify-center items-center">
//             <h1 className="text-4xl font-bold">GOOGLE</h1>
//             <h2 className="text-2xl">REKLAM</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default More;
// import React from 'react';
// import Header from './Header';
// import Image from '../atoms/Image';
// import pancake from "../../assets/pp.png";

// const More = () => {
//   return (
//     <div>
//       <Header />
//       <div className="px-16 py-8 mt-8 bg-blue-400">
//         <div className="flex items-start">
//           {/* Image on the left */}
//           <Image
//             src={pancake}
//             alt="Delicious Pancake"
//             className="w-[70%] bg-pink-500 h-96 object-cover" // Image takes 70% width
//           />
          
//           {/* Gray boxes on the right */}
          
//         </div>

//         {/* Orange Box Below the Image */}
//         <div className="mt-4 bg-pink-700 p-8 w-[70%] mr-96">
//           <h3 className="text-2xl font-bold">Orange Pancake</h3>
//           <p>Our orange pancake recipe that everyone loves to eat.</p>
//           <p className="mt-2"><strong>Preparation Time:</strong> Total 440 minutes</p>
//           <p><strong>Serves:</strong> 4 servings</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
          
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
//           {/* Buttons */}
//           <div className="mt-4">
//             <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded">Share on Facebook</button>
//             <button className="px-4 py-2 text-white bg-green-500 rounded">Share on WhatsApp</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default More;
// import React from 'react';
// import Header from './Header';
// import Image from '../atoms/Image';
// import pancake from "../../assets/pp.png";

// const More = () => {
//   return (
//     <div>
//       <Header />
//       <div className="px-16 py-8 mt-8 bg-blue-400">
//         <div className="flex items-start">
//           {/* Image on the left */}
//           <Image
//             src={pancake}
//             alt="Delicious Pancake"
//             className="w-[70%] ml-4 bg-pink-500 h-96 object-cover" // Adjust margins as needed
//           />
//           {/* Gray boxes on the right */}
//           <div className="flex-col ml-24"> {/* Adjusted left margin */}
   
//             <div className="w-72 h-[30rem] bg-gray-200 flex flex-col justify-center items-center mb-2"> {/* Adjusted bottom margin */}
//               <h1 className="text-4xl font-bold">GOOGLE</h1>
//               <h2 className="text-2xl">REKLAM</h2>
//             </div>
         
            
//           </div>
//         </div>

//         {/* Details Section Directly Beneath the Image */}
//         <span className="ml-4 bg-orange-400 mb-96"> {/* Adjusting margins here can help too */}
//           <h3 className="text-2xl font-bold">Orange Pancake</h3>
//           <p>Our orange pancake recipe that everyone loves to eat.</p>
//           <p className="mt-2"><strong>Preparation Time:</strong> Total 440 minutes</p>
//           <p><strong>Serves:</strong> 4 servings</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
//           <p><strong>Serves:</strong> 4 servings</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>
//           <p><strong>Serves:</strong> 4 servings</p>
//           <p><strong>Calories:</strong> 1 piece contains 270 calories</p>

//           {/* Buttons */}
//           <div className="mt-4">
//             <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded">Share on Facebook</button>
//             <button className="px-4 py-2 text-white bg-green-500 rounded">Share on WhatsApp</button>
//           </div>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default More;
import React from 'react';
import Header from './Header';
import Image from '../atoms/Image';
import pancake from "../../assets/pp.png";
import Footer from './Footer';

const More = () => {
  return (
    <div>
      <Header />
      <div className="px-16 py-8 mt-8 ">
        <div className="flex items-start">
          {/* Image on the left */}
          <Image
            src={pancake}
            alt="Delicious Pancake"
            className="w-[70%] ml-8 h-96 object-cover" // Adjust margins as needed
          />
          {/* Gray boxes on the right */}
          <div className="flex-col ml-4"> {/* Adjusted left margin */}
            <div className="w-72 h-[30rem] bg-gray-100 flex flex-col justify-center items-center mb-2"> {/* Adjusted bottom margin */}
              <h1 className="text-4xl font-bold">GOOGLE</h1>
              <h2 className="text-2xl">REKLAM</h2>
            </div>

            {/* Duplicated gray box */}
            <div className="w-72 h-[30rem] bg-gray-100 flex flex-col justify-center items-center mb-2"> {/* Adjusted bottom margin */}
              <h1 className="text-4xl font-bold">GOOGLE</h1>
              <h2 className="text-2xl">REKLAM</h2>
            </div>
          </div>
        </div>

        {/* Details Section Directly Beneath the Image */}
     
      </div>
      <Footer className="mt-48"/>
    </div>
  );
};

export default More;