import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import Input from './Input'
import Result from './Result'
import Progress from './Progress'

@inject('model') @observer
class App extends Component {
  render () {
    const { model } = this.props

    return (<div>
      <Progress />

      <div className="container">
        <section className="section">
          <h1 className="title">Waldo</h1>
          <h2 className="subtitle">입력하신 문장을 왈도체로 만들어 드립니다.</h2>

          <Input />
        </section>

        <section className="section">
          <h3 className="title is-3">결과</h3>
          <p className="box">{model.result.text}</p>
        </section>

        <section className="section">
          <h3 className="title is-3">번역 과정</h3>
          <Result />
        </section>
      </div>
    </div>)
  }
}

export default App
