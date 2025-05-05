import React from 'react'
import { useParams } from 'react-router-dom'
const Productpage = () => {
  const {id} = useParams();
  return (
    <div>
      product {id}
    </div>
  )
}

export default Productpage
