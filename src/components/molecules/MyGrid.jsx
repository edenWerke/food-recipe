// import React from "react";
// import SideBar from "../atoms/SideBar";
// import Card from "../atoms/Card";
// import fish from "../../assets/fish.jpg";
// import edu from "../../assets/edu.jpg";
// import dc from "../../assets/dc.jpg";
// import a from "../../assets/a.jpg";
// import b from "../../assets/b.jpg";
// import c from "../../assets/c.jpg";
// import Header from '../molecules/Header';
// import Footer from '../molecules/Footer';
// import SecondHeader from "../atoms/secondHeader";

// const MyGrid = () => {
//   const eventData = [
//     {
//       eventTitle: "",
//       cards: [
//         {
//           imageSrc: fish,
//           title: "Renkli Pankek",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "30dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Gökhan Turan", imageSrc: a },
//         },
//         {
//           imageSrc: edu,
//           title: "Fıstıklı Güllaç",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "40dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Seda Turan", imageSrc: b },
//         },
//         {
//           imageSrc: dc,
//           title: "Şekersiz Şekerpare",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "45dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Tuğçe Ercem Isaacs", imageSrc: c },
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <h1 className="mt-16 ml-24 text-3xl font-semibold text-gray-800">Search for Sweets and others</h1>
//       <SecondHeader />
//       <div className="flex">
//         <SideBar className="mt-32" />
//         <div className="grid w-3/4 grid-cols-3 gap-4 p-4 mt-4">
//           {eventData[0].cards.map((card, index) => (
//             <Card
//               key={index}
//               imageSrc={card.imageSrc}
//               title={card.title}
//               releaseDate={card.releaseDate}
//               prepTime={card.prepTime}
//               servings={card.servings}
//               rating={card.rating}
//               author={card.author}
//             />
//           ))}
//         </div>
//         <div className="grid w-3/4 grid-cols-3 gap-4 p-4 mt-4">
//           {eventData[0].cards.map((card, index) => (
//             <Card
//               key={index}
//               imageSrc={card.imageSrc}
//               title={card.title}
//               releaseDate={card.releaseDate}
//               prepTime={card.prepTime}
//               servings={card.servings}
//               rating={card.rating}
//               author={card.author}
//             />
//           ))}
//         </div>
        
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MyGrid;
// import React from "react";
// import SideBar from "../atoms/SideBar";
// import Card from "../atoms/Card";
// import fish from "../../assets/fish.jpg";
// import edu from "../../assets/edu.jpg";
// import dc from "../../assets/dc.jpg";
// import a from "../../assets/a.jpg";
// import b from "../../assets/b.jpg";
// import c from "../../assets/c.jpg";
// import Header from '../molecules/Header';
// import Footer from '../molecules/Footer';
// import SecondHeader from "../atoms/secondHeader";

// const MyGrid = () => {
//   const eventData = [
//     {
//       eventTitle: "",
//       cards: [
//         {
//           imageSrc: fish,
//           title: "Renkli Pankek",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "30dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Gökhan Turan", imageSrc: a },
//         },
//         {
//           imageSrc: edu,
//           title: "Fıstıklı Güllaç",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "40dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Seda Turan", imageSrc: b },
//         },
//         {
//           imageSrc: dc,
//           title: "Şekersiz Şekerpare",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "45dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Tuğçe Ercem Isaacs", imageSrc: c },
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <h1 className="mt-16 ml-24 text-3xl font-semibold text-gray-800">Search for Sweets and others</h1>
//       <SecondHeader />
//       <div className="flex">
//         <SideBar className="mt-32" />
//         <div className="w-3/4 mt-4">
//           {/* First Grid */}
//           <div className="grid grid-cols-3 gap-4 p-4">
//             {eventData[0].cards.map((card, index) => (
//               <Card
//                 key={index}
//                 imageSrc={card.imageSrc}
//                 title={card.title}
//                 releaseDate={card.releaseDate}
//                 prepTime={card.prepTime}
//                 servings={card.servings}
//                 rating={card.rating}
//                 author={card.author}
//               />
//             ))}
//           </div>
//           {/* Second Grid */}
//           <div className="grid grid-cols-3 gap-4 p-4">
//             {eventData[0].cards.map((card, index) => (
//               <Card
//                 key={index}
//                 imageSrc={card.imageSrc}
//                 title={card.title}
//                 releaseDate={card.releaseDate}
//                 prepTime={card.prepTime}
//                 servings={card.servings}
//                 rating={card.rating}
//                 author={card.author}
//               />
//             ))}
//           </div>
//           {/* Third Grid */}
//           <div className="grid grid-cols-3 gap-4 p-4">
//             {eventData[0].cards.map((card, index) => (
//               <Card
//                 key={index}
//                 imageSrc={card.imageSrc}
//                 title={card.title}
//                 releaseDate={card.releaseDate}
//                 prepTime={card.prepTime}
//                 servings={card.servings}
//                 rating={card.rating}
//                 author={card.author}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MyGrid;
// import React from "react";
// import SideBar from "../atoms/SideBar";
// import SmallCard from "../atoms/SmallCard"; // Import the new SmallCard component
// import fish from "../../assets/fish.jpg";
// import edu from "../../assets/edu.jpg";
// import dc from "../../assets/dc.jpg";
// import a from "../../assets/a.jpg";
// import b from "../../assets/b.jpg";
// import c from "../../assets/c.jpg";
// import Header from '../molecules/Header';
// import Footer from '../molecules/Footer';
// import SecondHeader from "../atoms/secondHeader";

