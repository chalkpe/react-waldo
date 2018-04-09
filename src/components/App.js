import './App.css'

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import Input from './Input'
import Result from './Result'
import Footer from './Footer'
import Progress from './Progress'

@inject('model') @observer
class App extends Component {
  render () {
    const { model } = this.props

    return [
      <Progress key="progress" />,

      <main key="main">
        <div className="container">
          <section className="section">
            <h1 className="title">Waldo</h1>
            <h2 className="subtitle">입력하신 문장을 왈도체로 만들어 드립니다.</h2>
            <Input />
          </section>
          <Result />
        </div>
      </main>,

      <Footer key="footer"/>
    ]
  }
}

export default App
