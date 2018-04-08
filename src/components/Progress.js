import './Progress.css'

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('model') @observer
class Progress extends Component {
  render () {
    const { model } = this.props
    return (<div className="progress" style={{
      width: (model.progress + '%'),
      display: model.status !== 'pending' && 'none'
    }}/>)
  }
}

export default Progress
