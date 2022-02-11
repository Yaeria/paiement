import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Paymentform from "./Paymentform"



const PUBLIC_KEY = "pk_test_51KRhtPGrgbmMX5ojqBjG9qcwQ9s9EYN345KGFZO12YsH80zzIln5gwCLC32uhfb38Bxe1StGKOTlElDIsFhCYA3J00TP1NQh0O"
const stripeTestPromise = loadStripe(PUBLIC_KEY)



export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise} >
                <Paymentform />
        </Elements>    
    )
}