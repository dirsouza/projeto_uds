import { ActionTree } from 'vuex'
import { IStateAdicional, IRootState, IAdicional } from '@/interfaces'

const actions: ActionTree<IStateAdicional, IRootState> = {
  insertAdicional ({ commit }, adicional: IAdicional): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        commit('setAdicional', adicional)
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default actions
