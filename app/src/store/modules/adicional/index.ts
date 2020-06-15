import { Module } from 'vuex'
import { IStateAdicional, IRootState } from '@/interfaces'
import defaultState from '@/store/modules/adicional/defaultState'
import getters from '@/store/modules/adicional/getters'
import mutations from '@/store/modules/adicional/mutations'
import actions from '@/store/modules/adicional/actions'

const state = defaultState()

export const adicional: Module<IStateAdicional, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
