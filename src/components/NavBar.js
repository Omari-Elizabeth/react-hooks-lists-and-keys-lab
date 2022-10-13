import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {/* display an <a> tag for each link here */}
    <a key={links.home} href="#home">Home</a>
    <a key={links.about} href="#about">About</a>
    <a key={links.projects} href="#projects">Projects</a>
  </nav>;
}

export default NavBar;
