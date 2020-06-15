import { ActionTree } from 'vuex'
import { IStateNotificacao, IRootState, INotificacao } from '@/interfaces'

const actions: ActionTree<IStateNotificacao, IRootState> = {
  insertNotificacao ({ commit }, notificacao: INotificacao): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        commit('setNotificacao', notificacao)
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default actions
