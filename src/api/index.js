import chunk from './chunk'
import waldo from './waldo'
import format from './format'

export default async (text, progress = x => x) => {
  const tokens = Array.from(chunk(text, 1, 3))
  const sentences = await Promise.all(tokens.map(progress(waldo)))

  return {
    tokens,
    sentences,
    text: format(sentences)
  }
}
