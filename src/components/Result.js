import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { langNames } from '../api/langs'

@inject('model') @observer
class Result extends Component {
  render () {
    const { model } = this.props
    console.log(model)

    return (<table className="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th>원래 문장</th>
          <th>언어</th>
          <th>번역된 문장</th>
          <th>다시 한국어로 번역한 문장</th>
        </tr>
      </thead>
      <tbody>
        {model.result.sentences.map(s => <tr key={s.token}>
          <td>{s.token}</td>
          <td>{langNames[s.language]}</td>
          <td>{s.translated}</td>
          <td>{s.restored}</td>
        </tr>)}
      </tbody>
    </table>)
  }
}

export default Result
