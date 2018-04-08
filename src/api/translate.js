import axios from 'axios'
const url = 'https://tr.chalk.pe'

export default async params => {
  try {
    return (await axios.get(url, { params })).data.translation
  } catch (err) {
    return ''
  }
}
