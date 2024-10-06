import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-[#f4f9f9] h-[60px] w-full px-5 flex items-center justify-between">
      <Link to="/">
          <h1>Raven Castle</h1>
      </Link>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </header>
  )
}

export default Navbar
