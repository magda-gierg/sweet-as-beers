import React from 'react'

export default function ({beer}) {
  return (
    <div>
      {beer.name}
      {beer.brewery}
      {beer.country}
    </div>
  )
}
