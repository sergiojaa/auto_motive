import logo from '../images/automotive-logo.jpg';

export default function Calculator() {
  return (
    <div className='mt-[130px]'>
      <div> 
        <h2>ყურადღება</h2>
        <h2>კალკულატორი აჩვენებს საცალო ფასს,</h2>
        <h2>სადილერო პირობების გასაგებად მიმართეთ კომპანიას</h2>

      </div>
      <div>
        <h1>Auction</h1>
        <select className="p-2 border rounded-md" onChange={(e) => console.log(e.target.value)}>
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
        <select className="p-2 border rounded-md" onChange={(e) => console.log(e.target.value)}>
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
        <select className="p-2 border rounded-md" onChange={(e) => console.log(e.target.value)}>
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
    </div>
  )
}
