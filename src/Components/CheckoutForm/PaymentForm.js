import React from 'react'
import {Button, Divider} from '@material-ui/core'
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

import Review from './Review.js'

const stripePromise = loadStripe('...')

const PaymentForm = ({checkoutToken, backStep}) => {
    return (
        <div>
            <Review checkoutToken={checkoutToken}/>
            <Divider />
            <h6>Payment Method</h6>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <form>
                            <CardElement />
                            <br /><br />
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Button variant="outlined" onClick={backStep}>Back</Button>
                                <Button type="submit" variant="contained" disabled={!stripe}>
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </div>
    )
}

export default PaymentForm
