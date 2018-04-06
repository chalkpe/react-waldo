import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Translation extends Component {
  render () {
    const { model } = this.props

    return (<div>
      <h2>{model.status}</h2>

      <textarea
        value={model.plain}
        onChange={this.onTextChange}
      />

      <button
        disabled={model.status === 'pending'}
        onClick={() => model.computeWaldo()}>
        번역하기
      </button>

      <p>{model.result.text}</p>
      <table>
        <tbody>
          {model.result.sentences.map(s => <tr>
            <td>{s.token}</td>
            <td>{s.language}</td>
            <td>{s.translated}</td>
            <td>{s.restored}</td>
          </tr>)}
        </tbody>
      </table>
    </div>)
  }

  onTextChange = e => {
    this.props.model.plain = e.target.value
  }
}

export default Translation
