import React from 'react'

const Affiliate_container = ({AffiliateData}) => {


  return (
    <>
      {AffiliateData.map((curElem)=>{
          return(
            <>
            <div className="affiliate_container" key={curElem.id}>
            
                <img src={curElem.img} alt="" />
                <p>{curElem.Detail}</p>
                <a href={curElem.link} target={'blank'}><button>Buy</button></a>
            
           </div>

            </>
          );

      })}


        
    </>
  )
}

export default Affiliate_container