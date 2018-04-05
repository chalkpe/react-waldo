import translate from 'node-google-translate-skidz'

const ek = { source: 'en', target: 'ko' }
const ke = { source: 'ko', target: 'en' }

async function tr (options) {
  return (await translate(options)).translation
}

function* chunk (array, min, max = min) {
  const clone = array.slice()
  while (clone.length > 0) {
    const size = min + Math.floor(Math.random() * (1 + max - min))
    yield clone.splice(0, size).join(' ')
  }
}

function swap (array) {
  const arr = array.slice()
  const rand = () => 1 + Math.floor(Math.random() * (arr.length - 2))
  if (arr.length >= 4) arr.splice(rand(), 0, ...arr.splice(rand(), 1))
  return arr
}

export default async text => {
  const translation = await tr({ text, ...ke  })
  const words = swap([...chunk(translation.split(' '), 3, 4)])
  const tokens = await Promise.all(words.map(text => tr({ text, ...ek })))

  const waldo = tokens.join(' ').replace(/~/g, '')
  const map = words.map((word, i) => [word, tokens[i]])

  return { translation, words, tokens, map, waldo }
}

// const x = require('./src/api').default
// void x('체포나 구속의 이유, 변호인의 도움을 받을 권리와 자기에게 불리한 진술을 강요당하지 않을 권리가 있음을 고지받지 않고는 누구도 체포나 구속을 당하지 않는다. 체포나 구속을 당한 사람의 가족 등 법률로 정하는 사람에게는 그 이유와 일시·장소를 지체 없이 통지해야 한다.').then(console.log)
