import '@babel/polyfill'

import React from 'react'
import { render } from 'react-dom'

import Translation from './components/Translation'
import TranslationModel from './models/TranslationModel'

const model = new TranslationModel()

render(
  <div>
    <h1>Waldo</h1>
    <Translation model={model} />
  </div>,
  document.getElementById('app')
)
