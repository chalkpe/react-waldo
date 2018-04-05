import { observable, action } from 'mobx'

export default class TranslationModel {
  @observable plain = ''
  @observable waldo = ''

  @action
  async wip () {

  }
}
