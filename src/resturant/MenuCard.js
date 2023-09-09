import React from 'react'

const MenuCard = ({mmenuData}) => {

  return (
    <>    
    <section className='main-card--cointainer'>
    
       {mmenuData.map((curEle)=>{
      return(
        <>
<div className="card-container" key={curEle.id}>
        <div className="card">
            <div className="card-body">
                <span className="crad-number card-circle subtle">{curEle.id}</span>
                <span className='card-author subtle' style={{color:"red"}}>{curEle.category }</span>
                <h2 className='card-title'>{curEle.name}</h2>
                <span className='class-description subtle'> {curEle.description} </span>
                <div className='card-read'>Read</div>
                <img src={curEle.image} alt="images" className='card-media' />
                <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>
      </div>
      </>
      )
    })

    }
      
      </section>
      
    </>
  )
}

export default MenuCard
