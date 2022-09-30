import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout';



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
this is the payment page
<StripeCheckout stripeKey="pk_test_51LnnpKSIAkwIAq1iR1Ai7KjFpkr9t7N8edPuAeiq1kdCqQWsxupmA59cyKgswNgkgJLDXoysDYbXa7yFazCK3qwH00pwg7Lb26"
token={makePayment}
name="BuyProduct">
<button>
    buy the product
</button>
</StripeCheckout>
</div>
    )
    
}
export default Info;
