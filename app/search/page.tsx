import React from "react"
import Header from "./components/Header"
import SearchSideBar from "./components/SearchSideBar"
import RestaurantCard from "./components/RestaurantCard"

export const metadata = {
  title: "OpenTable | Search",
  description: "Reserve your next party"
}

const Search = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  )
}

export default Search
