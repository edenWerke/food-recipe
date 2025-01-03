// import pancake from "../../assets/pancake.jpg";
// import BackgroundImage from "../atoms/BackgroundImage";
// import Button from "../atoms/Button";
// import Card from "../atoms/Card"; // Import the Card atom
// import egg from "../../assets/egg.jpg";
// import dc from "../../assets/dc.jpg";
// import din from "../../assets/din.jpg";
// import omlate from "../../assets/omlate.jpg";
// import pasta from "../../assets/pasta.jpg";
// import dd from "../../assets/dd.jpg";
// import ff from "../../assets/ff.jpg";
// import edu from "../../assets/edu.jpg";
// import fish from "../../assets/fish.jpg";
// import a from "../../assets/a.jpg";
// import b from "../../assets/b.jpg";
// import c from "../../assets/c.jpg";
// import d from "../../assets/d.jpg";
// // ... (other imports remain the same)

// // ... (other imports remain the same)

// const MainContent = () => {
//   const handleSearch = () => {
//     console.log("Search clicked!");
//   };

//   const handleButtonClick = (label) => {
//     console.log(`${label} button clicked!`);
//   };

//   const eventData = [
//     {
//       eventTitle: "Ramazana Özel Tarifler",
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
//         {
//           imageSrc: din,
//           title: "Dondurmalı İrmik Helvası",
//           releaseDate: "12 Nisan 2021",
//           prepTime: "45dk",
//           servings: "4 kişilik",
//           rating: 5,
//           author: { name: "Özgü Özden", imageSrc: d },
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Image */}
//       <BackgroundImage
//         src={pancake}
//         className="w-full h-full bg-center bg-cover opacity-80"
//       />

//       {/* Content */}
//       <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-full px-4 text-center">
//         {/* Heading */}
//         <div className="inline-block px-6 py-3">
//           <h1 className="font-mono text-4xl font-extrabold text-teal-600 md:text-3xl">
//             Tatlı Rüyalar ile en güzel tatlı tarifleri burada
//           </h1>
//         </div>

//         {/* Search Bar */}
//         <div className="flex items-center justify-center w-full max-w-2xl mx-auto mt-6">
//           <input
//             type="text"
//             placeholder="Tatlı ismi, malzeme vb. yazıp araştırın"
//             className="w-[90%] px-4 py-4 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
//           />
//           <button
//             onClick={handleSearch}
//             className="px-6 py-3 font-semibold text-white transition duration-300 bg-teal-600 border-4 border-white shadow-md hover:bg-red-600"
//           >
//             Ara
//           </button>
//         </div>
//       </div>

//       {/* Buttons Section */}
//       <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-full py-4">
//         <div className="flex justify-between w-full gap-4">
//           {[
//             "Pankek Tarifleri",
//             "Sütlü Tatlılar",
//             "Şerbetli Tatlılar",
//             "Pasta Tarifleri",
//             "Meyveli Tatlılar",
//             "Helva Tarifleri",
//             "Diğer Tatlılar",
//           ].map((label, index) => (
//             <Button
//               key={index}
//               label={label}
//               onClick={() => handleButtonClick(label)}
//               className="w-full py-2 text-sm font-extrabold text-gray-800 bg-white border-2 border-gray-400 rounded-md shadow-none hover:bg-gray-300"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Event Cards */}
//       <main className="py-12 ">
//         <div className="container px-6 mx-auto mt-20"> {/* Added mt-8 for spacing */}
//           {eventData.map((event, eventIndex) => (
//             <div key={eventIndex}>
//               {/* Event Title */}
//               <h2 className="mb-8 text-3xl font-medium text-left">
//                 {event.eventTitle}
//               </h2>

//               {/* Cards Section */}
//               <div className="flex justify-center gap-4 shadow-none">
//                 {event.cards.map((card, cardIndex) => (
//                   <Card
//                     key={cardIndex}
//                     imageSrc={card.imageSrc}
//                     title={card.title}
//                     releaseDate={card.releaseDate}
//                     prepTime={card.prepTime}
//                     servings={card.servings}
//                     rating={card.rating}
//                     author={card.author}
//                     className="w-64" // Adjust width as needed
//                   />
//                 ))}
//               </div>
//               <div className="flex justify-center mt-24 rounded-md">
//         <Button label="Ramazan'a Özel Bütün Tarifler" onClick={() => console.log("Button clicked!")} className="text-white bg-teal-600 rounded-md " />
//       </div>
//             </div>
//           ))}
//         </div>
        
//       </main>
//       <main className="py-[-16] ">
//         <div className="container px-6 mx-auto mt-14"> {/* Added mt-8 for spacing */}
//           {eventData.map((event, eventIndex) => (
//             <div key={eventIndex}>
//               {/* Event Title */}
//               <h2 className="mb-8 text-3xl font-medium text-left">
//                 {event.eventTitle}
//               </h2>

//               {/* Cards Section */}
//               <div className="flex justify-center gap-4">
//                 {event.cards.map((card, cardIndex) => (
//                   <Card
//                     key={cardIndex}
//                     imageSrc={card.imageSrc}
//                     title={card.title}
//                     releaseDate={card.releaseDate}
//                     prepTime={card.prepTime}
//                     servings={card.servings}
//                     rating={card.rating}
//                     author={card.author}
//                     className="w-64" // Adjust width as needed
//                   />
//                 ))}
//               </div>
//               <div className="flex justify-center mt-24 rounded-md">
//         <Button label="Ramazan'a Özel Bütün Tarifler" onClick={() => console.log("Button clicked!")} className="text-white bg-teal-600 rounded-md " />
//       </div>
//             </div>
//           ))}
//         </div>
        
//       </main>
//       <main className="py-[-16]">
//         <div className="container px-6 mx-auto mt-14"> {/* Added mt-8 for spacing */}
//           {eventData.map((event, eventIndex) => (
//             <div key={eventIndex}>
//               {/* Event Title */}
//               <h2 className="mb-8 text-3xl font-medium text-left">
//                 {event.eventTitle}
//               </h2>

//               {/* Cards Section */}
//               <div className="flex justify-center gap-4">
//                 {event.cards.map((card, cardIndex) => (
//                   <Card
//                     key={cardIndex}
//                     imageSrc={card.imageSrc}
//                     title={card.title}
//                     releaseDate={card.releaseDate}
//                     prepTime={card.prepTime}
//                     servings={card.servings}
//                     rating={card.rating}
//                     author={card.author}
//                     className="w-64" // Adjust width as needed
//                   />
//                 ))}
//               </div>
//               <div className="flex justify-center mt-24 rounded-md">
//         <Button label="Ramazan'a Özel Bütün Tarifler" onClick={() => console.log("Button clicked!")} className="text-white bg-teal-600 rounded-md " />
//       </div>
//             </div>
//           ))}
//         </div>
        
//       </main>
//       <main className="py-[-16]">
//         <div className="container px-6 mx-auto mt-14"> {/* Added mt-8 for spacing */}
//           {eventData.map((event, eventIndex) => (
//             <div key={eventIndex}>
//               {/* Event Title */}
//               <h2 className="mb-8 text-3xl font-medium text-left">
//                 {event.eventTitle}
//               </h2>

//               {/* Cards Section */}
//               <div className="flex justify-center gap-4">
//                 {event.cards.map((card, cardIndex) => (
//                   <Card
//                     key={cardIndex}
//                     imageSrc={card.imageSrc}
//                     title={card.title}
//                     releaseDate={card.releaseDate}
//                     prepTime={card.prepTime}
//                     servings={card.servings}
//                     rating={card.rating}
//                     author={card.author}
//                     className="w-64" // Adjust width as needed
//                   />
//                 ))}
//               </div>
//               <div className="flex justify-center mt-24 rounded-md">
//         <Button label="Ramazan'a Özel Bütün Tarifler" onClick={() => console.log("Button clicked!")} className="text-white bg-teal-600 rounded-md " />
//       </div>
//             </div>
//           ))}
//         </div>
        
//       </main>
      
//     </div>
//   );
// };

// export default MainContent;

import React from 'react';
import pancake from "../../assets/pancake.jpg";
import BackgroundImage from "../atoms/BackgroundImage";
import Button from "../atoms/Button";
import Card from "../atoms/Card"; // Import the Card atom
import egg from "../../assets/egg.jpg";
import dc from "../../assets/dc.jpg";
import din from "../../assets/din.jpg";
import { FaInstagram, FaYoutube } from "react-icons/fa";
// import omlate from "../../assets/omlate.jpg";
import pasta from "../../assets/pasta.jpg";
import dd from "../../assets/dd.jpg";
import ff from "../../assets/ff.jpg";
import edu from "../../assets/edu.jpg";
import fish from "../../assets/fish.jpg";
import a from "../../assets/a.jpg";
import b from "../../assets/b.jpg";
import c from "../../assets/c.jpg";
import d from "../../assets/d.jpg";
import girl from "../../assets/girl.jpg";
import kit from "../../assets/kit.jpg";

const MainContent = () => {
  const handleSearch = () => {
    console.log("Search clicked!");
  };

  const handleButtonClick = (label) => {
    console.log(`${label} button clicked!`);
  };

  const eventData = [
    {
      eventTitle: "Ramazana Özel Tarifler",
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
        {
          imageSrc: din,
          title: "Dondurmalı İrmik Helvası",
          releaseDate: "12 Nisan 2021",
          prepTime: "45dk",
          servings: "4 kişilik",
          rating: 5,
          author: { name: "Özgü Özden", imageSrc: d },
        },
      ],
    },
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <BackgroundImage
        src={pancake}
        className="w-full h-full bg-center bg-cover opacity-80"
      />

      {/* Content */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-full px-4 text-center">
        <h1 className="font-mono text-4xl font-extrabold text-teal-600 md:text-3xl">
          Tatlı Rüyalar ile en güzel tatlı tarifleri burada
        </h1>
        <div className="flex items-center justify-center w-full max-w-2xl mx-auto mt-6">
          <input
            type="text"
            placeholder="Tatlı ismi, malzeme vb. yazıp araştırın"
            className="w-[90%] px-4 py-4 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 font-semibold text-white transition duration-300 bg-teal-600 border-4 border-white shadow-md hover:bg-red-600"
          >
            Ara
          </button>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-full py-4">
        <div className="flex justify-between w-full gap-4">
          {[
            "Pankek Tarifleri",
            "Sütlü Tatlılar",
            "Şerbetli Tatlılar",
            "Pasta Tarifleri",
            "Meyveli Tatlılar",
            "Helva Tarifleri",
            "Diğer Tatlılar",
          ].map((label, index) => (
            <Button
              key={index}
              label={label}
              onClick={() => handleButtonClick(label)}
              className="w-full py-2 text-sm font-extrabold text-gray-800 bg-white border-2 border-gray-400 rounded-md shadow-none hover:bg-gray-300"
            />
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <main className="py-12 ">
        <div className="container px-6 mx-auto mt-20">
          {eventData.map((event, eventIndex) => (
            <div key={eventIndex}>
              <h2 className="mb-8 text-3xl font-medium text-left">
                {event.eventTitle}
              </h2>
              <div className="flex justify-center gap-4 shadow-none">
                {event.cards.map((card, cardIndex) => (
                  <Card
                    key={cardIndex}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    releaseDate={card.releaseDate}
                    prepTime={card.prepTime}
                    servings={card.servings}
                    rating={card.rating}
                    author={card.author}
                    className="w-64" // Adjust width as needed
                  />
                ))}
              </div>
              <div className="flex justify-center mt-24 rounded-md">
                <Button
                  label="Ramazan'a Özel Bütün Tarifler"
                  onClick={() => console.log("Button clicked!")}
                  className="text-white bg-teal-600 rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <main className="py-12 ">
        <div className="container px-6 mx-auto mt-20">
          {eventData.map((event, eventIndex) => (
            <div key={eventIndex}>
              <h2 className="mb-8 text-3xl font-medium text-left">
                {event.eventTitle}
              </h2>
              <div className="flex justify-center gap-4 shadow-none">
                {event.cards.map((card, cardIndex) => (
                  <Card
                    key={cardIndex}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    releaseDate={card.releaseDate}
                    prepTime={card.prepTime}
                    servings={card.servings}
                    rating={card.rating}
                    author={card.author}
                    className="w-64" // Adjust width as needed
                  />
                ))}
              </div>
              <div className="flex justify-center mt-24 rounded-md">
                <Button
                  label="Ramazan'a Özel Bütün Tarifler"
                  onClick={() => console.log("Button clicked!")}
                  className="text-white bg-teal-600 rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <main className="py-12 ">
        <div className="container px-6 mx-auto mt-20">
          {eventData.map((event, eventIndex) => (
            <div key={eventIndex}>
              <h2 className="mb-8 text-3xl font-medium text-left">
                {event.eventTitle}
              </h2>
              <div className="flex justify-center gap-4 shadow-none">
                {event.cards.map((card, cardIndex) => (
                  <Card
                    key={cardIndex}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    releaseDate={card.releaseDate}
                    prepTime={card.prepTime}
                    servings={card.servings}
                    rating={card.rating}
                    author={card.author}
                    className="w-64" // Adjust width as needed
                  />
                ))}
              </div>
              <div className="flex justify-center mt-24 rounded-md">
                <Button
                  label="Ramazan'a Özel Bütün Tarifler"
                  onClick={() => console.log("Button clicked!")}
                  className="text-white bg-teal-600 rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* New Section with Two Images */}
      {/* New Section with Two Images */}
<main className="py-[-16]">
  <div className="container px-6 mx-auto mt-14">
    <h2 className="mb-8 text-3xl font-medium text-left">
      Yeni Eklenen Yazılar
    </h2>
    <div className="flex justify-center gap-4">
      {/* First Image */}
      <div className="w-1/2">
        <img
          src={girl} // Replace with your first image path
          alt="Suluçuluk Duygusu Hissemeden Tatlı Yiyebilmek İçin 8 Öneri"
          className="w-full h-100"
        />
        <p className="text-sm text-gray-600 text-left mt-2">23 Nisan 2023</p>
        <h3 className="mt-1 text-lg font-semibold text-left">
          Suluçuluk Duygusu Hissemeden Tatlı Yiyebilmek İçin 8 Öneri
        </h3>
      </div>

      {/* Second Image */}
      <div className="w-1/2">
        <img
          src={kit} // Replace with your second image path
          alt="Evde Kurutulmuş Meyvelerden Tatlı Yapmak"
          className="w-full h-auto"
        />
        <p className="text-sm text-gray-600 text-left mt-2">23 Nisan 2023</p>
        <h3 className="mt-1 text-lg font-semibold text-left">
          Evde Kurutulmuş Meyvelerden Tatlı Yapmak
        </h3>
      </div>
    </div>
  </div>
  <div className="flex justify-center mt-24 rounded-md">
                <Button
                  label=" Bütün Tarifler"
                  onClick={() => console.log("Button clicked!")}
                  className="text-white bg-teal-600 w-48 rounded-md"
                />
              </div>
</main>
<div className="bg-red-300 p-14 mt-40 w-fu">
  <div className="container mx-auto text-center">
    <p className="mb-4 font-semibold font-mono text-lg">
      Yeni Çıkan Tariflerimizden Haberdar Olmak İçin
    </p>
    <div className="flex justify-center gap-4">
      
      <Button
        label="Instagram'da Takip"
        onClick={() => window.open('https://instagram.com', '_blank')}
        className="bg-white text-black rounded-md"
      />
      <Button
        label="YouTube'da Takip"
        onClick={() => window.open('https://youtube.com', '_blank')}
        className="bg-white text-black rounded-md"
      />
    </div>

    {/* Add the New Button Here */}
    
  </div>
</div>
{/* <div className="flex justify-center mt-24 rounded-md">
                <Button
                  label=" Bütün Tarifler"
                  onClick={() => console.log("Button clicked!")}
                  className="text-white bg-teal-600 w-48 rounded-md"
                />
              </div> */}
   {/* <footer className="bg-gray-50  w-full p-4">
  <div className="container mx-auto text-center">
    <div className="grid grid-cols-4 gap-8 mb-4">
      <div>
        <h3 className="font-bold">Bütün Tatlı Çeşitleri</h3>
        <ul className="text-left  pl-16 ">
          <li>Pankek Tarifleri</li>
          <li>Sütlü Tatlılar</li>
          <li>Şerbetli Tatlılar</li>
          <li>Pasta Tarifleri</li>
          <li>Meyveli Tatlılar</li>
          <li>Helva Tarifleri</li>
          <li>Diğer Tatlılar</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">Dünya Mutfağından</h3>
        <ul className="text-left list-disc pl-5">
          <li>Japon Tatlıları</li>
          <li>İngiliz Tatlıları</li>
          <li>Arap Tatlıları</li>
          <li>Amerikan Tatlıları</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">Özel</h3>
        <ul className="text-left">
          <li>Vegan</li>
          <li>Sağlıklı</li>
          <li>Diyet</li>
          <li>Glutensiz</li>
          <li>Çikolatalı Özel</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">Hakkımızda & İletişim</h3>
        <p>Biz Kimiz?</p>
        <p>Email: <a href="mailto:tarif.yardim@gmail.com" className="text-blue-500">tarif.yardim@gmail.com</a></p>
        <p>Telefon: <span className="text-blue-500">0505-0404-0404</span></p>
      </div>
    </div>

    <div className="text-center mt-4 text-sm">
      <p>2023 Tatlı Tarifleri, Tüm Hakları Saklıdır</p>
    </div>
  </div>
</footer> */}
<footer className="bg-gray-50 w-full p-8">
  <div className="container mx-auto text-center max-w-6xl">
    <div className="grid grid-cols-4 gap-8 mb-4">
      <div>
        <h3 className="font-bold mb-5">Bütün Tatlı Çeşitleri</h3>
        <ul className="text-left pl-16">
          <li className="text-gray-700 mb-2">Pankek Tarifleri</li>
          <li className="text-gray-700 mb-2">Sütlü Tatlılar</li>
          <li className="text-gray-700 mb-2">Şerbetli Tatlılar</li>
          <li className="text-gray-700 mb-2">Pasta Tarifleri</li>
          <li className="text-gray-700 mb-2">Meyveli Tatlılar</li>
          <li className="text-gray-700 mb-2">Helva Tarifleri</li>
          <li className="text-gray-700 mb-2">Diğer Tatlılar</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-5">Dünya Mutfağından</h3>
        <ul className="text-left pl-16">
          <li className="text-gray-700 mb-2">Japon Tatlıları</li>
          <li className="text-gray-700 mb-2">İngiliz Tatlıları</li>
          <li className="text-gray-700 mb-2">Arap Tatlıları</li>
          <li className="text-gray-700 mb-2">Amerikan Tatlıları</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-5 ">Özel</h3>
        <ul className="text-left pl-28">
          <li className="text-gray-700 mb-2">Vegan</li>
          <li className="text-gray-700 mb-2">Sağlıklı</li>
          <li className="text-gray-700 mb-2">Diyet</li>
          <li className="text-gray-700 mb-2">Glutensiz</li>
          <li className="text-gray-700 mb-2">Çikolatalı Özel</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">Hakkımızda & İletişim</h3>
        <p>Biz Kimiz?</p>
        <p> <a href="mailto:tarif.yardim@gmail.com" className="text-gray-700">tarif.yardim@gmail.com</a></p>
        <p><span className="text-gray-700">0505-0404-0404</span></p>
      </div>
    </div>
<hr  className="text-gray-700"/>
    <div className="text-center mt-4 text-gray-700 text-sm">
      <p>2023 Tatlı Tarifleri, Tüm Hakları Saklıdır</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default MainContent;

// import pancake from "../../assets/pancake.jpg";
// import BackgroundImage from "../atoms/BackgroundImage";
// import Button from "../atoms/Button";
// import Card from "../atoms/Card"; // Import the Card atom
// import egg from "../../assets/egg.jpg";
// import dc from "../../assets/dc.jpg";
// import din from "../../assets/din.jpg";
// import omlate from "../../assets/omlate.jpg";
// import pasta from "../../assets/pasta.jpg";
// import dd from "../../assets/dd.jpg";
// import ff from "../../assets/ff.jpg";
// import fish from "../../assets/fish.jpg";

// const MainContent = () => {
//   const handleSearch = () => {
//         console.log("Search clicked!");
//       };
    
//       const handleButtonClick = (label) => {
//         console.log(`${label} button clicked!`);
//       };
 

//   return (
    // <main className="py-12 bg-gray-50">
    //   <div className="container px-6 mx-auto">
    //     {eventData.map((event, eventIndex) => (
    //       <div key={eventIndex}>
    //         {/* Event Title */}
    //         <h2 className="mb-8 text-3xl font-bold text-center">
    //           {event.eventTitle}
    //         </h2>

    //         {/* Cards Section */}
    //         <div className="flex flex-wrap justify-center gap-8">
    //           {event.cards.map((card, cardIndex) => (
    //             <div
    //               key={cardIndex}
    //               className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md"
    //             >
    //               {/* Image Section with Badge */}
    //               <div className="relative">
    //                 <img
    //                   src={card.imageSrc}
    //                   alt={card.title}
    //                   className="object-cover w-full h-48"
    //                 />
    //                 <div className="absolute px-3 py-1 text-sm font-semibold text-red-600 bg-white rounded-full shadow top-2 left-2">
    //                   Ramazan
    //                 </div>
    //               </div>

    //               {/* Card Content */}
    //               <div className="p-4">
    //                 <p className="text-sm text-gray-500">{card.releaseDate}</p>
    //                 <div className="flex items-center justify-between">
    //                   <div className="flex items-center">
    //                     <span className="text-lg text-yellow-500">★</span>
    //                     <span className="ml-1 text-sm text-gray-700">
    //                       {card.rating.toFixed(1)}
    //                     </span>
    //                   </div>
    //                 </div>
    //                 <h3 className="mt-2 text-xl font-semibold">{card.title}</h3>
    //                 <p className="mt-1 text-sm text-red-600">
    //                   Toplam {card.prepTime} • {card.servings} kişilik
    //                 </p>
    //                 <div className="flex items-center mt-4">
    //                   <img
    //                     src={card.author.imageSrc}
    //                     alt={card.author.name}
    //                     className="object-cover w-8 h-8 rounded-full"
    //                   />
    //                   <p className="ml-2 text-sm text-gray-800">
    //                     {card.author.name}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </main>
//   );
// };

// export default MainContent;
