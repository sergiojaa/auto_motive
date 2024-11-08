import { useEffect, useState } from 'react';
import image1 from '../images/m4image.webp';
import image2 from '../images/porche911.webp';
import image3 from '../images/prado.webp';
import image4 from '../images/automotive-2.jpg';
import image5 from '../images/documentimage.jpg';
import image6 from '../images/konteinerimage.jpg';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const arrayImages = [image1, image2, image3, image4, image5, image6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [arrayImages.length]);

  return (
    <div>
      {/* Header with dynamic background */}
      <header
        className="relative w-full h-[780px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${arrayImages[currentIndex]})`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        {/* Header Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-center bg-black bg-opacity-50">
          <h1 className="w-[100px] ml-[20px] lg:w-[200px] lg:text-[40px] font-bold text-white md:ml-[140px] text-[35px]">
            შენი საოცნებო მანქანა
          </h1>
        </div>
      </header>

      {/* Optional content below the header */}
      <div className="relative w-full mx-auto overflow-hidden">
        {arrayImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full  h-full object-cover opacity-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