// const MyGrid = () => {
//   const eventData = [
//     {
//       eventTitle: "",
//       cards: [
//         {
//           imageSrc: fish,
//           title: "Renkli Pankek",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "30dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Gökhan Turan", imageSrc: a },
//         },
//         {
//           imageSrc: edu,
//           title: "Fıstıklı Güllaç",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "40dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Seda Turan", imageSrc: b },
//         },
//         {
//           imageSrc: dc,
//           title: "Şekersiz Şekerpare",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "45dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Tuğçe Ercem Isaacs", imageSrc: c },
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <h1 className="mt-16 ml-24 text-3xl font-semibold text-gray-800">Search for Sweets and others</h1>
//       <SecondHeader />
//       <div className="flex">
//         <SideBar className="mt-32" />
//         <div className="w-3/4 mt-4">
//           {/* First Grid */}
//           <div className="grid grid-cols-3 gap-4 p-4">
//             {eventData[0].cards.map((card, index) => (
//               <SmallCard
//                 key={index}
//                 imageSrc={card.imageSrc}
//                 title={card.title}
//                 releaseDate={card.releaseDate}
//                 prepTime={card.prepTime}
//                 servings={card.servings}
//                 rating={card.rating}
//                 author={card.author}
//               />
//             ))}
            
//           </div>
//           {/* Repeat for additional grids if needed */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MyGrid;
import React from "react";
import SideBar from "../atoms/SideBar";
import SmallCard from "../atoms/SmallCard"; // Import the new SmallCard component
import fish from "../../assets/fish.jpg";
import edu from "../../assets/edu.jpg";
import dc from "../../assets/dc.jpg";
import a from "../../assets/a.jpg";
import b from "../../assets/b.jpg";
import c from "../../assets/c.jpg";
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import SecondHeader from "../atoms/secondHeader";

const MyGrid = () => {
  const eventData = [
    {
      eventTitle: "",
      cards: [
        {
          imageSrc: fish,
          title: "Renkli Pankek",
          releaseDate: "12 Nisan 2021",
          prepTime: "30dk",
          servings: "4 kişilik",
          rating: 5,
          author: { name: "Gökhan Turan", imageSrc: a },
        },
        {
          imageSrc: edu,
          title: "Fıstıklı Güllaç",
          releaseDate: "12 Nisan 2021",
          prepTime: "40dk",
          servings: "4 kişilik",
          rating: 5,
          author: { name: "Seda Turan", imageSrc: b },
        },
        {
          imageSrc: dc,
          title: "Şekersiz Şekerpare",
          releaseDate: "12 Nisan 2021",
          prepTime: "45dk",
          servings: "4 kişilik",
          rating: 5,
          author: { name: "Tuğçe Ercem Isaacs", imageSrc: c },
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <h1 className="mt-16 ml-24 text-3xl font-semibold text-gray-800">Search for Sweets and others</h1>
      <SecondHeader />
      <div className="flex">
        <SideBar className="mt-32" />
        <div className="w-3/4 mt-4">
          {/* First Grid */}
          <div className="grid grid-cols-3 gap-4 p-4">
            {eventData[0].cards.map((card, index) => (
              <SmallCard
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                releaseDate={card.releaseDate}
                prepTime={card.prepTime}
                servings={card.servings}
                rating={card.rating}
                author={card.author}
              />
            ))}
          </div>
          
          {/* Second Grid */}
          <div className="grid grid-cols-3 gap-4 p-4">
            {eventData[0].cards.map((card, index) => (
              <SmallCard
                key={index + eventData[0].cards.length} // Ensure unique keys
                imageSrc={card.imageSrc}
                title={card.title}
                releaseDate={card.releaseDate}
                prepTime={card.prepTime}
                servings={card.servings}
                rating={card.rating}
                author={card.author}
              />
            ))}
          </div>

          {/* Third Grid */}
          <div className="grid grid-cols-3 gap-4 p-4">
            {eventData[0].cards.map((card, index) => (
              <SmallCard
                key={index + 2 * eventData[0].cards.length} // Ensure unique keys
                imageSrc={card.imageSrc}
                title={card.title}
                releaseDate={card.releaseDate}
                prepTime={card.prepTime}
                servings={card.servings}
                rating={card.rating}
                author={card.author}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyGrid;