

import React from 'react';
import pancake from "../../assets/pancake.jpg";
import BackgroundImage from "../atoms/BackgroundImage";
import Button from "../atoms/Button";
import { FaInstagram, FaYoutube } from "react-icons/fa";
// import omlate from "../../assets/omlate.jpg";


import girl from "../../assets/girl.jpg";
import kit from "../../assets/kit.jpg";
import GridCards from '../molecules/GridCards';
import Footer from '../molecules/Footer';
import ButtonSection from '../molecules/ButtonSection';

const MainContent = () => {
  const handleSearch = () => {
    console.log("Search clicked!");
  };

  const handleButtonClick = (label) => {
    console.log(`${label} button clicked!`);
  };
const listOfButtons=[{
"name":"buttonOne",


},
{
  "name":"buttonTwo",
  
  
  },
  {
    "name":"buttonThree",
    
    
    }
]
 
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

   
      {/* <ButtonSection/> */}
{
  listOfButtons.map(btn =>(
    <div key={btn.id}> 


<Button  className="w-full py-2 text-sm font-extrabold text-gray-800 bg-white border-2 border-gray-400 rounded-md shadow-none hover:bg-teal-500 hover:text-white" label={btn.name}/>

    </div>

  ),
)
}

      
      <GridCards />
      <GridCards />
      <GridCards />
     
<div className="py-[-16]">
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
        <p className="mt-2 text-sm text-left text-gray-600">23 Nisan 2023</p>
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
        <p className="mt-2 text-sm text-left text-gray-600">23 Nisan 2023</p>
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
                  className="w-48 text-white bg-teal-600 rounded-md"
                />
              </div>
</div>
<div className="mt-40 bg-teal-200 p-14 w-fu">
  <div className="container mx-auto text-center">
    <p className="mb-4 font-mono text-lg font-semibold">
      Yeni Çıkan Tariflerimizden Haberdar Olmak İçin
    </p>
    <div className="flex justify-center gap-4">
      
      <Button
        
         label={
          <>
            <FaInstagram
         className="inline-block mr-2 text-2xl"
        
       />
            Instagram'da Takip
          </>
        }
        onClick={() => window.open('https://instagram.com', '_blank')}
        className="text-black bg-white rounded-md"
      />
      <Button
         label={
          <>
            <FaYoutube className="inline-block mr-2 text-2xl text-red-600" />
            YouTube'da Takip
          </>
        }
        onClick={() => window.open('https://youtube.com', '_blank')}
        className="text-black bg-white rounded-md"
      />
    </div>

    
    
  </div>
</div>
<Footer/>


    </div>
  );
};

export default MainContent;


