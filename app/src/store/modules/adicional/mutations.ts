import { MutationTree } from 'vuex'
import { IAdicional, IStateAdicional } from '@/interfaces'
import defaultState from '@/store/modules/adicional/defaultState'

const mutations: MutationTree<IStateAdicional> = {
  setAdicional (state, adicional: IAdicional): void {
    if (state.adicionais.length) {
      const index = state.adicionais.findIndex(adc => adc.nome === adicional.nome)

      if (index >= 0) {
        state.adicionais.splice(index, 1)
      } else {
        state.adicionais.push(adicional)
      }
    } else {
      state.adicionais.push(adicional)
    }
  },

  clearAdicionais (state): void {
    Object.assign(state, defaultState())
  }
}

export default mutations
