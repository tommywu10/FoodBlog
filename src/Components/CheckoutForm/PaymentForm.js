import React from 'react'
import {Button, Divider} from '@material-ui/core'
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStrip} from '@stripe/stripe-js'

import Review from './Review.js'

const PaymentForm = ({checkoutToken}) => {
    return (
        <div>
            <Review checkoutToken={checkoutToken}/>
        </div>
    )
}

export default PaymentForm
