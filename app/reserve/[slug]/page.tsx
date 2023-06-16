import React from "react"
import Header from "./components/Header"
import Form from "./Form"

export const metadata = {
  title: "Milestones Grill (Toronto) | Reserve",
  description: "Best food of Canada"
}

const Reservation = (): JSX.Element => {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  )
}

export default Reservation
