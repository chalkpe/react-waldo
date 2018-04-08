import { api, chunk, format } from '../api'
import { observable, action, computed, runInAction } from 'mobx'

export default class TranslationModel {
  @observable plain = ''
  @observable sentences = []
  @observable status = 'done'

  @computed get text () {
    return format(this.sentences)
  }

  @computed get progress () {
    const done = this.sentences.filter(s => 'restored' in s)
    return (100 * done.length / this.sentences.length) || 0
  }

  @action
  async computeWaldo () {
    if (!this.plain) return
    this.status = 'pending'

    const chunks = Array.from(chunk(this.plain, 1, 3))
    this.sentences = chunks.map(token => ({ token }))

    try {
      const sentences = await api(chunks, waldo =>
        (token, i) => waldo(token).then(s => (this.sentences[i] = s)))

      runInAction(() => {
        this.status = 'done'
        this.sentences = sentences
      })
    } catch (err) {
      console.error(err)
      this.status = 'error'
    }
  }
}
