import { Module } from "vuex";
import { IRootState, IStateLoad } from "@/interfaces";
import defaultState from '@/store/modules/load/defaultState'
import getters from '@/store/modules/load/getters'
import mutations from '@/store/modules/load/mutations'
import actions from '@/store/modules/load/actions'

const state = defaultState()

export const load: Module<IStateLoad, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
