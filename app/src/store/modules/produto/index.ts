import { Module } from 'vuex'
import { IStateProduto, IRootState } from '@/interfaces'
import defaultState from '@/store/modules/produto/defaultState'
import getters from '@/store/modules/produto/getters'
import mutations from '@/store/modules/produto/mutations'
import actions from '@/store/modules/produto/actions'

const state = defaultState()

export const produto: Module<IStateProduto, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
