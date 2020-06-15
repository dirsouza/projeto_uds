import { ActionTree } from 'vuex'
import { IStateSabor, IRootState, ISabor } from '@/interfaces'

const actions: ActionTree<IStateSabor, IRootState> = {
  insertSabor ({ commit }, sabor: ISabor): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        commit('setSabor', sabor)
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default actions
