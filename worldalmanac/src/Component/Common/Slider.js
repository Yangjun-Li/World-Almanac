import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class SliderYear extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 1438
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider
          min={1000}
          max={2019}
          tooltip={false}
          value={value}
          onChange={this.handleChange}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default SliderYear;