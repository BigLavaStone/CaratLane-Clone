import React from 'react'
//import { IoIosSearch } from 'react-icons/io'
import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className='flex'>
      <input type="search" name="" id="" placeholder='Search' style={{border:"1.5px solid #D759E7", backgroundColor:"#F6F3F9", height:"48px", width:"178px", borderTopLeftRadius:"12px", borderBottomLeftRadius:"12px", color:"#4f3267", fontSize:"12px", padding:"11px"}}/>
      <div style={{textAlign:"center", background: "linear-gradient(to right, #D759E7 , #8253f9)", height:"48px", width:"51px", display:"flex", justifyContent:"center", alignItems:"center", borderTopRightRadius:"12px", borderBottomRightRadius:"12px"}}><IoMdSearch  color='white' size={"24px"}/></div>
    </div>
  )
}

export default SearchBar
