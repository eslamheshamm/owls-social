import * as React from "react"
import { Link } from "gatsby"
import Logo from "./assets/logo"
const Header = () => (
  <header className=" w-11/12 lg:w-10/12 mx-auto my-6 flex justify-between items-center font-display">
    <h1 className="mb-0">
      <Link to="/">
        <Logo />
      </Link>
    </h1>
    <button className="bg-[#5F06EE] px-8 py-2 text-white rounded-lg text-sm sm:text-base font-bold">
      <a href="https://" target="_blank" rel="noopener noreferrer">
        Join Now
      </a>
    </button>
  </header>
)

export default Header
