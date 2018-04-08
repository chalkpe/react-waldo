import './Progress.css'

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('model') @observer
class Progress extends Component {
  render () {
    const { model } = this.props
    const styles = {
      width: (model.progress + '%'),
      opacity: Number(model.status === 'pending')
    }
    
    return (<div className="progress" style={styles}/>)
  }
}

export default Progress
