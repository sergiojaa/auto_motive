import camryPhoto from '../images/camry.webp'
export default function Services() {
  return (
    <div className="mt-[130px] bg-gray-200  ">
        <hr />
                <h1 className='pl-[20px] lg:pl-[240px] text-gray-500   mb-[20px] pt-[40px] md:pl-[90px] text-[25px] font-opensans font-bold'>სერვისები</h1>

      <div className=' mb-[100px] lg:mr-[200px] lg:ml-[200px] m-[20px] rounded-2xl p-[20px] lg:flex  bg-gray-100' >
        <div>
            <img className='lg:ml-[30px] lg:w-[600px] pt-[5px] mb-[20px] rounded-3xl' src={camryPhoto} alt="" />
        </div>
        <div >
        <p className=' lg:text-[23px] lg:mt-[20px] lg:ml-[60px] p-[10px] text-black font-opensans text-[20px] '>თუ გსურთ შეიძინოთ მანქანა ლოკალურ ბაზართან შედარებით 40%-ით უფრო იაფად, automotive.ge გთავაზობთ საუკეთესო გზას ამერიკული ავტო აუქციონებიდან.</p>
        <p className='   lg:ml-[60px] p-[10px] text-gray-500 font-opensans text-[20px] '>automotive-ი საერთაშორისო ავტო აუქციონების ვაჭრობის პლატფორმა, სადაც ყოველთვიურად 500 000-ზე მეტი ავტომობილია განთავსებული; კომპანია ბაზარზე 2019 წლიდან ოპერირებს</p>
        </div>

        
      </div>
      <div className=' lg:items-center lg:justify-center lg:flex lg:flex-wrap'>
    {/* First row */}
    <div className='lg:w-[600px] mb-[50px] px-[20px]'>
        <div className='bg-gray-100 rounded-2xl flex flex-col items-center text-center'>
            <img className='mt-[20px] mb-[20px]' src="https://www.cardeal.ge/img/lamp-fill.059925b9.svg" alt="lamp icon" />
            <h1 className='pb-[10px] font-opensans text-black text-[20px]'>გამარტივებული შეძენის პროცესი</h1>
            <h1 className='pb-[20px] font-opensans text-[15px] text-gray-500'>ჩვენ დაგეხმარებით ყველა ეტაპზე, იქნება ეს ავტომობილის შერჩევა, ყიდვა თუ ჩამოყვანა.</h1>
        </div>
    </div>

    <div className=' lg:w-[600px] mb-[50px] px-[20px]'>
        <div className='bg-gray-100 rounded-2xl flex flex-col items-center text-center'>
            <img className='mt-[20px] mb-[20px]' src="https://www.cardeal.ge/img/shield-fill.43121975.svg" alt="shield icon" />
            <h1 className='pb-[10px] font-opensans text-black text-[20px]'>Სრულად დაზღვეული პროცესი</h1>
            <h1 className='pb-[20px] font-opensans text-[15px] text-gray-500'>Ჩვენთან ყიდვის პროცესი მაქსიმალურად გამჭირვალეა, წინაწარ გითანხმებთ ყველა შესაძლო ხარჯს</h1>
        </div>
    </div>

    {/* Second row */}
    <div className='lg:w-[600px] mb-[50px] px-[20px]'>
        <div className='bg-gray-100 rounded-2xl flex flex-col items-center text-center'>
            <img className='mt-[20px] mb-[20px]' src="https://www.cardeal.ge/img/globe-fill.d803fad7.svg" alt="lamp icon" />
            <h1 className='pb-[10px] font-opensans text-black text-[20px]'>გამარტივებული შეძენის პროცესი</h1>
            <h1 className='pb-[20px] font-opensans text-[15px] text-gray-500'>Ჩვენ უსაფრთხოდ ჩამოგიყვანთ ავტომობილის ამერიკიდან საქართველოში, თქვენი მანქანა სრულად დაიზღევა</h1>
        </div>
    </div>

    <div className='lg:w-[600px] mb-[50px] px-[20px]'>
        <div className='bg-gray-100 rounded-2xl flex flex-col items-center text-center'>
            <img className='mt-[20px] mb-[20px]' src="https://www.cardeal.ge/img/person-fill.aebe7a2e.svg" alt="lamp icon" />
            <h1 className='pb-[10px] font-opensans text-black text-[20px]'>გამარტივებული შეძენის პროცესი</h1>
            <h1 className='pb-[20px] font-opensans text-[15px] text-gray-500'>ჩვენი პროფესიონალი ქარდილერები თქვენთვის სასურლველ ავტომობილს შეარჩევენ და დეტალურად შეამოწმებენ</h1>
        </div>
    </div>
</div>

    </div>
  )
}
