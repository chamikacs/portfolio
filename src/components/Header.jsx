import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="mb-10 py-8">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 class="text-2xl font-bold bg-gradient-to-br from-pink-400 via-blue-800 bg-clip-text text-transparent">
              CHAMIKA
            </h1>
            <h1 className="text-2xl font-bold">SAKALASURIYA</h1>
          </div>

          <Link to="contact">
                <button className="btn btn-sm">Work with me</button>
              </Link>
        </div>

        {/* <div className="lg:flex hidden flex-row justify-between items-center">
          <div>
            <h1 class="text-2xl font-bold bg-gradient-to-br from-pink-400 via-blue-800 bg-clip-text text-transparent">
              CHAMIKA
            </h1>
            <h1 className="text-2xl font-bold">SAKALASURIYA</h1>
          </div>
          <Link to="home">
          <h1>Home</h1>  
          </Link>
          
          <h1>About</h1>
          <h1>Projects</h1>
          <h1>Contact </h1>
          <button className="btn btn-sm">Work with me</button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
