import { useState } from "react"

function Header(){

    const [isOpen, setIsOpen ] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }

    return <div className={`sm:flex bg-thirdColor sm:mx-20 ${isOpen == true ? "absolute w-full": ""} ${isOpen == true ? "rounded-none" : "rounded-full"}  py-2 justify-between items-center px-10 sm:px-20`} >
        
        <img className="sm:w-[120px] w-[100px]" src="https://toosicommunity.org/wp-content/uploads/2024/07/tc_icon-removebg-preview.png" />
        <i style={{display: isOpen == true ? "none": ""}} onClick={handleOpen} class="fa-solid fa-bars absolute sm:hidden text-3xl right-9 text-primaryColor top-14 "></i>
        <i onClick={handleClose} style={{display: isOpen == true ? "flex": ""}} class="fa-solid fa-x absolute hidden text-3xl right-8 text-primaryColor top-5"></i>
        <ul style={{display: isOpen == true? "flex" : ""}} className="sm:flex mt-5 sm:mt-0 flex-col sm:flex-row  hidden text-primaryColor  text-2xl gap-3 sm:gap-10">
            <li>Home</li>
            <li>About us</li>
            <li>Courses</li>
            <li>Crowdfunding</li>
        </ul>

        <div style={{display: isOpen == true? "flex" : ""}}  className="sm:flex gap-3 mt-14 sm:mt-0 hidden">
            <button className="bg-primaryColor px-4 py-2 text-thirdColor text-1xl rounded" > Login</button>
            <button className="bg-primaryColor px-4 py-2 text-thirdColor text-1xl rounded" > Register</button>
        </div>
    </div>
}

export default Header