import React, { useState } from 'react'
import "./style.css";
import Menu  from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import Footer from './Footer';


const uniqlist = [...new Set(Menu.map((curEle)=>{
    
  return curEle.category;

})),"ALL"
]
// console.log(uniqlist);


const Resturant = () => {
  const[menuData,setmenuData]=useState(Menu)
  const[uniqupdatedlist,setmenuList]=useState(uniqlist)
  //console.log(menuData);

  const filterItem=(category)=>{
    if(category==="ALL")
    {
      setmenuData(Menu)
      return;
    }
    const updatedlist = Menu.filter((curEle)=>{

      return curEle.category === category;
    } )
    setmenuData(updatedlist);


  }

  return (
    <><div>
      <Navbar filterItem={filterItem} menuList={uniqupdatedlist} />
     
      </div>
      
     <MenuCard mmenuData={menuData}/>
     <Footer></Footer>
    </>
  )
}

export default Resturant
