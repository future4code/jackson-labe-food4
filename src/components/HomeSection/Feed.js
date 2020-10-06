import React from "react";
import useRequestData from '../../services/useRequestData'
import RestaurantsCards from './RestaurantsCards'

const Feed = () => {

  const getRestaurant = useRequestData([], '/restaurants')

  const renderCards = () => {
    getRestaurant.map((item) => {
      return (
        <RestaurantsCards
          key={item.id}
          name={item.name}
          deliveryTime={item.deliveryTime}
          address={item.address}
          category={item.category}
          shipping={item.shipping}
          description={item.description}
          logoUrl={item.logo}
        />
      )
    })
  }

  return(

    <div>
    {renderCards}
    test
    </div>

    

  )
}

export default Feed
