function Information({icon, facebook, ins, twitter, youtube}){

    return <div>
        <div className="flex items-center gap-3"> 
            <span> {icon} </span>
            <h1>{facebook}</h1>
            
            </div>

            <div className="flex items-center gap-3">
            <i class="fa-brands fa-x-twitter"></i>
            <h1> {ins} </h1>
            </div>

            <div className="flex items-center gap-3">
            <i class="fa-brands fa-youtube"></i>
            <h1>{twitter}</h1>
            </div>

            <div className="flex items-center gap-3">
            <i class="fa-brands fa-square-instagram"></i>
            <h1>{youtube}</h1>
            </div>

    </div>
}

export default Information