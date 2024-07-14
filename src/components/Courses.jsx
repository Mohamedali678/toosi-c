import Course from "./Course"

function Courses(){

    return <div className="mb-32">
        <h1 className=" sm:border-b-[15px] border-b-4 text-4xl font-bold  sm:w-[380px] w-[100px] p-2 border-primaryColor sm:text-7xl ml-[20px] sm:ml-[180px] mt-10">Courses</h1>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-20">
        <Course icon={ <i class="fa-solid fa-bars"></i> }  title="Collaboration" description="This is some text" />
        <Course icon={<i class="fa-solid fa-x"></i>} title="Ali" description="Abdi" />
        <Course />

    </div>
    </div>
}

export default Courses