// import React from 'react';

// const SecondHeader = () => {
//   return (
//     <div className="flex items-center p-4 space-x-4">
//       <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
//         Filter
//       </button>
//       <span className="flex items-center px-2 py-0.5 mb-2 mr-2 text-sm border rounded-full text-gray-700 border-gray-300 bg-white">
//             Orange
//             <button className="flex items-center justify-center w-4 h-4 ml-1 text-xs text-gray-700 bg-gray-300 rounded-full">
//               ×
//             </button>
//           </span>
//           <span className="flex items-center px-2 py-0.5 mb-2 mr-2 text-sm border rounded-full text-gray-700 border-gray-300 bg-white">
//             Orange
//             <button className="flex items-center justify-center w-4 h-4 ml-1 text-xs text-gray-700 bg-gray-300 rounded-full">
//               ×
//             </button>
//           </span>
//           <span className="flex items-center px-2 py-0.5 mb-2 mr-2 text-sm border rounded-full text-gray-700 border-gray-300 bg-white">
//             Orange
//             <button className="flex items-center justify-center w-4 h-4 ml-1 text-xs text-gray-700 bg-gray-300 rounded-full">
//               ×
//             </button>
//           </span>
//       <select className="px-4 py-2 ">
//         <option>Sort By</option>
//         <option>Option 1</option>
//         <option>Option 2</option>
//       </select>
//     </div>
//   );
// };

// export default SecondHeader;
// import React from 'react';

// const SecondHeader = () => {
//   return (
//     <div className="flex items-center p-4 space-x-4">
//       <button className="px-4 py-2 text-blue-500 hover:underline">
//         Filter
//       </button>
//       <span className="flex items-center px-2 py-0.5 mb-2 mr-2 text-sm border rounded-full text-gray-700 border-gray-300 bg-white">
//         Orange
//         <button className="flex items-center justify-center w-4 h-4 ml-1 text-xs text-gray-700 bg-gray-300 rounded-full">
//           ×
//         </button>
//       </span>
//       <span className="flex items-center px-2 py-0.5 mb-2 mr-2 text-sm border rounded-full text-gray-700 border-gray-300 bg-white">
//         Orange
//         <button className="flex items-center justify-center w-4 h-4 ml-1 text-xs text-gray-700 bg-gray-300 rounded-full">
//           ×
//         </button>
//       </span>
//       <span className="flex items-center px-2 py-0.5 mb-2 mr-2 text-sm border rounded-full text-gray-700 border-gray-300 bg-white">
//         Orange
//         <button className="flex items-center justify-center w-4 h-4 ml-1 text-xs text-gray-700 bg-gray-300 rounded-full">
//           ×
//         </button>
//       </span>
//       <select className="px-4 py-2 text-blue-500 hover:underline">
//         <option>Sort By</option>
//         <option>Option 1</option>
//         <option>Option 2</option>
//       </select>
//     </div>
//   );
// };

// export default SecondHeader;
import React from 'react';

const SecondHeader = () => {
  return (
    <div className="flex mt-24 ml-8">
      <button className="px-4 py-2 ml-16 text-gray-500 hover:underline">
        Filter
      </button>
      <div className='flex ml-48'>
      <span className="flex items-center px-2  ml-32 py-0.5 mb-2 mr-2 text-sm border rounded-full text-gray-700 border-gray-300 bg-white">
        Orange
        <button className="flex items-center justify-center w-4 h-4 ml-1 text-xs text-gray-700 bg-gray-300 rounded-full">
          ×
        </button>
      </span>
      <span className="flex items-center px-2 py-0.5 mb-2 mr-2 text-sm border rounded-full text-gray-700 border-gray-300 bg-white">
        Orange
        <button className="flex items-center justify-center w-4 h-4 ml-1 text-xs text-gray-700 bg-gray-300 rounded-full">
          ×
        </button>
      </span>
      <span className="flex items-center px-2 py-0.5 mb-2 mr-2 text-sm border rounded-full text-gray-700 border-gray-300 bg-white">
        Orange
        <button className="flex items-center justify-center w-4 h-4 ml-1 text-xs text-gray-700 bg-gray-300 rounded-full">
          ×
        </button>
      </span>
      </div>
      <div className='ml-48'>
      <select className="text-gray-500 ml-96 hover:underline">
        <option>Sort By</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      </div>
    </div>
  );
};

export default SecondHeader;