import usaImage from '../images/usa.webp'
export default function Calculator() {
  return (
    <div className='mt-[130px] flex flex-col items-center bg-cover bg-center justify-center '
    style={{ backgroundImage: `url(${usaImage})` }}
    >
      <div className="bg-gray-500 m-[20px] w-[340px] flex flex-col items-center justify-center"
      
      >
      <div className="flex flex-col justify-center items-center" > 
        <h2>ყურადღება</h2>
        <h2>კალკულატორი აჩვენებს საცალო ფასს,</h2>
        <h2>სადილერო პირობების გასაგებად მიმართეთ კომპანიას</h2>

      </div>
      <div>
        <h1>Auction</h1>
        <select className="p-2 border rounded-md w-[280px] text-[20px] " onChange={(e) => console.log(e.target.value)}>
        <option value="">choose</option>
        <option value="Option 1">Copart</option>
        <option value="Option 2">IAAI</option>
        <option value="Option 3">Manheim</option>
        <option value="Option 4">Adesa</option>
        <option value="Option 5">AuctionPipeline</option>
        <option value="Option 6">Canada</option>
        <option value="Option 7">Sublot Copart</option>
        <option value="Option 8">Sublot IAAI</option>

        
        </select>
      </div>
      <div>
        <h1>State / City</h1>
        <select className="p-2 border rounded-md w-[280px] text-[20px]" onChange={(e) => console.log(e.target.value)}>
        <option value="">choose</option>
        <option value="Option 1">filadelfia</option>
        <option value="Option 2">losangeles</option>
        <option value="Option 3">Manheim</option>
        <option value="Option 4">Adesa</option>
        <option value="Option 5">AuctionPipeline</option>
        <option value="Option 6">Canada</option>
        <option value="Option 7">Sublot Copart</option>
        <option value="Option 8">Sublot IAAI</option>
        
        
        </select>
      </div>
      <div>
        <h1>USA port</h1>
        <select className="p-2 border rounded-md w-[280px] text-[20px]" onChange={(e) => console.log(e.target.value)}>
        <option value="">choose</option>
        <option value="Option 1">filadelfia</option>
        <option value="Option 2">losangeles</option>
        <option value="Option 3">Manheim</option>
        <option value="Option 4">Adesa</option>
        <option value="Option 5">AuctionPipeline</option>
        <option value="Option 6">Canada</option>
        <option value="Option 7">Sublot Copart</option>
        <option value="Option 8">Sublot IAAI</option>
        
        
        </select>
      </div>
      <div>
        <h1>Destination</h1>
        <select className="p-2 border rounded-md w-[280px] text-[20px] mb-[20px]" onChange={(e) => console.log(e.target.value)}>
        <option value="">choose</option>
        <option value="Option 1">filadelfia</option>
        <option value="Option 2">losangeles</option>
        <option value="Option 3">Manheim</option>
        <option value="Option 4">Adesa</option>
        <option value="Option 5">AuctionPipeline</option>
        <option value="Option 6">Canada</option>
        <option value="Option 7">Sublot Copart</option>
        <option value="Option 8">Sublot IAAI</option>
        
        
        </select>
      </div>
      </div>
     

    </div>
  )
}
