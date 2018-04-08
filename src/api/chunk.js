export default function* chunk (str, min, max = min) {
  const array = str.trim().split(/\s+/)
  while (array.length > 0) {
    const size = min + Math.floor(Math.random() * (1 + max - min))
    yield array.splice(0, size).join(' ')
  }
}
