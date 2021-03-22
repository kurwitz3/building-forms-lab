
import React, { Component } from 'react'



class BandInput extends Component {
  state={
    name:''
  }


handleChange = event => {
  this.setState({
    name: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  this.props.addBand(this.state)
  this.setState({
    name:''
  })
}

  render() {
    return(
      <div>
       <form  onSubmit={(e) => this.handleSubmit(e)}>
         <input onChange={(e) => this.handleChange(e)} type="text"></input>
         <button type="submit"></button>
       </form>
      </div>
    )
  }
}




export default BandInput
