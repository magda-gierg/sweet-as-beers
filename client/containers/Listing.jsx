import React from 'react'
import {connect} from 'react-redux'
import BeerList from '../components/BeerList'

const Listing =({beers}) => {
  return <BeerList beers = {beers} />
}

function mapStateToProps(state) {
  return(
    beers: state.beers
  )
}

export default connect(mapStateToProps)(Listing)
