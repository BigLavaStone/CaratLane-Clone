import { React, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { color } from "framer-motion";
import "../CSS/Navbar.css";
import SearchBar from "./SearchBar";
import { HiPencil } from "react-icons/hi2";
import { FaUserLarge } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

export default function NavBar() {
  return (
    <>
      <div class="topDiv">
        <p>CaratLane - A Tanishq Partnership</p>
      </div>
      <div class="topDiv" style={{ display: "none" }}>
        <p aria-hidden="true">
          Introducing CaratLane PoP! Plan your purchase{" "}
          <a href="#" style={{ color: "#ffc0cb" }}>
            here
          </a>
        </p>
      </div>
      <Navbar
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[3px]",
            "data-[active=true]:after:rounded-[60px]",
            "data-[active=true]:after:bg-primary",

            "data-[focus=true]:after:absolute",
          ],
        }}
        maxWidth="full"
        height={"100px"}
        isBlurred="false"
        isBordered
      >
        <NavbarContent>
          <NavbarBrand className="mr-4">
              <img
                src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/Logo/logo.gif"
                alt=""
                style={{ height: "36px", width: "36px" }}
              />
          </NavbarBrand>
          <NavbarContent>
            <NavbarItem>
              <Link color="foreground" href="#">
                Rings
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Earrings
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Bracelets & Bangles
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Solitaries
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Mangalsutras
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Necklaces
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="" href="#">
                More Jewellery
              </Link>
            </NavbarItem>
            <NavbarItem>
              <SearchBar />
            </NavbarItem>
          </NavbarContent>
          {/* <NavbarContent justify="end">
          </NavbarContent> */}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem style={{fontSize:"10px"}} className="flex-col align-top justify-center">
            <p>
              Store: Soubhagya Nagar
            </p>
            <strong style={{fontSize:"11px"}} className="flex">
              Delivering to{" "}
                <span className="flex" style={{ color: "#de57e5" }}>
                    751025
                    <HiPencil color="#4f3267"/>
                </span>
            </strong>
          </NavbarItem>
          <NavbarItem>
            <img
              src="flag.png"
              alt="No Image loading"
              height={"18px"}
              width={"32px"}
            />
          </NavbarItem>
          <NavbarItem>
            <FaUserLarge color="#4f3267"/>
          </NavbarItem>
          <NavbarItem>
            <FaHeart color="#4f3267" size={"20px"}/>
          </NavbarItem>
          <NavbarItem>
          <PiShoppingCartSimpleFill color="#4f3267" size={"25px"}/>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
