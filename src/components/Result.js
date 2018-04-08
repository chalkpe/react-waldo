import './Result.css'

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { langNames } from '../api/langs'

@inject('model') @observer
class Result extends Component {
  render () {
    const { model } = this.props
    if (!model.sentences.length) return null

    const boxClassNames = `
      box
      result__text
      ${model.status === 'pending' && 'has-text-grey-lighter'}
    `

    return [
      <section className="section">
        <h3 className="title is-3">결과</h3>
        <p className={boxClassNames}>{model.text}&nbsp;</p>
      </section>,

      <section className="section">
        <h3 className="title is-3">번역 과정</h3>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>원래 문장</th>
              <th>언어</th>
              <th>번역된 문장</th>
              <th>다시 한국어로 번역한 문장</th>
            </tr>
          </thead>
          <tbody>
            {model.sentences.map(s => <tr key={s.token}>
              <td>{s.token}</td>
              <td>{langNames[s.language]}</td>
              <td>{s.translated}</td>
              <td>{s.restored}</td>
            </tr>)}
          </tbody>
        </table>
      </section>
    ]
  }
}

export default Result
