import { MutationTree } from 'vuex'
import { INotificacao, IStateNotificacao } from '@/interfaces'

const mutations: MutationTree<IStateNotificacao> = {
  setNotificacao (state, notificacao: INotificacao): void {
    Object.assign(state, notificacao)
  }
}

export default mutations
