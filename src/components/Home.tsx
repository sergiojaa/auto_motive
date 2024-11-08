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
          <h1 className="w-[100px]  font-crimsonpro ml-[20px] font- lg:text-[50px] font-bold text-white md:ml-[140px] text-[35px]">
            თქვენთვის სასურველი მანქანები
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
      <div className='lg:flex'>
     <div>
     <div className='md:ml-[30px] xl:ml-[150px] lg:mt-[20px] lg:w-[500px] '>
            <div>
              <h1 className='font-bold font-crimsonpro text-black p-[10px] text-[30px]'>საავტომობილო კომპანია</h1>
            </div>
          <div >
              <p className='p-[10px]  text-[20px] font-crimsonpro text-gray-500'>საავტომობილო კომპანია (AAC) არის გამორჩეული ლიდერი საავტომობილო ინდუსტრიაში საქართველოში, სპეციალიზირებულია მაღალი ხარისხის მანქანების იმპორტსა და დისტრიბუციაში. ჩვენ გთავაზობთ მანქანების ფართო არჩევანს, ძვირადღირებული მოდელებიდან დაწყებული ყოველდღიური მძღოლებით დამთავრებული, რომელიც აკმაყოფილებს ქართველი მომხმარებლების მრავალფეროვან საჭიროებებს.</p>
            </div>
          </div>
          <div className='md:ml-[30px] xl:ml-[150px]'>
            <div > 
              <h1 className='font-bold font-crimsonpro text-black p-[10px] text-[20px]'> ჩვენ ვმუშაობთ ორი ძირითადი ბიზნეს ხაზით:</h1>
            </div>
            <div>
              <h1 className='p-[10px] text-[20px] font-crimsonpro text-gray-500'>1. ავტომობილების იმპორტი – საუკეთესო დონის მანქანების მოპოვება და იმპორტი სანდო გლობალური მწარმოებლებისგან.</h1>
            </div>
            <div>
              <h2 className='p-[10px] text-[20px] font-crimsonpro text-gray-500'>2.ავტომობილების გაყიდვები და დისტრიბუცია – სხვადასხვა მოდელების შეთავაზება მომხმარებელს მთელი საქართველოს მასშტაბით, გაყიდვების შემდგომ მხარდაჭერასთან და მომსახურებასთან ერთად. </h2>
            </div>
            <div>
              <p className='font-bold font-crimsonpro text-gray-700 p-[10px] text-[20px] xl:mb-[30px]'>ჩვენი მისიაა საქართველოს მზარდი საავტომობილო ბაზრისთვის მივაწოდოთ განსაკუთრებული ღირებულება, მივაწოდოთ საუკეთესო ავტომობილები მომსახურების უმაღლესი სტანდარტებით.</p>
            </div>
          </div>
     </div>
          <div>
          <div>
              <img className=' lg:mt-[120px] md:ml-[30px] lg:h-[50%]  p-[10px] md:w-[80%] ' src={image5} alt="" />
          </div>
          </div>
      </div>
        
       
    </div>
  );
}
