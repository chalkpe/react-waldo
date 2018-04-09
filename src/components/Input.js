import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('model') @observer
class Input extends Component {
  render () {
    const { model } = this.props

    return [
      <div className="field" key="text">
        <textarea
          className="textarea"
          placeholder="번역할 문장을 입력하세요!"
          value={model.plain}
          onChange={this.onTextChange}
        />
      </div>,

      <div className="field" key="button">
        <button
          className={'button is-primary' + (model.status === 'pending' ? ' is-loading' : '')}
          disabled={model.status === 'pending'}
          onClick={() => model.computeWaldo()}>
          번역하기
        </button>
      </div>
    ]
  }

  onTextChange = e => {
    this.props.model.plain = e.target.value
  }
}

export default Input
