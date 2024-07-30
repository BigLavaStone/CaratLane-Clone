import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { HiPencil } from "react-icons/hi2";
import { FaUserLarge } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import {Badge} from "@nextui-org/badge";
import './Navbar.css'
import { color } from 'framer-motion';

function Navbar() {
  return (
    <>
      <div className='space-24'></div>
      <nav className="navbar">
        <div className="navLogo">
          {/* <img
            src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/Logo/logo.gif"
            alt=""
            style={{ height: "36px", width: "36px" }}
          /> */}
          <svg width="30" height="34" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="IconLogoImage-Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="IconLogoImage-CL-Logo" transform="translate(1)" fill="#8E1A86" fill-rule="nonzero"><path d="M10.217 23.029l2.04.971 2.029-.954-2.04-2.052-2.029 2.035zm4.869-3.812L13.6 20.84l2.577 1.091 1.097-2.588-2.194-.126h.006zm-5.652 0l-2.194.12 1.08 2.589 2.583-1.075-1.474-1.628.005-.006zm8.989 2.126l2.148-.772.766-2.137H18.43l-.006 2.909zM3.206 18.429l.748 2.142 2.132.76v-2.897h-2.88v-.005zm9.063-.863l-1.578.72 1.572 1.577 1.571-1.566-1.571-.748.006.017zM16 16l-.571 1.657h2.222V15.43L16 16zm-9.143 1.651h2.229l-.572-1.645-1.64-.572-.017 2.217zm-3.154-4.04L2.61 16.19 5.2 17.28l.131-2.194L3.71 13.6l-.006.011zm.954-1.342l1.566 1.571.754-1.577-.748-1.572-1.572 1.578zm-4.126 0l.972 2.017 2.051-2.046-2.04-2.023-.983 2.052zM2.63 8.326l1.08 2.577 1.628-1.48-.126-2.194L2.63 8.326zm12.8-1.435L16 8.537l1.64.572V6.897h-2.211v-.006zM6.89 9.103l1.64-.572.572-1.64H6.874l.017 2.212zm3.818-2.857l1.571.748 1.577-.743-1.577-1.588-1.571 1.583zm7.737-.115h2.891L20.571 4l-2.12-.777-.005 2.908zM4 3.96l-.783 2.137h2.897V3.206L4 3.96zm9.663-.251l1.474 1.628 2.194-.12-1.108-2.583-2.56 1.075zM7.263 5.2l2.194.131 1.486-1.622L8.37 2.623 7.263 5.2zM12.286.531l-2.046.972 2.04 2.051 2.046-2.034-2.04-.989z" id="IconLogoImage-Shape"></path></g></g></svg>
        </div>
        <div className="navLinks">
          <Link to={'/'}>Rings</Link>
          <Link to={'/'}>Earrings</Link>
          <Link to={'/'}>Bracelets & Bangles</Link>
          <Link to={'/'}>Solitaries</Link>
          <Link to={'/'}>Mangalsutras</Link>
          <Link to={'/'}>Necklaces</Link>
          <Link to={'/'}>More Jewellery</Link>
        </div>
        <SearchBar />
        <div className="navContent">
          <div className="storeDet">
            <div>
              <div style={{fontSize:'11px'}}>Store: Soubhagya Nagar</div>
              <div  style={{display:'flex', fontSize:'12px'}}>
                Delivering to &nbsp;
                <span style={{ color: "#de57e5" }}>751025&nbsp;</span>
                <HiPencil color="#4f3267"/>
              </div>
            </div>
          </div>
          <div className='flag-icon'>
            <img
              src="flag.png"
              alt="No Image loading"
              height={"18px"}
              width={"32px"}
            />
          </div>
          <div className='icons profile'>
              <FaUserLarge color="#4f3267" size={"18px"} className='user-icon'/>
              <div className='profile-dropdown'>
                <div>
                  <p style={{fontSize:'24px', fontWeight:'400'}}>Your Account</p> <br />
                  <p style={{fontSize:'14px', fontWeight:'400'}}>Access account & manage your orders.</p> <br />
                  <div className='flix'>
                    <Link to={'/'}>
                      <button className='signup-btn' type='button'>Sign Up</button>
                    </Link>
                    <Link to={'/'}>
                      <button className='login-btn' type='button'>Log In</button>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
          <div className='icons'>
            <FaHeart color="#4f3267" size={"20px"}/>
          </div>
          <div className='icons'>
            <Badge content="0" color="secondary" placement="bottom-right" showOutline={false} size='sm'>
              <PiShoppingCartSimpleFill color="#4f3267" size={"25px"}/>
            </Badge>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar


