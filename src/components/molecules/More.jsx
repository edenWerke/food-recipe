import React from 'react';
import Header from './Header';
import Image from '../atoms/Image';
import pancake from "../../assets/pp.png";

const More = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Image 
          src={pancake}
          alt="Delicious Pancake"
          className="w-2/2 ml-16 mt-8 h-96 object-cover" // Set height to 12rem and maintain aspect ratio
        />
      </div>
    </div>
  );
}

export default More;