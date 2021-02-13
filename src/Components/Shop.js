import React, {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'


export default function Shop(){
    const [shopData, setShopData] = useState([])
    
    

    useEffect(() => {
        fetch('http://localhost:3333/chicken')
        .then(response => response.json())
        .then(data => setShopData(data))
        console.log(shopData)
    }, [])

    return(
        <div>
            <Header />

            <div className="shop-widget">
                <h1>shop your favorite chicken</h1>
                <p>Here's all your favorite choices for either cooking, raising, or slaughtering.</p>
                <select>
                    <option>Sort By</option>
                    <option>Highest to lowest price</option>
                    <option>Lowest to highest price</option>
                    <option>Name</option>
                </select>
            </div>


            <div className="shop-container">
                {shopData.map((item, index)=> 
                    <div className="shop-item-card" key={index}>
                        <img src={item.image} alt={item.name}/>
                        <div className="shop-item-card-bottom">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <button>Purchase chicken</button>
                        </div>
                    </div>
                    )
                }
            </div>
            
            <Footer />
        </div>
    )
}