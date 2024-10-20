import React from 'react'

import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../assets/img/Logo.png"
const Navbar = () => {
  return (
    <div className="md:px-20 navbar bg-transparent text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-black/80"
          >
            <li>
              <Link
                activeClass="active"
                to="accueil"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="formulaire"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Forumaire de vente
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contactez nous
              </Link>
            </li>
          </ul>
        </div>
        <a className=" normal-case text-xl">
          <img src={logo} alt="" className=" w-32 hidden md:block " />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex font-ubuntu  navbarClass font-bold">
        <nav>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                activeClass="active"
                to="accueil"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="formulaire"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Forumaire de vente
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contactez nous
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-end">
        <Link
          to="formulaire"
          smooth={true}
          duration={1000}
          className="btn bg-transparent border-2 btn-primary text-white"
        >
          Passer au formulaire
        </Link>
      </div>
    </div>
  );
}

export default Navbar