import { MutationTree } from 'vuex'
import { ISabor, IStateSabor } from '@/interfaces'
import defaultState from '@/store/modules/sabor/defaultState'

const mutations: MutationTree<IStateSabor> = {
  setSabor (state, sabor: ISabor): void {
    Object.assign(state, sabor)
  },

  clearSabor (state): void {
    Object.assign(state, defaultState())
  }
}

export default mutations
