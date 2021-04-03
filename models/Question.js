
import { Model } from '@vuex-orm/core'

export default class Question extends Model {
  static entity = 'Question'

  static fields () {
    return {
      id: this.attr(null),
      slug: this.attr('')
    }
  }
}
