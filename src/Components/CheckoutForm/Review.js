import React from 'react'
import {List, ListItem, ListItemText} from '@material-ui/core'

const Review = ({checkoutToken}) => {
    return (
        <div>
            <h3>Order summary</h3>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}></ListItemText>
                        <p>{product.line_total.formatted_with_symbol}</p>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary="Total"></ListItemText>
                    <h3>{checkoutToken.live.subtotal.formatted_with_symbol}</h3>
                </ListItem>
            </List>
        </div>
    )
}

export default Review
