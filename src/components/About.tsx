import personImage from '../images/person.webp'
import oficeImage from '../images/ofice.webp'
export default function About() {
  return (
    <div className="mt-[130px]">
      <hr  />
      <div>
        <h1 className='pl-[20px] lg:pl-[240px] text-gray-500   mb-[20px] pt-[40px] md:pl-[90px] text-[25px] font-opensans font-bold'>ჩვენს შესახებ</h1>
          <div>
          <h1 className='pl-[20px] text-gray-600  xl:mr-[170px] font-opensans leading-[1.6] text-[17px] md:mt-[20px] md:pl-[140px] lg:pr-[150px] lg:pl-[235px] md:pr-[140px] '>
        კეთილი იყოს თქვენი მობრძანება Automotive-ში, ავტომობილების იმპორტის წამყვან კომპანიაში, რომელიც მდებარეობს თბილისში, საქართველო. ჩვენ სპეციალიზირებული ვართ მაღალი ხარისხის მანქანების მიწოდებაში მთელი მსოფლიოდან, გთავაზობთ მოდელების ფართო არჩევანს ყველა საჭიროებასა და ბიუჯეტში. მიუხედავად იმისა, ეძებთ ძვირადღირებულ მანქანებს, პრაქტიკულ საოჯახო მანქანებს ან საიმედო ეკონომიურ ვარიანტებს, ჩვენ გვაქვს რაღაც ყველასთვის. <br /> ჩვენი გუნდი ეძღვნება განსაკუთრებული სერვისების მიწოდებას და უზრუნველყოს, რომ ყველა მომხმარებელი იპოვის სრულყოფილ მანქანას მათი ცხოვრების სტილისთვის. ჩვენ ვამაყობთ იმპორტის შეუფერხებელი პროცესის შეთავაზებით, საუკეთესო მანქანების მოპოვებიდან დაწყებული ყველა საჭირო დოკუმენტაციის დამუშავებით, ასე რომ თქვენ შეგიძლიათ თავდაჯერებულად გაძლოთ.

        </h1>
          </div>
         
       
      </div>
      <h1 className=' pl-[20px] lg:pl-[240px] text-gray-500  mb-[20px] pt-[50px] md:pl-[90px] text-[25px] font-opensans font-bold'>გუნდი</h1>
      <div className="lg:flex text-gray-500 lg:pr-[100px] lg:pl-[100px] " >
        
        <div className='md:ml-[120px]  '>
          <img className='p-[20px]  lg:w-[500px]    md:pr-[120px]  ' src={personImage} alt="" />
          <h2 className='pl-[20px]  font-opensans font-bold text-[20px] '>მალხაზ თვაური</h2>
          <h3 className='pl-[20px] font-opensans text-[17px] pt-[10px]'>ბიზნესის განვითარების დამფუძნებელი / დირექტორი</h3>
          <h3 className='pl-[20px] font-opensans text-[20px] pt-[10px]'>ტელ: +995 555 172 287</h3>
        </div>
        <div className='md:ml-[120px] '>
          <img className='p-[20px] lg:w-[500px] md:mt-[0] xl:mt-[0] mt-[30px]  md:pr-[120px]' src={personImage} alt="" />
            <h2 className='pl-[20px]  font-opensans font-bold text-[20px]'>გიგი დადიანი </h2>
            <h3 className='pl-[20px] font-opensans text-[15px] pt-[10px]' >ბიზნესის განვითარების დამფუძნებელი / დირექტორი</h3>
            <h3 className='pl-[20px] font-opensans text-[20px] pt-[10px]'>ტელ: +995 555 172 287</h3>

        </div>
       
      </div>
      <div className='lg:flex lg:pl-[100px] text-gray-500 lg:pr-[100px]'>
      <div className='md:ml-[120px] mt-[30px]'>
          <img className='p-[20px]    lg:w-[500px]   md:pr-[120px]' src={personImage} alt="" />
            <h2 className='pl-[20px] font-opensans font-bold text-[20px]'>რეზი დადიანი </h2>
            <h3 className='pl-[20px] font-opensans text-[15px] pt-[10px]' >ბიზნესის განვითარების დამფუძნებელი / დირექტორი</h3>
            <h3 className='pl-[20px] font-opensans text-[20px] pt-[10px]'>ტელ: +995 555 172 287</h3>

        </div>
        <div className='md:ml-[120px]  mt-[30px]'>
          <img className='p-[20px] lg:w-[500px]    md:pr-[120px] ' src={personImage} alt="" />
            <h2 className='pl-[20px] font-opensans font-bold text-[20px]'>თომა კიკნაველიძე </h2>
            <h3 className='pl-[20px] font-opensans text-[15px] pt-[10px]' >ბიზნესის განვითარების დამფუძნებელი / დირექტორი</h3>
            <h3 className='pl-[20px] font-opensans text-[20px] pt-[10px]'>ტელ: +995 555 172 287</h3>

        </div>
      </div>
      

    </div>
  )
}
