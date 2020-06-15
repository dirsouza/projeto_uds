import { GetterTree } from 'vuex'
import { IRootState, IStateLoad } from '@/interfaces'

const getters: GetterTree<IStateLoad, IRootState> = {
  getStartLoad (state): boolean {
    return state.start
  }
}

export default getters
