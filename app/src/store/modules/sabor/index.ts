import { Module } from 'vuex'
import { IStateSabor, IRootState } from '@/interfaces'
import defaultState from '@/store/modules/sabor/defaultState'
import getters from '@/store/modules/sabor/getters'
import mutations from '@/store/modules/sabor/mutations'
import actions from '@/store/modules/sabor/actions'

const state = defaultState()

export const sabor: Module<IStateSabor, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
