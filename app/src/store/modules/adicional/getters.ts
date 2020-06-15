import { GetterTree } from 'vuex'
import { IStateAdicional, IRootState, IAdicional } from '@/interfaces'

const getters: GetterTree<IStateAdicional, IRootState> = {
  getAdicionais (state): IAdicional[] {
    return state.adicionais
  }
}

export default getters
