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
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="#">
        <img
          src="images/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="MEGEB Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MEGEB
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Favourites</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
