function Course ({ icon, title, description}){

    return <div>
      <div className="w-[300px] text-center pt-10 h-[300px] bg-orange-500">
        <span className="text-5xl"> {icon} </span> 
        <h1 className="text-3xl font-bold"> {title} </h1>
        <p> {description} </p>
      </div>

    </div>
}

export default Course