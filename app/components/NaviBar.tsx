import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
export default function NaviBar() {
  return (
    <Navbar fluid className="bg-light p-3 mx-5 lg:px-20" >
      <NavbarBrand as={Link} href="#">
        <img
          src="images/logo.png"
          className="mr-3 h-6 sm:h-10"
          alt="MEGEB Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-kulim font-bold text-dark dark:text-light">
          MEGEB
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="bg-light">
        <NavbarLink 
            href="#"
            className="font-kulim font-normal text-center text-dark bg-light hover:text-lavender md:hover:text-lavender hover:bg-inherit " 
            rounded>
            Home
        </NavbarLink>
        <NavbarLink 
          href="#"
          className="font-kulim text-center text-dark bg-light hover:text-lavender md:hover:text-lavender hover:bg-inherit" >
          Favourites
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
