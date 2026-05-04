import Navbar from "../../components/Navbar"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-10 ">
        <h1 className="text-[60px] font-semibold w-[30rem] text-center ">
          Good Food, Made Easy
        </h1>
        <p className="">Chef Prepared meals, at the click of a button</p>
      </div>
    </div>
  )
}

export default LandingPage
