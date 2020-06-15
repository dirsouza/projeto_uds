import { GetterTree } from 'vuex'
import { IStateProduto, IRootState, IProduto } from '@/interfaces'

const getters: GetterTree<IStateProduto, IRootState> = {
  getProduto (state): IProduto {
    return state
  }
}

export default getters
