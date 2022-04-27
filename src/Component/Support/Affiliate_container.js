import React from 'react'

const Affiliate_container = ({AffiliateData}) => {


  return (
    <>
      {AffiliateData.map(()=>{
          return(
            <>
            <div className="affiliate_container">
                <img src="./assest/laptop.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nam atque quae illo reprehenderit magnam.</p>
                <button>Buy</button>
           </div>

            </>
          );

      })}


        
    </>
  )
}

export default Affiliate_container