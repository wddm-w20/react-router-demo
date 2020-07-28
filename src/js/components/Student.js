import React from "react"
import { Redirect } from "react-router-dom"

const Student = ({data}) => {

  if (data)
    return <h2>{data.name}</h2>
  else
    return <p>That student doesn't exist!</p> // or, throw up a <FourOhFour />
}

export default Student