import Information from "./Information"

function Footer(){

    return <div className="bg-[#011C52] sm:flex-row flex-col px-10 space-y-8  sm:px-[180px] py-16 flex justify-between  text-thirdColor">
        
        
        <div>
            <h1 className="text-2xl font-bold">Join the community</h1>
            <button className="bg-primaryColor px-16 py-4 text-1xl mt-10 font-bold rounded" >Join the community</button>
        </div>

        <Information icon={ <i class="fa-brands fa-facebook text-2xl"></i>} facebook="Facebook" ins="Instagram" twitter="Twitter" youtube="YouTube" />
        <Information icon={ <i class="fa-brands fa-facebook text-2xl"></i>} facebook="Facebook" ins="Instagram" twitter="Twitter" youtube="YouTube" />


        {/* <div>
           
            


           

           

           
        </div> */}
{/* 
        <div>


        <div className="flex items-center gap-3">
        <i class="fa-solid fa-phone"></i>
            <h1>252 61 5248805
            </h1>
            </div>
            <div className="flex items-center gap-3">
            <i class="fa-solid fa-envelope"></i>
            <h1>hello@toosicommunity.org</h1>
            </div>
            <div className="flex items-center gap-3">
            <i class="fa-solid fa-location-dot"></i>
            <h1>KM4, Taleh Road, Muqdisho</h1>
            </div>
        </div> */}

    </div>
}

export default Footer