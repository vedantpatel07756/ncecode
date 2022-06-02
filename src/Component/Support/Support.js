import React,{useState} from 'react';
import './Support.css';
import Affiliate_container from './Affiliate_container';
import AffiliateApi from './AffiliateApi';

const Support = () => {

  const [AffiliateData, setAffiliateData] = useState(AffiliateApi);
  return (
   <>
     <div className="detail_support">
       <img src="./assest/contact vector.webp" alt="" />
       <p>We hope that you love the work of NEW CODING ERA,
       we are planning to come up very interesting thing in upcomming time, we are trying hard to reach our goal.
       For that You can Support us by using our affiliate item OR You can directly help us by donating through our UPI id. 
       <br/>
       <br/>
       Thank you and wish you a happy day.</p>
     </div>


     <div className="affiliate_section">
          <p>Affiliate Links</p>
          <div className="affiliate_part">
              <Affiliate_container  AffiliateData={AffiliateData}/>
              
          </div>
     </div>


     <div className="Donate_section">
      <p>Donote</p>
        <div className="Donote_detail">
          <img src="./assest/QRCODE.webp" alt="" />
          <p>For supporting New Coding Era You can simply scan the Qr Code for UPI Transaction and also you can use our UPI Id.
          <br/>
          <br/>
          newcodingera@borodampay
          </p>
        </div>
       
     </div>
   </>
  )
}

export default Support