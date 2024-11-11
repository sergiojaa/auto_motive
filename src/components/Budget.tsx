import { Link } from "react-router-dom";
import xutik from '../images/5k.webp'
export default function Budget() {
  return (
    
    <div className="mt-[130px]  bg-gray-200 ">
        <div>
             <h1 className='pl-[20px] lg:pl-[240px] text-gray-500   mb-[20px] pt-[40px] md:pl-[90px] text-[25px] font-opensans font-bold'>ბიუჯეტი</h1>
        </div>
        <div>
            <h2 className="pl-[20px] text-gray-700 lg:pl-[240px]   mb-[20px] pt-[40px] md:pl-[90px] text-[20px] font-opensans ">შეარჩიე კატეგორიის მიხედვით</h2>
        </div>

            <div>
                
            </div>
         <div className="flex items-center pl-[20px] lg:pl-[240px] ">
        <div className=" bg-white md:w-[40%] flex flex-col items-center justify-center  md:ml-[70px] rounded-3xl w-[150px]  ">
            <Link to={'/under3k'}>
            <img className="w-[60px] mr-[30px] pb-[10px] pt-[25px] ml-[30px] " src="https://cardeal.ge/imgproxy/insecure/rs:fill:120:120:0/aHR0cHM6Ly9jYXJkZWFsLmdlL2ltZy9jYXRlZ29yaWVzL3VuZGVyM2sucG5n.webp" alt="" />
            <h2 className=" pb-[10px] font-opensans pl-[20px]">$3,000 მდე</h2>
            </Link>
           
            
        </div>
        <div className=" bg-white md:w-[40%]  flex flex-col items-center justify-center  rounded-3xl w-[150px] ml-[20px] ">
            <Link to={'/under5k'}>
            <img className="w-[60px] mr-[30px] pb-[10px] pt-[25px] ml-[30px] " src="https://cardeal.ge/imgproxy/insecure/rs:fill:220:220:0/aHR0cHM6Ly9jYXJkZWFsLmdlL2ltZy9jYXRlZ29yaWVzL3VuZGVyNWsucG5n.webp" alt="" />
            <h2 className=" pb-[10px] font-opensans pl-[20px]">$5,000 მდე</h2>
            </Link>
           
            
        </div>
        </div>
        <div className=" mt-[20px] flex items-center pl-[20px] lg:pl-[240px] ">
        <div className=" bg-white md:w-[40%]  md:ml-[70px] flex flex-col items-center justify-center  rounded-3xl  w-[150px]   ">
            <Link to={'/under10k'}>
            <img className="w-[60px] mr-[30px] pb-[10px] pt-[25px] ml-[30px] " src="https://cardeal.ge/imgproxy/insecure/rs:fill:220:220:0/aHR0cHM6Ly9jYXJkZWFsLmdlL2ltZy9jYXRlZ29yaWVzL3VuZGVyMTBrLnBuZw.webp" alt="" />
            <h2 className=" pb-[10px] font-opensans pl-[20px]">$10.000 მდე</h2>
            </Link>
           
            
        </div>
        <div className=" bg-white md:w-[40%] h-[130px] flex flex-col items-center justify-center rounded-3xl w-[150px] ml-[20px] ">
            <Link to={'/under5k'}>
            <img className="w-[60px]  mr-[30px] pb-[10px] pt-[13px] ml-[30px] " src="https://cardeal.ge/imgproxy/insecure/rs:fill:220:220:0/aHR0cHM6Ly9jYXJkZWFsLmdlL2ltZy9jYXRlZ29yaWVzL3VuZGVyNWsucG5n.webp" alt="" />
            <h2 className=" pb-[10px] pl-[20px] font-opensans">ქალაქის მანქანები</h2>
            </Link>
           
            
        </div>
        </div> 
        
       
        

        <div >
        <h1 className='pl-[20px] text-gray-700 lg:pl-[240px]   mb-[20px] pt-[40px] md:pl-[90px] text-[20px] font-opensans '>ბენეფიტები</h1>

        </div>
        <div className=" xl:w-[70%]  xl:flex items-center justify-center  xl:h-[200px]  xl:ml-[300px] pl-[20px] md:ml-[90px] text-gray-700 rounded-3xl font-opensans m-[20px] bg-white mb-[100px] "> 
        <div className="flex  mb-[10px] xl:mr-[70px] xl:flex xl:flex-col items-center justify-center  ">
            <div className="bg-gray-100 rounded-[100px]  p-[10px]">
            <img className="w-[30px]  " src="https://www.cardeal.ge/img/verified.2257445f.svg" alt="" />
            </div>
            <h2 className="pl-[20px] xl:w-[100px] font-bold" >5 წლიანი გამოცდილება</h2>
        </div>
        <div className="flex items-center xl:mr-[50px]  justify-center xl:flex xl:flex-col mb-[10px]">
            <div className="bg-gray-100 rounded-[100px]  p-[10px]"> 
            <img className="w-[30px]" src="https://www.cardeal.ge/img/people.de7bfd64.svg" alt="" />

            </div>
            <h2 className="pl-[20px]  font-bold">4000+ კმაყოფილი <br /> მომხარებელი</h2>
        </div>
        <div className="flex items-center xl:mr-[50px]  justify-center xl:flex xl:flex-col mb-[10px]">
            <div className="bg-gray-100 rounded-[100px]  p-[10px]">
            <img className="w-[30px]" src="https://www.cardeal.ge/img/user-check.a69c70ad.svg" alt="" />

            </div>
            <h2 className="pl-[20px] font-bold">პროფესიონალი <br /> ქარდილერები</h2>
        </div>
       
        <div className="flex items-center justify-center xl:flex xl:flex-col pb-[20px]">
            <div className="bg-gray-100 rounded-[100px]  p-[10px]">
            <img className="w-[30px]" src="https://www.cardeal.ge/img/shield-check.58a729dd.svg" alt="" />

            </div>
            <h2 className="pl-[20px] font-bold ">დაზღვეული <br /> ტრანსპორტირება</h2>
        </div>
        </div>
      ssss
        
    </div>
  )
}
