import './Progress.css'

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('model') @observer
class Progress extends Component {
  render () {
    const { model } = this.props
    return (<div className="Progress" style={{
      width: model.progress
    }}/>)
  }
}

export default Progress
