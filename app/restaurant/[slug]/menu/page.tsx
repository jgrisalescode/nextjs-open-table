import React from "react"
import RestaurantNavBar from "../components/RestaurantNavBar"
import Menu from "../components/Menu"

const RestaurantMenu = (): JSX.Element => {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  )
}

export default RestaurantMenu
