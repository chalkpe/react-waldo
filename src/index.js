import 'typeface-noto-sans'
import 'typeface-nanum-square'
import 'bulma/css/bulma.css'

import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'

import App from './components/App'
import TranslationModel from './models/TranslationModel'

const model = new TranslationModel()

render(
  <Provider model={model}><App /></Provider>,
  document.getElementById('app')
)
