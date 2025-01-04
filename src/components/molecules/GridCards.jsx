// import React from 'react'
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
const GridCards = () => {
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
    <div> <main className="py-12 ">
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
  </main></div>
  )
}

export default GridCards