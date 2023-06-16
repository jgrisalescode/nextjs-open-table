import React from "react"
import RestaurantNavBar from "../components/RestaurantNavBar"
import Menu from "../components/Menu"

export const metadata = {
  title: "Milestones Grill (Toronto) | Menu",
  description: "Best food of Canada"
}

const RestaurantMenu = (): JSX.Element => {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  )
}

export default RestaurantMenu
