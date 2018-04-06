import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Translation extends Component {
  render () {
    const { model } = this.props

    return (<div>
      <h4>{model.status}</h4>

      <textarea
        value={model.plain}
        onChange={this.onTextChange}
      />

      <button
        disabled={model.status === 'pending'}
        onClick={() => model.computeWaldo()}>
        번역하기
      </button>

      <p>{model.waldo}</p>
    </div>)
  }

  onTextChange = e => {
    const { model } = this.props
    model.plain = e.target.value
  }
}

export default Translation
