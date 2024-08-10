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
    <Navbar fluid className="bg-light mx-5 p-3 lg:px-20">
      <NavbarBrand as={Link} href="#">
        <img
          src="images/logo.png"
          className="mr-3 h-6 sm:h-10"
          alt="MEGEB Logo"
        />
        <span className="font-kulim text-dark dark:text-light self-center whitespace-nowrap text-2xl font-bold">
          MEGEB
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="bg-light">
        <NavbarLink
          href="#"
          className="font-kulim text-dark bg-light hover:text-lavender md:hover:text-lavender text-center font-normal hover:bg-inherit "
        >
          Home
        </NavbarLink>
        <NavbarLink
          href="#"
          className="font-kulim text-dark bg-light hover:text-lavender md:hover:text-lavender text-center hover:bg-inherit"
        >
          Favourites
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
