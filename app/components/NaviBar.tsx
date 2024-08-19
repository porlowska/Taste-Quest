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
    <Navbar fluid className="mx-5 bg-light p-3 lg:px-20">
      <NavbarBrand as={Link} href="/">
        <img
          src="images/logo.png"
          className="mr-3 h-6 sm:h-10"
          alt="MEGEB Logo"
        />
        <span className="self-center whitespace-nowrap font-kulim text-2xl font-bold text-dark dark:text-light">
          MEGEB
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="bg-light">
        <NavbarLink
          href="/"
          className="bg-light text-center font-kulim font-normal text-dark hover:bg-inherit hover:text-lavender md:hover:text-lavender "
        >
          Home
        </NavbarLink>
        {/* <NavbarLink
          href="/favourites"
          className="bg-light text-center font-kulim text-dark hover:bg-inherit hover:text-lavender md:hover:text-lavender"
        >
          Favourites
        </NavbarLink> */}
      </NavbarCollapse>
    </Navbar>
  );
}
