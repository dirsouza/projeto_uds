import { Module } from "vuex";
import { IRootState, IStateSacola } from '@/interfaces'
import defaultState from '@/store/modules/sacola/defaultState'
import getters from '@/store/modules/sacola/getters'
import actions from '@/store/modules/sacola/actions'
import mutations from '@/store/modules/sacola/mutations'

const state = defaultState()

export const sacola: Module<IStateSacola, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
