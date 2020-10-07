import React from 'react'

export default function RestaurantsCards({item}) {
    const {id, name, description, deliveryTime, logoUrl, address, shipping} = item
    return (
        <div key={id}>
            {name} <br/>
            {description}<br/>
            {deliveryTime}<br/>
            {logoUrl}<br/>
            {address}<br/>
            {shipping}
            <hr />                
        </div>
    )
}
