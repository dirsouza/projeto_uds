import { MutationTree } from 'vuex'
import { IProduto, IStateProduto } from '@/interfaces'
import defaultState from '@/store/modules/produto/defaultState'

const mutations: MutationTree<IStateProduto> = {
  setProduto (state, produto: IProduto): void {
    Object.assign(state, produto)
  },

  clearProduto (state): void {
    Object.assign(state, defaultState())
  }
}

export default mutations
