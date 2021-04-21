import * as React from "react"
import Logo from "./assets/logo"
import Instagram from "./assets/instagram"
import Youtube from "./assets/youtube"
import Dribble from "./assets/dribble"
import Twitter from "./assets/twitter"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className=" font-manrope min-h-screen">{children}</main>
      <footer className="flex flex-col md:flex-row justify-between items-center w-11/12 lg:w-10/12 mx-auto mb-6 ">
        <p className="text-sm hidden lg:block">
          © 2021 Owls Social. All rights reserved
        </p>
        <Logo className="order-2 md:order-1 mt-4 md:mt-0" />
        <ul className="flex order-1 md:order-2">
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-10 h-10 mr-4" />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-10 h-10 mr-4" />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Dribble className="w-10 h-10 mr-4" />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-10 h-10 " />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Layout
