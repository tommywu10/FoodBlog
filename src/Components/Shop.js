import React, {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'

import url from '../shopData'

export default function Shop(){
    const [shopData, setShopData] = useState([])

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setShopData(data))
    }, [])

    return(
        <div>
            <Header />
            {/* {shopData.map((item, index) => {
                <p>{item.chicken}</p>
            })} */}
            <Footer />
        </div>
    )
}