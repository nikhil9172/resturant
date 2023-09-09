import React from 'react'





function Navbar({filterItem , menuList}) {
  return (
    <>
      <nav className='navbar'>
       <div className='btn-group'>

        {menuList.map((curele)=>{

            return (

                <button className='btn-group__item' onClick={()=>filterItem(curele)}>{curele}</button>
               
               
                )
            })


        }
      
       
       </div>

      </nav>
    </>
  )
}

export default Navbar
