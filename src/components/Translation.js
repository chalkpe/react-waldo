import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Translation extends Component {
  render () {
    const { model } = this.props

    return (<div>
      <section className="section">
        <h1 className="title">Waldo</h1>
        <h2 className="subtitle">입력하신 문장을 왈도체로 만들어 드립니다.</h2>

        <textarea
          className="textarea"
          placeholder="번역할 문장을 입력하세요!"
          value={model.plain}
          onChange={this.onTextChange}
        />
        <br />

        <button
          className={'button is-primary' + (model.status === 'pending' ? ' is-loading' : '')}
          disabled={model.status === 'pending'}
          onClick={() => model.computeWaldo()}>
          번역하기
        </button>
      </section>

      <section className="section">
        <h3 className="title is-3">결과</h3>
        <p className="box">{model.result.text}</p>
      </section>

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
            {model.result.sentences.map(s => <tr key={s.token}>
              <td>{s.token}</td>
              <td>{s.language}</td>
              <td>{s.translated}</td>
              <td>{s.restored}</td>
            </tr>)}
          </tbody>
        </table>
      </section>
    </div>)
  }

  onTextChange = e => {
    this.props.model.plain = e.target.value
  }
}

export default Translation
