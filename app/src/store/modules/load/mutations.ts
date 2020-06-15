import { MutationTree } from 'vuex'
import { IStateLoad } from '@/interfaces'

const mutations: MutationTree<IStateLoad> = {
  setStartLoad (state, load: boolean): void {
    state.start = load
  }
}

export default mutations
