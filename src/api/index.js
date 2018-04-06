import axios from 'axios'

const url = 'https://tr.chalk.pe'
const tr = async params => (await axios.get(url, { params })).data.translation

function* chunk (array, min, max = min) {
  const clone = array.slice()
  while (clone.length > 0) {
    const size = min + Math.floor(Math.random() * (1 + max - min))
    yield clone.splice(0, size).join(' ')
  }
}

const langs = ['zh-cn', 'zh-tw', 'es', 'hi', 'ar', 'pt', 'ru', 'ja', 'de', 'fr']

export default async text => {
  const tokens = [...chunk(text.split(' '), 1, 3)]

  const sentences = await Promise.all(tokens.map(async token => {
    const language = langs[Math.floor(Math.random() * langs.length)]
    const translated = await tr({ text: token, source: 'ko', target: language })
    const restored = await tr({ text: translated, source: 'auto', target: 'ko' })
    return { token, language, translated, restored }
  }))

  return {
    tokens,
    sentences,
    text: sentences.map(s => s.restored).join(' ').replace(/~/g, '')
  }
}

// const x = require('./src/api').default
// void x('체포나 구속의 이유, 변호인의 도움을 받을 권리와 자기에게 불리한 진술을 강요당하지 않을 권리가 있음을 고지받지 않고는 누구도 체포나 구속을 당하지 않는다. 체포나 구속을 당한 사람의 가족 등 법률로 정하는 사람에게는 그 이유와 일시·장소를 지체 없이 통지해야 한다.').then(console.log)
