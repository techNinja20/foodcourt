import { Link } from "react-router"
import { allPaths } from "../routes/paths"
import { FaApple } from "react-icons/fa6"
import { FaGooglePlay } from "react-icons/fa"

const Navbar = () => {
  return (
<nav className="relative w-full py-4 overflow-hidden">

  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#E5EDF8] to-[#F8E2E7] blur-sm opacity-60" />


  <div className="max-w-[65%] mx-auto flex items-center justify-between">
    <h1 className="text-primary font-black text-[18px]">
      <Link to={allPaths.landing}>FOODCOURT</Link>
    </h1>
    
    <ul className="flex items-center gap-4">
      <li><Link to={allPaths.about}>About Fc</Link></li>
      <li><Link to={allPaths.restaurants}>Restaurants</Link></li>
      <li><a href="">Products</a></li>
      <li><Link to={allPaths.careers}>Careers</Link></li>
      <li><Link to={allPaths.blog}>Blog</Link></li>
      <li><Link to={allPaths.feedback}>Feedback</Link></li>
      <li><Link to={allPaths.faqs}>FAQs</Link></li>
    </ul>

    <div className="flex items-center gap-4">
      <a href="" className="rounded-full bg-white p-2 apple">
        <FaApple />
      </a>
      <a href="" className="rounded-full bg-white p-2 android">
        <FaGooglePlay />
      </a>
    </div>
  </div>
</nav>

  )
}

export default Navbar
