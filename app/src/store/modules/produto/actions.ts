import { ActionTree } from 'vuex'
import { IStateProduto, IRootState, IProduto } from '@/interfaces'

const actions: ActionTree<IStateProduto, IRootState> = {
  insertProduto ({ commit }, produto: IProduto): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        commit('setProduto', produto)
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default actions
