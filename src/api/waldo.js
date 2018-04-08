import tr from './translate'
import { langs } from './langs'

export default async token => {
  const language = langs[Math.floor(Math.random() * langs.length)]
  const translated = await tr({ text: token, source: 'ko', target: language })
  const restored = await tr({ text: translated, source: 'auto', target: 'ko' })

  return { token, language, translated, restored }
}
