import { ActionTree } from "vuex";
import { ILoad, IRootState, IStateLoad } from "@/interfaces";

const actions: ActionTree<IStateLoad, IRootState> = {
  insertLoad ({ commit }, start: ILoad): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        if (start) {
          commit('setStartLoad', start)
          resolve()
        } else {
          setTimeout(() => {
            commit('setStartLoad', start)
            resolve()
          }, 1000)
        }
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default actions
