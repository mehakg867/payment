import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";



function Info(){


    const [product,setProduct] = useState({
        name: "React from FB",
        price: 10,
        productBy: "facebook"
    });
    
    const makePayment = token =>{
        const body = {
            token,product
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch('http://localhost:8282/payment',{
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response =>{
            console.log("RESPONSE",response);
        })
        .catch(error => console.log(error));
    }



    return(
       
<div>
    <br></br>
{/* <PricingTable highlightColor="#1976D2">
      <PricingSlot buttonText="TRY IT FREE" title="FREE" priceText="$0/month">
        <PricingDetail> Watch Free Content </PricingDetail>
        <PricingDetail> Hundreds of Episodes from our Library</PricingDetail>
        <PricingDetail> Hundres of Short Form Pieces</PricingDetail>
      </PricingSlot>
      <PricingSlot buttonText="TRY IT FREE" title="Prime" priceText="$4/month">
        <PricingDetail> Everything in FREE + </PricingDetail>
        <PricingDetail> Ad Free Viewing Experience </PricingDetail>
        <PricingDetail> Watch Latest Episodes from shows on TV</PricingDetail>
        <PricingDetail>
          {" "}
          Our entire library of Episodes, Specials, Documentaries and Movies
        </PricingDetail>
        <PricingDetail> </PricingDetail>
      </PricingSlot>
      <PricingSlot buttonText="TRY IT FREE" title="VIP" priceText="$6/month">
        <PricingDetail> Everything in Prime + </PricingDetail>
        <PricingDetail> Watch Premium Content from Vault </PricingDetail>
        <PricingDetail>
          {" "}
          Watch Exclusive Behind the Scenes + other Bonus Content
        </PricingDetail>
      </PricingSlot>
      <PricingSlot buttonText="TRY IT FREE" title="FREE" priceText="$0/month">
        <PricingDetail> Watch Free Content </PricingDetail>
        <PricingDetail> Hundreds of Episodes from our Library</PricingDetail>
        <PricingDetail> Hundres of Short Form Pieces</PricingDetail>
      </PricingSlot>
    </PricingTable> */}
    
{/* this is the payment page
<StripeCheckout stripeKey="pk_test_51LnnpKSIAkwIAq1iR1Ai7KjFpkr9t7N8edPuAeiq1kdCqQWsxupmA59cyKgswNgkgJLDXoysDYbXa7yFazCK3qwH00pwg7Lb26"
token={makePayment}
name="BuyProduct">
<button>
    buy the product
</button>
</StripeCheckout> */}
<a href="https://billing.stripe.com/p/login/test_14k00o4md65u0Rq7ss">Go to user DashBoard</a>
 <stripe-pricing-table pricing-table-id="prctbl_1Lo3VTSIAkwIAq1iCnrdx0Zp"
    publishable-key="pk_test_51LnnpKSIAkwIAq1iR1Ai7KjFpkr9t7N8edPuAeiq1kdCqQWsxupmA59cyKgswNgkgJLDXoysDYbXa7yFazCK3qwH00pwg7Lb26">
    </stripe-pricing-table>
</div>

    );
    
}
export default Info;
