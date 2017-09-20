import React from 'react'
import BeerListItem from './BeerListItem'

export default function ({beers}) {
  return (
    <div className='beers'>
        {beers.map((beer, i) => (
          <BeerItem beer={beer} key={i}/>
        ))}
    </div>
  )

}
