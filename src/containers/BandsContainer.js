import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {



  render() {
    return(
      <div><ul>
        {this.props.bands.map(band =>{
          return <li>{band.name}</li>
        })}
      </ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {addBand: (band) => {dispatch({payload: band,type:'ADD_BAND'})}}
}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
