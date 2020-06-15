import { GetterTree } from 'vuex'
import { INotificacao, IRootState, IStateNotificacao } from '@/interfaces'

const getters: GetterTree<IStateNotificacao, IRootState> = {
  getStartNotificacao (state): boolean {
    return state.start
  },

  getNoficacao (state): INotificacao {
    return state
  }
}

export default getters
