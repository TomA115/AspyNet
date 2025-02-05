import { Navbar } from "flowbite-react";

export default function AppNavbar() {
  return (
    <Navbar className=" fixed top-0 right-0 left-0 dark:bg-white bg-white dark:shadow-lg dark:bg-opacity-75 dark:rounded-lg z-50">
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-4xl font-semibold  text-blue-600">TomAspinall.uk</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      {/*
      <Navbar.Collapse>
        <Navbar.Link href="#" className="dark:text-blue-600 hover:text-blue-600 dark:hover:text-blue-600">Home</Navbar.Link>
        <Navbar.Link href="#" className="dark:text-blue-600 hover:text-black dark:hover:text-black">About</Navbar.Link>
        <Navbar.Link href="#" className="dark:text-blue-600 hover:text-black dark:hover:text-blue-600">Contact</Navbar.Link>
      </Navbar.Collapse>
      */}
    </Navbar>
  );
}