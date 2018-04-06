import '@babel/polyfill'
import 'bulma/css/bulma.css'

import React from 'react'
import { render } from 'react-dom'

import Translation from './components/Translation'
import TranslationModel from './models/TranslationModel'

const model = new TranslationModel()

render(
  <div className="container">
    <Translation model={model} />
  </div>,
  document.getElementById('app')
)
