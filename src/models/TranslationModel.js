import WaldoAPI from '../api'
import { observable, action, runInAction } from 'mobx'

export default class TranslationModel {
  @observable plain = ''
  @observable waldo = ''
  @observable status = 'done'

  @action
  async computeWaldo () {
    if (!this.plain) return
    this.status = 'pending'

    try {
      const result = await WaldoAPI(await WaldoAPI(this.plain))
      runInAction(() => {
        this.status = 'done'
        this.waldo = result
      })
    } catch (err) {
      console.error(err)
      this.status = 'error'
    }
  }
}
