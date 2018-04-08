import waldo from './waldo'
export default async (tokens, p = x => x) => Promise.all(tokens.map(p(waldo)))
