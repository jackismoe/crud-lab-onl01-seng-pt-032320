import React from 'react'
import Restaurant from './Restaurant'

class Restaurants extends React.Component {
  render() {
    const {restaurants, deleteRestaurant} = this.props
    const restaurantList = restaurants.map(restaurant => {
      return(
        <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/>
      )
    })

    return(
      <ul>
        {restaurantList}
      </ul>
    )
  }
}

export default Restaurants